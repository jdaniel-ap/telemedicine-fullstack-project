"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _expressratelimit = require('express-rate-limit'); var _expressratelimit2 = _interopRequireDefault(_expressratelimit);
require('dotenv/config');

 const limiter = _expressratelimit2.default.call(void 0, {
  windowMs: 60 * 60 * 1000,
  max: Number(process.env.CALL_PER_HOUR),
  message: "Too many requests, please try again later",
  skipSuccessfulRequests: true
}); exports.limiter = limiter;
