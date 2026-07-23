import { Hono } from 'hono';
import { HealthCheckResponse } from '@bookingengine/shared';

export interface Env {
  ENVIRONMENT?: string;
}

const app = new Hono<{ Bindings: Env }>();

app.get('/health', (c) => {
  const response: HealthCheckResponse = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: '0.1.0',
    environment: c.env?.ENVIRONMENT || 'development',
  };

  return c.json({
    success: true,
    data: response,
    error: null,
    meta: {
      timestamp: response.timestamp,
      requestId: crypto.randomUUID(),
    },
  });
});

export default app;
