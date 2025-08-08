import { z } from 'zod';

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
const emailSchema = z.string().email('Invalid email format').min(1, 'Email is required');
const phoneSchema = z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number format').min(1, 'Phone number is required');
const usernameSchema = z.string().min(3, 'Username must be at least 3 characters').max(50, 'Username must not exceed 50 characters');
const passwordSchema = z.string().min(8, 'Password must be at least 8 characters').max(255, 'Password must not exceed 255 characters');

// Registration validation
export const registerSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name must not exceed 100 characters'),
  email: emailSchema.optional(),
  username: usernameSchema,
  password: passwordSchema,
  phoneNumber: phoneSchema.optional(),
  bio: z.string().max(500, 'Bio must not exceed 500 characters').optional(),
}).refine(
  (data) => data.email || data.phoneNumber,
  {
    message: 'Either email or phone number is required',
    path: ['email'], // Error will be associated with email field
  }
);

// Login validation - identifier can be email, phone, or username
export const loginSchema = z.object({
  identifier: z.string().min(1, 'Email, phone number, or username is required'),
  password: z.string().min(1, 'Password is required'),
  deviceInfo: deviceInfoSchema,
});

// Refresh token validation
export const refreshTokenSchema = z.object({
  refreshToken: z.string().min(1, 'Refresh token is required'),
});

// Change password validation
export const changePasswordSchema = z.object({
  oldPassword: z.string().min(1, 'Current password is required'),
  newPassword: passwordSchema,
});

// Password reset request validation
export const passwordResetRequestSchema = z.object({
  identifier: z.string().min(1, 'Email, phone number, or username is required'),
});

// Password reset validation
export const passwordResetSchema = z.object({
  resetToken: z.string().min(1, 'Reset token is required'),
  newPassword: passwordSchema,
});

// Logout validation
export const logoutSchema = z.object({
  sessionToken: z.string().min(1, 'Session token is required').optional(),
});

// Validation for updating user profile
export const updateProfileSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name must not exceed 100 characters').optional(),
  bio: z.string().max(500, 'Bio must not exceed 500 characters').optional(),
  profilePictureUrl: z.string().url('Invalid URL format').max(200, 'URL must not exceed 200 characters').optional(),
});

// Notification settings validation
export const notificationSettingsSchema = z.object({
  pushEnabled: z.boolean().default(true),
  emailEnabled: z.boolean().default(true),
  soundEnabled: z.boolean().default(true),
  badgeEnabled: z.boolean().default(true),
  messagePreview: z.boolean().default(true),
  chatSpecific: z.record(z.string(), z.boolean()).default({}),
});

// Privacy settings validation
export const privacySettingsSchema = z.object({
  showOnlineStatus: z.boolean().default(true),
  showLastSeen: z.boolean().default(true),
  allowDirectMessages: z.boolean().default(true),
  showReadReceipts: z.boolean().default(true),
  whoCanAddToGroups: z.enum(['everyone', 'contacts', 'nobody']).default('everyone'),
  whoCanSeeProfile: z.enum(['everyone', 'contacts', 'nobody']).default('everyone'),
});

// Update user settings validation
export const updateUserSettingsSchema = z.object({
  themePreference: z.enum(['LIGHT', 'DARK', 'SYSTEM_DEFAULT']).optional(),
  notificationSettings: notificationSettingsSchema.optional(),
  privacySettings: privacySettingsSchema.optional(),
});

// Verify email/phone validation
export const verifyContactSchema = z.object({
  type: z.enum(['email', 'phone']),
  verificationCode: z.string().length(6, 'Verification code must be 6 digits'),
});

// Add email/phone validation
export const addContactSchema = z.object({
  type: z.enum(['email', 'phone']),
  value: z.string().min(1, 'Value is required'),
}).refine(
  (data) => {
    if (data.type === 'email') {
      return emailSchema.safeParse(data.value).success;
    }
    if (data.type === 'phone') {
      return phoneSchema.safeParse(data.value).success;
    }
    return false;
  },
  {
    message: 'Invalid email or phone number format',
    path: ['value'],
  }
);

// Type exports for use in controllers
export type RegisterRequest = z.infer<typeof registerSchema>;
export type LoginRequest = z.infer<typeof loginSchema>;
export type RefreshTokenRequest = z.infer<typeof refreshTokenSchema>;
export type ChangePasswordRequest = z.infer<typeof changePasswordSchema>;
export type PasswordResetRequestRequest = z.infer<typeof passwordResetRequestSchema>;
export type PasswordResetRequest = z.infer<typeof passwordResetSchema>;
export type LogoutRequest = z.infer<typeof logoutSchema>;
export type UpdateProfileRequest = z.infer<typeof updateProfileSchema>;
export type UpdateUserSettingsRequest = z.infer<typeof updateUserSettingsSchema>;
export type VerifyContactRequest = z.infer<typeof verifyContactSchema>;
export type AddContactRequest = z.infer<typeof addContactSchema>;