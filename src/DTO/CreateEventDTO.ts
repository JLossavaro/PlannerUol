import { z } from 'zod';

export interface createEventDTO {
    firstName?: string;
}

export const CreateEventSchema = z.object({
    firstName: z.string(),
});

export class CreateEventDTO {
    firstName?: string;

    static validadeData = (obj: createEventDTO) => {
        const result = CreateEventSchema.safeParse;
        return result;
    }


}