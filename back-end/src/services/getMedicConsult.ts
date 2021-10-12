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
      },
      select: {
        status: true,
        id: true,
        userId: true,
        motive: true,
        createdAt: true,
        user: {
          select: {
            userData: {
              select: {
                fullname: true,
              }
            }
          }
        }
      }
    });

    return request;
  }
}