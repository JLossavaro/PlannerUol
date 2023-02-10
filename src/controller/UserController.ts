import { CreateUserDTO } from "../DTO";
import { Users } from "../models";
import { UsersService } from "../services";


export default class UserController {
    userService: UsersService;

    constructor() {
        this.userService = new UsersService();
    };

    public createUser(user: CreateUserDTO) {

    }

    public login(userLoginDTO: any) { }

}