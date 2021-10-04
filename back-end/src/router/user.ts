import { GetPacientConsultController } from './../controllers/getPacientConsultsController';
import { GenerateConsultController } from './../controllers/generateConsultController';
import { Router } from 'express';
import { AuthenticateUserController } from '../controllers/authenticateUserController';
import { CreateUserController } from '../controllers/createUserController';
import { UpdateUserController } from '../controllers/updateUserController';
import { validateToken } from '../middlewares/validateToken';
import { limiter } from '../middlewares/rateLimit';
import { InsertUserDataController } from '../controllers/insertUseInfoController';
import { FindUserInfoController } from '../controllers/findUserInfoController';
import { createRoom } from '../model/chat';

const userRouter = Router();

const createUser = new CreateUserController();
const authenticateUser = new AuthenticateUserController();
const updateUser = new UpdateUserController();
const inserData = new InsertUserDataController();
const findUserInfo = new FindUserInfoController();
const generateConsult = new GenerateConsultController();
const getPacientConsults = new GetPacientConsultController();


userRouter.post('/sign-up', createUser.handle);
userRouter.post('/login', limiter, authenticateUser.handle);
userRouter.put('/edit', validateToken, updateUser.handle);
userRouter.post('/user-data', validateToken, inserData.handle);
userRouter.get('/user-data/health', validateToken, findUserInfo.handle);
userRouter.post('/new/consult', validateToken, generateConsult.handle);
userRouter.get('/consult/pacient', validateToken, getPacientConsults.handle);
userRouter.post('/test', async (req, res) => {
  const { body } = req;

  await createRoom(body)
});

export { userRouter };