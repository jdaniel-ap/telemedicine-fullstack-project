import { IUserId } from './../common/types';
import { client } from '../prisma/client';


export class GetUserInfo {
  async execute(userId : IUserId) {
    const findUserInfo = await client.userData.findFirst({
      where: {
        userId: String(userId),
      },
      include: {
        healthData: true
      }
    });

    return findUserInfo;
  }
}