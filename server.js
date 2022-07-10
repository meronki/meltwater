import express from 'express';
import cors from 'cors';
import documentRouter from './routes.js';
const app = express();

app.use(cors());

app.use('/api', documentRouter);

app.listen(4000, () => {
  console.log('server running');
});
