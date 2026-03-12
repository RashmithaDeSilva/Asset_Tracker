import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from '../db/schema';
import { DOTENV } from '../utils/dotenv-local';

// Initialize the SQLite connection
const sqlite = new Database(DOTENV.DATABASE_PATH);

// Create the Drizzle singleton
export const db = drizzle(sqlite, { schema });

const initDb = () => {
  const result = db.select().from(schema.assets).all();
  if (result.length === 0) {
    db.insert(schema.assets).values([
      { name: 'ESP32 Development Board', category: 'Microcontroller', stock: 15 },
      { name: 'Raspberry Pi 4', category: 'SBC', stock: 5 },
      { name: 'Cat6 Ethernet Cable (5m)', category: 'Networking', stock: 30 },
    ]).run();
    console.log('🌱 Database seeded successfully');
  }
};

initDb();