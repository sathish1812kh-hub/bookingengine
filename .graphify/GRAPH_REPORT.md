# Graph Report - .  (2026-07-23)

## Corpus Check
- 78 files · ~56,352 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 129 nodes · 174 edges · 11 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output
- Edge kinds: contains: 70 · MODIFIES: 28 · method: 21 · ON_BRANCH: 15 · PARENT_OF: 14 · imports_from: 11 · calls: 10 · implements: 3 · imports: 2


## Input Scope
- Requested: auto
- Resolved: committed (source: default-auto)
- Included files: 78 · Candidates: 166
- Excluded: 7 untracked · 280181 ignored · 0 sensitive · 0 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.

## Graph Freshness
- Built from Git commit: `67e5e40`
- Compare this hash to `git rev-parse HEAD` before trusting freshness-sensitive graph output.
## God Nodes (most connected - your core abstractions)
1. `MemoryOrganizationRepository` - 8 edges
2. `AuthProvider` - 6 edges
3. `KVSessionStore` - 6 edges
4. `MemorySessionStore` - 5 edges
5. `hashPassword()` - 4 edges
6. `SessionStore` - 4 edges
7. `TenantResolver` - 4 edges
8. `authRouter` - 2 edges
9. `verifyPassword()` - 2 edges
10. `bytesToHex()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `57ba611 docs: add architecture review report, ADR package (12 ADRs), and implementation backlog` --PARENT_OF--> `b56cdfd feat(scaffolding): Phase 1 monorepo foundation, apps, packages, and governance guides`  [EXTRACTED]
  git → git  _Bridges community 4 → community 3_
- `67e5e40 feat(tenant): implement Organization & Multi-Tenant Foundation (STORY-002)` --ON_BRANCH--> `main`  [EXTRACTED]
  git → git  _Bridges community 1 → community 4_
- `93b95cf feat(auth): complete authentication foundation with login UI and middleware (STORY-001)` --ON_BRANCH--> `main`  [EXTRACTED]
  git → git  _Bridges community 6 → community 4_
- `93b95cf feat(auth): complete authentication foundation with login UI and middleware (STORY-001)` --PARENT_OF--> `67e5e40 feat(tenant): implement Organization & Multi-Tenant Foundation (STORY-002)`  [EXTRACTED]
  git → git  _Bridges community 6 → community 1_
- `d899e94 feat(auth): implement authentication and session KV engine (STORY-001)` --ON_BRANCH--> `main`  [EXTRACTED]
  git → git  _Bridges community 2 → community 4_

## Communities

### Community 0 - "Community 0"
Cohesion: 0.06
Nodes (24): app, AuthResult, AuthUser, AuthUserContext, BaseEntity, Env, Environment, HealthCheckResponse (+16 more)

### Community 1 - "Community 1"
Cohesion: 0.12
Nodes (13): 67e5e40 feat(tenant): implement Organization & Multi-Tenant Foundation (STORY-002), orgRepo, TenantContextVariables, tenantResolver, organizations, organizationDomains, organizationDomainsRelations, organizationFeatures (+5 more)

### Community 2 - "Community 2"
Cohesion: 0.17
Nodes (5): d899e94 feat(auth): implement authentication and session KV engine (STORY-001), KVNamespaceLike, KVSessionStore, MemorySessionStore, SessionStore

### Community 3 - "Community 3"
Cohesion: 0.15
Nodes (3): nextConfig, b56cdfd feat(scaffolding): Phase 1 monorepo foundation, apps, packages, and governance guides, nextConfig

### Community 4 - "Community 4"
Cohesion: 0.27
Nodes (12): main, 3efb8ed docs(product): create master Product Blueprint specification and freeze architecture, 5373706 chore: initialize monorepo workspace, 57ba611 docs: add architecture review report, ADR package (12 ADRs), and implementation backlog, 7699c20 chore(epic-001): initialize workspace foundation, 8264a67 docs(ux): add comprehensive UX & Access Control Architecture package (12 specification documents), 889e7c0 Initial commit, e5bbd3c docs: add comprehensive master architecture specification (+4 more)

### Community 5 - "Community 5"
Cohesion: 0.23
Nodes (3): MemoryOrganizationRepository, OrganizationRepository, TenantResolver

### Community 6 - "Community 6"
Cohesion: 0.29
Nodes (3): 93b95cf feat(auth): complete authentication foundation with login UI and middleware (STORY-001), AuthContextVariables, memoryStore

### Community 7 - "Community 7"
Cohesion: 0.47
Nodes (1): AuthProvider

### Community 8 - "Community 8"
Cohesion: 0.70
Nodes (4): bytesToHex(), hashPassword(), hexToBytes(), verifyPassword()

### Community 9 - "Community 9"
Cohesion: 0.50
Nodes (2): authRouter, globalMemoryStore

### Community 10 - "Community 10"
Cohesion: 0.50
Nodes (2): EnvConfig, EnvSchema

## Knowledge Gaps
- **44 isolated node(s):** `nextConfig`, `Env`, `app`, `memoryStore`, `AuthContextVariables` (+39 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 7`** (1 nodes): `AuthProvider`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 9`** (2 nodes): `authRouter`, `globalMemoryStore`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 10`** (2 nodes): `EnvConfig`, `EnvSchema`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `AuthProvider` connect `Community 7` to `Community 2`?**
  _High betweenness centrality (0.077) - this node is a cross-community bridge._
- **What connects `nextConfig`, `Env`, `app` to the rest of the system?**
  _44 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.06451612903225806 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._