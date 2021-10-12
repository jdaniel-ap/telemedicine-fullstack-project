"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _client = require('../prisma/client');

 class GetUserInfo {
  

  constructor(id ) {
    this.id = id;
  }

  async execute() {
    const findUserInfo = await _client.client.userData.findFirst({
      where: {
        userId: this.id,
      },
      include: {
        healthData: true
      }
    });

    return findUserInfo;
  }
} exports.GetUserInfo = GetUserInfo;