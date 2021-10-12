"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _getPacientConsult = require('../services/getPacientConsult');


 class GetPacientConsultController {
  async handle(_req, res) {

    const { id } = res.locals.user;

    const getPacientConsult = new (0, _getPacientConsult.GetPacientConsult)(id);

    const request = await getPacientConsult.execute();

    res.status(200).json(request);
  }
} exports.GetPacientConsultController = GetPacientConsultController;