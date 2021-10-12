"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _client = require('../prisma/client');

 class GetMedicConsult {
  
  
  constructor(id ) {
    this.id = id;
  }

  async execute() {
    const request = await _client.client.consult.findMany({
      where: {
        medicId: this.id
      },
      select: {
        status: true,
        id: true,
        userId: true,
        motive: true,
        createdAt: true,
        user: {
          select: {
            userData: true
          }
        }
      }
    });

    return request;
  }
} exports.GetMedicConsult = GetMedicConsult;