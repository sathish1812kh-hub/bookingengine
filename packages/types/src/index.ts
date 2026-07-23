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
}

export interface Session {
  id: string;
  userId: string;
  organizationId: string;
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
