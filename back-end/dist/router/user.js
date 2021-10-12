"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _updateUserInfoController = require('./../controllers/updateUserInfoController');



var _express = require('express');
var _authenticateUserController = require('../controllers/authenticateUserController');
var _createUserController = require('../controllers/createUserController');
var _updateUserController = require('../controllers/updateUserController');
var _validateToken = require('../middlewares/validateToken');
var _rateLimit = require('../middlewares/rateLimit');
var _insertUseInfoController = require('../controllers/insertUseInfoController');
var _getUserInfoController = require('../controllers/getUserInfoController');


const userRouter = _express.Router.call(void 0, );

const createUser = new (0, _createUserController.CreateUserController)();
const authenticateUser = new (0, _authenticateUserController.AuthenticateUserController)();
const updateUser = new (0, _updateUserController.UpdateUserController)();
const inserData = new (0, _insertUseInfoController.InsertUserDataController)();
const findUserInfo = new (0, _getUserInfoController.GetUserInfoController)();
const updateUserInfo = new (0, _updateUserInfoController.UpdateUserInfoController)();


userRouter.post('/sign-up', createUser.handle);
userRouter.post('/login', _rateLimit.limiter, authenticateUser.handle);
userRouter.put('/edit', _validateToken.validateToken, updateUser.handle);
userRouter.post('/user-data/update', _validateToken.validateToken, updateUserInfo.handle)
userRouter.post('/user-data', _validateToken.validateToken, inserData.handle);
userRouter.get('/user-data/health', _validateToken.validateToken, findUserInfo.handle);

exports.userRouter = userRouter;