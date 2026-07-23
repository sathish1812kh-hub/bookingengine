# Community Labeling

Graphify is running in assistant/skill mode (no API key). You are the host
assistant (Claude Code / Codex / Gemini CLI). Read the community listing below
and write 2-5 word plain-language names for each.

## Language

Write every name in English (en). Do not switch languages.

## Communities

Community 0: auth.ts, authRouter, getMockHash(, globalMemoryStore, hotels.ts, hotelRepo, hotelRouter, index.ts, ApiEnvelopeSchema(, app, AuthResult, AuthUser
Community 1: next.config.ts, nextConfig, next-env.d.ts, layout.tsx, RootLayout(, page.tsx, AdminDashboardPage(, GuestStorefrontPage(, main, 3efb8ed docs(product): create master Product Blueprint speci, 5373706 chore: initialize monorepo workspace, 57ba611 docs: add architecture review report, ADR package (1
Community 2: assignment.ts, userHotelAssignments, userHotelAssignmentsRelations, hotel.ts, hotelAddresses, hotelBusinessDates, hotelContacts, hotels, hotelSettings, hotelsRelations, index.ts, organizations
Community 3: hashPassword(, IdentityService, MemoryUserRepository, crypto.ts, bytesToHex(, hexToBytes(, verifyPassword(, identity-service.ts, .changePassword(, .constructor(, .findUserByEmail(, .findUserById(
Community 4: HotelAssignmentService, MemoryAssignmentRepository, hotel-assignment-service.ts, AssignmentRepository, .assignUserToHotel(, .constructor(, .getDefaultHotel(, .listAccessibleHotels(, .removeUserFromHotel(, .assign(, .getAssignment(, .getByHotel(
Community 5: KVSessionStore, MemorySessionStore, d899e94 feat(auth): implement authentication and session KV , auth-provider.ts, auth.test.ts, session-store.ts, KVNamespaceLike, .constructor(, .delete(, .get(, .set(, SessionStore
Community 6: 67e5e40 feat(tenant): implement Organization & Multi-Tenant , 93b95cf feat(auth): complete authentication foundation with , page.tsx, LoginPage(, auth.middleware.ts, AuthContextVariables, memoryStore, requireAuthMiddleware(, tenant.middleware.ts, orgRepo, TenantContextVariables, tenantMiddleware(
Community 7: MemoryHotelRepository, hotel-resolver.ts, HotelRepository, HotelResolver, .constructor(, .resolveContext(, .validateCrossHotelAccess(, .create(, .getBusinessDate(, .getById(, .getByOrganization(, .update(
Community 8: MemoryOrganizationRepository, tenant-resolver.ts, .constructor(, .getByDomain(, .getById(, .getBySlug(, .getFeatures(, .getSettings(, OrganizationRepository, TenantResolver, .resolveContext(, .validateCrossTenantAccess(
Community 9: 51fd7f6 feat(hotel): implement Hotel & Multi-Property Manage, page.tsx, HotelItem, HotelsPage(, hotel.middleware.ts, HotelContextVariables, hotelRepo, hotelResolver, requireHotelContext(, resolveHotelContext(, hotel.test.ts
Community 10: ac91018 feat(scope): implement Hotel Assignment & Access Sco, hotel-scope.middleware.ts, HotelScopeVariables, requireAccessibleHotel(, requireCurrentHotel(, assignments.ts, assignmentRepo, assignmentRouter, assignmentService, assignment.test.ts
Community 11: 9f7d461 feat(identity): implement Identity Foundation & User, users.ts, identityService, userRepo, userRouter, user.test.ts, page.tsx, UserItem, UsersPage(
Community 12: AuthProvider, .constructor(, .createSession(, .revokeSession(, .rotateSession(, .validateSession(

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
