import { FindUser } from './../utils/FindUser';
import { client } from "../prisma/client";
import { sign } from 'jsonwebtoken';
import 'dotenv/config';

interface IUserUpdateRequest {
  username?: string,
  fullname?: string,
  email?: string,
  id?: string,
}

class UpdateUser {
  username: string;
  fullname: string;
  email: string;
  id: string;

  constructor(data : IUserUpdateRequest) {
    Object.assign(this, data);
  }

  async execute() {

    const findUser = new FindUser(this.id);

    const user = await findUser.byId();
    
    if(!user) throw new Error('data error');

    const { password: _, ...userData} = user;

    await client.user.update({
      where: {
        id: this.id,
      },
      data: {
        username: this.username,
        email: this.email
      },
    });

    const token =  sign(userData, process.env.SECRET_KEY, {
      subject: user.id,
      expiresIn: '5m',
    });

    return { token, userInfo: {...userData}}
  }
}

export { UpdateUser }