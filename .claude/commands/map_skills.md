# Map Achievements to Target Role & Assess Readiness

**Goal:** Match STAR achievements to target role requirements, assess readiness, decide whether to apply.

**⚠️ This command does NOT generate a CV.** That happens in `/generate-cv` AFTER you decide to apply.

**⚠️ RATE LIMIT PROTECTION:** This command runs in up to 3 steps to avoid API 429 errors. Each step stays under ~12 tool calls. Steps run in the SAME conversation turn when possible; move to a new turn if you get a 429 error.

---

## How It Works: 3-Step Pipeline

| Step | Flag | What it reads | What it writes | ~Tool calls |
|------|------|---------------|----------------|-------------|
| 1 | `/map-skills` (default) | role_profile + primary company profile + stories_index + primary stories (~7) | Phase 1 of skills_mapping.md | ~10 |
| 2 | `/map-skills --reinforce` | Previous company profiles + stories + project stories | Phase 2-3 of skills_mapping.md | ~13 |
| 3 | `/map-skills --finalize` | Current skills_mapping.md + role_profile.md only | Tiering + Coverage Map + Readiness + CV Insights | ~3 |

**Auto-advance rules:**
- If Step 1 gives 100% Critical + High coverage → offer to skip Step 2 and go to Step 3
- If user says "заново" or "полный маппинг" → run all 3 steps
- If any step gets 429 → tell user to run next step in a new message

---

## Step 1: Primary Company Deep Dive (`/map-skills`)

### Pre-Work

1. **Identify target role:**
   - If argument specifies role → use that
   - Otherwise list folders in `target_roles/my_data/` and ask user
   - Read `role_profile.md` for merged requirements + Domain Context

2. **Identify primary company:**
   - Default: most recent company
   - Override: if a previous company matches JD domain/industry significantly better
   - Confirm with user

### Execution

3. **Read files** (batch in parallel where possible):
   - `role_profile.md` from target role folder
   - Primary company profile from `companies_i_worked/my_data/`
   - `stories_index.md` for navigation
   - ALL stories from primary company (full STAR narratives)
   - ⚠️ **NEVER use stories_index summaries as analysis source**

4. **Map ALL JD requirements** against primary company stories:
   - For each skill (Critical → High → Medium): find matching stories
   - Extract quote-based evidence from FULL narratives
   - Rate coverage: ✅✅✅ Strong / ✅✅ Good / ✅ Adequate / ❌ Gap

5. **Write Phase 1** to `skills_mapping.md`:
   - Header + Coverage Summary (partial)
   - Phase 1: Primary Company Coverage (all skills mapped with quotes + evidence)

6. **Report to user:**
   - Show coverage table: Skill | Priority | Status | Best Story
   - If 100% Critical + High → say "Primary company covers everything! You can skip reinforcement. Run `/map-skills --finalize` to complete."
   - If gaps → say "Found N gaps. Run `/map-skills --reinforce` to check previous companies, or `/map-skills --finalize` to proceed with current coverage."

---

## Step 2: Reinforcement (`/map-skills --reinforce`)

### When to Run
- Primary coverage has gaps (❌ or ⚠️)
- OR user wants full career narrative depth (8+ years across companies)

### Execution

1. **Read files** (batch in parallel):
   - Previous company profiles (all in `companies_i_worked/my_data/`)
   - ALL stories from previous companies (full STAR narratives)
   - Project-type stories (`Type: project`)
   - Current `skills_mapping.md` (to know which gaps to fill)

2. **Gap filling** (reverse chronological):
   - For each previous company: check stories against remaining gaps
   - For project stories: check against gaps (note: projects go to CV Projects section only)
   - If a company is clearly irrelevant → ask user before reading

3. **Strengthening by priority**:
   - For Critical skills: find additional stories from other companies
   - For High skills: same
   - For Medium: only if compelling stories exist

4. **Write Phase 2-3** to `skills_mapping.md` (append/overwrite):
   - Phase 2: Gap Filling from Previous Companies
   - Phase 3: Reinforcement (per company, which skills they reinforce)

