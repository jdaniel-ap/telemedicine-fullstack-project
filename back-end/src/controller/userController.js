const userServices = require('../api/services/user');

const registerUser = async (req, res) => {
  const data = req.body;
  const request = await userServices.registerUser(data);

  return res.status(200).json(request);
}

const editUserData = async (req, res) => {
  const { body, decoded } = req;
  console.log(decoded)
  const request = await userServices.editData(body, decoded);
  res.status(201).json(request)

}

module.exports = {
  registerUser,
  editUserData
}