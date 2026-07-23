import { describe, it, expect } from 'vitest';
import { MemoryOrganizationRepository, TenantResolver } from './index';

describe('TenantResolver & Multi-Tenant Isolation', () => {
  const repo = new MemoryOrganizationRepository();
  const resolver = new TenantResolver(repo);

  it('resolves active tenant by ID correctly', async () => {
    const context = await resolver.resolveContext('org_demo_001');
    expect(context).not.toBeNull();
    expect(context?.organization.name).toBe('Grand Horizon Hospitality Group');
    expect(context?.settings.defaultCurrency).toBe('USD');
    expect(context?.features.revenue_intelligence).toBe(true);
  });

  it('rejects inactive or non-existent tenant ID', async () => {
    const context = await resolver.resolveContext('org_invalid_999');
    expect(context).toBeNull();
  });

  it('enforces cross-tenant protection guard correctly', () => {
    const isValid = resolver.validateCrossTenantAccess('org_demo_001', 'org_demo_001');
    expect(isValid).toBe(true);

    const isViolation = resolver.validateCrossTenantAccess('org_demo_001', 'org_hacker_999');
    expect(isViolation).toBe(false);
  });
});
