import { z } from 'zod';
import { deviceInfoSchema } from './base.schemas';

export const loginSchema = z.object({
  identifier: z.string().min(1, 'identifier-required'),
  password: z.string().min(1, 'password-required'),
  deviceInfo: deviceInfoSchema,
});


export const logoutSchema = z.object({
  sessionToken: z.string().min(1, 'session-token-required').optional(),
});