const userModel = require('../model/usersModel');
const loginModel = require('../model/loginModel');
const errors = require('../utils/errors');
const md5 = require('md5');


const verifyUserData = async (data) => {
  const { username, password } = data;
  const hashPass = md5(password);
  const userRequest = await userModel.getUser(username);
  if(userRequest.password !== hashPass || userRequest.username !== username) {
    return { message: errors.wrongUser.response };
  };

  const { password: _, ...setUser } = userRequest;

  const loginRequest = await loginModel(setUser);

  return loginRequest;

}

module.exports = verifyUserData