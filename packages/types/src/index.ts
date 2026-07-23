export type Environment = 'development' | 'staging' | 'production';

export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthUser {
  id: string;
  email: string;
  organizationId: string;
  name: string;
  currentHotelId?: string;
  accessibleHotelIds?: string[];
}

export interface Session {
  id: string;
  userId: string;
  organizationId: string;
  currentHotelId?: string;
  expiresAt: string;
  createdAt: string;
}

export interface LoginCredentials {
  email: string;
  passwordHash: string;
}

export interface AuthResult {
  user: AuthUser;
  session: Session;
  token: string;
}

export interface Organization {
  id: string;
  name: string;
  slug: string;
  status: 'active' | 'suspended' | 'archived';
  createdAt: string;
  updatedAt: string;
}

export interface OrganizationSettings {
  id: string;
  organizationId: string;
  defaultCurrency: string;
  timezone: string;
  dateFormat: string;
  fiscalYearStartMonth: string;
}

export interface OrganizationDomain {
  id: string;
  organizationId: string;
  domain: string;
  isPrimary: boolean;
  verifiedAt?: string | null;
}

export interface OrganizationFeature {
  id: string;
  organizationId: string;
  featureKey: string;
  enabled: boolean;
  metadata?: Record<string, any> | null;
}

export interface TenantContext {
  organization: Organization;
  settings: OrganizationSettings;
  features: Record<string, boolean>;
}

export interface Hotel {
  id: string;
  organizationId: string;
  code: string;
  name: string;
  legalName: string;
  brand: string;
  slug: string;
  timezone: string;
  currency: string;
  language: string;
  checkInTime: string;
  checkOutTime: string;
  status: 'draft' | 'active' | 'inactive';
  gstin?: string;
  createdAt: string;
  updatedAt: string;
}

export interface HotelBusinessDate {
  id: string;
  hotelId: string;
  currentBusinessDate: string; // YYYY-MM-DD
  isOpen: boolean;
}

export interface HotelContext {
  hotel: Hotel;
  businessDate: HotelBusinessDate;
}
