---
name: "applications"
version: "1.1"
description: "Track job and volunteer applications with CV snapshots, status updates, conversion metrics, and reply predictions"
triggers:
  - "откликнулась"
  - "applied to"
  - "sent CV"
  - "status update"
  - "conversion"
  - "prediction"
  - "probability"
---

# Applications Tracking

Manage the full lifecycle of job and volunteer applications: snapshot CVs, track statuses, calculate conversion, and predict reply probability.

***

## Core Principle

**CVs in role folders evolve. Applications must be frozen.**

Every time the user sends a CV, we snapshot the exact text into the application folder. This is not a copy — it's a **historical record** of what was actually sent.

***

## Stage Definitions

**The pipeline tracks two things:** conversion funnel (how many ever reached each stage) and current status (where each app is right now).

### Stages

| Stage | What happened | Who's involved |
| ----- | ------------- | -------------- |
| **Sent** | CV sent, no response yet. Stays Sent until company replies or user decides to close. | — |
| **Replied** | Company responded in any way (positive, negative, forwarded to team). Any human response counts. A rejection = Replied + Rejected. | Recruiter / HR / Contact person / Referral conduit |
| **Screening** | First live conversation happened. Purpose: basic fit check, "do we want to continue talking?". Can be with recruiter OR a team member — the key is it's an initial evaluation, not a decision-maker conversation. | Recruiter / Initial contact / Team member |
| **Interview** | Substantive evaluation with the decision maker or hiring manager. Purpose: assess skills and fit in depth. If the person can make or strongly influence the hire decision = interview. | Hiring manager / MD / Decision maker |
| **Offer** | Formal or informal offer made | — |
| **Accepted** | User accepted the offer | — |
| **Rejected** | Final rejection at any stage (by CV, after screening, after interview). Can coexist with Replied. | — |

### How to tell Screening from Interview

**Ask: can this person make the decision?**

| Situation | Stage |
| --------- | ----- |
| Call with recruiter / HR about your background | **Screening** |
| Call with team member who says "I'll report back to [decision maker]" | **Screening** |
| Exploratory call where contact says "let me check with [MD/lead]" | **Screening** |
| Meeting with hiring manager who makes the final call | **Interview** |
| Meeting with MD / founder / director who decides | **Interview** |
| Task / case study given after screening | **Interview** (part of it) |

### Pipeline Table = Conversion Funnel

The Pipeline table in `applications_index.md` tracks **how many applications ever reached each stage** (cumulative), not just current status. This is what gives meaningful conversion rates.

**Current status** is tracked in the Active Applications table per app.

**Example:** An app that went Sent → Replied → Screening → Rejected counts in ALL stages it passed through:
- Sent: +1
- Replied: +1
- Screening: +1
- Rejected: +1

**Example:** An app rejected by CV without conversation only counts:
- Sent: +1
- Rejected: +1

***

## Directory Structure

```
applications/
├── README.md                              ← what this directory is
└── my_data/
    ├── README.md                          ← how to add applications
    ├── applications_index.md              ← master tracking file (all apps)
    └── app_[company_slug]_[YYYY-MM-DD]/   ← one folder per application
        ├── cv_sent.md                     ← exact CV text sent (with diff notes)
        ├── cover_email.md                 ← (optional) email/cover letter text
        └── [user files]                   ← (optional) PDFs the user saved here
```

### Naming Convention

* Folder: `app_[company_slug]_[date_sent]` (all lowercase)
* Examples: `app_sana_engagement_2026-04-30`, `app_eea_volunteer_2026-05-01`
* Slug by company name, not role type

### Files Per Application

**Required:**

* `cv_sent.md` — the exact CV text. Always includes:
  * Header: Sent date, Channel, CV source, whether user-modified
  * Full CV text as sent
  * "AI Notes — Diff" section at the bottom (what changed from role version)

**Optional:**

* `cover_email.md` — cover email or letter text
* `notes.md` — response tracking, follow-up timeline
* User-placed files (PDFs, screenshots) — don't touch these

***

## applications\_index.md Format

Text-based with summary table for active applications, detailed entries below.

