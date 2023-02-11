import { Router, Request, Response } from 'express';
import { UserController } from '../controller';

const route = Router();

const userController = new UserController();

route.post('/users/signUp', (req: Request, res: Response) => {
  return userController.createUser(req, res);
});

route.post('/users/signIn', (req: Request, res: Response) => {
  return userController.login(req, res);
});

export default route;