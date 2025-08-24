import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './Routes/ai.routes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Everything is working");
});

app.use('/ai', router);

export default app;
