import { Hono } from 'hono';
import { MemoryHotelRepository } from '@bookingengine/auth';

const hotelRepo = new MemoryHotelRepository();

export const hotelRouter = new Hono();

hotelRouter.get('/', async (c) => {
  const orgId = c.req.query('organizationId') || 'org_demo_001';
  const list = await hotelRepo.getByOrganization(orgId);
  return c.json({
    success: true,
    data: list,
    error: null,
    meta: { timestamp: new Date().toISOString(), requestId: crypto.randomUUID() },
  });
});

hotelRouter.get('/:id', async (c) => {
  const id = c.req.param('id');
  const hotel = await hotelRepo.getById(id);
  if (!hotel) {
    return c.json(
      {
        success: false,
        data: null,
        error: { code: 'NOT_FOUND', message: 'Hotel not found.' },
        meta: { timestamp: new Date().toISOString(), requestId: crypto.randomUUID() },
      },
      404,
    );
  }

  const businessDate = await hotelRepo.getBusinessDate(id);

  return c.json({
    success: true,
    data: { hotel, businessDate },
    error: null,
    meta: { timestamp: new Date().toISOString(), requestId: crypto.randomUUID() },
  });
});

hotelRouter.post('/', async (c) => {
  const body = await c.req.json();
  const created = await hotelRepo.create({
    organizationId: body.organizationId || 'org_demo_001',
    code: body.code || 'HTL-NEW',
    name: body.name || 'New Hotel Property',
    legalName: body.legalName || 'New Hotel LLC',
    brand: body.brand || 'Independent',
    slug: body.slug || 'new-hotel-property',
    timezone: body.timezone || 'America/New_York',
    currency: body.currency || 'USD',
    language: body.language || 'en',
    checkInTime: body.checkInTime || '15:00',
    checkOutTime: body.checkOutTime || '11:00',
    status: body.status || 'active',
  });

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

hotelRouter.patch('/:id', async (c) => {
  const id = c.req.param('id');
  const body = await c.req.json();
  const updated = await hotelRepo.update(id, body);

  if (!updated) {
    return c.json(
      {
        success: false,
        data: null,
        error: { code: 'NOT_FOUND', message: 'Hotel not found.' },
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
