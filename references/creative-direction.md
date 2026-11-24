# Direct a working scene

## Choose the concept before the renderer

For an open experimental brief, compare a few proposals on **metaphor / object / composition / input / transformation / cost**. Use the direction the user chose when the concept is already set. For a brief centered on interaction, prototype the strongest input and identify the change a visitor can see or hear. Test the same action on a narrow touch viewport before committing to the renderer. Consider changing rendering strategy first when a device constraint threatens the idea.

For Felix, a specimen drawer could reveal samples by pulling trays (DOM transforms, shallow depth); an optical bench could align lenses to reveal project text (SVG masks, difficult touch precision); a field instrument could rotate one continuous line sculpture, then separate its traces as the reader scrolls (projected Canvas curves, keyboard alternatives). The last connects a personal identity, a family of modes and their controls through one visible object.

## Art direction contract

Choose a dominant silhouette, a material response, a type contrast, a scale relationship and an intentionally quiet region. Compose at phone width from the start. Put oversized type behind or beside the object only while essential words remain legible. Plan how density, color and negative space shift across scenes. A recurring motif can carry meaning through the transition, such as calibration ticks moving from the opening sculpture to a detail control.

Art-direct the asset and its crop together. Identify the subject that must survive a narrow crop and where text needs quiet space. Use the supplied visual material when it serves that composition, or create or source material for the intended use. Keep headings, labels and actions in the page so they remain readable over changing imagery.

## Motion score

For each important beat, specify the trigger, visible change, timing, interruption and exit. Entering the index can separate traces in proportion to native scroll. Reversing scroll reassembles them, opening a detail pauses the field, and reduced motion selects the resolved pose. A pointer can influence orientation while drag commits a larger turn. Give magnetic or spring controls a bounded range, independent click target and keyboard focus.

Use kinetic type or mask reveals to establish reading order and keep headings in the DOM. Reserve parallax and camera movement for changes of viewpoint. Let gallery inertia decay and clamp it at the bounds. Preserve focus when crossing a scene boundary. Keep sound opt-in.

## Rendering decision

Choose the renderer from the verified prototype. CSS transforms suit a few planes and masks. SVG suits paths that need individual styling or interaction. Canvas suits many projected strokes or particles. Consider a GPU renderer for lit geometry, occlusion or per-pixel materials. Reuse the project's motion tools where possible. A coordinated timeline or a custom scroll model is worthwhile when it produces a visible improvement and preserves interruption, navigation, native input and reduced motion. See [implementation options](implementation.md) if the current stack has a specific gap.

Keep the core content reachable while visual assets load and if enhanced rendering fails. For an input-driven canvas, draw on state changes where possible. For a continuously animated scene, pause when hidden and release resources on exit. Cap render resolution where it is a bottleneck. Measure the active interaction before adding effects and use [browser verification](quality-checklist.md) to compare it after changes.

## Capture the experience

Record a complete route: establish the initial state, perform a visible input, show the resulting change, and use the real exit. Leave enough time to read the result. Show touch as a separate clip when it changes the interaction. Capture the shipping viewport with a real browser, keep labels outside the interaction target, and disclose captions, timing edits and device emulation. A short silent H.264 clip with native controls works well on a static demo, with a poster for loading and a still or short GIF for the README.
