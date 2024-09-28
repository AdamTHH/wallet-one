import { noImage } from '@/constants';
import { integer, pgTable, serial, text, timestamp, date,  } from 'drizzle-orm/pg-core';
export const newsTable = pgTable('news', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  date: date('date').notNull(),
});

export const productsTable = pgTable('products', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  date: date('date').notNull(),
  image: text('image').default(noImage).notNull(),
});

export type InsertNews = typeof newsTable.$inferInsert;
export type SelectNews = typeof newsTable.$inferSelect;
export type InsertProduct = typeof productsTable.$inferInsert;
export type SelectProduct = typeof productsTable.$inferSelect;