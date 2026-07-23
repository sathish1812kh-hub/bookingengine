import { pgTable, uuid, text, timestamp, integer, uniqueIndex, index } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { organizations } from './organization';

export const users = pgTable(
  'users',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    organizationId: uuid('organization_id')
      .notNull()
      .references(() => organizations.id, { onDelete: 'cascade' }),
    employeeCode: text('employee_code'),
    username: text('username').notNull(),
    primaryEmail: text('primary_email').notNull(),
    passwordHash: text('password_hash').notNull(),
    status: text('status').notNull().default('active'), // active, suspended, archived, locked
    lastLoginAt: timestamp('last_login_at', { withTimezone: true }),
    failedLoginAttempts: integer('failed_login_attempts').notNull().default(0),
    passwordChangedAt: timestamp('password_changed_at', { withTimezone: true }),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
    deletedAt: timestamp('deleted_at', { withTimezone: true }),
  },
  (table) => [
    uniqueIndex('idx_users_org_email').on(table.organizationId, table.primaryEmail),
    uniqueIndex('idx_users_org_username').on(table.organizationId, table.username),
    index('idx_users_org_id').on(table.organizationId),
  ],
);

export const userProfiles = pgTable(
  'user_profiles',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: uuid('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    firstName: text('first_name').notNull(),
    lastName: text('last_name').notNull(),
    displayName: text('display_name').notNull(),
    avatar: text('avatar'),
    timezone: text('timezone').notNull().default('UTC'),
    language: text('language').notNull().default('en'),
    phone: text('phone'),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex('idx_user_profiles_user_id').on(table.userId),
  ],
);

export const userEmails = pgTable(
  'user_emails',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: uuid('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    email: text('email').notNull(),
    isVerified: text('is_verified').notNull().default('false'),
    verifiedAt: timestamp('verified_at', { withTimezone: true }),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex('idx_user_emails_email').on(table.email),
    index('idx_user_emails_user_id').on(table.userId),
  ],
);

export const userPhones = pgTable(
  'user_phones',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: uuid('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    phone: text('phone').notNull(),
    isVerified: text('is_verified').notNull().default('false'),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    index('idx_user_phones_user_id').on(table.userId),
  ],
);

export const userPreferences = pgTable(
  'user_preferences',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: uuid('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    theme: text('theme').notNull().default('dark'),
    notificationsEnabled: text('notifications_enabled').notNull().default('true'),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex('idx_user_preferences_user_id').on(table.userId),
  ],
);

// Drizzle Relations
export const usersRelations = relations(users, ({ one, many }) => ({
  organization: one(organizations, {
    fields: [users.organizationId],
    references: [organizations.id],
  }),
  profile: one(userProfiles, {
    fields: [users.id],
    references: [userProfiles.userId],
  }),
  preferences: one(userPreferences, {
    fields: [users.id],
    references: [userPreferences.userId],
  }),
  emails: many(userEmails),
  phones: many(userPhones),
}));
