"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _socket = require('./sockets/socket');
require('express-async-errors');
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _user = require('./router/user');
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);
var _http = require('http'); var _http2 = _interopRequireDefault(_http);
var _socketio = require('socket.io');
var _consult = require('./router/consult');


const app = _express2.default.call(void 0, );
const httpServer = _http2.default.createServer(app);


const io = new (0, _socketio.Server)(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  },
});

_socket.socketChat.call(void 0, io)

app.use(_express2.default.json());

app.use(_helmet2.default.hidePoweredBy());

app.use(_cors2.default.call(void 0, ));

app.use('/api/user', _user.userRouter);
app.use('/api/consult', _consult.consultRouter);

app.use((error, req, res, next) => {
  const err = {
    status: "error",
    message: error.message,
  }
  res.status(400).json(err);
});

exports.httpServer = httpServer;