# GEMINI.md

## Graphify Integration

This repository uses Graphify as the canonical architectural knowledge graph.

Every AI assistant working in this repository MUST:

- Load the latest Graphify graph before making major changes.
- Understand affected modules.
- Review dependencies.
- Identify impacted files.
- Inspect architecture relationships.

After EVERY code modification:

- Refresh Graphify.
- Regenerate indexes.
- Update relationships.
- Verify graph integrity.
- Ensure AI reasoning always uses the newest graph.

Never assume the graph is current.

Always regenerate or refresh it before continuing development.

Resolve Graphify indexing errors before implementing additional changes.

---

## Active MCP Servers Inventory

The following Model Context Protocol (MCP) servers are active and MUST be utilized whenever relevant:

1. **StitchMCP**: Design system, component layout, and UI screen generation (`generate_screen_from_text`, `create_design_system`, `edit_screens`).
2. **PostgreSQL MCP (`postgres`)**: Direct database schema inspection, DDL validation, migration verification, and query analysis.
3. **Playwright MCP (`playwright`)**: E2E browser automation testing, guest booking flow verification, and UI visual regression checks.
4. **Chrome DevTools MCP (`chrome-devtools`)**: DOM inspection, network waterfall analysis, edge console logs, and performance profiling.
5. **Puppeteer MCP (`puppeteer`)**: Headless browser automation and PDF/screenshot snapshot generation.

---

## Operating Protocol: Mandatory `/ponytail ultra` Mode

Every AI assistant working in this repository MUST operate under **`/ponytail ultra`** intensity guidelines at all times:

1. **YAGNI Extremist**: Never write speculative code, boilerplate scaffolding, or unrequested abstractions.
2. **Shortest Working Diff**: Minimal diffs only. Reuse existing helpers, utilities, and stdlib features before introducing new code or dependencies.
3. **Deletion Over Addition**: Eliminate dead code, unused abstractions, and redundant functions.
4. **No Unnecessary Prose**: Concise responses. Code first, followed by at most three lines summarizing what was skipped and when to add it.
5. **Mandatory Verification**: Every code modification must pass `pnpm typecheck` and `pnpm build` before being declared complete.
6. **Proactive MCP & Skill Usage**: Use active MCP servers and specialized skills for database, testing, UI, and architecture workflows whenever applicable.
