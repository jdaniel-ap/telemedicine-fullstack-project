import { connection } from "./connection";
import { uuid } from 'uuidv4';

export const createRoom = async (data, image : object) => {
  const { id, userId, medicId } = data;
  await connection.then((db) => 
    db.collection('history').insertOne({ pacient: userId, medic: medicId, images: [image], room: id, messages: [] }));
}

export const updateChatHistory = async (data) => {
  const id = Number(data.room);
  const objectId = uuid();

  const info = { id: objectId, ...data};

  const consult = await connection.then((db) =>  db.collection('history').findOne({ room: id}));

  if(consult.pacient === data.user || consult.medic === data.user) return await connection.then((db) => 
  db.collection('history').updateOne({ room: id }, { $push: {  messages: info } } ));
  
}

export const getChatHistory = async (id: number) => {
  return await connection.then((db) => 
  db.collection('history').findOne({ room: id } ));
}

