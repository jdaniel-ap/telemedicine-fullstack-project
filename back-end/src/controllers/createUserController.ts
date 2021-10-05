import { Request, Response } from "express";
import { CreateUser } from "../services/createUser";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { body } = request;

    const createUser = new CreateUser(body);

    const user = await createUser.execute();

    return response.status(200).json(user);
  }
}


export { CreateUserController };