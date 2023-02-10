import { Users } from "../models";

export default class UserRepository {
    users: Array<Users>;
    constructor() {
        this.users = new Array<Users>();
    }
    
    public create(user:Users) {
        this.users.push(user);
    }
}