# Build

Read at scaffold time, and again when a layout misbehaves.

---

## 1. Navigation

**Every state is addressable** and survives refresh:

```
deck.html?beat=<beat-id>&r=<reveal>
```

| Key | Action |
|---|---|
| `→` / `Space` / `PageDown` | Advance one reveal, then one beat |
| `←` / `PageUp` | Retreat one reveal, then the previous beat's last reveal |
| `Home` / `End` | First beat / last beat's final state |
| `B` | Blackout |
| `T` | Theme toggle |

- `PageUp`/`PageDown` matter — that is what presenter clickers send. Match on
  `e.code` as well as `e.key`.
- Ignore keys while focus is in an input, textarea, or contenteditable.
- Persist the theme to `localStorage`, defaulting to `prefers-color-scheme`. Wrap
  `localStorage` and `replaceState` in `try/catch` so the file works opened straight
  off disk.
- Clamp at both ends. An unknown beat id or out-of-range reveal falls back to the
  first state and rewrites the URL.
- **Rapid keypresses outrun any async state update.** Keep the authoritative position
  in a synchronous variable and let the URL follow.
- Use `history.replaceState`, not `pushState`.

---

## 2. File skeleton

One file. Inline everything. No CDN, no run-time font fetch.

```html
<!doctype html>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Deck</title>
<style>
  :root{
    --paper:/* brand */; --ink:/* brand */; --dim:/* brand */;
    --surface:/* brand */; --line:/* brand */; --accent:/* brand */;
    --blackout:#000;
    --hair:color-mix(in srgb,var(--ink) 16%,transparent);
    --faint:color-mix(in srgb,var(--ink) 44%,transparent);
    --ghost:color-mix(in srgb,var(--ink) 10%,transparent);
    --fill:color-mix(in srgb,var(--ink) 30%,transparent);
    --field:color-mix(in srgb,var(--ink) 4%,var(--paper));   /* section band; dark theme ~8% */
    --gap-item:1.1vh;   /* within a group          — the spacing ladder: every   */
    --gap-block:3.2vh;  /* between roles/groups      gap in the body is one of   */
    /* --col-gap below   / between regions           these three, or the budget's */
    --radius:.75rem; --radius-sm:calc(var(--radius) - 6px);
    --claim-top:13vh; --kicker-band:7.5vh; --foot-h:5.5vh; --basis-h:7vh;
    --edge-l:12vh; --edge-r:7vw;            /* vh, not rem — see §3 */
    --lead:2.9vh; --detail:2.1vh; --col-gap:4vw; --pip:2.4vh;
    --hair-weight:1px;                      /* 1.5px for projector mode */
    --font-display:/* brand, optional */,var(--font-sans);
    --font-sans:/* brand */,system-ui,sans-serif;
    --font-mono:/* brand */,ui-monospace,monospace;
  }
  html.dark{ /* dark slot overrides + hair 14% / faint 40% / ghost 9% / field 8% */ }
  /* overflow on BOTH html and body — a position:fixed rail contributes to
     documentElement.scrollHeight in Chromium and reports a phantom scroll. */
  html,body{margin:0;height:100%;overflow:hidden}
  body{background:var(--paper);color:var(--ink);font-family:var(--font-sans);
       height:100dvh}
  .stage{position:relative;height:100%;padding:0 var(--edge-r) 0 var(--edge-l);
         display:grid;grid-template-rows:auto auto 1fr auto auto}
  .stage > *{min-height:0;flex-shrink:0}
  .claim{margin-top:calc(var(--claim-top) - var(--kicker-band))}
  .body{display:flex;flex-direction:column;justify-content:center}
  .meta{font-family:var(--font-mono);font-size:1.8vh;letter-spacing:.14em;
        text-transform:uppercase;color:var(--dim)}
  .lead{font-size:var(--lead);line-height:1.45;max-width:44ch}
  .detail{font-size:var(--detail);line-height:1.5;max-width:52ch;color:var(--dim)}
  .basis{font-family:var(--font-mono);font-size:1.6vh;line-height:1.7;color:var(--dim)}
  /* dense archetypes — equal columns; balance by distributing groups, not by
     resizing tracks. Ratios for two-region layouts are fixed: see archetypes.md §2 */
  .brief{display:grid;gap:var(--col-gap);align-content:start;
         grid-template-columns:repeat(var(--cols,2),1fr)}
  /* groups are assigned to explicit .col wrappers — distribution is the balancing
     mechanism, so it has to be visible in the DOM, not implied by auto-flow */
  /* subgrid: sub-heads share one row and first items another across all tracks,
     so a two-line sub-head cannot shove one column's items out of register */
  .brief > .col{display:grid;grid-template-rows:subgrid}
  .lead{text-wrap:balance}
  .detail{text-wrap:pretty}   /* kills single-word orphans where supported */
  .brief .group{display:flex;flex-direction:column;gap:var(--gap-item);margin-bottom:var(--gap-block)}
  .brief .group > .lead{max-width:34ch}    /* over ~34ch wraps and costs 4.2vh */
  /* the text measure as a track size — in vh, NOT ch: a ch here resolves against
     the ROOT font, not Detail's 2.1vh, and overflows the track by ~40%.
     52ch at Detail ≈ 52 × 0.5em × 2.1vh ≈ 55vh. */
  --measure-track:55vh;
  .split{display:grid;gap:var(--col-gap);grid-template-columns:minmax(0,var(--measure-track)) 1fr}
  /* text track = its measure; the FIGURE absorbs the remainder; the gutter is
     exactly --col-gap. Slack never pools between regions. archetypes.md §2 */
  /* align INK, not boxes: an svg's letterbox offsets its first mark. Set the
     figure's own offset explicitly after measuring. See archetypes.md §5. */
  .split > .fig{align-self:var(--fig-align,start)}
  /* a PANEL's tinted half runs the FULL stage height — kicker, basis and foot
     rows included on its side — so no text row ever crosses the tint edge */
  /* a field BLEEDS — no corner inside the stage. archetypes.md §6 */
  .field{background:var(--field);
         margin-inline:calc(-1 * var(--edge-l)) calc(-1 * var(--edge-r));
         padding-inline:var(--edge-l) var(--edge-r)}
  /* the only bordered things on a stage; data-artifact names the real object */
  .plane{border:var(--hair-weight) solid var(--line);border-radius:var(--radius);
         background:var(--surface)}
  .beat-enter{animation:enter 260ms ease-out both}
  @keyframes enter{from{opacity:0;translate:0 1.2vh}to{opacity:1;translate:0 0}}
  @media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
</style>

<div class="rail" aria-hidden="true"></div>
<!-- data-archetype is set per beat by render(); see SKILL.md §2 -->
<main class="stage" aria-label="Presentation stage" data-archetype=""></main>

<script>
  const MODE = "standalone";                 // or "presented" — governs all budgets
  /* COVERAGE ledger: source claim → beat, and what was dropped, with why.
     Rewrite this to match what you actually built. */
  const BEATS = [ /* … */ ];
  const FOOT_SLOT = "";                      // deck-level; empty renders nothing
  const revealCount = b => /* derive from the beat's own reveal array */ 0;
  let pos = { beat: 0, reveal: 0 };          // synchronous source of truth
  function commit(beat, reveal){ /* clamp, set pos, render, replaceState */ }
  function render(){ /* set data-archetype, scaffold, then place revealed content */ }
  addEventListener('keydown', e => { /* the table in §1 */ });
  addEventListener('DOMContentLoaded', () => { /* read URL, render */ });
</script>
```

