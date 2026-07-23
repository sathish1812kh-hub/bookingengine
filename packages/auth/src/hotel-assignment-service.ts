import { UserHotelAssignment } from '@bookingengine/types';

export interface AssignmentRepository {
  getByUser(userId: string): Promise<UserHotelAssignment[]>;
  getByHotel(hotelId: string): Promise<UserHotelAssignment[]>;
  getAssignment(userId: string, hotelId: string): Promise<UserHotelAssignment | null>;
  assign(assignment: Omit<UserHotelAssignment, 'id' | 'createdAt' | 'updatedAt' | 'assignedAt'>): Promise<UserHotelAssignment>;
  update(assignmentId: string, updates: Partial<UserHotelAssignment>): Promise<UserHotelAssignment | null>;
  remove(assignmentId: string): Promise<boolean>;
  setDefault(userId: string, hotelId: string): Promise<boolean>;
}

export class MemoryAssignmentRepository implements AssignmentRepository {
  private assignments = new Map<string, UserHotelAssignment>();

  constructor() {
    // Seed demo user hotel assignment
    const demoAssignment: UserHotelAssignment = {
      id: 'asg_demo_001',
      userId: 'usr_admin_001',
      organizationId: 'org_demo_001',
      hotelId: 'htl_demo_001',
      assignmentType: 'Primary',
      isDefault: true,
      active: true,
      assignedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.assignments.set(demoAssignment.id, demoAssignment);
  }

  async getByUser(userId: string): Promise<UserHotelAssignment[]> {
    return Array.from(this.assignments.values()).filter((a) => a.userId === userId && a.active);
  }

  async getByHotel(hotelId: string): Promise<UserHotelAssignment[]> {
    return Array.from(this.assignments.values()).filter((a) => a.hotelId === hotelId && a.active);
  }

  async getAssignment(userId: string, hotelId: string): Promise<UserHotelAssignment | null> {
    for (const a of this.assignments.values()) {
      if (a.userId === userId && a.hotelId === hotelId && a.active) return a;
    }
    return null;
  }

  async assign(input: Omit<UserHotelAssignment, 'id' | 'createdAt' | 'updatedAt' | 'assignedAt'>): Promise<UserHotelAssignment> {
    const existing = await this.getAssignment(input.userId, input.hotelId);
    if (existing) return existing;

    const assignment: UserHotelAssignment = {
      ...input,
      id: `asg_${crypto.randomUUID().substring(0, 8)}`,
      assignedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    this.assignments.set(assignment.id, assignment);
    return assignment;
  }

  async update(assignmentId: string, updates: Partial<UserHotelAssignment>): Promise<UserHotelAssignment | null> {
    const existing = this.assignments.get(assignmentId);
    if (!existing) return null;
    const updated = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.assignments.set(assignmentId, updated);
    return updated;
  }

  async remove(assignmentId: string): Promise<boolean> {
    return this.assignments.delete(assignmentId);
  }

  async setDefault(userId: string, hotelId: string): Promise<boolean> {
    const userAssignments = await this.getByUser(userId);
    let updated = false;
    for (const a of userAssignments) {
      if (a.hotelId === hotelId) {
        a.isDefault = true;
        updated = true;
      } else {
        a.isDefault = false;
      }
      this.assignments.set(a.id, a);
    }
    return updated;
  }
}

export class HotelAssignmentService {
  constructor(private repo: AssignmentRepository) {}

  async listAccessibleHotels(userId: string): Promise<string[]> {
    const assignments = await this.repo.getByUser(userId);
    return assignments.map((a) => a.hotelId);
  }

  async getDefaultHotel(userId: string): Promise<string | null> {
    const assignments = await this.repo.getByUser(userId);
    const def = assignments.find((a) => a.isDefault);
    return def ? def.hotelId : assignments[0]?.hotelId || null;
  }

  async assignUserToHotel(
    userId: string,
    organizationId: string,
    hotelId: string,
    hotelOrganizationId: string,
    isDefault: boolean = false,
  ): Promise<UserHotelAssignment> {
    // Cross-organization assignment constraint guard
    if (organizationId !== hotelOrganizationId) {
      throw new Error('CROSS_ORGANIZATION_ASSIGNMENT_FORBIDDEN: Hotel does not belong to the user organization.');
    }

    if (isDefault) {
      await this.repo.setDefault(userId, hotelId);
    }

    return this.repo.assign({
      userId,
      organizationId,
      hotelId,
      assignmentType: isDefault ? 'Primary' : 'Secondary',
      isDefault,
      active: true,
    });
  }

  async removeUserFromHotel(assignmentId: string): Promise<boolean> {
    return this.repo.remove(assignmentId);
  }
}
