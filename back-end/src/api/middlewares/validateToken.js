const jwt = require('jsonwebtoken');
const userModel = require('../model/usersModel');
const errors = require('../utils/errors');

const SECRET = 'medtools';

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
   return res.status(401).json({ response: { message: 'missing auth token' }, status: 401 });
  }
  try {
    const payload = jwt.verify(token, SECRET);
    const user = await userModel.getUser(payload.username);
    
    if (!user) return { message: errors.incorrectField, status: 401 };


    req.user = user;
    next();
  } catch (err) {
    res.status(errors.jwtErr.status).json(errors.jwtErr.response);
  }
};

module.exports = {
  validateToken,
};
