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
| Click, right half of the stage | Advance, exactly as `→` |
| Click, left half of the stage | Retreat, exactly as `←` |

- **Click-to-move is required.** Most readers of a forwarded deck never learn
  the keys. Two invisible `<button>` zones cover the stage, half each, above the
  content (`z-index`) with `tabindex="-1"` so they take no keyboard focus. Each
  shows a faint chevron at its outer edge on hover. The cursor stays the
  ordinary pointer. The first slide's foot says how to advance, and no other
  slide mentions it.
- A deck with links or controls inside a slide lifts those elements above the
  zones (`position:relative; z-index:7`).
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

## 2. Start from the template

**Copy `template.html` and build inside it.** It is a working deck that passes
the verifier, and it already carries everything that used to be rebuilt, slightly
wrong, in every deck:

| The template provides | So you do not write |
|---|---|
| The stage anatomy: headline, description, body, evidence note, foot | The grid, the `vh` margins, the type ladder |
| Click zones, keyboard navigation, URL state, theme, blackout | Any navigation code |
| The tracker: equal segments, the current one filled | A rail |
| `MODE` and `STEPS` switches | Reveal machinery. With `STEPS` on, the count is derived from the `data-reveal` values a beat renders |
| `header(headline, description)` and `figure(svg, maxVh)` | Per-beat header markup |
| `shot(key, artifact, need)` | Screenshot planes and the dashed placeholder for one not yet supplied |
| SVG helpers: `SVG`, `label`, `text`, `tick`, `lines`, `arrow`, `box`, `hair`, `person`, `system` | Arrowheads, label pitch, stroke settings |

What you replace: the palette and fonts in `:root`, the two intake constants,
the coverage ledger, and every beat. The four beats in the template show the
layouts; delete them. **`exampleFigure()` shows the helpers and the emphasis
rules. It is not a form to reuse** — each diagram takes the form its own
argument has (`figures.md` §5).

One file. Inline everything. No CDN, no run-time font fetch; embed fonts as
`woff2` data URIs in `@font-face` when the brand needs them.

### Figures in the template

- **A full-measure figure uses a viewBox 340 units wide**, so one unit is 1/340
  of the measure and label sizes are comparable across slides: 5–6 for a name,
  4–4.4 for a note, 3.6 for a tick.
- **`preserveAspectRatio="xMinYMid meet"`** keeps the figure on the left edge
  the headline holds. The `figure()` wrapper caps its height (`--figmax`), so a
  tall viewBox shrinks and leaves the right side empty: make the viewBox wider
  and shorter until the drawing reaches both edges.
- **Wrapped labels go through `lines()`.** Its pitch is 1.35 times the font
  size. Two `text()` calls placed by eye are the commonest cause of a label
  collision failure.
- **Missing screenshots are placeholders, not gaps.** `shot()` with an empty
  `IMG` key draws a dashed plane that says which capture is needed. List the
  pending keys in the ledger comment and in the handover.

### Adding an arrangement

The template covers a title, a full-measure figure, an annotated artifact and a
list. For the other archetypes take the ratios from `archetypes.md` and the
rules below, and add the CSS beside the template's.

```css
  /* dense archetypes — equal columns; balance by distributing groups, not by
     resizing tracks. Ratios for two-region layouts are fixed: see archetypes.md §2 */
  .brief{display:grid;gap:var(--col-gap);align-content:start;
         grid-template-columns:repeat(var(--cols,2),1fr)}
  /* groups are assigned to explicit .col wrappers — distribution is the balancing
     mechanism, so it has to be visible in the DOM, not implied by auto-flow */
  /* subgrid: sub-heads share one row and first items another across all tracks,
     so a two-line sub-head cannot shove one column's items out of register */
  .brief > .col{display:grid;grid-template-rows:subgrid}
  .brief .group{display:flex;flex-direction:column;gap:var(--gap-item);margin-bottom:var(--gap-block)}
  .brief .group > .lead{max-width:34ch}    /* over ~34ch wraps and costs 4.2vh */
  /* the text measure as a track size — in vh, NOT ch: a ch here resolves against
     the ROOT font, not Detail's 2.1vh, and overflows the track by ~40%.
     52ch at Detail ≈ 52 × 0.5em × 2.1vh ≈ 55vh. */
  :root{--measure-track:55vh}
  .split{display:grid;gap:var(--col-gap);grid-template-columns:minmax(0,var(--measure-track)) 1fr}
  /* text track = its measure; the FIGURE absorbs the remainder; the gutter is
     exactly --col-gap. Slack never pools between regions. archetypes.md §2 */
  /* align INK, not boxes: an svg's letterbox offsets its first mark. Set the
     figure's own offset explicitly after measuring. See archetypes.md §5. */
  .split > .fig{align-self:var(--fig-align,start)}
  /* a PANEL's tinted half runs the FULL stage height — basis and foot rows
     included on its side — so no text row ever crosses the tint edge */
  /* a field BLEEDS — no corner inside the stage. archetypes.md §6 */
  .field{background:var(--field);
         margin-inline:calc(-1 * var(--edge-l)) calc(-1 * var(--edge-r));
         padding-inline:var(--edge-l) var(--edge-r)}
```

---

## 3. Traps

Every one of these is silent. They report clean unless something goes looking.

**A helper named after something the browser owns.** `const top = …` at the top
level of the script is a syntax error that stops the whole file, and the console
reports it as `BEATS is not defined` somewhere else. `top`, `window`, `document`
and `location` cannot be redeclared. Name the header helper `header`.

**A class name the template already uses.** A list given `class="rail"` picks up
the tracker's `position:fixed` and vanishes to the left edge. The template's
opening comment lists the names that are taken.

**Background-clipped text loses its descenders.** A headline painted with
`background-clip:text` is clipped at its line box, so the tails of g, p and y
are cut. Add `padding-bottom:.14em`.

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
body region from the bottom of the headline block (`.claim`, and `.desc` when
present) to the basis's top; a basis removed from
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
