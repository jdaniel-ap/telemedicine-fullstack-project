const loginModel = require('../api/model/loginModel');
const verifyUserData = require('../api/services/loginServices')

const loginController = async (req, res) => {
  const request = await verifyUserData({...req.body});
  return res.status(200).json(request);
}

module.exports = loginController;