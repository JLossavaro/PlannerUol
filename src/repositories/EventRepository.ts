import { Events } from "../models";

export default class EventRepository {
    _events: Array<Events>;
    constructor() {
        this._events = new Array<Events>();
    }

    public create(event: Events) {
        this._events.push(event);
    }
}