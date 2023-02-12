import { CreateEventDTO, CreateUserDTO } from "../DTO";
import { EventRepository } from "../repositories";
import { Events } from "../models";

export default class EventsService {
    _eventRepository: EventRepository;
    constructor() {
        this._eventRepository = new EventRepository();
    }

    async GetAllEvents() {
        return await this._eventRepository.findAll();
    }

    async CreateEvents(eventDTO: CreateEventDTO) {
        let events: Events = new Events();
        const newEvent = {
            dateTime: eventDTO.dateTime,
            description: eventDTO.description,
            _id: events._id,
            createdAt: events.createdAt
        }
        return await this._eventRepository.create(newEvent);
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