import { z } from 'zod';
import { emailSchema, phoneSchema } from './base.schemas';

export const addContactRouteSchema = z.object({
    type: z.enum(['email', 'phone']),
    value: z.string().min(1, 'value-required'),
})

export const addContactFullSchema = z.object({
    type: z.enum(['email', 'phone']),
    value: z.string().min(1, 'value-required'),
}).extend({
    email: emailSchema,
    phoneNumber: phoneSchema,
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
        message: 'invalid-email-or-phone-format',
        path: ['value'],
    }
);

export const validateContactType = (data: unknown) => {
    return addContactFullSchema.safeParse(data);
};

export const verifyContactSchema = z.object({
    type: z.enum(['email', 'phone']),
    verificationCode: z.string().length(6, 'verification-code-length-6'),
});

