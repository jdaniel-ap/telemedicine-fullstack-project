import { IUserId } from './../common/types';
import { GetPacientData } from './../services/getPacientData';
import { Request, Response } from 'express';

export class GetPacientDataController {
  async handle(req: Request, res: Response) {
    const { body, params } = req;
    
    const getPacientData = new GetPacientData();

    const pacientData = await getPacientData.execute(params.id);

    res.status(200).json(pacientData);
  }
}