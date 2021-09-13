import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import cors from 'cors';
import { userRouter } from "./router/user";
import helmet from "helmet";

const app = express();

app.use(express.json());

app.use(helmet.hidePoweredBy());

app.use(cors());

app.use('/api/user', userRouter);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  const err = {
    status: "error",
    message: error.message,
  }
  res.status(400).json(err);
});

export { app };