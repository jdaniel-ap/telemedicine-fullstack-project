const Joi = require('joi');
const { code } = require('../helpers/messages');
const { getUser } = require('../model/usersModel');

const validateUserForm = (data) =>
  Joi.object({
    username: Joi.string().min(8).required().messages({
      'any.required': '"username" is required',
      'string.min': '"username" length must be at least 8 characters long',
    }),
    email: Joi.string().email().required().messages({
      'any.required': '"email" is required',
      'string.email': '"email" must be a valid email',
    }),
    password: Joi.string().min(6).required().messages({
      'string.min': '"password" length must be 6 characters long',
      'any.required': '"password" is required',
    }),
    medicRole: Joi.required().messages({
    }),
  }).validate(data);

const validateForm = async (req, res, next) => {
  const data = req.body;
  const { error } = validateUserForm(data);
  const findUser = await getUser(data.username);

  try {
    if(error) {
      const userInfoResponse = { code: 400, message: error.details[0].message };
      throw userInfoResponse;
    }
    if(findUser) {
      const userInfoResponse = { code: 400, message: 'User already registered' };
      throw userInfoResponse;
    }
    next();
  } catch (err) {
    return res.status(code.BAD_REQUEST).json({ message: err.message });
  }
};

module.exports = validateForm;