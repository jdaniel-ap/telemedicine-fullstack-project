import { IUserId } from './../common/types';
import { client } from '../prisma/client';


export class GetPacientData {
  async execute(pacientId) {
    const request = await client.userData.findFirst({
      where: {
        userId: pacientId
      },
      include: {
        healthData: true
      }
    });

    return request;
  }
}