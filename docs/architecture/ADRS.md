# Architecture Decision Records (ADRs) — Master Package

## Table of Contents
- [ADR-001: Monorepo Architecture & Workspace Strategy](#adr-001-monorepo-architecture--workspace-strategy)
- [ADR-002: Relational Database & ORM Selection](#adr-002-relational-database--orm-selection)
- [ADR-003: Edge Authentication & Session Management](#adr-003-edge-authentication--session-management)
- [ADR-004: Contextual Multi-Tenant RBAC Model](#adr-004-contextual-multi-tenant-rbac-model)
- [ADR-005: Event Bus & Queue Architecture](#adr-005-event-bus--queue-architecture)
- [ADR-006: Immutable Double-Entry Accounting Engine](#adr-006-immutable-double-entry-accounting-engine)
- [ADR-007: Multi-Tenant Data Isolation (PostgreSQL RLS)](#adr-007-multi-tenant-data-isolation-postgresql-rls)
- [ADR-008: Stayflexi PMS Integration & Anti-Corruption Layer](#adr-008-stayflexi-pms-integration--anti-corruption-layer)
- [ADR-009: TTLock IoT Access Control & Offline Passcode Engine](#adr-009-ttlock-iot-access-control--offline-passcode-engine)
- [ADR-010: Revenue Intelligence & Dynamic Rate Optimization](#adr-010-revenue-intelligence--dynamic-rate-optimization)
- [ADR-011: Edge Background Workers & Cron Operations](#adr-011-edge-background-workers--cron-operations)
- [ADR-012: Cloudflare Deployment & Infrastructure Topology](#adr-012-cloudflare-deployment--infrastructure-topology)

---

### ADR-001: Monorepo Architecture & Workspace Strategy
- **Status**: Accepted
- **Context**: Need unified code sharing across Next.js admin, guest storefront, Hono API worker, DB schemas, and third-party integrations.
- **Decision**: Use `pnpm` workspaces + `Turborepo` for build orchestration and remote caching.
- **Consequences**: Fast incremental builds, single lockfile, clear package boundaries (`apps/*`, `packages/*`).

---

### ADR-002: Relational Database & ORM Selection
- **Status**: Accepted
- **Context**: Double-entry financial accounting requires strict ACID compliance and relational constraints.
- **Decision**: Use PostgreSQL paired with Drizzle ORM and Cloudflare Hyperdrive connection pooling.
- **Consequences**: Type-safe SQL queries, light runtime footprint, seamless serverless edge compatibility.

---

### ADR-003: Edge Authentication & Session Management
- **Status**: Accepted
- **Context**: Need sub-50ms token verification at the edge without querying primary DB on every request.
- **Decision**: Implement short-lived JWTs (15-min) + httpOnly refresh cookies, backed by Cloudflare KV for session revocation.
- **Consequences**: Instant token validation at edge workers; immediate session revocation capabilities.

---

### ADR-004: Contextual Multi-Tenant RBAC Model
- **Status**: Accepted
- **Context**: Staff members manage multiple properties with differing roles across hotel clusters.
- **Decision**: Implement Scope-Aware RBAC (`Organization` -> `Cluster` -> `Property`) evaluated via Hono middleware.
- **Consequences**: Prevents privilege escalation across properties while allowing global administrative oversight.

---

### ADR-005: Event Bus & Queue Architecture
- **Status**: Accepted
- **Context**: PMS webhooks, smart lock provisioning, and financial postings require asynchronous processing.
- **Decision**: Use Cloudflare Queues as an event bus with dead-letter queueing (DLQ) and exponential retries.
- **Consequences**: Decoupled domain services, resilient third-party integration pipelines.

---

### ADR-006: Immutable Double-Entry Accounting Engine
- **Status**: Accepted
- **Context**: Financial records must guarantee auditability and zero balance discrepancies.
- **Decision**: Implement append-only `journal_entries` and `journal_lines` with a DB-level trigger enforcing $\sum \text{Debits} = \sum \text{Credits}$.
- **Consequences**: Invariant balance enforcement; error corrections executed strictly via reversing journal entries.

---

### ADR-007: Multi-Tenant Data Isolation (PostgreSQL RLS)
- **Status**: Accepted
- **Context**: Application-level `.where()` filtering is prone to human error during manual query additions.
- **Decision**: Enforce PostgreSQL Row-Level Security (RLS) policies driven by session variable `app.current_organization_id`.
- **Consequences**: Database-level guarantee that tenants can never access or mutate cross-organization records.

---

### ADR-008: Stayflexi PMS Integration & Anti-Corruption Layer
- **Status**: Accepted
- **Context**: Stayflexi API schemas must not leak into core reservation and accounting domain logic.
- **Decision**: Create a dedicated Anti-Corruption Layer (ACL) in `packages/integrations/stayflexi` mapping external payloads to domain DTOs.
- **Consequences**: Insulates core business logic from third-party API changes and schema breakages.

---

### ADR-009: TTLock IoT Access Control & Offline Passcode Engine
- **Status**: Accepted
- **Context**: Lock gateway outages must not block guest check-ins or door unlock functionality.
- **Decision**: Use TTLock AES-based cryptographic offline passcode generation algorithm generated locally at edge workers.
- **Consequences**: Zero dependency on real-time lock gateway connectivity for guest entry code generation.

---

### ADR-010: Revenue Intelligence & Dynamic Rate Optimization
- **Status**: Accepted
- **Context**: Need real-time room rate adjustments based on occupancy, seasonality, and market benchmarks.
- **Decision**: Build an edge-calculated pricing engine storing benchmark factors in Cloudflare KV with hourly cron refresh.
- **Consequences**: Sub-10ms rate calculation during guest booking flow.

---

### ADR-011: Edge Background Workers & Cron Operations
- **Status**: Accepted
- **Context**: System maintenance, rate scraping, and 3-way reconciliation must run unattended.
- **Decision**: Use Cloudflare Cron Triggers executing isolated Worker tasks publishing to Cloudflare Queues.
- **Consequences**: Zero server infrastructure management; precise scheduled execution.

---

### ADR-012: Cloudflare Deployment & Infrastructure Topology
- **Status**: Accepted
- **Context**: Platform requires high availability, low latency, and low operational overhead globally.
- **Decision**: Deploy Next.js frontends to Cloudflare Pages, API to Cloudflare Workers, assets to R2, cache to KV, and DB via Hyperdrive.
- **Consequences**: Edge-native performance, low infrastructure costs, instant global scale.
