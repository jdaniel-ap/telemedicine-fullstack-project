"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _getPacientData = require('./../services/getPacientData');


 class GetPacientDataController {
  async handle(req, res) {
    const { params } = req;

    const { id } = res.locals.user;
    
    const getPacientData = new (0, _getPacientData.GetPacientData)(params.id, id);

    const pacientData = await getPacientData.execute();

    res.status(200).json(pacientData);
  }
} exports.GetPacientDataController = GetPacientDataController;