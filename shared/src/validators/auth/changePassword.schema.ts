import { z } from 'zod';
import { passwordSchema } from './base.schemas';

export const refreshTokenSchema = z.object({
    refreshToken: z.string().min(1, 'refresh-token-required'),
});

export const changePasswordSchema = z.object({
    oldPassword: z.string().min(1, 'current-password-required'),
    newPassword: passwordSchema,
});

export const passwordResetRequestSchema = z.object({
    identifier: z.string().min(1, 'identifier-required'),
});

export const passwordResetSchema = z.object({
    resetToken: z.string().min(1, 'reset-token-required'),
    newPassword: passwordSchema,
});