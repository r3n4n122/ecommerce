import express from 'express'
const app = express();

app.use(express.json());

app.use('/', (req, res) => {
  res.status(200).json({message: "Hello Word"});
});

export default app;