import { client } from '../prisma/client';

export class GetMedicConsult {
  id: string;
  
  constructor(id : string) {
    this.id = id;
  }

  async execute() {
    const request = await client.consult.findMany({
      where: {
        medicId: this.id
      }
    });

    return request;
  }
}