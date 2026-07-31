---
name: stage-deck
description: Plan and build standalone single-file HTML presentation decks — evidence-first stages, structured dense text, and figures that draw their argument. Use when asked to draft, plan, or build a deck, talk, walkthrough, retrospective, or presentation as HTML rather than slides. Drafting is an interactive session with the user that produces a deck spec; building renders the deck.
---

# Stage deck

**Two entry points.** Asked to *draft* or *plan* a deck with the user, follow
`draft.md` — an interactive session that produces a deck spec, and builds
nothing. Asked to *build*, follow this file; where a spec exists, §0 makes it
the authority.

Produce a presentation as **one self-contained HTML file** — no build step, no
framework, no network requests. One file, because the output has to be portable:
forwarded, opened off disk, printed to PDF.

The audience surface renders **zero chrome**: no controls, no progress text, no
labels about the mechanics. Every reveal is **presenter-owned**: nothing moves on
a timer, nothing moves on scroll.

**Text on a stage is scanned, not read.** That is the governing constraint, and it
is not the same as "no text." A stage may carry a great many words if they are
structured so the eye parses them without reading linearly.

**How much text is a decision, not a default** (§1). Building a standalone deck to
narrated budgets is the failure that reads as *vacuous* — every rule obeyed, the
argument still absent.

---

## 0. Working method

This is a specification, not a template. Meeting it takes several passes; a
single-pass draft will not get there. Budget for it: a deck of this standard costs
most of its effort in the verify-and-fix loop, after a complete draft exists.

**Read this file completely before writing anything.** Then open each reference at
the moment its gate fires. The references are not appendices — they carry the
detail this file only names, and a step taken without its reference reliably fails
a check.

| Before you… | Read | Because |
|---|---|---|
| Choose what becomes a figure, or draw anything | `figures.md` | Selection is a procedure, not taste. Skipping it produces boxed arguments, timid drawings, and charts that draw one fact ten times. |
| Write any claim, heading, or body text | `content.md` | Claims are the deck's index. Written by instinct they come out as pithy phrases a reader cannot navigate by. |
| Build any beat | `archetypes.md` | Ratios, budgets, column balance, and field/band rules are exact numbers, not judgement. |
| Write the reveal logic | `choreography.md` | Reveal order is argument construction. The default — append the next block — is a choice you should make deliberately, not inherit. |
| Write the scaffold, or debug a layout | `build.md` | The traps here are silent: a dead reveal, a clipped figure, a margin unit that only fails at 720p. |
| Declare it finished | `verify.md` | Run the verifier, then the judgement checklist it cannot attempt. |

**Decide, don't ask.** Where these documents are silent, make the call your
judgement supports and record it. A stalled deck is worse than a documented
invention.

**Don't force the model.** If an archetype has no honest home in the material,
leave it unused and say why. A forced beat is worse evidence than a missing one.

**Report what fought you.** When you hand the deck over, list where these
documents were ambiguous, contradictory, under-specified, or wrong, which
references you opened, and what you invented because nothing covered it. That list
is worth as much as the file.

### Sources

**Where source material is supplied, it is the authority.** Build from the
documents you were given, keep their figures and terminology, and do not research
past them. If the deck needs something the sources do not contain, say so and
leave a gap rather than filling it from general knowledge — a plausible invention
beside sourced material is the worst outcome available.

This includes **a figure's own slots.** Filling a diagram with plausible example
items while the sourced sentences the beat was built to carry go unused is the same
defect as inventing a statistic, and harder to spot because the figure looks
finished. If a figure needs five items and the source gives two, draw two.

**Where no source is supplied, verify before you use.** Search for any figure,
date, quantity, or specification going on a stage. Prefer a claim you can source
over a striking one you cannot. Present contested evidence as contested rather
than resolving it for tidiness. Never invent a number. A deck's authority dies at
the first figure a viewer knows is wrong.

**Where a deck spec is supplied** (`<deck-name>-spec.md`, produced by the drafter
in `draft.md`), **it is the authority on thesis, coverage, claims, and figure
intent** — the same standing as source material. The spec records intent, not
geometry: you may split, merge, or re-archetype a beat where the region budget
demands it, and every deviation goes in the built ledger with its reason. The
verifier prints the spec-vs-built delta; an unexplained drift is a defect.

