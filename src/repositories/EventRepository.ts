import { Events } from "../models";

export default class EventRepository {
    _events: Array<Events>;
    constructor() {
        this._events = new Array<Events>();
    }

    public create(event: Events) {
        this._events.push(event);
    }

    public findById(id: string) {
        return this._events.find(event => event._id === id);
    }

    public findAllByWeekday(id: string) {
        return this._events.find(event => event._id === id);
    }

    public findAll() {
        return this._events;
    }
}

