# Graph Report - .  (2026-07-23)

## Corpus Check
- 91 files · ~60,720 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 202 nodes · 278 edges · 12 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output
- Edge kinds: contains: 106 · method: 45 · MODIFIES: 43 · imports_from: 22 · calls: 17 · ON_BRANCH: 17 · PARENT_OF: 16 · imports: 7 · implements: 5


## Input Scope
- Requested: auto
- Resolved: committed (source: default-auto)
- Included files: 91 · Candidates: 197
- Excluded: 6 untracked · 280261 ignored · 0 sensitive · 0 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.

## Graph Freshness
- Built from Git commit: `9f7d461`
- Compare this hash to `git rev-parse HEAD` before trusting freshness-sensitive graph output.
## God Nodes (most connected - your core abstractions)
1. `MemoryUserRepository` - 11 edges
2. `MemoryHotelRepository` - 8 edges
3. `MemoryOrganizationRepository` - 8 edges
4. `IdentityService` - 7 edges
5. `AuthProvider` - 6 edges
6. `KVSessionStore` - 6 edges
7. `hashPassword()` - 5 edges
8. `MemorySessionStore` - 5 edges
9. `HotelResolver` - 4 edges
10. `SessionStore` - 4 edges

## Surprising Connections (you probably didn't know these)
- `51fd7f6 feat(hotel): implement Hotel & Multi-Property Management (STORY-003)` --ON_BRANCH--> `main`  [EXTRACTED]
  git → git  _Bridges community 9 → community 3_
- `51fd7f6 feat(hotel): implement Hotel & Multi-Property Management (STORY-003)` --PARENT_OF--> `9f7d461 feat(identity): implement Identity Foundation & User Management (STORY-004)`  [EXTRACTED]
  git → git  _Bridges community 9 → community 10_
- `57ba611 docs: add architecture review report, ADR package (12 ADRs), and implementation backlog` --PARENT_OF--> `b56cdfd feat(scaffolding): Phase 1 monorepo foundation, apps, packages, and governance guides`  [EXTRACTED]
  git → git  _Bridges community 3 → community 6_
- `67e5e40 feat(tenant): implement Organization & Multi-Tenant Foundation (STORY-002)` --ON_BRANCH--> `main`  [EXTRACTED]
  git → git  _Bridges community 5 → community 3_
- `67e5e40 feat(tenant): implement Organization & Multi-Tenant Foundation (STORY-002)` --PARENT_OF--> `51fd7f6 feat(hotel): implement Hotel & Multi-Property Management (STORY-003)`  [EXTRACTED]
  git → git  _Bridges community 5 → community 9_

## Communities

### Community 0 - "Community 0"
Cohesion: 0.05
Nodes (32): authRouter, globalMemoryStore, hotelRepo, hotelRouter, app, AuthResult, AuthUser, AuthUserContext (+24 more)

### Community 1 - "Community 1"
Cohesion: 0.09
Nodes (21): hotelAddresses, hotelBusinessDates, hotelContacts, hotels, hotelSettings, hotelsRelations, organizations, organizationDomains (+13 more)

### Community 2 - "Community 2"
Cohesion: 0.12
Nodes (7): bytesToHex(), hashPassword(), hexToBytes(), verifyPassword(), IdentityService, MemoryUserRepository, UserRepository

### Community 3 - "Community 3"
Cohesion: 0.18
Nodes (14): main, 3efb8ed docs(product): create master Product Blueprint specification and freeze architecture, 5373706 chore: initialize monorepo workspace, 57ba611 docs: add architecture review report, ADR package (12 ADRs), and implementation backlog, 7699c20 chore(epic-001): initialize workspace foundation, 8264a67 docs(ux): add comprehensive UX & Access Control Architecture package (12 specification documents), 889e7c0 Initial commit, e5bbd3c docs: add comprehensive master architecture specification (+6 more)

### Community 4 - "Community 4"
Cohesion: 0.17
Nodes (5): d899e94 feat(auth): implement authentication and session KV engine (STORY-001), KVNamespaceLike, KVSessionStore, MemorySessionStore, SessionStore

### Community 5 - "Community 5"
Cohesion: 0.14
Nodes (7): 67e5e40 feat(tenant): implement Organization & Multi-Tenant Foundation (STORY-002), 93b95cf feat(auth): complete authentication foundation with login UI and middleware (STORY-001), AuthContextVariables, memoryStore, orgRepo, TenantContextVariables, tenantResolver

### Community 6 - "Community 6"
Cohesion: 0.15
Nodes (3): nextConfig, b56cdfd feat(scaffolding): Phase 1 monorepo foundation, apps, packages, and governance guides, nextConfig

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
Cohesion: 0.22
Nodes (5): 9f7d461 feat(identity): implement Identity Foundation & User Management (STORY-004), identityService, userRepo, userRouter, UserItem

### Community 11 - "Community 11"
Cohesion: 0.47
Nodes (1): AuthProvider

## Knowledge Gaps
- **67 isolated node(s):** `HotelItem`, `UserItem`, `nextConfig`, `Env`, `app` (+62 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 11`** (1 nodes): `AuthProvider`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `HotelItem`, `UserItem`, `nextConfig` to the rest of the system?**
  _67 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.04994192799070848 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.09333333333333334 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.11956521739130435 - nodes in this community are weakly interconnected._
- **Should `Community 5` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._