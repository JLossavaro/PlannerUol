import { EventsService } from "../services";


export default class EventsController {

    eventsService: EventsService;

    constructor() {
        this.eventsService = new EventsService();
    };

    public createEvent(event: any) {
        this.eventsService.CreateEvents(event);
    }

    public GetEventsById() {
        //Todo: implement
    }

    public GetAllEvents() {
        //Todo: implement
    }

    public GetAllEventsByWeekday() {
        //Todo: implement
    }

    public DeleteEventById(id: any) {
        //Todo: implement
    }

    public DeleteAllEventsFromWeek(dayOfWeek: any) {
        //Todo: implement
    }


}