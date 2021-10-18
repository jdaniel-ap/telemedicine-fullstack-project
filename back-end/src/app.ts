import { socketChat } from './sockets/socket';
import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import cors from 'cors';
import { userRouter } from "./router/user";
import helmet from "helmet";
import http from 'http';
import { Server } from 'socket.io';
import { consultRouter } from './router/consult';


const app = express();
const httpServer = http.createServer(app);


const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  },
});

socketChat(io)

app.use(express.static('public'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(helmet.hidePoweredBy());

app.use(cors());

app.use('/api/user', userRouter);
app.use('/api/consult', consultRouter);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  const err = {
    status: "error",
    message: error.message,
  }
  res.status(400).json(err);
});

export { httpServer };