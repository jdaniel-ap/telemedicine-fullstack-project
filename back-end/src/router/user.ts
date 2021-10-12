import { UpdateUserInfoController } from './../controllers/updateUserInfoController';
import { Router } from 'express';
import { AuthenticateUserController } from '../controllers/authenticateUserController';
import { CreateUserController } from '../controllers/createUserController';
import { UpdateUserController } from '../controllers/updateUserController';
import { validateToken } from '../middlewares/validateToken';
import { limiter } from '../middlewares/rateLimit';
import { InsertUserDataController } from '../controllers/insertUseInfoController';
import { GetUserInfoController } from '../controllers/getUserInfoController';
import { GetPacientDataController } from '../controllers/getPacientDataController';

const userRouter = Router();

const createUser = new CreateUserController();
const authenticateUser = new AuthenticateUserController();
const updateUser = new UpdateUserController();
const inserData = new InsertUserDataController();
const findUserInfo = new GetUserInfoController();
const updateUserInfo = new UpdateUserInfoController();


userRouter.post('/sign-up', createUser.handle);
userRouter.post('/login', limiter, authenticateUser.handle);
userRouter.put('/edit', validateToken, updateUser.handle);
userRouter.post('/data/update', validateToken, updateUserInfo.handle)
userRouter.post('/data', validateToken, inserData.handle);
userRouter.get('/data/health', validateToken, findUserInfo.handle);

export { userRouter };