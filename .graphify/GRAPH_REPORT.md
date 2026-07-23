# Graph Report - .  (2026-07-23)

## Corpus Check
- 66 files · ~52,987 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 53 nodes · 67 edges · 7 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output
- Edge kinds: contains: 29 · MODIFIES: 13 · ON_BRANCH: 12 · PARENT_OF: 11 · imports_from: 2


## Input Scope
- Requested: auto
- Resolved: committed (source: default-auto)
- Included files: 66 · Candidates: 139
- Excluded: 6 untracked · 280046 ignored · 0 sensitive · 0 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.

## Graph Freshness
- Built from Git commit: `e9fba19`
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
- `5373706 chore: initialize monorepo workspace` --ON_BRANCH--> `main`  [EXTRACTED]
  git → git  _Bridges community 2 → community 1_
- `57ba611 docs: add architecture review report, ADR package (12 ADRs), and implementation backlog` --PARENT_OF--> `b56cdfd feat(scaffolding): Phase 1 monorepo foundation, apps, packages, and governance guides`  [EXTRACTED]
  git → git  _Bridges community 1 → community 3_
- `b56cdfd feat(scaffolding): Phase 1 monorepo foundation, apps, packages, and governance guides` --PARENT_OF--> `fdb0a76 feat(graphify): fully integrate official Graphify knowledge graph engine with Git hooks, scripts, GEMINI.md, and CI pipeline`  [EXTRACTED]
  git → git  _Bridges community 3 → community 2_

## Communities

### Community 0 - "Community 0"
Cohesion: 0.10
Nodes (14): app, AuthResult, AuthUser, AuthUserContext, BaseEntity, Env, Environment, HealthCheckResponse (+6 more)

### Community 1 - "Community 1"
Cohesion: 0.39
Nodes (9): main, 3efb8ed docs(product): create master Product Blueprint specification and freeze architecture, 57ba611 docs: add architecture review report, ADR package (12 ADRs), and implementation backlog, 7699c20 chore(epic-001): initialize workspace foundation, 8264a67 docs(ux): add comprehensive UX & Access Control Architecture package (12 specification documents), 889e7c0 Initial commit, e5bbd3c docs: add comprehensive master architecture specification, e9fba19 chore(epic-001): workspace foundation (+1 more)

### Community 2 - "Community 2"
Cohesion: 0.25
Nodes (5): 5373706 chore: initialize monorepo workspace, ee66e84 docs(gemini): update GEMINI.md with active MCP inventory, ponytail ultra mandate, and Graphify sync, fdb0a76 feat(graphify): fully integrate official Graphify knowledge graph engine with Git hooks, scripts, GEMINI.md, and CI pipeline, EnvConfig, EnvSchema

### Community 3 - "Community 3"
Cohesion: 0.50
Nodes (1): b56cdfd feat(scaffolding): Phase 1 monorepo foundation, apps, packages, and governance guides

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
- **19 isolated node(s):** `nextConfig`, `Env`, `app`, `nextConfig`, `AuthUserContext` (+14 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 3`** (1 nodes): `b56cdfd feat(scaffolding): Phase 1 monorepo foundation, apps, packages, and governance guides`
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
  _19 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._