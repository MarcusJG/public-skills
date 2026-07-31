# Figures

Read this before deciding what becomes a figure, and again before drawing one.

Most decks die here: the ideas are fine and the figure is four rounded boxes in a
row. The cause is almost never drawing skill. It is that the figure was chosen
after the text, to illustrate a passage that had already been written as prose.

---

## 1. Selection: what becomes a figure

Selection is a procedure. Run it on **every** source passage before assigning a
text archetype, because the alternative — noticing afterwards that something was
drawable — never happens.

### The governing question

> **What would change if the reader saw this instead of reading it?**

If the answer is "nothing, they would just see the same sentence in boxes," it is
text. If the answer names something the prose cannot do — a magnitude they would
feel, an overlap they would notice, a gap they would count — it is a figure.

### The probes

Ask all of these. They are ordered by how often they fire.

1. **Does anything here have a magnitude, count, proportion, or range?** →
   quantitative figure. The prose will usually have stated it in words, which is
   the tell.
2. **Do several things share a window, a bearer, or a boundary?** → concurrency,
   load, or threshold. This is the probe that catches passages with no numbers at
   all, and it is the one most often missed.
3. **Is there a required set with members missing?** → coverage. The gaps are the
   subject, not the set.
4. **Is there a stated alternative to what happened** — a recommendation, a
   counterfactual, a "we should have"? → the alternative gets drawn beside the
   actual.
5. **Are two enumerated sets being related to each other?** → correspondence. Draw
   it only if the link pattern is uneven.
6. **Does the passage assert a consequence?** → **the consequence is the thing to
   draw, and the list of causes is only the mechanism.** Prose naturally
   foregrounds the list. A figure can foreground the strain.

Probe 6 is the sharpest one and the easiest to skip. A bullet reading *"Stacking
too many firsts at once — spec-driven development at scale, a new build platform,
an agentic pilot and a new design-system method together, against a tight deadline,
buried visible delivery and strained everyone"* has no number, no ordinal, and no
threshold. It is still a strong figure: four spans overlapping in one window
against a hard deadline line, with the staggered alternative drawn beneath. The
prose foregrounds the four initiatives; the figure foregrounds the collision.

### The monotone test

**If every column of a table varies in the same direction with no crossing, drawing
it carries exactly one fact.** Keep the table.

**A figure needs at least one inversion, crossing, or exception.** This is the
cheapest test here — you can apply it by reading the source table, without
building anything. Two tables of identical shape and size can differ completely on
it: a fidelity table whose one high value sits *inside* the other medium's range is
a figure; a levels table where rigour and cost both rise monotonically across three
rows is not.

### The exception is the subject

Once a figure passes the monotone test, **the thing that departs from the pattern is
what the figure is about.** Draw the shared pattern once, then draw only the
departures. Give the departure the accent.

This is not only a composition rule — it is what stops the most common chart
failure, drawing one fact ten times. Seven identical bars look like rigour and
carry the information of a single sentence. One band drawn once, with the single
value that falls inside it marked, carries an argument the prose could not make.

If nothing departs, go back to the monotone test. You probably do not have a figure.

### Promotion

**One item inside a set may be pulled out to become its own figure beat.** If a
single bullet in a five-item list carries a drawable relationship the others don't,
promote it: the set loses an item and the deck gains a figure. This is the mechanism
by which a good figure escapes a `brief`, and without it every drawable idea buried
in a list stays buried.

Record the promotion in the coverage ledger — the source passage now maps to two
beats.

### Declare what you selected

Every figure carries the relationship it draws:

```html
<svg data-relationship="concurrency" …>
```

The value is one of the names in §2. This is not bookkeeping: naming the
relationship *before* drawing is the step that prevents reaching for a shape
vocabulary and fitting content into it. An unnamed or invented value fails the
verifier, because a figure whose relationship you cannot name is a figure whose
subject you have not decided.

### Passing the probes is necessary, not sufficient

A figure that survives every probe can still die on **convergence**: two
drawings in one chapter that resolve to the same shape at a squint are one
figure and an echo, and the echo goes — kept as text with nothing lost. When two
candidates converge, keep the one that pairs with a neighbouring figure to make
an argument, whose accent has a real referent, and whose chapter needs it most.

