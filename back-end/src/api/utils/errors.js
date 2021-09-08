const emptyValuesErr = {
  response: {
    message: 'Invalid entries. Try again.',
  },
  status: 400,
};

const emailExistErr = {
  response: { 
    message: 'Email already registered', 
  },
  status: 409,
};

const emptyFieldsErr = {
  response: { 
    message: 'All fields must be filled', 
  },
  status: 401,
};

const incorrectField = {
  response: { 
    message: 'Incorrect username or password', 
  },
  status: 401,
};

const jwtErr = {
  response: { 
    message: 'jwt malformed', 
  },
  status: 401,
};

const notFoundErr = {
  response: {
    message: 'recipe not found',
  },
  status: 404,
};

const missingToken = { response: { message: 'missing auth token' }, status: 401 };

const wrongUser = { response: { message: 'without permission' }, status: 200 };

const notAdminErr = {
  response: {
    message: 'Only admins can register new admins',
  },
  status: 403,
};

module.exports = {
  emptyValuesErr,
  emailExistErr,
  emptyFieldsErr,
  incorrectField,
  jwtErr,
  notFoundErr,
  missingToken,
  wrongUser,
  notAdminErr,
};