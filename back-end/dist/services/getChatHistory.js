"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _chat = require('./../model/chat');

 class GetChatHistory {
  
  

  constructor(userId, roomId) {
    this.userId = userId;
    this.roomId = roomId;
  }

  async getHistory() {
    const room = Number(this.roomId)
    const request = await _chat.getChatHistory.call(void 0, room);
    const findPermission = request.messages.find(({user}) => user === this.userId);

    if(!findPermission) throw new Error('Without permission');

    return request;
  }
} exports.GetChatHistory = GetChatHistory;