import { Router } from 'express';
import ProductsController from '../controller/product.controller';

const productRouter = Router();

const productController = new ProductsController();

productRouter.get('/products', productController.getAll);
productRouter.post('/products', productController.create);

export default productRouter;