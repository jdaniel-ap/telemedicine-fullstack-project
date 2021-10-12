"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _FindUser = require('./../utils/FindUser');
var _client = require('../prisma/client');


class InsertUserInfo {
  
  

  constructor(userData, healthInfo) {
    this.userData = userData;
    this.healthInfo = healthInfo;
  }
  
  async execute() {

    const findUser = new (0, _FindUser.FindUser)(this.userData.userId);

    const user = findUser.byId();

    if(!user) throw new Error('User doesn\'t exist')

    await _client.client.userData.create({
      data: {
        ...this.userData,
        healthData: {
          create: {
            ...this.healthInfo
          }
        }
      }
    });

    return { status: 'success', message: 'Your data have been successfully updated' };
  }
}

exports.InsertUserInfo = InsertUserInfo;