5. **Report to user:**
   - What gaps were filled, what remains
   - Suggest `/map-skills --finalize` to complete

---

## Step 3: Finalize (`/map-skills --finalize`)

### When to Run
- Always the LAST step — after Step 1 (and optionally Step 2)
- This step NEVER reads story files — only works with data already in skills_mapping.md

### Execution

1. **Read files** (minimal — just 2):
   - Current `skills_mapping.md` (contains all coverage data)
   - `role_profile.md` (for Domain Context)

2. **Compute final outputs** (no file reads needed):
   - Final Coverage Map (table with all companies)
   - Story Tiering (Tier 1/2/3 based on coverage)
   - Domain-Specific Adjustments (from role_profile Domain Context)
   - Remaining Gaps
   - Suggested Experience to Document (check company profiles from context if available)
   - CV Insights (value prop, differentiators, keywords, framing)

   **⚠️ Career Narrative Rule:**
   - ALL relevant companies MUST appear in the CV to show total years of experience, career progression, and breadth
   - Bullet count decreases by recency (3-4 primary, 2-3 previous, 1-2 earlier)
   - **Non-relevant early experience CAN be dropped** if your relevant experience already meets or exceeds the JD's years-of-experience requirement (e.g., JD asks for 5 years and you have 6+). The CV is not an autobiography.
   - **BUT never drop a company in the middle** — this creates an unexplained gap. Either show the full chain or cut from the beginning
   - Only exception to middle-dropping: user explicitly requests it

3. **Readiness Assessment:**
   - ⚠️ **SKIP full assessment if 100% Critical + High coverage** → just write 🟢 GO
   - Otherwise:
     - Calculate coverage summary (Critical %, High %, Medium %)
     - Determine scenario: 🟢 Go / 🟡 Go with caveats / 🟠 Wait / 🔴 Not yet
     - For each gap: present 5 action options (add achievement / training / pet-project / reframe / accept)
     - Ask user for decision
     - Record decision in skills_mapping.md

4. **Write final sections** to `skills_mapping.md` (single Write):
   - All computed sections above
   - Readiness Assessment (if needed)

5. **Report to user + suggest next step:**
   - 🟢 → suggest `/generate-cv`
   - 🟠 → suggest `/add-achievement` for fillable gaps
   - 🔴 → suggest training/pause
   - 🔄 → suggest pivot to adjacent role

---

## Tips for Me

- **Read in parallel** — batch multiple Read calls in one message to reduce API round-trips
- **Read company profile FIRST** for each company — always before stories
- **Be thorough with stories** — read FULL narratives, not just summaries
- **Quote-based evidence** — extract specific quotes, explain connection to skill
- **Rate honestly** — if Critical skills are missing, recommend 🔴 Not yet
- **Ask, don't assume** — "Did you do X?" not "You did X"
- **Use Domain Context** from role_profile for tiering and framing
- **NEVER auto-generate CV** — readiness gate is hard
- **Skip full Readiness Assessment if 100% Critical + High** — just write 🟢 GO
- **Protect against 429** — if approaching ~12 tool calls in a step, stop and tell user to continue in a new message

---

## Mapping Algorithm

For each skill being analyzed:

1. Read FULL STAR narrative → what did you DO?
2. How do those actions demonstrate this skill?
3. Extract quotes: "This demonstrates [skill] because..."
4. Rate: Strong (clear action + metrics) / Moderate (implies or weak metrics) / Gap (no evidence)
5. One story can cover multiple skills — extract different aspects
6. Multi-story skills: note ALL stories from ALL companies

---

## Output

Updated: `target_roles/my_data/[role_folder]/skills_mapping.md`

- Step 1 → Phase 1 (primary coverage)
- Step 2 → Phase 2-3 (gap filling + reinforcement)
- Step 3 → Final Coverage Map + Tiering + Readiness + CV Insights

**No CV generated** — that's `/generate-cv` only after 🟢 Go decision.
