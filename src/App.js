import express from 'express'
import {
  authRouter, 
  productRouter,
  cardRouter
} from './routers/index.js'
import { errorMiddleware } from './middleware/errorMiddleware.js';

const app = express();

app.use(express.json());

app.use('/auth', authRouter)
app.use('/products', productRouter)
app.use('/cards', cardRouter)
app.use('/', (req, res) => {
  res.status(200).json({message: "Hello Word"});
});

app.use(errorMiddleware);

export default app;