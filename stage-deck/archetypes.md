# Archetypes

Read before building any beat. Selection is in `SKILL.md` §1 and `figures.md` §1 —
this file is construction.

---

## 1. Budgets by mode

Per beat, in the body region. `MODE` is declared in the file (`SKILL.md` §1).

| | `presented` | `standalone` |
|---|---|---|
| `brief` track (one group per column) | ≤ 35 words per track | ≤ 70 words per track |
| `list` items | 3–5, one line each | 3–6, up to 2 lines each |
| `prose` total | ≤ 110 words | ≤ 110 words |
| `prose` beats per chapter | 1 | 2 |
| `grid` cells | ≤ 12 words | ≤ 12 words |
| `brief` | unavailable | 120–220 words |
| `split` text side | unavailable | 60–110 words |
| **Body floor, any beat** | 40 words or a figure | 90 words or a figure |

The `standalone` numbers are not arbitrary. At Detail (`2.1vh`, line-height 1.5) a
line costs `3.15vh`, so a 55vh region holds ~17 lines per column; at the 52ch
measure that is ~9 words a line. Two columns is ~300 words of physical capacity, and
~210 once sub-heads and group gaps take their ~30%. A 120–220 word `brief` fills its
stage. A 110-word cap wastes more than half the region, which is the arithmetic
behind the vacuity that narrated budgets produce in a standalone deck.

**The word floor has one escape.** A beat that carries **≥90% of its source
passage** is not under-specified, however short it is. Some passages are simply
tight: a well-argued 84-word paragraph carried whole is finished work, and padding
it to clear a floor makes it worse. Record the escape in the coverage ledger. This
does not apply to a beat you compressed — only to one where the source is genuinely
brief.

**The fill floor has the same escape.** A beat carrying ≥90% of its source
passage that still cannot reach the floor is finished work, not an under-specified
beat — both floors measure the same failure, and padding to clear either is the
defect they exist to prevent. Record it in the ledger like the word-floor escape.

**A `grid` is measured in cells, not words.** A 6 × 4 matrix of marks carries its
argument in glyphs; word count is the wrong instrument. A grid clears the floor by
being complete.

**A `standalone` deck may still use the sparse archetypes.** `statement` and
`chapter` are how it breathes, and a deck of nothing but `brief` is a different
failure. What changes is the default: in `standalone` the burden of proof is on the
*sparse* beat.

---

## 2. Two-region construction

**Tracks size to content; the figure absorbs the remainder; the gutter is exactly
`--col-gap`.** Fractional ratios and measure caps are two independent systems, and
wherever both operate the slack pools between the columns as a gutter nobody
designed. So the ratios below are statements of *who gets the remainder*, and the
implementation sizes the text track to its measure — `minmax(0, 52ch)`-style —
with the figure track taking the rest:

| Layout | Construction | Which side |
|---|---|---|
| `split` — the default | text track = its measure · figure takes the remainder | Text left, figure right |
| `stage` — the artifact is the subject | notes track = its measure · artifact takes the remainder | Artifact left, notes right |
| `panel` (§6) — equal weight, separated by a value change | `1fr 1fr` — the one true equal split | Figure on the tinted half |

**Text goes left, figure right, in `split`.** Two reasons: the claim is left-aligned
above, so a text column beneath continues the same axis; and left-to-right reading
means the argument arrives first and the figure becomes the evidence you turn to.
The exception is `stage`, where the artifact *is* the subject — that is what keeps
`stage` and `split` distinct.

**Equal halves require `panel`.** Bare `1fr 1fr` leaves nothing dominant, which
fails the one-dominant-element test; `panel`'s value change supplies the dominance.
There is no third equal-width option.

**`brief` uses equal columns.** Parallel content gets parallel measure; balance is
achieved by distributing groups, not by resizing tracks (§5).

---

## 3. Rules for all text-led beats

**The words themselves — claims, sub-heads, blocks, strips, basis notes — are
governed by `content.md`.** Read it before writing any of them. What remains here
is structural:

- **Reveal by block, never by line.**
- **Two body styles maximum**: sub-heads are Lead, items are Detail. That is the
  whole allowance — no third size for a sub-sub-head.
- **Budgets have two ends.** Over the ceiling, split the beat. Under the floor, the
  beat is under-specified — go back to the source.

---

## 4. The sparse archetypes

