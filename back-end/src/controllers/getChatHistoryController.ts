import { GetChatHistory } from './../services/getChatHistory';
import { Request, Response } from 'express';

export class GetChatHistoryController {
  async handle(req: Request, res: Response) {
    const { id } = res.locals.user;
    const { params } = req;

    const getChatHistory = new GetChatHistory(id, params.id);

    const request = await getChatHistory.getHistory();

    return res.status(200).json(request);
  }
}