# Start Campaign

**Goal:** Set up a batch outreach campaign for a hypothesis — create folder, cluster companies, write templates, snapshot CV.

**Skill reference:** `.claude/skills/hypotheses/SKILL.md` → Campaign Execution

---

## Instructions for Me (Claude)

### Step 1: Identify the hypothesis

1. Read `hypotheses/hypotheses_index.md`
2. Check for hypotheses with status `📋 Queued` or `🔬 In progress` that don't have a campaign yet
3. If one obvious match → confirm with user
4. If multiple → ask which hypothesis this campaign is for
5. If none → suggest defining a hypothesis first (just create hypothesis.md, no formal command needed)

### Step 2: Gather company source

Ask user where the company list comes from:
- URL to a job board or list (e.g., Scaling Europe, YC jobs)
- A LinkedIn post or thread
- A manually curated list
- A search result

If user provides a URL, offer to browse and extract company names.

### Step 3: Check role readiness

1. Check if the hypothesis already has a positioning (role type)
2. Check if `target_roles/my_data/role_[type]/cv.md` exists and has a generated CV
3. If CV exists → confirm this is the CV for the campaign
4. If no CV → warn: "No CV ready for this role. Run `/map-skills` + `/generate-cv` first, or confirm you want to use an existing CV from another role."
5. If positioning is TBD → ask user what role they're pitching

### Step 4: Create campaign folder

Create `applications/my_data/campaign_[name]/` with:
- `outreach_plan.md` (from Step 5, includes Stats section for tracking)
- `cold_outreach_templates.md` (from Step 7)
- `cv_sent.md` (snapshot from target role)
- `messages/` (empty directory)

### Step 5: Build outreach plan

1. **List companies** — extract from source, show user for confirmation
2. **Cluster companies** — group by domain (EdTech, FinTech, HealthTech, Enterprise SaaS, DevTools, etc.)
   - Minimum 2 companies per cluster
   - Singletons join nearest cluster or get generic template
3. **Assign tracks:**
   - Track A (formal applications) — companies with open JDs matching a defined role
   - Track B (cold outreach) — no open JD, cold pitch
4. **Assign priorities:**
   - Priority 1: strongest fit
   - Priority 2-3: good fit
   - Priority 4-5: stretch/experimental
   - Do Not Send: bad fit (confirm with user)

**Show the plan to user for review before writing.**

### Step 6: Snapshot CV

1. Copy CV from `target_roles/my_data/role_[type]/cv.md` into `campaign/cv_sent.md`
2. Add header with: snapshot date, source role, hypothesis reference
3. If campaign uses multiple roles → snapshot both, note which is for which track

### Step 7: Write message templates

For each cluster:

1. Identify the hook angle — what connects user's experience to this domain
2. Pick one strong metric from achievements that resonates with this cluster
3. Write template following structure from skill (under 120 words, soft CTA, domain-specific)
4. Show template to user for review

**Template rules (from skill):**
- One metric per template
- Specific to company's domain
- Under 120 words
- Soft CTA
- Anti-patterns: no corporate speak, no "express my interest", no CV dump

### Step 8: Initialize outreach plan

Add Stats section to `outreach_plan.md` with all counts at zero.

### Step 9: Update indexes

1. Update `hypotheses/hypotheses_index.md` — add Campaign link to the hypothesis entry
2. If hypothesis was `📋 Queued` → change to `🔬 In progress`
3. Update `hypotheses/[slug]/hypothesis.md` — add campaign link in Execution Plan

### Step 10: Confirm next steps

Show summary:
- N companies in N clusters
- Track A: N companies (formal) / Track B: N companies (cold)
- CV snapshot: which role
- Templates: N clusters ready

Suggest: "Ready to start with Priority 1? I'll personalize the first message for [Company A]."

---

## Quiz Questions

Use `askUserQuestions` for Step 2:

1. **Where do the companies come from?**
   - Job board URL
   - LinkedIn post / thread
   - Manually curated list
   - Other

If URL → ask:
2. **Want me to browse the page and extract company names?** (yes/no)

For Step 3 (if positioning TBD):
3. **What role are you pitching?** (free text)

---

## Example Flow

**User:** `/start-campaign`

**Claude reads hypotheses_index.md...**

**Claude:** Found 2 hypotheses:
1. 🔬 Post-raise startups cold outreach (already has campaign)
2. 📋 Scaling Europe job board — no campaign yet

Starting campaign for **Scaling Europe**. Where do the companies come from?

**User:** "https://scalingeurope.co.uk/jobs — I want to browse and filter relevant roles"

**Claude:** Let me browse the page and extract companies...

**[Browses URL, extracts company names + roles]**

**Claude:** Found N companies with relevant roles. Here are the clusters:
- **EdTech / Future of Work:** Company A, Company B, Company C
- **FinTech:** Company D, Company E
- **Enterprise SaaS:** Company F, Company G, Company H

Track A (formal): 3 companies with matching JDs
Track B (cold): 5 companies

Priority 1: Company A (perfect fit), Company D (strong match)
Priority 2: Company B, Company E, Company F
Priority 3: Company C, Company G, Company H

Does this look right?

**User:** "Move Company C to do not send — I already talked to them"

**[Updates plan]**

**Claude:** CV ready from `role_product_manager/cv.md`. Snapshotted.

Here's the template for EdTech cluster:

> Hi [Name],
> I noticed [Company] is building [specific thing] — that caught my eye because I've shipped similar products in education space.
> At my last role, I onboarded 1,200+ learners in 6 months from scratch — would be happy to chat about how that experience might translate.
> Best, Ekaterina

Want me to adjust the tone or try a different hook?

**User:** "Good, let's go with this"

**[Creates all templates, initializes log]**

**Claude:** Campaign ready:
- 8 companies in 3 clusters
- Track A: 3 formal / Track B: 5 cold
- CV: Product Manager snapshot
- Templates: 3 clusters

Ready to start with Priority 1? I'll personalize the message for Company A.

---

## Tips

- **Always check existing campaigns** — don't create duplicate folders
- **Cluster before templating** — clusters drive template hooks
- **Show before writing** — let user review plan and templates before saving
- **One CV per campaign** — if multiple roles, snapshot both but note which is for which
- **Priorities are flexible** — user may want to start with P2 if P1 companies need more research
- **Track assignment can change** — a Track B company might become Track A if a JD is found

---

## Output

Created in `applications/my_data/campaign_[name]/`:
- `outreach_plan.md` — companies, clusters, tracks, priorities, stats
- `cold_outreach_templates.md` — message templates per cluster
- `cv_sent.md` — CV snapshot
- `messages/` — empty, ready for individual messages

Updated:
- `hypotheses/hypotheses_index.md` — campaign link + status → In progress
- `hypotheses/[slug]/hypothesis.md` — campaign link in Execution Plan

Next step: Start messaging Priority 1 companies (personalize templates → write to `messages/`)
