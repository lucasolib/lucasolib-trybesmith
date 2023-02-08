import express from 'express';
import productRouter from './routes/products.routes';
import userRouter from './routes/users.routes';
import orderRouter from './routes/orders.routes';
import loginRouter from './routes/login.routes';

const app = express();

app.use(express.json());

app.use(productRouter);
app.use(userRouter);
app.use(orderRouter);
app.use(loginRouter);

export default app;
