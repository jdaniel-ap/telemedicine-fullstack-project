"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _client3 = require('../prisma/client');

 class FindUser {
  
  

  constructor(identifier ) {
    this.identifier = identifier;
  }

  async byUsername() {
    const request = await _client3.client.user.findFirst({
      where: {
        username: this.identifier
      }
    });

    return request;
  }

  async byId() {
    return await _client3.client.user.findFirst({
      where: {
        id: this.identifier
      }
    });
  }

  async byEmail() {
    const request = await _client3.client.user.findFirst({
      where: {
        email: this.identifier
      }
    });
    
    return request
  }

} exports.FindUser = FindUser;