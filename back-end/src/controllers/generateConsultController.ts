import { GenerateConsult } from './../services/generateConsult';
import { Request, Response } from 'express';


export class GenerateConsultController {

  async handle(req: Request, res: Response) {
    const { body } = req;
    const { image, consult} = body;
    
    const consultObj = {
      status: 'wait',
      ...consult,
    }

    const generateConsult = new GenerateConsult(consultObj, image);

    const request = await generateConsult.execute();

    return res.status(200).json(request)
  }
}