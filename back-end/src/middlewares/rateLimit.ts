import rateLimit from 'express-rate-limit';
import 'dotenv/config';

export const limiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: Number(process.env.CALL_PER_HOUR),
  message: "Too many requests, please try again later",
  skipSuccessfulRequests: true
});
