"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _insertUserInfo = require('../services/insertUserInfo');


class InsertUserDataController {
  async handle(req, res) {
    const { id } = res.locals.user;
    const { userData, healthData } = req.body;

    const userInfo = {...userData, userId: id};

    const insertData = new (0, _insertUserInfo.InsertUserInfo)(userInfo, healthData);

    const user = await insertData.execute()

    res.status(201).json(user)
  }
}

exports.InsertUserDataController = InsertUserDataController;