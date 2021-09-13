import { client } from "../prisma/client";
import { sign } from 'jsonwebtoken';
import 'dotenv/config';

interface IUserUpdateRequest {
  username?: string,
  fullname?: string,
  email?: string,
}

class UpdateUser {
  async execute({ username, fullname, email } : IUserUpdateRequest) {
    const userAlreadyExist = await client.user.findFirst({
      where: {
        email,
      }
    });

    const { password: _, ...userData} = userAlreadyExist;

    if(!userAlreadyExist) throw new Error('data error');

    const user = await client.user.update({
      where: {
        email,
      },
      data: {
        username,
        email
      },
    });

    const token =  sign(userData, process.env.SECRET_KEY, {
      subject: userAlreadyExist.id,
      expiresIn: '5m',
    });


    return { token, userInfo: {...userData}}

  }
}

export { UpdateUser }