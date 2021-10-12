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

    if(request.medic === this.userId || request.pacient === this.userId) return request;

    throw new Error('Without permission');
  }
}