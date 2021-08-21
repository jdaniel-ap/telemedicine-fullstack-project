const connection = require('./connection');

const registerUser = async (data) => {
  const request = await connection().then((db) => 
    db.collection('users').insertOne({ ...data }));

    if(request.insertedId) {
      return { message: 'User successfully registered' };
    }

  return { message: 'Something went wrong'}
}

const getUser = async (data) => {
  const request = await connection().then((db) =>
    db.collection('users').findOne({ username: data }));
  return request;
}

module.exports = {
  registerUser,
  getUser
}