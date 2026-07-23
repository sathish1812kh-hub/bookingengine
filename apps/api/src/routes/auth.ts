import { Hono } from 'hono';
import { getCookie, setCookie, deleteCookie } from 'hono/cookie';
import { MemorySessionStore, AuthProvider, verifyPassword, hashPassword } from '@bookingengine/auth';
import { AuthUser } from '@bookingengine/types';

// In-memory fallback session store for local edge environment
const globalMemoryStore = new MemorySessionStore();

export const authRouter = new Hono();

// Demo mock password credentials for STORY-001 testing
const MOCK_SALT = '0123456789abcdef0123456789abcdef';
let mockHash = '';

async function getMockHash() {
  if (!mockHash) {
    const res = await hashPassword('Password123!', MOCK_SALT);
    mockHash = res.hash;
  }
  return mockHash;
}

authRouter.post('/login', async (c) => {
  const body = await c.req.json<{ email?: string; password?: string }>();
  if (!body.email || !body.password) {
    return c.json(
      {
        success: false,
        data: null,
        error: { code: 'INVALID_CREDENTIALS', message: 'Email and password are required.' },
        meta: { timestamp: new Date().toISOString(), requestId: crypto.randomUUID() },
      },
      400,
    );
  }

  const expectedHash = await getMockHash();
  const isValid = await verifyPassword(body.password, expectedHash, MOCK_SALT);

  if (body.email !== 'admin@bookingengine.com' || !isValid) {
    return c.json(
      {
        success: false,
        data: null,
        error: { code: 'UNAUTHORIZED', message: 'Invalid email or password.' },
        meta: { timestamp: new Date().toISOString(), requestId: crypto.randomUUID() },
      },
      401,
    );
  }

  const user: AuthUser = {
    id: 'usr_admin_001',
    email: 'admin@bookingengine.com',
    organizationId: 'org_demo_001',
    name: 'Platform Admin',
  };

  const authProvider = new AuthProvider(globalMemoryStore);
  const session = await authProvider.createSession(user, 86400);

  setCookie(c, 'be_session_id', session.id, {
    httpOnly: true,
    secure: true,
    sameSite: 'Strict',
    path: '/',
    maxAge: 86400,
  });

  return c.json({
    success: true,
    data: { user, session },
    error: null,
    meta: { timestamp: new Date().toISOString(), requestId: crypto.randomUUID() },
  });
});

authRouter.post('/logout', async (c) => {
  const sessionId = getCookie(c, 'be_session_id');
  if (sessionId) {
    const authProvider = new AuthProvider(globalMemoryStore);
    await authProvider.revokeSession(sessionId);
  }

  deleteCookie(c, 'be_session_id', { path: '/' });

  return c.json({
    success: true,
    data: { message: 'Logged out successfully' },
    error: null,
    meta: { timestamp: new Date().toISOString(), requestId: crypto.randomUUID() },
  });
});

authRouter.get('/me', async (c) => {
  const sessionId = getCookie(c, 'be_session_id');
  if (!sessionId) {
    return c.json(
      {
        success: false,
        data: null,
        error: { code: 'UNAUTHORIZED', message: 'No active session.' },
        meta: { timestamp: new Date().toISOString(), requestId: crypto.randomUUID() },
      },
      401,
    );
  }

  const authProvider = new AuthProvider(globalMemoryStore);
  const session = await authProvider.validateSession(sessionId);

  if (!session) {
    deleteCookie(c, 'be_session_id', { path: '/' });
    return c.json(
      {
        success: false,
        data: null,
        error: { code: 'SESSION_EXPIRED', message: 'Session has expired or is invalid.' },
        meta: { timestamp: new Date().toISOString(), requestId: crypto.randomUUID() },
      },
      401,
    );
  }

  return c.json({
    success: true,
    data: { session },
    error: null,
    meta: { timestamp: new Date().toISOString(), requestId: crypto.randomUUID() },
  });
});
