# Implementation Backlog — Phase Breakdown & Execution Plan

This document serves as the master execution plan for the platform, organizing work into prioritized Epics, User Stories, Dependencies, and Size Estimates.

---

## Master Implementation Backlog Table

| Epic | Story | Priority | Dependencies | Estimated Size |
| :--- | :--- | :---: | :--- | :---: |
| **Phase 1: Project Scaffolding** | **PNPM Monorepo & Workspace Setup** | `P0` | None | `S` |
| **Phase 1: Project Scaffolding** | **Shared Configs (TSConfig, ESLint, Prettier)** | `P0` | Monorepo Setup | `S` |
| **Phase 1: Project Scaffolding** | **Next.js 15 Apps Scaffolding (Admin & Storefront)** | `P0` | Monorepo Setup | `M` |
| **Phase 1: Project Scaffolding** | **Hono API Worker & Wrangler Config** | `P0` | Monorepo Setup | `M` |
| **Phase 1: Project Scaffolding** | **Packages Scaffolding (db, core, ui, integrations)** | `P0` | Monorepo Setup | `M` |
| **Phase 1: Project Scaffolding** | **CI/CD Pipeline (GitHub Actions lint & build check)** | `P0` | Monorepo Setup | `S` |
| **Phase 2: Core Platform** | **Drizzle ORM Schema & PostgreSQL Migrations** | `P0` | Scaffolding | `L` |
| **Phase 2: Core Platform** | **PostgreSQL Row-Level Security (RLS) Policies** | `P0` | Drizzle Schema | `M` |
| **Phase 2: Core Platform** | **Authentication Middleware & JWT Engine (Hono)** | `P0` | Drizzle Schema | `M` |
| **Phase 2: Core Platform** | **Contextual RBAC Permission Evaluator** | `P0` | Auth Engine | `M` |
| **Phase 2: Core Platform** | **Multi-Property CRUD & Room Inventory API** | `P0` | Drizzle Schema, RBAC | `L` |
| **Phase 3: Booking Engine** | **Reservation State Machine & Availability Engine** | `P0` | Room Inventory | `L` |
| **Phase 3: Booking Engine** | **Guest Storefront Booking Flow (Next.js 15)** | `P0` | Reservation API | `XL` |
| **Phase 3: Booking Engine** | **Stripe Payment Gateway & Webhook Integration** | `P0` | Reservation API | `L` |
| **Phase 4: Integrations & IoT** | **Stayflexi PMS Sync & Anti-Corruption Layer** | `P1` | Reservation API | `XL` |
| **Phase 4: Integrations & IoT** | **TTLock IoT Passcode Provisioning Engine** | `P1` | Reservation API | `L` |
| **Phase 4: Integrations & IoT** | **Cloudflare Queues Event Bus Setup** | `P1` | Hono Worker | `M` |
| **Phase 5: Financials & Admin** | **Immutable Double-Entry Ledger Engine** | `P0` | Reservation API | `XL` |
| **Phase 5: Financials & Admin** | **Automated 3-Way Daily Reconciliation Engine** | `P0` | Ledger Engine | `XL` |
| **Phase 5: Financials & Admin** | **Admin Dashboard & Operational Reports (shadcn/ui)**| `P1` | Core Platform, Ledger | `XL` |
| **Phase 5: Financials & Admin** | **Revenue Intelligence Rate Calculation Engine** | `P2` | Room Inventory | `L` |

---

## Phase Approval Status
- **Phase 0 (Architecture & Review Gate)**: `COMPLETE`
- **Phase 1 (Scaffolding Only)**: `READY FOR APPROVAL` (Requires user signal)
