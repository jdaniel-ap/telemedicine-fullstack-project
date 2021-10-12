"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _createUser = require('../services/createUser');

class CreateUserController {
  async handle(request, response) {
    const { body } = request;

    const createUser = new (0, _createUser.CreateUser)(body);

    const user = await createUser.execute();

    return response.status(200).json(user);
  }
}


exports.CreateUserController = CreateUserController;