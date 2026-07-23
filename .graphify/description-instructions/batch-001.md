# Node Description Batch 2 of 6

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
LANGUAGE: each entry has a `lang=` marker giving the language of its source.
Write that entry's description in EXACTLY that language. Do not translate to
a single common language — match each node's source language individually.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "commit:repo:github.com/sathish1812kh-hub/bookingengine@3efb8ed7bacdd3f596ff99de282eb4a13c2a339f": "3efb8ed docs(product): create master Product Blueprint specification and freeze…" | kind=Commit | source=git | neighbors=[main, f4675ed docs(project): create Master Ex…, 8264a67 docs(ux): add comprehensive UX …] | lang=en
- "commit:repo:github.com/sathish1812kh-hub/bookingengine@57ba61152821d212b486b3fd3b3c448b2635e402": "57ba611 docs: add architecture review report, ADR package (12 ADRs), and implem…" | kind=Commit | source=git | neighbors=[main, b56cdfd feat(scaffolding): Phase 1 mono…, e5bbd3c docs: add comprehensive master …] | lang=en
- "commit:repo:github.com/sathish1812kh-hub/bookingengine@7699c207af4889fe33bc77f912dfc6ed8e20debd": "7699c20 chore(epic-001): initialize workspace foundation" | kind=Commit | source=git | neighbors=[main, e9fba19 chore(epic-001): workspace foun…, f4675ed docs(project): create Master Ex…] | lang=en
- "commit:repo:github.com/sathish1812kh-hub/bookingengine@8264a679ed9fe114ae4b9e377ff6a3019212c08d": "8264a67 docs(ux): add comprehensive UX & Access Control Architecture package (1…" | kind=Commit | source=git | neighbors=[5373706 chore: initialize monorepo work…, main, 3efb8ed docs(product): create master Pr…] | lang=pt
- "commit:repo:github.com/sathish1812kh-hub/bookingengine@e5bbd3c896fd9a430099e5d74ae1423fa726a7d7": "e5bbd3c docs: add comprehensive master architecture specification" | kind=Commit | source=git | neighbors=[889e7c0 Initial commit, main, 57ba611 docs: add architecture review r…] | lang=en
- "commit:repo:github.com/sathish1812kh-hub/bookingengine@ee66e84884a974a9caff164350acca210a30c9bc": "ee66e84 docs(gemini): update GEMINI.md with active MCP inventory, ponytail ultr…" | kind=Commit | source=git | neighbors=[main, 5373706 chore: initialize monorepo work…, fdb0a76 feat(graphify): fully integrate…] | lang=en
- "commit:repo:github.com/sathish1812kh-hub/bookingengine@f4675eddf9ce7473b4fa73f2a5ff6f660e1308aa": "f4675ed docs(project): create Master Execution Plan & Epic Roadmap (EPIC-001 th…" | kind=Commit | source=git | neighbors=[3efb8ed docs(product): create master Pr…, main, 7699c20 chore(epic-001): initialize wor…] | lang=en
- "commit:repo:github.com/sathish1812kh-hub/bookingengine@fdb0a7669fdf70b15f01c91af3ccafe203ef67f7": "fdb0a76 feat(graphify): fully integrate official Graphify knowledge graph engin…" | kind=Commit | source=git | neighbors=[b56cdfd feat(scaffolding): Phase 1 mono…, main, ee66e84 docs(gemini): update GEMINI.md …] | lang=en
- "hotels_page": "page.tsx" | kind=code-symbol | source=apps/admin/app/hotels/page.tsx:L1 | neighbors=[51fd7f6 feat(hotel): implement Hotel & …, HotelItem, HotelsPage()] | lang=en
- "schema_organization_organizations": "organizations" | kind=code-symbol | source=packages/db/src/schema/organization.ts:L4 | neighbors=[hotel.ts, organization.ts, user.ts] | lang=en
- "src_auth_provider_authprovider_rotatesession": ".rotateSession()" | kind=code-symbol | source=packages/auth/src/auth-provider.ts:L29 | neighbors=[AuthProvider, .createSession(), .revokeSession()] | lang=en
- "src_hotel_resolver_hotelresolver_resolvecontext": ".resolveContext()" | kind=code-symbol | source=packages/auth/src/hotel-resolver.ts:L90 | neighbors=[HotelResolver, .getBusinessDate(), .getById()] | lang=en
- "src_identity_service_identityservice_lockaccountafterfailedattempts": ".lockAccountAfterFailedAttempts()" | kind=code-symbol | source=packages/auth/src/identity-service.ts:L130 | neighbors=[IdentityService, .lockAccount(), .update()] | lang=en
- "src_identity_service_memoryuserrepository_update": ".update()" | kind=code-symbol | source=packages/auth/src/identity-service.ts:L93 | neighbors=[.changePassword(), .lockAccountAfterFailedAttempts(), MemoryUserRepository] | lang=en
- "src_tenant_resolver_memoryorganizationrepository_getbydomain": ".getByDomain()" | kind=code-symbol | source=packages/auth/src/tenant-resolver.ts:L58 | neighbors=[MemoryOrganizationRepository, .getById(), .resolveContext()] | lang=en
- "src_tenant_resolver_memoryorganizationrepository_getbyid": ".getById()" | kind=code-symbol | source=packages/auth/src/tenant-resolver.ts:L47 | neighbors=[MemoryOrganizationRepository, .getByDomain(), .resolveContext()] | lang=en
- "users_page": "page.tsx" | kind=code-symbol | source=apps/admin/app/users/page.tsx:L1 | neighbors=[9f7d461 feat(identity): implement Ident…, UserItem, UsersPage()] | lang=en
- "admin_next_config": "next.config.ts" | kind=code-symbol | source=apps/admin/next.config.ts:L1 | neighbors=[nextConfig, b56cdfd feat(scaffolding): Phase 1 mono…] | lang=en
- "app_layout": "layout.tsx" | kind=code-symbol | source=apps/website/app/layout.tsx:L1 | neighbors=[RootLayout(), b56cdfd feat(scaffolding): Phase 1 mono…] | lang=en
- "commit:repo:github.com/sathish1812kh-hub/bookingengine@889e7c0536b367eca8b7a592bdf53bcb5aaa3d4a": "889e7c0 Initial commit" | kind=Commit | source=git | neighbors=[main, e5bbd3c docs: add comprehensive master …] | lang=en
- "login_page": "page.tsx" | kind=code-symbol | source=apps/admin/app/login/page.tsx:L1 | neighbors=[93b95cf feat(auth): complete authentica…, LoginPage()] | lang=en
- "routes_auth_authrouter": "authRouter" | kind=code-symbol | source=apps/api/src/routes/auth.ts:L9 | neighbors=[auth.ts, index.ts] | lang=en
- "routes_hotels_hotelrouter": "hotelRouter" | kind=code-symbol | source=apps/api/src/routes/hotels.ts:L6 | neighbors=[hotels.ts, index.ts] | lang=en
- "routes_users_userrouter": "userRouter" | kind=code-symbol | source=apps/api/src/routes/users.ts:L7 | neighbors=[users.ts, index.ts] | lang=en
- "src_auth_provider_authprovider_createsession": ".createSession()" | kind=code-symbol | source=packages/auth/src/auth-provider.ts:L7 | neighbors=[AuthProvider, .rotateSession()] | lang=en
- "src_auth_provider_authprovider_revokesession": ".revokeSession()" | kind=code-symbol | source=packages/auth/src/auth-provider.ts:L25 | neighbors=[AuthProvider, .rotateSession()] | lang=en
- "src_auth_test": "auth.test.ts" | kind=code-symbol | source=packages/auth/src/auth.test.ts:L1 | neighbors=[d899e94 feat(auth): implement authentic…, index.ts] | lang=en
- "src_crypto_bytestohex": "bytesToHex()" | kind=code-symbol | source=packages/auth/src/crypto.ts:L35 | neighbors=[crypto.ts, hashPassword()] | lang=en
- "src_crypto_hextobytes": "hexToBytes()" | kind=code-symbol | source=packages/auth/src/crypto.ts:L41 | neighbors=[crypto.ts, hashPassword()] | lang=en
- "src_crypto_verifypassword": "verifyPassword()" | kind=code-symbol | source=packages/auth/src/crypto.ts:L30 | neighbors=[crypto.ts, hashPassword()] | lang=en
- "src_hotel_resolver_hotelrepository": "HotelRepository" | kind=code-symbol | source=packages/auth/src/hotel-resolver.ts:L3 | neighbors=[hotel-resolver.ts, MemoryHotelRepository] | lang=en
- "src_hotel_resolver_memoryhotelrepository_getbusinessdate": ".getBusinessDate()" | kind=code-symbol | source=packages/auth/src/hotel-resolver.ts:L82 | neighbors=[.resolveContext(), MemoryHotelRepository] | lang=en
- "src_hotel_resolver_memoryhotelrepository_getbyid": ".getById()" | kind=code-symbol | source=packages/auth/src/hotel-resolver.ts:L46 | neighbors=[.resolveContext(), MemoryHotelRepository] | lang=en
- "src_hotel_test": "hotel.test.ts" | kind=code-symbol | source=packages/auth/src/hotel.test.ts:L1 | neighbors=[51fd7f6 feat(hotel): implement Hotel & …, index.ts] | lang=en
- "src_identity_service_identityservice_changepassword": ".changePassword()" | kind=code-symbol | source=packages/auth/src/identity-service.ts:L142 | neighbors=[IdentityService, .update()] | lang=en
- "src_identity_service_identityservice_finduserbyemail": ".findUserByEmail()" | kind=code-symbol | source=packages/auth/src/identity-service.ts:L126 | neighbors=[IdentityService, .getByEmail()] | lang=en
- "src_identity_service_identityservice_finduserbyid": ".findUserById()" | kind=code-symbol | source=packages/auth/src/identity-service.ts:L122 | neighbors=[IdentityService, .getById()] | lang=en
- "src_identity_service_memoryuserrepository_getbyemail": ".getByEmail()" | kind=code-symbol | source=packages/auth/src/identity-service.ts:L50 | neighbors=[.findUserByEmail(), MemoryUserRepository] | lang=en
- "src_identity_service_memoryuserrepository_getbyid": ".getById()" | kind=code-symbol | source=packages/auth/src/identity-service.ts:L44 | neighbors=[.findUserById(), MemoryUserRepository] | lang=en
- "src_identity_service_memoryuserrepository_lockaccount": ".lockAccount()" | kind=code-symbol | source=packages/auth/src/identity-service.ts:L110 | neighbors=[.lockAccountAfterFailedAttempts(), MemoryUserRepository] | lang=en

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
