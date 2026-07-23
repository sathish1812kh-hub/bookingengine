# Node Description Batch 6 of 6

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

- "src_index_logincredentials": "LoginCredentials" | kind=code-symbol | source=packages/types/src/index.ts:L122 | neighbors=[index.ts]
- "src_index_loginrequest": "LoginRequest" | kind=code-symbol | source=packages/shared/src/index.ts:L15 | neighbors=[index.ts]
- "src_index_loginrequestschema": "LoginRequestSchema" | kind=code-symbol | source=packages/shared/src/index.ts:L10 | neighbors=[index.ts]
- "src_index_organization": "Organization" | kind=code-symbol | source=packages/types/src/index.ts:L133 | neighbors=[index.ts]
- "src_index_organizationdomain": "OrganizationDomain" | kind=code-symbol | source=packages/types/src/index.ts:L151 | neighbors=[index.ts]
- "src_index_organizationfeature": "OrganizationFeature" | kind=code-symbol | source=packages/types/src/index.ts:L159 | neighbors=[index.ts]
- "src_index_organizationsettings": "OrganizationSettings" | kind=code-symbol | source=packages/types/src/index.ts:L142 | neighbors=[index.ts]
- "src_index_permission": "Permission" | kind=code-symbol | source=packages/types/src/index.ts:L11 | neighbors=[index.ts]
- "src_index_permissionscope": "PermissionScope" | kind=code-symbol | source=packages/types/src/index.ts:L9 | neighbors=[index.ts]
- "src_index_role": "Role" | kind=code-symbol | source=packages/types/src/index.ts:L25 | neighbors=[index.ts]
- "src_index_session": "Session" | kind=code-symbol | source=packages/types/src/index.ts:L110 | neighbors=[index.ts]
- "src_index_stayflexiclientconfig": "StayflexiClientConfig" | kind=code-symbol | source=packages/integrations/src/index.ts:L1 | neighbors=[index.ts]
- "src_index_systemstatus": "SystemStatus" | kind=code-symbol | source=packages/shared/src/index.ts:L35 | neighbors=[index.ts]
- "src_index_tenantcontext": "TenantContext" | kind=code-symbol | source=packages/types/src/index.ts:L167 | neighbors=[index.ts]
- "src_index_ttlockclientconfig": "TTLockClientConfig" | kind=code-symbol | source=packages/integrations/src/index.ts:L6 | neighbors=[index.ts]
- "src_index_user": "User" | kind=code-symbol | source=packages/types/src/index.ts:L81 | neighbors=[index.ts]
- "src_index_userhotelassignment": "UserHotelAssignment" | kind=code-symbol | source=packages/types/src/index.ts:L47 | neighbors=[index.ts]
- "src_index_userpreferences": "UserPreferences" | kind=code-symbol | source=packages/types/src/index.ts:L74 | neighbors=[index.ts]
- "src_index_userprofile": "UserProfile" | kind=code-symbol | source=packages/types/src/index.ts:L62 | neighbors=[index.ts]
- "src_index_userrole": "UserRole" | kind=code-symbol | source=packages/types/src/index.ts:L38 | neighbors=[index.ts]
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
- "website_next_config_nextconfig": "nextConfig" | kind=code-symbol | source=apps/website/next.config.ts:L3 | neighbors=[next.config.ts]
- "website_next_env_d": "next-env.d.ts" | kind=code-symbol | source=apps/website/next-env.d.ts:L1 | neighbors=[b56cdfd feat(scaffolding): Phase 1 mono…]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\bookingengine\.graphify\description-instructions\batch-005.json

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
