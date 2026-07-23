import { Hono } from 'hono';
import { MemoryPermissionRepository } from '@bookingengine/auth';

const permRepo = new MemoryPermissionRepository();

export const permissionRouter = new Hono();

permissionRouter.get('/', async (c) => {
  const list = await permRepo.getAllPermissions();
  return c.json({
    success: true,
    data: list,
    error: null,
    meta: { timestamp: new Date().toISOString(), requestId: crypto.randomUUID() },
  });
});
