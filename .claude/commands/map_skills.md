# Map Achievements to Target Role & Generate CV

**Goal:** Match your STAR achievements to target role requirements and generate a tailored CV, using a waterfall approach: primary company first → fill gaps → strengthen → generate.

---

## Instructions for Me (Claude)

### Pre-Work: Understand the Target Role

1. **Identify the target role**:
   - Ask user which target role folder to work with
   - List all folders in `target_roles/my_data/`
   - Read `role_profile.md` to understand merged requirements
   - **Read Domain Context section** from role_profile.md — this influences story selection, tiering, and framing
   - **Read ALL JD files** (`jd_*.md`) in the role folder — the full original JD texts, not summaries
   - Read `skills_mapping.md` (if exists — previous mapping to build on)

2. **Identify primary company** (Phase 1):
   - Scan all company profiles in `companies_i_worked/my_data/`
   - Determine which company best matches this role:
     - Default: most recent company
     - Override: if a previous company matches domain/industry/role type significantly better
   - Ask user to confirm: "I think [Company X] is the best primary match for this role because [reason]. Agree?"

### Phase 2: Primary Company Deep Dive

3. **Read primary company profile FIRST**:
   - Read the primary company profile file
   - Build context map: tools, stakeholders, culture, responsibilities, team structure
   - Identify experience from profile that may not have dedicated stories (e.g., NPS work, procurement)

4. **Read primary company stories**:
   - Read stories_index for overview
   - Read ALL stories from the primary company → full STAR narratives
   - ⚠️ **NEVER use stories_index summaries as source for CV bullet content**

5. **Map ALL JD requirements against primary company**:
   For each JD requirement (Critical → High → Medium):
   - Find matching stories from the primary company
   - Extract quote-based evidence from FULL narratives
   - Rate coverage: ✅ Strong / ⚠️ Moderate / ❌ Gap
   - Check company profile for undocumented experience that could fill gaps

6. **Build Primary Coverage Map**:
   - Create a table: Skill | Priority | Status | Best Story | Notes
   - Highlight gaps (❌ and ⚠️) that need filling from other companies

### Phase 3: Sequential Gap Filling

7. **Go through previous companies in reverse chronological order**:

   For each previous company:
   a. Read company profile → understand context
   b. Read ALL stories from this company → full STAR narratives
   c. For each remaining gap, check if any story covers it
   d. Also check company profile for undocumented experience
   e. Update coverage for newly filled gaps
   f. Move to next company → repeat

   **Continue until:** all gaps filled OR all companies checked

   **If a company is clearly irrelevant** → ask user: "[Company Y] seems quite different from this role. Should I still check it for relevant stories?"

8. **Identify remaining genuine gaps** — skills with no evidence from any company

### Phase 4: Strengthening by Priority

9. **Strengthen Critical skills**:
   For each Critical skill already covered by primary company:
   - Search ALL other companies for additional/complementary stories
   - If found → add to coverage (primary story stays primary; additional provides depth)
   - This gives options: different story for each company's CV section

10. **Strengthen High skills**: Same process across all companies

11. **Strengthen Medium skills**: Same, but only if compelling stories exist

12. **Skip companies with no relevant stories** — ask user if unsure

### Phase 5: Final Tiering & Output

13. **Assign stories to tiers**:
    - **Tier 1:** Primary company stories for Critical/High skills + dramatically stronger stories from other companies
    - **Tier 2:** Strengthening stories, gap-filling stories, Medium skill stories
    - **Tier 3:** Nice-to-have, less relevant stories
    - Verify: Primary company has the most Tier 1 stories

14. **Fill skills_mapping.md** using template:
    - Phase 1: Primary Company Coverage (all skills mapped)
    - Phase 2: Gap Filling from Previous Companies (per company)
    - Phase 3: Strengthening by Priority (Critical → High → Medium)
    - Final Coverage Map
    - Story Recommendations with tiering
    - **Create Domain-Specific Adjustments** for each domain in the role_profile's Domain Context
    - Remaining Gaps
    - Go/no-go recommendation

