import { client } from "../prisma/client";
import { compare } from "bcryptjs";
import { sign } from 'jsonwebtoken';
import 'dotenv/config';

interface IRequest {
  username: string,
  password: string,
}

class AuthenticateUser {
  async execute({ username, password } : IRequest) {

    const userAlreadyExist = await client.user.findFirst({
      where: {
        username
      }
    });

    if(!userAlreadyExist) throw new Error('Invalid user or email');

    const passwordMatch = await compare(password, userAlreadyExist.password);

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