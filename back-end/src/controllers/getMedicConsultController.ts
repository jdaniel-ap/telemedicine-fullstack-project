import { GetMedicConsult } from './../services/getMedicConsult';
import { Response, Request } from 'express';

export class GetMedicConsultController {
  async handle(_req: Request, res: Response) {
    const { id } = res.locals.user;

    const getMedicConsult = new GetMedicConsult(id);

    const medicConsults = await getMedicConsult.execute();

    return res.status(200).json(medicConsults);
  }
}