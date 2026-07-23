import { describe, it, expect } from 'vitest';
import { MemoryPermissionRepository, AuthorizationService } from './index';

describe('AuthorizationService & Granular Permission Engine', () => {
  const repo = new MemoryPermissionRepository();
  const service = new AuthorizationService(repo);

  it('evaluates hasPermission correctly for super admin', async () => {
    const hasBookingCreate = await service.hasPermission('usr_admin_001', 'booking:create');
    expect(hasBookingCreate).toBe(true);

    const hasPaymentRefund = await service.hasPermission('usr_admin_001', 'payment:refund');
    expect(hasPaymentRefund).toBe(true);
  });

  it('evaluates hasAnyPermission correctly', async () => {
    const hasAny = await service.hasAnyPermission('usr_admin_001', ['booking:create', 'non_existent_perm']);
    expect(hasAny).toBe(true);
  });

  it('evaluates hasAllPermissions correctly', async () => {
    const hasAll = await service.hasAllPermissions('usr_admin_001', ['booking:create', 'payment:create']);
    expect(hasAll).toBe(true);

    const missingOne = await service.hasAllPermissions('usr_admin_001', ['booking:create', 'unknown_code']);
    expect(missingOne).toBe(false);
  });
});
