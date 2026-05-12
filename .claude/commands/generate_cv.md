# Generate Tailored CV from Skills Mapping

**Goal:** Generate a CV tailored to a target role, using the tiered stories from `skills_mapping.md`.

**⚠️ Prerequisite:** This command should be run AFTER `/map-skills` has completed AND the user has explicitly chosen to apply (🟢 Go or 🟡 Go with caveats in the Readiness Assessment).

**Why a separate command:** CV generation is a commitment — you've decided to apply with the evidence you have. Splitting it from skills mapping forces a deliberate decision point and prevents auto-generating CVs that hide real gaps.

---

## Instructions for Me (Claude)

### Pre-Flight Check

1. **Identify the target role**:
   - Ask user which target role folder to generate CV for
   - List all folders in `target_roles/my_data/`

2. **Verify readiness**:
   - Read `skills_mapping.md` for the chosen role
   - Check the **Readiness Assessment** section
   - **If no Readiness Assessment exists** → tell user: "No readiness assessment found. Run `/map-skills` first to assess fit before generating a CV." STOP.
   - **If scenario is 🟠 Wait & strengthen, 🔴 Not yet, 🔄 Pivot, or ❌ Skip** → tell user: "The readiness assessment recommended [scenario]. Are you sure you want to generate a CV anyway?" Wait for explicit confirmation.
   - **If decision was 'Add stories first' or 'Strengthen' but stories haven't been added/strengthened** → confirm with user before proceeding.
   - **If scenario is 🟢 Go or 🟡 Go with caveats** → proceed.
   - **Coverage is 100% Critical + High and there's no Readiness Assessment** → that's fine (Phase 6 was skipped intentionally), proceed.

3. **Read all required inputs**:
   - `skills_mapping.md` — for tiering, story selections, and Domain-Specific Adjustments
   - `role_profile.md` — for Domain Context, keywords, role title
   - All story files referenced in Tier 1 and Tier 2 — full STAR narratives (do NOT use summaries)
   - All company profile files for companies referenced — for supporting details (branch counts, user numbers, tools)
   - All `jd_*.md` files in the role folder — to mirror exact action verbs and keywords

### Domain Selection

4. **Pick domain framing**:
   - **If role_profile has Domain Context with multiple domains** → ask user: "This role has multiple domain framings ([Domain 1], [Domain 2]). Which domain is the target company in?"
   - **If only one domain** → use that domain's tiering and framing automatically
   - **If no Domain Context** → use general tiering, no domain framing

### Currency

5. **Confirm currency**:
   - If the target company is international → ask: "What currency should I use? (EUR for EU companies, USD for US, GBP for UK, etc.)"
   - Default: match the currency in the user's most recent role unless told otherwise

### CV Composition

6. **Use the CV template** from `target_roles/template_role/cv.md` (or `references/cv_template.md`):
   - Follow EXACTLY the structure: Summary → Experience → (Projects optional) → Certifications → Education → Skills & Languages

7. **Write the Summary paragraph** (no heading):
   - Format: `[Role Title]` + `years of experience` + `key skills/areas` + `key results with metrics` + `your value/superpower` + `motivation if applicable`
   - 2-3 sentences max
   - **Prioritize achievements from the primary company**
   - Use Tier 1 stories
   - Apply domain-specific framing if applicable

8. **Generate Work Experience** (per company, recency-first):
   - **Company line:** `Company Name, one-line company description` → tab → `City, Country`
   - **Role line:** `Role title` → tab → `Month 20XX – now`
   - **Mission line:** `Summary or mission: [Strong verb] [team/project] [product] [result in numbers]`
   - **Bullets:**
     - Primary company: 3-4 bullets — assign Tier 1 stories
     - Previous companies: 2-3 bullets — Tier 2 stories
     - Earlier companies: 1-2 bullets — strongest metrics only

9. **Bullet format (CRITICAL):**
   - **Format:** `[Strong verb] [result] due to / by [action]`
   - **Result FIRST** — then how
   - Every bullet MUST have a number/metric
   - Use strong verbs from JD (Led, Built, Grew, Reduced, Launched, etc.)
   - Mirror JD language exactly for ATS
   - Apply domain-specific framing from Domain Context

10. **Projects section (OPTIONAL — DO NOT add by default):**
    - Only include if a `Type: project` story clearly strengthens the candidate's position for THIS specific role
    - Format: 1-2 lines max per project — name, description, scale, one impressive metric
    - Placed between Experience and Certifications
    - **Project stories NEVER appear in Experience section**

11. **Skills & Languages (combined):**
    - Format: General skills & Specific skills → Tools, Programming → Languages with levels
    - Only list skills actually demonstrated in achievements
    - Mirror JD terminology

