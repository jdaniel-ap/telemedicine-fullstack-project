"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _getChatHistory = require('./../services/getChatHistory');


 class GetChatHistoryController {
  async handle(req, res) {
    const { id } = res.locals.user;
    const { params } = req;

    const getChatHistory = new (0, _getChatHistory.GetChatHistory)(id, params.id);

    const request = await getChatHistory.getHistory();

    return res.status(200).json(request);
  }
} exports.GetChatHistoryController = GetChatHistoryController;