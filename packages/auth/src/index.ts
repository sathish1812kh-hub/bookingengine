export * from './crypto';
export * from './session-store';
export * from './auth-provider';
export * from './tenant-resolver';

export interface AuthUserContext {
  userId: string;
  organizationId: string;
  propertyIds: string[];
  roles: string[];
}

export function isAuthorized(
  context: AuthUserContext,
  requiredRole: string,
  targetPropertyId?: string,
): boolean {
  if (context.roles.includes('super_admin')) return true;
  if (!context.roles.includes(requiredRole)) return false;
  if (targetPropertyId && !context.propertyIds.includes(targetPropertyId)) return false;
  return true;
}
