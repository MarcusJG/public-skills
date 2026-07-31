# Verify

Read before declaring the deck finished.

---

## 1. Run the verifier

```
node verify-deck.mjs deck.html
```

It needs Playwright. It searches the working directory and every ancestor, so in a
monorepo **run it from the package that owns Playwright** — not the repository root.
Otherwise: `npm i playwright && npx playwright install chromium`.

`--json` emits machine-readable output. `--help` lists exactly what it checks; that
list lives in the script so it cannot drift from the code, and this document
deliberately does not duplicate it.

**Fix everything it reports as FAIL. Look at everything it reports as REVIEW, then
decide** — REVIEW findings are heuristics, and some are correct to accept. Record
which ones you accepted and why.

**Read its notes, not only its findings.** It reports what it *could not* check — a
missing `MODE`, a missing `data-archetype`, a figure with no `data-relationship`,
absent `.claim` landmarks — and each of those silently disables a real gate. **A
deck that passes with density, fill, and relationship unchecked has not been checked
for the defects those gates exist to catch.**

Then run it again, because the fix loop is where most of the work in this format
actually is.

## 2. Still look at it

The verifier does not replace looking. Serve the file, walk it from the keyboard,
and view it at 1280×720, 1920×1080, **and a MacBook-shaped window (~16:10)** —
720p is the binding case for the vertical budgets, and the 16:10 ratio is where
wrap-driven failures live, because vh-sized type meets a narrower measure there. Rendering defects the DOM cannot see need eyes: an SVG circle drawn as
an oval, text that visually collides while its boxes do not, a stage that is simply
unbalanced, a figure that is technically correct and says nothing.

---

## 3. The judgement checklist

Everything here is something no check can decide. Mechanical rules are not repeated
— they have executable checks, and restating them creates two sources of truth that
drift.

**The argument**

- [ ] Read only the claims, top to bottom. Does the deck's argument hold on its own?
- [ ] Does every beat earn its stage, or is one there because the source had a
      heading there?
- [ ] Walked the coverage ledger claim by claim: **would a reader who saw only this
      beat draw the same conclusion as a reader of the source paragraph?** The
      reasoning paragraphs especially — that is where loss concentrates.
- [ ] Is everything dropped from the source dropped **on the record**, with a reason?
- [ ] Does the ledger describe the file you built, or the file you intended?

**Selection**

- [ ] Was every source passage run through the figure probes, or did some become
      text by default?
- [ ] Is any beat a `brief` that had a real relationship available?
- [ ] Did any item inside a set deserve promotion to its own figure beat?
- [ ] Is any archetype forced — used because the model offered it rather than because
      the content is that shape?

**Figures**

- [ ] Is every figure honest? Does anything imply a precision the source does not
      support, or a mechanism you derived rather than read?
- [ ] Does each figure survive the deletion check — described without its subject,
      is it still distinctive?
- [ ] Does each figure have a subject you can name in one phrase, and does the
      accent mark it?
- [ ] **Does every spatial metaphor run the way its words claim** — floors below
      ceilings, upstream before downstream, growth upward, the gap where the
      absence is?
- [ ] **Does each figure commit to its stage** — quantities at mass, ink filling
      its region — or is a correct relationship drawn at the weight of a footnote?
- [ ] **Is any mark a badge?** Thick rings, slashes, checks, pictograms — icon
      vocabulary at icon weight, imported onto an instrument. The census catches
      filled badges; composite stroked ones need eyes.
- [ ] **Is any region drawn as a mass?** Bands, windows, and sides of a boundary
      are tints with hairline edges, not slabs of fill.
- [ ] Is any text column beside a figure acting as its legend?
- [ ] Is any declared absence in the source drawn as an absence, rather than quietly
      omitted?

**Words** (`content.md`)

- [ ] **Read the verifier's printed claim list as a table of contents.** Can a
      reader find any topic from the list alone, and does the list still carry the
      argument?
- [ ] Does any claim need its body to decode — clever first, informative only
      after?
- [ ] Is any finding-beat wearing chapter-card voice?
- [ ] Was anything demoted to a basis note to make a beat fit?

**Colour**

- [ ] The squint test (`SKILL.md` §4): chapter card, densest beat, one figure, both
      themes, thumbnail size — is the accent findable in a second, and do the two
      themes read as two designs?

**Composition**

- [ ] Squint at each stage. Does something dominate?
- [ ] Do co-present things look registered — measuring **ink**, not boxes?
- [ ] Does every field have genuinely different kinds of content on each side, or is
      it a value change for its own sake?
- [ ] At 720p, does anything crowd that was comfortable at 1080p?

**Choreography**

- [ ] Does each beat's reveal order follow the order its content argues in?
- [ ] Does each figure's last reveal land on the point, rather than on something
      incidental?
- [ ] Is the reveal count anywhere hand-authored rather than derived?

**The whole**

- [ ] Step through it once end to end, from the keyboard, as a reader would.
- [ ] Open it once from a backgrounded tab and confirm reveals still animate.
- [ ] Export to PDF and read it as a document. In `standalone` that is the real
      artifact, and it is the fastest way to find a beat that only works when
      someone is talking.

---

## 4. Hand it over

Report, alongside the file:

- Which references you opened, and at what point.
- Where these documents were ambiguous, contradictory, under-specified, or wrong.
- What you invented because nothing covered it.
- Which REVIEW findings you accepted, and why.
- Anything in the source you could not carry, and what a reader loses by it.
- Any constraint you found with only one end — a ceiling and no floor, or the
  reverse. That is a specification gap and it is the most useful thing you can
  report.
