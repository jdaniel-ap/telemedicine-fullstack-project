import { IUserId } from './../common/types';
import { client } from '../prisma/client';

export class GetUserInfo {
  id: string;

  constructor(id : string) {
    this.id = id;
  }

  async execute() {
    const findUserInfo = await client.userData.findFirst({
      where: {
        userId: this.id,
      },
      include: {
        healthData: true
      }
    });

    return findUserInfo;
  }
}