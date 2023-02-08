import { Router } from 'express';
import LoginController from '../controller/login.controller';
import loginMiddleware from '../middlewares/loginMiddleware';

const loginRouter = Router();

const loginController = new LoginController();

loginRouter.post('/login', loginMiddleware, loginController.login);

export default loginRouter;