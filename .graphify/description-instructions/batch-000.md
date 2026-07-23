# Node Description Batch 1 of 6

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

- "src_index": "index.ts" | kind=code-symbol | source=packages/utils/src/index.ts:L1 | neighbors=[51fd7f6 feat(hotel): implement Hotel & …, 5373706 chore: initialize monorepo work…, 67e5e40 feat(tenant): implement Organiz…, 93b95cf feat(auth): complete authentica…, 9f7d461 feat(identity): implement Ident…, b56cdfd feat(scaffolding): Phase 1 mono…]
- "branch:repo:github.com/sathish1812kh-hub/bookingengine#main": "main" | kind=Branch | source=git | neighbors=[3efb8ed docs(product): create master Pr…, 51fd7f6 feat(hotel): implement Hotel & …, 5373706 chore: initialize monorepo work…, 57ba611 docs: add architecture review r…, 67e5e40 feat(tenant): implement Organiz…, 7699c20 chore(epic-001): initialize wor…]
- "commit:repo:github.com/sathish1812kh-hub/bookingengine@b56cdfd3d3d08881331f18a6eac3950292e7e74f": "b56cdfd feat(scaffolding): Phase 1 monorepo foundation, apps, packages, and gov…" | kind=Commit | source=git | neighbors=[57ba611 docs: add architecture review r…, next.config.ts, next-env.d.ts, layout.tsx, page.tsx, main]
- "schema_organization": "organization.ts" | kind=code-symbol | source=packages/db/src/schema/organization.ts:L1 | neighbors=[67e5e40 feat(tenant): implement Organiz…, hotel.ts, index.ts, organizationDomains, organizationDomainsRelations, organizationFeatures]
- "commit:repo:github.com/sathish1812kh-hub/bookingengine@51fd7f62180f685eeb879ad231265debb6bd02ba": "51fd7f6 feat(hotel): implement Hotel & Multi-Property Management (STORY-003)" | kind=Commit | source=git | neighbors=[main, 9f7d461 feat(identity): implement Ident…, page.tsx, hotel.middleware.ts, hotels.ts, hotel.ts]
- "src_identity_service_memoryuserrepository": "MemoryUserRepository" | kind=code-symbol | source=packages/auth/src/identity-service.ts:L15 | neighbors=[identity-service.ts, .constructor(), .create(), .getByEmail(), .getById(), .getByOrganization()]
- "schema_hotel": "hotel.ts" | kind=code-symbol | source=packages/db/src/schema/hotel.ts:L1 | neighbors=[51fd7f6 feat(hotel): implement Hotel & …, hotelAddresses, hotelBusinessDates, hotelContacts, hotels, hotelSettings]
- "schema_user": "user.ts" | kind=code-symbol | source=packages/db/src/schema/user.ts:L1 | neighbors=[9f7d461 feat(identity): implement Ident…, index.ts, organization.ts, organizations, userEmails, userPhones]
- "commit:repo:github.com/sathish1812kh-hub/bookingengine@67e5e4076c22dac24a910d01eea63a5a040262c8": "67e5e40 feat(tenant): implement Organization & Multi-Tenant Foundation (STORY-0…" | kind=Commit | source=git | neighbors=[main, 51fd7f6 feat(hotel): implement Hotel & …, tenant.middleware.ts, index.ts, organization.ts, index.ts]
- "commit:repo:github.com/sathish1812kh-hub/bookingengine@9f7d461dc9770396b545d4800672428e2a33bb84": "9f7d461 feat(identity): implement Identity Foundation & User Management (STORY-…" | kind=Commit | source=git | neighbors=[51fd7f6 feat(hotel): implement Hotel & …, main, users.ts, index.ts, user.ts, identity-service.ts]
- "commit:repo:github.com/sathish1812kh-hub/bookingengine@d899e94c12cffb29aa05ca16751140f9c26c8489": "d899e94 feat(auth): implement authentication and session KV engine (STORY-001)" | kind=Commit | source=git | neighbors=[main, 93b95cf feat(auth): complete authentica…, auth.ts, auth-provider.ts, auth.test.ts, crypto.ts]
- "schema_index": "index.ts" | kind=code-symbol | source=packages/db/src/schema/index.ts:L1 | neighbors=[51fd7f6 feat(hotel): implement Hotel & …, 67e5e40 feat(tenant): implement Organiz…, 9f7d461 feat(identity): implement Ident…, b56cdfd feat(scaffolding): Phase 1 mono…, hotel.ts, organization.ts]
- "src_hotel_resolver_memoryhotelrepository": "MemoryHotelRepository" | kind=code-symbol | source=packages/auth/src/hotel-resolver.ts:L11 | neighbors=[hotel-resolver.ts, HotelRepository, .constructor(), .create(), .getBusinessDate(), .getById()]
- "src_tenant_resolver_memoryorganizationrepository": "MemoryOrganizationRepository" | kind=code-symbol | source=packages/auth/src/tenant-resolver.ts:L11 | neighbors=[tenant-resolver.ts, .constructor(), .getByDomain(), .getById(), .getBySlug(), .getFeatures()]
- "src_crypto": "crypto.ts" | kind=code-symbol | source=packages/auth/src/crypto.ts:L1 | neighbors=[d899e94 feat(auth): implement authentic…, bytesToHex(), hashPassword(), hexToBytes(), verifyPassword(), identity-service.ts]
- "src_identity_service": "identity-service.ts" | kind=code-symbol | source=packages/auth/src/identity-service.ts:L1 | neighbors=[9f7d461 feat(identity): implement Ident…, crypto.ts, hashPassword(), IdentityService, MemoryUserRepository, UserRepository]
- "src_identity_service_identityservice": "IdentityService" | kind=code-symbol | source=packages/auth/src/identity-service.ts:L119 | neighbors=[identity-service.ts, .changePassword(), .constructor(), .findUserByEmail(), .findUserById(), .generatePasswordResetToken()]
- "src_session_store": "session-store.ts" | kind=code-symbol | source=packages/auth/src/session-store.ts:L1 | neighbors=[d899e94 feat(auth): implement authentic…, auth-provider.ts, index.ts, KVNamespaceLike, KVSessionStore, MemorySessionStore]
- "commit:repo:github.com/sathish1812kh-hub/bookingengine@5373706b77f1fc569c764c66538010eaaf335e72": "5373706 chore: initialize monorepo workspace" | kind=Commit | source=git | neighbors=[main, 8264a67 docs(ux): add comprehensive UX …, eslint.config.js, env.ts, index.ts, ee66e84 docs(gemini): update GEMINI.md …]
- "commit:repo:github.com/sathish1812kh-hub/bookingengine@93b95cff5b24f8e7ba71d2834fbe73db2191f961": "93b95cf feat(auth): complete authentication foundation with login UI and middle…" | kind=Commit | source=git | neighbors=[main, 67e5e40 feat(tenant): implement Organiz…, page.tsx, auth.middleware.ts, index.ts, d899e94 feat(auth): implement authentic…]
- "middlewares_hotel_middleware": "hotel.middleware.ts" | kind=code-symbol | source=apps/api/src/middlewares/hotel.middleware.ts:L1 | neighbors=[51fd7f6 feat(hotel): implement Hotel & …, HotelContextVariables, hotelRepo, hotelResolver, requireHotelContext(), resolveHotelContext()]
- "src_auth_provider_authprovider": "AuthProvider" | kind=code-symbol | source=packages/auth/src/auth-provider.ts:L4 | neighbors=[auth-provider.ts, .constructor(), .createSession(), .revokeSession(), .rotateSession(), .validateSession()]
- "src_session_store_kvsessionstore": "KVSessionStore" | kind=code-symbol | source=packages/auth/src/session-store.ts:L40 | neighbors=[session-store.ts, .constructor(), .delete(), .get(), .set(), SessionStore]
- "middlewares_tenant_middleware": "tenant.middleware.ts" | kind=code-symbol | source=apps/api/src/middlewares/tenant.middleware.ts:L1 | neighbors=[67e5e40 feat(tenant): implement Organiz…, orgRepo, TenantContextVariables, tenantMiddleware(), tenantResolver]
- "routes_auth": "auth.ts" | kind=code-symbol | source=apps/api/src/routes/auth.ts:L1 | neighbors=[d899e94 feat(auth): implement authentic…, authRouter, getMockHash(), globalMemoryStore, index.ts]
- "routes_users": "users.ts" | kind=code-symbol | source=apps/api/src/routes/users.ts:L1 | neighbors=[9f7d461 feat(identity): implement Ident…, identityService, userRepo, userRouter, index.ts]
- "src_auth_provider": "auth-provider.ts" | kind=code-symbol | source=packages/auth/src/auth-provider.ts:L1 | neighbors=[d899e94 feat(auth): implement authentic…, AuthProvider, session-store.ts, SessionStore, index.ts]
- "src_crypto_hashpassword": "hashPassword()" | kind=code-symbol | source=packages/auth/src/crypto.ts:L5 | neighbors=[crypto.ts, bytesToHex(), hexToBytes(), verifyPassword(), identity-service.ts]
- "src_env": "env.ts" | kind=code-symbol | source=packages/shared/src/env.ts:L1 | neighbors=[5373706 chore: initialize monorepo work…, EnvConfig, EnvSchema, loadEnv(), index.ts]
- "src_hotel_resolver": "hotel-resolver.ts" | kind=code-symbol | source=packages/auth/src/hotel-resolver.ts:L1 | neighbors=[51fd7f6 feat(hotel): implement Hotel & …, HotelRepository, HotelResolver, MemoryHotelRepository, index.ts]
- "src_session_store_memorysessionstore": "MemorySessionStore" | kind=code-symbol | source=packages/auth/src/session-store.ts:L9 | neighbors=[session-store.ts, .delete(), .get(), .set(), SessionStore]
- "src_tenant_resolver": "tenant-resolver.ts" | kind=code-symbol | source=packages/auth/src/tenant-resolver.ts:L1 | neighbors=[67e5e40 feat(tenant): implement Organiz…, index.ts, MemoryOrganizationRepository, OrganizationRepository, TenantResolver]
- "src_tenant_resolver_tenantresolver_resolvecontext": ".resolveContext()" | kind=code-symbol | source=packages/auth/src/tenant-resolver.ts:L76 | neighbors=[TenantResolver, .getByDomain(), .getById(), .getFeatures(), .getSettings()]
- "commit:repo:github.com/sathish1812kh-hub/bookingengine@e9fba19c69dec0cae4930f416800987985771c35": "e9fba19 chore(epic-001): workspace foundation" | kind=Commit | source=git | neighbors=[7699c20 chore(epic-001): initialize wor…, main, d899e94 feat(auth): implement authentic…, index.ts]
- "middlewares_auth_middleware": "auth.middleware.ts" | kind=code-symbol | source=apps/api/src/middlewares/auth.middleware.ts:L1 | neighbors=[93b95cf feat(auth): complete authentica…, AuthContextVariables, memoryStore, requireAuthMiddleware()]
- "routes_hotels": "hotels.ts" | kind=code-symbol | source=apps/api/src/routes/hotels.ts:L1 | neighbors=[51fd7f6 feat(hotel): implement Hotel & …, hotelRepo, hotelRouter, index.ts]
- "src_hotel_resolver_hotelresolver": "HotelResolver" | kind=code-symbol | source=packages/auth/src/hotel-resolver.ts:L87 | neighbors=[hotel-resolver.ts, .constructor(), .resolveContext(), .validateCrossHotelAccess()]
- "src_session_store_sessionstore": "SessionStore" | kind=code-symbol | source=packages/auth/src/session-store.ts:L3 | neighbors=[auth-provider.ts, session-store.ts, KVSessionStore, MemorySessionStore]
- "src_tenant_resolver_tenantresolver": "TenantResolver" | kind=code-symbol | source=packages/auth/src/tenant-resolver.ts:L73 | neighbors=[tenant-resolver.ts, .constructor(), .resolveContext(), .validateCrossTenantAccess()]
- "app_page": "page.tsx" | kind=code-symbol | source=apps/website/app/page.tsx:L1 | neighbors=[AdminDashboardPage(), GuestStorefrontPage(), b56cdfd feat(scaffolding): Phase 1 mono…]

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
