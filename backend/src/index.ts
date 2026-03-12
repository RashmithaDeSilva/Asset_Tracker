import express from 'express';
import cors from 'cors';
import { assets } from './db/schema';
import { db } from './config/database.config';
import { DOTENV } from './utils/dotenv-local';

const app = express();
app.use(cors());

app.get(`/${DOTENV.API_VERSION}/api/assets`, (req, res) => {
  const allAssets = db.select().from(assets).all();
  res.json(allAssets);
});

app.listen(DOTENV.API_PORT, () => console.log(`Backend running on port ${ DOTENV.API_PORT }`));