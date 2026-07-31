# Choreography

Read before writing reveal logic.

Reveal order is **argument construction**, not decoration. A beat's states are the
order in which its point gets made, and the default — append the next block — is a
choice to make deliberately rather than inherit.

Two contracts in `SKILL.md` §5 govern everything here and are not restated: **reveal
0 is a complete composition**, and **everything is visible in the final state**.

---

## 1. Semantics

- **A reveal adds one idea.** Two consecutive states differ in one localized region.
  If you cannot point at the single thing that changed, split the reveal.
- **Reveal count is derived from the beat's own content**, never hand-authored.
  Compute it from the reveal-bearing array.
- **Reveals should follow the order the content argues in.** This is the floor that
  the two contracts above do not supply: they cap the payload and the concealment,
  but nothing else stops a deck where every reveal appends the next thing. A beat
  whose content has an order and whose reveals ignore it is compliant and wrong.

### Reveal counts

| Archetype | Count |
|---|---|
| `chapter` | 0 |
| `statement` | strip items |
| `list` | 0 by default; item count only when each needs its own moment |
| `prose` | paragraphs − 1 |
| `grid` | rows (or columns) |
| `brief` | groups − 1 (reveal 0 carries the first group's or track's items) |
| `split` / `panel` | **max(text groups − 1, figure steps)** — a count derived from text alone strands the figure's later steps, and the stranded step is the departure |
| `axis` | max(field groups − 1, figure steps) |
| `sequence` | steps |
| `number` | findings |
| `compare` | **states + 1** — two states *and* the named delta are three ideas, and landing both states in one step breaks the one-idea rule |
| `stage` | steps of its staging device (§4) |

---

## 2. Motion

**One action, one movement.** A single presenter action produces one coordinated
movement on one timeline. Everything else holds perfectly still.

| Movement | Duration | Easing |
|---|---|---|
| Beat enter | `260ms` | `ease-out` |
| Chapter enter | `340ms` | `ease-out` |
| Reveal enter | `300ms` | `ease-out` |
| Frame crop / zoom | `450ms` | `ease-out` |
| Veil fade | `400ms` | `ease-out` |
| Rail fill | `260ms` | `ease-out` |
| **Any retreat** | `160ms` | `ease-out` |

- **Retreat is faster than advance.** Going back is a correction, not a beat.
- **Movements never queue.** Because each reveal animates a different element, fast
  clicking simply starts the next one — the previous finishes on its own timeline and
  nothing backs up. Do not build an animation queue.
- **Drive reveals with the standalone `translate` property, never `transform`.**
  Figure elements often carry a positioning `transform`; animating `transform`
  silently destroys it, and the failure looks like a maths error in the figure.
- **Fade and translate only.** No parallax, no scroll-linked effects.
- **`prefers-reduced-motion: reduce` shows completed states with no transitions**,
  and that state is the movement's exact endpoint.

The traps that silently kill reveals — `requestAnimationFrame` in a background tab,
suspended transition clocks — are in `build.md`.

---

## 3. Reveal patterns for figures

A figure's reveal order is the order its argument assembles in. The general shape,
and the one to use when nothing more specific applies:

> **scaffold → pattern → departure**

Draw the axis and its bounds. Draw the shared pattern once. Then land the exception,
accented. That is the same rule as *the exception is the subject* (`figures.md` §1),
expressed in time — and it means the audience watches the argument arrive rather
than being handed a finished chart.

Per relationship — **these are defaults, not templates.** The governing rule
above (the last reveal lands on the point) outranks any row: when a figure's
point is a presence rather than a gap, the presence lands last, and the
deviation goes in the ledger.

| Relationship | Reveal order |
|---|---|
| `range` | Axis · the shared span drawn once · each departure |
| `concurrency` | The window and its deadline · the spans · the overlap region marked · the staggered alternative |
| `load` | The bearer and its baseline · each mass, accumulating · the total marked |
| `asymmetry` | The shared scale · the lighter side · the heavier side |
| `dependency` | The path · the blocked link as a break · the queue behind it |
| `coverage` | The full required set · what is present · **the gaps last** |
| `threshold` | The axis · the boundary · items placed by side |
| `boundary-moving` | The axis · today's line · the direction |
| `positioning` | Both axes · the permitted region · each item placed · the forbidden corners |
| `correspondence` | Both sets · the regular links · **the crossing or unmapped item last** |
| `divergence` | The trunk · the branch leaving · the merge point |
| `expectation` | The axis · the expected series, dimmed · the actual · the gap marked |
| `progress` | The stages · the marker for where you are |
| `sequence` | The axis and its bounds · one station per step |
| `magnitude` | The value · the count or scale beside it |
| `proportion` | The whole · the split |

