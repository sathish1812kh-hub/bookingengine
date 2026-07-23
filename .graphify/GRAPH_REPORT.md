# Graph Report - .  (2026-07-23)

## Corpus Check
- 71 files · ~54,109 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 85 nodes · 116 edges · 8 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output
- Edge kinds: contains: 43 · MODIFIES: 19 · ON_BRANCH: 13 · method: 12 · PARENT_OF: 12 · imports_from: 8 · calls: 5 · implements: 2 · imports: 2


## Input Scope
- Requested: auto
- Resolved: committed (source: default-auto)
- Included files: 71 · Candidates: 148
- Excluded: 3 untracked · 280099 ignored · 0 sensitive · 0 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.

## Graph Freshness
- Built from Git commit: `d899e94`
- Compare this hash to `git rev-parse HEAD` before trusting freshness-sensitive graph output.
## God Nodes (most connected - your core abstractions)
1. `AuthProvider` - 6 edges
2. `KVSessionStore` - 6 edges
3. `MemorySessionStore` - 5 edges
4. `hashPassword()` - 4 edges
5. `SessionStore` - 4 edges
6. `authRouter` - 2 edges
7. `verifyPassword()` - 2 edges
8. `bytesToHex()` - 2 edges
9. `hexToBytes()` - 2 edges
10. `nextConfig` - 1 edges

## Surprising Connections (you probably didn't know these)
- `57ba611 docs: add architecture review report, ADR package (12 ADRs), and implementation backlog` --PARENT_OF--> `b56cdfd feat(scaffolding): Phase 1 monorepo foundation, apps, packages, and governance guides`  [EXTRACTED]
  git → git  _Bridges community 2 → community 1_
- `d899e94 feat(auth): implement authentication and session KV engine (STORY-001)` --ON_BRANCH--> `main`  [EXTRACTED]
  git → git  _Bridges community 4 → community 2_

## Communities

### Community 0 - "Community 0"
Cohesion: 0.09
Nodes (16): app, AuthResult, AuthUser, AuthUserContext, BaseEntity, Env, Environment, HealthCheckResponse (+8 more)

### Community 1 - "Community 1"
Cohesion: 0.13
Nodes (4): nextConfig, b56cdfd feat(scaffolding): Phase 1 monorepo foundation, apps, packages, and governance guides, organizations, nextConfig

### Community 2 - "Community 2"
Cohesion: 0.27
Nodes (12): main, 3efb8ed docs(product): create master Product Blueprint specification and freeze architecture, 5373706 chore: initialize monorepo workspace, 57ba611 docs: add architecture review report, ADR package (12 ADRs), and implementation backlog, 7699c20 chore(epic-001): initialize workspace foundation, 8264a67 docs(ux): add comprehensive UX & Access Control Architecture package (12 specification documents), 889e7c0 Initial commit, e5bbd3c docs: add comprehensive master architecture specification (+4 more)

### Community 3 - "Community 3"
Cohesion: 0.19
Nodes (4): KVNamespaceLike, KVSessionStore, MemorySessionStore, SessionStore

### Community 4 - "Community 4"
Cohesion: 0.33
Nodes (3): d899e94 feat(auth): implement authentication and session KV engine (STORY-001), authRouter, globalMemoryStore

### Community 5 - "Community 5"
Cohesion: 0.47
Nodes (1): AuthProvider

### Community 6 - "Community 6"
Cohesion: 0.70
Nodes (4): bytesToHex(), hashPassword(), hexToBytes(), verifyPassword()

### Community 7 - "Community 7"
Cohesion: 0.50
Nodes (2): EnvConfig, EnvSchema

## Knowledge Gaps
- **23 isolated node(s):** `nextConfig`, `Env`, `app`, `globalMemoryStore`, `nextConfig` (+18 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 5`** (1 nodes): `AuthProvider`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 7`** (2 nodes): `EnvConfig`, `EnvSchema`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `AuthProvider` connect `Community 5` to `Community 3`?**
  _High betweenness centrality (0.115) - this node is a cross-community bridge._
- **What connects `nextConfig`, `Env`, `app` to the rest of the system?**
  _23 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.08695652173913043 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._