### The coverage ledger

**Build it from the source before any HTML.** List the load-bearing claims — every
assertion, table, and qualification a reader would notice the absence of — and map
each to the beat that will carry it. Keep it in the file as a comment above
`BEATS`:

```
COVERAGE  (source: retrospective.md)
  §"Who owns the design system"  → design-system   full argument, incl. the why
  §"Fidelity is many measures"   → fidelity        all 7 measures, both media
  §"The efficiency question"     → efficiency      no-baseline caveat kept
  DROPPED: draft-status preamble — front matter, not argument
  DROPPED: the two Storybook URLs — live links, useless on a stage
```

**Beats follow the region budget, so write the ledger in two passes.** Map claims
to candidate beats first, then build, and expect the fill floor and the figure
selection in `figures.md` to restructure what you mapped — a passage may merge into
a neighbour, or one bullet may earn its own figure beat. Rewrite the ledger to
match what you built. A ledger that describes your intentions rather than the file
is worse than none.

**Check coverage per claim, never in aggregate.** A whole-deck word count against
the source looks like a useful ratio and is not one: tables, lists, and
enumerations transcribe at nearly 100% because they are already stage-shaped, and
they pad the total high enough to hide the real loss. A deck can sit at
three-quarters of its source's words with the argument gutted.

The loss concentrates in one place: **source paragraphs whose payload is reasoning
rather than enumeration.** They have no table or list to anchor them, so
compressing them feels like editing rather than cutting. They are usually the
passages the document was written to make.

So walk the ledger claim by claim: **would a reader who saw only this beat draw the
same conclusion as a reader of the source paragraph?** Not "is the topic present."
A reasoning paragraph reduced to two labelled cards is the archetype choice
failing, not the budget.

---

## 1. The content model

A deck is an ordered array of **beats**. Every beat declares exactly one
**archetype**, which owns its structure, and carries zero or more **reveal steps**.

```js
const MODE = "standalone";        // or "presented" — governs every text budget
const BEATS = [
  {
    id: "opening",                // stable, URL-safe
    chapter: "Opening",           // groups beats for the rail
    kicker: "Opening · framing",  // mono locator, top-left
    archetype: "statement",
    // ...archetype-specific fields
  },
];
```

### Density mode

| Mode | The deck is | Density |
|---|---|---|
| `presented` | A backdrop. A presenter carries the argument; the stage carries evidence. | Conversational budgets |
| `standalone` | The document. A reader with no presenter must get the whole argument from the file or a PDF of it. | Dense budgets; `brief` and `split` available |

This governs text budgets, available archetypes, and the fill floor. Declare it
before writing any beat. Exact numbers: `archetypes.md`.

### Choosing an archetype

**Select by the relationship the content has, not by how much of it there is.**
Volume is roughly constant across an executive document, so selecting by volume
collapses everything into one archetype. Ask what the passage *is* before asking
how big it is.

| The content is | Archetype |
|---|---|
| A chapter boundary | `chapter` |
| One assertion, with its condition or consequence | `statement` |
| An artifact under discussion | `stage` |
| Two states and the delta between them | `compare` |
| One quantity worth its own stage | `number` |
| An ordered or causal progression | `sequence` |
| A matrix whose two axes both mean something | `grid` |
| An unordered set of comparable one-line items | `list` |
| Reasoning whose sentences depend on each other | `prose` |
| A section with several qualified points, or 2–3 parallel tracks — the residual | `brief` |
| A figure with its argument beside it | `split` |
| A figure and a full argument at equal weight | `panel` |
| A linear relationship needing the full measure | `axis` |

**Anything drawable is a figure first.** Before assigning a text archetype, run the
selection procedure in `figures.md`. A passage with a drawable relationship becomes
`stage`, `compare`, `number`, `sequence`, or `split` — and one item inside a set may
be promoted out of it to become its own figure beat.

