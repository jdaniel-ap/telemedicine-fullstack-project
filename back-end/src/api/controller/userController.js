const userServices = require('../services/user');

const registerUser = async (req, res) => {
  const data = req.body;
  const request = await userServices.registerUser(data);

  return res.status(200).json(request);
}

const editUserData = async (req, res) => {
  const { body, user } = req;
  console.log(body)
  const request = await userServices.editData(body, user);
  res.status(201).json(request)

}

module.exports = {
  registerUser,
  editUserData
}