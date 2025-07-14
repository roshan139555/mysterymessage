import {z} from 'zod'

export const usernameValidation = z.string().min(2,"Username must be of 2 characters").max(20, "Username must be of 20 characters").regex(/^[a-zA-Z0-9]+$/,"username must not contain special characters")


export const singUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: 'invalid email validation'}),
    password: z.string().min(6,{message: 'password must be of 6 characters'})
})

