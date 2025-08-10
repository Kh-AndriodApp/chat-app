import { z } from 'zod';

export const updateProfileSchema = z.object({
  name: z.string().min(1, 'name-required').max(100, 'name-max-100').optional(),
  bio: z.string().max(500, 'bio-max-500').optional(),
  profilePictureUrl: z.string().url('invalid-url-format').max(200, 'url-max-200').optional(),
});

export const notificationSettingsSchema = z.object({
  pushEnabled: z.boolean().default(true),
  emailEnabled: z.boolean().default(true),
  soundEnabled: z.boolean().default(true),
  badgeEnabled: z.boolean().default(true),
  messagePreview: z.boolean().default(true),
  chatSpecific: z.record(z.string(), z.boolean()).default({}),
});

export const privacySettingsSchema = z.object({
  showOnlineStatus: z.boolean().default(true),
  showLastSeen: z.boolean().default(true),
  allowDirectMessages: z.boolean().default(true),
  showReadReceipts: z.boolean().default(true),
  whoCanAddToGroups: z.enum(['everyone', 'contacts', 'nobody']).default('everyone'),
  whoCanSeeProfile: z.enum(['everyone', 'contacts', 'nobody']).default('everyone'),
});

export const updateUserSettingsSchema = z.object({
  themePreference: z.enum(['LIGHT', 'DARK', 'SYSTEM_DEFAULT']).optional(),
  notificationSettings: notificationSettingsSchema.optional(),
  privacySettings: privacySettingsSchema.optional(),
});