**`brief` is the residual, not the workhorse.** It is where content goes when no
relationship fits. Reach for it last. If most of your deck is `brief`, the
selection step did not happen — the beats have different relationships being
flattened into one shape.

### Rules that make the model work

- **No generic fallback.** A taxonomy, a role list, and a finding list must not
  render through the same component.
- **A reveal adds one idea.** Two consecutive states differ in one localized
  region. If you cannot point at the single thing that changed, split the reveal.
- **Reveal count is derived, never hand-authored** — it is a function of the
  beat's own reveal-bearing array. Compute it.
- **A basis note is optional on every archetype.** Add one only where the body
  genuinely needs qualifying.

---

## 2. Stage anatomy and the vertical budget

One anatomy holds for every beat, so a cut from any beat to any other never shifts
shared furniture. Archetypes are *arrangements within* this grid.

```
┌─ rail (fixed, left) ─────────────────────────────────────────────┐
│  ▪ kicker                                          5.5vh          │
│                                                                   │
│  ── claim, one or two lines, starts at 13vh ──                    │
│                                                                   │
│     [ body region — content CENTRES and FILLS this box ]          │
│                                                                   │
│  basis note, full stage width, when present        87.5vh         │
│  ──────────────────────────────────────────────────────────────  │
│  ▪ open slot                                       94.5vh         │
└──────────────────────────────────────────────────────────────────┘
```

- **Root:** `height: 100dvh; overflow: hidden` on **both `html` and `body`**. A
  deck never scrolls.
- **The stage root declares its beat's archetype:**
  `<main class="stage" data-archetype="brief">`. One attribute, and it is how
  anything outside the render function — the verifier, a stylesheet, you reading
  the DOM — tells a deliberately sparse `statement` from an under-filled `brief`.
- **Margins are in `vh`, never `rem`.** `--edge-l: 12vh; --edge-r: 7vw`. A fixed
  unit inside an all-`vh` system changes the measure between resolutions: `8rem`
  is 11.9vh at 1080p and **17.8vh at 720p**, which narrows the measure, adds line
  wraps, and overflows beats that fit at 1080p.
- **720p is the binding case.** Every budget in these documents closes at
  1280×720 first. Check there before 1920×1080.

### The budget

| Region | Occupies |
|---|---|
| Kicker band | `5.5vh` → `~7.5vh` |
| Claim block | `13vh` → claim end |
| **Body region** | claim end → `87.5vh` (or `94.5vh` with no basis) |
| Basis note, when present | `87.5vh` → `94.5vh` |
| Foot | `94.5vh` → `100vh` |

`--claim-top` is measured from the top edge of the stage; `--kicker-band` is that
band's **bottom edge**, not the kicker's text height. With the kicker as an in-flow
sibling the claim's offset is `calc(var(--claim-top) - var(--kicker-band))` =
`5.5vh` — the gap between them, not the claim's position. Naming `--kicker-band`
after the text is what makes this arithmetic go wrong.

**A claim is never more than two lines.** That rule is what makes the budget close,
so check it first. **In characters that means ~55–62** at the 32ch cap, and
**~42–46** at the statement's 24ch cap — the constraint the two-lines rule
actually imposes. Count characters, not lines, when drafting.

**The body never drops below 45vh.** If it would, the claim is too long or the beat
is too full — split it. Never solve an overflow by shrinking type below the ladder.

`chapter` is exempt: it centres its own block. `number` has no claim block — its
value is a display element inside the body. Both still carry the kicker, foot, and
rail: shared furniture never disappears, or cutting to a chapter card shifts the
frame.

### The meta frame

- **Kicker, top-left**, locates the moment: `Chapter · facet`.
- **Basis note** spans the **full stage width** — reference material, not reading
  matter, and a narrow measure makes it three lines deep for no benefit. Over two
  lines at full width means it is too long: cut it.
- **Foot** carries an **open left slot** — empty by default, available for a
  confidentiality mark, client name, or date — and `NN / TT` right. One deck-level
  string, not per-beat. Empty reserves no space.
