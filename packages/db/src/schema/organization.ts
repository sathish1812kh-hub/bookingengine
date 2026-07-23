import { pgTable, uuid, text, timestamp, boolean, jsonb, index, uniqueIndex } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const organizations = pgTable(
  'organizations',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    name: text('name').notNull(),
    slug: text('slug').notNull(),
    status: text('status').notNull().default('active'), // active, suspended, archived
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex('idx_organizations_slug').on(table.slug),
    index('idx_organizations_status').on(table.status),
  ],
);

export const organizationSettings = pgTable(
  'organization_settings',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    organizationId: uuid('organization_id')
      .notNull()
      .references(() => organizations.id, { onDelete: 'cascade' }),
    defaultCurrency: text('default_currency').notNull().default('USD'),
    timezone: text('timezone').notNull().default('UTC'),
    dateFormat: text('date_format').notNull().default('YYYY-MM-DD'),
    fiscalYearStartMonth: text('fiscal_year_start_month').notNull().default('1'),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex('idx_org_settings_org_id').on(table.organizationId),
  ],
);

export const organizationDomains = pgTable(
  'organization_domains',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    organizationId: uuid('organization_id')
      .notNull()
      .references(() => organizations.id, { onDelete: 'cascade' }),
    domain: text('domain').notNull(),
    isPrimary: boolean('is_primary').notNull().default(false),
    verifiedAt: timestamp('verified_at', { withTimezone: true }),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex('idx_org_domains_domain').on(table.domain),
    index('idx_org_domains_org_id').on(table.organizationId),
  ],
);

export const organizationFeatures = pgTable(
  'organization_features',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    organizationId: uuid('organization_id')
      .notNull()
      .references(() => organizations.id, { onDelete: 'cascade' }),
    featureKey: text('feature_key').notNull(), // e.g. 'revenue_intelligence', 'ttlock_integration', 'stayflexi_sync'
    enabled: boolean('enabled').notNull().default(true),
    metadata: jsonb('metadata'),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex('idx_org_features_org_key').on(table.organizationId, table.featureKey),
    index('idx_org_features_org_id').on(table.organizationId),
  ],
);

// Drizzle Relations
export const organizationsRelations = relations(organizations, ({ one, many }) => ({
  settings: one(organizationSettings, {
    fields: [organizations.id],
    references: [organizationSettings.organizationId],
  }),
  domains: many(organizationDomains),
  features: many(organizationFeatures),
}));

export const organizationSettingsRelations = relations(organizationSettings, ({ one }) => ({
  organization: one(organizations, {
    fields: [organizationSettings.organizationId],
    references: [organizations.id],
  }),
}));

export const organizationDomainsRelations = relations(organizationDomains, ({ one }) => ({
  organization: one(organizations, {
    fields: [organizationDomains.organizationId],
    references: [organizations.id],
  }),
}));

export const organizationFeaturesRelations = relations(organizationFeatures, ({ one }) => ({
  organization: one(organizations, {
    fields: [organizationFeatures.organizationId],
    references: [organizations.id],
  }),
}));
