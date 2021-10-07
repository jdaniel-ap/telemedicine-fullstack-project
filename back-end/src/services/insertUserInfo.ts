import { FindUser } from './../utils/FindUser';
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

    const findUser = new FindUser(this.userData.userId);

    const user = findUser.byId();

    if(!user) throw new Error('User doesn\'t exist')

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

    return { status: 'success', message: 'Your data have been successfully updated' };
  }
}

export { InsertUserInfo };