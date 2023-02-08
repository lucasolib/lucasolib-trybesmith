import { Router } from 'express';
import OrdersController from '../controller/order.controller';

const orderRouter = Router();

const orderController = new OrdersController();

orderRouter.get('/orders', orderController.getAll);

export default orderRouter;