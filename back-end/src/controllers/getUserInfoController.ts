import { GetUserInfo } from '../services/getUserInfo';
import { Request, Response } from 'express';

export class GetUserInfoController {
  async handle(req: Request, res: Response) {
      const { id } = res.locals.user;

      const findUserInfo = new GetUserInfo(id);

      const user = await findUserInfo.execute();

      res.status(200).json(user);
  }
}