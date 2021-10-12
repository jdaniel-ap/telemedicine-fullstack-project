"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _FindUser = require('../utils/FindUser');

var _bcryptjs = require('bcryptjs');
var _jsonwebtoken = require('jsonwebtoken');
require('dotenv/config');

class AuthenticateUser {
  
  

  constructor(credentials ) {
    Object.assign(this, credentials);
  }

  async execute() {

    const findUser = new (0, _FindUser.FindUser)(this.username);

    const user = await findUser.byUsername();

    if(!user) throw new Error('Invalid user or email');

    const passwordMatch = await _bcryptjs.compare.call(void 0, this.password, user.password);

    if(!passwordMatch) throw new Error('Invalid user or email');

    const { password:_, ...userData } = user;
    const token =  _jsonwebtoken.sign.call(void 0, userData, process.env.SECRET_KEY, {
      subject: userData.id,
      expiresIn: '5m',
    });

    return { token, userInfo: {...userData } };
  }
}

exports.AuthenticateUser = AuthenticateUser;