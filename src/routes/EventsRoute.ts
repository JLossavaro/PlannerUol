import { Router, Request, Response  } from 'express';
import { EventsController } from '../controller';

const route = Router();

const eventsController = new EventsController();

route.get('/events', (req: Request, res:Response) => {
    return eventsController.GetAllEvents(req, res);
});

route.get('/events/:id', (req: Request, res: Response) => {
    //todo: implement
});

export default route;