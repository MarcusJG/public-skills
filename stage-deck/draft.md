# Narrative drafter

A working session with the user that produces a **deck spec** — before the build
spends an hour rendering decisions that take minutes to change in conversation.
This is a second entry point to the stage-deck skill: it shares the reference
files and writes a spec the build treats as authority. It builds nothing.

**Read before the session:** `figures.md` §1–2 (selection, the catalogue),
`content.md` (the claim contract), and the archetype selection table in
`SKILL.md` §1.

---

## Session mechanics

- **Everything happens in the chat, as prose.** Never use a question UI, form
  widget, or multiple-choice tool — no AskUserQuestion, no pickers. Ask in plain
  text and take answers in plain text. The user redirects, half-answers, and
  reasons in prose; a picker forecloses exactly the answers this session exists
  to surface.
- **One question at a time.**
- **Recommend first, then ask.** Every question arrives with your recommendation
  and the reason for it. The user confirms, overrides, or says "I don't know."
- **"I don't know" is an answer.** Log it as an open question with an owner, mark
  the item provisional, move on. Never resolve an unknown by picking silently.
- **Batch trivial confirmations; grill only where judgment lives** — audience,
  thesis, drops, departures, contested points. Spend the user's attention on what
  they alone know.
- **Never ask the user what the source says.** You read it; you bring the map. A
  drafter that makes the user recite the document is broken.
- **Stages lock in order.** Mode → thesis → arc → beat maps → beats. Revisiting a
  locked stage is allowed — but restate what the change breaks before making it.
- **Two vocabularies, never mixed.** Archetypes come from `SKILL.md` §1's
  selection table and nowhere else; `data-relationship` values come from
  `figures.md` §2. "This beat is a threshold figure" names a relationship — its
  archetype is still `split`, `axis`, or another §1 name. Writing a relationship
  into the archetype slot is the most common spec defect.
- **Claims are drafted to `content.md`'s character budget** (~55–62 standard,
  ~42–46 statement). Claim length is a content constraint the session owns — a
  claim locked over budget is unbuildable, and the builder will have to break
  what you agreed.

---

## Stage 0 — Ground

- **Sources supplied:** read them fully. They are the authority; do not research
  past them (`SKILL.md` §0 source rules apply to you too).
- **Ask for constraints before recommending within them.** The palette question
  is "what brand context is this deck in?" — not a colour recommendation that a
  brand answer then overrides. The same shape applies to any question where the
  user may hold a constraint you cannot see: constraint first, recommendation
  inside it.
- **Topic only:** research it. Verify every figure that may reach a stage; keep a
  source log — it travels into the spec.
- Bring back a one-paragraph reading of the material, then ask the framing
  questions: **who reads this deck, and in what mode** (`standalone` /
  `presented`)? Palette directive, if any. Foot-slot content, if any.
- **Lock mode first.** Every later budget hangs on it.

## Stage 1 — Thesis

- Propose **one thesis** — the sentence the deck exists to land — with your
  reasoning, and name the one or two rival theses the material supports and why
  you did not pick them. The user chooses or redirects.
- A deck without a thesis is a summary. Do not proceed without one.
- The thesis test governs the rest of the session: *every chapter advances it;
  every beat serves its chapter.*

## Stage 2 — Arc

- Propose the chapter sequence whole — names, one line each on what it
  establishes, and **where the turn is**: the moment the deck stops establishing
  and starts arguing. The user reacts to a shape, not a list.
- Propose here, on the record, **what the deck will not carry** — sections
  dropped, with reasons. Dropping is a thesis decision, and this is where it is
  cheap.

## Stage 3 — Beat map, per chapter

- For each chapter: the beats in order — working claim, proposed archetype, one
  line on what each carries.
- This is where density is decided: which source sections merge, which reasoning
  paragraph gets a full stage, which list item is promoted to its own figure
  beat (`figures.md` §1).
- Lock each chapter's map before opening the next.

## Stage 4 — Beat by beat

**Bring only what is genuinely unresolved.** Most beats settle their claims,
figures, and captions during the chapter maps — batch those straight into the
spec and say so. A full per-beat pass at one question per turn either duplicates
Stage 3 or costs a turn per beat; the stage exists for the residue. For each
unresolved item, bring a complete recommendation and confirm or tighten it
together.

- **The claim, drafted to the `content.md` contract** — subject + finding, the
  source's terms, front-loaded noun. Real claims now, not placeholders: the
  claim list is the spec's index test.
- **Figure or text**, decided by the `figures.md` §1 probes run on the passage.
  Where a figure: the `data-relationship`, the **caption sentence** — what the
  audience should *see* — and the departure the accent will mark. A figure whose
  caption sentence cannot be written dies here, at the cost of a sentence.
- **What the beat carries and what it drops**, in ledger form.
- Unknowns: open question, owner, beat marked provisional.

## Stage 5 — Read-back and handoff

- **Print the full claim list in order and run the index test with the user** —
  the two-minute read of the whole deck, at the moment it is cheapest to change.
- Write the spec file beside the future deck: `<deck-name>-spec.md`.

---

## The spec file

```
# DECK SPEC — <name>
mode: standalone | presented
audience: <who reads it>
palette: <directive, or "builder's choice">
thesis: <one sentence>

## Arc
<chapter> — <what it establishes>        (one per line; mark the turn)
DROPPED: <section> — <reason>            (one per drop)

## Beats
### <beat-id> · <chapter>
- claim: <the drafted claim>
- archetype: <proposed>
- relationship: <from the catalogue>     (figure beats only)
- caption: <what the audience should see>(figure beats only)
- departure: <what the accent marks>     (figure beats only)
- carries: <source claims this beat holds>
- drops: <what it lets go, and why>
- open: <question — owner>               (only if unresolved)
- provisional: <verification bar>        (weak-sourced beat: name the sources
                                          that clear it; on failure the beat is
                                          CUT WHOLE, never softened)

## Sources
<verification log — topic mode only>
```

**Header rule, verbatim in every spec:** *This file records intent. Arrangement,
reveal counts, and fit are build-time facts; the builder may split, merge, or
re-archetype a beat and must record every deviation in the built ledger.*

## What this skill must not do

- **No geometry.** No vh, no column counts, no fill promises, no reveal counts.
  The region budget is a build-time fact; word-wrap decides what fits, and a spec
  that pretends to know makes the builder fight constraints the plan could not
  see. Archetypes are proposals.
- **No building.** The session ends at the spec file.
- **No silent research past supplied sources**, and no unverified figure in the
  spec.
