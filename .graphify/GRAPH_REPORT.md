# Graph Report - .  (2026-07-23)

## Corpus Check
- 85 files · ~58,596 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 166 nodes · 224 edges · 12 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output
- Edge kinds: contains: 91 · MODIFIES: 36 · method: 30 · imports_from: 16 · ON_BRANCH: 16 · PARENT_OF: 15 · calls: 12 · implements: 4 · imports: 4


## Input Scope
- Requested: auto
- Resolved: committed (source: default-auto)
- Included files: 85 · Candidates: 181
- Excluded: 6 untracked · 280230 ignored · 0 sensitive · 0 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.

## Graph Freshness
- Built from Git commit: `51fd7f6`
- Compare this hash to `git rev-parse HEAD` before trusting freshness-sensitive graph output.
## God Nodes (most connected - your core abstractions)
1. `MemoryHotelRepository` - 8 edges
2. `MemoryOrganizationRepository` - 8 edges
3. `AuthProvider` - 6 edges
4. `KVSessionStore` - 6 edges
5. `MemorySessionStore` - 5 edges
6. `hashPassword()` - 4 edges
7. `HotelResolver` - 4 edges
8. `SessionStore` - 4 edges
9. `TenantResolver` - 4 edges
10. `authRouter` - 2 edges

## Surprising Connections (you probably didn't know these)
- `51fd7f6 feat(hotel): implement Hotel & Multi-Property Management (STORY-003)` --ON_BRANCH--> `main`  [EXTRACTED]
  git → git  _Bridges community 7 → community 2_
- `57ba611 docs: add architecture review report, ADR package (12 ADRs), and implementation backlog` --PARENT_OF--> `b56cdfd feat(scaffolding): Phase 1 monorepo foundation, apps, packages, and governance guides`  [EXTRACTED]
  git → git  _Bridges community 2 → community 4_
- `67e5e40 feat(tenant): implement Organization & Multi-Tenant Foundation (STORY-002)` --ON_BRANCH--> `main`  [EXTRACTED]
  git → git  _Bridges community 1 → community 2_
- `67e5e40 feat(tenant): implement Organization & Multi-Tenant Foundation (STORY-002)` --PARENT_OF--> `51fd7f6 feat(hotel): implement Hotel & Multi-Property Management (STORY-003)`  [EXTRACTED]
  git → git  _Bridges community 1 → community 7_
- `93b95cf feat(auth): complete authentication foundation with login UI and middleware (STORY-001)` --ON_BRANCH--> `main`  [EXTRACTED]
  git → git  _Bridges community 8 → community 2_

## Communities

### Community 0 - "Community 0"
Cohesion: 0.05
Nodes (31): authRouter, globalMemoryStore, hotelRepo, hotelRouter, app, AuthResult, AuthUser, AuthUserContext (+23 more)

### Community 1 - "Community 1"
Cohesion: 0.12
Nodes (16): 67e5e40 feat(tenant): implement Organization & Multi-Tenant Foundation (STORY-002), hotelAddresses, hotelBusinessDates, hotelContacts, hotels, hotelSettings, hotelsRelations, organizations (+8 more)

### Community 2 - "Community 2"
Cohesion: 0.18
Nodes (14): main, 3efb8ed docs(product): create master Product Blueprint specification and freeze architecture, 5373706 chore: initialize monorepo workspace, 57ba611 docs: add architecture review report, ADR package (12 ADRs), and implementation backlog, 7699c20 chore(epic-001): initialize workspace foundation, 8264a67 docs(ux): add comprehensive UX & Access Control Architecture package (12 specification documents), 889e7c0 Initial commit, e5bbd3c docs: add comprehensive master architecture specification (+6 more)

### Community 3 - "Community 3"
Cohesion: 0.17
Nodes (5): d899e94 feat(auth): implement authentication and session KV engine (STORY-001), KVNamespaceLike, KVSessionStore, MemorySessionStore, SessionStore

### Community 4 - "Community 4"
Cohesion: 0.15
Nodes (3): nextConfig, b56cdfd feat(scaffolding): Phase 1 monorepo foundation, apps, packages, and governance guides, nextConfig

### Community 5 - "Community 5"
Cohesion: 0.19
Nodes (3): HotelRepository, HotelResolver, MemoryHotelRepository

### Community 6 - "Community 6"
Cohesion: 0.23
Nodes (3): MemoryOrganizationRepository, OrganizationRepository, TenantResolver

### Community 7 - "Community 7"
Cohesion: 0.18
Nodes (5): 51fd7f6 feat(hotel): implement Hotel & Multi-Property Management (STORY-003), HotelItem, HotelContextVariables, hotelRepo, hotelResolver

### Community 8 - "Community 8"
Cohesion: 0.29
Nodes (3): 93b95cf feat(auth): complete authentication foundation with login UI and middleware (STORY-001), AuthContextVariables, memoryStore

### Community 9 - "Community 9"
Cohesion: 0.47
Nodes (1): AuthProvider

### Community 10 - "Community 10"
Cohesion: 0.40
Nodes (3): orgRepo, TenantContextVariables, tenantResolver

### Community 11 - "Community 11"
Cohesion: 0.70
Nodes (4): bytesToHex(), hashPassword(), hexToBytes(), verifyPassword()

## Knowledge Gaps
- **57 isolated node(s):** `HotelItem`, `nextConfig`, `Env`, `app`, `memoryStore` (+52 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 9`** (1 nodes): `AuthProvider`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `AuthProvider` connect `Community 9` to `Community 3`?**
  _High betweenness centrality (0.060) - this node is a cross-community bridge._
- **What connects `HotelItem`, `nextConfig`, `Env` to the rest of the system?**
  _57 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.05121951219512195 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.11578947368421053 - nodes in this community are weakly interconnected._