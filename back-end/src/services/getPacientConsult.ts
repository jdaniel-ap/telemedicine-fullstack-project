import { client } from '../prisma/client';

export class GetPacientConsult {
  id: string;

  constructor(id : string) {
    this.id = id
  }

  async execute() {
    const user = await client.consult.findMany({
      where: {
        userId: this.id
      }
    });
    
    return user
  }
}