15. **Suggest missing experience** (proactive gap filling):

    For every remaining gap and moderate coverage skill, check if the user might have undocumented experience:

    **a. Company profile mining:**
    - Look at company profiles for relevant experience not in stories
    - Example: "JD asks for NPS experience. Your profile at Company X mentions 'NPS program'. Did you work on this?"

    **b. Role-based inference:**
    - Based on user's job title and level, what would they typically have done?
    - Example: "As a Senior PM, you likely did roadmap prioritization. Do you have a story?"

    **c. Industry pattern matching:**
    - Skills common in the user's industry that match JD requirements
    - Example: "You worked in SaaS and JD asks for churn reduction. Did you work on retention?"

    **Present suggestions grouped by confidence:**
    - 🔴 **High confidence** (company profile evidence)
    - 🟡 **Medium confidence** (role-based)
    - 🟢 **Worth checking** (industry pattern)

    **Always ask questions, don't assume. If user confirms → suggest `/add-achievement` to create the story, then re-run mapping.**

### CV Generation

16. **Generate CV in cv.md**:
    - **If role_profile has Domain Context with multiple domains** → ask user which domain to target
    - **If only one domain** → use that domain's tiering and framing automatically
    - Use domain-specific tiering from skills_mapping.md (not general tiering)
    - Apply domain-specific framing from Domain Context
    - Write professional summary using Tier 1 achievements (domain-framed)
    - Create work experience bullets from Tier 1 and Tier 2 (domain-framed)
    - **Primary company gets the most bullets (3-4)**, other companies: 2-3, earlier: 1-2
    - Emphasize target role's priority keywords + domain-specific keywords
    - Include all metrics from achievements
    - Mirror action verbs from JD
    - **Ask about currency** if target company is international (EUR for EU, USD for US)
    - **Run automatic proofread** against BOTH story files AND company profile documents:
      - Verify every metric against source documents
      - Check every phrase makes logical sense
      - Ensure no contradictions
      - Flag any facts that come from company profile but NOT from story file

17. **Show outputs and confirm**:
    - Present skills mapping summary (per phase)
    - Show CV preview
    - Ask if user wants edits
    - Flag any critical gaps

---

## Quiz Questions to Start

1. **Which target role do you want to map achievements to?**
   - Type: single choice
   - Options: List all folders in `target_roles/my_data/` directory

---

## Example Conversation Flow

**User:** /map-skills

**Claude:**
Let's map your achievements to a target role and generate a CV.

**[Quiz: Which target role?]**

**Claude:**
I'll analyze the **[Role Title]** target role.

First, let me identify the best primary company for this role. Based on the JD domain ([domain]) and your work history, I think **[Company X]** is the best primary match because [reason]. Agree?

**[User confirms or adjusts]**

**Claude:**
Analyzing **[Company X]** (primary) against all JD requirements...

**[Reads company profile, then all stories from primary company]**

**Claude:**
Here's the primary coverage:

| Skill | Priority | Status | Best Story |
|-------|----------|--------|------------|
| Skill 1 | Critical | ✅ Strong | story_1 |
| Skill 2 | Critical | ✅ Strong | story_3 |
| Skill 3 | Critical | ⚠️ Moderate | story_2 |
| Skill 4 | High | ❌ Gap | - |

Gaps to fill: Skill 3 (weak), Skill 4 (none). Let me check your previous companies...

**[Reads Company Y profile + stories, then Company Z...]**

**Claude:**
Gap filling results:
- Skill 4 → filled by story_7 from [Company Y]
- Skill 3 → no stronger story found

Now strengthening Critical/High skills with additional stories from other companies...

**[Phase 4 analysis]**

**Claude:**
Full coverage map ready. Tiering:

**Tier 1:** story_1, story_3 (primary company)
**Tier 2:** story_7 (gap fill), story_5 (strengthening)
**Tier 3:** story_4

**Recommendation:** ✅ Apply

**[User responds]**

**Claude:**
I've updated `skills_mapping.md` with full analysis. Now generating your CV...

**[Generates CV based on tiered stories]**

**Claude:**
Your CV is ready! Here's a preview:

**[Shows CV preview]**

---

## Tips for Me

