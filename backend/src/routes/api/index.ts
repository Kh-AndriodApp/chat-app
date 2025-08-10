import type { FastifyInstance } from 'fastify';
import authRoutes from './v1/auth.routes';
import messagesRoutes from './v1/messages.routes';

export default function registerAllRoutes(fastify: FastifyInstance) {
    fastify.register(authRoutes, { prefix: '/auth' });
    fastify.register(messagesRoutes, { prefix: '/messages' });
}
