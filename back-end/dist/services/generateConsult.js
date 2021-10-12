"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _FindUser = require('../utils/FindUser');

var _client = require('../prisma/client');
var _chat = require('../model/chat');

 class GenerateConsult {
  

  constructor(consult) {
    this.consult = consult
  }

  async execute() {

    const findUser = new (0, _FindUser.FindUser)(this.consult.medicId);

    const user = await findUser.byId();

    if(!user) throw new Error('User doesn\'t exist');

    if(user.role === 'USER') throw new Error('The ID provided is not associated with any doctor');

    const request = await _client.client.consult.create({
      data: {
        ...this.consult
      }
    });

    await _chat.createRoom.call(void 0, request);
    
    return { status: 'success', message: 'request processed successfully' };
  }

} exports.GenerateConsult = GenerateConsult;