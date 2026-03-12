import { DOTENV } from './src/utils/dotenv-local.ts';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'sqlite',
  dbCredentials: {
    url: DOTENV.DATABASE_PATH!,
  },
});