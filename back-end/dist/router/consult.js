"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _getChatHistoryController = require('./../controllers/getChatHistoryController');
var _getPacientDataController = require('./../controllers/getPacientDataController');
var _getMedicConsultController = require('./../controllers/getMedicConsultController');
var _getPacientConsultsController = require('./../controllers/getPacientConsultsController');
var _generateConsultController = require('./../controllers/generateConsultController');
var _express = require('express');
var _validateToken = require('../middlewares/validateToken');

const consultRouter = _express.Router.call(void 0, );


const generateConsult = new (0, _generateConsultController.GenerateConsultController)();
const getPacientConsults = new (0, _getPacientConsultsController.GetPacientConsultController)();
const getMedicConsults = new (0, _getMedicConsultController.GetMedicConsultController)();
const getPacientData = new (0, _getPacientDataController.GetPacientDataController)();
const getChatHistory = new (0, _getChatHistoryController.GetChatHistoryController)();

consultRouter.post('/new', _validateToken.validateToken, generateConsult.handle);
consultRouter.get('/pacient', _validateToken.validateToken, getPacientConsults.handle);
consultRouter.get('/medic', _validateToken.validateToken, getMedicConsults.handle);
consultRouter.get('/medic/pacientData/:id', _validateToken.validateToken, getPacientData.handle);
consultRouter.get('/chat/history/:id', _validateToken.validateToken, getChatHistory.handle);

exports.consultRouter = consultRouter;