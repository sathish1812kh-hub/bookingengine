# Node Description Batch 2 of 3

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
Write every description in English (en). Do not switch languages.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "app_layout_rootlayout": "RootLayout()" | kind=code-symbol | source=apps/website/app/layout.tsx:L3 | neighbors=[layout.tsx]
- "app_page_admindashboardpage": "AdminDashboardPage()" | kind=code-symbol | source=apps/admin/app/page.tsx:L1 | neighbors=[page.tsx]
- "app_page_gueststorefrontpage": "GuestStorefrontPage()" | kind=code-symbol | source=apps/website/app/page.tsx:L1 | neighbors=[page.tsx]
- "db_drizzle_config": "drizzle.config.ts" | kind=code-symbol | source=packages/db/drizzle.config.ts:L1 | neighbors=[b56cdfd feat(scaffolding): Phase 1 mono…]
- "eslint_config": "eslint.config.js" | kind=code-symbol | source=eslint.config.js:L1 | neighbors=[5373706 chore: initialize monorepo work…]
- "routes_auth_getmockhash": "getMockHash()" | kind=code-symbol | source=apps/api/src/routes/auth.ts:L15 | neighbors=[auth.ts]
- "routes_auth_globalmemorystore": "globalMemoryStore" | kind=code-symbol | source=apps/api/src/routes/auth.ts:L7 | neighbors=[auth.ts]
- "schema_index_organizations": "organizations" | kind=code-symbol | source=packages/db/src/schema/index.ts:L3 | neighbors=[index.ts]
- "src_auth_provider_authprovider_constructor": ".constructor()" | kind=code-symbol | source=packages/auth/src/auth-provider.ts:L5 | neighbors=[AuthProvider]
- "src_auth_provider_authprovider_validatesession": ".validateSession()" | kind=code-symbol | source=packages/auth/src/auth-provider.ts:L20 | neighbors=[AuthProvider]
- "src_env_envconfig": "EnvConfig" | kind=code-symbol | source=packages/shared/src/env.ts:L10 | neighbors=[env.ts]
- "src_env_envschema": "EnvSchema" | kind=code-symbol | source=packages/shared/src/env.ts:L3 | neighbors=[env.ts]
- "src_env_loadenv": "loadEnv()" | kind=code-symbol | source=packages/shared/src/env.ts:L12 | neighbors=[env.ts]
- "src_index_apienvelopeschema": "ApiEnvelopeSchema()" | kind=code-symbol | source=packages/shared/src/index.ts:L19 | neighbors=[index.ts]
- "src_index_app": "app" | kind=code-symbol | source=apps/api/src/index.ts:L10 | neighbors=[index.ts]
- "src_index_authresult": "AuthResult" | kind=code-symbol | source=packages/types/src/index.ts:L29 | neighbors=[index.ts]
- "src_index_authuser": "AuthUser" | kind=code-symbol | source=packages/types/src/index.ts:L9 | neighbors=[index.ts]
- "src_index_authusercontext": "AuthUserContext" | kind=code-symbol | source=packages/auth/src/index.ts:L5 | neighbors=[index.ts]
- "src_index_baseentity": "BaseEntity" | kind=code-symbol | source=packages/types/src/index.ts:L3 | neighbors=[index.ts]
- "src_index_cn": "cn()" | kind=code-symbol | source=packages/ui/src/index.ts:L4 | neighbors=[index.ts]
- "src_index_createintegrationstatus": "createIntegrationStatus()" | kind=code-symbol | source=packages/integrations/src/index.ts:L11 | neighbors=[index.ts]
- "src_index_env": "Env" | kind=code-symbol | source=apps/api/src/index.ts:L5 | neighbors=[index.ts]
- "src_index_environment": "Environment" | kind=code-symbol | source=packages/types/src/index.ts:L1 | neighbors=[index.ts]
- "src_index_formatcurrency": "formatCurrency()" | kind=code-symbol | source=packages/utils/src/index.ts:L1 | neighbors=[index.ts]
- "src_index_formatdateiso": "formatDateISO()" | kind=code-symbol | source=packages/utils/src/index.ts:L8 | neighbors=[index.ts]
- "src_index_healthcheckresponse": "HealthCheckResponse" | kind=code-symbol | source=packages/shared/src/index.ts:L17 | neighbors=[index.ts]
- "src_index_healthcheckresponseschema": "HealthCheckResponseSchema" | kind=code-symbol | source=packages/shared/src/index.ts:L3 | neighbors=[index.ts]
- "src_index_isauthorized": "isAuthorized()" | kind=code-symbol | source=packages/auth/src/index.ts:L12 | neighbors=[index.ts]
- "src_index_logincredentials": "LoginCredentials" | kind=code-symbol | source=packages/types/src/index.ts:L24 | neighbors=[index.ts]
- "src_index_loginrequest": "LoginRequest" | kind=code-symbol | source=packages/shared/src/index.ts:L15 | neighbors=[index.ts]
- "src_index_loginrequestschema": "LoginRequestSchema" | kind=code-symbol | source=packages/shared/src/index.ts:L10 | neighbors=[index.ts]
- "src_index_session": "Session" | kind=code-symbol | source=packages/types/src/index.ts:L16 | neighbors=[index.ts]
- "src_index_stayflexiclientconfig": "StayflexiClientConfig" | kind=code-symbol | source=packages/integrations/src/index.ts:L1 | neighbors=[index.ts]
- "src_index_systemstatus": "SystemStatus" | kind=code-symbol | source=packages/shared/src/index.ts:L35 | neighbors=[index.ts]
- "src_index_ttlockclientconfig": "TTLockClientConfig" | kind=code-symbol | source=packages/integrations/src/index.ts:L6 | neighbors=[index.ts]
- "src_session_store_kvnamespacelike": "KVNamespaceLike" | kind=code-symbol | source=packages/auth/src/session-store.ts:L34 | neighbors=[session-store.ts]
- "src_session_store_kvsessionstore_constructor": ".constructor()" | kind=code-symbol | source=packages/auth/src/session-store.ts:L41 | neighbors=[KVSessionStore]
- "src_session_store_kvsessionstore_delete": ".delete()" | kind=code-symbol | source=packages/auth/src/session-store.ts:L59 | neighbors=[KVSessionStore]
- "src_session_store_kvsessionstore_get": ".get()" | kind=code-symbol | source=packages/auth/src/session-store.ts:L43 | neighbors=[KVSessionStore]
- "src_session_store_kvsessionstore_set": ".set()" | kind=code-symbol | source=packages/auth/src/session-store.ts:L53 | neighbors=[KVSessionStore]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\bookingengine\.graphify\description-instructions\batch-001.json

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