### Quality Verification (mandatory before output)

12. **Run automatic proofread**:
    - **Metric verification:** Every number in CV exists in source story or company profile
    - **Causal verification:** Each bullet's action DIRECTLY caused the claimed result (verify in source story — don't mix outcomes from different sub-actions)
    - **Metric entity verification:** Every number specifies WHO it refers to (employees, users, students, customers)
    - **Framing alignment:** CV language matches the framing in source stories/company profiles
    - **Currency consistency:** All money figures use the same currency
    - **Logical sense:** Every phrase makes sense ("2.6× growth from zero" is contradictory — flag)
    - **Style rules:**
      - NO arrows (→) — use "from X to Y"
      - NO plus signs (+) — use "and" or ","
      - Human writing, not LLM-style

13. **Story-company mapping check:**
    - For each bullet, verify the story belongs to the company section where it's placed
    - Stories don't migrate between companies

14. **Quality checklist** (from CLAUDE.md):
    - [ ] All bullets have metrics
    - [ ] CV follows template format (result-first bullets, mission line, etc.)
    - [ ] CV uses domain-specific framing and vocabulary
    - [ ] Currency matches target company context
    - [ ] No project-type story in Experience section
    - [ ] If Projects section included, justified by clear value-add for this role
    - [ ] Every phrase makes logical sense
    - [ ] User can speak to every bullet in interview

### Output

15. **Write CV to** `target_roles/my_data/[role_folder]/cv.md`:
    - Use YAML frontmatter (role, company, version, last_updated, based_on)
    - Add "Notes for AI" section at the bottom listing which stories were used and what was de-emphasized

16. **Show preview & confirm**:
    - Present the full CV
    - Highlight any flags from proofreading
    - Ask: "Want me to refine anything?"

---

## Quiz Questions to Start

1. **Which target role do you want to generate a CV for?**
   - Type: single choice
   - Options: List all folders in `target_roles/my_data/` directory

---

## Example Conversation Flow

**User:** /generate-cv

**Claude:**
Let's generate your CV.

**[Quiz: Which target role?]**

**Claude:**
I'll generate a CV for **[Role Title]**.

Reading `skills_mapping.md`...

✅ Readiness Assessment found: **🟢 Go** scenario, with decision "Generate CV now". Proceeding.

The role profile lists two domains: EdTech and General SaaS. Which domain is the target company in?

**[User responds: EdTech]**

**Claude:**
Using EdTech-specific tiering and framing.

Currency? Target company is in [Country], so I'll use [EUR/USD/etc.] — confirm?

**[User confirms]**

**Claude:**
Generating CV...

[Reads all Tier 1 and Tier 2 stories + company profiles + JDs]

[Composes CV: Summary → Experience → Skills]

[Runs proofread checks]

**Claude:**
CV ready. Here's a preview:

[Shows full CV]

⚠️ **Proofread flags:**
- Bullet 3 in Company X uses "scaled engagement 117%" — but story_5 says 117% was capacity scale. Recommend fix to "scaled capacity from 82 to 178 students".

Want me to apply these fixes and refine anything else?

---

## Refusal Conditions

**Refuse to generate CV when:**

1. **No skills_mapping.md exists** → "Run `/map-skills` first."
2. **No Readiness Assessment in skills_mapping.md AND coverage is incomplete** → "Run `/map-skills` to assess readiness before generating a CV."
3. **Readiness Assessment scenario is 🔴 Not yet** → require explicit user override: "The assessment said 🔴 Not yet because [reason]. Are you sure?"
4. **User asks for CV without choosing a role** → ask first.
5. **Required story files missing** → list missing files, suggest creating them via `/add-achievement`.

---

## Tips for Me

- **Read FULL story narratives** — never use stories_index summaries as source for bullet content
- **Read company profiles too** — for supporting details
- **Mirror JD language** — exact phrases for ATS
- **Result FIRST in every bullet** — never lead with action
- **Every bullet has a number** — no exceptions
- **Domain framing matters** — use vocabulary from Domain Context
- **Proofread is mandatory** — never skip the verification step
- **Flag, don't hide** — if something doesn't quite fit, surface it instead of hiding
- **Causal chains** — check that the action in a bullet directly caused the result claimed (don't merge outcomes from different sub-actions in the source story)

---

## Output

Updated/Created: `target_roles/my_data/[role_folder]/cv.md`

Files created/updated:
- ✅ CV tailored to this target role with domain-specific framing
- ✅ Proofread against story files AND company profiles
- ✅ All metrics verified against source documents
