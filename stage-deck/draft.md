# Narrative drafter

A working session with the user that produces a **deck spec** — before the build
spends an hour rendering decisions that take minutes to change in conversation.
This is a second entry point to the stage-deck skill: it shares the reference
files and writes a spec the build treats as authority. It builds nothing.

**Read before the session:** `figures.md` §1–2 and §5 (selection, the catalogue,
explanatory diagrams), `content.md` (headlines, descriptions, and the claim
tests), and the archetype selection table in `SKILL.md` §1.

**The short path.** When the user asks for a *build* and supplies an outline or
notes, they do not want a full drafting session. Run Stage 0, Stage 1 and
Stage 5 only: those are the three gates of `SKILL.md` §0. It is four messages:

1. The first intake question.
2. The second intake question.
3. **Gate 2, in one message:** your reading of the material, the argument
   restated, the thesis with its rivals, what you doubt, any change you would
   make to the outline's arc (slides dropped, merged or moved), and what you are
   missing. It ends with one question: is this the argument?
4. **Gate 3:** the headline and description list.

Take the arc and the beat list from the outline as the starting point. On this
path read `content.md` before message 3 and `figures.md` before message 4; the
other references wait for the build. Write the spec file as usual.

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
- **Stages lock in order.** Intake → thesis → arc → beat maps → beats → wording. Revisiting a
  locked stage is allowed — but restate what the change breaks before making it.
- **Two vocabularies, never mixed.** Archetypes come from `SKILL.md` §1's
  selection table and nowhere else; `data-relationship` values come from
  `figures.md` §2. "This beat is a threshold figure" names a relationship — its
  archetype is still `split`, `axis`, or another §1 name. Writing a relationship
  into the archetype slot is the most common spec defect.
- **Headlines and descriptions are drafted to the budget in `SKILL.md` §2**
  (standalone: a headline of up to about 110 characters and a description of up
  to about 330). Length is a content constraint the session owns — wording
  locked over budget is unbuildable, and the builder will have to break what you
  agreed.
- **When the user says "don't start", "tell me your take", or "how would you
  phrase this"**, answer in prose and change nothing. Restating what you
  understood, and being corrected, is the cheapest step in the whole process.
- **The user's sentences are direction, never copy.** Do not put their phrasing
  into a headline. Work out what they mean and write it for the audience
  (`content.md` §2).

---

## Stage 0 — Intake and ground

**Ask the two intake questions first, one at a time, each with your
recommendation.** They set `MODE` and `STEPS`, and every later decision hangs on
them.

1. *"Will people read this deck on their own, or will someone present it live?
   I'd build it to be read on its own, because …"* Give the reason from what
   you actually know about the deck; do not presume a fact the user has not
   stated. Read alone, forwarded, or sent ahead of a meeting is `standalone`. Only a
   deck that exists purely as a backdrop to a talk is `presented`. If the answer
   is "both", it is `standalone`.
2. *"Should each slide show complete, or build up in steps as you click? For a
   deck people read themselves I'd show each slide complete."* Steps suit a
   presenter who needs the room looking at one part at a time. They cost a
   reader a click per step.

Then the constraints and the material. **Brand context and foot-slot content are
needed before drawing, not before wording**: ask for them inside the gate 2
message, as items the user can answer when convenient, never as a turn of their
own.

- **Ask for constraints before recommending within them.** The palette question
  is "what brand context is this deck in?" — not a colour recommendation that a
  brand answer then overrides. The same shape applies to any question where the
  user may hold a constraint you cannot see: constraint first, recommendation
  inside it. Foot-slot content, if any.
- **Evidence supplied:** read it fully. It is the authority on facts; do not
  research past it (`SKILL.md` §0 source rules apply to you too).
- **An outline or notes supplied:** read it as a draft. Before you bring it
  back, run the claim tests in `content.md` §2 on every claim and mark the ones
  that fail. An outline is often a first pass, and often written by a model: it
  can state the wrong problem fluently.
- **Topic only:** research it. Verify every figure that may reach a stage; keep a
  source log — it travels into the spec.
- **An outline written for a talk, built to be read alone:** its speaker points
  have no speaker. Treat each as a candidate for the slide and say which you
  would promote and which stay for conversation.
- **Numbers quoted in an outline whose source was not supplied:** carry them as
  given, say they are unverified, and ask for the source. Never adjust one.
- **A newer draft or a built deck beside the file you were given:** say so and
  ask which is current. Do not switch on your own. A request to change a deck
  that already exists is `review.md`, not a new build.
- Bring back a one-paragraph reading of the material **and the list of what you
  doubt in it.** Sort the doubts: lead with the few that would change the
  argument, keep wording-level ones for gate 3 and say that you are holding
  them, and list separately what is missing (evidence, screenshots, status). A
  doubt is not a question. State what you would do about each, and ask one
  question at the end.

## Stage 1 — Thesis

- Propose **one thesis** — the sentence the deck exists to land — with your
  reasoning, and name the one or two rival theses the material supports and why
  you did not pick them. The user chooses or redirects.
- **Say what the deck is for, apart from what it says:** what the audience
  should think or do afterwards, and what the deck must not do (ask for
  something that belongs in conversation, dwell on evidence the audience can
  read elsewhere). A thesis agreed without its purpose produces slides that
  argue the wrong thing well.
- **This is gate 2.** Restate the argument in your own words — the restatement
  itself in under ten lines; the thesis, rivals and doubts sit around it — and
  wait for a plain yes. If the user corrects the restatement, restate again; do not move on
  with a half-agreed frame.
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

- **The headline and the description, drafted to the `content.md` contract** —
  the headline states the point as a full sentence; the description adds the
  reason or sets up the figure and repeats nothing. Real wording now, not
  placeholders: the headline list is the spec's index test.
- **Figure or text**, decided by the `figures.md` §1 probes run on the passage.
  Where a figure: the `data-relationship`, the **caption sentence** — what the
  audience should *see* — and the departure the accent will mark. A figure whose
  caption sentence cannot be written dies here, at the cost of a sentence.
- **What the beat carries and what it drops**, in ledger form.
- Unknowns: open question, owner, beat marked provisional.

## Stage 5 — Read-back and handoff

- **Print every slide's headline and description in order, as plain text, and
  run the index test with the user** — the two-minute read of the whole deck, at
  the moment it is cheapest to change. Under each figure slide add one sentence
  on what the diagram will show.
- **This is gate 3. Nothing is drawn until the list is approved.** Expect a
  round or two here: wording changed now costs a sentence, and wording changed
  after the figures exist costs the figures.
- Before printing, run the list against `content.md` yourself: no description
  that restates its headline, no claim that is always true, no phrase lifted
  from the user's messages, no slogan.
- Write the spec file beside the future deck: `<deck-name>-spec.md`.

---

## The spec file

```
# DECK SPEC — <name>
mode: standalone | presented
steps: off | on
audience: <who reads it>
purpose: <what should be different afterwards, and what the deck must not do>
palette: <directive, or "builder's choice">
thesis: <one sentence>

## Arc
<chapter> — <what it establishes>        (one per line; mark the turn)
DROPPED: <section> — <reason>            (one per drop)

## Beats
### <beat-id> · <chapter>
- claim: <the agreed headline>
- description: <the agreed description>
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