- **The chapter is named in the kicker and never repeated in the foot.**
- **The foot hairline draws only where there is content beneath it.**
- Both are `aria-hidden` and `pointer-events: none`.
- **Progress rail:** fixed left, vertically centred, grouped by chapter. Segment
  length falls off with distance; `max(0.8vh, 3.2vh − 0.3vh × distance)` works.
  The current segment fills with reveal progress.

---

## 3. Type: one ladder, six steps

**Size everything in `vh`.** The deck is laid out for 1080p/16:9 projection; a
washed-out projector is the test, not a retina laptop.

This is a **ladder, not a palette.** Exactly two body sizes, and every body role
maps onto one of them.

| Step | Size | Used for |
|---|---|---|
| **Display** | `26vh` chapter index · `30vh` number value | The one oversized element on a stage |
| **Chapter title** | `8.5vh` | Chapter cards only |
| **Claim** | `9vh` statement (max `24ch`) · `5.8vh` all others (max `32ch`) | The beat's assertion |
| **Lead** | `2.9vh`, max `44ch`, line-height `1.45` | Column headings, list items, prose, sub-heads, finding labels, support lines, annotation headings — the primary body level |
| **Detail** | `2.1vh`, max `52ch`, line-height `1.5` | Column bodies, grid cells, group items, annotation bodies, dense reference content — the secondary level, and the floor |
| **Meta** | `1.8vh` mono, tracking `0.14em`, uppercase · `1.6vh` basis | Kicker, foot, units, axis labels, state labels, basis notes |

**At most two body styles in the body region of any stage** — one Lead, one Detail.
Display, meta, and the claim don't count. Three sizes within a few tenths of a vh
read as inconsistency, not hierarchy: the Lead/Detail ratio is ~1.4 precisely so
one step is unmistakable. A dense beat gets no third size for a sub-sub-head —
nest with indent and colour, or don't nest.

Differentiate *within* a step by weight or colour, never by inventing a size.
`--ink` Lead against `--dim` Detail is a complete hierarchy.

Measure caps are in `ch` so line length holds as type scales. **Never justify
text**; ragged right everywhere.

**Geometry terminates.** Every drawn line ends at a mark or a declared edge. No
line crosses a mark or another line.

---

## 4. Colour: slot contract

**This skill ships no colour values.** Fill these slots with the brand palette.
Every derived tone mixes from the slots — no raw hex outside `:root`.

| Slot | Role |
|---|---|
| `--paper` | Stage ground |
| `--ink` | Primary text and strong marks |
| `--dim` | Secondary text |
| `--surface` | Artifact plane |
| `--line` | Artifact and container borders |
| `--accent` | The departure (below) |
| `--blackout` | Blackout ground — **true black in both themes** |

```css
--hair:  color-mix(in srgb, var(--ink) 16%, transparent);  /* hairlines, rules */
--faint: color-mix(in srgb, var(--ink) 44%, transparent);  /* de-emphasised marks */
--ghost: color-mix(in srgb, var(--ink) 10%, transparent);  /* absent / empty state */
--fill:  color-mix(in srgb, var(--ink) 30%, transparent);  /* inactive solid areas */
--field: color-mix(in srgb, var(--ink)  4%, var(--paper)); /* section band ground */
```

- `--hair`, `--faint`, `--ghost` are tuned for **lines and small marks**. Use
  `--fill` for an inactive solid area, `--ghost` for an empty one.
- **The `--fill` / `--ghost` pair needs area to read.** Below roughly 2vh a
  30%-vs-10% difference is invisible at projection distance — at small mark sizes
  use `--ink` against `--ghost`. Check any present/absent field at the size it will
  actually be drawn.
- `--field` self-inverts between themes because it mixes toward `--paper`. It has
  both a floor and a ceiling: visible on a washed-out projector, never competing
  with content. See `archetypes.md` for what legitimises a field at all.
- Declare a muted positive/negative pair only if the content genuinely has
  pass/fail semantics. A fill fraction often carries the same meaning for free.
- Both themes clear the same contrast floors.

### The accent marks the departure

**The accent's job is to mark the one thing that departs from the pattern** — the
exception in a series, the delta in a comparison, the boundary being crossed, the
point the audience should leave with. At most one accented element per stage.

