const Joi = require('joi');
const { code } = require('../helpers/messages');
const { getUser } = require('../model/usersModel');

const validateUserForm = (data) =>
  Joi.object({
    username: Joi.string().min(5).required().messages({
      'any.required': '"username" is required',
      'string.min': '"username" length must be at least 5 characters long',
    }),
    fullname: Joi.string().min(6).required().messages({
      'any.required': '"fullname" is required',
      'string.min': '"fullname" length must be at least 6 characters long',
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
  const errors = require('../utils/errors')
  const findUser = await getUser(data.username);

  try {
    if(error) {
      const userInfoResponse = { code: 400, message: error.details[0].message };
      throw userInfoResponse;
    }
    if(findUser) {
      const userInfoResponse = { code: errors.emailExistErr, message: errors.emailExistErr };
      throw userInfoResponse;
    }
    next();
  } catch (err) {
    return res.status(code.BAD_REQUEST).json({ message: err.message });
  }
};

module.exports = {validateForm};