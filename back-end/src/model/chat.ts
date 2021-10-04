import { connection } from "./connection";

export const createRoom = async (data) => {
  const { id, userId, medicId, createAt } = data;
  const currency =  await  connection.then((db) => 
  db.collection('history').insertOne({ pacient: userId, medic: medicId, room: id, messages: [] }).then(result => console.log(result)));
}

