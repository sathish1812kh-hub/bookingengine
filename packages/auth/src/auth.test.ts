import { describe, it, expect, beforeEach } from 'vitest';
import { MemorySessionStore, AuthProvider, hashPassword, verifyPassword } from './index';

describe('Crypto Password Hashing', () => {
  it('hashes and verifies password correctly', async () => {
    const password = 'SecurePassword123!';
    const { hash, salt } = await hashPassword(password);

    expect(hash).toBeDefined();
    expect(salt).toBeDefined();

    const isValid = await verifyPassword(password, hash, salt);
    expect(isValid).toBe(true);

    const isInvalid = await verifyPassword('WrongPassword', hash, salt);
    expect(isInvalid).toBe(false);
  });
});

describe('AuthProvider & MemorySessionStore', () => {
  let store: MemorySessionStore;
  let authProvider: AuthProvider;

  beforeEach(() => {
    store = new MemorySessionStore();
    authProvider = new AuthProvider(store);
  });

  it('creates and validates a session', async () => {
    const user = {
      id: 'user_1',
      email: 'admin@hotel.com',
      organizationId: 'org_100',
      name: 'Admin User',
    };

    const session = await authProvider.createSession(user, 3600);
    expect(session.id).toBeDefined();
    expect(session.userId).toBe('user_1');

    const validated = await authProvider.validateSession(session.id);
    expect(validated).toEqual(session);
  });

  it('revokes a session correctly', async () => {
    const user = {
      id: 'user_2',
      email: 'staff@hotel.com',
      organizationId: 'org_100',
      name: 'Staff User',
    };

    const session = await authProvider.createSession(user, 3600);
    await authProvider.revokeSession(session.id);

    const validated = await authProvider.validateSession(session.id);
    expect(validated).toBeNull();
  });
});
