import { Request, Response } from 'express';
import { EventsService } from "../services";


export default class EventsController {

    eventsService: EventsService;

    constructor() {
        this.eventsService = new EventsService();
    };

    async createEvent(event: any) {
        this.eventsService.CreateEvents(event);
    }
    async GetAllEvents(req: Request, res: Response) {
        const data = this.eventsService.GetAllEvents();
        return res.status(200).json({ data: data });
    }


    async GetEventsById() {
        //Todo: implement
    }

    async GetAllEventsByWeekday() {
        //Todo: implement
    }

    async DeleteEventById(id: any) {
        //Todo: implement
    }

    async DeleteAllEventsFromWeek(dayOfWeek: any) {
        //Todo: implement
    }


}