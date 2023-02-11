import { Router, Request, Response } from 'express';

const route = Router();

route.get('/users', (req: Request, res: Response) => {
  // Obtenha todos os usuários
});

route.get('/users/:id', (req: Request, res: Response) => {
  // Obtenha um usuário específico pelo ID
});

export default route;