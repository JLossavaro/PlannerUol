import { z } from 'zod';

export const CreateEventSchema = z.object({
    description: z.string(),
    dateTime: z.string()
});

export class CreateEventDTO {
    description?: string;
    dateTime?: Date;

    static validateData = (obj: CreateEventDTO) => {
        const result = CreateEventSchema.safeParse(obj);
        return result;
    }
}