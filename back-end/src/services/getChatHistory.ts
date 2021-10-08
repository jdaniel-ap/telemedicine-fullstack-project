import { getChatHistory } from './../model/chat';

export class GetChatHistory {
  userId: string;
  roomId: string;

  constructor(userId: string, roomId: string) {
    this.userId = userId;
    this.roomId = roomId;
  }

  async getHistory() {
    const room = Number(this.roomId)
    const request = await getChatHistory(room);
    const findPermission = request.messages.find(({user}) => user === this.userId);

    if(!findPermission) throw new Error('Without permission');

    return request;
  }
}