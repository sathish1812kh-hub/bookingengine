import { pgTable, uuid, text, timestamp, boolean, uniqueIndex, index } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { organizations } from './organization';
import { users } from './user';
import { hotels } from './hotel';

export const userHotelAssignments = pgTable(
  'user_hotel_assignments',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: uuid('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    organizationId: uuid('organization_id')
      .notNull()
      .references(() => organizations.id, { onDelete: 'cascade' }),
    hotelId: uuid('hotel_id')
      .notNull()
      .references(() => hotels.id, { onDelete: 'cascade' }),
    assignmentType: text('assignment_type').notNull().default('Secondary'), // Primary, Secondary
    isDefault: boolean('is_default').notNull().default(false),
    active: boolean('active').notNull().default(true),
    assignedBy: uuid('assigned_by'),
    assignedAt: timestamp('assigned_at', { withTimezone: true }).defaultNow().notNull(),
    expiresAt: timestamp('expires_at', { withTimezone: true }),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex('idx_user_hotel_unique').on(table.userId, table.hotelId),
    index('idx_user_hotel_user_id').on(table.userId),
    index('idx_user_hotel_hotel_id').on(table.hotelId),
    index('idx_user_hotel_org_id').on(table.organizationId),
  ],
);

// Drizzle Relations
export const userHotelAssignmentsRelations = relations(userHotelAssignments, ({ one }) => ({
  user: one(users, {
    fields: [userHotelAssignments.userId],
    references: [users.id],
  }),
  organization: one(organizations, {
    fields: [userHotelAssignments.organizationId],
    references: [organizations.id],
  }),
  hotel: one(hotels, {
    fields: [userHotelAssignments.hotelId],
    references: [hotels.id],
  }),
}));
