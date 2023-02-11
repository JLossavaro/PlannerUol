import { Users } from "../models";

export default class UserRepository {
    _users: Array<Users>;
    constructor() {
        this._users = new Array<Users>();
    }

    public create(user: any) {
        this._users.push(user);
        return user;
    }

    public findOne(email: any) {
        return this._users.find(user => user.email === email);
    }
}