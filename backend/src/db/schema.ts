import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const assets = sqliteTable('assets', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  category: text('category').notNull(),
  stock: integer('stock').notNull(),
});