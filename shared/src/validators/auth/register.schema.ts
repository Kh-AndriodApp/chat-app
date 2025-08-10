import { z } from 'zod';
import { emailSchema, phoneSchema, usernameSchema, passwordSchema } from './base.schemas';

export const baseRegistrationSchema = z.object({
    name: z.string().min(1, 'name-required').max(100, 'name-max-100'),
    email: emailSchema.optional(),
    username: usernameSchema,
    phoneNumber: phoneSchema.optional(),
    password: passwordSchema,
    bio: z.string().max(500, 'bio-max-500').optional(),
});

const customValidation = z.object({
    email: emailSchema.optional(),
    phoneNumber: phoneSchema.optional(),
}).refine(
    (data) => data.email || data.phoneNumber,
    {
        message: 'email-or-phone-required',
        path: ['email'],
    }
);

export const validateRegisterRequest = (data: unknown) => {
    return customValidation.safeParse(data);
};

