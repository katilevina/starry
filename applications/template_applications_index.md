# Applications Index

Tracking all job applications and outreach sends. Each entry links to a snapshot of the exact CV sent or message drafted.

***

## Pipeline

**Every CV or message sent counts.** Formal applications through ATS, cold outreach messages, emails — all enter the pipeline when sent. The funnel tracks how many progressed to each stage.

**Total sent: 0** · First: — · Last: —

| Stage     | Count | Rate |
| --------- | ----- | ---- |
| Sent      | 0     | —    |
| Replied   | 0     | —    |
| Screening | 0     | —    |
| Interview | 0     | —    |
| Offer     | 0     | —    |
| Accepted  | 0     | —    |
| Rejected  | 0     | —    |

**Funnel:** Sent → Replied → Screening → Interview → Offer → Accepted / Rejected / Ghosted

***

## Active

**Everything currently in play** — formal CVs, cold outreach messages, all awaiting response or in conversation/interview. Rejected = frozen, not active.

*(No active sends yet. Add your first by telling Claude "I applied to [Company]" or running `/start-campaign`.)*

***

## Channel Performance

**Channel = HOW you reached the company**, not what happened after. One company can appear in multiple channels (e.g., cold LinkedIn message + formal ATS application).

*(No channel data yet — will populate with first applications.)*

***

## Campaigns

**Batch outreach overview** — one row per campaign. Details live in `campaign_*/outreach_plan.md`.

*(No campaigns yet. Run `/start-campaign` to create one.)*

***

## All Sends

*Every CV and message sent, newest on top.*

*(No sends yet.)*

***

## Workflow

**Applying with a target role CV:**

1. Say "I applied to [Company]" → Claude snapshots CV to `app_[company]_[date]/cv_sent.md`
2. Send final text → Claude compares with role version and updates snapshot + diff notes
3. Status updates → Claude updates Status, Pipeline, Channel Performance, and Active

**Applying without a target role (volunteer, networking):**

1. CV created directly in `app_[company]_[date]/cv_sent.md`
2. Add entry here, update pipeline

**Sending cold outreach:**

1. Run `/start-campaign` → creates campaign folder with plan, templates, CV snapshot
2. For each company → Claude personalizes template, writes to `messages/[company].md`
3. After sending → update status in `outreach_plan.md` + add entry here in All Sends

***

**⚠️ SYNC RULE:** This template must be kept in sync with `.claude/skills/applications/SKILL.md` → applications_index.md Format section.
