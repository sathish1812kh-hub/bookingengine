import { MiddlewareHandler } from 'hono';

export interface HotelScopeVariables {
  accessibleHotelIds: string[];
  currentHotelId?: string;
}

export const requireCurrentHotel: MiddlewareHandler<{ Variables: HotelScopeVariables }> = async (c, next) => {
  const currentHotelId = c.req.header('X-Hotel-Id') || c.get('currentHotelId');
  if (!currentHotelId) {
    return c.json(
      {
        success: false,
        data: null,
        error: { code: 'CURRENT_HOTEL_REQUIRED', message: 'Current active hotel ID must be specified.' },
        meta: { timestamp: new Date().toISOString(), requestId: crypto.randomUUID() },
      },
      400,
    );
  }
  await next();
};

export const requireAccessibleHotel: MiddlewareHandler<{ Variables: HotelScopeVariables }> = async (c, next) => {
  const targetHotelId = c.req.header('X-Hotel-Id') || c.req.param('hotelId');
  const accessibleHotelIds = c.get('accessibleHotelIds') || ['htl_demo_001'];

  if (targetHotelId && !accessibleHotelIds.includes(targetHotelId)) {
    return c.json(
      {
        success: false,
        data: null,
        error: { code: 'FORBIDDEN_HOTEL_SCOPE', message: 'User is not assigned to the target hotel property.' },
        meta: { timestamp: new Date().toISOString(), requestId: crypto.randomUUID() },
      },
      403,
    );
  }
  await next();
};
