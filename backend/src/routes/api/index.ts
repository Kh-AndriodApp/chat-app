import type { FastifyInstance } from 'fastify';
import authRoutes from './v1/auth.routes';

export default function registerAllRoutes(fastify: FastifyInstance) {
    fastify.register(authRoutes, { prefix: '/auth' });
}
