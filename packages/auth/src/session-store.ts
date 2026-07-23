import { Session } from '@bookingengine/types';

export interface SessionStore {
  get(sessionId: string): Promise<Session | null>;
  set(session: Session, ttlSeconds: number): Promise<void>;
  delete(sessionId: string): Promise<void>;
}

export class MemorySessionStore implements SessionStore {
  private store = new Map<string, { session: Session; expiresAtTimestamp: number }>();

  async get(sessionId: string): Promise<Session | null> {
    const entry = this.store.get(sessionId);
    if (!entry) return null;
    if (Date.now() > entry.expiresAtTimestamp) {
      this.store.delete(sessionId);
      return null;
    }
    return entry.session;
  }

  async set(session: Session, ttlSeconds: number): Promise<void> {
    this.store.set(session.id, {
      session,
      expiresAtTimestamp: Date.now() + ttlSeconds * 1000,
    });
  }

  async delete(sessionId: string): Promise<void> {
    this.store.delete(sessionId);
  }
}

export interface KVNamespaceLike {
  get(key: string): Promise<string | null>;
  put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void>;
  delete(key: string): Promise<void>;
}

export class KVSessionStore implements SessionStore {
  constructor(private kv: KVNamespaceLike) {}

  async get(sessionId: string): Promise<Session | null> {
    const raw = await this.kv.get(`session:${sessionId}`);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as Session;
    } catch {
      return null;
    }
  }

  async set(session: Session, ttlSeconds: number): Promise<void> {
    await this.kv.put(`session:${session.id}`, JSON.stringify(session), {
      expirationTtl: ttlSeconds,
    });
  }

  async delete(sessionId: string): Promise<void> {
    await this.kv.delete(`session:${sessionId}`);
  }
}
