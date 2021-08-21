const loginModel = require('../model/loginModel');
const verifyUserData = require('../services/loginServices')

const loginController = async (req, res) => {
  const request = await verifyUserData({...req.body});
  return res.status(200).json(request);
}

module.exports = loginController;