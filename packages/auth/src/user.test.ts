import { describe, it, expect } from 'vitest';
import { MemoryUserRepository, IdentityService } from './index';

describe('IdentityService & User Foundation', () => {
  const repo = new MemoryUserRepository();
  const service = new IdentityService(repo);

  it('fetches existing seeded user profile correctly', async () => {
    const user = await service.findUserById('usr_admin_001');
    expect(user).not.toBeNull();
    expect(user?.primaryEmail).toBe('admin@bookingengine.com');
    expect(user?.profile?.displayName).toBe('Platform Admin');
  });

  it('generates password reset token correctly', async () => {
    const token = await service.generatePasswordResetToken('usr_admin_001');
    expect(token).toContain('reset_usr_admin_001_');
  });

  it('locks account after 5 failed attempts', async () => {
    const isLocked = await service.lockAccountAfterFailedAttempts('usr_admin_001', 5);
    expect(isLocked).toBe(true);

    const user = await service.findUserById('usr_admin_001');
    expect(user?.status).toBe('locked');
  });
});
