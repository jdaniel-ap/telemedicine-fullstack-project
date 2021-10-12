"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _jsonwebtoken = require('jsonwebtoken');
require('dotenv/config');

 function validateToken(req, res, next) {
  const token = req.headers.authorization;

  if(!token) throw new Error("Missing auth token");
  try {
    const user = _jsonwebtoken.verify.call(void 0, token, process.env.SECRET_KEY);

    res.locals.user = user;

    return next();
  } catch(err) {
    throw new Error("Token invalid")
  }
} exports.validateToken = validateToken;