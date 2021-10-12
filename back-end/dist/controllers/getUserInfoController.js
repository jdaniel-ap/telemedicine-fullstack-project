"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _getUserInfo = require('../services/getUserInfo');


 class GetUserInfoController {
  async handle(req, res) {
      const { id } = res.locals.user;

      const findUserInfo = new (0, _getUserInfo.GetUserInfo)(id);

      const user = await findUserInfo.execute();

      res.status(200).json(user);
  }
} exports.GetUserInfoController = GetUserInfoController;