### `chapter`

Oversized chapter index and title, nothing else. Zero reveals. Centres its own
block; exempt from the fill floor. It still carries the kicker, foot, and rail.

### `statement`

One claim, an optional support line, an optional labelled strip.

- Reveal 0 shows the claim and support line; strip items reveal after.
- **The strip's items must be parallel in kind, and each must carry content, not
  only a label** (`content.md` §2–3). The strip is the most common place both
  rules break, because three mono labels make unlike or empty things look alike
  and finished.
- **Not exempt from the fill floor.** An archetype exempt from both the fill floor
  and the word floor is a hole a third of a deck can pour through. If a `statement`
  cannot fill its region, it is carrying less than its stage — consider whether the
  support belongs in a field (§6), or whether the beat should merge with a
  neighbour.

### `number`

One quantity, drawn by its own count, and its gloss. No claim block — the value is a
display element inside the body.

- **The display element never stacks above body text**, and that includes its own
  unit label and its marks. Value beside gloss, not above it.
- **Marks standing for a count are arranged as a count** — grouped, clustered,
  massed — not as a column of bullets beside labels. Five evenly-spaced squares in a
  vertical line with a label each is a `list`, and the squares are illegal markers
  (`figures.md` §3).
- Value and gloss share a declared alignment edge, measured on **ink** (`SKILL.md`
  §5).

### `prose`

- One claim, then 2–3 paragraphs at Lead, **≤ 110 words in either mode** — the
  arithmetic is fixed by the ladder: a Lead line costs 4.2vh and holds 7–8 words
  on the 44ch measure, so a ~65vh region holds ~15 lines. Four independent
  builds derived this; a larger budget cannot be rendered.
- Set on the Lead measure, left-aligned. **Exempt from the 75% span floor** — the
  Lead measure caps it at ~42% of the body width by arithmetic, and a single reading
  column at a controlled measure is the point of the archetype.
- Reveal one paragraph at a time.
- **Reach for `prose` because the sentences need each other**, not because the
  source was a paragraph. A definition, a caveat, a piece of reasoning whose steps
  depend on each other. When the content is separable points, `brief` carries more
  of them and scans better.

### `list`

Legitimate when the content genuinely is an unordered set of comparable items.

- 3–5 items at Lead (3–6 in `standalone`). More means two beats or a `grid`.
- One line each in `presented`; up to two in `standalone`.
- **Markers are a hairline dash** in the meta register — never a filled dot, never a
  square, never a decorative glyph. Numbers only if order matters, and if order
  matters it is a `sequence`.
- **Never nest.**
- **An item needing a qualifying second sentence is not a list item.** A set where
  each point has a caveat, a consequence, or a "because" is a `brief` — one group per
  point. Forcing it into `list` is how a paragraph of reasoning becomes five
  fragments.
- **Before building a `list`, check every item for promotion** (`figures.md` §1). A
  set of five where one carries a drawable relationship is a four-item `list` plus a
  figure beat.

### There is no `columns` archetype

2–3 parallel tracks are a `brief` in its **track arrangement** — one group per
column (§5). The archetype was removed because it rendered as the same shape as a
multi-column `brief` in a different typographic dialect, and **two archetypes must
not produce one appearance** — the mirror of the no-generic-fallback rule. One
name per appearance, one appearance per name.

---

## 5. The dense archetypes (`standalone` only)

### `grid` — a matrix

- Both axes labelled in the meta register, and both mean something. If only one axis
  means anything, use a `brief` in its track arrangement, or `list`.
- Cells ≤ 12 words, or a mark or value instead of words.
- **A source table is a `grid` at its real dimensions.** No row cap. Do not cut rows
  to fit, and do not hand-roll a bespoke renderer per table — that is how five
  tables in one deck end up with five treatments. An 11-row table is an 11-row grid.
- **The limit is legibility, not row count.** Rows must clear the Detail size and
  the region must hold them without shrinking type below the ladder. If an honest
  table will not fit, that is the signal to split it by column group — never by
  silently dropping rows.
- **Dropping a column is allowed and must be declared.** If a source column is not
  on one basis, or is not load-bearing, say so on the stage or in the basis. A
  quietly missing column is a coverage failure.
- Rules between rows, never boxes around cells.
- **Define the mark set once** in a legend below the grid, and reuse it across every
  grid in the deck.
