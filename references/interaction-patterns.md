# Interactions that communicate state

- **Workspace** — Keep run selection in the route or existing store. Show queued, streaming, interrupted and completed states from actual events. Test cancel and retry under slow delivery. A log update should preserve reading position when the user scrolls up.
- **Gallery** — Start with semantic links. Enhance with pointer capture, cancel handling and bounded inertia. Separate click from drag using a movement threshold. Keep native document scroll outside the plane. Provide previous/next, keyboard and list access to the same URLs.
- **Creative transitions** — Animate the element that changes state. Preserve focus and history across transitions. Respect reduced motion, make content immediately available, and stop offscreen rendering.
- **3D** — Lazy-load only when depth or spatial navigation helps the task. Test without GPU support and with assets still loading. Provide an HTML index or poster with real links. Dispose of listeners, textures and animation frames on navigation.
