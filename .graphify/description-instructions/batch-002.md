# Node Description Batch 3 of 5

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

- "middlewares_auth_middleware_memorystore": "memoryStore" | kind=code-symbol | source=apps/api/src/middlewares/auth.middleware.ts:L7 | neighbors=[auth.middleware.ts]
- "middlewares_auth_middleware_requireauthmiddleware": "requireAuthMiddleware()" | kind=code-symbol | source=apps/api/src/middlewares/auth.middleware.ts:L15 | neighbors=[auth.middleware.ts]
- "middlewares_hotel_middleware_hotelcontextvariables": "HotelContextVariables" | kind=code-symbol | source=apps/api/src/middlewares/hotel.middleware.ts:L8 | neighbors=[hotel.middleware.ts]
- "middlewares_hotel_middleware_hotelrepo": "hotelRepo" | kind=code-symbol | source=apps/api/src/middlewares/hotel.middleware.ts:L5 | neighbors=[hotel.middleware.ts]
- "middlewares_hotel_middleware_hotelresolver": "hotelResolver" | kind=code-symbol | source=apps/api/src/middlewares/hotel.middleware.ts:L6 | neighbors=[hotel.middleware.ts]
- "middlewares_hotel_middleware_requirehotelcontext": "requireHotelContext()" | kind=code-symbol | source=apps/api/src/middlewares/hotel.middleware.ts:L28 | neighbors=[hotel.middleware.ts]
- "middlewares_hotel_middleware_resolvehotelcontext": "resolveHotelContext()" | kind=code-symbol | source=apps/api/src/middlewares/hotel.middleware.ts:L12 | neighbors=[hotel.middleware.ts]
- "middlewares_tenant_middleware_orgrepo": "orgRepo" | kind=code-symbol | source=apps/api/src/middlewares/tenant.middleware.ts:L5 | neighbors=[tenant.middleware.ts]
- "middlewares_tenant_middleware_tenantcontextvariables": "TenantContextVariables" | kind=code-symbol | source=apps/api/src/middlewares/tenant.middleware.ts:L8 | neighbors=[tenant.middleware.ts]
- "middlewares_tenant_middleware_tenantmiddleware": "tenantMiddleware()" | kind=code-symbol | source=apps/api/src/middlewares/tenant.middleware.ts:L12 | neighbors=[tenant.middleware.ts]
- "middlewares_tenant_middleware_tenantresolver": "tenantResolver" | kind=code-symbol | source=apps/api/src/middlewares/tenant.middleware.ts:L6 | neighbors=[tenant.middleware.ts]
- "routes_auth_getmockhash": "getMockHash()" | kind=code-symbol | source=apps/api/src/routes/auth.ts:L15 | neighbors=[auth.ts]
- "routes_auth_globalmemorystore": "globalMemoryStore" | kind=code-symbol | source=apps/api/src/routes/auth.ts:L7 | neighbors=[auth.ts]
- "routes_hotels_hotelrepo": "hotelRepo" | kind=code-symbol | source=apps/api/src/routes/hotels.ts:L4 | neighbors=[hotels.ts]
- "schema_hotel_hoteladdresses": "hotelAddresses" | kind=code-symbol | source=packages/db/src/schema/hotel.ts:L71 | neighbors=[hotel.ts]
- "schema_hotel_hotelbusinessdates": "hotelBusinessDates" | kind=code-symbol | source=packages/db/src/schema/hotel.ts:L91 | neighbors=[hotel.ts]
- "schema_hotel_hotelcontacts": "hotelContacts" | kind=code-symbol | source=packages/db/src/schema/hotel.ts:L54 | neighbors=[hotel.ts]
- "schema_hotel_hotels": "hotels" | kind=code-symbol | source=packages/db/src/schema/hotel.ts:L5 | neighbors=[hotel.ts]
- "schema_hotel_hotelsettings": "hotelSettings" | kind=code-symbol | source=packages/db/src/schema/hotel.ts:L36 | neighbors=[hotel.ts]
- "schema_hotel_hotelsrelations": "hotelsRelations" | kind=code-symbol | source=packages/db/src/schema/hotel.ts:L110 | neighbors=[hotel.ts]
- "schema_index_organizations": "organizations" | kind=code-symbol | source=packages/db/src/schema/index.ts:L3 | neighbors=[index.ts]
- "schema_organization_organizationdomains": "organizationDomains" | kind=code-symbol | source=packages/db/src/schema/organization.ts:L39 | neighbors=[organization.ts]
- "schema_organization_organizationdomainsrelations": "organizationDomainsRelations" | kind=code-symbol | source=packages/db/src/schema/organization.ts:L93 | neighbors=[organization.ts]
- "schema_organization_organizationfeatures": "organizationFeatures" | kind=code-symbol | source=packages/db/src/schema/organization.ts:L57 | neighbors=[organization.ts]
- "schema_organization_organizationfeaturesrelations": "organizationFeaturesRelations" | kind=code-symbol | source=packages/db/src/schema/organization.ts:L100 | neighbors=[organization.ts]
- "schema_organization_organizationsettings": "organizationSettings" | kind=code-symbol | source=packages/db/src/schema/organization.ts:L20 | neighbors=[organization.ts]
- "schema_organization_organizationsettingsrelations": "organizationSettingsRelations" | kind=code-symbol | source=packages/db/src/schema/organization.ts:L86 | neighbors=[organization.ts]
- "schema_organization_organizationsrelations": "organizationsRelations" | kind=code-symbol | source=packages/db/src/schema/organization.ts:L77 | neighbors=[organization.ts]
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
- "src_index_apienvelopeschema": "ApiEnvelopeSchema()" | kind=code-symbol | source=packages/shared/src/index.ts:L19 | neighbors=[index.ts]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\bookingengine\.graphify\description-instructions\batch-002.json

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
