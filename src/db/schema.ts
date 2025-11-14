import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

// Categories table for blog topics
export const categories = sqliteTable('categories', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull().unique(),
  description: text('description').notNull(),
  slug: text('slug').notNull().unique(),
  createdAt: text('created_at').notNull(),
});

// Posts table for blog posts
export const posts = sqliteTable('posts', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  slug: text('slug').notNull().unique(),
  excerpt: text('excerpt').notNull(),
  content: text('content').notNull(),
  categoryId: integer('category_id').references(() => categories.id),
  date: text('date').notNull(),
  readTime: text('read_time').notNull(),
  published: integer('published', { mode: 'boolean' }).default(false),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Contact submissions table for contact form
export const contactSubmissions = sqliteTable('contact_submissions', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull(),
  organization: text('organization'),
  message: text('message').notNull(),
  createdAt: text('created_at').notNull(),
});