"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _updateUserInfo = require('./../services/updateUserInfo');


 class UpdateUserInfoController {
  async handle(req, res) {
    const { body } = req;
    const { id } = res.locals.user;

    const updateUserInfo = new (0, _updateUserInfo.UpdateUserInfo)(body.userData, body.userHealthData, id);

    const update = await updateUserInfo.execute();

    res.status(201).json(update);
    
  }
} exports.UpdateUserInfoController = UpdateUserInfoController;