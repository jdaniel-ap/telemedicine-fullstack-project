import { client } from '../prisma/client';

export class GetPacientData {
  pacientId: string;
  medicId: string;

  constructor(pacientId: string, medicId: string) {
    this.pacientId = pacientId;
    this.medicId = medicId;
  }

  async execute() {
    const doctorHasTheCase = await client.consult.findFirst({
      where: {
        medicId: this.medicId
      }
    });

    if(!doctorHasTheCase) throw new Error('You do not have permission to access this data');

    const request = await client.userData.findFirst({
      where: {
        userId: this.pacientId
      },
      include: {
        healthData: true
      }
    });

    return request;
  }
}