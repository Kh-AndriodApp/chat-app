import { FastifyRequest, FastifyReply } from 'fastify';
import { types } from 'cassandra-driver';
import { CassandraService } from '../services/cassandra.service';
import { MessageType } from '../../database/cassandra/Message';
import { z } from 'zod';

// Validation schemas
const createMessageSchema = z.object({
  chatRoomId: z.string().transform(val => types.Long.fromString(val)),
  chatRoomDocumentId: z.string().uuid().transform(val => types.Uuid.fromString(val)),
  senderId: z.string().uuid().transform(val => types.Uuid.fromString(val)),
  content: z.string().min(1).max(4000),
  messageType: z.nativeEnum(MessageType).default(MessageType.TEXT),
  replyToMessageId: z.string().transform(val => types.Long.fromString(val)).optional(),
  threadId: z.string().transform(val => types.Long.fromString(val)).optional(),
  attachmentIds: z.array(z.string().uuid().transform(val => types.Uuid.fromString(val))).default([]),
  metadata: z.record(z.string()).default({})
});

const getChatMessagesSchema = z.object({
  chatRoomId: z.string().transform(val => types.Long.fromString(val)),
  limit: z.string().transform(val => Math.min(parseInt(val, 10), 100)).default('50'),
  lastMessageId: z.string().transform(val => types.Long.fromString(val)).optional()
});

const getMessageSchema = z.object({
  chatRoomId: z.string().transform(val => types.Long.fromString(val)),
  messageId: z.string().transform(val => types.Long.fromString(val))
});

const updateMessageSchema = z.object({
  content: z.string().min(1).max(4000).optional(),
  isEdited: z.boolean().optional(),
  metadata: z.record(z.string()).optional()
});

export class MessageController {
  private cassandraService: CassandraService;

  constructor() {
    this.cassandraService = CassandraService.getInstance();
  }

  async createMessage(
    request: FastifyRequest<{
      Body: z.infer<typeof createMessageSchema>
    }>,
    reply: FastifyReply
  ) {
    try {
      const validatedData = createMessageSchema.parse(request.body);
      
      const messageData = {
        documentId: types.Uuid.random(),
        chatRoomId: validatedData.chatRoomId,
        chatRoomDocumentId: validatedData.chatRoomDocumentId,
        senderId: validatedData.senderId,
        content: validatedData.content,
        messageType: validatedData.messageType,
        replyToMessageId: validatedData.replyToMessageId,
        threadId: validatedData.threadId,
        reactionSummary: {},
        metadata: validatedData.metadata,
        isEdited: false,
        attachmentIds: validatedData.attachmentIds,
        createdBy: 1, // TODO: Get from auth context
        updatedBy: 1,
        deletedBy: 0,
        createdAt: new Date(),
      };

      const message = await this.cassandraService.createMessage(messageData);

      reply.status(201).send({
        success: true,
        data: {
          id: message.id.toString(),
          documentId: message.documentId.toString(),
          chatRoomId: message.chatRoomId.toString(),
          chatRoomDocumentId: message.chatRoomDocumentId.toString(),
          senderId: message.senderId.toString(),
          content: message.content,
          messageType: message.messageType,
          replyToMessageId: message.replyToMessageId?.toString(),
          threadId: message.threadId?.toString(),
          reactionSummary: message.reactionSummary,
          metadata: message.metadata,
          isEdited: message.isEdited,
          attachmentIds: message.attachmentIds.map(id => id.toString()),
          createdAt: message.createdAt,
          updatedAt: message.updatedAt,
          deletedAt: message.deletedAt
        }
      });
    } catch (error) {
      request.log.error(error);
      reply.status(400).send({
        success: false,
        error: 'Failed to create message'
      });
    }
  }

