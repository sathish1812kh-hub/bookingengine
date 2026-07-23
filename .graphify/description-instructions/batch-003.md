# Node Description Batch 4 of 6

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

- "schema_index_organizations": "organizations" | kind=code-symbol | source=packages/db/src/schema/index.ts:L3 | neighbors=[index.ts]
- "schema_organization_organizationdomains": "organizationDomains" | kind=code-symbol | source=packages/db/src/schema/organization.ts:L39 | neighbors=[organization.ts]
- "schema_organization_organizationdomainsrelations": "organizationDomainsRelations" | kind=code-symbol | source=packages/db/src/schema/organization.ts:L93 | neighbors=[organization.ts]
- "schema_organization_organizationfeatures": "organizationFeatures" | kind=code-symbol | source=packages/db/src/schema/organization.ts:L57 | neighbors=[organization.ts]
- "schema_organization_organizationfeaturesrelations": "organizationFeaturesRelations" | kind=code-symbol | source=packages/db/src/schema/organization.ts:L100 | neighbors=[organization.ts]
- "schema_organization_organizationsettings": "organizationSettings" | kind=code-symbol | source=packages/db/src/schema/organization.ts:L20 | neighbors=[organization.ts]
- "schema_organization_organizationsettingsrelations": "organizationSettingsRelations" | kind=code-symbol | source=packages/db/src/schema/organization.ts:L86 | neighbors=[organization.ts]
- "schema_organization_organizationsrelations": "organizationsRelations" | kind=code-symbol | source=packages/db/src/schema/organization.ts:L77 | neighbors=[organization.ts]
- "schema_user_useremails": "userEmails" | kind=code-symbol | source=packages/db/src/schema/user.ts:L53 | neighbors=[user.ts]
- "schema_user_userphones": "userPhones" | kind=code-symbol | source=packages/db/src/schema/user.ts:L71 | neighbors=[user.ts]
- "schema_user_userpreferences": "userPreferences" | kind=code-symbol | source=packages/db/src/schema/user.ts:L87 | neighbors=[user.ts]
- "schema_user_userprofiles": "userProfiles" | kind=code-symbol | source=packages/db/src/schema/user.ts:L31 | neighbors=[user.ts]
- "schema_user_users": "users" | kind=code-symbol | source=packages/db/src/schema/user.ts:L5 | neighbors=[user.ts]
- "schema_user_usersrelations": "usersRelations" | kind=code-symbol | source=packages/db/src/schema/user.ts:L105 | neighbors=[user.ts]
- "src_auth_provider_authprovider_constructor": ".constructor()" | kind=code-symbol | source=packages/auth/src/auth-provider.ts:L5 | neighbors=[AuthProvider]
- "src_auth_provider_authprovider_validatesession": ".validateSession()" | kind=code-symbol | source=packages/auth/src/auth-provider.ts:L20 | neighbors=[AuthProvider]
- "src_env_envconfig": "EnvConfig" | kind=code-symbol | source=packages/shared/src/env.ts:L10 | neighbors=[env.ts]
- "src_env_envschema": "EnvSchema" | kind=code-symbol | source=packages/shared/src/env.ts:L3 | neighbors=[env.ts]
- "src_env_loadenv": "loadEnv()" | kind=code-symbol | source=packages/shared/src/env.ts:L12 | neighbors=[env.ts]
- "src_hotel_resolver_hotelresolver_constructor": ".constructor()" | kind=code-symbol | source=packages/auth/src/hotel-resolver.ts:L88 | neighbors=[HotelResolver]
- "src_hotel_resolver_hotelresolver_validatecrosshotelaccess": ".validateCrossHotelAccess()" | kind=code-symbol | source=packages/auth/src/hotel-resolver.ts:L106 | neighbors=[HotelResolver]
- "src_hotel_resolver_memoryhotelrepository_constructor": ".constructor()" | kind=code-symbol | source=packages/auth/src/hotel-resolver.ts:L15 | neighbors=[MemoryHotelRepository]
- "src_hotel_resolver_memoryhotelrepository_create": ".create()" | kind=code-symbol | source=packages/auth/src/hotel-resolver.ts:L54 | neighbors=[MemoryHotelRepository]
- "src_hotel_resolver_memoryhotelrepository_getbyorganization": ".getByOrganization()" | kind=code-symbol | source=packages/auth/src/hotel-resolver.ts:L50 | neighbors=[MemoryHotelRepository]
- "src_hotel_resolver_memoryhotelrepository_update": ".update()" | kind=code-symbol | source=packages/auth/src/hotel-resolver.ts:L74 | neighbors=[MemoryHotelRepository]
- "src_identity_service_identityservice_constructor": ".constructor()" | kind=code-symbol | source=packages/auth/src/identity-service.ts:L120 | neighbors=[IdentityService]
- "src_identity_service_identityservice_generatepasswordresettoken": ".generatePasswordResetToken()" | kind=code-symbol | source=packages/auth/src/identity-service.ts:L138 | neighbors=[IdentityService]
- "src_identity_service_memoryuserrepository_constructor": ".constructor()" | kind=code-symbol | source=packages/auth/src/identity-service.ts:L18 | neighbors=[MemoryUserRepository]
- "src_identity_service_memoryuserrepository_create": ".create()" | kind=code-symbol | source=packages/auth/src/identity-service.ts:L72 | neighbors=[MemoryUserRepository]
- "src_identity_service_memoryuserrepository_getbyorganization": ".getByOrganization()" | kind=code-symbol | source=packages/auth/src/identity-service.ts:L68 | neighbors=[MemoryUserRepository]
- "src_identity_service_memoryuserrepository_getbyusername": ".getByUsername()" | kind=code-symbol | source=packages/auth/src/identity-service.ts:L59 | neighbors=[MemoryUserRepository]
- "src_identity_service_memoryuserrepository_softdelete": ".softDelete()" | kind=code-symbol | source=packages/auth/src/identity-service.ts:L101 | neighbors=[MemoryUserRepository]
- "src_index_apienvelopeschema": "ApiEnvelopeSchema()" | kind=code-symbol | source=packages/shared/src/index.ts:L19 | neighbors=[index.ts]
- "src_index_app": "app" | kind=code-symbol | source=apps/api/src/index.ts:L13 | neighbors=[index.ts]
- "src_index_authresult": "AuthResult" | kind=code-symbol | source=packages/types/src/index.ts:L87 | neighbors=[index.ts]
- "src_index_authuser": "AuthUser" | kind=code-symbol | source=packages/types/src/index.ts:L61 | neighbors=[index.ts]
- "src_index_authusercontext": "AuthUserContext" | kind=code-symbol | source=packages/auth/src/index.ts:L9 | neighbors=[index.ts]
- "src_index_baseentity": "BaseEntity" | kind=code-symbol | source=packages/types/src/index.ts:L3 | neighbors=[index.ts]
- "src_index_cn": "cn()" | kind=code-symbol | source=packages/ui/src/index.ts:L4 | neighbors=[index.ts]
- "src_index_createintegrationstatus": "createIntegrationStatus()" | kind=code-symbol | source=packages/integrations/src/index.ts:L11 | neighbors=[index.ts]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\bookingengine\.graphify\description-instructions\batch-003.json

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
