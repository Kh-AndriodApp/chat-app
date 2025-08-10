import { z } from 'zod';

export const errorResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  errors: z.record(z.any(), z.string()).optional(),
});