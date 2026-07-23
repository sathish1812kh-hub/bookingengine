import { Permission, Role, UserRole } from '@bookingengine/types';

export class MemoryPermissionRepository {
  private permissions = new Map<string, Permission>();
  private roles = new Map<string, Role>();
  private rolePermissionsMap = new Map<string, Set<string>>(); // roleId -> permissionIds
  private userRolesMap = new Map<string, UserRole[]>(); // userId -> UserRole[]

  constructor() {
    this.seedDefaultPermissionsAndRoles();
  }

  private seedDefaultPermissionsAndRoles() {
    const permList: Omit<Permission, 'id' | 'createdAt' | 'updatedAt'>[] = [
      { code: 'booking:create', name: 'Create Booking', module: 'booking', resource: 'booking', action: 'create', scope: 'Hotel', status: 'active' },
      { code: 'booking:update', name: 'Update Booking', module: 'booking', resource: 'booking', action: 'update', scope: 'Hotel', status: 'active' },
      { code: 'booking:cancel', name: 'Cancel Booking', module: 'booking', resource: 'booking', action: 'cancel', scope: 'Hotel', status: 'active' },
      { code: 'booking:checkin', name: 'Check In Guest', module: 'booking', resource: 'booking', action: 'checkin', scope: 'Hotel', status: 'active' },
      { code: 'booking:checkout', name: 'Check Out Guest', module: 'booking', resource: 'booking', action: 'checkout', scope: 'Hotel', status: 'active' },
      { code: 'guest:view', name: 'View Guests', module: 'guest', resource: 'guest', action: 'view', scope: 'Hotel', status: 'active' },
      { code: 'guest:create', name: 'Create Guest', module: 'guest', resource: 'guest', action: 'create', scope: 'Hotel', status: 'active' },
      { code: 'payment:create', name: 'Create Payment', module: 'finance', resource: 'payment', action: 'create', scope: 'Hotel', status: 'active' },
      { code: 'payment:refund', name: 'Refund Payment', module: 'finance', resource: 'payment', action: 'refund', scope: 'Hotel', status: 'active' },
      { code: 'expense:approve', name: 'Approve Expense', module: 'finance', resource: 'expense', action: 'approve', scope: 'Organization', status: 'active' },
      { code: 'ledger:view', name: 'View Accounting Ledger', module: 'accounting', resource: 'ledger', action: 'view', scope: 'Organization', status: 'active' },
      { code: 'pricing:approve', name: 'Approve Dynamic Rate', module: 'revenue', resource: 'pricing', action: 'approve', scope: 'Hotel', status: 'active' },
      { code: 'ttlock:create', name: 'Issue Smart Lock Passcode', module: 'access', resource: 'lock', action: 'create', scope: 'Hotel', status: 'active' },
      { code: 'audit:view', name: 'View System Audit Logs', module: 'security', resource: 'audit', action: 'view', scope: 'Organization', status: 'active' },
    ];

    for (const p of permList) {
      const perm: Permission = {
        ...p,
        id: `prm_${p.code.replace(':', '_')}`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      this.permissions.set(perm.id, perm);
    }

    // Seed default role template: Super Admin
    const superAdminRole: Role = {
      id: 'rol_super_admin',
      organizationId: 'org_demo_001',
      code: 'super_admin',
      name: 'Super Administrator',
      description: 'Full unconstrained platform control',
      isTemplate: true,
      status: 'active',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.roles.set(superAdminRole.id, superAdminRole);
    this.rolePermissionsMap.set(superAdminRole.id, new Set(Array.from(this.permissions.keys())));

    // Assign super admin role to demo user
    const userRole: UserRole = {
      id: 'ur_admin_001',
      userId: 'usr_admin_001',
      roleId: superAdminRole.id,
      organizationId: 'org_demo_001',
      createdAt: new Date().toISOString(),
    };
    this.userRolesMap.set('usr_admin_001', [userRole]);
  }

  async getAllPermissions(): Promise<Permission[]> {
    return Array.from(this.permissions.values());
  }

  async getRoleById(roleId: string): Promise<Role | null> {
    return this.roles.get(roleId) || null;
  }

  async getRolesByOrganization(organizationId: string): Promise<Role[]> {
    return Array.from(this.roles.values()).filter((r) => r.organizationId === organizationId || r.isTemplate);
  }

  async getPermissionCodesForRole(roleId: string): Promise<string[]> {
    const permIds = this.rolePermissionsMap.get(roleId);
    if (!permIds) return [];
    const codes: string[] = [];
    for (const id of permIds) {
      const p = this.permissions.get(id);
      if (p) codes.push(p.code);
    }
    return codes;
  }

  async getUserPermissionCodes(userId: string, targetHotelId?: string): Promise<string[]> {
    const userRolesList = this.userRolesMap.get(userId) || [];
    const codesSet = new Set<string>();

    for (const ur of userRolesList) {
      // Hotel scope guard: if role is scoped to a specific hotel, verify match
      if (ur.hotelId && targetHotelId && ur.hotelId !== targetHotelId) {
        continue;
      }
      const roleCodes = await this.getPermissionCodesForRole(ur.roleId);
      roleCodes.forEach((c) => codesSet.add(c));
    }

    return Array.from(codesSet);
  }

  async assignRoleToUser(userId: string, roleId: string, organizationId: string, hotelId?: string): Promise<UserRole> {
    const userRole: UserRole = {
      id: `ur_${crypto.randomUUID().substring(0, 8)}`,
      userId,
      roleId,
      organizationId,
      hotelId,
      createdAt: new Date().toISOString(),
    };
    const existing = this.userRolesMap.get(userId) || [];
    existing.push(userRole);
    this.userRolesMap.set(userId, existing);
    return userRole;
  }
}

export class AuthorizationService {
  constructor(private repo: MemoryPermissionRepository) {}

  async hasPermission(userId: string, requiredPermissionCode: string, targetHotelId?: string): Promise<boolean> {
    const permissions = await this.repo.getUserPermissionCodes(userId, targetHotelId);
    return permissions.includes(requiredPermissionCode);
  }

  async hasAnyPermission(userId: string, requiredPermissionCodes: string[], targetHotelId?: string): Promise<boolean> {
    const permissions = await this.repo.getUserPermissionCodes(userId, targetHotelId);
    return requiredPermissionCodes.some((code) => permissions.includes(code));
  }

  async hasAllPermissions(userId: string, requiredPermissionCodes: string[], targetHotelId?: string): Promise<boolean> {
    const permissions = await this.repo.getUserPermissionCodes(userId, targetHotelId);
    return requiredPermissionCodes.every((code) => permissions.includes(code));
  }

  async getUserPermissions(userId: string, targetHotelId?: string): Promise<string[]> {
    return this.repo.getUserPermissionCodes(userId, targetHotelId);
  }
}