- Reveal a row (or column) at a time, in the direction the argument runs.

### `brief` — the dense stage

The full body region in service of one source section. **The residual archetype** —
used when no relationship in `figures.md` fits. Structure is **group → items**: a
sub-head at Lead, then 1–4 items at Detail, each 1–3 lines, with the hairline-dash
marker from `list`.

- **2 or 3 equal columns.**
- **One typographic dialect, everywhere:** sub-head at Lead, items at Detail with
  the hairline-dash marker. There is no bare-paragraph variant — a track body is a
  group of one item, drawn like every other group. Two dialects for one shape is
  the inconsistency the archetype merge exists to prevent.
- **The track arrangement:** one group per column, for 2–3 genuinely parallel
  things. Reveal 0 shows all sub-heads plus the first track's items; reveals bring
  the remaining tracks. Track budgets are in §1.
- **Distribute groups across columns to balance rendered height. The shorter column
  must reach at least 80% of the taller.** Balance by *height*, not by group count:
  a group with one three-line item is taller than two groups with one-line items,
  and counting groups is what produces a full left column beside a half-empty right
  one. If no distribution reaches 80%, the beat has the wrong archetype or the wrong
  split.
- **A sub-head over ~34 characters wraps and costs 4.2vh.** Three of those in a
  column is the difference between fitting and overflowing. Keep sub-heads to one
  line and count characters.
- **The sub-head is an assertion**: "The platform must exist," not "Platform."
- 120–220 words in the group arrangement; the track arrangement uses the §1 track budgets. Over 220 it is two beats.
- **Reveal 0 shows every sub-head plus the first group's items.** Sub-heads are the
  scaffold, so the skim path works from the opening frame; the first group's items
  keep the body from being structurally blank without making an item the reveal
  unit. Each later reveal fills in one remaining group's items.
- **Groups are the reveal unit.** Never reveal an item.
- **No boxes.** Groups separate with whitespace, and a column boundary needs at most
  one hairline with content on both sides.
- Spans the full measure. A `brief` occupying 60% of the stage width with items
  wrapping at six words has the measure wrong, not the content.

### `split` — figure beside dense text

For a figure that needs its argument next to it rather than compressed into a basis
note.

- **`3fr 2fr`, text left, figure right** (§2).
- Text side follows `brief`'s internal rules at **60–110 words**: groups, sub-heads
  at Lead, items at Detail. The budget is lower than `brief`'s because the job is
  narrower — the figure carries the structure, and the text carries what the figure
  cannot.
- **The text column is not a legend.** If it re-lists what the figure labels, cut it
  to the consequence, the caveat, and the *so what*.
- The figure side follows `figures.md` in full. If it would fail the deletion check
  alone, it fails here — a figure placed to balance a text block is decoration.
- **Vertical relationship, decided by measured ink height:**

| Heights differ by | Treatment |
|---|---|
| ≤ 15% | Share a baseline, and align tops on ink |
| > 15% | **Centre the figure** against the text column |

  Aligning boxes is not aligning ink: an `<svg>`'s letterbox puts its first mark
  3–5vh below the box top, so `align-items: start` misregisters the pair even
  though the CSS is correct. Measure the ink and set the offset explicitly.

- **Choose one reveal discipline and state it:**
  - *figure-first* — the figure completes at reveal 0, text groups follow. The
    default, correct when the figure is the evidence being discussed.
  - *paired* — each reveal brings one text group **and** its corresponding figure
    mark. Only when every group maps to exactly one mark; a paired reveal bringing
    two marks for one group is two reveals.
- **The figure side is subject to the conviction floor** (`figures.md` §3): its ink
  fills at least half its column, or the beat should not be a `split`.

### `panel` — figure on a tinted half (`standalone` only)

The equal-width arrangement: evidence and argument at genuinely equal weight, with
a **value change** doing the separating. A first-class option, not an exception —
reach for it when the figure deserves half the stage and the text beside it is a
full argument rather than a caption.

- **`1fr 1fr`, figure on the tinted half, text on paper.** The tint supplies the
  dominance that equal widths otherwise forfeit.
- **The tinted half is a vertical field running the full stage height** — it
  takes the kicker band, the basis row, and the foot on its side with it, exactly
  as a horizontal field may run to the stage bottom. That is what prevents the
  claim, the basis, or the foot from crossing the tint edge: the boundary runs
  through the whole frame, so nothing crosses it. No corner of the field appears
  inside the stage.
