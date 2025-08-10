import { FastifyInstance } from 'fastify';
import { MessageController } from '../../../controllers/message.controller';
import { z } from 'zod';

const messageController = new MessageController();

// Request/Response schemas for Swagger documentation
const messageResponseSchema = z.object({
  success: z.boolean(),
  data: z.object({
    id: z.string(),
    documentId: z.string(),
    chatRoomId: z.string(),
    chatRoomDocumentId: z.string(),
    senderId: z.string(),
    content: z.string(),
    messageType: z.number(),
    replyToMessageId: z.string().optional(),
    threadId: z.string().optional(),
    reactionSummary: z.record(z.number()),
    metadata: z.record(z.string()),
    isEdited: z.boolean(),
    attachmentIds: z.array(z.string()),
    createdAt: z.date(),
    updatedAt: z.date().optional(),
    deletedAt: z.date().optional()
  }).optional(),
  error: z.string().optional(),
  message: z.string().optional()
});

const messagesListResponseSchema = z.object({
  success: z.boolean(),
  data: z.array(z.object({
    id: z.string(),
    documentId: z.string(),
    chatRoomId: z.string(),
    chatRoomDocumentId: z.string(),
    senderId: z.string(),
    content: z.string(),
    messageType: z.number(),
    replyToMessageId: z.string().optional(),
    threadId: z.string().optional(),
    reactionSummary: z.record(z.number()),
    metadata: z.record(z.string()),
    isEdited: z.boolean(),
    attachmentIds: z.array(z.string()),
    createdAt: z.date(),
    updatedAt: z.date().optional(),
    deletedAt: z.date().optional()
  })).optional(),
  pagination: z.object({
    limit: z.number(),
    hasMore: z.boolean()
  }).optional(),
  error: z.string().optional()
});

const createMessageRequestSchema = z.object({
  chatRoomId: z.string(),
  chatRoomDocumentId: z.string().uuid(),
  senderId: z.string().uuid(),
  content: z.string().min(1).max(4000),
  messageType: z.number().min(1).max(7).default(1),
  replyToMessageId: z.string().optional(),
  threadId: z.string().optional(),
  attachmentIds: z.array(z.string().uuid()).default([]),
  metadata: z.record(z.string()).default({})
});

const updateMessageRequestSchema = z.object({
  content: z.string().min(1).max(4000).optional(),
  isEdited: z.boolean().optional(),
  metadata: z.record(z.string()).optional()
});

export default async function messagesRoutes(fastify: FastifyInstance) {
  // Create a new message
  fastify.post('/chatrooms/:chatRoomId/messages', {
    schema: {
      tags: ['Messages'],
      summary: 'Create a new message in a chat room',
      params: z.object({
        chatRoomId: z.string().describe('Chat room ID')
      }),
      body: createMessageRequestSchema,
      response: {
        201: messageResponseSchema,
        400: z.object({
          success: z.boolean(),
          error: z.string()
        })
      }
    }
  }, async (request, reply) => {
    const controller = new MessageController();
    return await controller.createMessage(request as any, reply);
  });

  // Get messages for a chat room
  fastify.get('/chatrooms/:chatRoomId/messages', {
    schema: {
      tags: ['Messages'],
      summary: 'Get messages for a chat room',
      params: z.object({
        chatRoomId: z.string().describe('Chat room ID')
      }),
      querystring: z.object({
        limit: z.string().optional().describe('Maximum number of messages to return (max 100)'),
        lastMessageId: z.string().optional().describe('ID of the last message for pagination')
      }),
      response: {
        200: messagesListResponseSchema,
        400: z.object({
          success: z.boolean(),
          error: z.string()
        })
      }
    }
  }, async (request, reply) => {
    const controller = new MessageController();
    return await controller.getChatMessages(request as any, reply);
  });

  // Get a specific message
  fastify.get('/chatrooms/:chatRoomId/messages/:messageId', {
    schema: {
      tags: ['Messages'],
      summary: 'Get a specific message',
      params: z.object({
        chatRoomId: z.string().describe('Chat room ID'),
        messageId: z.string().describe('Message ID')
      }),
      response: {
        200: messageResponseSchema,
        404: z.object({
          success: z.boolean(),
          error: z.string()
        }),
        400: z.object({
          success: z.boolean(),
          error: z.string()
        })
      }
    }
  }, async (request, reply) => {
    const controller = new MessageController();
    return await controller.getMessage(request as any, reply);
  });

  // Update a message
  fastify.patch('/chatrooms/:chatRoomId/messages/:messageId', {
    schema: {
      tags: ['Messages'],
      summary: 'Update a message',
      params: z.object({
        chatRoomId: z.string().describe('Chat room ID'),
        messageId: z.string().describe('Message ID')
      }),
      body: updateMessageRequestSchema,
      response: {
        200: z.object({
          success: z.boolean(),
          message: z.string()
        }),
        404: z.object({
          success: z.boolean(),
          error: z.string()
        }),
        400: z.object({
          success: z.boolean(),
          error: z.string()
        })
      }
    }
  }, async (request, reply) => {
    const controller = new MessageController();
    return await controller.updateMessage(request as any, reply);
  });

  // Delete a message
  fastify.delete('/chatrooms/:chatRoomId/messages/:messageId', {
    schema: {
      tags: ['Messages'],
      summary: 'Delete a message',
      params: z.object({
        chatRoomId: z.string().describe('Chat room ID'),
        messageId: z.string().describe('Message ID')
      }),
      response: {
        200: z.object({
          success: z.boolean(),
          message: z.string()
        }),
        404: z.object({
          success: z.boolean(),
          error: z.string()
        }),
        400: z.object({
          success: z.boolean(),
          error: z.string()
        })
      }
    }
  }, async (request, reply) => {
    const controller = new MessageController();
    return await controller.deleteMessage(request as any, reply);
  });
}