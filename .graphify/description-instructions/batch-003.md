# Node Description Batch 4 of 4

Graphify is running in assistant/skill mode (no API key). You are the host
assistant (Claude Code / Codex / Gemini CLI). Read the prompt below and write
your JSON answer to the answer file.

## Prompt

You are documenting nodes in a knowledge graph.
For each entry below, write ONE concise factual plain-language sentence
describing what it is or does. Use only the provided context.
For a code symbol (kind=code-symbol — a function, class, or constant),
describe what the function/symbol does based on its name, source location
and neighbors — e.g. "Resolves the configured ontology profile from graphify.yaml.".
Write every description in English (en). Do not switch languages.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "src_session_store_memorysessionstore_delete": ".delete()" | kind=code-symbol | source=packages/auth/src/session-store.ts:L29 | neighbors=[MemorySessionStore]
- "src_session_store_memorysessionstore_get": ".get()" | kind=code-symbol | source=packages/auth/src/session-store.ts:L12 | neighbors=[MemorySessionStore]
- "src_session_store_memorysessionstore_set": ".set()" | kind=code-symbol | source=packages/auth/src/session-store.ts:L22 | neighbors=[MemorySessionStore]
- "src_tenant_resolver_memoryorganizationrepository_constructor": ".constructor()" | kind=code-symbol | source=packages/auth/src/tenant-resolver.ts:L17 | neighbors=[MemoryOrganizationRepository]
- "src_tenant_resolver_memoryorganizationrepository_getbyslug": ".getBySlug()" | kind=code-symbol | source=packages/auth/src/tenant-resolver.ts:L51 | neighbors=[MemoryOrganizationRepository]
- "src_tenant_resolver_tenantresolver_constructor": ".constructor()" | kind=code-symbol | source=packages/auth/src/tenant-resolver.ts:L74 | neighbors=[TenantResolver]
- "src_tenant_resolver_tenantresolver_validatecrosstenantaccess": ".validateCrossTenantAccess()" | kind=code-symbol | source=packages/auth/src/tenant-resolver.ts:L111 | neighbors=[TenantResolver]
- "website_next_config_nextconfig": "nextConfig" | kind=code-symbol | source=apps/website/next.config.ts:L3 | neighbors=[next.config.ts]
- "website_next_env_d": "next-env.d.ts" | kind=code-symbol | source=apps/website/next-env.d.ts:L1 | neighbors=[b56cdfd feat(scaffolding): Phase 1 mono…]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\bookingengine\.graphify\description-instructions\batch-003.json

Keep each description factual and concise (one sentence). No markdown, no prose
outside the JSON object. It is acceptable to omit a node if context is
insufficient — but include every node you can ground confidently.

Example answer format:
```json
{
  "node_id_1": "Resolves the configured ontology profile from graphify.yaml.",
  "node_id_2": "Colonel James Barclay, an antagonist in The Crooked Man."
}
```
