import { AuthUser, Session } from '@bookingengine/types';
import { SessionStore } from './session-store';

export class AuthProvider {
  constructor(private store: SessionStore) {}

  async createSession(user: AuthUser, ttlSeconds: number = 86400): Promise<Session> {
    const session: Session = {
      id: crypto.randomUUID(),
      userId: user.id,
      organizationId: user.organizationId,
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + ttlSeconds * 1000).toISOString(),
    };

    await this.store.set(session, ttlSeconds);
    return session;
  }

  async validateSession(sessionId: string): Promise<Session | null> {
    if (!sessionId) return null;
    return await this.store.get(sessionId);
  }

  async revokeSession(sessionId: string): Promise<void> {
    await this.store.delete(sessionId);
  }

  async rotateSession(oldSessionId: string, user: AuthUser, ttlSeconds: number = 86400): Promise<Session> {
    await this.revokeSession(oldSessionId);
    return await this.createSession(user, ttlSeconds);
  }
}
