import { FastifyRequest, FastifyReply } from 'fastify';
import { authService } from '../services/auth.service';
import {
  registerSchema,
  loginSchema,
  refreshTokenSchema,
  changePasswordSchema,
  passwordResetRequestSchema,
  passwordResetSchema,
  logoutSchema,
  updateProfileSchema,
  updateUserSettingsSchema,
  RegisterRequest,
  LoginRequest,
  RefreshTokenRequest,
  ChangePasswordRequest,
  PasswordResetRequestRequest,
  PasswordResetRequest,
  LogoutRequest,
  UpdateProfileRequest,
  UpdateUserSettingsRequest,
} from '../utils/validators/auth.validator';

interface AuthenticatedRequest extends FastifyRequest {
  user?: any;
}

class AuthController {
  async register(request: FastifyRequest, reply: FastifyReply) {
    try {
      const validation = registerSchema.safeParse(request.body);
      if (!validation.success) {
        return reply.status(400).send({
          success: false,
          message: 'Validation failed',
          errors: validation.error.format(),
        });
      }

      const data = validation.data as RegisterRequest;
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

  async login(request: FastifyRequest, reply: FastifyReply) {
    try {
      const validation = loginSchema.safeParse(request.body);
      if (!validation.success) {
        return reply.status(400).send({
          success: false,
          message: 'Validation failed',
          errors: validation.error.format(),
        });
      }

      const data = validation.data as LoginRequest;
      
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

  async refreshToken(request: FastifyRequest, reply: FastifyReply) {
    try {
      const validation = refreshTokenSchema.safeParse(request.body);
      if (!validation.success) {
        return reply.status(400).send({
          success: false,
          message: 'Validation failed',
          errors: validation.error.format(),
        });
      }

      const { refreshToken } = validation.data as RefreshTokenRequest;
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

  async logout(request: AuthenticatedRequest, reply: FastifyReply) {
    try {
      const validation = logoutSchema.safeParse(request.body);
      if (!validation.success) {
        return reply.status(400).send({
          success: false,
          message: 'Validation failed',
          errors: validation.error.format(),
        });
      }

      const data = validation.data as LogoutRequest;
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

  async logoutAll(request: AuthenticatedRequest, reply: FastifyReply) {
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

  async changePassword(request: AuthenticatedRequest, reply: FastifyReply) {
    try {
      if (!request.user) {
        return reply.status(401).send({
          success: false,
          message: 'Authentication required',
        });
      }

      const validation = changePasswordSchema.safeParse(request.body);
      if (!validation.success) {
        return reply.status(400).send({
          success: false,
          message: 'Validation failed',
          errors: validation.error.format(),
        });
      }

      const { oldPassword, newPassword } = validation.data as ChangePasswordRequest;
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

  async requestPasswordReset(request: FastifyRequest, reply: FastifyReply) {
    try {
      const validation = passwordResetRequestSchema.safeParse(request.body);
      if (!validation.success) {
        return reply.status(400).send({
          success: false,
          message: 'Validation failed',
          errors: validation.error.format(),
        });
      }

      const { identifier } = validation.data as PasswordResetRequestRequest;
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

  async resetPassword(request: FastifyRequest, reply: FastifyReply) {
    try {
      const validation = passwordResetSchema.safeParse(request.body);
      if (!validation.success) {
        return reply.status(400).send({
          success: false,
          message: 'Validation failed',
          errors: validation.error.format(),
        });
      }

      const { resetToken, newPassword } = validation.data as PasswordResetRequest;
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

  async getCurrentUser(request: AuthenticatedRequest, reply: FastifyReply) {
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

  async updateProfile(request: AuthenticatedRequest, reply: FastifyReply) {
    try {
      if (!request.user) {
        return reply.status(401).send({
          success: false,
          message: 'Authentication required',
        });
      }

      const validation = updateProfileSchema.safeParse(request.body);
      if (!validation.success) {
        return reply.status(400).send({
          success: false,
          message: 'Validation failed',
          errors: validation.error.format(),
        });
      }

      const data = validation.data as UpdateProfileRequest;
      
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

  async updateSettings(request: AuthenticatedRequest, reply: FastifyReply) {
    try {
      if (!request.user) {
        return reply.status(401).send({
          success: false,
          message: 'Authentication required',
        });
      }

      const validation = updateUserSettingsSchema.safeParse(request.body);
      if (!validation.success) {
        return reply.status(400).send({
          success: false,
          message: 'Validation failed',
          errors: validation.error.format(),
        });
      }

      const data = validation.data as UpdateUserSettingsRequest;
      
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