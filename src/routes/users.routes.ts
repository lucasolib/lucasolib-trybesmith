import { Router } from 'express';
import UsersController from '../controller/user.controller';

const userRouter = Router();

const userController = new UsersController();

userRouter.post('/users', userController.create);

export default userRouter;