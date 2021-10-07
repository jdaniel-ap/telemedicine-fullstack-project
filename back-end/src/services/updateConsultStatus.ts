import { client } from "../prisma/client";

interface IUpdateConsultStatus {
  consultId: number
  consultStatus: string
}

export class UpdateConsultStatus {
  consultId: number;
  consultStatus : string;

  constructor({consultId, consultStatus} : IUpdateConsultStatus) {
    this.consultId = consultId;
    this.consultStatus = consultStatus;
  }

  async execute() {
    const consult = this.findConsult(this.consultId);

    if(!consult) throw new Error('consult doesn\'t exist');

    await client.consult.update({
      where: {
        id: this.consultId
      },
      data: {
        status: this.consultStatus
      }
    });
  }

  async findConsult(id: number) {
      return await client.consult.findFirst({
        where: {
            id
          }
      });
    }
  }