# Node Description Batch 2 of 5

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

- "commit:repo:github.com/sathish1812kh-hub/bookingengine@f4675eddf9ce7473b4fa73f2a5ff6f660e1308aa": "f4675ed docs(project): create Master Execution Plan & Epic Roadmap (EPIC-001 th…" | kind=Commit | source=git | neighbors=[3efb8ed docs(product): create master Pr…, main, 7699c20 chore(epic-001): initialize wor…]
- "commit:repo:github.com/sathish1812kh-hub/bookingengine@fdb0a7669fdf70b15f01c91af3ccafe203ef67f7": "fdb0a76 feat(graphify): fully integrate official Graphify knowledge graph engin…" | kind=Commit | source=git | neighbors=[b56cdfd feat(scaffolding): Phase 1 mono…, main, ee66e84 docs(gemini): update GEMINI.md …]
- "hotels_page": "page.tsx" | kind=code-symbol | source=apps/admin/app/hotels/page.tsx:L1 | neighbors=[51fd7f6 feat(hotel): implement Hotel & …, HotelItem, HotelsPage()]
- "src_auth_provider_authprovider_rotatesession": ".rotateSession()" | kind=code-symbol | source=packages/auth/src/auth-provider.ts:L29 | neighbors=[AuthProvider, .createSession(), .revokeSession()]
- "src_hotel_resolver_hotelresolver_resolvecontext": ".resolveContext()" | kind=code-symbol | source=packages/auth/src/hotel-resolver.ts:L90 | neighbors=[HotelResolver, .getBusinessDate(), .getById()]
- "src_tenant_resolver_memoryorganizationrepository_getbydomain": ".getByDomain()" | kind=code-symbol | source=packages/auth/src/tenant-resolver.ts:L58 | neighbors=[MemoryOrganizationRepository, .getById(), .resolveContext()]
- "src_tenant_resolver_memoryorganizationrepository_getbyid": ".getById()" | kind=code-symbol | source=packages/auth/src/tenant-resolver.ts:L47 | neighbors=[MemoryOrganizationRepository, .getByDomain(), .resolveContext()]
- "admin_next_config": "next.config.ts" | kind=code-symbol | source=apps/admin/next.config.ts:L1 | neighbors=[nextConfig, b56cdfd feat(scaffolding): Phase 1 mono…]
- "app_layout": "layout.tsx" | kind=code-symbol | source=apps/website/app/layout.tsx:L1 | neighbors=[RootLayout(), b56cdfd feat(scaffolding): Phase 1 mono…]
- "commit:repo:github.com/sathish1812kh-hub/bookingengine@889e7c0536b367eca8b7a592bdf53bcb5aaa3d4a": "889e7c0 Initial commit" | kind=Commit | source=git | neighbors=[main, e5bbd3c docs: add comprehensive master …]
- "login_page": "page.tsx" | kind=code-symbol | source=apps/admin/app/login/page.tsx:L1 | neighbors=[93b95cf feat(auth): complete authentica…, LoginPage()]
- "routes_auth_authrouter": "authRouter" | kind=code-symbol | source=apps/api/src/routes/auth.ts:L9 | neighbors=[auth.ts, index.ts]
- "routes_hotels_hotelrouter": "hotelRouter" | kind=code-symbol | source=apps/api/src/routes/hotels.ts:L6 | neighbors=[hotels.ts, index.ts]
- "schema_organization_organizations": "organizations" | kind=code-symbol | source=packages/db/src/schema/organization.ts:L4 | neighbors=[hotel.ts, organization.ts]
- "src_auth_provider_authprovider_createsession": ".createSession()" | kind=code-symbol | source=packages/auth/src/auth-provider.ts:L7 | neighbors=[AuthProvider, .rotateSession()]
- "src_auth_provider_authprovider_revokesession": ".revokeSession()" | kind=code-symbol | source=packages/auth/src/auth-provider.ts:L25 | neighbors=[AuthProvider, .rotateSession()]
- "src_auth_test": "auth.test.ts" | kind=code-symbol | source=packages/auth/src/auth.test.ts:L1 | neighbors=[d899e94 feat(auth): implement authentic…, index.ts]
- "src_crypto_bytestohex": "bytesToHex()" | kind=code-symbol | source=packages/auth/src/crypto.ts:L35 | neighbors=[crypto.ts, hashPassword()]
- "src_crypto_hextobytes": "hexToBytes()" | kind=code-symbol | source=packages/auth/src/crypto.ts:L41 | neighbors=[crypto.ts, hashPassword()]
- "src_crypto_verifypassword": "verifyPassword()" | kind=code-symbol | source=packages/auth/src/crypto.ts:L30 | neighbors=[crypto.ts, hashPassword()]
- "src_hotel_resolver_hotelrepository": "HotelRepository" | kind=code-symbol | source=packages/auth/src/hotel-resolver.ts:L3 | neighbors=[hotel-resolver.ts, MemoryHotelRepository]
- "src_hotel_resolver_memoryhotelrepository_getbusinessdate": ".getBusinessDate()" | kind=code-symbol | source=packages/auth/src/hotel-resolver.ts:L82 | neighbors=[.resolveContext(), MemoryHotelRepository]
- "src_hotel_resolver_memoryhotelrepository_getbyid": ".getById()" | kind=code-symbol | source=packages/auth/src/hotel-resolver.ts:L46 | neighbors=[.resolveContext(), MemoryHotelRepository]
- "src_hotel_test": "hotel.test.ts" | kind=code-symbol | source=packages/auth/src/hotel.test.ts:L1 | neighbors=[51fd7f6 feat(hotel): implement Hotel & …, index.ts]
- "src_tenant_resolver_memoryorganizationrepository_getfeatures": ".getFeatures()" | kind=code-symbol | source=packages/auth/src/tenant-resolver.ts:L68 | neighbors=[MemoryOrganizationRepository, .resolveContext()]
- "src_tenant_resolver_memoryorganizationrepository_getsettings": ".getSettings()" | kind=code-symbol | source=packages/auth/src/tenant-resolver.ts:L64 | neighbors=[MemoryOrganizationRepository, .resolveContext()]
- "src_tenant_resolver_organizationrepository": "OrganizationRepository" | kind=code-symbol | source=packages/auth/src/tenant-resolver.ts:L3 | neighbors=[tenant-resolver.ts, MemoryOrganizationRepository]
- "src_tenant_test": "tenant.test.ts" | kind=code-symbol | source=packages/auth/src/tenant.test.ts:L1 | neighbors=[67e5e40 feat(tenant): implement Organiz…, index.ts]
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
