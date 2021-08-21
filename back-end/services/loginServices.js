const userModel = require('../model/usersModel');
const loginModel = require('../model/loginModel');

const verifyUserData = async (data) => {
  const { username, password } = data;
  const userRequest = await userModel.getUser(username);
  if(userRequest.password !== password || userRequest.username !== username) {
    return { message: 'username or password are wrong'};
  };

  const loginRequest = await loginModel(data);

  return loginRequest;

}

module.exports = verifyUserData