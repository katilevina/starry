---
name: "hypotheses"
version: "1.0"
description: "Hypothesis-driven job search: define what you're testing, execute outreach and applications, validate results, decide to continue or pivot"
triggers:
  - "hypoth"
  - "гипотез"
  - "campaign"
  - "кампания"
  - "outreach plan"
  - "plan outreach"
  - "validate"
  - "валидир"
---

# Hypotheses & Campaigns

Define job search hypotheses, execute outreach campaigns, validate results. Strategy lives in `hypotheses/`, execution in `applications/campaign_*/`.

***

## Core Principle

**Job search is hypothesis-driven.** Each hypothesis is a bet: "I think companies like X need someone like me for role Y."

The system separates **strategy** (what we're testing and why) from **execution** (messages sent, responses received, status tracking).

***

## Routing Rules — Who Puts What Where

This is the canonical reference for where artifacts live in the project.

### `hypotheses/` — Strategy Only

Contains only strategic thinking, no execution files.

| File | Purpose |
|------|---------|
| `hypotheses_index.md` | Master index: all hypotheses with status |
| `[slug]/hypothesis.md` | What we're testing, why, success criteria, validation results |

**What does NOT belong here:**
- Outreach plans → `applications/campaign_*/`
- Message templates → `applications/campaign_*/`
- Sent messages → `applications/campaign_*/messages/`
- CV snapshots → `applications/campaign_*/cv_sent.md`

### `applications/` — Execution

All day-to-day work lives here. Two types of folders:

#### `app_[company]_[date]/` — Formal Application

Frozen snapshot of CV + cover letter sent to one specific company.

| File | Purpose |
|------|---------|
| `cv_sent.md` | Exact CV text sent (frozen, never changes) |
| `cover_letter.md` | (optional) Cover letter text (frozen) |

**Created when:** User formally applies to a company via ATS, email, or referral.

#### `campaign_[name]/` — Batch Outreach

Working folder for cold outreach to multiple companies. Everything you need day-to-day in one place.

| File | Purpose |
|------|---------|
| `outreach_plan.md` | Company lists, tracks (A/B), priorities, status tracking, stats — single source of truth for the campaign |
| `cold_outreach_templates.md` | Message templates by domain cluster |
| `cv_sent.md` | CV snapshot for batch (one CV sent to all) |
| `messages/[company].md` | Sent message drafts per company |

**Created when:** User starts a batch outreach campaign (many companies, one hypothesis).

**Why everything in one folder:** During execution, you shouldn't need to jump between folders. Open campaign folder → everything is there.

### `target_roles/` — Role Artifacts Only

Role-specific analysis and generated documents. No outreach, no hypothesis content.

| File | Purpose |
|------|---------|
| `role_profile.md` | Merged JD requirements, domain context |
| `skills_mapping.md` | Achievement-to-requirement mapping + readiness assessment |
| `cv.md` | Living CV (evolves with each new JD) |
| `cover_letter.md` | (optional) Cover letter draft for a specific company |
| `jd_[company]_[date].md` | Full original JD text |

### `achievements/` — Evidence (Stories)

Source of truth for all claims. Role-agnostic — no skills analysis here.

### `companies_i_worked/` — Company Profiles

Built FROM achievements. Provide context for story-gathering and CV generation.

### Quick Reference: Where Does X Go?

| Artifact | Location |
|----------|----------|
| "I think post-raise startups need me" | `hypotheses/[slug]/hypothesis.md` |
| Success criteria for a hypothesis | `hypotheses/[slug]/hypothesis.md` |
| Validation results | `hypotheses/[slug]/hypothesis.md` |
| Company list for cold outreach | `applications/campaign_[name]/outreach_plan.md` |
| Message template for EdTech cluster | `applications/campaign_[name]/cold_outreach_templates.md` |
| Actual message sent to Company X | `applications/campaign_[name]/messages/[company].md` |
| Status: Company X replied | `applications/campaign_[name]/outreach_plan.md` (status + stats) |
| CV sent to 20 companies in a batch | `applications/campaign_[name]/cv_sent.md` |
| CV sent to 1 company via ATS | `applications/app_[company]_[date]/cv_sent.md` |
| Cover letter for formal application | `applications/app_[company]_[date]/cover_letter.md` |
| JD analysis | `target_roles/role_[type]/role_profile.md` |
| Skills mapping | `target_roles/role_[type]/skills_mapping.md` |
| Living CV (role-level) | `target_roles/role_[type]/cv.md` |

***

## Directory Structure

```
hypotheses/
├── README.md                    ← what this directory is, how to use it
├── hypotheses_index.md          ← all hypotheses with status
└── [hypothesis_slug]/
    └── hypothesis.md            ← strategy, criteria, validation

applications/
├── README.md
└── my_data/
    ├── applications_index.md    ← master tracking + conversion funnel
    ├── app_[company]_[date]/    ← formal applications (one per company)
    │   ├── cv_sent.md           ← frozen snapshot
    │   └── cover_letter.md      ← (optional, frozen)
    └── campaign_[name]/         ← batch outreach (one per campaign)
        ├── outreach_plan.md     ← companies, tracks, priorities, status + stats
        ├── cold_outreach_templates.md  ← message templates by cluster
        ├── cv_sent.md           ← CV snapshot for batch
        └── messages/            ← sent message drafts
            └── [company].md
```

***

## Hypothesis Lifecycle

### 1. Define

User describes what they want to test. AI creates:

1. `hypotheses/[slug]/hypothesis.md` — strategy, positioning, success criteria
2. `hypotheses/hypotheses_index.md` — adds entry with status `🔬 In progress`
3. `applications/campaign_[name]/` — creates campaign folder with outreach_plan.md

**What goes in hypothesis.md:**
- What we're testing and why
- Positioning (what role we're pitching)
- Source (where companies come from)
- Success criteria (defined upfront, measurable)
- Related roles (links to `target_roles/`)
- Related campaign (link to `applications/campaign_*/`)

**What does NOT go in hypothesis.md:**
- Company lists → outreach_plan.md in campaign folder
- Message drafts → messages/ in campaign folder
- JD analysis → target_roles/

### 2. Execute → see Campaign Execution below

***

## Campaign Execution

Detailed guide for setting up and running a batch outreach campaign.

### When to Create a Campaign

A campaign is created when a hypothesis moves from "defined" to "executing". Every campaign belongs to a hypothesis.

**One hypothesis can have one campaign** (typical) or eventually none (if hypothesis is paused before execution starts).

### Campaign Setup (Step by Step)

#### Step 1: Create folder structure

```
applications/my_data/campaign_[name]/
├── outreach_plan.md
├── cold_outreach_templates.md
├── cv_sent.md
└── messages/
```

Folder name uses slug + month: `campaign_cold_outreach_may2026`, `campaign_scaling_europe_jun2026`.

#### Step 2: Outreach Plan

`outreach_plan.md` is the strategic document for this campaign.

**Structure:**

```markdown
# Outreach Plan: [Campaign Name]

## Hypothesis
Link to hypothesis.md

## Company Source
Where the list came from (URL, LinkedIn post, job board)

## Tracks
### Track A: Formal Applications
Companies with open JDs that match a defined role.

### Track B: Cold Outreach
Companies where we pitch without an open role.

## Companies by Priority
### Priority 1 (send first)
* Company A — [cluster] — [reason]
* Company B — [cluster] — [reason]

### Priority 2
...

### Do Not Send
* Company X — reason (already applied, no fit, etc.)
```

#### Step 3: Cluster Companies

Group companies by domain/industry for template targeting.

**Clustering rules:**
- Group by **what the company does** (EdTech, FinTech, HealthTech, Enterprise SaaS, DevTools, etc.)
- Minimum 2 companies per cluster — singletons join the nearest cluster or get a generic template
- Clusters inform template tone and hook (EdTech → education language, FinTech → compliance language)
- One company can belong to only one cluster (pick the primary domain)

**Example clusters:**
- **EdTech / Future of Work:** Labster, Bloomtech, Preply
- **FinTech / Payments:** Rapyd, MoonPay, dLocal
- **HealthTech:** 9amHealth, Enzo Health, Dandelion Health
- **Enterprise / Ops:** gaiia, Vori, Nova Intelligence

#### Step 4: Assign Tracks and Priorities

**Track A — Formal Applications:**
- Company has an open JD that matches a defined role
- Apply through ATS or official channel
- Use the CV from `target_roles/role_[type]/cv.md`
- Create `app_[company]_[date]/` for each

**Track B — Cold Outreach:**
- No open JD, or JD doesn't match existing roles
- Cold message to founder/CEO/hiring manager
- Use the campaign CV snapshot
- Message goes to `messages/[company].md`

**Priority assignment:**
1. **Priority 1** — strongest fit, best signal → send first
2. **Priority 2-3** — good fit, less signal
3. **Priority 4-5** — stretch fit, experimental
4. **Do Not Send** — bad fit, already applied, conflicting info

#### Step 5: Write Message Templates

`cold_outreach_templates.md` contains templates per cluster.

**Template structure:**

```
### Cluster: [Name]

**Hook angle:** [what connects user to this domain]

---

**Subject:** [Short, specific]

Hi [First Name],

[1-2 sentences: why this company caught my eye — specific to their product/stage/market]

[1-2 sentences: what I bring — tied to the hook angle, with one concrete metric]

[1 sentence: soft CTA — "happy to chat" / "would love to share how I..." / "open to a conversation?"]

[Sign-off]

---
```

**Template rules:**
- **One metric per template** — not a CV dump, a conversation starter
- **Specific to the company's domain** — generic "I'm great" messages get ignored
- **Under 120 words** — respect the reader's time
- **Soft CTA** — "happy to chat" not "let's schedule a call"
- **No attachment mention** — LinkedIn message doesn't need it; if sending by email, attach CV
- **Personalized per company** — template is a starting point, each message gets a specific hook

**Anti-patterns:**
- ❌ "I'm writing to express my interest in..." — corporate speak
- ❌ "As a [long title] with [X] years of experience..." — CV on first date
- ❌ "I believe my skills would be a great asset to your team" — filler
- ❌ Same message to 20 companies with only name changed — lazy

#### Step 6: Snapshot CV

Copy the relevant CV from `target_roles/role_[type]/cv.md` into `campaign/cv_sent.md`.

If the campaign uses multiple roles (e.g., one CV for Track A, another for Track B), snapshot both and note which is for which track.

#### Step 7: Execute — Write and Send Messages

For each company in priority order:

1. **Personalize the template** — find specific detail about the company (product launch, funding, market, recent news)
2. **Write to `messages/[company].md`** — include subject line + body
3. **Update `outreach_plan.md`** — change status in the relevant table + update Stats
4. **User sends** — then confirms for status update

### Status Tracking in outreach_plan.md

The outreach plan is the single source of truth for campaign status. It includes:

**Stats section** (at the top, after hypothesis):
```markdown
## Stats
* **Sent:** N (Track B) + N (Track A formal)
* **Replied:** N
* **Reply rate:** X%
* **Interviews:** N
```

**Status codes in tables:**

| Status | Meaning |
|--------|---------|
| ⬜ Ready | Identified, not sent yet |
| ✅ Sent / Applied | Message or application sent |
| ✅ Replied | Positive response received |
| ❌ Rejected | Rejection received |
| ➡️ → Formal app | Cold outreach led to formal application |
| 🚫 Do not send | Decided not to reach out |
| 💬 Conversation | Ongoing conversation |

### Tracking Results in applications_index.md

Campaign activity also appears in `applications/my_data/applications_index.md`:
- Cold outreach messages count in Pipeline → Sent
- Replies count in Pipeline → Replied
- Channel: "Cold outreach"
- Individual entries for each company in the "All Applications" section

**Why two places:** `outreach_plan.md` is for campaign-level tracking (all companies in one view). `applications_index.md` is for overall job search tracking (all channels, all roles, conversion funnel). When updating status, always update both.

### Formal Applications Within a Campaign

When cold outreach leads to a formal application:

1. Create `applications/my_data/app_[company]_[date]/` with frozen CV + CL
2. Update `outreach_plan.md` — change status to `➡️ → Formal app` + update Stats
3. Update `applications_index.md` — add entry with channel "Cold outreach → Formal"
4. The campaign folder tracks the cold message; the app folder tracks the formal application

**One hypothesis can use multiple roles.** Example: cold outreach uses "Founding Product & Ops Lead" CV, but a formal application to the same company might use "Customer Success Manager" CV.

### 3. Validate

When enough data is collected:

1. Compare results vs success criteria
2. Identify patterns (which clusters responded? which didn't?)
3. Document lessons in hypothesis.md (Validation section)
4. Update hypotheses_index.md with status change

### 4. Decide

Based on validation:

- **Continue** — hypothesis is working, keep going
- **Pivot** — partial signal, adjust positioning or company selection
- **Stop** — hypothesis invalidated, archive it

***

## hypotheses_index.md Format

```markdown
# Hypotheses Index

***

## Status Overview

| Status         | Count | Hypotheses |
| -------------- | ----- | ---------- |
| 🔬 In progress | N     | Name       |
| 📋 Queued      | N     | —          |
| ✅ Validated    | N     | —          |
| ❌ Invalidated  | N     | —          |
| ⏸ Paused       | N     | —          |

***

## Hypotheses

### 1. [Hypothesis Name]

* **Status:** 🔬 In progress
* **Hypothesis:** One-sentence summary
* **Positioning:** Role title
* **Source:** Where companies came from
* **Started:** YYYY-MM-DD
* **Completed:** —
* **Folder:** `[slug]/`
* **Campaign:** `applications/my_data/campaign_[name]/`
```

***

## hypothesis.md Format

```markdown
# [Hypothesis Name]

## What We're Testing
[Strategy description]

## Execution Plan
### Track A: Formal Applications
### Track B: Cold Outreach
* **Templates:** `applications/my_data/campaign_[name]/cold_outreach_templates.md`
* **Messages sent:** `applications/my_data/campaign_[name]/messages/`

### Company Clusters
[Groupings by domain]

**Detailed plan + status tracking:** `applications/my_data/campaign_[name]/outreach_plan.md`

***

## Success Criteria
| Metric | Target | Actual |
|--------|--------|--------|
| Response rate | X% | — |
| Interviews | Y | — |

***

## Related Roles
- `target_roles/my_data/role_[type]/` — [role description]

***

## Validation
[Fill when hypothesis concludes]
```

***

## Integration With Other Skills

* **job-analysis:** Creates role folders → hypotheses reference them
* **map-skills / generate-cv:** Produces CVs → campaigns snapshot them
* **applications:** Formal apps (`app_*/`) tracked alongside campaigns (`campaign_*/`) in the same index
* **cover-letters:** CLs for formal applications live in `app_*/`, not in campaigns
* **starr-achievements:** Source of truth — CV content comes from here

**Data flow:**
```
achievements → target_roles (skills_mapping, cv)
              → companies_i_worked (profiles)

hypotheses (strategy) → applications/campaign (execution)
                      → applications/app (formal snapshots)
```

***

## 📎 External References

External materials for this skill: `/references/hypotheses/sources.md`
