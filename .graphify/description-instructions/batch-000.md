# Node Description Batch 1 of 2

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
LANGUAGE: each entry has a `lang=` marker giving the language of its source.
Write that entry's description in EXACTLY that language. Do not translate to
a single common language — match each node's source language individually.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "src_index": "index.ts" | kind=code-symbol | source=packages/utils/src/index.ts:L1 | neighbors=[5373706 chore: initialize monorepo work…, b56cdfd feat(scaffolding): Phase 1 mono…, e9fba19 chore(epic-001): workspace foun…, index.ts, env.ts, ApiEnvelopeSchema()] | lang=en
- "branch:repo:github.com/sathish1812kh-hub/bookingengine#main": "main" | kind=Branch | source=git | neighbors=[3efb8ed docs(product): create master Pr…, 5373706 chore: initialize monorepo work…, 57ba611 docs: add architecture review r…, 7699c20 chore(epic-001): initialize wor…, 8264a67 docs(ux): add comprehensive UX …, 889e7c0 Initial commit] | lang=en
- "commit:repo:github.com/sathish1812kh-hub/bookingengine@b56cdfd3d3d08881331f18a6eac3950292e7e74f": "b56cdfd feat(scaffolding): Phase 1 monorepo foundation, apps, packages, and gov…" | kind=Commit | source=git | neighbors=[57ba611 docs: add architecture review r…, next.config.ts, next-env.d.ts, layout.tsx, page.tsx, main] | lang=en
- "commit:repo:github.com/sathish1812kh-hub/bookingengine@5373706b77f1fc569c764c66538010eaaf335e72": "5373706 chore: initialize monorepo workspace" | kind=Commit | source=git | neighbors=[main, 8264a67 docs(ux): add comprehensive UX …, eslint.config.js, env.ts, index.ts, ee66e84 docs(gemini): update GEMINI.md …] | lang=en
- "src_env": "env.ts" | kind=code-symbol | source=packages/shared/src/env.ts:L1 | neighbors=[5373706 chore: initialize monorepo work…, EnvConfig, EnvSchema, loadEnv(), index.ts] | lang=en
- "app_page": "page.tsx" | kind=code-symbol | source=apps/website/app/page.tsx:L1 | neighbors=[AdminDashboardPage(), GuestStorefrontPage(), b56cdfd feat(scaffolding): Phase 1 mono…] | lang=en
- "commit:repo:github.com/sathish1812kh-hub/bookingengine@3efb8ed7bacdd3f596ff99de282eb4a13c2a339f": "3efb8ed docs(product): create master Product Blueprint specification and freeze…" | kind=Commit | source=git | neighbors=[main, f4675ed docs(project): create Master Ex…, 8264a67 docs(ux): add comprehensive UX …] | lang=en
- "commit:repo:github.com/sathish1812kh-hub/bookingengine@57ba61152821d212b486b3fd3b3c448b2635e402": "57ba611 docs: add architecture review report, ADR package (12 ADRs), and implem…" | kind=Commit | source=git | neighbors=[main, b56cdfd feat(scaffolding): Phase 1 mono…, e5bbd3c docs: add comprehensive master …] | lang=en
- "commit:repo:github.com/sathish1812kh-hub/bookingengine@7699c207af4889fe33bc77f912dfc6ed8e20debd": "7699c20 chore(epic-001): initialize workspace foundation" | kind=Commit | source=git | neighbors=[main, e9fba19 chore(epic-001): workspace foun…, f4675ed docs(project): create Master Ex…] | lang=en
- "commit:repo:github.com/sathish1812kh-hub/bookingengine@8264a679ed9fe114ae4b9e377ff6a3019212c08d": "8264a67 docs(ux): add comprehensive UX & Access Control Architecture package (1…" | kind=Commit | source=git | neighbors=[5373706 chore: initialize monorepo work…, main, 3efb8ed docs(product): create master Pr…] | lang=pt
- "commit:repo:github.com/sathish1812kh-hub/bookingengine@e5bbd3c896fd9a430099e5d74ae1423fa726a7d7": "e5bbd3c docs: add comprehensive master architecture specification" | kind=Commit | source=git | neighbors=[889e7c0 Initial commit, main, 57ba611 docs: add architecture review r…] | lang=en
- "commit:repo:github.com/sathish1812kh-hub/bookingengine@e9fba19c69dec0cae4930f416800987985771c35": "e9fba19 chore(epic-001): workspace foundation" | kind=Commit | source=git | neighbors=[7699c20 chore(epic-001): initialize wor…, main, index.ts] | lang=en
- "commit:repo:github.com/sathish1812kh-hub/bookingengine@ee66e84884a974a9caff164350acca210a30c9bc": "ee66e84 docs(gemini): update GEMINI.md with active MCP inventory, ponytail ultr…" | kind=Commit | source=git | neighbors=[main, 5373706 chore: initialize monorepo work…, fdb0a76 feat(graphify): fully integrate…] | lang=en
- "commit:repo:github.com/sathish1812kh-hub/bookingengine@f4675eddf9ce7473b4fa73f2a5ff6f660e1308aa": "f4675ed docs(project): create Master Execution Plan & Epic Roadmap (EPIC-001 th…" | kind=Commit | source=git | neighbors=[3efb8ed docs(product): create master Pr…, main, 7699c20 chore(epic-001): initialize wor…] | lang=en
- "commit:repo:github.com/sathish1812kh-hub/bookingengine@fdb0a7669fdf70b15f01c91af3ccafe203ef67f7": "fdb0a76 feat(graphify): fully integrate official Graphify knowledge graph engin…" | kind=Commit | source=git | neighbors=[b56cdfd feat(scaffolding): Phase 1 mono…, main, ee66e84 docs(gemini): update GEMINI.md …] | lang=en
- "schema_index": "index.ts" | kind=code-symbol | source=packages/db/src/schema/index.ts:L1 | neighbors=[b56cdfd feat(scaffolding): Phase 1 mono…, organizations, index.ts] | lang=en
- "admin_next_config": "next.config.ts" | kind=code-symbol | source=apps/admin/next.config.ts:L1 | neighbors=[nextConfig, b56cdfd feat(scaffolding): Phase 1 mono…] | lang=en
- "app_layout": "layout.tsx" | kind=code-symbol | source=apps/website/app/layout.tsx:L1 | neighbors=[RootLayout(), b56cdfd feat(scaffolding): Phase 1 mono…] | lang=en
- "commit:repo:github.com/sathish1812kh-hub/bookingengine@889e7c0536b367eca8b7a592bdf53bcb5aaa3d4a": "889e7c0 Initial commit" | kind=Commit | source=git | neighbors=[main, e5bbd3c docs: add comprehensive master …] | lang=en
- "website_next_config": "next.config.ts" | kind=code-symbol | source=apps/website/next.config.ts:L1 | neighbors=[b56cdfd feat(scaffolding): Phase 1 mono…, nextConfig] | lang=en
- "admin_next_config_nextconfig": "nextConfig" | kind=code-symbol | source=apps/admin/next.config.ts:L3 | neighbors=[next.config.ts] | lang=en
- "admin_next_env_d": "next-env.d.ts" | kind=code-symbol | source=apps/admin/next-env.d.ts:L1 | neighbors=[b56cdfd feat(scaffolding): Phase 1 mono…] | lang=en
- "app_layout_rootlayout": "RootLayout()" | kind=code-symbol | source=apps/website/app/layout.tsx:L3 | neighbors=[layout.tsx] | lang=en
- "app_page_admindashboardpage": "AdminDashboardPage()" | kind=code-symbol | source=apps/admin/app/page.tsx:L1 | neighbors=[page.tsx] | lang=en
- "app_page_gueststorefrontpage": "GuestStorefrontPage()" | kind=code-symbol | source=apps/website/app/page.tsx:L1 | neighbors=[page.tsx] | lang=en
- "db_drizzle_config": "drizzle.config.ts" | kind=code-symbol | source=packages/db/drizzle.config.ts:L1 | neighbors=[b56cdfd feat(scaffolding): Phase 1 mono…] | lang=en
- "eslint_config": "eslint.config.js" | kind=code-symbol | source=eslint.config.js:L1 | neighbors=[5373706 chore: initialize monorepo work…] | lang=en
- "schema_index_organizations": "organizations" | kind=code-symbol | source=packages/db/src/schema/index.ts:L3 | neighbors=[index.ts] | lang=en
- "src_env_envconfig": "EnvConfig" | kind=code-symbol | source=packages/shared/src/env.ts:L10 | neighbors=[env.ts] | lang=en
- "src_env_envschema": "EnvSchema" | kind=code-symbol | source=packages/shared/src/env.ts:L3 | neighbors=[env.ts] | lang=en
- "src_env_loadenv": "loadEnv()" | kind=code-symbol | source=packages/shared/src/env.ts:L12 | neighbors=[env.ts] | lang=en
- "src_index_apienvelopeschema": "ApiEnvelopeSchema()" | kind=code-symbol | source=packages/shared/src/index.ts:L12 | neighbors=[index.ts] | lang=en
- "src_index_app": "app" | kind=code-symbol | source=apps/api/src/index.ts:L10 | neighbors=[index.ts] | lang=en
- "src_index_authresult": "AuthResult" | kind=code-symbol | source=packages/types/src/index.ts:L29 | neighbors=[index.ts] | lang=en
- "src_index_authuser": "AuthUser" | kind=code-symbol | source=packages/types/src/index.ts:L9 | neighbors=[index.ts] | lang=en
- "src_index_authusercontext": "AuthUserContext" | kind=code-symbol | source=packages/auth/src/index.ts:L5 | neighbors=[index.ts] | lang=en
- "src_index_baseentity": "BaseEntity" | kind=code-symbol | source=packages/types/src/index.ts:L3 | neighbors=[index.ts] | lang=en
- "src_index_cn": "cn()" | kind=code-symbol | source=packages/ui/src/index.ts:L4 | neighbors=[index.ts] | lang=en
- "src_index_createintegrationstatus": "createIntegrationStatus()" | kind=code-symbol | source=packages/integrations/src/index.ts:L11 | neighbors=[index.ts] | lang=en
- "src_index_env": "Env" | kind=code-symbol | source=apps/api/src/index.ts:L5 | neighbors=[index.ts] | lang=en

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
