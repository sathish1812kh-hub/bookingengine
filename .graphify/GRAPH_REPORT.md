# Graph Report - .  (2026-07-23)

## Corpus Check
- 97 files · ~62,597 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 236 nodes · 334 edges · 13 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output
- Edge kinds: contains: 121 · method: 58 · MODIFIES: 50 · imports_from: 29 · calls: 24 · ON_BRANCH: 18 · PARENT_OF: 17 · imports: 11 · implements: 6


## Input Scope
- Requested: auto
- Resolved: committed (source: default-auto)
- Included files: 97 · Candidates: 212
- Excluded: 8 untracked · 280312 ignored · 0 sensitive · 0 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.

## Graph Freshness
- Built from Git commit: `ac91018`
- Compare this hash to `git rev-parse HEAD` before trusting freshness-sensitive graph output.
## God Nodes (most connected - your core abstractions)
1. `MemoryUserRepository` - 11 edges
2. `MemoryAssignmentRepository` - 10 edges
3. `MemoryHotelRepository` - 8 edges
4. `MemoryOrganizationRepository` - 8 edges
5. `IdentityService` - 7 edges
6. `AuthProvider` - 6 edges
7. `HotelAssignmentService` - 6 edges
8. `KVSessionStore` - 6 edges
9. `hashPassword()` - 5 edges
10. `MemorySessionStore` - 5 edges

## Surprising Connections (you probably didn't know these)
- `51fd7f6 feat(hotel): implement Hotel & Multi-Property Management (STORY-003)` --ON_BRANCH--> `main`  [EXTRACTED]
  git → git  _Bridges community 9 → community 1_
- `51fd7f6 feat(hotel): implement Hotel & Multi-Property Management (STORY-003)` --PARENT_OF--> `9f7d461 feat(identity): implement Identity Foundation & User Management (STORY-004)`  [EXTRACTED]
  git → git  _Bridges community 9 → community 11_
- `67e5e40 feat(tenant): implement Organization & Multi-Tenant Foundation (STORY-002)` --ON_BRANCH--> `main`  [EXTRACTED]
  git → git  _Bridges community 6 → community 1_
- `67e5e40 feat(tenant): implement Organization & Multi-Tenant Foundation (STORY-002)` --PARENT_OF--> `51fd7f6 feat(hotel): implement Hotel & Multi-Property Management (STORY-003)`  [EXTRACTED]
  git → git  _Bridges community 6 → community 9_
- `9f7d461 feat(identity): implement Identity Foundation & User Management (STORY-004)` --ON_BRANCH--> `main`  [EXTRACTED]
  git → git  _Bridges community 11 → community 1_

## Communities

### Community 0 - "Community 0"
Cohesion: 0.05
Nodes (36): authRouter, globalMemoryStore, hotelRepo, hotelRouter, app, AuthResult, AuthUser, AuthUserContext (+28 more)

### Community 1 - "Community 1"
Cohesion: 0.09
Nodes (17): nextConfig, main, 3efb8ed docs(product): create master Product Blueprint specification and freeze architecture, 5373706 chore: initialize monorepo workspace, 57ba611 docs: add architecture review report, ADR package (12 ADRs), and implementation backlog, 7699c20 chore(epic-001): initialize workspace foundation, 8264a67 docs(ux): add comprehensive UX & Access Control Architecture package (12 specification documents), 889e7c0 Initial commit (+9 more)

### Community 2 - "Community 2"
Cohesion: 0.10
Nodes (23): userHotelAssignments, userHotelAssignmentsRelations, hotelAddresses, hotelBusinessDates, hotelContacts, hotels, hotelSettings, hotelsRelations (+15 more)

### Community 3 - "Community 3"
Cohesion: 0.12
Nodes (7): bytesToHex(), hashPassword(), hexToBytes(), verifyPassword(), IdentityService, MemoryUserRepository, UserRepository

### Community 4 - "Community 4"
Cohesion: 0.18
Nodes (3): AssignmentRepository, HotelAssignmentService, MemoryAssignmentRepository

### Community 5 - "Community 5"
Cohesion: 0.17
Nodes (5): d899e94 feat(auth): implement authentication and session KV engine (STORY-001), KVNamespaceLike, KVSessionStore, MemorySessionStore, SessionStore

### Community 6 - "Community 6"
Cohesion: 0.14
Nodes (7): 67e5e40 feat(tenant): implement Organization & Multi-Tenant Foundation (STORY-002), 93b95cf feat(auth): complete authentication foundation with login UI and middleware (STORY-001), AuthContextVariables, memoryStore, orgRepo, TenantContextVariables, tenantResolver

### Community 7 - "Community 7"
Cohesion: 0.19
Nodes (3): HotelRepository, HotelResolver, MemoryHotelRepository

### Community 8 - "Community 8"
Cohesion: 0.23
Nodes (3): MemoryOrganizationRepository, OrganizationRepository, TenantResolver

### Community 9 - "Community 9"
Cohesion: 0.18
Nodes (5): 51fd7f6 feat(hotel): implement Hotel & Multi-Property Management (STORY-003), HotelItem, HotelContextVariables, hotelRepo, hotelResolver

### Community 10 - "Community 10"
Cohesion: 0.20
Nodes (5): ac91018 feat(scope): implement Hotel Assignment & Access Scope (STORY-005), HotelScopeVariables, assignmentRepo, assignmentRouter, assignmentService

### Community 11 - "Community 11"
Cohesion: 0.22
Nodes (5): 9f7d461 feat(identity): implement Identity Foundation & User Management (STORY-004), identityService, userRepo, userRouter, UserItem

### Community 12 - "Community 12"
Cohesion: 0.47
Nodes (1): AuthProvider

## Knowledge Gaps
- **74 isolated node(s):** `HotelItem`, `UserItem`, `nextConfig`, `Env`, `app` (+69 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 12`** (1 nodes): `AuthProvider`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `HotelItem`, `UserItem`, `nextConfig` to the rest of the system?**
  _74 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.04541062801932367 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.09195402298850575 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.09788359788359788 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.11956521739130435 - nodes in this community are weakly interconnected._
- **Should `Community 6` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._