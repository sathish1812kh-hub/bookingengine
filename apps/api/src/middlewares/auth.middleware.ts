import { MiddlewareHandler } from 'hono';
import { getCookie, deleteCookie } from 'hono/cookie';
import { MemorySessionStore, AuthProvider } from '@bookingengine/auth';
import { Session } from '@bookingengine/types';

// In-memory fallback session store for local edge testing
const memoryStore = new MemorySessionStore();

export interface AuthContextVariables {
  session: Session;
  userId: string;
  organizationId: string;
}

export const requireAuthMiddleware: MiddlewareHandler<{ Variables: AuthContextVariables }> = async (c, next) => {
  const sessionId = getCookie(c, 'be_session_id');
  if (!sessionId) {
    return c.json(
      {
        success: false,
        data: null,
        error: { code: 'UNAUTHORIZED', message: 'Authentication required. No session cookie present.' },
        meta: { timestamp: new Date().toISOString(), requestId: crypto.randomUUID() },
      },
      401,
    );
  }

  const authProvider = new AuthProvider(memoryStore);
  const session = await authProvider.validateSession(sessionId);

  if (!session) {
    deleteCookie(c, 'be_session_id', { path: '/' });
    return c.json(
      {
        success: false,
        data: null,
        error: { code: 'SESSION_EXPIRED', message: 'Session expired or invalidated.' },
        meta: { timestamp: new Date().toISOString(), requestId: crypto.randomUUID() },
      },
      401,
    );
  }

  c.set('session', session);
  c.set('userId', session.userId);
  c.set('organizationId', session.organizationId);

  await next();
};
