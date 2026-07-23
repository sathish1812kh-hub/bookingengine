import { Hono } from 'hono';
import { MemoryAssignmentRepository, HotelAssignmentService } from '@bookingengine/auth';

const assignmentRepo = new MemoryAssignmentRepository();
const assignmentService = new HotelAssignmentService(assignmentRepo);

export const assignmentRouter = new Hono();

assignmentRouter.get('/users/:id/hotels', async (c) => {
  const userId = c.req.param('id');
  const list = await assignmentRepo.getByUser(userId);
  return c.json({
    success: true,
    data: list,
    error: null,
    meta: { timestamp: new Date().toISOString(), requestId: crypto.randomUUID() },
  });
});

assignmentRouter.post('/users/:id/hotels', async (c) => {
  const userId = c.req.param('id');
  const body = await c.req.json<{ hotelId: string; organizationId?: string; isDefault?: boolean }>();

  try {
    const created = await assignmentService.assignUserToHotel(
      userId,
      body.organizationId || 'org_demo_001',
      body.hotelId,
      body.organizationId || 'org_demo_001',
      body.isDefault || false,
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
  } catch (err: any) {
    return c.json(
      {
        success: false,
        data: null,
        error: { code: 'ASSIGNMENT_ERROR', message: err.message },
        meta: { timestamp: new Date().toISOString(), requestId: crypto.randomUUID() },
      },
      400,
    );
  }
});

assignmentRouter.patch('/users/:id/hotels/:assignmentId', async (c) => {
  const assignmentId = c.req.param('assignmentId');
  const body = await c.req.json();
  const updated = await assignmentRepo.update(assignmentId, body);

  if (!updated) {
    return c.json(
      {
        success: false,
        data: null,
        error: { code: 'NOT_FOUND', message: 'Assignment not found.' },
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

assignmentRouter.delete('/users/:id/hotels/:assignmentId', async (c) => {
  const assignmentId = c.req.param('assignmentId');
  const success = await assignmentService.removeUserFromHotel(assignmentId);

  return c.json({
    success,
    data: { message: success ? 'Assignment removed.' : 'Assignment not found.' },
    error: null,
    meta: { timestamp: new Date().toISOString(), requestId: crypto.randomUUID() },
  });
});
