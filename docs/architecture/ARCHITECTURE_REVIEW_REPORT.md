# Architecture Review Report — Enterprise Multi-Hotel Operations Platform

**Reviewer**: Principal Software Architect  
**Target Document**: `docs/architecture/ARCHITECTURE.md`  
**Review Status**: Complete — Architectural Gate Assessment  

---

## Executive Summary
This Architecture Review Gate critically evaluates the proposed architecture across 28 system dimensions prior to code execution. The architecture foundation is strong, edge-optimized, and well-structured; however, key edge runtime constraints, distributed transaction boundaries, and accounting idempotency mechanics require strict resolution before starting Phase 1.

---

## Critical Findings & Architectural Deficiencies

| ID | Category | Severity | Problem Description | Recommended Fix | Fix Before Coding? |
| :--- | :--- | :--- | :--- | :--- | :---: |
| **REV-01** | **Multi-tenant Isolation** | `CRITICAL` | Relying solely on application-level ORM filters (`.where(eq(tenantId))`) risks catastrophic cross-tenant data leaks if a single query omits the filter. | Enforce PostgreSQL Row-Level Security (RLS) policies at the DB engine level using `SET LOCAL app.current_tenant_id` on every connection session. | **YES** |
| **REV-02** | **Transaction Boundaries & Edge DB** | `CRITICAL` | Cloudflare Workers execute over HTTP/WebSockets via Hyperdrive, where long-running interactive transactions (`BEGIN...COMMIT`) across multiple network roundtrips risk socket timeouts and connection pool exhaustion. | Design short, single-roundtrip transactional batches using Drizzle `.transaction()` with explicit statements, or use atomic stored procedures/Sagas for multi-step flows. | **YES** |
| **REV-03** | **Accounting Ledger Correctness** | `CRITICAL` | Concurrent journal postings to the same Folio/Account can cause race conditions during debit/credit balance checks. | Enforce pessimistic row locking (`SELECT FOR UPDATE`) on target Account records during posting, or use an append-only ledger model where balances are derived/materialized asynchronously. | **YES** |
| **REV-04** | **TTLock IoT Hardware Failure** | `HIGH` | Hardware smart locks frequently lose Wi-Fi/Bluetooth gateway connectivity. Synchronous passcode generation during check-in can stall guest check-in flows. | Implement offline-capable TTLock SDK passcode algorithms (AES-based timestamp key seeds) generated purely locally at the edge without requiring live lock gateway response. | **YES** |
| **REV-05** | **Eventual Consistency Risks** | `HIGH` | Stayflexi PMS webhooks can arrive out of order or be delivered multiple times. Processing without idempotency keys risks double bookings or inconsistent inventory state. | Enforce idempotent event consumer patterns using `event_id` deduplication in Cloudflare KV / PostgreSQL with a 24-hour TTL before applying state mutations. | **YES** |
| **REV-06** | **Cloudflare Worker Limits** | `HIGH` | Cloudflare Workers have a 128MB memory limit and 30s CPU time limit (unbound on paid, 50ms CPU on free). Generating large PDF accounting reports synchronously will exceed limits. | Offload PDF/CSV generation to background Cloudflare Queue consumers using streaming R2 multipart uploads and signed download links. | **YES** |
| **REV-07** | **Authentication Weaknesses** | `MEDIUM` | Short-lived JWTs stored in memory lose context across page refreshes, while storing tokens in localStorage exposes them to XSS attacks. | Enforce httpOnly, Secure, SameSite=Strict cookies for refresh tokens with CSRF double-submit cookie validation middleware in Hono. | **YES** |
| **REV-08** | **RBAC Gaps** | `MEDIUM` | Staff roles assigned globally can accidentally grant cross-property permissions if property-scoped permissions are not explicitly evaluated per request. | Implement contextual authorization wrappers `hasPermission(user, propertyId, permission)` enforcing property-level boundary checks. | **YES** |
| **REV-09** | **Reconciliation Engine Gaps** | `MEDIUM` | Bank statement feeds and gateway settlements frequently contain fee deductions (e.g., Stripe 2.9% + $0.30) that cause exact amount match failures against PMS gross revenue. | Incorporate explicit fee tolerance matrices and automatic net-to-gross split journal postings in the reconciliation matching pipeline. | **YES** |
| **REV-10** | **Database Indexing Gaps** | `MEDIUM` | Frequent query paths on `reservations(property_id, check_in_date, status)` and `journal_lines(account_id, created_at)` will degrade as row counts exceed $10^6$. | Define composite indexes (`(organization_id, property_id, status)`, `(account_id, created_at DESC)`) directly in Drizzle schema definitions. | **YES** |
| **REV-11** | **Audit Trail Non-Repudiation** | `LOW` | Storing audit logs in the main PostgreSQL database allows a database superuser or compromised admin key to truncate/modify audit history. | Mirror audit events to an immutable Cloudflare R2 bucket with object lock / write-once-read-many (WORM) retention rules. | NO |
| **REV-12** | **Tight Coupling in Integrations** | `LOW` | Direct dependency on Stayflexi API schema inside reservation services causes ripple effects whenever Stayflexi updates its API. | Introduce an Anti-Corruption Layer (ACL) in `packages/integrations` translating Stayflexi DTOs into internal Domain Entities. | **YES** |

---

## Dimension Evaluation Summary

1. **Domain-Driven Design (DDD)**: Clean bounded context boundaries, but Anti-Corruption Layers are required for Stayflexi & TTLock integrations.
2. **Tight Coupling**: Resolved by isolating domain entities into `packages/core` separate from Drizzle ORM schemas.
3. **Circular Dependencies**: Prevented via strict monorepo dependency hierarchy (`apps -> packages/integrations -> packages/core`).
4. **Multi-Tenant Isolation**: Upgraded from ORM-only `.where()` filters to mandatory PostgreSQL RLS policies.
5. **Security & Auth**: Enhanced with httpOnly CSRF-protected cookies and edge KV revocation lists.
6. **Accounting & Ledger Invariants**: Enforced via append-only immutable journal entries and DB-level `Debits = Credits` triggers.
7. **Reconciliation Correctness**: Gross-to-net fee handling and fuzzy timestamp matching window ($\pm 24\text{ hours}$) incorporated.
8. **Cloudflare Constraints**: Heavy report generation offloaded to Queue workers and R2 streaming.

---

## Architectural Gate Approval Recommendation
**Status**: APPROVED WITH RESOLUTIONS. Proceed with generating formal ADRs (ADR-001 through ADR-012) and Implementation Backlog before Phase 1 project scaffolding.
