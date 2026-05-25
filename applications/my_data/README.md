# My Applications

Your application tracking directory. Every CV you send gets a snapshot here.

***

## How to add a new application

1. **Say "I applied to [Company]"** (or equivalent) — the AI will:
   * Create folder `app_[company]_[YYYY-MM-DD]/`
   * Snapshot the CV from the relevant role folder (or create a custom one)
   * Add entry to `applications_index.md`
2. **Send the final text** you actually submitted — the AI will compare with the snapshot and update it
3. **Update status** when you hear back — the AI will update the index and recalculate conversion

***

## How to run a campaign

1. **Run `/start-campaign`** — the AI will:
   * Identify which hypothesis the campaign serves
   * Create folder `campaign_[name]/` with outreach plan, templates, CV snapshot
   * Cluster companies by domain, assign tracks and priorities
2. **Execute** — for each company in priority order:
   * AI personalizes template → writes to `messages/[company].md`
   * You send the message → confirm → AI updates status in `outreach_plan.md`
3. **Track** — status and stats live in `outreach_plan.md` (single source of truth for the campaign)

***

## What goes where

### `app_[company]_[date]/` — Formal Application

* `cv_sent.md` — the exact CV text you sent (frozen)
* `cover_letter.md` — (optional) cover letter text (frozen)

### `campaign_[name]/` — Batch Outreach

* `outreach_plan.md` — companies, tracks, priorities, status tracking, stats
* `cold_outreach_templates.md` — message templates by domain cluster
* `cv_sent.md` — CV snapshot for batch
* `messages/[company].md` — personalized message drafts

***

## Status funnel

```
Sent → Replied → Screening → Interview → Offer → Accepted
                                         → Rejected
                 → Ghosted
```

***

## Current stats

See `applications_index.md` for the full list and conversion rates.

**Sections in `applications_index.md`:**

| Section | What it tracks |
|---------|---------------|
| **Pipeline** | Every CV or message sent. Conversion funnel from Sent → Replied → Screening → Interview → Offer → Accepted. Cold outreach messages count too. |
| **Active** | Everything currently in play — formal CVs and cold outreach messages. Awaiting response, in conversation, or in interview. Rejected = frozen, not active. |
| **Channel Performance** | How each *channel* converts. Channel = HOW you reached the company (referral, website/ATS, cold outreach, cold email). One company can appear in multiple channels. |
| **Campaigns** | Batch outreach overview — one row per campaign with company count, sent/replied stats. Details in `campaign_*/outreach_plan.md`. |
| **All Sends** | Individual entry for every send (CV or message), newest on top. Includes prediction, status, notes. |
