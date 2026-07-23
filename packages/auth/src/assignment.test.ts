import { describe, it, expect } from 'vitest';
import { MemoryAssignmentRepository, HotelAssignmentService } from './index';

describe('HotelAssignmentService & Access Scoping', () => {
  const repo = new MemoryAssignmentRepository();
  const service = new HotelAssignmentService(repo);

  it('lists accessible hotels for user correctly', async () => {
    const accessible = await service.listAccessibleHotels('usr_admin_001');
    expect(accessible).toContain('htl_demo_001');
  });

  it('assigns user to hotel in same organization', async () => {
    const assignment = await service.assignUserToHotel(
      'usr_admin_001',
      'org_demo_001',
      'htl_demo_002',
      'org_demo_001',
      false,
    );
    expect(assignment.hotelId).toBe('htl_demo_002');
  });

  it('rejects cross-organization hotel assignment strictly', async () => {
    await expect(
      service.assignUserToHotel(
        'usr_admin_001',
        'org_demo_001',
        'htl_rogue_999',
        'org_rogue_999',
        false,
      ),
    ).rejects.toThrow('CROSS_ORGANIZATION_ASSIGNMENT_FORBIDDEN');
  });
});
