import { User } from ".prisma/client";
import { client } from "../prisma/client";

export class FindUser {
  identifier: string;
  user : User;

  constructor(identifier : string) {
    this.identifier = identifier;
  }

  async byUsername() {
    const request = await client.user.findFirst({
      where: {
        username: this.identifier
      },
      include: {
        userData: {
          select: {
            id: true,
            fullname: true,
          }
        }
      }
    });

    return request;
  }

  async byId() {
    return await client.user.findFirst({
      where: {
        id: this.identifier
      },
    });
  }

  async byEmail() {
    const request = await client.user.findFirst({
      where: {
        email: this.identifier
      }
    });
    
    return request
  }

}