This is not a quota to fill. It is a diagnostic: **a stage with no accent is a
stage where nothing departs from the pattern**, which is usually a sign the beat
did not need to be a figure, or that you have not found what it is about. Ask the
question rather than adding colour.

### Choosing a palette when none is supplied

The slot contract says nothing about whether a palette is any good, and every
luminance floor can be cleared by a palette that is entirely grey. When you invent
the colours:

- **The accent differs from the ink in hue, not just lightness.** Contrast ratio
  measures legibility; the accent's job is *findability*, and findability is
  chroma. A muted accent that sits tonally beside the ink marks nothing.
- **A subject-argued palette justifies the hues, never the dullness.** Deriving
  colours from the material is good practice; if the subject's own colours are
  low-chroma, the accent is where the exception is spent.
- **The two themes are two designs, not an inversion.** A dark theme made by
  flipping a muted light theme reads as the same mud twice.
- **The squint test, before anything else ships:** view a chapter card, the
  densest beat, and one figure, in both themes, at thumbnail size. If the accent
  cannot be found in a second, or the themes read alike, the palette fails
  regardless of how well it is argued.

---

## 5. Composition contracts

These govern every beat regardless of archetype, and they are the rules most often
broken by an otherwise correct deck.

The organizing idea behind all of them, and behind the verifier's method: **every
dimension a designer controls gets a ladder, and every ladder gets a census.**
Type, spacing, stroke weight, mark size, alignment edges, colour — each has a
small named set of permitted values, and the verifier counts what was actually
used against it. A value outside the ladder is not a style choice; it is an
unlegislated decision, which is where "correct" and "designed" diverge. And
every ladder has **both ends**: words needed floors, ink needed ceilings, and
each new dimension should be assumed to need both before agents optimize into
whichever side was left open.

### The space between things

Ink rules govern where marks go; these govern the space between them — the
dimension where an otherwise correct stage most often looks undesigned.

- **Every gap is a named gap.** The spacing ladder is `--gap-item` (within a
  group), `--gap-block` (between roles), `--col-gap` (between regions), plus the
  region boundaries of the vertical budget. Whitespace in the body region is
  attributable to a token or to declared centring slack. Space nobody can name is
  a defect.
- **Gaps nest monotonically.** Line pitch < item gap < group gap < role gap <
  region gutter. A sub-head sitting over its own items is *within* one role —
  that seam is `--gap-item`, not a role boundary. The seam between two roles is always visibly wider than the
  spacing inside one — a support line whose distance to the strip below equals
  its own line pitch has no seam, and the eye cannot find where one role ends.
- **Slack has an owner.** When a measure cap under-fills a track, the residue
  goes to a declared side — the figure, or the outer margin — never the gutter.
  The gutter between regions is exactly `--col-gap`, always; a wider one is
  pooled slack, which is the most common way a split reads as two unrelated
  columns.
- **Derived surfaces are per-theme and perceptible.** Every mixed surface
  declares both themes, dark mixes run higher than light ones, and a surface
  that cannot be seen at a squint does not exist. The verifier samples the
  painted values.

### Everything is visible in the final state

**A beat's last reveal shows all of its content, fully legible.** No truncation, no
clipping, no ellipsis, no collapsing to a stub, no accordion, no scroll. A reader
handed the file — or a PDF exported from it — must be able to read every word of
every beat by stepping to that beat's final state.

Progressive disclosure may **de-emphasise** what has been discussed. It may never
**take it away**. If the content does not fit when fully shown, the beat is over
budget: split it.

### Reveal 0 is a complete composition

**The structure is drawn before anything lands on it.** At reveal 0 a beat shows
its full scaffold — the axis and its bounds, the frame, the column rules, the
grid's labelled axes, the artifact — and reveals place content *into* it.

A beat whose opening state is an empty body waiting to be filled is a defect. The
audience should never look at a structurally blank stage.

Some archetypes have no scaffold separate from their content: in `list`, `prose`,
and `statement` the items *are* the structure. The contract forbids a *structurally
blank* body, not a body that opens with content. Do not manufacture a scaffold to
satisfy the rule — an empty frame around a list is exactly the boxing `figures.md`
forbids. Per-archetype reveal-0 states are in `archetypes.md`.

