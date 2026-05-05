import express from 'express'
import dotenv from 'dotenv'
import {
  authRouter, 
  productRouter,
  cartRouter,
  healRouter,
  testRouter
} from './routers/index.js'
import { errorMiddleware } from './middleware/errorMiddleware.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use('/test', testRouter);
app.use('/health', healRouter);
app.use('/auth', authRouter);
app.use('/products', productRouter);
app.use('/carts', cartRouter);

app.use(errorMiddleware);

export default app;