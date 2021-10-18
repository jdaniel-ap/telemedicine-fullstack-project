import { GetChatHistoryController } from './../controllers/getChatHistoryController';
import { GetPacientDataController } from './../controllers/getPacientDataController';
import { GetMedicConsultController } from './../controllers/getMedicConsultController';
import { GetPacientConsultController } from './../controllers/getPacientConsultsController';
import { GenerateConsultController } from './../controllers/generateConsultController';
import { Router } from 'express';
import { validateToken } from '../middlewares/validateToken';

const consultRouter = Router();


const generateConsult = new GenerateConsultController();
const getPacientConsults = new GetPacientConsultController();
const getMedicConsults = new GetMedicConsultController();
const getPacientData = new GetPacientDataController();
const getChatHistory = new GetChatHistoryController();

consultRouter.post('/new', validateToken, generateConsult.handle);
consultRouter.get('/pacient', validateToken, getPacientConsults.handle);
consultRouter.get('/medic', validateToken, getMedicConsults.handle);
consultRouter.get('/medic/pacientData/:id', validateToken, getPacientData.handle);
consultRouter.get('/chat/history/:id', validateToken, getChatHistory.handle);

export { consultRouter }


/* Crear alerta por si no hay conexion y alerta cuando el id no existe en consulta/agregar consulta por id o usuario */