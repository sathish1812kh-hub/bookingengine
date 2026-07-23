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

- "src_auth_provider_authprovider_constructor": ".constructor()" | kind=code-symbol | source=packages/auth/src/auth-provider.ts:L5 | neighbors=[AuthProvider]
- "src_auth_provider_authprovider_validatesession": ".validateSession()" | kind=code-symbol | source=packages/auth/src/auth-provider.ts:L20 | neighbors=[AuthProvider]
- "src_env_envconfig": "EnvConfig" | kind=code-symbol | source=packages/shared/src/env.ts:L10 | neighbors=[env.ts]
- "src_env_envschema": "EnvSchema" | kind=code-symbol | source=packages/shared/src/env.ts:L3 | neighbors=[env.ts]
- "src_env_loadenv": "loadEnv()" | kind=code-symbol | source=packages/shared/src/env.ts:L12 | neighbors=[env.ts]
- "src_hotel_assignment_service_hotelassignmentservice_constructor": ".constructor()" | kind=code-symbol | source=packages/auth/src/hotel-assignment-service.ts:L93 | neighbors=[HotelAssignmentService]
- "src_hotel_assignment_service_memoryassignmentrepository_constructor": ".constructor()" | kind=code-symbol | source=packages/auth/src/hotel-assignment-service.ts:L16 | neighbors=[MemoryAssignmentRepository]
- "src_hotel_assignment_service_memoryassignmentrepository_getbyhotel": ".getByHotel()" | kind=code-symbol | source=packages/auth/src/hotel-assignment-service.ts:L37 | neighbors=[MemoryAssignmentRepository]
- "src_hotel_assignment_service_memoryassignmentrepository_update": ".update()" | kind=code-symbol | source=packages/auth/src/hotel-assignment-service.ts:L64 | neighbors=[MemoryAssignmentRepository]
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
- "src_index_app": "app" | kind=code-symbol | source=apps/api/src/index.ts:L15 | neighbors=[index.ts]
- "src_index_authresult": "AuthResult" | kind=code-symbol | source=packages/types/src/index.ts:L127 | neighbors=[index.ts]
- "src_index_authuser": "AuthUser" | kind=code-symbol | source=packages/types/src/index.ts:L99 | neighbors=[index.ts]
- "src_index_authusercontext": "AuthUserContext" | kind=code-symbol | source=packages/auth/src/index.ts:L10 | neighbors=[index.ts]
- "src_index_baseentity": "BaseEntity" | kind=code-symbol | source=packages/types/src/index.ts:L3 | neighbors=[index.ts]
- "src_index_cn": "cn()" | kind=code-symbol | source=packages/ui/src/index.ts:L4 | neighbors=[index.ts]
- "src_index_createintegrationstatus": "createIntegrationStatus()" | kind=code-symbol | source=packages/integrations/src/index.ts:L11 | neighbors=[index.ts]
- "src_index_env": "Env" | kind=code-symbol | source=apps/api/src/index.ts:L10 | neighbors=[index.ts]
- "src_index_environment": "Environment" | kind=code-symbol | source=packages/types/src/index.ts:L1 | neighbors=[index.ts]
- "src_index_formatcurrency": "formatCurrency()" | kind=code-symbol | source=packages/utils/src/index.ts:L1 | neighbors=[index.ts]
- "src_index_formatdateiso": "formatDateISO()" | kind=code-symbol | source=packages/utils/src/index.ts:L8 | neighbors=[index.ts]
- "src_index_healthcheckresponse": "HealthCheckResponse" | kind=code-symbol | source=packages/shared/src/index.ts:L17 | neighbors=[index.ts]
- "src_index_healthcheckresponseschema": "HealthCheckResponseSchema" | kind=code-symbol | source=packages/shared/src/index.ts:L3 | neighbors=[index.ts]
- "src_index_hotel": "Hotel" | kind=code-symbol | source=packages/types/src/index.ts:L173 | neighbors=[index.ts]
- "src_index_hotelbusinessdate": "HotelBusinessDate" | kind=code-symbol | source=packages/types/src/index.ts:L192 | neighbors=[index.ts]
- "src_index_hotelcontext": "HotelContext" | kind=code-symbol | source=packages/types/src/index.ts:L199 | neighbors=[index.ts]
- "src_index_isauthorized": "isAuthorized()" | kind=code-symbol | source=packages/auth/src/index.ts:L17 | neighbors=[index.ts]

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
