# Node Description Batch 5 of 6

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

- "src_index_env": "Env" | kind=code-symbol | source=apps/api/src/index.ts:L8 | neighbors=[index.ts]
- "src_index_environment": "Environment" | kind=code-symbol | source=packages/types/src/index.ts:L1 | neighbors=[index.ts]
- "src_index_formatcurrency": "formatCurrency()" | kind=code-symbol | source=packages/utils/src/index.ts:L1 | neighbors=[index.ts]
- "src_index_formatdateiso": "formatDateISO()" | kind=code-symbol | source=packages/utils/src/index.ts:L8 | neighbors=[index.ts]
- "src_index_healthcheckresponse": "HealthCheckResponse" | kind=code-symbol | source=packages/shared/src/index.ts:L17 | neighbors=[index.ts]
- "src_index_healthcheckresponseschema": "HealthCheckResponseSchema" | kind=code-symbol | source=packages/shared/src/index.ts:L3 | neighbors=[index.ts]
- "src_index_hotel": "Hotel" | kind=code-symbol | source=packages/types/src/index.ts:L133 | neighbors=[index.ts]
- "src_index_hotelbusinessdate": "HotelBusinessDate" | kind=code-symbol | source=packages/types/src/index.ts:L152 | neighbors=[index.ts]
- "src_index_hotelcontext": "HotelContext" | kind=code-symbol | source=packages/types/src/index.ts:L159 | neighbors=[index.ts]
- "src_index_isauthorized": "isAuthorized()" | kind=code-symbol | source=packages/auth/src/index.ts:L16 | neighbors=[index.ts]
- "src_index_logincredentials": "LoginCredentials" | kind=code-symbol | source=packages/types/src/index.ts:L82 | neighbors=[index.ts]
- "src_index_loginrequest": "LoginRequest" | kind=code-symbol | source=packages/shared/src/index.ts:L15 | neighbors=[index.ts]
- "src_index_loginrequestschema": "LoginRequestSchema" | kind=code-symbol | source=packages/shared/src/index.ts:L10 | neighbors=[index.ts]
- "src_index_organization": "Organization" | kind=code-symbol | source=packages/types/src/index.ts:L93 | neighbors=[index.ts]
- "src_index_organizationdomain": "OrganizationDomain" | kind=code-symbol | source=packages/types/src/index.ts:L111 | neighbors=[index.ts]
- "src_index_organizationfeature": "OrganizationFeature" | kind=code-symbol | source=packages/types/src/index.ts:L119 | neighbors=[index.ts]
- "src_index_organizationsettings": "OrganizationSettings" | kind=code-symbol | source=packages/types/src/index.ts:L102 | neighbors=[index.ts]
- "src_index_session": "Session" | kind=code-symbol | source=packages/types/src/index.ts:L71 | neighbors=[index.ts]
- "src_index_stayflexiclientconfig": "StayflexiClientConfig" | kind=code-symbol | source=packages/integrations/src/index.ts:L1 | neighbors=[index.ts]
- "src_index_systemstatus": "SystemStatus" | kind=code-symbol | source=packages/shared/src/index.ts:L35 | neighbors=[index.ts]
- "src_index_tenantcontext": "TenantContext" | kind=code-symbol | source=packages/types/src/index.ts:L127 | neighbors=[index.ts]
- "src_index_ttlockclientconfig": "TTLockClientConfig" | kind=code-symbol | source=packages/integrations/src/index.ts:L6 | neighbors=[index.ts]
- "src_index_user": "User" | kind=code-symbol | source=packages/types/src/index.ts:L43 | neighbors=[index.ts]
- "src_index_userhotelassignment": "UserHotelAssignment" | kind=code-symbol | source=packages/types/src/index.ts:L9 | neighbors=[index.ts]
- "src_index_userpreferences": "UserPreferences" | kind=code-symbol | source=packages/types/src/index.ts:L36 | neighbors=[index.ts]
- "src_index_userprofile": "UserProfile" | kind=code-symbol | source=packages/types/src/index.ts:L24 | neighbors=[index.ts]
- "src_session_store_kvnamespacelike": "KVNamespaceLike" | kind=code-symbol | source=packages/auth/src/session-store.ts:L34 | neighbors=[session-store.ts]
- "src_session_store_kvsessionstore_constructor": ".constructor()" | kind=code-symbol | source=packages/auth/src/session-store.ts:L41 | neighbors=[KVSessionStore]
- "src_session_store_kvsessionstore_delete": ".delete()" | kind=code-symbol | source=packages/auth/src/session-store.ts:L59 | neighbors=[KVSessionStore]
- "src_session_store_kvsessionstore_get": ".get()" | kind=code-symbol | source=packages/auth/src/session-store.ts:L43 | neighbors=[KVSessionStore]
- "src_session_store_kvsessionstore_set": ".set()" | kind=code-symbol | source=packages/auth/src/session-store.ts:L53 | neighbors=[KVSessionStore]
- "src_session_store_memorysessionstore_delete": ".delete()" | kind=code-symbol | source=packages/auth/src/session-store.ts:L29 | neighbors=[MemorySessionStore]
- "src_session_store_memorysessionstore_get": ".get()" | kind=code-symbol | source=packages/auth/src/session-store.ts:L12 | neighbors=[MemorySessionStore]
- "src_session_store_memorysessionstore_set": ".set()" | kind=code-symbol | source=packages/auth/src/session-store.ts:L22 | neighbors=[MemorySessionStore]
- "src_tenant_resolver_memoryorganizationrepository_constructor": ".constructor()" | kind=code-symbol | source=packages/auth/src/tenant-resolver.ts:L17 | neighbors=[MemoryOrganizationRepository]
- "src_tenant_resolver_memoryorganizationrepository_getbyslug": ".getBySlug()" | kind=code-symbol | source=packages/auth/src/tenant-resolver.ts:L51 | neighbors=[MemoryOrganizationRepository]
- "src_tenant_resolver_tenantresolver_constructor": ".constructor()" | kind=code-symbol | source=packages/auth/src/tenant-resolver.ts:L74 | neighbors=[TenantResolver]
- "src_tenant_resolver_tenantresolver_validatecrosstenantaccess": ".validateCrossTenantAccess()" | kind=code-symbol | source=packages/auth/src/tenant-resolver.ts:L111 | neighbors=[TenantResolver]
- "users_page_useritem": "UserItem" | kind=code-symbol | source=apps/admin/app/users/page.tsx:L5 | neighbors=[page.tsx]
- "users_page_userspage": "UsersPage()" | kind=code-symbol | source=apps/admin/app/users/page.tsx:L14 | neighbors=[page.tsx]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\bookingengine\.graphify\description-instructions\batch-004.json

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
