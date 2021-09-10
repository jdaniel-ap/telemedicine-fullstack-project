import { NextFunction, Request, Response } from 'express';
import { UpdateUser } from '../services/updateUser';

class UpdateUserController {
  async handle(req: Request, res: Response, next: NextFunction) {
    const { body } = req
    const updateUser = new UpdateUser();

    const user = await updateUser.execute(body);

    res.status(201).json(user);

  }
}

export { UpdateUserController }