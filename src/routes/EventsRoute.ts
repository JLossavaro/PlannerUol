import { Router, Request, Response } from 'express';
import { EventsController } from '../controller';

const route = Router();

const eventsController = new EventsController();


route.post('/events', (req: Request, res: Response) => {
    return eventsController.createEvent(req, res);
});

//*Obs: A rota events se especializa no controller em
//GetAll ou GetallByWeekday 
route.get('/events', (req: Request, res: Response) => {
    return eventsController.GetAllEvents(req, res);
});

route.get('/events/:id', (req: Request, res: Response) => {
    return eventsController.GetEventsById(req, res);
});

export default route;