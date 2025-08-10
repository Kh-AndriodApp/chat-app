import { FastifyRequest, FastifyReply } from 'fastify';
import { types } from 'cassandra-driver';
import { CassandraService } from '../services/message.service';
import { UserStatus } from '../database/cassandra/UserPresence';
import { z } from 'zod';

// Validation schemas
const updatePresenceSchema = z.object({
  userId: z.string().uuid().transform(val => types.Uuid.fromString(val)),
  status: z.nativeEnum(UserStatus),
  deviceType: z.string().optional(),
  deviceId: z.string().optional(),
  customStatus: z.string().max(100).optional()
});

const getUserPresenceSchema = z.object({
  userId: z.string().uuid().transform(val => types.Uuid.fromString(val))
});

const getMultiplePresencesSchema = z.object({
  userIds: z.array(z.string().uuid()).transform(ids => ids.map(id => types.Uuid.fromString(id)))
});

const typingIndicatorSchema = z.object({
  chatRoomId: z.string().uuid().transform(val => types.Uuid.fromString(val)),
  userId: z.string().uuid().transform(val => types.Uuid.fromString(val))
});

const getChatTypingSchema = z.object({
  chatRoomId: z.string().uuid().transform(val => types.Uuid.fromString(val))
});

export class PresenceController {
  private cassandraService: CassandraService;

  constructor() {
    this.cassandraService = CassandraService.getInstance();
  }

  async updateUserPresence(
    request: FastifyRequest<{
      Body: z.infer<typeof updatePresenceSchema>
    }>,
    reply: FastifyReply
  ) {
    try {
      const validatedData = updatePresenceSchema.parse(request.body);
      
      const presenceData = {
        userId: validatedData.userId,
        status: validatedData.status,
        lastSeen: new Date(),
        deviceType: validatedData.deviceType,
        deviceId: validatedData.deviceId,
        isTyping: false,
        customStatus: validatedData.customStatus,
        updatedAt: new Date()
      };

      await this.cassandraService.updateUserPresence(presenceData);

      reply.send({
        success: true,
        message: 'User presence updated successfully'
      });
    } catch (error) {
      request.log.error(error);
      reply.status(400).send({
        success: false,
        error: 'Failed to update user presence'
      });
    }
  }

  async getUserPresence(
    request: FastifyRequest<{
      Params: z.infer<typeof getUserPresenceSchema>
    }>,
    reply: FastifyReply
  ) {
    try {
      const { userId } = getUserPresenceSchema.parse(request.params);

      const presence = await this.cassandraService.getUserPresence(userId);

      if (!presence) {
        return reply.status(404).send({
          success: false,
          error: 'User presence not found'
        });
      }

      reply.send({
        success: true,
        data: {
          userId: presence.userId.toString(),
          status: presence.status,
          lastSeen: presence.lastSeen,
          deviceType: presence.deviceType,
          deviceId: presence.deviceId,
          isTyping: presence.isTyping,
          typingInChatRoom: presence.typingInChatRoom?.toString(),
          customStatus: presence.customStatus,
          updatedAt: presence.updatedAt
        }
      });
    } catch (error) {
      request.log.error(error);
      reply.status(400).send({
        success: false,
        error: 'Failed to fetch user presence'
      });
    }
  }

  async getMultipleUserPresences(
    request: FastifyRequest<{
      Body: z.infer<typeof getMultiplePresencesSchema>
    }>,
    reply: FastifyReply
  ) {
    try {
      const { userIds } = getMultiplePresencesSchema.parse(request.body);

      const presences = await this.cassandraService.getMultipleUserPresences(userIds);

      reply.send({
        success: true,
        data: presences.map(presence => ({
          userId: presence.userId.toString(),
          status: presence.status,
          lastSeen: presence.lastSeen,
          deviceType: presence.deviceType,
          deviceId: presence.deviceId,
          isTyping: presence.isTyping,
          typingInChatRoom: presence.typingInChatRoom?.toString(),
          customStatus: presence.customStatus,
          updatedAt: presence.updatedAt
        }))
      });
    } catch (error) {
      request.log.error(error);
      reply.status(400).send({
        success: false,
        error: 'Failed to fetch user presences'
      });
    }
  }

  async setTypingIndicator(
    request: FastifyRequest<{
      Body: z.infer<typeof typingIndicatorSchema>
    }>,
    reply: FastifyReply
  ) {
    try {
      const { chatRoomId, userId } = typingIndicatorSchema.parse(request.body);

      await this.cassandraService.setTypingIndicator(chatRoomId, userId);

      reply.send({
        success: true,
        message: 'Typing indicator set successfully'
      });
    } catch (error) {
      request.log.error(error);
      reply.status(400).send({
        success: false,
        error: 'Failed to set typing indicator'
      });
    }
  }

  async removeTypingIndicator(
    request: FastifyRequest<{
      Body: z.infer<typeof typingIndicatorSchema>
    }>,
    reply: FastifyReply
  ) {
    try {
      const { chatRoomId, userId } = typingIndicatorSchema.parse(request.body);

      await this.cassandraService.removeTypingIndicator(chatRoomId, userId);

      reply.send({
        success: true,
        message: 'Typing indicator removed successfully'
      });
    } catch (error) {
      request.log.error(error);
      reply.status(400).send({
        success: false,
        error: 'Failed to remove typing indicator'
      });
    }
  }

  async getChatTypingIndicators(
    request: FastifyRequest<{
      Params: z.infer<typeof getChatTypingSchema>
    }>,
    reply: FastifyReply
  ) {
    try {
      const { chatRoomId } = getChatTypingSchema.parse(request.params);

      const typingUserIds = await this.cassandraService.getTypingIndicators(chatRoomId);

      reply.send({
        success: true,
        data: {
          chatRoomId: chatRoomId.toString(),
          typingUsers: typingUserIds.map(userId => userId.toString())
        }
      });
    } catch (error) {
      request.log.error(error);
      reply.status(400).send({
        success: false,
        error: 'Failed to fetch typing indicators'
      });
    }
  }
}