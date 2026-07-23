# Graph Report - .  (2026-07-23)

## Corpus Check
- Corpus is ~48,895 words - fits in a single context window. You may not need a graph.

## Summary
- 43 nodes · 52 edges · 7 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output
- Edge kinds: contains: 23 · MODIFIES: 12 · ON_BRANCH: 8 · PARENT_OF: 7 · imports_from: 2


## Input Scope
- Requested: auto
- Resolved: committed (source: default-auto)
- Included files: 63 · Candidates: 134
- Excluded: 2 untracked · 267616 ignored · 0 sensitive · 0 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.

## Graph Freshness
- Built from Git commit: `8264a67`
- Compare this hash to `git rev-parse HEAD` before trusting freshness-sensitive graph output.
## God Nodes (most connected - your core abstractions)
1. `nextConfig` - 1 edges
2. `Env` - 1 edges
3. `app` - 1 edges
4. `nextConfig` - 1 edges
5. `AuthUserContext` - 1 edges
6. `organizations` - 1 edges
7. `StayflexiClientConfig` - 1 edges
8. `TTLockClientConfig` - 1 edges
9. `EnvSchema` - 1 edges
10. `EnvConfig` - 1 edges

## Surprising Connections (you probably didn't know these)
- `57ba611 docs: add architecture review report, ADR package (12 ADRs), and implementation backlog` --PARENT_OF--> `b56cdfd feat(scaffolding): Phase 1 monorepo foundation, apps, packages, and governance guides`  [EXTRACTED]
  git → git  _Bridges community 1 → community 2_

## Communities

### Community 0 - "Community 0"
Cohesion: 0.13
Nodes (10): app, AuthUserContext, BaseEntity, Env, Environment, HealthCheckResponse, HealthCheckResponseSchema, StayflexiClientConfig (+2 more)

### Community 1 - "Community 1"
Cohesion: 0.36
Nodes (8): main, 5373706 chore: initialize monorepo workspace, 57ba611 docs: add architecture review report, ADR package (12 ADRs), and implementation backlog, 8264a67 docs(ux): add comprehensive UX & Access Control Architecture package (12 specification documents), 889e7c0 Initial commit, e5bbd3c docs: add comprehensive master architecture specification, ee66e84 docs(gemini): update GEMINI.md with active MCP inventory, ponytail ultra mandate, and Graphify sync, fdb0a76 feat(graphify): fully integrate official Graphify knowledge graph engine with Git hooks, scripts, GEMINI.md, and CI pipeline

### Community 2 - "Community 2"
Cohesion: 0.50
Nodes (1): b56cdfd feat(scaffolding): Phase 1 monorepo foundation, apps, packages, and governance guides

### Community 3 - "Community 3"
Cohesion: 0.50
Nodes (2): EnvConfig, EnvSchema

### Community 5 - "Community 5"
Cohesion: 1.00
Nodes (1): nextConfig

### Community 7 - "Community 7"
Cohesion: 1.00
Nodes (1): organizations

### Community 8 - "Community 8"
Cohesion: 1.00
Nodes (1): nextConfig

## Knowledge Gaps
- **15 isolated node(s):** `nextConfig`, `Env`, `app`, `nextConfig`, `AuthUserContext` (+10 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 2`** (1 nodes): `b56cdfd feat(scaffolding): Phase 1 monorepo foundation, apps, packages, and governance guides`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 3`** (2 nodes): `EnvConfig`, `EnvSchema`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 5`** (1 nodes): `nextConfig`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 7`** (1 nodes): `organizations`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 8`** (1 nodes): `nextConfig`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `nextConfig`, `Env`, `app` to the rest of the system?**
  _15 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._