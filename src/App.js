import express from 'express'
import authRouter from './routers/authRouter.js'

const app = express();

app.use(express.json());

app.use('/auth', authRouter)

app.use('/', (req, res) => {
  res.status(200).json({message: "Hello Word"});
});

export default app;