  async getChatMessages(
    request: FastifyRequest<{
      Params: z.infer<typeof getChatMessagesSchema>
    }>,
    reply: FastifyReply
  ) {
    try {
      const { chatRoomId, limit, lastMessageId } = getChatMessagesSchema.parse(request.params);

      const messages = await this.cassandraService.getMessagesByChatRoom(
        chatRoomId,
        limit,
        lastMessageId
      );

      reply.send({
        success: true,
        data: messages.map(message => ({
          id: message.id.toString(),
          documentId: message.documentId.toString(),
          chatRoomId: message.chatRoomId.toString(),
          chatRoomDocumentId: message.chatRoomDocumentId.toString(),
          senderId: message.senderId.toString(),
          content: message.content,
          messageType: message.messageType,
          replyToMessageId: message.replyToMessageId?.toString(),
          threadId: message.threadId?.toString(),
          reactionSummary: message.reactionSummary,
          metadata: message.metadata,
          isEdited: message.isEdited,
          attachmentIds: message.attachmentIds.map(id => id.toString()),
          createdAt: message.createdAt,
          updatedAt: message.updatedAt,
          deletedAt: message.deletedAt
        })),
        pagination: {
          limit,
          hasMore: messages.length === limit
        }
      });
    } catch (error) {
      request.log.error(error);
      reply.status(400).send({
        success: false,
        error: 'Failed to fetch messages'
      });
    }
  }

  async getMessage(
    request: FastifyRequest<{
      Params: z.infer<typeof getMessageSchema>
    }>,
    reply: FastifyReply
  ) {
    try {
      const { chatRoomId, messageId } = getMessageSchema.parse(request.params);

      const message = await this.cassandraService.getMessage(chatRoomId, messageId);

      if (!message) {
        return reply.status(404).send({
          success: false,
          error: 'Message not found'
        });
      }

      reply.send({
        success: true,
        data: {
          id: message.id.toString(),
          documentId: message.documentId.toString(),
          chatRoomId: message.chatRoomId.toString(),
          chatRoomDocumentId: message.chatRoomDocumentId.toString(),
          senderId: message.senderId.toString(),
          content: message.content,
          messageType: message.messageType,
          replyToMessageId: message.replyToMessageId?.toString(),
          threadId: message.threadId?.toString(),
          reactionSummary: message.reactionSummary,
          metadata: message.metadata,
          isEdited: message.isEdited,
          attachmentIds: message.attachmentIds.map(id => id.toString()),
          createdAt: message.createdAt,
          updatedAt: message.updatedAt,
          deletedAt: message.deletedAt
        }
      });
    } catch (error) {
      request.log.error(error);
      reply.status(400).send({
        success: false,
        error: 'Failed to fetch message'
      });
    }
  }

  async updateMessage(
    request: FastifyRequest<{
      Params: z.infer<typeof getMessageSchema>;
      Body: z.infer<typeof updateMessageSchema>;
    }>,
    reply: FastifyReply
  ) {
    try {
      const { chatRoomId, messageId } = getMessageSchema.parse(request.params);
      const updates = updateMessageSchema.parse(request.body);

      // Check if message exists
      const existingMessage = await this.cassandraService.getMessage(chatRoomId, messageId);
      if (!existingMessage) {
        return reply.status(404).send({
          success: false,
          error: 'Message not found'
        });
      }

      // Add updated timestamp and mark as edited if content changed
      const updateData = {
        ...updates,
        updatedAt: new Date(),
        updatedBy: 1, // TODO: Get from auth context
      };

      if (updates.content && updates.content !== existingMessage.content) {
        updateData.isEdited = true;
      }

      await this.cassandraService.updateMessage(chatRoomId, messageId, updateData);

      reply.send({
        success: true,
        message: 'Message updated successfully'
      });
    } catch (error) {
      request.log.error(error);
      reply.status(400).send({
        success: false,
        error: 'Failed to update message'
      });
    }
  }

  async deleteMessage(
    request: FastifyRequest<{
      Params: z.infer<typeof getMessageSchema>
    }>,
    reply: FastifyReply
  ) {
    try {
      const { chatRoomId, messageId } = getMessageSchema.parse(request.params);

      // Check if message exists
      const existingMessage = await this.cassandraService.getMessage(chatRoomId, messageId);
      if (!existingMessage) {
        return reply.status(404).send({
          success: false,
          error: 'Message not found'
        });
      }

      await this.cassandraService.deleteMessage(chatRoomId, messageId);

      reply.send({
        success: true,
        message: 'Message deleted successfully'
      });
    } catch (error) {
      request.log.error(error);
      reply.status(400).send({
        success: false,
        error: 'Failed to delete message'
      });
    }
  }
}