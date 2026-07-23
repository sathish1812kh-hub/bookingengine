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

- "src_auth_provider_authprovider_revokesession": ".revokeSession()" | kind=code-symbol | source=packages/auth/src/auth-provider.ts:L25 | neighbors=[AuthProvider, .rotateSession()]
- "src_auth_test": "auth.test.ts" | kind=code-symbol | source=packages/auth/src/auth.test.ts:L1 | neighbors=[d899e94 feat(auth): implement authentic…, index.ts]
- "src_crypto_bytestohex": "bytesToHex()" | kind=code-symbol | source=packages/auth/src/crypto.ts:L35 | neighbors=[crypto.ts, hashPassword()]
- "src_crypto_hextobytes": "hexToBytes()" | kind=code-symbol | source=packages/auth/src/crypto.ts:L41 | neighbors=[crypto.ts, hashPassword()]
- "src_crypto_verifypassword": "verifyPassword()" | kind=code-symbol | source=packages/auth/src/crypto.ts:L30 | neighbors=[crypto.ts, hashPassword()]
- "src_hotel_assignment_service_assignmentrepository": "AssignmentRepository" | kind=code-symbol | source=packages/auth/src/hotel-assignment-service.ts:L3 | neighbors=[hotel-assignment-service.ts, MemoryAssignmentRepository]
- "src_hotel_assignment_service_hotelassignmentservice_getdefaulthotel": ".getDefaultHotel()" | kind=code-symbol | source=packages/auth/src/hotel-assignment-service.ts:L100 | neighbors=[HotelAssignmentService, .getByUser()]
- "src_hotel_assignment_service_hotelassignmentservice_listaccessiblehotels": ".listAccessibleHotels()" | kind=code-symbol | source=packages/auth/src/hotel-assignment-service.ts:L95 | neighbors=[HotelAssignmentService, .getByUser()]
- "src_hotel_assignment_service_hotelassignmentservice_removeuserfromhotel": ".removeUserFromHotel()" | kind=code-symbol | source=packages/auth/src/hotel-assignment-service.ts:L132 | neighbors=[HotelAssignmentService, .remove()]
- "src_hotel_assignment_service_memoryassignmentrepository_getassignment": ".getAssignment()" | kind=code-symbol | source=packages/auth/src/hotel-assignment-service.ts:L41 | neighbors=[MemoryAssignmentRepository, .assign()]
- "src_hotel_assignment_service_memoryassignmentrepository_remove": ".remove()" | kind=code-symbol | source=packages/auth/src/hotel-assignment-service.ts:L72 | neighbors=[.removeUserFromHotel(), MemoryAssignmentRepository]
- "src_hotel_resolver_hotelrepository": "HotelRepository" | kind=code-symbol | source=packages/auth/src/hotel-resolver.ts:L3 | neighbors=[hotel-resolver.ts, MemoryHotelRepository]
- "src_hotel_resolver_memoryhotelrepository_getbusinessdate": ".getBusinessDate()" | kind=code-symbol | source=packages/auth/src/hotel-resolver.ts:L82 | neighbors=[.resolveContext(), MemoryHotelRepository]
- "src_hotel_resolver_memoryhotelrepository_getbyid": ".getById()" | kind=code-symbol | source=packages/auth/src/hotel-resolver.ts:L46 | neighbors=[.resolveContext(), MemoryHotelRepository]
- "src_hotel_test": "hotel.test.ts" | kind=code-symbol | source=packages/auth/src/hotel.test.ts:L1 | neighbors=[51fd7f6 feat(hotel): implement Hotel & …, index.ts]
- "src_identity_service_identityservice_changepassword": ".changePassword()" | kind=code-symbol | source=packages/auth/src/identity-service.ts:L142 | neighbors=[IdentityService, .update()]
- "src_identity_service_identityservice_finduserbyemail": ".findUserByEmail()" | kind=code-symbol | source=packages/auth/src/identity-service.ts:L126 | neighbors=[IdentityService, .getByEmail()]
- "src_identity_service_identityservice_finduserbyid": ".findUserById()" | kind=code-symbol | source=packages/auth/src/identity-service.ts:L122 | neighbors=[IdentityService, .getById()]
- "src_identity_service_memoryuserrepository_getbyemail": ".getByEmail()" | kind=code-symbol | source=packages/auth/src/identity-service.ts:L50 | neighbors=[.findUserByEmail(), MemoryUserRepository]
- "src_identity_service_memoryuserrepository_getbyid": ".getById()" | kind=code-symbol | source=packages/auth/src/identity-service.ts:L44 | neighbors=[.findUserById(), MemoryUserRepository]
- "src_identity_service_memoryuserrepository_lockaccount": ".lockAccount()" | kind=code-symbol | source=packages/auth/src/identity-service.ts:L110 | neighbors=[.lockAccountAfterFailedAttempts(), MemoryUserRepository]
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
