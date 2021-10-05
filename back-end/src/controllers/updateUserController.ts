import { NextFunction, Request, Response } from 'express';
import { UpdateUser } from '../services/updateUser';

class UpdateUserController {
  async handle(req: Request, res: Response, next: NextFunction) {
    const { body } = req
    const updateUser = new UpdateUser(body);

    const user = await updateUser.execute();

    res.status(201).json(user);

  }
}

export { UpdateUserController }