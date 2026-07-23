# Graph Report - .  (2026-07-23)

## Corpus Check
- Corpus is ~17,375 words - fits in a single context window. You may not need a graph.

## Summary
- 32 nodes · 35 edges · 4 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output
- Edge kinds: contains: 18 · MODIFIES: 9 · ON_BRANCH: 4 · PARENT_OF: 3 · imports_from: 1


## Input Scope
- Requested: auto
- Resolved: committed (source: default-auto)
- Included files: 28 · Candidates: 55
- Excluded: 0 untracked · 182223 ignored · 0 sensitive · 0 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.

## Graph Freshness
- Built from Git commit: `b56cdfd`
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
9. `HealthCheckResponseSchema` - 1 edges
10. `HealthCheckResponse` - 1 edges

## Surprising Connections (you probably didn't know these)
- `57ba611 docs: add architecture review report, ADR package (12 ADRs), and implementation backlog` --PARENT_OF--> `b56cdfd feat(scaffolding): Phase 1 monorepo foundation, apps, packages, and governance guides`  [EXTRACTED]
  git → git  _Bridges community 2 → community 1_

## Communities

### Community 0 - "Community 0"
Cohesion: 0.15
Nodes (8): app, AuthUserContext, Env, HealthCheckResponse, HealthCheckResponseSchema, StayflexiClientConfig, SystemStatus, TTLockClientConfig

### Community 1 - "Community 1"
Cohesion: 0.20
Nodes (3): nextConfig, b56cdfd feat(scaffolding): Phase 1 monorepo foundation, apps, packages, and governance guides, nextConfig

### Community 2 - "Community 2"
Cohesion: 0.83
Nodes (4): main, 57ba611 docs: add architecture review report, ADR package (12 ADRs), and implementation backlog, 889e7c0 Initial commit, e5bbd3c docs: add comprehensive master architecture specification

### Community 4 - "Community 4"
Cohesion: 1.00
Nodes (1): organizations

## Knowledge Gaps
- **11 isolated node(s):** `nextConfig`, `Env`, `app`, `nextConfig`, `AuthUserContext` (+6 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 4`** (1 nodes): `organizations`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `nextConfig`, `Env`, `app` to the rest of the system?**
  _11 weakly-connected nodes found - possible documentation gaps or missing edges._