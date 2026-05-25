# Hypotheses

This directory tracks job search hypotheses — what you're testing, why, and what happened.

***

## What is a hypothesis?

A hypothesis is a bet: "I think companies like X need someone like me for role Y."

Each hypothesis has:

* **Strategy** — what we're testing, why, success criteria
* **Execution** — outreach campaigns and formal applications (lives in `applications/`)
* **Validation** — results vs criteria, patterns, lessons learned

***

## What lives here

```
hypotheses/
├── README.md                ← this file
├── hypotheses_index.md      ← all hypotheses with status overview
└── [hypothesis_slug]/
    └── hypothesis.md        ← strategy, criteria, validation results
```

**Only strategy lives here.** Execution files (outreach plans, messages, CV snapshots) live in `applications/campaign_[name]/` — so you don't have to jump between folders during day-to-day work.

***

## Lifecycle

1. **Define** — describe what you're testing, set success criteria
2. **Execute** — outreach, applications (all in `applications/campaign_*/`)
3. **Validate** — compare results to criteria, identify patterns
4. **Decide** — continue, pivot, or stop

***

## Status codes

| Status         | Meaning              |
| -------------- | -------------------- |
| 🔬 In progress | Currently executing  |
| 📋 Queued      | Defined, not started |
| ✅ Validated    | Hypothesis confirmed |
| ❌ Invalidated  | Hypothesis disproven |
| ⏸ Paused       | On hold              |

***

## See also

* **Skill:** `.claude/skills/hypotheses/SKILL.md` — full routing rules and workflow
* **Applications:** `applications/` — where execution files live
* **CLAUDE.md** — project overview