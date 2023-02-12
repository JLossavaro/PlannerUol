import { Request, Response } from 'express';
import { CreateEventDTO } from '../DTO';
import { EventsService } from "../services";


export default class EventsController {

    eventsService: EventsService;

    constructor() {
        this.eventsService = new EventsService();
    };

    async createEvent(req: Request, res: Response) {
        const createEventDTO: CreateEventDTO = req.body;
        try {
            const validateCreate = CreateEventDTO.validateData(createEventDTO);
            if (!validateCreate.success) {
                return res.status(400).json(validateCreate.error);
            }
            const createdEvent = await this.eventsService.CreateEvents(createEventDTO);
            return res.status(201).json({ data: createdEvent });
        } catch (error) {
            const errorMessage: string = (error as Error).message;
            return res.status(400).send({ message: errorMessage });
        }

    }

    async GetAllEvents(req: Request, res: Response) {
        try {
            if (req.query.dayOfWeek) {
                const data = await this.eventsService.GetAllEventsByWeekday(req.query.dayOfWeek as string);
                return res.status(200).json({ data: data });
            }
            const data = await this.eventsService.GetAllEvents();
            return res.status(200).json({ data: data });
        } catch (error) {
            const errorMessage: string = (error as Error).message;
            return res.status(500).send({ message: errorMessage });
        }

    }

    async GetEventsById(req: Request, res: Response) {
        try {
            console.log(req.params.id);
            const data = await this.eventsService.GetEventsById(req.params.id as string);
            return res.status(200).json({ data: data });
        } catch (error) {
            const errorMessage: string = (error as Error).message;
            return res.status(500).send({ message: errorMessage });
        }
    }


    async DeleteEventById(id: any) {
        //Todo: implement
    }

    async DeleteAllEventsFromWeek(dayOfWeek: any) {
        //Todo: implement
    }


}