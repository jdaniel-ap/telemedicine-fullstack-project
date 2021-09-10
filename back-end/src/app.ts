import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import cors from 'cors';
import { userRouter } from "./router/user";

const app = express();

app.use(express.json());

app.use(cors());

app.use('/user', userRouter);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  const err = {
    status: "error",
    message: error.message,
  }

  res.json(err);
});

export { app };