**The last item in the order is the point.** Gaps, crossings, unmapped items,
departures — these land last because that is what the audience should be looking at
when you stop clicking. If your reveal order ends on something incidental, the order
is wrong.

**A figure may legitimately be complete at reveal 0** when it is being discussed as
a whole rather than assembled — that is the *figure-first* discipline in `split`. The
rule is that you chose, not that you always build.

---

## 4. Staging devices — attaching discussion to an artifact

An artifact beat attaches discussion with exactly one device. **Annotation text never
sits on the artifact**, and every annotation remains fully legible in the final state
— prior notes dim, they never truncate.

Mark regions inside the artifact with `data-stage-target="1"`, `"2"`, …. For a drawn
artifact, anchor analytically (`figures.md` §4).

**Ledge** — annotations accumulate in a fixed column beside the artifact. Each step
lands one; earlier ones drop to `--dim` but keep every word. Reserve the column's
full height at reveal 0 so nothing shifts as notes land. The artifact carries only a
small point and ring where each leader lands. **Three notes at Detail is the working
cap** — three notes of 40 words each will overflow the column into the basis note, so
budget ~28 words a note and check it.

**Frame** — the frame is fixed and the artifact moves inside it. Each step crops to
the region under discussion; **the final step pulls back to the whole**, so the
artifact ends fully visible. Implement as a `transform` on an inner wrapper. **Scale
to the region:** the target should occupy roughly half the frame's shorter dimension
— `k = min(3, 0.5 / regionFraction)`. If that needs more than ~3×, the region is too
small for this move; draw a dedicated figure instead.

**Spotlight** — the artifact stays whole; a veil dims all but the region under
discussion. The lit region *is* the attachment, so notes sit in the side column with
no leaders. **The final step lifts the veil.**

**Perform** — the artifact demonstrates itself. No marks at all.

### Across all four

- **One device per artifact, not one per deck.** Different artifacts in the same deck
  may use different devices; a single artifact is governed by one.
- **Context accumulates.** Earlier ideas de-emphasise but stay legible.
- **Comparison is co-present**, on a shared baseline, with the delta named in text
  rather than implied by motion.
- Spotlight and Frame both answer "look here." Prefer **Spotlight** when the region
  is legible at true scale and **Frame** when it is not.

---

## 5. Reveal patterns for dense text

Short, because there is less here than the figure section and pretending otherwise
would invent variety that does not exist.

**A `brief` reveals by group. That is the whole vocabulary.** Sub-heads are scaffold
and present from reveal 0, so the reveals fill in items group by group. Do not look
for a cleverer move: the skim path is already complete at reveal 0, and the reveals
exist to let a presenter take one point at a time.

**Order the groups by the argument, not by the source's order.** This is the only
real choreographic decision a dense text beat offers, and it matters: a `brief` whose
last group is the consequence lands differently from one whose last group is a
housekeeping caveat. The source was written to be read linearly; the beat is not.

**`grid` reveals in the direction the argument runs** — by row when rows are the
subject, by column when the comparison is across columns. Choose, and be consistent
within a deck.

**De-emphasis is a `presented` device.** Dimming everything but the current reveal
suits a narrated deck. In `standalone` the final state is what a reader reads, and
two-thirds of every beat arriving dimmed reads worse as a document — so in
`standalone`, prior content returns to full strength by the final state.

---

## 6. De-emphasis and blackout

- Prior reveals may drop to `--dim`. They never lose words.
- Blackout (`B`) goes to `--blackout`, true black in both themes. It is a presenter
  device for taking the room's attention off the stage; nothing about the beat state
  changes, and leaving blackout restores exactly the state you left.
