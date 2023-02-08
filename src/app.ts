import express from 'express';
import productRouter from './routes/products.routes';
import userRouter from './routes/users.routes';
import orderRouter from './routes/orders.routes';

const app = express();

app.use(express.json());

app.use(productRouter);
app.use(userRouter);
app.use(orderRouter);

export default app;
