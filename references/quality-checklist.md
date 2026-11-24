# Browser verification

Use the project's normal entry point and representative content. For a fix or redesign, reproduce the behavior before editing when possible. Keep the route, role, data, and viewport comparable when retesting. Run the relevant project checks, such as lint, type checking, tests, and build, using the existing commands.

| Scope | What to exercise |
| --- | --- |
| Targeted change | Reproduce the affected behavior, verify the fix, and check a nearby state or caller that shares the changed component or styles. For layout changes, inspect the size where the problem appeared and the adjacent size where the layout changes. |
| New page or product flow | Start from the normal entry route and complete the primary task. Exercise the affected failure and recovery paths with safe local or test data. Check deep links, refresh, Back, or access boundaries when the flow relies on them. |
| Creative experience | Run the applicable browser checks and the [Creative Quality Gate](#creative-quality-gate) on desktop and a narrow screen. Verify the defining interaction through the input methods it supports. |

## Checks to select by risk

- **Responsive layout** — Compare the supplied design at its intended viewport when available. For broader changes, start with representative desktop and phone widths, such as 1440 and 375 CSS px, then resize across affected breakpoints. Use long titles or dense data where relevant. Check horizontal overflow, clipped text, image crops, sticky overlays, and access to controls when the on-screen keyboard is open. For content-heavy or control-heavy screens, use browser zoom and confirm content and controls remain reachable at 200%.
- **Keyboard and accessibility** — Start with Tab and complete the affected task using the keyboard. Check visible focus, meaningful order, and activation. For overlays, check initial focus, whether background controls stay out of the modal tab sequence, dismissal, and return to the trigger or a logical successor. If the overlay can open from a deep link, test dismissal from that entry point too. Inspect accessible names, roles, and states for changed controls, as well as relevant error and status announcements. Measure contrast where colors or image backgrounds changed, including the lowest-contrast areas behind overlaid text. For motion, repeat the task with reduced motion enabled.
- **Input and state** — Use click, keyboard, and touch as supported. For data views, exercise the affected loading, empty, and failed request states. For forms, try invalid input and a successful submission. Where latency and repeated input matter, check what happens during a pending action. Verify the UI reports the result and retains input the user needs to recover. For route or state changes, refresh and navigate Back from a meaningful intermediate or detail state where applicable.
- **Runtime and performance** — Inspect the console and network during load and the affected flow. For changes to media, rendering, or initial loading, compare load behavior and resource weight under comparable conditions. Watch for visible layout shifts and verify primary content before optional effects finish. For costly interactions, profile while actively using the control and verify optional rendering stops when out of view or when the tab is hidden.

## Creative Quality Gate

Use the parts that apply to the intended experience. A creative brief may need a signature input, a narrative transition, a deeper content action, or a combination of these.

- Check that the visual idea and focal object are legible in the opening view. Inspect silhouette, type scale, spacing, and foreground contrast at desktop and phone widths.
- Operate the defining input and compare the output before and after. Confirm the pose, composition, or content changes in response to the input.
- Traverse a narrative transition in both directions. Check pacing, interruption, and exit through native navigation. Open deeper content, operate it, and leave with a usable focus or selection restored. Exercise refresh, deep links, Escape, and browser Back where the experience uses them.
- For draggable controls, cross the click threshold and release both inside and outside. Open a different item afterward to catch stale drag state. Confirm tap and keyboard or list access to the same content and that vertical scrolling still works on touch.
- Verify reduced motion keeps essential actions reachable. If the feature depends on browser capabilities such as WebGL, exercise the fallback with that capability unavailable. If measuring animation, sample frame intervals during active input and record the viewport, device or emulation, and browser conditions. Use the results to revisit an effect that misses its intended behavior.

## Evidence and retest

Keep enough detail to reproduce each result. Record the route, viewport, input method, fixture or role where relevant, and what happened. Retest observed failures after the fix. Screenshots document composition and resulting states. A browser recording can show how input changes the result when motion or gesture behavior matters. Label emulated devices and illustrative assets so the evidence is clear.

If browser access is unavailable, run the available static and project checks, report which checks actually ran, and name the specific browser steps still unverified. Apply the same reporting to unavailable devices or input methods. A successful build establishes that the project builds. Browser interaction requires its own evidence.
