import { client } from "../prisma/client";
import { sign } from 'jsonwebtoken';
import 'dotenv/config';

interface IUserUpdateRequest {
  username?: string,
  fullname?: string,
  email?: string,
}

class UpdateUser {
  username: string;
  fullname: string;
  email: string;

  constructor({ username, fullname, email } : IUserUpdateRequest) {
    this.username = username;
    this.fullname = fullname;
    this.email = email;
  }

  async execute() {
    const userAlreadyExist = await client.user.findFirst({
      where: {
        email: this.email,
      }
    });

    const { password: _, ...userData} = userAlreadyExist;

    if(!userAlreadyExist) throw new Error('data error');

    const user = await client.user.update({
      where: {
        email: this.email,
      },
      data: {
        username: this.username,
        email: this.email
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