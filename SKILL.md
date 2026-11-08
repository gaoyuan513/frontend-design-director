---
name: frontend-design-director
description: Design and implement new web interfaces or redesign existing sites, product flows, dashboards and interactive galleries. Use for visual direction, interaction design and responsive frontend implementation. Skip backend-only changes and isolated logic fixes.
---

# Frontend Design Director

1. Identify the audience, primary task, content and success condition. Inspect manifests, lockfile, styles, components and actual routes. For a redesign, trace one critical flow through API, permissions, state, URLs and error handling. Capture a baseline if runnable. For a new project, map the entry, task, detail and recovery screens first.
2. Choose one primary direction with [design modes](references/design-styles.md). Honor an explicit style. Explain the choice against the user task, device and constraints. For mixed sites scope a different direction to a distinct route only when necessary.
3. Use the matching section of the [source index](references/design-sources.md). Open one or two relevant cases. Record what you could inspect, one transferable principle and the local decision it informs. When access fails, label the proposal as your own. Use original content and licensed assets. Never reproduce an entire composition.
4. Define type roles and fallback fonts, semantic colors including focus/error, spacing scale, grid, density and motion behavior. Map onto existing CSS variables or theme primitives. For a new system adapt the [token example](assets/design-tokens.example.json). Show hierarchy through content scale and alignment. Justify accent color, surface boundaries and effects by function.
5. Implement a complete vertical slice including loading, empty, error and success when applicable. Preserve route contracts and real data. Reuse the stack and its primitives. For gesture or animated UI consult [interaction patterns](references/interaction-patterns.md). Introduce a dependency only for a concrete gap.
6. Run relevant project checks and the [browser checklist](references/quality-checklist.md). Fix observed issues and repeat the failing path. Report the mode, changed routes, reference evidence, checks performed and anything unverified.
