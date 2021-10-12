"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _FindUser = require('./../utils/FindUser');

var _client = require('../prisma/client');

 class UpdateUserInfo {
  
  
  

  constructor(userData, healthInfo, id) {
    this.userData = userData;
    this.healthInfo = healthInfo;
    this.id = id
  }

  async execute() {

    const findUser = new (0, _FindUser.FindUser)(this.id);

    const find = await findUser.byId();

    await _client.client.userData.update({
      where: {
        userId: find.id,
      },
      data: {
        ...this.userData,
        healthData: {
          update: {
            ...this.healthInfo
          }
        }
      },
      include: { healthData: true }
    });

    return { status: 'success', message: 'Your data have been successfully updated' };
  }
} exports.UpdateUserInfo = UpdateUserInfo;