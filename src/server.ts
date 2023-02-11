import express from 'express'

import { Router, Request, Response } from 'express';

const app = express();
const route = Router()
app.use(express.json())
app.listen(3333, () => 'server running on port 3333')




route.get('/', (req: Request, res: Response) => {
  console.log("teste")
  res.json({ message: 'hello world with Typescript' })
})

route.get('/events', (req: Request, res: Response) => {
 //todo: implement
});

app.use(route)






