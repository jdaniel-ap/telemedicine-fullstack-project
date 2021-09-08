const userModel = require('../model/usersModel');
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const errors = require('../utils/errors');
const {code} = require('../helpers/messages');

const SECRET = 'medtools';

const jwtConfig = {
  expiresIn: '5m',
  algorithm: process.env.REACT_APP_ALGORITHM,
};

const registerUser = async (data) => {
  const { password, ...userData } = data;
  const hashPass = {password: md5(password)};
  const request = await userModel.registerUser({...hashPass, ...userData});
  
  return request;

}

const editData = async (data, decoded) => {
  const { _id, username } = decoded;
  const findUser = await userModel.getUser(username);
  const userData = {...data, _id};
  const newToken = await jwt.sign(userData, SECRET, jwtConfig);

  if(!findUser) return {error: code.CONFLICT, message: errors.notFoundErr.response}

  const request = await userModel.editUserData(userData, newToken);

  return request;

}

module.exports = {
  registerUser,
  editData
}