---

## 3. Traps

Every one of these is silent. They report clean unless something goes looking.

**Margins in `rem` inside a `vh` system.** `8rem` is 11.9vh at 1080p and **17.8vh at
720p**, so the measure narrows by ~4% between resolutions, text wraps to more lines,
and beats that fit at 1080p overflow at 720p. Use `vh`. **Check 720p first** — it is
the binding case for every budget in these documents.

**Never gate first paint on `requestAnimationFrame`.** A deck opened in a background
tab never fires it, so an init class removed inside rAF is removed never — and every
reveal transition is dead for the session. Force a reflow synchronously instead.

**Browsers suspend transition clocks in a hidden tab.** A reveal fired while
`document.hidden` can sit at its start state indefinitely. Handle
`visibilitychange` by re-applying the current reveal state at zero duration on
becoming visible, so a deck woken from a background tab is correct rather than
half-drawn.

**Pin `flex-shrink: 0` on body children.** A fixed-height artifact inside a flex or
grid body will otherwise *shrink and clip* rather than overflow — the figure is
cropped silently and an overflow check reports clean. Once you fix that, watch for
the opposite failure: a figure that now overflows **sideways**, which a
vertical-only check also misses.

**`.basis:empty{display:none}` blinds the fill gate.** The verifier measures the
body region from the claim's bottom to the basis's top; a basis removed from
layout returns a zero rect and the region collapses to nothing, so every
basis-less beat silently skips its fill checks. Keep an absent basis out of the
DOM entirely, or reserve it with `visibility:hidden` — never `display:none` on
an element the measurement chain anchors to. The same class of bug: hiding the
claim row of `chapter`/`number` beats with `display:none` re-flows the grid and
drops `1fr` onto the wrong row — use `visibility:hidden` with height held.

**`overflow: hidden` belongs on `html` as well as `body`.** A `position: fixed` rail
contributes to `documentElement.scrollHeight` in Chromium, so a deck with no real
overflow reports a phantom vertical scroll.

**Body ink can collide with the basis note while staying inside the viewport.** A
text column running past the basis top is not a viewport overflow and no
edge-of-screen check will see it. Measure the body's ink bottom against the basis
top.

**Animating `transform` destroys a positioning `transform`.** Use the standalone
`translate` property for reveals.

**`getPropertyValue('--accent')` returns the author's token, not a computed
colour.** `#b0531b` never string-matches `rgb(176, 83, 27)`. Resolve a custom
property through the engine before comparing it to anything computed.

**`textContent` concatenates adjacent elements with no separator.** A row of grid
cells collapses to one token, so any word count over a table reads as nearly empty.
Join each element's own text.

**An `<svg>`'s bbox does not map to the page by a per-axis ratio.** Unless
`preserveAspectRatio="none"`, the viewBox is letterboxed: the real scale is
`min(sx, sy)` plus a centring offset. Mapping per-axis overstates the painted size in
the letterboxed dimension — by 4× in the worst case seen.

---

## 4. Render discipline

- **Render the scaffold, then the content.** Structure is not conditional on reveal
  state; only content within it is.
- **Replace the stage subtree per beat**, keyed on beat id, so entering a beat
  animates once and reveals within it don't re-trigger it.
- **Reveal state drives attribute changes on rendered elements** (`[data-shown]`),
  not re-renders.
- Draw artifacts in inline SVG or DOM; embed any raster as a data URI.
- **Set `data-archetype` on the stage root every render**, and
  `data-relationship` on every figure, and `data-artifact` on every plane. These
  three attributes are what let anything outside the render function check the deck
  against its own declared intent.
