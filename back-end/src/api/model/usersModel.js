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

const editUserData = async (data, token) => {
  const userData = { token, userInfo: data };
  const request = await connection().then((db) => 
    db.collection('users').updateOne(
      { username: data.username}, 
      { $set: { username: data.username, email: data.email, fullname: data.fullname }}));
    if(request.modifiedCount === 1) {
      console.log(userData)
      return userData
    }

  return { message: 'user not able to edit'};
}

module.exports = {
  registerUser,
  getUser,
  editUserData
}