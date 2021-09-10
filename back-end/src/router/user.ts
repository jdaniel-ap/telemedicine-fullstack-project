import { Router } from 'express';
import { AuthenticateUserController } from '../controllers/authenticateUserController';
import { CreateUserController } from '../controllers/createUserController';
import { UpdateUserController } from '../controllers/updateUserController';
import { validateToken } from '../middlewares/validateToken';

const userRouter = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const updateUserController = new UpdateUserController();

userRouter.post('/', createUserController.handle);
userRouter.post('/login', authenticateUserController.handle);
userRouter.put('/edit', validateToken, updateUserController.handle)

export { userRouter };