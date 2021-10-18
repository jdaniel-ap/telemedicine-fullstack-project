import { FindUser } from '../utils/FindUser';
import { consultRequest, IUserId, IImage } from './../common/types';
import { client } from '../prisma/client';
import { createRoom } from '../model/chat';
import { v2 } from '../model/cloudinary';

export class GenerateConsult {
  consult: consultRequest;
  image: string

  constructor(consult: consultRequest, image : string) {
    this.consult = consult;
    this.image = image;
  }

  async execute() {

    const findUser = new FindUser(this.consult.medicId);

    const user = await findUser.byId();

    if(!user) throw new Error('User doesn\'t exist');


    // if(!user.userData) throw new Error('you have to provide your medical information before you can make a consultation');
    
    if(user.role === 'USER') throw new Error('The ID provided is not associated with any doctor');
    
    const img = await this.upload(this.image);

    if(!img.url) throw new Error('Image can\'t be uploaded');
    
    const request = await client.consult.create({
      data: {
        ...this.consult
      }
    });


    await createRoom(request, img);
    
    return { status: 'success', message: 'request processed successfully' };
  }

  async upload(image) {
    try {
      if(!image) return { url: 'https://freefrontend.com/assets/img/500-error-page-html-templates/HTML-500-Internal-Error.png', format: 'png'}
      const request = await v2.uploader.upload(image, {
          upload_preset: 'ml_default',
      });
      return request
  } catch (err) {
      console.error(err);
  }

  }

}