"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _client = require('../prisma/client');

 class GetPacientData {
  
  

  constructor(pacientId, medicId) {
    this.pacientId = pacientId;
    this.medicId = medicId;
  }

  async execute() {
    const doctorHasTheCase = await _client.client.consult.findFirst({
      where: {
        medicId: this.medicId
      }
    });

    if(!doctorHasTheCase) throw new Error('You do not have permission to access this data');

    const request = await _client.client.userData.findFirst({
      where: {
        userId: this.pacientId
      },
      include: {
        healthData: true
      }
    });

    return request;
  }
} exports.GetPacientData = GetPacientData;