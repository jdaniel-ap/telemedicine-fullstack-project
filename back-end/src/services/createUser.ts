import { client } from '../prisma/client';
import { hash } from 'bcryptjs';
import Joi from 'joi';

interface IUserRequest {
  fullname: string,
  username: string,
  password: string,
  email: string,
  medicRole: boolean,
}

class CreateUser {

  async execute({ fullname, username, password, email, medicRole} : IUserRequest) {
    const userValues = {
      fullname, username, password, email, medicRole
    }

    const { error } = this.validateUserForm(userValues);

    const userAlreadyExist = await client.user.findFirst({ 
      where: {
        username
    }});

    const emailAlreadyExist = await client.user.findFirst({
      where: {
        email
      }
    });

    if(error) {
      throw new Error(error.details[0].message);
    }

    if(userAlreadyExist || emailAlreadyExist) {
      throw new Error('User or Email already exist');
    }

    const passwordHash = await hash(password, 8);

    const user = await client.user.create({
      data: {
        fullname,
        username,
        password: passwordHash,
        email,
        medicRole,
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
    fullname: Joi.string().min(6).required().messages({
      'any.required': '"fullname" is required',
      'string.min': '"fullname" length must be at least 6 characters long',
    }),
    email: Joi.string().email().required().messages({
      'any.required': '"email" is required',
      'string.email': '"email" must be a valid email',
    }),
    password: Joi.string().min(6).required().messages({
      'string.min': '"password" length must be 6 characters long',
      'any.required': '"password" is required',
    }),
    medicRole: Joi.required().messages({
    }),
  }).validate(data);

}

export { CreateUser };