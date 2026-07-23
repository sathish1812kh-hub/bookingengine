# Community Labeling

Graphify is running in assistant/skill mode (no API key). You are the host
assistant (Claude Code / Codex / Gemini CLI). Read the community listing below
and write 2-5 word plain-language names for each.

## Language

LANGUAGE: each community line ends with a `[lang=…]` marker giving the
language of its source nodes. Write that community's name in EXACTLY that
language. Do not normalize every name to one common language.

## Communities

Community 0: auth.ts, authRouter, getMockHash(, globalMemoryStore, hotels.ts, hotelRepo, hotelRouter, index.ts, ApiEnvelopeSchema(, app, AuthResult, AuthUser [lang=en]
Community 1: hotel.ts, hotelAddresses, hotelBusinessDates, hotelContacts, hotels, hotelSettings, hotelsRelations, index.ts, organizations, organization.ts, organizationDomains, organizationDomainsRelations [lang=en]
Community 2: hashPassword(, IdentityService, MemoryUserRepository, crypto.ts, bytesToHex(, hexToBytes(, verifyPassword(, identity-service.ts, .changePassword(, .constructor(, .findUserByEmail(, .findUserById( [lang=en]
Community 3: main, 3efb8ed docs(product): create master Product Blueprint speci, 5373706 chore: initialize monorepo workspace, 57ba611 docs: add architecture review report, ADR package (1, 7699c20 chore(epic-001): initialize workspace foundation, 8264a67 docs(ux): add comprehensive UX & Access Control Arch, 889e7c0 Initial commit, e5bbd3c docs: add comprehensive master architecture specific, e9fba19 chore(epic-001): workspace foundation, ee66e84 docs(gemini): update GEMINI.md with active MCP inven, f4675ed docs(project): create Master Execution Plan & Epic R, fdb0a76 feat(graphify): fully integrate official Graphify kn [lang=pt]
Community 4: KVSessionStore, MemorySessionStore, SessionStore, d899e94 feat(auth): implement authentication and session KV , auth-provider.ts, auth.test.ts, session-store.ts, KVNamespaceLike, .constructor(, .delete(, .get(, .set( [lang=en]
Community 5: 67e5e40 feat(tenant): implement Organization & Multi-Tenant , 93b95cf feat(auth): complete authentication foundation with , page.tsx, LoginPage(, auth.middleware.ts, AuthContextVariables, memoryStore, requireAuthMiddleware(, tenant.middleware.ts, orgRepo, TenantContextVariables, tenantMiddleware( [lang=en]
Community 6: next.config.ts, nextConfig, next-env.d.ts, layout.tsx, RootLayout(, page.tsx, AdminDashboardPage(, GuestStorefrontPage(, b56cdfd feat(scaffolding): Phase 1 monorepo foundation, apps, drizzle.config.ts [lang=en]
Community 7: HotelResolver, MemoryHotelRepository, hotel-resolver.ts, HotelRepository, .constructor(, .resolveContext(, .validateCrossHotelAccess(, .create(, .getBusinessDate(, .getById(, .getByOrganization(, .update( [lang=en]
Community 8: MemoryOrganizationRepository, tenant-resolver.ts, .constructor(, .getByDomain(, .getById(, .getBySlug(, .getFeatures(, .getSettings(, OrganizationRepository, TenantResolver, .resolveContext(, .validateCrossTenantAccess( [lang=en]
Community 9: 51fd7f6 feat(hotel): implement Hotel & Multi-Property Manage, page.tsx, HotelItem, HotelsPage(, hotel.middleware.ts, HotelContextVariables, hotelRepo, hotelResolver, requireHotelContext(, resolveHotelContext(, hotel.test.ts [lang=en]
Community 10: 9f7d461 feat(identity): implement Identity Foundation & User, users.ts, identityService, userRepo, userRouter, user.test.ts, page.tsx, UserItem, UsersPage( [lang=en]
Community 11: AuthProvider, .constructor(, .createSession(, .revokeSession(, .rotateSession(, .validateSession( [lang=en]

## Instructions

Write a single JSON object mapping each community id (as a string) to its
2-5 word name to: C:\bookingengine\.graphify\label-instructions\communities.json

Example:
```json
{
  "0": "Authentication Flow",
  "1": "Authentication Flow",
  "2": "Authentication Flow"
}
```

Then re-run `graphify update` (or `graphify label`) to ingest the names.
