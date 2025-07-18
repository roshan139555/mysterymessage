import {z} from 'zod';

export const messageSchema = z.object({
    content: z.string().min(10,"content must be at least of 10 characters").max(300,"content must be below 300 characters")
})