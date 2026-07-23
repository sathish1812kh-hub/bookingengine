# Node Description Batch 3 of 6

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

- "src_identity_service_userrepository": "UserRepository" | kind=code-symbol | source=packages/auth/src/identity-service.ts:L4 | neighbors=[identity-service.ts, MemoryUserRepository]
- "src_tenant_resolver_memoryorganizationrepository_getfeatures": ".getFeatures()" | kind=code-symbol | source=packages/auth/src/tenant-resolver.ts:L68 | neighbors=[MemoryOrganizationRepository, .resolveContext()]
- "src_tenant_resolver_memoryorganizationrepository_getsettings": ".getSettings()" | kind=code-symbol | source=packages/auth/src/tenant-resolver.ts:L64 | neighbors=[MemoryOrganizationRepository, .resolveContext()]
- "src_tenant_resolver_organizationrepository": "OrganizationRepository" | kind=code-symbol | source=packages/auth/src/tenant-resolver.ts:L3 | neighbors=[tenant-resolver.ts, MemoryOrganizationRepository]
- "src_tenant_test": "tenant.test.ts" | kind=code-symbol | source=packages/auth/src/tenant.test.ts:L1 | neighbors=[67e5e40 feat(tenant): implement Organiz…, index.ts]
- "src_user_test": "user.test.ts" | kind=code-symbol | source=packages/auth/src/user.test.ts:L1 | neighbors=[9f7d461 feat(identity): implement Ident…, index.ts]
- "website_next_config": "next.config.ts" | kind=code-symbol | source=apps/website/next.config.ts:L1 | neighbors=[b56cdfd feat(scaffolding): Phase 1 mono…, nextConfig]
- "admin_next_config_nextconfig": "nextConfig" | kind=code-symbol | source=apps/admin/next.config.ts:L3 | neighbors=[next.config.ts]
- "admin_next_env_d": "next-env.d.ts" | kind=code-symbol | source=apps/admin/next-env.d.ts:L1 | neighbors=[b56cdfd feat(scaffolding): Phase 1 mono…]
- "app_layout_rootlayout": "RootLayout()" | kind=code-symbol | source=apps/website/app/layout.tsx:L3 | neighbors=[layout.tsx]
- "app_page_admindashboardpage": "AdminDashboardPage()" | kind=code-symbol | source=apps/admin/app/page.tsx:L1 | neighbors=[page.tsx]
- "app_page_gueststorefrontpage": "GuestStorefrontPage()" | kind=code-symbol | source=apps/website/app/page.tsx:L1 | neighbors=[page.tsx]
- "db_drizzle_config": "drizzle.config.ts" | kind=code-symbol | source=packages/db/drizzle.config.ts:L1 | neighbors=[b56cdfd feat(scaffolding): Phase 1 mono…]
- "eslint_config": "eslint.config.js" | kind=code-symbol | source=eslint.config.js:L1 | neighbors=[5373706 chore: initialize monorepo work…]
- "hotels_page_hotelitem": "HotelItem" | kind=code-symbol | source=apps/admin/app/hotels/page.tsx:L5 | neighbors=[page.tsx]
- "hotels_page_hotelspage": "HotelsPage()" | kind=code-symbol | source=apps/admin/app/hotels/page.tsx:L15 | neighbors=[page.tsx]
- "login_page_loginpage": "LoginPage()" | kind=code-symbol | source=apps/admin/app/login/page.tsx:L5 | neighbors=[page.tsx]
- "middlewares_auth_middleware_authcontextvariables": "AuthContextVariables" | kind=code-symbol | source=apps/api/src/middlewares/auth.middleware.ts:L9 | neighbors=[auth.middleware.ts]
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
- "routes_users_identityservice": "identityService" | kind=code-symbol | source=apps/api/src/routes/users.ts:L5 | neighbors=[users.ts]
- "routes_users_userrepo": "userRepo" | kind=code-symbol | source=apps/api/src/routes/users.ts:L4 | neighbors=[users.ts]
- "schema_hotel_hoteladdresses": "hotelAddresses" | kind=code-symbol | source=packages/db/src/schema/hotel.ts:L71 | neighbors=[hotel.ts]
- "schema_hotel_hotelbusinessdates": "hotelBusinessDates" | kind=code-symbol | source=packages/db/src/schema/hotel.ts:L91 | neighbors=[hotel.ts]
- "schema_hotel_hotelcontacts": "hotelContacts" | kind=code-symbol | source=packages/db/src/schema/hotel.ts:L54 | neighbors=[hotel.ts]
- "schema_hotel_hotels": "hotels" | kind=code-symbol | source=packages/db/src/schema/hotel.ts:L5 | neighbors=[hotel.ts]
- "schema_hotel_hotelsettings": "hotelSettings" | kind=code-symbol | source=packages/db/src/schema/hotel.ts:L36 | neighbors=[hotel.ts]
- "schema_hotel_hotelsrelations": "hotelsRelations" | kind=code-symbol | source=packages/db/src/schema/hotel.ts:L110 | neighbors=[hotel.ts]

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
