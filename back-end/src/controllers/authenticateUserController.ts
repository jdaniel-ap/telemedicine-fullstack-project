import { Request, Response } from 'express';
import { AuthenticateUser } from '../services/authenticateUser';
class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const { body } = req;

    const authenticateUser = new AuthenticateUser();

    const token = await authenticateUser.execute(body);

    return res.status(200).json(token);
  }
}

export {AuthenticateUserController};