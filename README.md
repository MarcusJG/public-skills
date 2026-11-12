# public-skills

Agent skills for Claude Code and compatible harnesses.

## stage-deck

Plan and build standalone single-file HTML presentation decks — evidence-first
stages, dense structured text, and figures that draw their argument rather than
decorate it.

Three parts:

- **Draft** (`stage-deck/draft.md`) — an interactive session that interviews the
  deck's owner and produces a *deck spec*: thesis, arc, per-beat headlines and
  descriptions, figure selections with caption sentences, and a coverage ledger,
  all agreed before an hour of building spends anything.
- **Build** (`stage-deck/SKILL.md`) — renders the deck from a spec, or from an
  outline once three gates are passed: two intake questions (read alone or
  presented; complete slides or stepped builds), the argument restated and
  agreed, and every slide's wording agreed before anything is drawn. The build
  starts from `stage-deck/template.html`, which carries the layout, click
  navigation and drawing helpers.
- **Review** (`stage-deck/review.md`) — how feedback on a built deck is taken:
  fix the pattern across the deck, change only what was asked, and show
  variations instead of describing them.

`stage-deck/verify-deck.mjs` is the executable verifier: it drives every
addressable state of a built deck through Playwright at three viewport sizes in
both themes, and censuses the deck against the contract's ladders — type sizes,
gaps, alignment spines, stroke weights, mark sizes, painted colours — plus
spec-conformance when a deck spec sits beside the deck. FAIL findings are broken
contracts; REVIEW findings are heuristics for a human look. Needs Playwright
(`npm i playwright && npx playwright install chromium`, or run it from a package
that has it).

`stage-deck/screenshot-deck.mjs` writes one image per slide, and with
`--figure-only` one image per diagram with its headline hidden. Those are for
the *cold read*: a fresh reader with no context says what each diagram claims,
and a diagram whose answer does not match its headline is redrawn.

The template's palette is a **placeholder** — a palette is supplied per deck via
a slot contract.

### Install

Copy `stage-deck/` into your skills directory (e.g. `~/.claude/skills/` or a
project's `.claude/skills/`).
