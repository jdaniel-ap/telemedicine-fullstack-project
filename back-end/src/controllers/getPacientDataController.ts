import { IUserId } from './../common/types';
import { GetPacientData } from './../services/getPacientData';
import { Request, Response } from 'express';

export class GetPacientDataController {
  async handle(req: Request, res: Response) {
    const { params } = req;

    const { id } = res.locals.user;
    
    const getPacientData = new GetPacientData(params.id, id);

    const pacientData = await getPacientData.execute();

    res.status(200).json(pacientData);
  }
}