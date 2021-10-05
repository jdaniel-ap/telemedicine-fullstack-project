import { GenerateConsult } from './../services/generateConsult';
import { Request, Response } from 'express';


export class GenerateConsultController {

  async handle(req: Request, res: Response) {
    const { body } = req;
    const consult = {
      ...body,
      status: 'wait',
    }

    const generateConsult = new GenerateConsult(consult);

    const request = await generateConsult.execute();

    return res.status(200).json(request)
  }
}