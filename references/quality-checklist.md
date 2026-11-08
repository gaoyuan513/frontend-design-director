# Browser pass

1. Record the route, test data, viewport and baseline for a representative task. Run project lint, typecheck, tests and build where available.
2. Capture desktop and narrow phone screenshots (e.g. 1440 and 375 CSS px). Inspect overflow, cropped text, sticky elements, keyboard-obscured inputs, image sizing and accidental whitespace. Resize across the breakpoint itself.
3. Complete a real primary path through detail and back. Exercise deep links, refresh, validation, empty and failed requests with safe fixtures. For redesigns repeat the baseline flow under the same role.
4. Navigate by keyboard, check visible focus and modal focus return. Validate meaningful labels, reduced motion and text contrast (4.5:1 for ordinary text). Check zoom at 200%.
5. Inspect console/network errors, layout shifts, initial JS and image weight. Compare with the baseline before accepting a heavier effect. Confirm static content appears before optional animation.
6. Record issue → fix → retest with route and viewport. Without a browser report only completed build/static checks and list the manual steps still needed.
