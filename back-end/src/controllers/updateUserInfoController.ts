import { UpdateUserInfo } from './../services/updateUserInfo';
import { Request, Response } from "express";

export class UpdateUserInfoController {
  async handle(req: Request, res: Response) {
    const { body } = req;
    const { id } = res.locals.user;

    const updateUserInfo = new UpdateUserInfo(body.userData, body.userHealthData, id);

    const update = await updateUserInfo.execute();

    res.status(201).json(update);
    
  }
}