---

## 2. The relationship catalogue

**Name the relationship, draw that, then label it.** Never start from a shape
vocabulary.

### Quantitative

| `data-relationship` | The content is | Draws as |
|---|---|---|
| `magnitude` | One quantity worth a stage | The value large, with its count or scale drawn beside it |
| `proportion` | A share of a whole | One bar or field split to scale |
| `range` | A span per category, or two series of spans | Spans on one ordinal axis; the shared span drawn once, departures marked |
| `prevalence` | Spread or frequency across a field | Repeated marks, clustered in fives above seven |
| `change` | Before and after on a measured scale | A drawn axis with both states on it |

### Structural

These fire on passages with no numbers, and they are the ones text archetypes
usually swallow.

| `data-relationship` | The content is | Draws as |
|---|---|---|
| `concurrency` | Several things occupying one window that should have been staggered | Spans on one shared axis, the overlap region marked; the staggered alternative beneath, dimmed |
| `load` | Many demands on one bearer | Stacked masses on a single baseline — the total height is the argument |
| `asymmetry` | One side carrying disproportionately | Two unequal masses on one scale, shared baseline |
| `dependency` | Downstream work waiting on a blocked step | A path with the blocked link drawn as a break, and the queue behind it |
| `coverage` | A required set with some members absent | Present/absent marks across the set, gaps drawn as voids |
| `threshold` | A boundary that changes category or accountability | An axis with the boundary drawn, items placed by side |
| `boundary-moving` | A threshold with a direction of travel | Today's line drawn solid, the direction as a single arrow — never two speculative future lines |
| `positioning` | Two *independent* dimensions, items placed by both | A plane with both axes drawn; permitted and forbidden regions marked where the source names them |
| `correspondence` | Two enumerated sets related to each other | Two ordered columns with drawn links |
| `divergence` | Splitting and rejoining | A trunk with branches leaving and merging at marked points |
| `expectation` | Two series that should track and don't | Both on one axis, the expected dimmed or dashed, the gap between them marked |
| `progress` | Position along a staged plan | The stages as an axis with a "reached here" marker — **the marker is the payload**, not the stages |
| `sequence` | Ordered steps, causality | A line with stations, direction implied by order |
| `containment` | Nesting, real structural inclusion | Nested or adjacent regions with real boundaries |

### Notes on the harder ones

**`positioning` is the one a table cannot hold.** If a passage names two
independent dimensions and places things by both, flattening it to a table loses the
interaction — which is why source documents usually resort to prose here. Two costs
traded against each other, or intent against rigour with a diagonal of correct
matches and named forbidden corners, are both planes.

**`correspondence` draws only when the pattern is uneven.** One-to-one links across
two sets is a two-column table; draw it when links cross, when several map to one,
or when an item is unmapped. **The unmapped item is usually the point.**

**`coverage` beats a neutral list.** A list of six prerequisites states
requirements. A coverage figure states which ones you have — and if the source says
what was in place and what was not, the neutral list is discarding the finding.

---

## 3. Drawing

Two disciplines govern every figure, and they fail independently: a figure can be
semantically perfect and drawn too timidly to land, or compositionally handsome
and quietly wrong. Check both, separately.

### Conviction — the figure commits to its stage

**Draw like an instrument, not an infographic.** The idiom every good figure in
this format shares: hairline scaffold, thin masses, open ground, labels in
registers beside the marks. Conviction means committing the *encoding* dimension
— length, position, count — to the stage; it never means area. The failure mode
of an over-eager reading of this section is slabs: bars fattened to hold their
own labels, category regions painted as heavy fills, grounds promoted to plates.
That is not conviction, it is upholstery.

- **A mark's data lives in one dimension; the other is typography.** A bar's
  length encodes the value; its thickness encodes nothing and stays on the
  thickness ladder: **1.2–2.5vh**. Above that ceiling a bar reads as a
  container. Both ends are binding — hairline bars vanish, slab bars box.
- **Regions are grounds, never masses.** A band, a window, a side of a boundary
  is drawn as a tint (`--field` / `--ghost`) with a hairline edge. Heavy fill
  (`--fill`, `--ink`) is reserved for marks that encode a value by their extent.
  A category painted at mass weight is a boxed argument wearing chart clothes.
