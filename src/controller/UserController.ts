import { CreateUserDTO, UserLoginDTO } from "../DTO";
import { Users } from "../models";
import { UsersService } from "../services";


export default class UserController {
    userService: UsersService;

    constructor() {
        this.userService = new UsersService();
    };

    public createUser(user: CreateUserDTO) {
        this.userService.createUser(user);
    }

    public login(userLoginDTO: UserLoginDTO) {
        this.userService.login(userLoginDTO);
    }

}