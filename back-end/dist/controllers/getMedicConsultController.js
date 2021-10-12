"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _getMedicConsult = require('./../services/getMedicConsult');


 class GetMedicConsultController {
  async handle(_req, res) {
    const { id } = res.locals.user;

    const getMedicConsult = new (0, _getMedicConsult.GetMedicConsult)(id);

    const medicConsults = await getMedicConsult.execute();

    return res.status(200).json(medicConsults);
  }
} exports.GetMedicConsultController = GetMedicConsultController;