- **Text never sits inside a filled mark.** A label moved into a bar forces the
  bar to grow around it, and the mark becomes a box. Labels sit beside marks at
  the figure's standoff. One exception: a **void** may carry its own label in
  its interior — a void is empty ground, and the label is the only honest thing
  to put there.
- **Marks are drawn, never typeset.** Semantic states — forbidden, denied,
  absent, warning — are variants within the mark grammar (open, filled, struck,
  outlined) at the figure's own stroke weights. No pictograms, no dingbats, no
  drawn equivalents at icon boldness: a thick-ringed prohibition badge or a
  bold check is UI iconography, and it reads as a sticker on an instrument. The
  model is an open mark struck at ladder weight, meaning assigned by the
  legend.

- **A figure occupies its region or forfeits it.** Drawn ink fills at least half
  of the figure's own column or region. Centring a small drawing in a tall column
  satisfies the alignment contracts and still reads as an empty stage — position
  is not occupancy. A relationship that cannot be drawn at that scale is a basis
  note, not a figure.
- **Axes want the full measure.** Linear relationships — sequence, concurrency,
  range, progress, threshold-with-axis — default to full stage width. Placing an
  axis inside a split column is a decision to justify, not a default.
- **Quantities are drawn at mass, structure at hairline.** Marks that carry a
  value — bars, spans, filled regions — take a stroke or thickness of at least
  ~1.2vh. The hairline weight is for scaffolding: axes, rules, leaders. A
  quantity drawn at scaffold weight reads as scaffolding, and the figure's
  argument vanishes at projection distance.
- **Arrowheads are open, never filled — and so is any directional pointer.** An
  arrow terminates in two strokes at the same weight as its line — a chevron,
  not a solid triangle — and a marker that points at a position on an axis
  follows the same law. A filled wedge is a glyph: it clots at small sizes,
  injects a shape the grammar never assigned, and out-weighs the line it sits
  on. Direction is carried by stroke, not by a wedge of ink.
- **Stroke weights come from a ladder of at most three steps**, declared once for
  the deck: hairline for scaffolding (axes, rules, leaders), mass (≥ ~1.2vh) for
  quantities, and at most one declared mid weight where a figure genuinely needs
  a third role. Every stroke in every figure is one of them. A figure with five
  stroke widths has five unlegislated decisions in it, and the verifier counts.
- **Marks come from a ladder too, and a mark's size matches its role.** Station
  dots, points, pips, and swatches each get one size, held constant across every
  figure in the deck — the same station mark in chapter 2 and chapter 6. A
  locator mark is never larger than the type beside it: a mark that out-weighs
  its own label has stopped locating and started decorating, which is what a
  clunky figure is. The display value and a declared detail-callout are the only
  sanctioned large marks.
- **One label standoff per figure.** The gap between a mark and its label is a
  single constant, derived from the viewBox unit like the hairline is — not
  re-eyeballed per label.
- **Two label registers per figure.** Labels of different kinds separate by
  register and by side: names in one register on one side of the structure,
  qualifiers and phases in the meta register on the other. One undifferentiated
  cloud of labels is the fastest way a correct figure becomes unreadable.

### Semantic fidelity — the figure stays true to its sentence

- **Every drawn element traces to a sentence.** The position, size, and direction
  of each mark must be derivable from the source or from an arrangement declared
  in the basis — the figure-level coverage ledger. A mark you cannot trace is an
  invention wearing precision.
- **Spatial metaphors run the way the words claim.** Floors sit below ceilings,
  upstream sits before downstream, growth points up, and a gap appears where the
  absence is. A figure whose geometry contradicts its own vocabulary is worse
  than no figure, because it is confident.
- **The caption test.** State in one sentence what the audience should *see* in
  the figure. If that sentence names a relationship the drawing does not
  measurably show, the figure is a diagram of the sentence in better clothes.
- **Scoring the source is interpretation, and interpretation is declared.** A
  figure that grades, ranks, or classifies things the source only describes must
  say so on the stage, in the basis — not in a report the reader never sees.

