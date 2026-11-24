---
name: frontend-design-director
description: Design, implement, or review web pages and interfaces, including targeted UI fixes, redesigns, reference-led builds, responsive product flows, and creative websites. Use for layout, interaction, art direction, and browser verification. Skip backend-only tasks.
---

# Frontend Design Director

## Match the work to the brief

| Request | How to start |
| --- | --- |
| Targeted UI fix or review | Open the affected route or component and reproduce any reported behavior. Inspect surrounding states and use the relevant part of [browser verification](references/quality-checklist.md). For a review, report findings with their impact and reproduction evidence. |
| Build from a supplied design or screenshot | Map its layout, assets and components onto the existing project. Use the [implementation guide](references/implementation.md) to handle missing states and screen sizes and match the intended fidelity. |
| New page or substantial redesign | Identify the visitor's main action. When the brief leaves visual choices open, use the [design modes and short plan](references/design-styles.md) to shape the first complete path and critique the rendered result. Use the [source index](references/design-sources.md) when a precedent would resolve a design choice. |
| Product or workspace flow | Trace the real flow through its routes, data, permissions and recovery states. Use [product workflows](references/product-interfaces.md) to decide where state lives and how users resume the task. |
| Creative or immersive experience | Develop a few distinct concepts when the brief leaves room to explore. Use the [creative playbook](references/creative-direction.md) and consult a relevant [case study](references/award-winning-case-studies.md) when it informs the concept. Prototype the defining input before polishing the surrounding page. |

## Design and implement

1. Locate the route, component, styles, assets and data that drive the requested outcome. Inspect project conventions and, when runnable, check the current behavior before editing. Keep existing navigation, persistence and access behavior unless the brief changes them.
2. For open visual decisions, compose around the primary action or focal object. Choose hierarchy, type, spacing and image treatment together. Resolve the narrow layout with real content early. Keep copy and visual elements that help the user understand, navigate or act.
3. Reuse the project's primitives, tokens and dependencies where they fit. For a new visual system, adapt the [token example](assets/design-tokens.example.json) to the chosen direction. Use the [implementation guide](references/implementation.md) for build decisions and [interaction patterns](references/interaction-patterns.md) for motion, dragging and spatial controls. For input-driven effects, make the result observable and keep the underlying task reachable through touch, keyboard and reduced-motion paths where applicable.
4. Run the relevant project checks and verify the affected path in a browser when available. Use the [browser verification guide](references/quality-checklist.md) to select viewports, input methods, edge cases and performance checks. Retest any fix. Report the outcome, verification evidence and remaining limits. Capture screenshots or recordings when requested or when they help explain the result.
