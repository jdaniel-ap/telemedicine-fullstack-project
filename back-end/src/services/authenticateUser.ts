import { IRequest } from './../common/types';
import { client } from "../prisma/client";
import { compare } from "bcryptjs";
import { sign } from 'jsonwebtoken';
import 'dotenv/config';

class AuthenticateUser {
  username: string;
  password: string;

  constructor({username, password} : IRequest) {
    this.username = username;
    this.password = password;
  }

  async execute() {

    const userAlreadyExist = await client.user.findFirst({
      where: {
        username: this.username
      }
    });

    if(!userAlreadyExist) throw new Error('Invalid user or email');

    const passwordMatch = await compare(this.password, userAlreadyExist.password);

    if(!passwordMatch) throw new Error('Invalid user or email');

    const { password:_, ...userData } = userAlreadyExist;
    const token =  sign(userData, process.env.SECRET_KEY, {
      subject: userAlreadyExist.id,
      expiresIn: '5m',
    });

    return { token, userInfo: {...userData } };
  }
}

export { AuthenticateUser }