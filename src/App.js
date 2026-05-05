import express from 'express'
import dotenv from 'dotenv'
import {
  authRouter, 
  productRouter,
  cartRouter
} from './routers/index.js'
import { errorMiddleware } from './middleware/errorMiddleware.js';

dotenv.config();
const app = express();

app.use(express.json());

app.use('/auth', authRouter)
app.use('/products', productRouter)
app.use('/carts', cartRouter)
app.use('/', (req, res) => {
  res.status(200).json({message: "Hello Word"});
});

app.use(errorMiddleware);

export default app;