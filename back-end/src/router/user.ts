import { Router } from 'express';
import { AuthenticateUserController } from '../controllers/authenticateUserController';
import { CreateUserController } from '../controllers/createUserController';
import { UpdateUserController } from '../controllers/updateUserController';
import { validateToken } from '../middlewares/validateToken';
import { limiter } from '../middlewares/rateLimit';
import { InsertUserDataController } from '../controllers/insertUseInfoController';

const userRouter = Router();

const createUser = new CreateUserController();
const authenticateUser = new AuthenticateUserController();
const updateUser = new UpdateUserController();
const inserData = new InsertUserDataController();


userRouter.post('/sign-up', createUser.handle);
userRouter.post('/login', limiter, authenticateUser.handle);
userRouter.put('/edit', validateToken, updateUser.handle);
userRouter.post('/user-data', validateToken, inserData.handle)

export { userRouter };