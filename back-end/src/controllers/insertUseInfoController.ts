import { Request, Response } from 'express';
import { InsertUserInfo } from '../services/insertUserInfo';


class InsertUserDataController {
  async handle(req: Request, res: Response) {
    const { id } = res.locals.user;
    const { userData, healthData } = req.body;

    const userInfo = {...userData, userId: id};

    const insertData = new InsertUserInfo(userInfo, healthData);

    const user = await insertData.execute()

    res.status(201).json(user)
  }
}

export { InsertUserDataController }