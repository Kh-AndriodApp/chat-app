import { FastifyInstance } from 'fastify';
import { authController } from '../../../controllers/auth.controller';

export default async function authRoutes(fastify: FastifyInstance) {
  // Public routes (no authentication required)
  
  // User registration
  fastify.post('/register', authController.register);
  
  // User login (supports email/phone/username)
  fastify.post('/login', authController.login);
  
  // Refresh access token using refresh token
  fastify.post('/refresh', authController.refreshToken);
  
  // Request password reset
  fastify.post('/forgot-password', authController.requestPasswordReset);
  
  // Reset password using reset token
  fastify.post('/reset-password', authController.resetPassword);
  
  // Protected routes (authentication required)
  // Note: These routes will need authentication middleware
  
  // Get current user information
  fastify.get('/me', authController.getCurrentUser);
  
  // Update user profile
  fastify.put('/profile', authController.updateProfile);
  
  // Update user settings (theme, notifications, privacy)
  fastify.put('/settings', authController.updateSettings);
  
  // Change password
  fastify.post('/change-password', authController.changePassword);
  
  // Logout from current session
  fastify.post('/logout', authController.logout);
  
  // Logout from all sessions
  fastify.post('/logout-all', authController.logoutAll);
}
