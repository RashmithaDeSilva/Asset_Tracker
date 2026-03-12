// dotenv-local.ts
import dotenv from 'dotenv';

dotenv.config({ debug: true });
console.log('Dotenv inject');

export const DOTENV = {
  API_PORT: Number(process.env.API_PORT || 3001),
  API_VERSION: process.env.API_VERSION || 'v1',

  // Database
  DATABASE_PATH: process.env.DATABASE_PATH || './db/asset.db'
};