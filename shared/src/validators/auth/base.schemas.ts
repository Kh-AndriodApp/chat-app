import { z } from 'zod';
import { loginSchema, logoutSchema } from './login.schema';
import { baseRegistrationSchema } from './register.schema';
import { changePasswordSchema, passwordResetRequestSchema, passwordResetSchema, refreshTokenSchema } from './changePassword.schema';
import { errorResponseSchema } from '..';
import { updateProfileSchema, updateUserSettingsSchema } from './settings.schema';
import { verifyContactSchema, addContactRouteSchema } from './contact.schema';

// Device info schema
export const deviceInfoSchema = z.object({
  deviceName: z.string().optional(),
  deviceModel: z.string().optional(),
  osName: z.string().optional(),
  osVersion: z.string().optional(),
  appVersion: z.string().optional(),
  browser: z.string().optional(),
  browserVersion: z.string().optional(),
}).optional();

// Base validation schemas
export const emailSchema = z.string().email('invalid-email-format').min(1, 'email-required');
export const phoneSchema = z
  .string()
  .regex(/^\+?[1-9]\d{1,14}$/, 'invalid-phone-number-format')
  .min(1, 'phone-number-required');
export const usernameSchema = z
  .string()
  .min(3, 'username-min-3')
  .max(50, 'username-max-50');
export const passwordSchema = z
  .string()
  .min(8, 'password-min-8')
  .max(255, 'password-max-255');


// Response schemas
export const userResponseSchema = z.object({
  id: z.number(),
  documentId: z.string(),
  name: z.string(),
  email: z.string(),
  username: z.string(),
  profilePictureUrl: z.string().nullable(),
  bio: z.string().nullable(),
  phoneNumber: z.string(),
  lastActivityDate: z.date(),
  status: z.enum(['OFFLINE', 'ONLINE', 'BUSY', 'AWAY', 'DO_NOT_DISTURB']),
  isActive: z.boolean(),
  isVerified: z.boolean(),
  themePreference: z.enum(['LIGHT', 'DARK', 'SYSTEM_DEFAULT']),
  notificationSettings: z.record(z.any(), z.string()),
  privacySettings: z.record(z.any(), z.string()),
  createdAt: z.date(),
  updatedAt: z.date().nullable(),
});

export const authResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.object({
    user: userResponseSchema,
    accessToken: z.string(),
    refreshToken: z.string(),
    expiresAt: z.date(),
  }).optional(),
});

// Route schemas for fastify-type-provider-zod
export const authRouteSchemas = {
  register: {
    summary: 'Register a new user',
    description: 'Register a new user with email/phone and username',
    tags: ['Authentication'],
    body: baseRegistrationSchema,
    response: {
      201: authResponseSchema,
      400: errorResponseSchema,
      409: errorResponseSchema,
    },
  },
  login: {
    summary: 'User login',
    description: 'Login with email, phone, or username',
    tags: ['Authentication'],
    body: loginSchema,
    response: {
      200: authResponseSchema,
      401: errorResponseSchema,
      403: errorResponseSchema,
    },
  },
  refresh: {
    summary: 'Refresh access token',
    description: 'Get a new access token using refresh token',
    tags: ['Authentication'],
    body: refreshTokenSchema,
    response: {
      200: authResponseSchema,
      401: errorResponseSchema,
    },
  },
  forgotPassword: {
    summary: 'Request password reset',
    description: 'Send password reset link to email/phone',
    tags: ['Authentication'],
    body: passwordResetRequestSchema,
    response: {
      200: z.object({
        success: z.boolean(),
        message: z.string(),
      }),
      400: errorResponseSchema,
    },
  },
  resetPassword: {
    summary: 'Reset password',
    description: 'Reset password using reset token',
    tags: ['Authentication'],
    body: passwordResetSchema,
    response: {
      200: z.object({
        success: z.boolean(),
        message: z.string(),
      }),
      400: errorResponseSchema,
    },
  },
  me: {
    summary: 'Get current user',
    description: 'Get current authenticated user information',
    tags: ['Authentication'],
    response: {
      200: z.object({
        success: z.boolean(),
        message: z.string(),
        data: z.object({
          user: userResponseSchema,
        }),
      }),
      401: errorResponseSchema,
    },
  },
  updateProfile: {
    summary: 'Update user profile',
    description: 'Update user profile information',
    tags: ['Authentication'],
    body: updateProfileSchema,
    response: {
      200: z.object({
        success: z.boolean(),
        message: z.string(),
        data: z.object({
          user: userResponseSchema,
        }),
      }),
      400: errorResponseSchema,
      401: errorResponseSchema,
    },
  },
  updateSettings: {
    summary: 'Update user settings',
    description: 'Update user preferences and settings',
    tags: ['Authentication'],
    body: updateUserSettingsSchema,
    response: {
      200: z.object({
        success: z.boolean(),
        message: z.string(),
        data: z.object({
          user: userResponseSchema,
        }),
      }),
      400: errorResponseSchema,
      401: errorResponseSchema,
    },
  },
  changePassword: {
    summary: 'Change password',
    description: 'Change user password',
    tags: ['Authentication'],
    body: changePasswordSchema,
    response: {
      200: z.object({
        success: z.boolean(),
        message: z.string(),
      }),
      400: errorResponseSchema,
      401: errorResponseSchema,
    },
  },
  logout: {
    summary: 'Logout from current session',
    description: 'Logout from current session',
    tags: ['Authentication'],
    body: logoutSchema,
    response: {
      200: z.object({
        success: z.boolean(),
        message: z.string(),
      }),
      400: errorResponseSchema,
    },
  },
  logoutAll: {
    summary: 'Logout from all sessions',
    description: 'Logout from all devices and sessions',
    tags: ['Authentication'],
    response: {
      200: z.object({
        success: z.boolean(),
        message: z.string(),
      }),
      400: errorResponseSchema,
      401: errorResponseSchema,
    },
  },
};



export type RefreshTokenRequest = z.infer<typeof refreshTokenSchema>;
export type ChangePasswordRequest = z.infer<typeof changePasswordSchema>;
export type PasswordResetRequestRequest = z.infer<typeof passwordResetRequestSchema>;
export type PasswordResetRequest = z.infer<typeof passwordResetSchema>;
export type VerifyContactRequest = z.infer<typeof verifyContactSchema>;
export type AddContactRequest = z.infer<typeof addContactRouteSchema>;
export type LoginRequest = z.infer<typeof loginSchema>;
export type LogoutRequest = z.infer<typeof logoutSchema>;
export type RegisterRequest = z.infer<typeof baseRegistrationSchema>;
export type UpdateProfileRequest = z.infer<typeof updateProfileSchema>;
export type UpdateUserSettingsRequest = z.infer<typeof updateUserSettingsSchema>;
