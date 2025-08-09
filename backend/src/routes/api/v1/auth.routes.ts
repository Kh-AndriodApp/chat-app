import { FastifyInstance } from 'fastify';
import { authController } from '../../../controllers/auth.controller';
import { authenticateToken } from '../../../middleware/auth.middleware';
import { authRouteSchemas } from '@chat-app/validators/auth.schemas';

export default async function authRoutes(fastify: FastifyInstance) {
  fastify.post('/register', {
    schema: authRouteSchemas.register,
    
  }, authController.register);
  
  fastify.post('/login', {
    schema: authRouteSchemas.login,
  }, authController.login);
  
  fastify.post('/refresh', {
    schema: authRouteSchemas.refresh,
  }, authController.refreshToken);
  
  fastify.post('/forgot-password', {
    schema: authRouteSchemas.forgotPassword,
  }, authController.requestPasswordReset);
  
  fastify.post('/reset-password', {
    schema: authRouteSchemas.resetPassword,
  }, authController.resetPassword);
  
  fastify.get('/me', {
    schema: authRouteSchemas.me,
    preHandler: authenticateToken,
  }, authController.getCurrentUser);
  
  fastify.put('/profile', {
    schema: authRouteSchemas.updateProfile,
  }, authController.updateProfile);

  fastify.put('/settings', {
    schema: authRouteSchemas.updateSettings,
    preHandler: (request, reply, done) => {
      return authenticateToken(request, reply, done);
    },
  }, authController.updateSettings);
  
  fastify.post('/change-password', {
    schema: authRouteSchemas.changePassword,
    preHandler: (request, reply, done) => {
      return authenticateToken(request, reply, done);
    },
  }, authController.changePassword);

  fastify.post('/logout', {
    schema: authRouteSchemas.logout,
    preHandler: (request, reply, done) => {
      return authenticateToken(request, reply, done);
    },
  }, authController.logout);
  
  fastify.post('/logout-all', {
    schema: authRouteSchemas.logoutAll,
    preHandler: authenticateToken,
  }, authController.logoutAll);
}