```markdown
# Applications Index

Tracking all job and volunteer applications. Each entry links to a snapshot of the exact CV sent.

***

## Pipeline

**Total sent: N** · First: YYYY-MM-DD · Last: YYYY-MM-DD

| Stage     | Count | Rate                          |
| --------- | ----- | ----------------------------- |
| Sent      | N     | —                             |
| Replied   | N     | X%                            |
| Screening | N     | X%                            |
| Interview | N     | X%                            |
| Offer     | N     | X%                            |
| Accepted  | N     | —                             |
| Rejected  | N     | Company A (reason) · Company B |

**Funnel:** Sent → Replied → Screening → Interview → Offer → Accepted / Rejected / Ghosted

***

## Active Applications

| Company | Role | Channel | Prediction | Status | Updated |
|---------|------|---------|------------|--------|---------|
| **Company** | Role Title | Channel | 🔥🔥🔥 / 🔥🔥 XX-XX% | ✅/🟡 | YYYY-MM-DD |

**N active** · **N replied** (X%) · **N pending**

***

## Channel Performance

| Channel | Sent | Replied | Rate | Applications |
|---------|------|---------|------|-------------|
| **Personal referral** | N | N | X% | Company ✅ · Company ❌ |
| **Cold email** | N | N | X% | Company ✅ |
| **Company website** | N | N | X% | Company ✅ · Company ❌ |
| **Referral link** | N | N | X% | Company ❌ |

**Insight:** [Pattern observed across channels]

***

## All Applications

*Newest on top.*

### N. Company Name — Role Title
* **Date:** YYYY-MM-DD · **Channel:** Channel · **Status:** ✅/🟡/❌ Status
* **CV:** role_[name]/cv.md (snapshot/version)
* **CL:** [Brief description or "None"]
* **Prediction:** 🔥🔥 XX-XX% [→ ✅ accurate / → ❌ overestimated]
* **Notes:** Brief context
* **Folder:** `app_[company]_[date]/`
```

***

## Workflow

### Step 1: User says they applied

**With a target role (has JD):**

1. Check if role folder exists in `target_roles/my_data/role_[name]/`
2. Copy `cv.md` from role folder → `app_[company]_[date]/cv_sent.md`
3. Add header with: Sent date, Channel, CV source, "Snapshot — awaiting final text"
4. Add entry to `applications_index.md` (newest on top, increment number)
5. **Add Reply prediction and Prediction rationale** (see rules below)
6. Update conversion funnel counts
7. **Update `target_roles/my_data/roles_index.md`:**
   - Update Market Signals counts (total applied, replied, pending, etc.)
   - Add new row to Role Type Fit Matrix
   - Update Positioning Insights if this application provides new signal
   - Update Strategy section if needed (e.g., new role type to pursue/test)
   - Update "Last Updated" timestamp

**Without a target role (volunteer, networking, spontaneous):**

1. Create custom CV directly in `app_[company]_[date]/cv_sent.md`
2. Add header and entry to index
3. **Add Reply prediction and Prediction rationale** (see rules below)

### Step 2: User sends final text

1. Compare user's text with the snapshot in `cv_sent.md`
2. Update `cv_sent.md` with the actual final text
3. Add "AI Notes — Diff" section documenting:
   * What the user changed from the role version (or generated version)
   * New details not in story files (flag these!)
   * Formatting changes
   * Sections added/removed
4. Update the index entry if needed

### Step 3: Status updates

1. User reports a response or status change
2. Update the application's Status and Last update in index
3. **When outcome is known (Replied / Rejected / etc.), note in rationale whether prediction was accurate**
4. **Update Active Applications Summary table** (add/remove rows, update counts, adjust predictions)
5. Recalculate conversion funnel
6. **Update `target_roles/my_data/roles_index.md`:**
   - Update Market Signals counts (replied/rejected/pending)
   - Update Role Type Fit Matrix row (Result column)
   - Update Positioning Insights if this outcome provides new evidence
   - Update Market Signals → What's working / What's not working if patterns emerge
   - Update Strategy section if this outcome changes approach
   - Update "Last Updated" timestamp
7. If useful, create `notes.md` in the app folder with timeline

### Step 4: Periodic review

When asked (or proactively):

* Count applications by status
* Calculate conversion rates
* Identify patterns (which CV versions get responses?)
* **Review prediction accuracy** — compare predictions to actual outcomes, identify calibration errors

***

## Diff Notes Guidelines

The "AI Notes — Diff" section in `cv_sent.md` is critical for learning. Track:

**What to document:**