### Artifacts get edges. Arguments get space.

A screenshot, a capture, a real object has a boundary — give it a border, a crop, a
plane. A diagram of a process, a comparison, or a finding has no physical edge, so
it lives directly on the stage, structured by scale, alignment, rules, and
whitespace. **Boxing a diagram to make it look finished is the most common defect
in the format.**

**Declare every plane you draw.** Any element in the body region carrying a border,
a background fill, or a radius must be marked:

```html
<div class="plane" data-artifact="Screenshot — results panel, empty state">…</div>
```

The value names the real thing whose edge it is. If you cannot write it without
inventing a noun, you have found a box that should not exist — delete the border,
not the attribute.

Artifact planes are the only bordered things on a stage. Not cards, not "content
blocks", not the items of a list, not the nodes of a diagram, and not a frame drawn
around a figure to tidy it. **A section field is not a border** — see
`archetypes.md`.

### The three ways figures fail

Each is already forbidden above, and each keeps happening, because all three
produce something that *looks* finished. Check for them by name.

**Boxed argument.** Bordered cells holding concepts — roles, principles, stages,
disciplines. The border implies an object boundary where there is only a category.
Delete every border; let position and rules carry the structure.

**Diagram of the sentence.** Shapes arranged to illustrate a claim rather than
measure it: items converging on a circle, arrows between labels, a hub and spokes.
The tell is that **nothing in it is to scale and nothing is positioned by a
value.** Find the quantity or the order the claim rests on and draw *that* — or
accept the content is a list and use `list`, which is not a defeat.

**Redundant series.** Rows that are all identical. See the exception rule in §1: draw
the shared pattern once and only the departures.

### Hold one grammar

Pick a shape vocabulary and never vary it for visual interest. A serviceable
default: **square** for a system or quantity, **circle** for a person or an anchor,
**line** for sequence or measurement. The same shape means the same thing on every
stage in the deck.

This is why a list marker is never a square: square already means
system-or-quantity, and a bullet is neither. Five identical evenly-spaced squares
beside five labels is a list wearing square bullets — and if the count is the point,
draw it as a count (grouped, clustered, massed), not as a column.

### Axes are drawn, not implied

**A timeline without a line is not a timeline.** Any time or scale axis is an actual
line with its bounds marked, present at reveal 0, with stations landing on it. A
column of dates with no axis is a list wearing a chronology's clothes — if that is
what the content is, use `list` and stop pretending.

**An axis whose marks all fall in the first tenth is not measuring anything.**

**No two pieces of placed text may overlap.** Inside SVG there is no layout engine:
every label sits where its coordinates put it, nothing pushes anything aside, and
two labels written by two different parts of your code will happily occupy the same
pixels. This is checked mechanically, and it catches the case reasoning misses — not
two station labels crowding, but an axis label and a direction caption that were
never considered together because they came from different lines of code. Place
every label against the ones already on the canvas.

**Spacing is governed by the annotated mark, not the mark.** Two dots 4% apart are
fine; two *labelled* stations 4% apart collide, because the label is far larger than
the mark. Adjacent labelled stations need at least the height of a label between
them. If real values crowd, you have four honest options — split the axis from the
quantity (below), break the axis with an explicit marked discontinuity, drop true
scale and space evenly with values labelled, or change the bounds so the cluster
fills the axis. Never let them clump at one end.

**Geometric data: split the axis from the quantity.** Anything that halves or
doubles per step crowds no matter where you break it, because one discontinuity
cannot rescue a series that compresses at *every* step.

The move that works: make the **axis categorical** — one step per octave, per
decade, per generation, evenly spaced with every station drawn — and let the **drawn
quantity carry the geometry**, each bar at true scale. The halving becomes something
the audience sees rather than something the axis claims, the smallest bar is allowed
to nearly vanish (that vanishing is usually the point), and no two labels can
collide because spacing is fixed by category, not value.

State the arrangement in the basis: *"Bars are true scale; the axis steps one octave
per station, so equal spacing here is a halving."* Without that sentence the figure
looks like a linear axis that has been fudged.

### Magnification: showing a detail that true scale hides

