"use strict";var _app = require('./app');
require('dotenv/config');

const PORT = process.env.PORT;

_app.httpServer.listen(PORT, () => console.log(`App running on port: ${PORT}`));
  