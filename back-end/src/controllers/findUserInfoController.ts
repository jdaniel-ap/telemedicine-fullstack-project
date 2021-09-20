import { GetUserInfo } from './../services/getUserInfo';
import { Request, Response } from 'express';

export class FindUserInfoController {
  async handle(req: Request, res: Response) {
      const { id } = res.locals.user;

      const findUserInfo = new GetUserInfo();

      const user = await findUserInfo.execute(id);

      res.status(200).json(user);
  }
}