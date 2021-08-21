const userModel = require('../model/usersModel');

const registerUser = async (req, res) => {
  const data = req.body;
  const request = await userModel.registerUser(data);

  return res.status(200).json(request);
}

module.exports = {
  registerUser
}