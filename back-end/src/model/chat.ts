import { connection } from "./connection";

export const createRoom = async (data) => {
  const { id, userId, medicId, createAt } = data;
  await  connection.then((db) => 
    db.collection('history').insertOne({ pacient: userId, medic: medicId, room: id, messages: [] }).then(result => console.log(result)));
}

export const updateChatHistory = async (data) => {
  const id = Number(data.room)

  await connection.then((db) => 
    db.collection('history').updateOne({ room: id }, { $push: {  messages: data } } ));
}

export const getChatHistory = async (id: number) => {
  return await connection.then((db) => 
  db.collection('history').findOne({ room: id } ));
}

