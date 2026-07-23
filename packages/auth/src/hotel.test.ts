import { describe, it, expect } from 'vitest';
import { MemoryHotelRepository, HotelResolver } from './index';

describe('HotelResolver & Multi-Property Isolation', () => {
  const repo = new MemoryHotelRepository();
  const resolver = new HotelResolver(repo);

  it('resolves active hotel context and business date correctly', async () => {
    const context = await resolver.resolveContext('htl_demo_001', 'org_demo_001');
    expect(context).not.toBeNull();
    expect(context?.hotel.name).toBe('Grand Horizon Times Square');
    expect(context?.businessDate.isOpen).toBe(true);
    expect(context?.businessDate.currentBusinessDate).toBeDefined();
  });

  it('rejects cross-organization hotel lookup', async () => {
    const context = await resolver.resolveContext('htl_demo_001', 'org_unauthorized_999');
    expect(context).toBeNull();
  });

  it('validates cross-hotel access guard correctly', () => {
    const isValidSame = resolver.validateCrossHotelAccess('htl_demo_001', 'htl_demo_001');
    expect(isValidSame).toBe(true);

    const isViolation = resolver.validateCrossHotelAccess('htl_demo_001', 'htl_other_999');
    expect(isViolation).toBe(false);
  });
});
