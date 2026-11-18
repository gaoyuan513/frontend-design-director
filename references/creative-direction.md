# Direct a working scene

## Choose the concept before the renderer

Compare three proposals as compact lines: **metaphor / object / composition / input / transformation / cost**. Reject proposals whose defining experience survives unchanged when the input handler is removed. A practical constraint should change the rendering strategy before it erases the idea.

For Felix, a specimen drawer could reveal samples by pulling trays (DOM transforms, shallow depth); an optical bench could align lenses to reveal project text (SVG masks, difficult touch precision); a field instrument could rotate one continuous line sculpture, then separate its traces as the reader scrolls (projected Canvas curves, keyboard alternatives). The last connects a personal identity, a family of modes and their controls through one visible object.

## Art direction contract

Choose a dominant silhouette, a material response, one type contrast, a scale relationship and an intentionally quiet region. Compose at phone width from the start. Put oversized type behind or beside the object only while essential words remain legible. Establish one repeated motif (e.g. a calibration tick) that carries meaning when the scene changes. Plan how density, color and negative space shift between opening, exploration, detail and exit.

## Motion score

For each beat specify trigger, property or geometry, duration/continuation, interruption, exit and equivalent low-motion action. Example: entering the index separates traces in proportion to native scroll; reversing scroll reassembles them; opening a detail pauses the field; reduced motion selects the resolved pose. A pointer can influence orientation while drag commits a larger turn. Give magnetic or spring controls a bounded range, independent click target and keyboard focus.

Use kinetic type or mask reveals to establish reading order; keep headings in the DOM. Use parallax and camera movement for changes of viewpoint, not for body text. Let gallery inertia decay and clamp it at the bounds. Preserve focus when crossing a scene boundary. Keep sound opt-in.

## Rendering decision

CSS transforms suit a few planes and masks. SVG suits editable paths. Canvas suits many projected strokes or particles. Motion is useful for interruptible component states; GSAP/ScrollTrigger for coordinated timelines. Lenis is justified only if the scroll model needs it and history, native inputs and reduced motion still work. React Bits can supply an isolated, audited interaction. For a true lit volume, occlusion or per-pixel material use Three.js / R3F or a small GLSL shader; consider WebGPU only with a tested fallback. Measure the active frame cost, cap resolution and stop rendering offscreen. Ship readable content before optional assets.

## Capture the experience

Record a complete route: establish the initial state, perform a visible input, show the resulting change, and use the real exit. Leave enough time to read the result. Show touch as a separate clip when it changes the interaction. Capture the shipping viewport with a real browser, keep labels outside the interaction target, and disclose captions, timing edits and device emulation. A short silent H.264 clip with native controls works well on a static demo, with a poster for loading and a still or short GIF for the README.