- **The gutter law does not apply inside a `panel`.** The tint boundary *is* the
  region boundary; the text half's measure floats within its own ground, and
  slack inside a field is the field's open ground, not a pooled gutter.
- **The figure centres in the tinted half, and the composition contracts apply
  within it** — the field is the figure's region, so the fill floor, centring,
  and conviction are all measured against the tinted area, not the stage.
- **No hairline at the boundary.** The value change is the boundary; drawing both
  says it twice.
- Text side follows `brief`'s internal rules at `split`'s 60–110 word budget.
- The figure sits *on* the tint and clears the same contrast floors there, in both
  themes. The conviction floor applies to the tinted half.
- Reveal disciplines as `split`.

### `axis` — a full-measure figure over a field

For linear relationships — `sequence`, `concurrency`, `range`, `progress`,
`threshold`, `change` on an axis — where `figures.md` demands the full measure
and a column cannot honestly grant it. (Two sessions independently invented
this; it is now standard.)

- **The figure runs the full stage width**; its argument sits in a **horizontal
  §6 field beneath it**, carrying a different kind of content — the consequence,
  the reading, the caveat — which is what keeps the field legal.
- The field bleeds per §6; the basis, when present, sits below the field or
  inside it at the field's bottom edge — never straddling its boundary.
- Reveal count: `max(text groups − 1, figure steps)` — the figure's last step
  must be reachable, because the departure lands last (`choreography.md`).
- Conviction applies to the full measure: an axis that uses a third of the width
  it demanded forfeits the archetype.

### `sequence` and `compare` — construction

Both are selectable and both previously had no construction rules; every builder
invented them. The standard shapes:

- **`sequence`**: claim + full-width figure (it is an axis figure — use the
  `axis` arrangement when it needs a field, or the bare full-width figure with a
  basis when it does not). Stations land per reveal; two label registers.
- **`compare`**: two states in one frame at one declared scale, aligned on one
  edge, the delta named in text — as a full-width figure or a `split`, chosen by
  whether the states are wide or tall. Reveal count is **states + 1**: each
  state lands, then the delta, which is the point and lands last.

---

## 6. Section fields

A tonal band that carries its own content and forms a boundary. **The device the
format was missing** — without it the hairline does every dividing job in the deck,
and a deck of hairlines reads as one template.

A field is not a border and not an artifact plane. It is a **register change**: it
says *this content is a different kind of thing*, not *this is an object*.

**The rules that keep it from becoming a slide template:**

- **A field must bleed.** Edge to edge of the stage, horizontally or vertically. A
  tonal region that stops short of the edges is a giant rounded card — the
  boxed-argument failure at stage scale. **No corner of a field appears inside the
  stage.**
- **A field needs content of different *kinds* on each side.** The stronger sibling
  of "a rule needs content on both sides." The main region holds the claim and its
  evidence; the field holds the consequence, the qualification, the recommendation,
  or the *so what*. Two regions holding the same kind of content with a value change
  between them is decoration.
- **Ground is `--field`, declared per theme, and dark mixes higher.** Self-inversion
  through `--paper` is the mechanism, not the calibration: ~4% of ink into a light
  paper is visible where ~4% into a near-black one is nothing. Light ~4%, dark ~8%,
  and the verifier samples the painted delta in both themes — an imperceptible
  field fails as a measurement, not an impression. Never `--surface` — that reads
  as an artifact.
- **A field is scaffold**, present at reveal 0, not something that fades in.
- **A horizontal field either stops above the basis note or runs to the stage
  bottom, carrying the basis and foot within it.** Do not let a field edge land
  inside the basis band.
- **Text on a field clears the same contrast floors as text on paper**, in both
  themes. Check it at the field's actual value, not the paper's.

**Where a field earns its place:** a `statement` whose support is a consequence — the
from/to in the main region, the "what it depends on" in the field beneath. A `panel`
(§5), where the tinted half *is* a vertical field. A recommendation band under a
findings beat.

**The projector caveat.** `--field` at 4% is exactly what a washed-out projector
eats. If the deck is `presented` and the room is unknown, either raise the mix until
the boundary survives — checking it does not start competing with content — or use a
hairline and accept the plainer stage. Fields are most reliable in `standalone`,
where the reader controls the display.
