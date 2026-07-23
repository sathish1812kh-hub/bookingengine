export type Environment = 'development' | 'staging' | 'production';

export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserHotelAssignment {
  id: string;
  userId: string;
  organizationId: string;
  hotelId: string;
  assignmentType: 'Primary' | 'Secondary';
  isDefault: boolean;
  active: boolean;
  assignedBy?: string | null;
  assignedAt: string;
  expiresAt?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface UserProfile {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  displayName: string;
  avatar?: string | null;
  timezone: string;
  language: string;
  phone?: string | null;
}

export interface UserPreferences {
  id: string;
  userId: string;
  theme: string;
  notificationsEnabled: boolean;
}

export interface User {
  id: string;
  organizationId: string;
  employeeCode?: string | null;
  username: string;
  primaryEmail: string;
  passwordHash: string;
  status: 'active' | 'suspended' | 'archived' | 'locked';
  failedLoginAttempts: number;
  lastLoginAt?: string | null;
  passwordChangedAt?: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
  profile?: UserProfile;
  preferences?: UserPreferences;
}

export interface AuthUser {
  id: string;
  email: string;
  organizationId: string;
  name: string;
  currentHotelId?: string;
  defaultHotelId?: string;
  accessibleHotelIds?: string[];
}

export interface Session {
  id: string;
  userId: string;
  organizationId: string;
  currentHotelId?: string;
  defaultHotelId?: string;
  accessibleHotelIds?: string[];
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
