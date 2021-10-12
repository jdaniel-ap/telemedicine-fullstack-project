"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _client = require('../prisma/client');

 class GetPacientConsult {
  

  constructor(id ) {
    this.id = id
  }

  async execute() {
    const user = await _client.client.consult.findMany({
      where: {
        userId: this.id
      }
    });
    
    return user
  }
} exports.GetPacientConsult = GetPacientConsult;