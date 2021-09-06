const userModel = require('../model/usersModel');
const md5 = require('md5');

const registerUser = async (data) => {
  const { password, ...userData } = data;
  const hashPass = {password: md5(password)};


  const request = await userModel.registerUser({...hashPass, ...userData});
  
  return request;

}

const editData = async (data, token) => {
  const { username } = token;
  console.log(username)
  const findUser = await userModel.getUser(username);
  
  if(!findUser) return { error: 404 }

  const request = await userModel.editUserData(data);

  return request;

}

module.exports = {
  registerUser,
  editData
}