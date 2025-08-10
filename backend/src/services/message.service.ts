import { types } from 'cassandra-driver';
import CassandraConnection from '../config/database/cassandra';
import { MessageModel, UserPresenceModel } from '../database/cassandra';

export class CassandraService {
  private static instance: CassandraService;
  
  static getInstance(): CassandraService {
    if (!this.instance) {
      this.instance = new CassandraService();
    }
    return this.instance;
  }

  // Message operations
  async createMessage(messageData: Omit<MessageModel, 'id'>): Promise<MessageModel> {
    const client = await CassandraConnection.getInstance();
    
    const id = types.Long.fromNumber(Date.now());
    const query = `
      INSERT INTO messages (
        id, document_id, chat_room_id, chat_room_document_id, sender_id,
        content, message_type, reply_to_message_id, thread_id, reaction_summary,
        metadata, is_edited, attachment_ids, created_by, updated_by, deleted_by,
        created_at, updated_at, deleted_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const params = [
      id,
      messageData.documentId,
      messageData.chatRoomId,
      messageData.chatRoomDocumentId,
      messageData.senderId,
      messageData.content,
      messageData.messageType,
      messageData.replyToMessageId || null,
      messageData.threadId || null,
      messageData.reactionSummary,
      messageData.metadata,
      messageData.isEdited,
      messageData.attachmentIds,
      messageData.createdBy,
      messageData.updatedBy,
      messageData.deletedBy,
      messageData.createdAt,
      messageData.updatedAt || null,
      messageData.deletedAt || null
    ];

    await client.execute(query, params);
    
    return { ...messageData, id };
  }

  async getMessagesByChatRoom(
    chatRoomId: types.Long, 
    limit: number = 50, 
    lastMessageId?: types.Long
  ): Promise<MessageModel[]> {
    const client = await CassandraConnection.getInstance();
    
    let query = `
      SELECT * FROM messages 
      WHERE chat_room_id = ?
    `;
    const params: any[] = [chatRoomId];

    if (lastMessageId) {
      query += ` AND id < ?`;
      params.push(lastMessageId);
    }

    query += ` ORDER BY id DESC LIMIT ?`;
    params.push(limit);

    const result = await client.execute(query, params);
    return result.rows.map(this.mapRowToMessage);
  }

  async getMessage(chatRoomId: types.Long, messageId: types.Long): Promise<MessageModel | null> {
    const client = await CassandraConnection.getInstance();
    
    const query = `
      SELECT * FROM messages 
      WHERE chat_room_id = ? AND id = ?
    `;

    const result = await client.execute(query, [chatRoomId, messageId]);
    
    if (result.rows.length === 0) {
      return null;
    }

    return this.mapRowToMessage(result.rows[0]);
  }

  async updateMessage(
    chatRoomId: types.Long, 
    messageId: types.Long, 
    updates: Partial<MessageModel>
  ): Promise<void> {
    const client = await CassandraConnection.getInstance();
    
    const setClauses: string[] = [];
    const params: any[] = [];

    Object.entries(updates).forEach(([key, value]) => {
      if (value !== undefined && key !== 'id' && key !== 'chatRoomId') {
        const columnName = this.camelToSnakeCase(key);
        setClauses.push(`${columnName} = ?`);
        params.push(value);
      }
    });

    if (setClauses.length === 0) return;

    params.push(chatRoomId, messageId);

    const query = `
      UPDATE messages 
      SET ${setClauses.join(', ')}
      WHERE chat_room_id = ? AND id = ?
    `;

    await client.execute(query, params);
  }

  async deleteMessage(chatRoomId: types.Long, messageId: types.Long): Promise<void> {
    const client = await CassandraConnection.getInstance();
    
    const query = `
      DELETE FROM messages 
      WHERE chat_room_id = ? AND id = ?
    `;

    await client.execute(query, [chatRoomId, messageId]);
  }

  // User Presence operations
  async updateUserPresence(presenceData: UserPresenceModel): Promise<void> {
    const client = await CassandraConnection.getInstance();
    
    const query = `
      INSERT INTO user_presence (
        user_id, status, last_seen, device_type, device_id,
        is_typing, typing_in_chat_room, custom_status, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const params = [
      presenceData.userId,
      presenceData.status,
      presenceData.lastSeen,
      presenceData.deviceType || null,
      presenceData.deviceId || null,
      presenceData.isTyping,
      presenceData.typingInChatRoom || null,
      presenceData.customStatus || null,
      presenceData.updatedAt
    ];

    await client.execute(query, params);
  }

  async getUserPresence(userId: types.Uuid): Promise<UserPresenceModel | null> {
    const client = await CassandraConnection.getInstance();
    
    const query = `
      SELECT * FROM user_presence 
      WHERE user_id = ?
    `;

    const result = await client.execute(query, [userId]);
    
    if (result.rows.length === 0) {
      return null;
    }

    return this.mapRowToUserPresence(result.rows[0]);
  }

  async getMultipleUserPresences(userIds: types.Uuid[]): Promise<UserPresenceModel[]> {
    const client = await CassandraConnection.getInstance();
    
    const query = `
      SELECT * FROM user_presence 
      WHERE user_id IN ?
    `;

    const result = await client.execute(query, [userIds]);
    return result.rows.map(this.mapRowToUserPresence);
  }

  // Typing indicator operations
  async setTypingIndicator(chatRoomId: types.Uuid, userId: types.Uuid): Promise<void> {
    const client = await CassandraConnection.getInstance();
    
    const query = `
      INSERT INTO typing_indicators (chat_room_id, user_id, started_at)
      VALUES (?, ?, ?) USING TTL 10
    `;

    await client.execute(query, [chatRoomId, userId, new Date()]);
  }

  async getTypingIndicators(chatRoomId: types.Uuid): Promise<types.Uuid[]> {
    const client = await CassandraConnection.getInstance();
    
    const query = `
      SELECT user_id FROM typing_indicators 
      WHERE chat_room_id = ?
    `;

    const result = await client.execute(query, [chatRoomId]);
    return result.rows.map(row => row.user_id);
  }

  async removeTypingIndicator(chatRoomId: types.Uuid, userId: types.Uuid): Promise<void> {
    const client = await CassandraConnection.getInstance();
    
    const query = `
      DELETE FROM typing_indicators 
      WHERE chat_room_id = ? AND user_id = ?
    `;

    await client.execute(query, [chatRoomId, userId]);
  }

  // Utility methods
  private mapRowToMessage(row: any): MessageModel {
    return {
      id: row.id,
      documentId: row.document_id,
      chatRoomId: row.chat_room_id,
      chatRoomDocumentId: row.chat_room_document_id,
      senderId: row.sender_id,
      content: row.content,
      messageType: row.message_type,
      replyToMessageId: row.reply_to_message_id,
      threadId: row.thread_id,
      reactionSummary: row.reaction_summary || {},
      metadata: row.metadata || {},
      isEdited: row.is_edited,
      attachmentIds: row.attachment_ids || [],
      createdBy: row.created_by,
      updatedBy: row.updated_by,
      deletedBy: row.deleted_by,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
      deletedAt: row.deleted_at,
    };
  }

  private mapRowToUserPresence(row: any): UserPresenceModel {
    return {
      userId: row.user_id,
      status: row.status,
      lastSeen: row.last_seen,
      deviceType: row.device_type,
      deviceId: row.device_id,
      isTyping: row.is_typing,
      typingInChatRoom: row.typing_in_chat_room,
      customStatus: row.custom_status,
      updatedAt: row.updated_at,
    };
  }

  private camelToSnakeCase(str: string): string {
    return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
  }

  // Migration helper
  async runMigrations(): Promise<void> {
    const { allCassandraMigrations } = await import('../database/cassandra');
    await CassandraConnection.runMigrations(allCassandraMigrations);
  }
}