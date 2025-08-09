import { User } from '../../models/postgres';

declare module 'fastify' {
  interface FastifyRequest {
    user?: Omit<User, 'password'>;
    deviceInfo?: {
      deviceName?: string;
      deviceModel?: string;
      osName?: string;
      osVersion?: string;
      appVersion?: string;
      browser?: string;
      browserVersion?: string;
      userAgent?: string;
      ipAddress?: string;
    };
  }
}