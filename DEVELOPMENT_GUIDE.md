# Development Guide — Enterprise Multi-Hotel Operations Platform

## Prerequisites
- Node.js >= 20.0.0
- pnpm >= 9.0.0
- Docker Desktop / PostgreSQL local instance

## Local Environment Setup

1. **Install Dependencies**:
   ```bash
   pnpm install
   ```

2. **Copy Environment Variables**:
   ```bash
   cp .env.example .env
   ```

3. **Run Typecheck & Linting**:
   ```bash
   pnpm typecheck
   pnpm lint
   ```

4. **Start Development Servers**:
   ```bash
   pnpm dev
   ```

## Monorepo Architecture Overview
- `apps/admin`: Next.js 15 Management Console
- `apps/website`: Next.js 15 Guest Storefront
- `apps/api`: Hono API on Cloudflare Worker runtime
- `packages/db`: Drizzle ORM PostgreSQL schema & migrations
- `packages/auth`: JWT & session verification utilities
- `packages/ui`: Shared Tailwind CSS & component library
- `packages/shared`: Shared TypeScript types & Zod validation schemas
- `packages/integrations`: Stayflexi PMS & TTLock API integrations
