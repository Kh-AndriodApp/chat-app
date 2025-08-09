import { FastifyRequest, FastifyReply } from 'fastify';
import { authService } from '../services/auth.service';
import {
  RegisterRequest,
  LoginRequest,
  RefreshTokenRequest,
  ChangePasswordRequest,
  PasswordResetRequestRequest,
  PasswordResetRequest,
  LogoutRequest,
  UpdateProfileRequest,
  UpdateUserSettingsRequest,
} from '@chat-app/validators/auth.schemas';


class AuthController {
  async register(request: FastifyRequest<{ Body: RegisterRequest }>, reply: FastifyReply) {
    try {
      const data = request.body;
      const result = await authService.register(data);

      return reply.status(201).send({
        success: true,
        message: 'User registered successfully',
        data: {
          user: result.user,
          accessToken: result.tokens.accessToken,
          refreshToken: result.tokens.refreshToken,
          expiresAt: result.tokens.expiresAt,
        },
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Registration failed';
      
      if (message.includes('already exists')) {
        return reply.status(409).send({
          success: false,
          message,
        });
      }

      return reply.status(400).send({
        success: false,
        message,
      });
    }
  }

  async login(request: FastifyRequest<{ Body: LoginRequest }>, reply: FastifyReply) {
    try {
      const data = request.body;
      
      // Extract request metadata
      const loginCredentials = {
        ...data,
        userAgent: request.headers['user-agent'],
        ipAddress: request.ip,
      };

      const result = await authService.login(loginCredentials);

      return reply.status(200).send({
        success: true,
        message: 'Login successful',
        data: {
          user: result.user,
          accessToken: result.tokens.accessToken,
          refreshToken: result.tokens.refreshToken,
          expiresAt: result.tokens.expiresAt,
        },
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Login failed';
      
      if (message.includes('Invalid credentials')) {
        return reply.status(401).send({
          success: false,
          message: 'Invalid email/phone/username or password',
        });
      }

      if (message.includes('deactivated')) {
        return reply.status(403).send({
          success: false,
          message,
        });
      }

      return reply.status(400).send({
        success: false,
        message,
      });
    }
  }

  async refreshToken(request: FastifyRequest<{ Body: RefreshTokenRequest }>, reply: FastifyReply) {
    try {
      const { refreshToken } = request.body;
      const result = await authService.refreshTokens(refreshToken);

      return reply.status(200).send({
        success: true,
        message: 'Tokens refreshed successfully',
        data: {
          user: result.user,
          accessToken: result.tokens.accessToken,
          refreshToken: result.tokens.refreshToken,
          expiresAt: result.tokens.expiresAt,
        },
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Token refresh failed';
      
      return reply.status(401).send({
        success: false,
        message: message.includes('Invalid') ? 'Invalid or expired refresh token' : message,
      });
    }
  }

  async logout(request:  FastifyRequest<{ Body: LogoutRequest }>, reply: FastifyReply) {
    try {
      const data = request.body;
      const sessionToken = data.sessionToken || request.headers.authorization?.replace('Bearer ', '');

      if (!sessionToken) {
        return reply.status(400).send({
          success: false,
          message: 'Session token is required',
        });
      }

      await authService.logout(sessionToken);

      return reply.status(200).send({
        success: true,
        message: 'Logged out successfully',
      });
    } catch (error) {
      return reply.status(400).send({
        success: false,
        message: 'Logout failed',
      });
    }
  }

  async logoutAll(request: FastifyRequest, reply: FastifyReply) {
    try {
      if (!request.user) {
        return reply.status(401).send({
          success: false,
          message: 'Authentication required',
        });
      }

      await authService.logoutAll(request.user.documentId);

      return reply.status(200).send({
        success: true,
        message: 'Logged out from all devices successfully',
      });
    } catch (error) {
      return reply.status(400).send({
        success: false,
        message: 'Logout from all devices failed',
      });
    }
  }

  async changePassword(request: FastifyRequest<{ Body: ChangePasswordRequest }>, reply: FastifyReply) {
    try {
      if (!request.user) {
        return reply.status(401).send({
          success: false,
          message: 'Authentication required',
        });
      }

      const { oldPassword, newPassword } = request.body;
      await authService.changePassword(request.user.documentId, oldPassword, newPassword);

      return reply.status(200).send({
        success: true,
        message: 'Password changed successfully. You have been logged out from all devices.',
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Password change failed';
      
      if (message.includes('incorrect')) {
        return reply.status(400).send({
          success: false,
          message: 'Current password is incorrect',
        });
      }

      return reply.status(400).send({
        success: false,
        message,
      });
    }
  }

  async requestPasswordReset(request: FastifyRequest<{ Body: PasswordResetRequestRequest }>, reply: FastifyReply) {
    try {
      const { identifier } = request.body;
      const message = await authService.requestPasswordReset(identifier);

      return reply.status(200).send({
        success: true,
        message,
      });
    } catch (error) {
      return reply.status(400).send({
        success: false,
        message: 'Password reset request failed',
      });
    }
  }

  async resetPassword(request: FastifyRequest<{ Body: PasswordResetRequest }>, reply: FastifyReply) {
    try {
      const { resetToken, newPassword } = request.body;
      await authService.resetPassword(resetToken, newPassword);

      return reply.status(200).send({
        success: true,
        message: 'Password reset successfully',
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Password reset failed';
      
      return reply.status(400).send({
        success: false,
        message: message.includes('Invalid') ? 'Invalid or expired reset token' : message,
      });
    }
  }

  async getCurrentUser(request: FastifyRequest, reply: FastifyReply) {
    try {
      if (!request.user) {
        return reply.status(401).send({
          success: false,
          message: 'Authentication required',
        });
      }

      return reply.status(200).send({
        success: true,
        message: 'User retrieved successfully',
        data: {
          user: request.user,
        },
      });
    } catch (error) {
      return reply.status(400).send({
        success: false,
        message: 'Failed to retrieve user information',
      });
    }
  }

  async updateProfile(request: FastifyRequest<{ Body: UpdateProfileRequest }>, reply: FastifyReply) {
    try {
      if (!request.user) {
        return reply.status(401).send({
          success: false,
          message: 'Authentication required',
        });
      }

      const data = request.body;
      
      // Import prisma here to avoid circular dependencies
      const { prisma } = await import('../models/postgres');
      
      const updatedUser = await prisma.user.update({
        where: { documentId: request.user.documentId },
        data: {
          ...data,
          updatedAt: new Date(),
          updatedBy: request.user.id,
        },
      });

      const { password, ...sanitizedUser } = updatedUser;

      return reply.status(200).send({
        success: true,
        message: 'Profile updated successfully',
        data: {
          user: sanitizedUser,
        },
      });
    } catch (error) {
      return reply.status(400).send({
        success: false,
        message: 'Profile update failed',
      });
    }
  }

  async updateSettings(request: FastifyRequest<{ Body: UpdateUserSettingsRequest }>, reply: FastifyReply) {
    try {
      if (!request.user) {
        return reply.status(401).send({
          success: false,
          message: 'Authentication required',
        });
      }

      const data = request.body;
      
      // Import prisma here to avoid circular dependencies
      const { prisma } = await import('../models/postgres');
      
      const updatedUser = await prisma.user.update({
        where: { documentId: request.user.documentId },
        data: {
          ...data,
          updatedAt: new Date(),
          updatedBy: request.user.id,
        },
      });

      const { password, ...sanitizedUser } = updatedUser;

      return reply.status(200).send({
        success: true,
        message: 'Settings updated successfully',
        data: {
          user: sanitizedUser,
        },
      });
    } catch (error) {
      return reply.status(400).send({
        success: false,
        message: 'Settings update failed',
      });
    }
  }
}

export const authController = new AuthController();