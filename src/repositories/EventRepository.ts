import { Events } from "../models";

export default class EventRepository {
    _events: Array<Events>;
    constructor() {
        this._events = new Array<Events>();
    }

    async create(event: Events) {
        this._events.push(event);
        return event;
    }

    async findById(id: string) {
        return this._events.find(event => event._id === id);
    }

    async findAllByWeekday(id: string) {
        return this._events.find(event => event._id === id);
    }

    async findAll() {
        return this._events;
    }
}

