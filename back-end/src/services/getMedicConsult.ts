import { IUserId } from './../common/types';
import { client } from '../prisma/client';


export class GetMedicConsult {
  async execute(id : IUserId) {
    const request = await client.consult.findMany({
      where: {
        medicId: String(id)
      }
    });

    return request;
  }
}