require('dotenv').config();

const userModel = require('./usersModel');
const jwt = require('jsonwebtoken');

const SECRET = 'medtools';

const jwtConfig = {
  expiresIn: '5m',
  algorithm: process.env.REACT_APP_ALGORITHM,
};

const signIn = async (data) => {
  const { username, medicRole, fullname, email, _id } = data;
  const requestToken = await jwt.sign(data, SECRET, jwtConfig);
  return { token: requestToken, userInfo: { id: _id, fullname, username, email, medicRole } }
}

module.exports = signIn