import { Hono } from 'hono';
import { MemoryPermissionRepository } from '@bookingengine/auth';

const permRepo = new MemoryPermissionRepository();

export const roleRouter = new Hono();

roleRouter.get('/', async (c) => {
  const orgId = c.req.query('organizationId') || 'org_demo_001';
  const list = await permRepo.getRolesByOrganization(orgId);
  return c.json({
    success: true,
    data: list,
    error: null,
    meta: { timestamp: new Date().toISOString(), requestId: crypto.randomUUID() },
  });
});

roleRouter.post('/', async (c) => {
  const body = await c.req.json();
  return c.json(
    {
      success: true,
      data: {
        id: `rol_${crypto.randomUUID().substring(0, 8)}`,
        organizationId: body.organizationId || 'org_demo_001',
        code: body.code || 'custom_role',
        name: body.name || 'Custom Role',
        isTemplate: false,
        status: 'active',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      error: null,
      meta: { timestamp: new Date().toISOString(), requestId: crypto.randomUUID() },
    },
    201,
  );
});

roleRouter.post('/users/:id/roles', async (c) => {
  const userId = c.req.param('id');
  const body = await c.req.json<{ roleId: string; organizationId?: string; hotelId?: string }>();

  const assigned = await permRepo.assignRoleToUser(
    userId,
    body.roleId,
    body.organizationId || 'org_demo_001',
    body.hotelId,
  );

  return c.json(
    {
      success: true,
      data: assigned,
      error: null,
      meta: { timestamp: new Date().toISOString(), requestId: crypto.randomUUID() },
    },
    201,
  );
});
