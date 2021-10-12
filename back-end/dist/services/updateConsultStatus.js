"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _client = require('../prisma/client');






 class UpdateConsultStatus {
  
  

  constructor(consult) {
    Object.assign(this, consult)
  }

  async execute() {
    const consult = this.findConsult(this.consultId);

    if(!consult) throw new Error('consult doesn\'t exist');

    await _client.client.consult.update({
      where: {
        id: this.consultId
      },
      data: {
        status: this.consultStatus
      }
    });
  }

  async findConsult(id) {
      return await _client.client.consult.findFirst({
        where: {
            id
          }
      });
    }
  } exports.UpdateConsultStatus = UpdateConsultStatus;