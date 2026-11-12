# Review

Read when the user gives feedback on a deck that has been built.

A first build is a proposal. What follows is a conversation, and how the
feedback is taken decides whether it runs three rounds or fifteen. Every rule
here exists because the opposite cost a round.

---

## 1. Before changing anything

- **Sort the feedback first.** A comment is about the argument, the wording, a
  diagram, or the layout. Argument comments reopen gate 2 of `SKILL.md` §0 and
  wording comments reopen gate 3: settle them in prose before any slide is
  touched. Diagram and layout comments can go straight to the file.
- **When the user says "tell me your take", "don't start yet", or "how would you
  phrase this", answer in prose and edit nothing.** Say what you understood,
  what you would change, and what you would leave. Wait for the go.
- **When feedback contradicts what you had understood about the deck's purpose,
  stop and restate the purpose.** Carrying on with slide edits under a frame the
  user has just corrected produces a second round of the same feedback.
- **Do not answer a framing problem with more facts.** If the user says a slide
  misses the point, the fix is the point, not another statistic.

## 2. Applying it

- **One comment is usually a pattern.** When the user names a fault on one
  slide, look for it on every slide and fix it everywhere, then say where else
  you found it. "This headline repeats its description" is rarely true of one
  slide only. The user should not have to find the same fault eleven times.
- **Change what was asked, and keep what was working.** A correction has a
  size. Read "this is a bit too pithy" as a small move, not a rewrite into the
  opposite register. When told a change went too far, go back toward the
  previous version; do not try a third direction.
- **The user's words are direction, never copy.** Their sentence explaining what
  is wrong does not go on the slide. Work out what they mean and write it for
  the audience. When they give a list of examples, find what the examples have
  in common and write that (`content.md` §2).
- **When the user says a claim is wrong, ask where else the same source misled
  you.** A wrong claim copied from an outline is a reason to re-test the
  outline's other claims, not only to fix the one.
- **When the user rejects wording as stilted or wordy, the next version is
  shorter and plainer**, not the same sentence rearranged. Offer two or three
  options that differ in substance when the right one is not obvious.

## 3. Showing the change

- **When a diagram's form is in doubt, show variations instead of describing
  them.** Build two or three real renderings that take different forms (a
  table, a flow, an annotated picture), put them on one review page with a
  label each, and let the user point. A description of a diagram cannot be
  judged; a picture can be judged in seconds.
- **Look at it yourself before showing it.** Screenshot the changed slides at a
  laptop size (`screenshot-deck.mjs`) and check them against the request: is the
  thing that was asked for visibly different, and did anything nearby break?
- **Say what changed and what did not**, slide by slide, in one or two lines
  each. Name anything you were asked for and did not do, with the reason.
- **Remove what was rejected.** A variation the user passed over leaves the
  file, along with its styles and helpers.

## 4. Keeping the record straight

- **Feedback outranks these documents for the deck in hand.** Where the user
  wants something this skill advises against, do it, and record the deviation in
  the ledger comment with the date and the reason given.
- **Update the outline or spec as the deck changes**, so the agreed wording
  lives in one place and the next session does not start from a stale draft.
- **Re-run the verifier and the cold read after diagram changes** (`verify.md`).
  A diagram redrawn three times has usually picked up a label collision or lost
  its emphasis along the way.
