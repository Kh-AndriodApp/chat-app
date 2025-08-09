import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { authController } from '../../../controllers/auth.controller';
import { authenticateToken } from '../../../middleware/auth.middleware';
import { authRouteSchemas } from '@chat-app/validators/auth.schemas';

export default async function authRoutes(fastify: FastifyInstance) {
  // Register type provider
  const typedFastify = fastify.withTypeProvider<ZodTypeProvider>();

  // Public routes (no authentication required)
  
  // User registration
  typedFastify.post('/register', {
    schema: authRouteSchemas.register,
  }, authController.register);
  typedFastify.post('/register', {
    schema: authRouteSchemas.register,
  }, authController.register);
  
  // User login (supports email/phone/username)
  typedFastify.post('/login', {
    schema: authRouteSchemas.login,
  }, authController.login);
  
  // Refresh access token using refresh token
  typedFastify.post('/refresh', {
    schema: authRouteSchemas.refresh,
  }, authController.refreshToken);
  
  // Request password reset
  typedFastify.post('/forgot-password', {
    schema: authRouteSchemas.forgotPassword,
  }, authController.requestPasswordReset);
  
  // Reset password using reset token
  typedFastify.post('/reset-password', {
    schema: authRouteSchemas.resetPassword,
  }, authController.resetPassword);
  
  // Protected routes (authentication required)
  
  // Get current user information
  typedFastify.get('/me', {
    schema: authRouteSchemas.me,
    preHandler: authenticateToken,
  }, authController.getCurrentUser);
  
  // Update user profile
  typedFastify.put('/profile', {
    schema: authRouteSchemas.updateProfile,
  }, authController.updateProfile);

  // Update user settings (theme, notifications, privacy)
  typedFastify.put('/settings', {
    schema: authRouteSchemas.updateSettings,
    preHandler: (request, reply, done) => {
      return authenticateToken(request, reply, done);
    },
  }, authController.updateSettings);
  
  // Change password
  typedFastify.post('/change-password', {
    schema: authRouteSchemas.changePassword,
    preHandler: (request, reply, done) => {
      return authenticateToken(request, reply, done);
    },
  }, authController.changePassword);

  // Logout from current session
  typedFastify.post('/logout', {
    schema: authRouteSchemas.logout,
    preHandler: (request, reply, done) => {
      return authenticateToken(request, reply, done);
    },
  }, authController.logout);
  
  // Logout from all sessions
  typedFastify.post('/logout-all', {
    schema: authRouteSchemas.logoutAll,
    preHandler: authenticateToken,
  }, authController.logoutAll);
}
