import { types } from 'cassandra-driver';

export enum MessageType {
  TEXT = 1,
  IMAGE = 2,
  VIDEO = 3,
  AUDIO = 4,
  FILE = 5,
  LOCATION = 6,
  SYSTEM = 7,
}

export interface MessageModel {
  id: types.Long;
  documentId: types.Uuid;
  chatRoomId: types.Long;
  chatRoomDocumentId: types.Uuid;
  senderId: types.Uuid;
  content: string;
  messageType: MessageType;
  replyToMessageId?: types.Long;
  threadId?: types.Long;
  reactionSummary: { [key: string]: number };
  metadata: { [key: string]: string };
  isEdited: boolean;
  attachmentIds: types.Uuid[];
  
  // Audit fields
  createdBy: number;
  updatedBy: number;
  deletedBy: number;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export const MessageTable = {
  name: 'messages',
  columns: [
    'id',
    'document_id',
    'chat_room_id',
    'chat_room_document_id',
    'sender_id',
    'content',
    'message_type',
    'reply_to_message_id',
    'thread_id',
    'reaction_summary',
    'metadata',
    'is_edited',
    'attachment_ids',
    'created_by',
    'updated_by',
    'deleted_by',
    'created_at',
    'updated_at',
    'deleted_at',
  ] as const,
  primaryKey: ['chat_room_id', 'id'],
  partitionKey: ['chat_room_id'],
  clusteringKey: ['id'],
  clusteringOrder: 'DESC',
};

export const createMessageTableCQL = `
CREATE TABLE IF NOT EXISTS ${MessageTable.name} (
  id bigint,
  document_id uuid,
  chat_room_id bigint,
  chat_room_document_id uuid,
  sender_id uuid,
  content text,
  message_type int,
  reply_to_message_id bigint,
  thread_id bigint,
  reaction_summary map<text, int>,
  metadata map<text, text>,
  is_edited boolean,
  attachment_ids list<uuid>,
  created_by int,
  updated_by int,
  deleted_by int,
  created_at timestamp,
  updated_at timestamp,
  deleted_at timestamp,
  PRIMARY KEY (chat_room_id, id)
) WITH CLUSTERING ORDER BY (id DESC);
`;