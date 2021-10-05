import { Request, Response } from 'express';
import { AuthenticateUser } from '../services/authenticateUser';
class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const { body } = req;

    const authenticateUser = new AuthenticateUser(body);

    const user = await authenticateUser.execute();


    return res.status(200).json(user);
  }
}

export {AuthenticateUserController};