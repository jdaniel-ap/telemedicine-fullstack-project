require('dotenv').config();

const userModel = require('./usersModel');
const jwt = require('jsonwebtoken');

const SECRET = 'medtools';

const jwtConfig = {
  expiresIn: process.env.REACT_APP_SECRET,
  algorithm: process.env.REACT_APP_ALGORITHM,
};

const signIn = async (data) => {
  const requestToken = await jwt.sign(data, SECRET, jwtConfig);
  return { token: requestToken }
}

module.exports = signIn