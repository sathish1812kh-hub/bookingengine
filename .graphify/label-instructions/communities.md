# Community Labeling

Graphify is running in assistant/skill mode (no API key). You are the host
assistant (Claude Code / Codex / Gemini CLI). Read the community listing below
and write 2-5 word plain-language names for each.

## Language

LANGUAGE: each community line ends with a `[lang=…]` marker giving the
language of its source nodes. Write that community's name in EXACTLY that
language. Do not normalize every name to one common language.

## Communities

Community 0: index.ts, ApiEnvelopeSchema(, app, AuthResult, AuthUser, AuthUserContext, BaseEntity, cn(, createIntegrationStatus(, Env, Environment, formatCurrency( [lang=en]
Community 1: nextConfig, next.config.ts, next-env.d.ts, layout.tsx, RootLayout(, page.tsx, AdminDashboardPage(, GuestStorefrontPage(, b56cdfd feat(scaffolding): Phase 1 monorepo foundation, apps, drizzle.config.ts, index.ts, organizations [lang=en]
Community 2: main, 3efb8ed docs(product): create master Product Blueprint speci, 5373706 chore: initialize monorepo workspace, 57ba611 docs: add architecture review report, ADR package (1, 7699c20 chore(epic-001): initialize workspace foundation, 8264a67 docs(ux): add comprehensive UX & Access Control Arch, 889e7c0 Initial commit, e5bbd3c docs: add comprehensive master architecture specific, e9fba19 chore(epic-001): workspace foundation, ee66e84 docs(gemini): update GEMINI.md with active MCP inven, f4675ed docs(project): create Master Execution Plan & Epic R, fdb0a76 feat(graphify): fully integrate official Graphify kn [lang=pt]
Community 3: KVSessionStore, MemorySessionStore, SessionStore, auth-provider.ts, session-store.ts, KVNamespaceLike, .constructor(, .delete(, .get(, .set( [lang=en]
Community 4: 93b95cf feat(auth): complete authentication foundation with , page.tsx, LoginPage(, auth.middleware.ts, AuthContextVariables, memoryStore, requireAuthMiddleware( [lang=en]
Community 5: authRouter, d899e94 feat(auth): implement authentication and session KV , auth.ts, getMockHash(, globalMemoryStore, auth.test.ts [lang=en]
Community 6: AuthProvider, .constructor(, .createSession(, .revokeSession(, .rotateSession(, .validateSession( [lang=en]
Community 7: bytesToHex(, hashPassword(, hexToBytes(, verifyPassword(, crypto.ts [lang=en]
Community 8: env.ts, EnvConfig, EnvSchema, loadEnv( [lang=en]

## Instructions

Write a single JSON object mapping each community id (as a string) to its
2-5 word name to: C:\bookingengine\.graphify\label-instructions\communities.json

Example:
```json
{
  "0": "Authentication Flow",
  "1": "Authentication Flow",
  "2": "Authentication Flow"
}
```

Then re-run `graphify update` (or `graphify label`) to ingest the names.
