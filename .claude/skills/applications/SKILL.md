---
name: "applications"
version: "1.0"
description: "Track job and volunteer applications with CV snapshots, status updates, and conversion metrics"
triggers:
  - "откликнулась"
  - "applied to"
  - "sent CV"
  - "status update"
  - "conversion"
---

# Applications Tracking

Manage the full lifecycle of job and volunteer applications: snapshot CVs, track statuses, calculate conversion.

***

## Core Principle

**CVs in role folders evolve. Applications must be frozen.**

Every time the user sends a CV, we snapshot the exact text into the application folder. This is not a copy — it's a **historical record** of what was actually sent.

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

- Folder: `app_[company_slug]_[date_sent]` (all lowercase)
- Examples: `app_sana_engagement_2026-04-30`, `app_eea_volunteer_2026-05-01`
- Slug by company name, not role type

### Files Per Application

**Required:**
- `cv_sent.md` — the exact CV text. Always includes:
  - Header: Sent date, Channel, CV source, whether user-modified
  - Full CV text as sent
  - "AI Notes — Diff" section at the bottom (what changed from role version)

**Optional:**
- `cover_email.md` — cover email or letter text
- `notes.md` — response tracking, follow-up timeline
- User-placed files (PDFs, screenshots) — don't touch these

***

## applications_index.md Format

Text-based, newest on top. No tables (hard to edit in markdown).

```markdown
# Applications Index

## Conversion Funnel

**Total sent: N**
- Sent: N
- Replied: N (X%)
- Screening: N (X%)
- Interview: N (X%)
- Offer: N (X%)
- Accepted: N (—)

**Funnel:** Sent → Replied → Screening → Interview → Offer → Accepted / Rejected / Ghosted

***

## Applications

*Ordered chronologically — newest on top.*

### N. Company Name
- **Type:** Job / Volunteer / Networking
- **Role:** Role Title
- **Date sent:** YYYY-MM-DD
- **Channel:** Website / Email / Referral (Name) / LinkedIn
- **CV:** role_[name]/cv.md (snapshot) / Custom CV
- **Status:** Sent / Replied / Screening / Interview / Offer / Accepted / Rejected / Ghosted
- **Last update:** YYYY-MM-DD
- **Notes:** brief context
- **Folder:** `app_[company]_[date]/`
```

***

## Workflow

### Step 1: User says they applied

**With a target role (has JD):**
1. Check if role folder exists in `target_roles/my_data/role_[name]/`
2. Copy `cv.md` from role folder → `app_[company]_[date]/cv_sent.md`
3. Add header with: Sent date, Channel, CV source, "Snapshot — awaiting final text"
4. Add entry to `applications_index.md` (newest on top, increment number)
5. Update conversion funnel counts

**Without a target role (volunteer, networking, spontaneous):**
1. Create custom CV directly in `app_[company]_[date]/cv_sent.md`
2. Add header and entry to index

### Step 2: User sends final text

1. Compare user's text with the snapshot in `cv_sent.md`
2. Update `cv_sent.md` with the actual final text
3. Add "AI Notes — Diff" section documenting:
   - What the user changed from the role version (or generated version)
   - New details not in story files (flag these!)
   - Formatting changes
   - Sections added/removed
4. Update the index entry if needed

### Step 3: Status updates

1. User reports a response or status change
2. Update the application's Status and Last update in index
3. Recalculate conversion funnel
4. If useful, create `notes.md` in the app folder with timeline

### Step 4: Periodic review

When asked (or proactively):
- Count applications by status
- Calculate conversion rates
- Identify patterns (which CV versions get responses?)

***

## Diff Notes Guidelines

The "AI Notes — Diff" section in `cv_sent.md` is critical for learning. Track:

**What to document:**
- Contact info changes (placeholder → real)
- Sections added/removed (Certifications, Education, etc.)
- Bullet changes (removed X bullets, added Y)
- Date fixes (e.g., "Nov 2020" → "Oct 2020")
- Company name format changes
- New details not in story files (flag with ⚠️ — may need to be added to stories)

**What NOT to document:**
- Minor formatting (bullet style `*` vs `-`)
- Trivial whitespace

**Flag new facts:** If user added details not in story files, note them explicitly:
> "VWFS: 'voted Best Employee 2018' — NOT in story files. Consider adding to story_02."

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

## Integration With Other Skills

- **job-analysis:** Creates role folders with JDs → these generate CVs
- **starr-achievements:** Source of truth for CV content → diff notes may reveal missing story details
- **company-profiles:** Provide context for cover letters

**Key relationship:** target_roles generates CVs → applications snapshots them. The two directories must not be confused.
