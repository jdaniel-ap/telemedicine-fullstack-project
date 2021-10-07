import { FindUser } from '../utils/FindUser';
import { IRequest } from './../common/types';
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

    const findUser = new FindUser(this.username);

    const user = await findUser.byUsername();

    if(!user) throw new Error('Invalid user or email');

    const passwordMatch = await compare(this.password, user.password);

    if(!passwordMatch) throw new Error('Invalid user or email');

    const { password:_, ...userData } = user;
    const token =  sign(userData, process.env.SECRET_KEY, {
      subject: userData.id,
      expiresIn: '5m',
    });

    return { token, userInfo: {...userData } };
  }
}

export { AuthenticateUser }