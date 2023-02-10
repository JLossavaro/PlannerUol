import express from 'express'
import { EventsService } from './services';

import { Router, Request, Response } from 'express';

const app = express();
const route = Router()
app.use(express.json())
app.listen(3333, () => 'server running on port 3333')
app.use(route)

const eventsService = new EventsService();



route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' })
})

route.get('/events', (req: Request, res: Response) => {
  eventsService.getEvents() ;
});