- **Waterfall, not parallel** — don't read all companies at once. Read per-phase, per-company.
- **Read company profile FIRST for each company** — always, before stories. Profile provides context.
- **Be thorough** — read ALL story files (FULL narrative), not just summaries
- **Match keywords** — use exact JD phrases in achievements for ATS optimization
- **Prioritize metrics** — achievements with numbers beat achievements without
- **Flag gaps clearly** — don't hide missing skills
- **Be honest about go/no-go** — if critical skills are missing, recommend skipping
- **Mirror JD language** — use their words in the CV (ATS matching)
- **Every bullet needs a number** — if a story lacks metrics, flag it
- **Facts only** — never add info not in the story file. No inferences, no mixing sources.
- **Verify story-company mapping** — for each CV bullet, check that the story belongs to the company section where it's placed
- **Use stories_index for NAVIGATION only** — never as source for bullet content
- **Suggest missing experience proactively** — for every gap, check company profiles, role patterns, and industry patterns before concluding it's a genuine gap
- **Ask, don't assume** — always phrase suggestions as questions: "Did you do X?" not "You did X"
- **Use Domain Context** — when role_profile has Domain Context, use it to frame stories and select tiering
- **Proofread against BOTH stories AND company documents** — company profiles contain details that complement stories
- **Check currency** — for international companies, ask what currency to use
- **Check logical sense** — every phrase must make logical sense
- **Primary company dominance** — primary company should have the most Tier 1 stories and the most CV bullets

---

## Mapping Algorithm (within each phase)

For each skill being analyzed:

1. **Deep story analysis** — Read the FULL STAR narrative:
   - What did you actually DO in this story?
   - How do those actions demonstrate this skill?
   - What metrics prove the impact?

2. **Quote-based evidence:**
   - Extract specific quotes from the story
   - Explain the connection: "This demonstrates [skill] because..."

3. **Rate coverage:**
   - **Strong:** Story has clear action + metrics directly showing skill
   - **Moderate:** Story implies skill or has weak metrics
   - **Gap:** No story demonstrates this skill

4. **One story → multiple skills:**
   - A single story can demonstrate multiple skills
   - Extract different aspects for different skills
   - Same story may cover "data analysis" for one target role, "process improvement" for another

5. **Multi-story skills:**
   - When a skill is covered by stories from multiple companies, note ALL
   - This allows placing the best story in each company's CV section
   - Don't duplicate the same story across company sections

---

## CV Generation Rules

**Follow the template from `target_roles/template_role/cv.md` (or `references/cv_template.md`) exactly.**

1. **Summary Paragraph (no heading):**
   - Format: `[Role Title]` + `years of experience` + `key skills/areas` + `key results with metrics` + `your value/superpower` + `motivation if applicable`
   - 2-3 sentences max
   - **Prioritize achievements from the primary company**

2. **Work Experience Structure (per company):**
   Each company block has:
   - **Company line:** `Company Name, one-line company description` → tab → `City, Country`
   - **Role line:** `Role title` → tab → `Month 20XX – now`
   - **Mission line:** `Summary or mission: [Strong verb] [team/project] [product] [result in numbers]`
   - **Bullets:** 3-4 for primary company, 2-3 for others, 1-2 for earlier

3. **Bullet Format (CRITICAL):**
   - **Format:** `[Strong verb] [result] due to / by [action]`
   - **Result goes FIRST** — then how you achieved it
   - Every bullet MUST have a number/metric
   - Use strong verbs from JD (Led, Built, Grew, Reduced, Launched, etc.)
   - **Best stories go to the primary company** — assign Tier 1 stories there first

4. **Skills & Languages (combined section):**
   - Format: General skills & Specific skills → Tools, Programming → Languages with levels
   - Only list skills actually demonstrated in achievements
   - Mirror JD terminology

5. **What to exclude:**
   - Tier 3 achievements (unless space allows)
   - Irrelevant experience
   - Stories without metrics (flag these first)

---

## Output

Updated: `target_roles/my_data/[target role_folder]/skills_mapping.md`
Updated: `target_roles/my_data/[target role_folder]/cv.md`

Files created/updated:
- ✅ Skills mapping with waterfall phases, coverage tables, and recommendations
- ✅ CV tailored to this target role with matched achievements
- ✅ Go/no-go recommendation based on critical skills
