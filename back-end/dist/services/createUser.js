"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _FindUser = require('../utils/FindUser');
var _client = require('../prisma/client');
var _bcryptjs = require('bcryptjs');
var _joi = require('joi'); var _joi2 = _interopRequireDefault(_joi);


class CreateUser {
  
  
  
  
   

  constructor(data) {;CreateUser.prototype.__init.call(this);
    Object.assign(this, data);
  }

  async execute() {

    const userValues = {
      username: this.username,
      password: this.password,
      email: this.email,
      role: this.medicRole ? 'MEDIC' : 'USER',
    }
    const findUser = new (0, _FindUser.FindUser)(this.username);

    const user = await findUser.byUsername();

    const { error } = this.validateUserForm(userValues);

    const emailAlreadyExist = await _client.client.user.findFirst({
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

    const passwordHash = await _bcryptjs.hash.call(void 0, this.password, 8);

    userValues.password = passwordHash;

    await _client.client.user.create({
      data: {
        ...userValues
      },
    });


    return { status: 'success', message: 'You have been successfully registered' };
  }

  __init() {this.validateUserForm = (data) =>
  _joi2.default.object({
    username: _joi2.default.string().min(5).required().messages({
      'any.required': '"username" is required',
      'string.min': '"username" length must be at least 5 characters long',
    }),
    email: _joi2.default.string().email().required().messages({
      'any.required': '"email" is required',
      'string.email': '"email" must be a valid email',
    }),
    password: _joi2.default.string().min(6).required().messages({
      'string.min': '"password" length must be 6 characters long',
      'any.required': '"password" is required',
    }),
    role: _joi2.default.required().messages({
    }),
  }).validate(data)}

}

exports.CreateUser = CreateUser;