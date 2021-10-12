"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _connection = require('./connection');

 const createRoom = async (data) => {
  const { id, userId, medicId, createAt } = data;
  await  _connection.connection.then((db) => 
    db.collection('history').insertOne({ pacient: userId, medic: medicId, room: id, messages: [] }).then(result => console.log(result)));
}; exports.createRoom = createRoom

 const updateChatHistory = async (data) => {
  const id = Number(data.room)

  await _connection.connection.then((db) => 
    db.collection('history').updateOne({ room: id }, { $push: {  messages: data } } ));
}; exports.updateChatHistory = updateChatHistory

 const getChatHistory = async (id) => {
  return await _connection.connection.then((db) => 
  db.collection('history').findOne({ room: id } ));
}; exports.getChatHistory = getChatHistory

