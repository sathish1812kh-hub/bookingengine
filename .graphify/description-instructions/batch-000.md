# Node Description Batch 1 of 1

Graphify is running in assistant/skill mode (no API key). You are the host
assistant (Claude Code / Codex / Gemini CLI). Read the prompt below and write
your JSON answer to the answer file.

## Prompt

You are documenting nodes in a knowledge graph.
For each entry below, write ONE concise factual plain-language sentence
describing what it is or does. Use only the provided context.
For a code symbol (kind=code-symbol — a function, class, or constant),
describe what the function/symbol does based on its name, source location
and neighbors — e.g. "Resolves the configured ontology profile from graphify.yaml.".
For an entity node (any other kind — e.g. a person, place, event, object),
describe what the entity is and its role, grounded in its type, its
relations (neighbors) and the provided citations/evidence — e.g.
"Lady Carfax, a wealthy heiress who disappears en route to Lausanne.".
Ground entity descriptions in the citations/evidence when present; do not
speculate beyond the context, so a node with no supporting context may be
left out of the reply.
Write every description in English (en). Do not switch languages.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "src_index": "index.ts" | kind=code-symbol | source=packages/ui/src/index.ts:L1 | neighbors=[b56cdfd feat(scaffolding): Phase 1 mono…, index.ts, ApiEnvelopeSchema(), app, AuthUserContext, cn()]
- "commit:repo:github.com/sathish1812kh-hub/bookingengine@b56cdfd3d3d08881331f18a6eac3950292e7e74f": "b56cdfd feat(scaffolding): Phase 1 monorepo foundation, apps, packages, and gov…" | kind=Commit | source=git | neighbors=[57ba611 docs: add architecture review r…, next.config.ts, next-env.d.ts, layout.tsx, page.tsx, main]
- "branch:repo:github.com/sathish1812kh-hub/bookingengine#main": "main" | kind=Branch | source=git | neighbors=[57ba611 docs: add architecture review r…, 889e7c0 Initial commit, b56cdfd feat(scaffolding): Phase 1 mono…, e5bbd3c docs: add comprehensive master …, ee66e84 docs(gemini): update GEMINI.md …, fdb0a76 feat(graphify): fully integrate…]
- "app_page": "page.tsx" | kind=code-symbol | source=apps/website/app/page.tsx:L1 | neighbors=[AdminDashboardPage(), GuestStorefrontPage(), b56cdfd feat(scaffolding): Phase 1 mono…]
- "commit:repo:github.com/sathish1812kh-hub/bookingengine@57ba61152821d212b486b3fd3b3c448b2635e402": "57ba611 docs: add architecture review report, ADR package (12 ADRs), and implem…" | kind=Commit | source=git | neighbors=[main, b56cdfd feat(scaffolding): Phase 1 mono…, e5bbd3c docs: add comprehensive master …]
- "commit:repo:github.com/sathish1812kh-hub/bookingengine@e5bbd3c896fd9a430099e5d74ae1423fa726a7d7": "e5bbd3c docs: add comprehensive master architecture specification" | kind=Commit | source=git | neighbors=[889e7c0 Initial commit, main, 57ba611 docs: add architecture review r…]
- "commit:repo:github.com/sathish1812kh-hub/bookingengine@fdb0a7669fdf70b15f01c91af3ccafe203ef67f7": "fdb0a76 feat(graphify): fully integrate official Graphify knowledge graph engin…" | kind=Commit | source=git | neighbors=[b56cdfd feat(scaffolding): Phase 1 mono…, main, ee66e84 docs(gemini): update GEMINI.md …]
- "schema_index": "index.ts" | kind=code-symbol | source=packages/db/src/schema/index.ts:L1 | neighbors=[b56cdfd feat(scaffolding): Phase 1 mono…, organizations, index.ts]
- "admin_next_config": "next.config.ts" | kind=code-symbol | source=apps/admin/next.config.ts:L1 | neighbors=[nextConfig, b56cdfd feat(scaffolding): Phase 1 mono…]
- "app_layout": "layout.tsx" | kind=code-symbol | source=apps/website/app/layout.tsx:L1 | neighbors=[RootLayout(), b56cdfd feat(scaffolding): Phase 1 mono…]
- "commit:repo:github.com/sathish1812kh-hub/bookingengine@889e7c0536b367eca8b7a592bdf53bcb5aaa3d4a": "889e7c0 Initial commit" | kind=Commit | source=git | neighbors=[main, e5bbd3c docs: add comprehensive master …]
- "commit:repo:github.com/sathish1812kh-hub/bookingengine@ee66e84884a974a9caff164350acca210a30c9bc": "ee66e84 docs(gemini): update GEMINI.md with active MCP inventory, ponytail ultr…" | kind=Commit | source=git | neighbors=[main, fdb0a76 feat(graphify): fully integrate…]
- "website_next_config": "next.config.ts" | kind=code-symbol | source=apps/website/next.config.ts:L1 | neighbors=[b56cdfd feat(scaffolding): Phase 1 mono…, nextConfig]
- "admin_next_config_nextconfig": "nextConfig" | kind=code-symbol | source=apps/admin/next.config.ts:L3 | neighbors=[next.config.ts]
- "admin_next_env_d": "next-env.d.ts" | kind=code-symbol | source=apps/admin/next-env.d.ts:L1 | neighbors=[b56cdfd feat(scaffolding): Phase 1 mono…]
- "app_layout_rootlayout": "RootLayout()" | kind=code-symbol | source=apps/website/app/layout.tsx:L3 | neighbors=[layout.tsx]
- "app_page_admindashboardpage": "AdminDashboardPage()" | kind=code-symbol | source=apps/admin/app/page.tsx:L1 | neighbors=[page.tsx]
- "app_page_gueststorefrontpage": "GuestStorefrontPage()" | kind=code-symbol | source=apps/website/app/page.tsx:L1 | neighbors=[page.tsx]
- "db_drizzle_config": "drizzle.config.ts" | kind=code-symbol | source=packages/db/drizzle.config.ts:L1 | neighbors=[b56cdfd feat(scaffolding): Phase 1 mono…]
- "schema_index_organizations": "organizations" | kind=code-symbol | source=packages/db/src/schema/index.ts:L3 | neighbors=[index.ts]
- "src_index_apienvelopeschema": "ApiEnvelopeSchema()" | kind=code-symbol | source=packages/shared/src/index.ts:L12 | neighbors=[index.ts]
- "src_index_app": "app" | kind=code-symbol | source=apps/api/src/index.ts:L8 | neighbors=[index.ts]
- "src_index_authusercontext": "AuthUserContext" | kind=code-symbol | source=packages/auth/src/index.ts:L1 | neighbors=[index.ts]
- "src_index_cn": "cn()" | kind=code-symbol | source=packages/ui/src/index.ts:L4 | neighbors=[index.ts]
- "src_index_createintegrationstatus": "createIntegrationStatus()" | kind=code-symbol | source=packages/integrations/src/index.ts:L11 | neighbors=[index.ts]
- "src_index_env": "Env" | kind=code-symbol | source=apps/api/src/index.ts:L4 | neighbors=[index.ts]
- "src_index_healthcheckresponse": "HealthCheckResponse" | kind=code-symbol | source=packages/shared/src/index.ts:L10 | neighbors=[index.ts]
- "src_index_healthcheckresponseschema": "HealthCheckResponseSchema" | kind=code-symbol | source=packages/shared/src/index.ts:L3 | neighbors=[index.ts]
- "src_index_isauthorized": "isAuthorized()" | kind=code-symbol | source=packages/auth/src/index.ts:L8 | neighbors=[index.ts]
- "src_index_stayflexiclientconfig": "StayflexiClientConfig" | kind=code-symbol | source=packages/integrations/src/index.ts:L1 | neighbors=[index.ts]
- "src_index_systemstatus": "SystemStatus" | kind=code-symbol | source=packages/shared/src/index.ts:L28 | neighbors=[index.ts]
- "src_index_ttlockclientconfig": "TTLockClientConfig" | kind=code-symbol | source=packages/integrations/src/index.ts:L6 | neighbors=[index.ts]
- "website_next_config_nextconfig": "nextConfig" | kind=code-symbol | source=apps/website/next.config.ts:L3 | neighbors=[next.config.ts]
- "website_next_env_d": "next-env.d.ts" | kind=code-symbol | source=apps/website/next-env.d.ts:L1 | neighbors=[b56cdfd feat(scaffolding): Phase 1 mono…]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\bookingengine\.graphify\description-instructions\batch-000.json

Keep each description factual and concise (one sentence). No markdown, no prose
outside the JSON object. It is acceptable to omit a node if context is
insufficient — but include every node you can ground confidently.

Example answer format:
```json
{
  "node_id_1": "Resolves the configured ontology profile from graphify.yaml.",
  "node_id_2": "Colonel James Barclay, an antagonist in The Crooked Man."
}
```
