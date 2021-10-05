import { GetMedicConsult } from './../services/getMedicConsult';
import { Response, Request } from 'express';

export class GetMedicConsultController {
  async handle(_req: Request, res: Response) {
    const { id } = res.locals.user;

    const getMedicConsult = new GetMedicConsult();

    const medicConsults = await getMedicConsult.execute(id);

    return res.status(200).json(medicConsults);
  }
}