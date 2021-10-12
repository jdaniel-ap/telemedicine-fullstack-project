"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _updateUser = require('../services/updateUser');

class UpdateUserController {
  async handle(req, res, next) {
    const { body } = req
    const updateUser = new (0, _updateUser.UpdateUser)(body);

    const user = await updateUser.execute();

    res.status(201).json(user);

  }
}

exports.UpdateUserController = UpdateUserController;