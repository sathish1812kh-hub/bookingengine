import { pgTable, uuid, text, timestamp, jsonb, uniqueIndex, index } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { organizations } from './organization';

export const hotels = pgTable(
  'hotels',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    organizationId: uuid('organization_id')
      .notNull()
      .references(() => organizations.id, { onDelete: 'cascade' }),
    code: text('code').notNull(),
    name: text('name').notNull(),
    legalName: text('legal_name').notNull(),
    brand: text('brand').notNull().default('independent'),
    slug: text('slug').notNull(),
    timezone: text('timezone').notNull().default('America/New_York'),
    currency: text('currency').notNull().default('USD'),
    language: text('language').notNull().default('en'),
    checkInTime: text('check_in_time').notNull().default('15:00'),
    checkOutTime: text('check_out_time').notNull().default('11:00'),
    taxConfiguration: jsonb('tax_configuration'),
    gstin: text('gstin'),
    status: text('status').notNull().default('active'), // draft, active, inactive
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
    deletedAt: timestamp('deleted_at', { withTimezone: true }),
  },
  (table) => [
    uniqueIndex('idx_hotels_org_code').on(table.organizationId, table.code),
    index('idx_hotels_org_id').on(table.organizationId),
    index('idx_hotels_slug').on(table.slug),
  ],
);

export const hotelSettings = pgTable(
  'hotel_settings',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    hotelId: uuid('hotel_id')
      .notNull()
      .references(() => hotels.id, { onDelete: 'cascade' }),
    overbookingPercentage: text('overbooking_percentage').notNull().default('0'),
    nightAuditAutoRun: text('night_audit_auto_run').notNull().default('true'),
    cancellationPolicyHours: text('cancellation_policy_hours').notNull().default('24'),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex('idx_hotel_settings_hotel_id').on(table.hotelId),
  ],
);

export const hotelContacts = pgTable(
  'hotel_contacts',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    hotelId: uuid('hotel_id')
      .notNull()
      .references(() => hotels.id, { onDelete: 'cascade' }),
    phone: text('phone').notNull(),
    email: text('email').notNull(),
    website: text('website'),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    index('idx_hotel_contacts_hotel_id').on(table.hotelId),
  ],
);

export const hotelAddresses = pgTable(
  'hotel_addresses',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    hotelId: uuid('hotel_id')
      .notNull()
      .references(() => hotels.id, { onDelete: 'cascade' }),
    line1: text('line1').notNull(),
    line2: text('line2'),
    city: text('city').notNull(),
    state: text('state').notNull(),
    postalCode: text('postal_code').notNull(),
    country: text('country').notNull().default('US'),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    index('idx_hotel_addresses_hotel_id').on(table.hotelId),
  ],
);

export const hotelBusinessDates = pgTable(
  'hotel_business_dates',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    hotelId: uuid('hotel_id')
      .notNull()
      .references(() => hotels.id, { onDelete: 'cascade' }),
    currentBusinessDate: text('current_business_date').notNull(), // YYYY-MM-DD
    isOpen: text('is_open').notNull().default('true'),
    closedAt: timestamp('closed_at', { withTimezone: true }),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex('idx_hotel_business_dates_hotel_id').on(table.hotelId),
  ],
);

// Drizzle Relations
export const hotelsRelations = relations(hotels, ({ one, many }) => ({
  organization: one(organizations, {
    fields: [hotels.organizationId],
    references: [organizations.id],
  }),
  settings: one(hotelSettings, {
    fields: [hotels.id],
    references: [hotelSettings.hotelId],
  }),
  businessDate: one(hotelBusinessDates, {
    fields: [hotels.id],
    references: [hotelBusinessDates.hotelId],
  }),
  contacts: many(hotelContacts),
  addresses: many(hotelAddresses),
}));
