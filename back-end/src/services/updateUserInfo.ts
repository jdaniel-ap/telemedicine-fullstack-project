import { FindUser } from './../utils/FindUser';
import { IObjUserData, IObjHealthData } from './../common/types';
import { client } from "../prisma/client";

export class UpdateUserInfo {
  id: string;
  userData: IObjUserData;
  healthInfo: IObjHealthData;

  constructor(userData: IObjUserData, healthInfo: IObjHealthData, id: string) {
    this.userData = userData;
    this.healthInfo = healthInfo;
    this.id = id
  }

  async execute() {

    const findUser = new FindUser(this.id);

    const find = await findUser.byId();

    await client.userData.update({
      where: {
        userId: find.id,
      },
      data: {
        ...this.userData,
        healthData: {
          update: {
            ...this.healthInfo
          }
        }
      },
      include: { healthData: true }
    });

    return { status: 'success', message: 'Your data have been successfully updated' };
  }
}