import { client } from "../prisma/client";
import { IObjUserData, IObjHealthData } from '../common/types'

class InsertUserInfo {
  
  async execute(userData : IObjUserData, healthInfo : IObjHealthData) {

    const findUser = await client.user.findFirst({
      where: {
        id: userData.userId
      }
    });

    if(!findUser) throw new Error('User doesn\'t exist')

    await client.userData.create({
      data: {
        ...userData,
        healthData: {
          create: {
            ...healthInfo
          }
        }
      }
    });

    return { status: 'success', message: 'You have been successfully registered' };
  }
}

export { InsertUserInfo };