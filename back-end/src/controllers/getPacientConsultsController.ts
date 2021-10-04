import { Response, Request } from 'express';
import { GetPacientConsult } from '../services/getPacientConsult';


export class GetPacientConsultController {
  async handle(_req: Request, res: Response) {

    const { id } = res.locals.user;

    const getPacientConsult = new GetPacientConsult();

    const request = await getPacientConsult.execute(id);

    res.status(200).json(request);
  }
}