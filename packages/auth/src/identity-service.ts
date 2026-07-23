import { User, UserProfile } from '@bookingengine/types';
import { hashPassword } from './crypto';

export interface UserRepository {
  getById(id: string): Promise<User | null>;
  getByEmail(email: string, organizationId: string): Promise<User | null>;
  getByUsername(username: string, organizationId: string): Promise<User | null>;
  getByOrganization(organizationId: string): Promise<User[]>;
  create(user: Omit<User, 'id' | 'createdAt' | 'updatedAt' | 'failedLoginAttempts'>, profile: Omit<UserProfile, 'id' | 'userId'>): Promise<User>;
  update(id: string, updates: Partial<User>): Promise<User | null>;
  softDelete(id: string): Promise<boolean>;
  lockAccount(id: string): Promise<boolean>;
}

export class MemoryUserRepository implements UserRepository {
  private users = new Map<string, User>();

  constructor() {
    // Seed default demo user
    const demoUser: User = {
      id: 'usr_admin_001',
      organizationId: 'org_demo_001',
      employeeCode: 'EMP-001',
      username: 'admin',
      primaryEmail: 'admin@bookingengine.com',
      passwordHash: 'mocked_hash',
      status: 'active',
      failedLoginAttempts: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      profile: {
        id: 'prf_admin_001',
        userId: 'usr_admin_001',
        firstName: 'Platform',
        lastName: 'Admin',
        displayName: 'Platform Admin',
        timezone: 'UTC',
        language: 'en',
      },
    };
    this.users.set(demoUser.id, demoUser);
  }

  async getById(id: string): Promise<User | null> {
    const user = this.users.get(id);
    if (!user || user.deletedAt) return null;
    return user;
  }

  async getByEmail(email: string, organizationId: string): Promise<User | null> {
    for (const user of this.users.values()) {
      if (user.primaryEmail === email && user.organizationId === organizationId && !user.deletedAt) {
        return user;
      }
    }
    return null;
  }

  async getByUsername(username: string, organizationId: string): Promise<User | null> {
    for (const user of this.users.values()) {
      if (user.username === username && user.organizationId === organizationId && !user.deletedAt) {
        return user;
      }
    }
    return null;
  }

  async getByOrganization(organizationId: string): Promise<User[]> {
    return Array.from(this.users.values()).filter((u) => u.organizationId === organizationId && !u.deletedAt);
  }

  async create(input: Omit<User, 'id' | 'createdAt' | 'updatedAt' | 'failedLoginAttempts'>, profileInput: Omit<UserProfile, 'id' | 'userId'>): Promise<User> {
    const userId = `usr_${crypto.randomUUID().substring(0, 8)}`;
    const profile: UserProfile = {
      ...profileInput,
      id: `prf_${crypto.randomUUID().substring(0, 8)}`,
      userId,
    };

    const user: User = {
      ...input,
      id: userId,
      failedLoginAttempts: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      profile,
    };

    this.users.set(user.id, user);
    return user;
  }

  async update(id: string, updates: Partial<User>): Promise<User | null> {
    const existing = this.users.get(id);
    if (!existing || existing.deletedAt) return null;
    const updated = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.users.set(id, updated);
    return updated;
  }

  async softDelete(id: string): Promise<boolean> {
    const existing = this.users.get(id);
    if (!existing) return false;
    existing.deletedAt = new Date().toISOString();
    existing.status = 'archived';
    this.users.set(id, existing);
    return true;
  }

  async lockAccount(id: string): Promise<boolean> {
    const existing = this.users.get(id);
    if (!existing) return false;
    existing.status = 'locked';
    this.users.set(id, existing);
    return true;
  }
}

export class IdentityService {
  constructor(private repo: UserRepository) {}

  async findUserById(id: string): Promise<User | null> {
    return this.repo.getById(id);
  }

  async findUserByEmail(email: string, organizationId: string): Promise<User | null> {
    return this.repo.getByEmail(email, organizationId);
  }

  async lockAccountAfterFailedAttempts(userId: string, currentAttempts: number): Promise<boolean> {
    if (currentAttempts >= 5) {
      return this.repo.lockAccount(userId);
    }
    await this.repo.update(userId, { failedLoginAttempts: currentAttempts });
    return false;
  }

  async generatePasswordResetToken(userId: string): Promise<string> {
    return `reset_${userId}_${crypto.randomUUID()}`;
  }

  async changePassword(userId: string, newRawPassword: string): Promise<boolean> {
    const { hash } = await hashPassword(newRawPassword);
    const updated = await this.repo.update(userId, {
      passwordHash: hash,
      passwordChangedAt: new Date().toISOString(),
      failedLoginAttempts: 0,
    });
    return updated !== null;
  }
}
