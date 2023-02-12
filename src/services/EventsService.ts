import { CreateEventDTO, CreateUserDTO } from "../DTO";
import { EventRepository } from "../repositories";

export default class EventsService {
    _eventRepository: EventRepository;
    constructor() {
        this._eventRepository = new EventRepository();
    }

    async GetAllEvents() {
        return await this._eventRepository.findAll();
    }

    async CreateEvents(event: CreateEventDTO) {
        //Todo: implement
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