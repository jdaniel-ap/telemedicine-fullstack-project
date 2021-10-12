"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _FindUser = require('./../utils/FindUser');
var _client = require('../prisma/client');
var _jsonwebtoken = require('jsonwebtoken');
require('dotenv/config');








class UpdateUser {
  
  
  
  

  constructor(data ) {
    Object.assign(this, data);
  }

  async execute() {

    const findUser = new (0, _FindUser.FindUser)(this.id);

    const user = await findUser.byId();
    
    if(!user) throw new Error('data error');

    const { password: _, ...userData} = user;

    await _client.client.user.update({
      where: {
        id: this.id,
      },
      data: {
        username: this.username,
        email: this.email
      },
    });

    const token =  _jsonwebtoken.sign.call(void 0, userData, process.env.SECRET_KEY, {
      subject: user.id,
      expiresIn: '5m',
    });

    return { token, userInfo: {...userData}}
  }
}

exports.UpdateUser = UpdateUser;