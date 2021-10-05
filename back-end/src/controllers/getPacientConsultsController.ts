import { Response, Request } from 'express';
import { GetPacientConsult } from '../services/getPacientConsult';


export class GetPacientConsultController {
  async handle(_req: Request, res: Response) {

    const { id } = res.locals.user;

    const getPacientConsult = new GetPacientConsult(id);

    const request = await getPacientConsult.execute();

    res.status(200).json(request);
  }
}