### A rule needs content on both sides

**A hairline separates two things.** If there is nothing on one side, do not draw
it. This applies to the foot hairline, dividers between columns, and every rule
inside a figure. A line with emptiness beneath it reads as an unfinished layout.

The foot hairline is the one constant exception: it is anchored to the
always-present `NN / TT` counter, so it does not flicker per beat.

**A field needs content of different *kinds* on each side** — the stronger sibling
of this rule. See `archetypes.md`.

### The body centres in its region

Content in the body region is **vertically centred between the claim and the basis
note** (or the foot). It does not sit against the claim with a void beneath it.

**Centring is measured on the final state.** Space for later reveals is reserved
from reveal 0 so nothing shifts as content lands, which means an early state may
legitimately show content high in a reserved box. What the contract forbids is a
*finished* beat pinned under the claim with dead space pooled at the bottom.

An artifact or drawing that genuinely fills the region occupies the box rather than
centring in it.

### The body region is filled, not just centred

Centring is about *position*; this is about *occupancy*. They are separate
contracts because a thin band of content centred in a tall region satisfies the
rule above and still reads as an empty stage.

**In the final state, the body's drawn content spans at least 75% of the available
measure width, and occupies at least this much of the region's height:**

| Mode | Fill floor |
|---|---|
| `presented` | 40% — a sparse stage is correct when a voice carries the argument |
| `standalone` | 55% — the file *is* the document; unused region is unspent argument |

For a figure, measure **drawn ink, not the SVG canvas** — a region-height `<svg>`
with its geometry in a 5vh strip is the same defect wearing a bigger box.

The remedy runs opposite to the one everywhere else, so be deliberate about which
way you are failing:

| Symptom | Meaning | Remedy |
|---|---|---|
| Content overflows the region | Over budget | Split the beat |
| Content fills under half the region | **Under-specified** | Move detail down from the source, or merge with a neighbour |

An under-filled beat is not a restrained beat — it is a beat given less than its
stage. When a finished beat cannot fill its region, the question is not "how do I
space this out" but **"what did the source say here that I left behind."** Do not
solve it by inflating type above the ladder, padding with whitespace, or stretching
a figure's canvas.

**Exemptions:** `chapter` (its emptiness is the composition) and `prose`, whose
Lead measure caps it at ~42% of the body width by arithmetic — a single reading
column at a controlled measure is the whole point of the archetype. `statement` is
**not** exempt: it gets the floor like everything else, because an archetype exempt
from both the fill floor and the word floor is a hole a third of a deck can pour
through.

### Co-present things share an alignment edge

Anything placed side by side for comparison — two artifacts, two states, two bars —
**aligns on one declared edge**, and a shared **baseline** is the default. When two
objects differ in size, a shared baseline makes the difference read as a single
vertical delta; centring them makes size and position vary at once.

**Align ink, not boxes.** An `<svg>`'s box and its first drawn mark differ by the
letterbox, so `align-items: start` on a figure beside a text column puts the text's
first glyph 3–5vh *above* the figure's first mark, and the pair reads as
misregistered even though the CSS is correct. Every alignment decision in these
documents means the ink. Measure it.

### A display element never stacks above body text

A `26vh` numeral and `2.9vh` text in the same column produce a cascade the eye
cannot navigate. **Body text sits beside a display element**, or drawn evidence
separates them. This is why `number` puts its findings next to the drawn count
rather than continuing below the value — including its own labels and marks, which
are body text too.

---

## 6. Budgets have two ends

Every budget in these documents has a ceiling and a floor, and the floors exist
because of a specific repeated failure: **a specification whose every constraint is
an upper bound makes emptiness the safest compliant choice.** Words, fill, accent,
and reveal order have all failed this way.

So when reading any constraint here, ask what the **compliant minimum** looks like,
and whether you would accept it. A 40-word beat, a stage with no accent, a figure
that draws one fact, a deck where every reveal appends the next block — each obeys
every ceiling. None is what was wanted.

If you find a constraint in these documents with only one end, that is a gap in the
specification. Say so in your report.
