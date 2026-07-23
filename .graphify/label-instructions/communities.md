# Community Labeling

Graphify is running in assistant/skill mode (no API key). You are the host
assistant (Claude Code / Codex / Gemini CLI). Read the community listing below
and write 2-5 word plain-language names for each.

## Language

Write every name in English (en). Do not switch languages.

## Communities

Community 0: app, AuthUserContext, Env, StayflexiClientConfig, TTLockClientConfig, index.ts, ApiEnvelopeSchema(, BaseEntity, cn(, createIntegrationStatus(, Environment, HealthCheckResponse
Community 1: main, 5373706 chore: initialize monorepo workspace, 57ba611 docs: add architecture review report, ADR package (1, 889e7c0 Initial commit, e5bbd3c docs: add comprehensive master architecture specific, ee66e84 docs(gemini): update GEMINI.md with active MCP inven, fdb0a76 feat(graphify): fully integrate official Graphify kn, eslint.config.js
Community 2: next-env.d.ts, b56cdfd feat(scaffolding): Phase 1 monorepo foundation, apps, drizzle.config.ts
Community 3: EnvConfig, EnvSchema, env.ts, loadEnv(
Community 4: page.tsx, AdminDashboardPage(, GuestStorefrontPage(
Community 5: nextConfig, next.config.ts
Community 6: layout.tsx, RootLayout(
Community 7: organizations, index.ts
Community 8: nextConfig, next.config.ts

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
