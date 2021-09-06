const express = require('express');
const loginRouter = require('./router/login');
const userRouter = require('./router/user');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
const socketIoServer = require('http').createServer();

app.use(cors());
app.use('/user',loginRouter);
app.use('/user', userRouter);


module.exports = app;
