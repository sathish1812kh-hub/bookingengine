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
