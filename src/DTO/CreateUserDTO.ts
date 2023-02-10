import { z } from 'zod';

export interface createUserDTO {
    firstName?: string;
    lastName?: string;
    birthDate?: Date;
    city?: string;
    country?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}

export const CreateUserSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    birthDate: z.date(),
    city: z.string(),
    country: z.string(),
    email: z.string().email(),
    password: z.string(),
    confirmPassword: z.string()
});

export class CreateUserDTO {
    firstName?: string;
    lastName?: string;
    birthDate?: Date;
    city?: string;
    country?: string;
    email?: string;
    password?: string;

    static validadeData = (obj: createUserDTO) => {
        const result = CreateUserSchema.safeParse;
        return result;
    }


}