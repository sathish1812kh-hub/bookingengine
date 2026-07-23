# Contributing to BookingEngine Platform

## Engineering Guardrails & Standards
1. **One Feature = One Branch / PR**: Never commit directly to `main`. Create feature branches (`feature/hotel-crud`, `fix/ledger-sync`).
2. **One Feature = One Migration**: Any database schema change must include a single Drizzle migration file checked into `packages/db/drizzle`.
3. **No `any` Types**: Explicitly type every parameter, variable, and API return value.
4. **No TODO Placeholders or Dead Code**: Do not commit commented-out code or unhandled TODO items.
5. **Mandatory Schema Validation**: All external input payload parameters must be validated using Zod schemas.
6. **Financial Invariants**: Every financial mutation must be wrapped in a PostgreSQL ACID transaction enforcing $\sum \text{Debits} = \sum \text{Credits}$.
7. **Audit Trail Logging**: All data mutations must write an event to the `audit_logs` table.

## Git Commit Message Convention (Conventional Commits)
Format: `<type>(<scope>): <short summary>`

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `test`: Adding or updating tests
- `chore`: Build process or dependency updates

Example: `feat(reservations): add availability check endpoint`
