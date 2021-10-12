import { client } from "../prisma/client";

interface IUpdateConsultStatus {
  consultId: number
  consultStatus: string
}

export class UpdateConsultStatus {
  consultId: number;
  consultStatus : string;

  constructor(consult: IUpdateConsultStatus) {
    Object.assign(this, consult)
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