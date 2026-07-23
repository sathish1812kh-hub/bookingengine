import { MiddlewareHandler } from 'hono';
import { MemoryHotelRepository, HotelResolver } from '@bookingengine/auth';
import { HotelContext } from '@bookingengine/types';

const hotelRepo = new MemoryHotelRepository();
const hotelResolver = new HotelResolver(hotelRepo);

export interface HotelContextVariables {
  hotelContext?: HotelContext;
}

export const resolveHotelContext: MiddlewareHandler<{ Variables: HotelContextVariables }> = async (c, next) => {
  const hotelIdHeader = c.req.header('X-Hotel-Id');
  const session = c.get('session' as any);
  const targetHotelId = hotelIdHeader || session?.currentHotelId || 'htl_demo_001';
  const organizationId = session?.organizationId || 'org_demo_001';

  if (targetHotelId) {
    const context = await hotelResolver.resolveContext(targetHotelId, organizationId);
    if (context) {
      c.set('hotelContext', context);
    }
  }

  await next();
};

export const requireHotelContext: MiddlewareHandler<{ Variables: HotelContextVariables }> = async (c, next) => {
  const context = c.get('hotelContext');
  if (!context) {
    return c.json(
      {
        success: false,
        data: null,
        error: { code: 'HOTEL_CONTEXT_REQUIRED', message: 'Active hotel context required for this operation.' },
        meta: { timestamp: new Date().toISOString(), requestId: crypto.randomUUID() },
      },
      400,
    );
  }
  await next();
};