* Contact info changes (placeholder → real)
* Sections added/removed (Certifications, Education, etc.)
* Bullet changes (removed X bullets, added Y)
* Date fixes (e.g., "Nov 2020" → "Oct 2020")
* Company name format changes
* New details not in story files (flag with ⚠️ — may need to be added to stories)

**What NOT to document:**

* Minor formatting (bullet style `*` vs `-`)
* Trivial whitespace

**Flag new facts:** If user added details not in story files, note them explicitly:

> "VWFS: 'voted Best Employee 2018' — NOT in story files. Consider adding to story\_02."

This helps decide whether to update source stories later.

***

## Conversion Funnel

Recalculate when any status changes:

```
Response rate = Replied / Sent
Screening rate = Screening / Sent
Interview rate = Interview / Sent
Offer rate = Offer / Sent
Close rate = Accepted / Offer
```

Also track by channel (referral vs website vs email) and by CV type (role-based vs custom).

***

## Reply Prediction Rules

**Every application must have a Reply prediction and Prediction rationale.**

### Rating Scale

| 🔥🔥🔥         | 🔥🔥              | 🔥          |
| -------------- | ----------------- | ----------- |
| High (60-70%+) | Moderate (30-50%) | Low (\<25%) |

**Add percentage ranges** to all predictions (e.g., "🔥🔥 Moderate (40-50%)").

### Rating Factors

**Consider when predicting:**

| Factor               | Weight | Examples                                                    |
| -------------------- | ------ | ----------------------------------------------------------- |
| **Channel**          | High   | Referral (+20-30%) vs Website/Cold (+0-10%)                 |
| **Fit**              | High   | Direct domain match (+20%) vs Stretch (-10%)                |
| **Competition**      | Medium | Well-known brand \= more applicants \= lower odds           |
| **Title match**      | Medium | Exact title (+10%) vs Transferable skills (0%)              |
| **Experience level** | Medium | Meets years requirement (+10%) vs Below (−15%)              |
| **Gaps**             | High   | Critical gap (e.g., required certification missing) \= −20% |

**Channel multipliers:**

* **Personal referral** (someone recommends you directly): +25-30%
* **Referral link** (employee gives you application link): +15-20%
* **They ask for CV** (company solicits): +20-25%
* **Cold email that gets response**: +10-15%
* **Website application**: baseline (0%)
* **LinkedIn Easy Apply**: often filtered \= −5%

**Examples:**

| Scenario                    | Prediction             |
| --------------------------- | ---------------------- |
| Referral + perfect fit      | 🔥🔥🔥 High (60-70%)   |
| Referral + moderate fit     | 🔥🔥 Moderate (40-50%) |
| Website + perfect fit       | 🔥🔥 Moderate (25-35%) |
| Website + stretch fit       | 🔥 Low (10-20%)        |
| Cold email + domain perfect | 🔥🔥 Moderate (35-45%) |

### Rationale Format

**Always include:**

* ✅ **Strengths:** What makes this application strong
* ❌ **Weaknesses:** What reduces chances
* 🎯 **Key factors:** Why this rating

**Example:**

```
* **Reply prediction:** 🔥🔥 Moderate (30-40%)
* **Prediction rationale:** Referral (link, not personal) — CV reaches human, not ATS.
  Cross-functional coordination + team growth + process improvement — good match.
  Cons: no developer tools experience, career gap since 2024, "7+ years PM" counts legal work.
  High competition (JetBrains brand).
```

### For Retroactive Predictions (rejected applications)

When adding predictions to already-rejected applications:

* Add `— *retroactive*` to indicate this wasn't made before outcome
* Note whether rejection was predictable or unexpected
* Example: `🔥 Low (10-15%) — *retroactive*`

### Calibration Over Time

**Track prediction accuracy:**

* When outcome is known, compare to prediction
* If consistently over-optimistic: lower baseline ratings
* If consistently under-optimistic: raise baseline ratings
* Channel-specific patterns may emerge (e.g., referrals work better than expected)

**Review quarterly** to identify patterns and adjust prediction logic.

***

## Integration With Other Skills

* **job-analysis:** Creates role folders with JDs → these generate CVs
* **starr-achievements:** Source of truth for CV content → diff notes may reveal missing story details
* **company-profiles:** Provide context for cover letters

**Key relationship:** target\_roles generates CVs → applications snapshots them. The two directories must not be confused.