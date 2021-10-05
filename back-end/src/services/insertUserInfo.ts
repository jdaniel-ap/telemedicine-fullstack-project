import { client } from "../prisma/client";
import { IObjUserData, IObjHealthData } from '../common/types'

class InsertUserInfo {
  userData: IObjUserData;
  healthInfo: IObjHealthData;

  constructor(userData: IObjUserData, healthInfo: IObjHealthData) {
    this.userData = userData;
    this.healthInfo = healthInfo;
  }
  
  async execute() {

    const findUser = await client.user.findFirst({
      where: {
        id: this.userData.userId
      }
    });

    if(!findUser) throw new Error('User doesn\'t exist')

    await client.userData.create({
      data: {
        ...this.userData,
        healthData: {
          create: {
            ...this.healthInfo
          }
        }
      }
    });

    return { status: 'success', message: 'You have been successfully registered' };
  }
}

export { InsertUserInfo };