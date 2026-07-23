import { Hono } from 'hono';
import { HealthCheckResponse } from '@bookingengine/shared';
import { authRouter } from './routes/auth';
import { hotelRouter } from './routes/hotels';
import { userRouter } from './routes/users';
import { assignmentRouter } from './routes/assignments';

export interface Env {
  ENVIRONMENT?: string;
  SESSION_KV?: any;
}

const app = new Hono<{ Bindings: Env }>();

app.route('/api/auth', authRouter);
app.route('/api/hotels', hotelRouter);
app.route('/api/users', userRouter);
app.route('/api', assignmentRouter);

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
