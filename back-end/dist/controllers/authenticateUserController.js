"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _authenticateUser = require('../services/authenticateUser');
class AuthenticateUserController {
  async handle(req, res) {
    const { body } = req;

    const authenticateUser = new (0, _authenticateUser.AuthenticateUser)(body);

    const user = await authenticateUser.execute();


    return res.status(200).json(user);
  }
}

exports.AuthenticateUserController = AuthenticateUserController;