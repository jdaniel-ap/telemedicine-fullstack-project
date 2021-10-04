import { consultRequest, IUserId } from './../common/types';
import { client } from '../prisma/client';
import { createRoom } from '../model/chat';

export class GenerateConsult {
  async execute(consult: consultRequest) {

    const user = await client.user.findFirst({
      where: {
        id: consult.medicId
      }
    });

    if(!user) throw new Error('User doesn\'t exist');

    if(user.role === 'USER') throw new Error('The ID provided is not associated with any doctor');

    const request = await client.consult.create({
      data: {
        ...consult
      }
    });

    console.log(request);

    await createRoom(request)
    
    return { status: 'success', message: 'request processed successfully' };
  }

}