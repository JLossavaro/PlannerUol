import { Users } from "../models";

export default class UserRepository {
    _users: Array<Users>;
    constructor() {
        this._users = new Array<Users>();
    }
    
    public create(user:Users) {
        this._users.push(user);
    }
}