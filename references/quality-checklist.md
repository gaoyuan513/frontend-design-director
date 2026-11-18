# Browser pass

1. Record the route, test data, viewport and baseline for a representative task. Run project lint, typecheck, tests and build where available.
2. Capture desktop and narrow phone screenshots (e.g. 1440 and 375 CSS px). Inspect overflow, cropped text, sticky elements, keyboard-obscured inputs, image sizing and accidental whitespace. Resize across the breakpoint itself.
3. Complete a real primary path through detail and back. Exercise deep links, refresh, validation, empty and failed requests with safe fixtures. For redesigns repeat the baseline flow under the same role.
4. Navigate by keyboard, check visible focus and modal focus return. Validate meaningful labels, reduced motion and text contrast (4.5:1 for ordinary text). Check zoom at 200%.
5. Inspect console/network errors, layout shifts, initial JS and image weight. Compare with the baseline before accepting a heavier effect. Confirm static content appears before optional animation.
6. Record issue → fix → retest with route and viewport. Without a browser report only completed build/static checks and list the manual steps still needed.

## Creative Quality Gate

Walk the real route with a pointer, keyboard and touch. For each item record a visible result, a failure or a device/tool limitation.

- Describe the original metaphor and identify the focal object in the first viewport. Check silhouette, type scale, empty space and foreground contrast on both widths.
- Operate the signature input. Compare before and after. The changed pose, composition or content must follow the input; autonomous animation alone is insufficient.
- Traverse a narrative transition in both directions. Check pacing, interruption, exit and native navigation. Pause optional rendering when hidden.
- Enter an experiment, manipulate its content, leave, and restore a usable selection or focus. Check refresh, deep link, Escape and browser Back.
- Drag past the click threshold, release inside and outside the control, then open a different item. Verify keyboard/list alternatives and vertical touch scrolling.
- Capture a real screen recording and screenshots; label illustrative material separately. Measure frame intervals under active input and initial payload; name the hardware/browser conditions. Verify reduced motion without removing essential actions.
- If signature input, scene progression or content exploration is absent, revisit the prototype before describing a creative brief as complete. Apply business-flow checks to workspaces without imposing experimental gestures.
