# Community Labeling

Graphify is running in assistant/skill mode (no API key). You are the host
assistant (Claude Code / Codex / Gemini CLI). Read the community listing below
and write 2-5 word plain-language names for each.

## Language

LANGUAGE: each community line ends with a `[lang=…]` marker giving the
language of its source nodes. Write that community's name in EXACTLY that
language. Do not normalize every name to one common language.

## Communities

Community 0: app, AuthUserContext, Env, HealthCheckResponse, HealthCheckResponseSchema, StayflexiClientConfig, TTLockClientConfig, index.ts, ApiEnvelopeSchema(, cn(, createIntegrationStatus(, isAuthorized( [lang=en]
Community 1: nextConfig, next.config.ts, next-env.d.ts, layout.tsx, RootLayout(, b56cdfd feat(scaffolding): Phase 1 monorepo foundation, apps, drizzle.config.ts [lang=en]
Community 2: main, 57ba611 docs: add architecture review report, ADR package (1, 889e7c0 Initial commit, e5bbd3c docs: add comprehensive master architecture specific, fdb0a76 feat(graphify): fully integrate official Graphify kn [lang=pt]
Community 3: page.tsx, AdminDashboardPage(, GuestStorefrontPage( [lang=en]
Community 4: organizations, index.ts [lang=en]

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
