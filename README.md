# public-skills

Agent skills for Claude Code and compatible harnesses.

## stage-deck

Plan and build standalone single-file HTML presentation decks — evidence-first
stages, dense structured text, and figures that draw their argument rather than
decorate it.

Two entry points:

- **Draft** (`stage-deck/draft.md`) — an interactive session that interviews the
  deck's owner and produces a *deck spec*: thesis, arc, per-beat claims, figure
  selections with caption sentences, and a coverage ledger, all agreed before an
  hour of building spends anything.
- **Build** (`stage-deck/SKILL.md`) — renders the deck from sources and/or a
  spec, under a contract that covers archetypes, a figure-selection procedure, a
  claim contract, spacing/stroke/mark ladders, and reveal choreography.

`stage-deck/verify-deck.mjs` is the executable verifier: it drives every
addressable state of a built deck through Playwright at three viewport sizes in
both themes, and censuses the deck against the contract's ladders — type sizes,
gaps, alignment spines, stroke weights, mark sizes, painted colours — plus
spec-conformance when a deck spec sits beside the deck. FAIL findings are broken
contracts; REVIEW findings are heuristics for a human look. Needs Playwright
(`npm i playwright && npx playwright install chromium`, or run it from a package
that has it).

The skill ships **no colour values** — a palette is supplied per deck via a slot
contract.

### Install

Copy `stage-deck/` into your skills directory (e.g. `~/.claude/skills/` or a
project's `.claude/skills/`).
