import { z } from 'zod';

export interface createUserDTO {
    email: string;
    password: string;
}

export const CreateUserSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});

// export class CreateUserDTO {
//     firstName?: string;
//     lastName?: string;
//     birthDate?: Date;
//     city?: string;
//     country?: string;
//     email?: string;
//     password?: string;

//     static validadeData = (obj: createUserDTO) => {
//         const result = CreateUserSchema.safeParse;
//         return result;
//     }


// }