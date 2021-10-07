import { FindUser } from '../utils/FindUser';
import { consultRequest, IUserId } from './../common/types';
import { client } from '../prisma/client';
import { createRoom } from '../model/chat';

export class GenerateConsult {
  consult: consultRequest;

  constructor(consult: consultRequest) {
    this.consult = consult
  }

  async execute() {

    const findUser = new FindUser(this.consult.medicId);

    const user = await findUser.byId();

    if(!user) throw new Error('User doesn\'t exist');

    if(user.role === 'USER') throw new Error('The ID provided is not associated with any doctor');

    const request = await client.consult.create({
      data: {
        ...this.consult
      }
    });

    await createRoom(request);
    
    return { status: 'success', message: 'request processed successfully' };
  }

}