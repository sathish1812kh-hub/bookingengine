import { Hono } from 'hono';
import { MemoryUserRepository, IdentityService } from '@bookingengine/auth';

const userRepo = new MemoryUserRepository();
const identityService = new IdentityService(userRepo);

export const userRouter = new Hono();

userRouter.get('/', async (c) => {
  const orgId = c.req.query('organizationId') || 'org_demo_001';
  const list = await userRepo.getByOrganization(orgId);
  return c.json({
    success: true,
    data: list,
    error: null,
    meta: { timestamp: new Date().toISOString(), requestId: crypto.randomUUID() },
  });
});

userRouter.get('/me', async (c) => {
  const user = await identityService.findUserById('usr_admin_001');
  return c.json({
    success: true,
    data: user,
    error: null,
    meta: { timestamp: new Date().toISOString(), requestId: crypto.randomUUID() },
  });
});

userRouter.get('/:id', async (c) => {
  const id = c.req.param('id');
  const user = await identityService.findUserById(id);
  if (!user) {
    return c.json(
      {
        success: false,
        data: null,
        error: { code: 'NOT_FOUND', message: 'User not found.' },
        meta: { timestamp: new Date().toISOString(), requestId: crypto.randomUUID() },
      },
      404,
    );
  }

  return c.json({
    success: true,
    data: user,
    error: null,
    meta: { timestamp: new Date().toISOString(), requestId: crypto.randomUUID() },
  });
});

userRouter.post('/', async (c) => {
  const body = await c.req.json();
  const created = await userRepo.create(
    {
      organizationId: body.organizationId || 'org_demo_001',
      employeeCode: body.employeeCode || 'EMP-NEW',
      username: body.username || 'newuser',
      primaryEmail: body.primaryEmail || 'user@hotel.com',
      passwordHash: 'default_hashed_password',
      status: 'active',
    },
    {
      firstName: body.firstName || 'New',
      lastName: body.lastName || 'Staff',
      displayName: body.displayName || 'New Staff Member',
      timezone: 'UTC',
      language: 'en',
    },
  );

  return c.json(
    {
      success: true,
      data: created,
      error: null,
      meta: { timestamp: new Date().toISOString(), requestId: crypto.randomUUID() },
    },
    201,
  );
});

userRouter.patch('/:id', async (c) => {
  const id = c.req.param('id');
  const body = await c.req.json();
  const updated = await userRepo.update(id, body);

  if (!updated) {
    return c.json(
      {
        success: false,
        data: null,
        error: { code: 'NOT_FOUND', message: 'User not found.' },
        meta: { timestamp: new Date().toISOString(), requestId: crypto.randomUUID() },
      },
      404,
    );
  }

  return c.json({
    success: true,
    data: updated,
    error: null,
    meta: { timestamp: new Date().toISOString(), requestId: crypto.randomUUID() },
  });
});

userRouter.patch('/me', async (c) => {
  const body = await c.req.json();
  const updated = await userRepo.update('usr_admin_001', body);

  return c.json({
    success: true,
    data: updated,
    error: null,
    meta: { timestamp: new Date().toISOString(), requestId: crypto.randomUUID() },
  });
});
