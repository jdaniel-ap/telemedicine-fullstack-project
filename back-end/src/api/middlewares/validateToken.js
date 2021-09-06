require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.REACT_APP_SECRET;

module.exports = (req, _res, next) => {
  console.log('validating token..')
  const token = req.headers.authorization;
  if (!token) return next({ error: { statusCode: 401, message: 'Token not found' } });

  try {
    const decodedData = jwt.verify(token, jwtSecret);
      req.decoded = decodedData;
      next();
  } catch (error) {
    return next({
      error: {
        statusCode: 401,
        message: 'Expired or invalid token',
      },
    });
  }
};
