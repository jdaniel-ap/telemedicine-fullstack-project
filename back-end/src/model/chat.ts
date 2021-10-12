import { connection } from "./connection";
import { uuid } from 'uuidv4';

export const createRoom = async (data) => {
  const { id, userId, medicId, createAt } = data;
  await  connection.then((db) => 
    db.collection('history').insertOne({ pacient: userId, medic: medicId, room: id, messages: [] }).then(result => console.log(result)));
}

export const updateChatHistory = async (data) => {
  const id = Number(data.room);
  const objectId = uuid();

  const info = { id: objectId, ...data}

  await connection.then((db) => 
    db.collection('history').updateOne({ room: id }, { $push: {  messages: info } } ));
}

export const getChatHistory = async (id: number) => {
  return await connection.then((db) => 
  db.collection('history').findOne({ room: id } ));
}

