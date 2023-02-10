import { EventsService } from "../services";


export default class EventsController {

    eventsService: EventsService;

    constructor() {
        this.eventsService = new EventsService();
    };

    public createEvent(event: any) {
        this.eventsService.CreateEvents(event);
    }


}