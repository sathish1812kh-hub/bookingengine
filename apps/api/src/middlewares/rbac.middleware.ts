import { MiddlewareHandler } from 'hono';
import { MemoryPermissionRepository, AuthorizationService } from '@bookingengine/auth';

const permRepo = new MemoryPermissionRepository();
const authzService = new AuthorizationService(permRepo);

export function requirePermission(permissionCode: string): MiddlewareHandler {
  return async (c, next) => {
    const session = c.get('session' as any);
    const userId = session?.userId || 'usr_admin_001';
    const targetHotelId = c.req.header('X-Hotel-Id') || session?.currentHotelId;

    const allowed = await authzService.hasPermission(userId, permissionCode, targetHotelId);

    if (!allowed) {
      return c.json(
        {
          success: false,
          data: null,
          error: {
            code: 'FORBIDDEN_PERMISSION_REQUIRED',
            message: `User lacks required permission: ${permissionCode}`,
          },
          meta: { timestamp: new Date().toISOString(), requestId: crypto.randomUUID() },
        },
        403,
      );
    }

    await next();
  };
}

export function requireAnyPermission(permissionCodes: string[]): MiddlewareHandler {
  return async (c, next) => {
    const session = c.get('session' as any);
    const userId = session?.userId || 'usr_admin_001';
    const targetHotelId = c.req.header('X-Hotel-Id') || session?.currentHotelId;

    const allowed = await authzService.hasAnyPermission(userId, permissionCodes, targetHotelId);

    if (!allowed) {
      return c.json(
        {
          success: false,
          data: null,
          error: {
            code: 'FORBIDDEN_PERMISSIONS_REQUIRED',
            message: `User lacks any of the required permissions: ${permissionCodes.join(', ')}`,
          },
          meta: { timestamp: new Date().toISOString(), requestId: crypto.randomUUID() },
        },
        403,
      );
    }

    await next();
  };
}
