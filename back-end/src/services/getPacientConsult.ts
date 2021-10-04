import { IUserId } from './../common/types';
import { client } from '../prisma/client';



export class GetPacientConsult {
  async execute(id : IUserId) {

    const user = await client.consult.findMany({
      where: {
        userId: String(id)
      }
    });
    
    return user
  }
}