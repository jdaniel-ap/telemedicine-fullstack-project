import { FindUser } from '../utils/FindUser';
import { client } from '../prisma/client';
import { hash } from 'bcryptjs';
import Joi from 'joi';
import { IUserRequest, IUser } from '../common/types';

class CreateUser {
  fullname: string;
  username: string;
  password: string;
  email: string;
  medicRole: boolean; 

  constructor(data: IUserRequest) {
    Object.assign(this, data);
  }

  async execute() {

    const userValues: IUser = {
      username: this.username,
      password: this.password,
      email: this.email,
      role: this.medicRole ? 'MEDIC' : 'USER',
    }
    const findUser = new FindUser(this.username);

    const user = await findUser.byUsername();

    const { error } = this.validateUserForm(userValues);

    const emailAlreadyExist = await client.user.findFirst({
      where: {
        email: this.email
      }
    });

    if(error) {
      throw new Error(error.details[0].message);
    }

    if(user || emailAlreadyExist) {
      throw new Error('User or Email already exist');
    }

    const passwordHash = await hash(this.password, 8);

    userValues.password = passwordHash;

    await client.user.create({
      data: {
        ...userValues
      },
    });


    return { status: 'success', message: 'You have been successfully registered' };
  }

  validateUserForm = (data) =>
  Joi.object({
    username: Joi.string().min(5).required().messages({
      'any.required': '"username" is required',
      'string.min': '"username" length must be at least 5 characters long',
    }),
    email: Joi.string().email().required().messages({
      'any.required': '"email" is required',
      'string.email': '"email" must be a valid email',
    }),
    password: Joi.string().min(6).required().messages({
      'string.min': '"password" length must be 6 characters long',
      'any.required': '"password" is required',
    }),
    role: Joi.required().messages({
    }),
  }).validate(data);

}

export { CreateUser };