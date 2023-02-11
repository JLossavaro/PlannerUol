import { z } from 'zod';

export class UserLoginDTO {
    email?: string;
    password?: string;
    
    static validadeData = (obj: UserLoginDTO) => {
        const result = UserLoginSchema.safeParse;
        return result;
    }
}

export const UserLoginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});