"Artifacts get edges" and "everything visible in the final state" collide whenever
an artifact's telling feature is a tiny fraction of it. Drawn true to scale the
evidence is invisible; drawn larger the artifact is a lie. Technical drawing solved
this — use its vocabulary:

- **Detail callout** — a ring or rectangle on the whole artifact marking the region,
  and an enlarged view beside it. The two are tied by drawn envelope lines from the
  marker to the enlargement, never by proximity. **State the factor** (`×4`) in the
  meta register. One callout per figure.
- **Break mark** — a pair of interruption marks removing uninteresting length so the
  rest can be drawn larger. The removed length is declared; the object's stated
  dimension remains the true one.
- Neither device changes the artifact's own scale. The whole stays true; the detail
  is quoted at a declared magnification beside it.

### When the internal geometry is unsourced

Magnification answers *too small to draw*. It does not answer *not in the sources*.
If an artifact's internal structure is not in the material you were given — a
cross-section, a mechanism, an interior arrangement — **draw the measurable relation
instead, and say in the basis that the mechanism is not drawn because it is not
sourced.**

A plausible mechanism is the most dangerous figure available: it is precise,
confident, and unfalsifiable by the audience. Solving its geometry from first
principles does not make it sourced. If your derivation contradicts a sourced
dimension, that is the signal — stop, and draw what the source measures.

### Draw declared absences

If the source says a baseline, a count, or a comparison **does not exist**, the
figure shows the void where it would be. Never silently omit it, and never
substitute a proxy that looks like data.

This is the honest counterpart of "never invent a number," and it is easy to miss
because omission feels neutral. When a section's actual finding is *"there is no
clean baseline, so the evidence is scope covered rather than a multiplier,"* a
figure that quietly drops the missing baseline has removed the finding and kept the
decoration.

---

## 4. The tests

Run these on every figure before moving on.

**Show, don't tell.** Every number and finding stated in words must be *drawn*
somewhere. A sentence may *close* what the drawing shows; it may never *substitute*
for it.

**Tiles vs. structure.** A regular arrangement of same-styled cells is a defect
*when its arrangement carries no information*. **If position means something it is
structure; if position is just packing it is tiles.**

**One dominant element.** Squint. Something must visibly dominate.

**Deletion check.** Describe the figure without naming its subject: "four boxes in a
grid." If that fits a hundred other decks, it fails.

**Open composition.** For every box, border, and background block, name the real
thing whose edge it is.

**Not a legend.** If a text column beside a figure re-lists what the figure already
labels, the column is a legend and the beat is padded. The text carries what the
figure cannot: the consequence, the caveat, the *so what*.

**Attach annotations mechanically.** Every note connects through exactly one of two
mechanisms: a rail *beside* the figure with drawn leaders (hairline, one elbow
maximum, both ends on deliberate anchors), or numbered marks — the same number on
the drawing and on the note, in matching order. **Proximity alone is never a
connection.** Cap it at three notes per figure.

**Articulate counts.** Repeated marks standing for a real count above seven cluster
in fives. A field standing for scale rather than an exact count doesn't cluster —
say so in the basis.

**Declared measurement systems.** Inside SVG there are no px or rem literals to grep
for; the risk is a `viewBox` unit that means nothing. **Give the viewBox a real
unit** — a millimetre of the actual object, a second, a count — derive one constant
from it (a hairline as a fraction of that unit), and express every other dimension
as a fraction of the figure's width or height.

A chart legitimately carries **two** systems: a positional one placing the
categories and a metric one sizing the quantities. That is fine, and the
geometric-axis move depends on it. What is not fine is two *metrics* in one
dimension, or an undeclared system. Name each system once and hold it.

**Label sizing inside SVG.** The §3 ladder is in `vh`; SVG text is in viewBox
units. Convert once, explicitly: `desired_vh × viewBoxWidth ÷ columnWidthInVh`.
Do not eyeball it, and do not let figure labels drift off the ladder because the
body-style check ignores the meta register.

**Anchoring.** For a figure you generate, place annotation anchors **analytically in
the figure's own coordinate space**. Measure the DOM only for artifacts you did not
draw, and there use the offset chain rather than `getBoundingClientRect`. SVG
elements have no offset chain; do not try.
