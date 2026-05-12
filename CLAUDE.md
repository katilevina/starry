# CLAUDE: Job Hunt System Instructions

**Purpose:** Overview of how I work with achievements, companies, target roles, and CVs in this project

**🗣️ Communication Style:** Use informal address with the user ("ты" in Russian, informal "you" in English, or equivalent informal address in whatever language we're communicating in).

**Last Updated:** 2026-05-08 (added cover-letters skill and /write-cl command)

***

## ⚠️ TOOL USAGE NOTE

**Glob не видит скрытые папки** (начинающиеся с `.`). Папка `.claude/` скрытая — для её просмотра всегда используй `bash` с командами `find` или `ls -la`, а не Glob.

Пример:

```bash
find /path/to/project/.claude -type f | sort
ls -la /path/to/project/.claude/skills/
```

***

## 🎯 PROJECT PRINCIPLES

1. **FACTS ONLY** — Never invent or assume. If something is missing → ask the user
2. **TEMPLATABLE** — Everything I create should be reusable for other people
3. **ITERATIVE** — Start with what we have, refine over time
4. **TRACEABLE** — Each achievement should link to specific skills/keywords

***

## 📚 SKILLS (Agent Skills Format)

**Skills are comprehensive guides** for each major workflow. Skills follow the [Agent Skills specification](https://agentskills.io/specification.md).

### Available Skills

**📝 STARR Achievements** → `.claude/skills/starr-achievements/SKILL.md`

* Complete guide to creating achievement stories
* STARR structure (Situation, Task, Action, Result, Reflection)
* Number mining and metrics extraction
* Story template in `references/template_story.md`
* Importing pre-written achievements

**🏢 Company Profiles** → `.claude/skills/company-profiles/SKILL.md`

* Building company profiles FROM achievements (not the other way around)
* Auto-extraction of responsibilities, tools, team size from achievements
* Company profile template in `references/company_template.md`
* Extraction algorithms

**🎯 Job Analysis, Readiness Assessment & CV Generation** → `.claude/skills/job-analysis/SKILL.md`

* Analyzing job descriptions (JDs)
* Extracting requirements, keywords, and skills by priority
* Skills mapping algorithm
* **Readiness Assessment** with consultant-style gap advice (4 scenarios: 🟢 Go / 🟡 Go with caveats / 🟠 Wait & strengthen / 🔴 Not yet) and 5 action options per gap (add achievement, training, pet-project, reframe, accept)
* **Decision gate** between skills mapping and CV generation — no auto-generation
* Three templates in `references/`: role\_profile\_template.md, skills\_mapping\_template.md, cv\_template.md
* CV generation rules (only after explicit "Go" decision)

**⚡ Company Context** → `.claude/skills/company-context/SKILL.md`

* Quick setup: collecting company context upfront
* Web research for triggering memories
* How context enables smarter achievement gathering
* Integration with other workflows
* Reference guide in `references/quick_setup_reference.md`

**📨 Applications Tracking** → `.claude/skills/applications/SKILL.md`

* Snapshot CVs at time of sending (role folder CVs evolve, applications must be frozen)
* Track status funnel: Sent → Replied → Screening → Interview → Offer → Accepted
* Calculate conversion rates
* Diff notes: what user changed from generated CV version
* `applications_index.md` as master tracking file

**✉️ Cover Letters** → `.claude/skills/cover-letters/SKILL.md`

* Writing effective cover letters that differentiate you from other candidates
* Structure: Intro → Why you're a fit → Motivation → Optional personal hook → Call to action
* Best practices and anti-patterns (what NOT to do)
* Template in `references/cl_template.md`
* Examples of good/bad CLs in `references/cl_examples.md`
* Integration with CV + JD for personalized, specific cover letters

**🔧 Fix Errors** → `.claude/skills/fix-errors/SKILL.md`

* Find and fix errors across ALL source files when user spots an inaccuracy
* Propagates fixes from source (stories, companies, indexes) to all derived documents
* Handles framing errors, metric entity errors, causal attribution, titles, facts
* Triggers automatically when user says something is wrong or needs correction

***

## 🤖 COMMANDS (Interactive Workflows)

**Commands are interactive flows** that use skills as reference.

### Available Commands

**`/quick-setup`** — Quick company context gathering (recommended first step!)

* Collects basic info for all companies
* Optional web research for each company
* Creates draft company profiles

**`/add-achievement`** — Interactive STARR achievement gathering

* Uses company context to ask smart questions
* Guides through STARR structure step-by-step
* Probes for metrics continuously
* Creates achievement file + updates index

**`/add-company`** — Update/refine company profile

* Built FROM existing achievements (always checks first)
* Extracts responsibilities, tools, achievements automatically
* Fills gaps with targeted questions

**`/analyze-role`** — Analyze job description + create target role

* Extracts requirements, keywords, skills from JD
* Categorizes by priority (critical/high/medium)
* Creates target role folder with 3 files

**`/map-skills`** — Map achievements to target role + readiness assessment (3-step pipeline for rate limit protection)

* **Step 1 (default):** Primary company deep dive — reads role_profile + primary company + stories, writes Phase 1 of skills_mapping.md (~10 tool calls)
* **Step 2 (`--reinforce`):** Optional — reads previous companies + project stories, fills gaps + strengthens coverage (~13 tool calls)
* **Step 3 (`--finalize`):** Tiering + Coverage Map + Readiness Assessment + CV Insights (~3 tool calls)
* **Auto-advance:** If Step 1 gives 100% Critical+High coverage → offer to skip Step 2
* **Runs Readiness Assessment** (skipped only when 100% Critical+High coverage)
* Acts as a consultant: for each gap, presents 5 action options (add achievement / training / pet-project / reframe / accept)
* **Decision gate**: user explicitly chooses to apply now, add stories first, take a pause, pivot, or skip
* **Does NOT generate CV** — that's `/generate-cv`'s job

**`/generate-cv`** — Generate tailored CV from skills mapping

* Prerequisite: `/map-skills` has been run AND user chose 🟢 Go or 🟡 Go with caveats
* Reads tiered stories + role profile + Domain Context
* Asks for domain (if multiple) and currency
* Generates CV in cv.md following template strictly
* Runs proofread against story files AND company profiles
* Verifies metrics, causal chains, framing alignment, logical sense
* Refuses to generate CV if no readiness assessment exists or scenario is 🔴 Not yet (without explicit override)

**`/write-cl`** — Write cover letter for specific company

* Prerequisite: `/generate-cv` has been run for the target role
* Analyzes JD for tone, language, and specific requirements
* Reviews CV to identify most relevant achievements for this role
* Researches company to find personalized touchpoints
* Generates cover letter following effective structure:
  - Personalized intro (not generic)
  - 2-3 specific bullets with metric-backed achievements
  - Genuine motivation based on company research
  - Optional personal hook
  - Clear call to action
* Proofreads for grammar, tone, effectiveness
* Saves to `applications/app_[company]_[date]/cover_letter.md`
* Quality checklist: no fluff, specific metrics, company references, human tone

**`/fix`** — Fix error across all files

* User spots an error → skill searches all source + derived files
* Fixes source files first (stories, companies, indexes)
* Then fixes generated files (skills mappings, CVs, role profiles)
* Reports what was fixed and what wasn't (frozen snapshots)

**`/roles-status`** — Quick market response overview

* Reads `target_roles/my_data/roles_index.md`
* Shows Market Overview, What's Working / Not Working, Positioning, Strategy
* No need to open the file — just run the command

***

## ⚠️ TEMPLATE SYNC RULE

**CRITICAL:** Templates exist in TWO places and must be kept in sync:

1. **In skill references/** (`.claude/skills/[skill-name]/references/*.md`) — source of truth for templates
2. **In folders** (`achievements/template_story.md`, `achievements/template_stories_index.md`, `companies_i_worked/template_company.md`, `target_roles/template_role/*.md`) — for users who don't have skills enabled

**When updating templates:**

* If you update a template in `references/` → ALSO update the corresponding file in the folder
* If you update a template in a folder → ALSO update the corresponding file in `references/`
* Each reference file includes a reminder: `**⚠️ SYNC RULE:** This template must be kept in sync with [path]`

**Why both exist:**

* Skills \= primary source (theory + template in `references/` subdirectory)
* Folder templates \= backup for users without skills support
* Templates in folders are also used by commands when user doesn't have skills enabled
* **Skills in `.claude/skills/` follow Agent Skills specification** — each skill is a directory with `SKILL.md` file

**Current template locations:**

| Skill              | Skill Reference Template                                                              | Folder Template                                                            |
| ------------------ | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| starr-achievements | `references/template_story.md`                                                        | `achievements/template_story.md`, `achievements/template_stories_index.md` |
| company-profiles   | `references/company_template.md`                                                      | `companies_i_worked/template_company.md`                                   |
| job-analysis       | `references/role_profile_template.md`, `skills_mapping_template.md`, `cv_template.md` | `target_roles/template_role/role_profile.md`, `skills_mapping.md`, `cv.md` |
| company-context    | `references/quick_setup_reference.md`                                                 | N/A (reference guide only)                                                 |
| cover-letters      | `references/cl_template.md`                                                           | `applications/my_data/template_cover_letter.md`                            |

***

## 📋 FILE NAMING CONVENTIONS

**Achievements:** `story_[descriptive_slug].md` (e.g., `story_data_framework.md`)

**Companies:** `company_[slug].md` (e.g., `company_acme_corp.md`)

**Target Roles:** `role_[role_type_slug]/` folder with files inside (e.g., `role_product_manager/`, `role_design_ops/`)

* **Slug by ROLE TYPE, not company** — one folder accumulates JDs from multiple companies for the same role
* **JD files stored inside role folder** as `jd_[company]_[YYYY-MM-DD].md` — full original text, not summary
* Each new JD merges into existing role profile, refining requirements and improving CV

**JD files:** `jd_[company]_[YYYY-MM-DD].md` (e.g., `jd_jetbrains_2026-04-30.md`) — stored inside role folder

**ALL LOWERCASE** (except CLAUDE.md, README.md)

***

## ⚠️ CRITICAL: Chronological Story Numbering (Company-First)

**ALL achievements MUST be numbered chronologically, with PRIORITY given to grouping stories by company.**

**Rule: Company grouping takes priority over strict chronological order.**

When a user worked at Company A (e.g., 2020-2022) and Company B (e.g., 2021-2023), ALL stories from Company A come before ALL stories from Company B, even if their dates overlap. Within each company, stories are ordered chronologically by start date.

**Project-type stories** (`Type: project`) are numbered AFTER all employment stories. They don't participate in company-first grouping.

**When creating a new achievement:**

1. **If `Type: employment`:**
   1. Identify which COMPANY the new story belongs to
   2. Find the position of that company's story block (all stories for that company should be contiguous)
   3. Within the company block, sort by start date chronologically
   4. Place the new story in the correct position within its company block
   5. **If renumbering is needed:**
      * Renumber ALL stories after the insertion point (e.g., story\_03 → story\_04, story\_04 → story\_05...)
      * Update ALL references in: stories\_index.md, company files, companies\_index.md
      * Then create the new file with correct number
2. **If `Type: project`:**
   * Place AFTER all employment stories
   * Number chronologically within the projects section
   * No company profile to update

**Example:**

* Existing: story\_01 (Company X, 2015), story\_02 (Company X, 2019), story\_03 (Company Y, 2020), story\_04 (Company Y, 2022)
* New story from Company X, dated 2020 (overlaps with Company Y)
* **Correct:** New becomes story\_03 (end of Company X block), old story\_03 → story\_04, old story\_04 → story\_05
* **Wrong:** New becomes story\_05 (breaks company grouping)

**Why this matters:**

* Keeps each company's stories together for readability
* Within each company, shows evolution of skills over time
* CV generation assumes stories are grouped by company
* Avoids confusing interleaving of stories from different companies

***

## ⚠️ Story Types: Employment vs Project

Every story has a `**Type:**` field that determines how it flows through the system:

### `employment` (default)
* Work at a company as an employee or long-term contractor
* Gets a company profile in `companies_i_worked/`
* Appears in CV **Experience** section
* Numbered with company-first chronological grouping
* Link to company profile: `**See also:** [[company_slug]]`

### `project`
* Side project, consulting gig, personal project, volunteer work
* **No company profile** — all context lives in the story itself
* In CV: may appear in optional **Projects** section or **Summary**, never in Experience
* Numbered after all employment stories
* No `**See also:**` link to company profile

### How Type affects workflows:

* **Company profiles** → built from employment stories only
* **Skills mapping** → analyzes ALL stories (both types) for coverage
* **CV Experience** → employment stories only
* **CV Projects** → optional section, only if a project clearly strengthens the position
* **Stories index** → separate "Projects" section for project-type stories
* **Companies index** → employment only, no project stories referenced

***

## ✅ QUALITY CHECKLIST

Before finalizing any document:

**Achievements:**

* [ ] All claims have numbers/metrics
* [ ] No invented details
* [ ] Complete STARR (all 5 sections)
* [ ] Reflection included (learning + what you'd change)
* [ ] No skills/keywords extracted (that's per-target-role)
* [ ] Linked to related companies *(employment only — project stories don't link to companies)*
* [ ] Type field present (`employment` or `project`)

**Company Profiles:**

* [ ] Built from achievements (not manual entry)
* [ ] All sections cite source achievements
* [ ] Profile aligns with achievements (no contradictions)
* [ ] Both indexes updated

**Target Roles:**

* [ ] JD analyzed thoroughly
* [ ] Domain Context extracted and stored in role_profile.md
* [ ] Checked for existing role match before creating new folder
* [ ] Skills categorized by priority with frequency across JDs
* [ ] Skills mapping includes quote-based evidence
* [ ] Skills mapping includes domain-specific tiering (if multiple domains exist)
* [ ] Missing experience suggestions provided (company profile mining, role-based, industry patterns)
* [ ] **Readiness Assessment ran** (unless 100% Critical+High coverage — then skipped intentionally)
* [ ] **Readiness scenario chosen honestly** — no softening 🔴 to 🟠 to be encouraging
* [ ] **5 action options listed per gap** (add achievement / training / pet-project / reframe / accept)
* [ ] **Training recommendations are specific** (platform + course name + duration), not vague
* [ ] **User's decision recorded** in skills_mapping.md (not assumed)
* [ ] **CV NOT generated** unless user explicitly chose 🟢 Go or 🟡 Go with caveats
* [ ] CV bullets all have metrics
* [ ] CV follows template format (result-first bullets, mission line, etc.)
* [ ] CV uses domain-specific framing and vocabulary from Domain Context
* [ ] CV proofread against BOTH story files AND company profile documents
* [ ] **Causal verification:** Each CV bullet's action DIRECTLY caused the claimed result (verify in source story — don't mix outcomes from different sub-actions)
* [ ] **Metric entity verification:** Every number specifies WHO it refers to (company employees, client employees, end-users, students, customers)
* [ ] **Framing alignment:** CV language matches the framing in source stories/company profiles (not overriding it with different vocabulary)
* [ ] Currency matches target company context (EUR for EU, USD for US)
* [ ] Every phrase makes logical sense (no contradictions)
* [ ] Can speak to every bullet in interview
* [ ] **Story type check:** No project-type story appears in Experience section. Project stories only in optional Projects section or Summary.
* [ ] **Projects section justification:** If included, a project clearly strengthens the position — not just to fill space

**General:**

* [ ] Follows naming convention
* [ ] Templates synced (skill file + folder file)
* [ ] Index files updated

**Applications:**

* [ ] CV snapshot saved to `applications/my_data/app_[company]_[date]/cv_sent.md`
* [ ] Cover letter saved to `applications/my_data/app_[company]_[date]/cover_letter.md` (if needed)
* [ ] Cover letter follows effective structure (personalized, specific, company-focused)
* [ ] Cover letter quality checked: no fluff, specific metrics, at least one company reference
* [ ] Diff notes included (what changed from role version)
* [ ] `applications_index.md` updated with new entry
* [ ] `roles_index.md` updated (Role Type Fit Matrix, Market Signals, Strategy)
* [ ] Conversion funnel counts recalculated

***

## 🔗 HOW THE SYSTEM WORKS TOGETHER

### Workflow 1: Getting Started

1. **`/quick-setup`** → Collect company context for all employers
2. **`/add-achievement`** → Add achievements using company context
3. **`/add-company`** → Refine company profiles (built from achievements)

### Workflow 2: Applying for a Role

1. **`/analyze-role`** → Analyze JD, create role folder OR merge into existing role
2. **`/map-skills`** → Map achievements to role requirements, suggest missing experience, run **Readiness Assessment**
3. **Decision point** (consultation in `/map-skills`):
   - 🟢 Go → proceed to step 4
   - 🟡 Go with caveats → proceed to step 4 (note caveats for cover letter)
   - 🟠 Wait & strengthen → run `/add-achievement` for fillable gaps, then back to step 2
   - 🔴 Not yet → take a pause for training / pet-projects, return later
   - 🔄 Pivot → check existing roles or run `/analyze-role` for adjacent role
   - ❌ Skip → not the right fit
4. **`/generate-cv`** → Generate tailored CV (only after explicit Go decision)
5. Review generated CV in target role folder
6. **`/write-cl`** → Write cover letter for specific company (when ready to apply)
7. When new JD for same role arrives → **`/analyze-role` merges it** → re-run `/map-skills` (re-assess readiness) → if Go, re-run `/generate-cv`

### Key Relationships

* **Achievements → Company profiles:** Profiles extract FROM achievements
* **Achievements → Skills mapping:** Different skills extracted for different roles
* **Skills mapping → Readiness Assessment:** Coverage data drives the 4 scenarios
* **Readiness Assessment → CV Generation:** Hard gate — only 🟢/🟡 unlocks `/generate-cv`
* **Skills mapping → CV:** CV generated from Tier 1/2 achievements (via `/generate-cv`)
* **CV + JD + Company research → Cover Letter:** CL tailored to specific company using CV content, JD requirements, and company-specific touchpoints
* **Company context → Achievement gathering:** Enables smart questions
* **Company profiles → Experience suggestions:** Profiles reveal undocumented experience for gap filling
* **Multiple JDs → Role refinement:** Each new JD refines requirements, keywords, and CV
* **JD frequency → Priority:** Skills appearing in multiple JDs get higher priority (market signal)
* **Target roles → Applications:** CV generated in role folder → snapshot frozen in application folder when sent
* **Applications → Conversion:** Track response rates by channel, CV version, and role type

***

## 📖 KEY CONCEPTS

### Achievements are Role-Agnostic

**Principle:** Achievement files are evidence sources. They don't link to specific roles or job requirements.

**What goes IN achievement:**

* STARR narrative (Situation, Task, Action, Result, Reflection)
* Metrics (all numbers)
* Tools & Tech Stack (what you used)
* Interview Uses (ready-made answers)

**What does NOT go in achievement:**

* ❌ Skills breakdown or analysis
* ❌ "Maps to Requirements"
* ❌ "Best For Roles"
* ❌ Any role-specific categorization

**Where skills analysis happens:** `target_roles/[role_name]/skills_mapping.md`

* Deep analysis of how achievement demonstrates required skills
* Different skills extracted from SAME achievement for DIFFERENT roles
* Quote-based evidence from achievement narrative

### Company Profiles are Built FROM Achievements

**Principle:** Achievements are the source of truth. Company profiles summarize and extract.

**What gets extracted:**

* Responsibilities → from Action sections
* Tools/Stack → from Action sections
* Team size → from Action sections
* Achievements → from Result sections

**What gets added manually:**

* High-level company context (industry, business model, market position)
* Company culture & context
* Web research findings (optional)

### Web Research Triggers Memories

**Why it helps:**

* User may have forgotten about product launches during their tenure
* Company events provide timeline for dating achievements
* Growth phases add context to user's role

**How it's used:**

* Stored in company profile with `source: web_research` tag
* Referenced when adding achievements: "Did you work on the \[Product X] launch in \[Year]?"
* Helps date achievements more precisely

### Target Roles are Role-Based, Not Company-Based

**Principle:** Target role folders represent a ROLE TYPE (e.g., "Product Manager"), not a specific company's opening.

**What happens:**

* First JD for a role type → creates folder `role_product_manager/`
* Subsequent JDs for similar roles → **merge into the same folder**
* Requirements get refined: frequency tracking shows which skills the market demands
* CV gets better with each JD — more keywords, more accurate priorities

**Why this matters:**

* One CV for the same role type, refined by market data
* Don't reinvent the wheel for every application
* Skills appearing in 3+ JDs \= strong market signal \= must include

### Domain Context Drives Story Framing

**Principle:** The same role means different things in different industries. Domain context extracted from JDs influences how stories are selected, tiered, and framed.

**What happens:**

* Each JD analysis extracts domain context (EdTech, FinTech, etc.) into role_profile.md
* Domain context accumulates — new domains get new sub-sections
* Skills mapping includes domain-specific tiering (same story can be Tier 1 in EdTech, Tier 3 in FinTech)
* CV generation uses domain-specific framing and vocabulary

**Why this matters:**

* Skills-first analysis misses the narrative layer — domain context adds it
* "Redesigned learning platform" resonates with EdTech; "scaled capacity 117%" does not
* CV should speak the language of the target industry

### CV Proofreading Against Multiple Sources

**Principle:** CV must be verified against BOTH story files AND company profile documents.

**What to check:**

* Story files: metrics, facts, actions, results
* Company profiles: supporting details (branch counts, user numbers, tool usage)
* Currency: match target company context (EUR for EU, USD for US)
* Logical sense: every phrase must make sense ("2.6× growth from zero" is contradictory)

### Proactive Experience Suggestions

**Principle:** When a JD asks for something and there's no story, suggest experience the user likely has before concluding it's a gap.

**Three sources of suggestions:**

1. **Company profiles** (High confidence) — "Your profile at X mentions NPS. Did you work on this?"
2. **Role-based inference** (Medium confidence) — "As a Senior PM, you likely did roadmap prioritization. Story?"
3. **Industry patterns** (Worth checking) — "In SaaS, churn reduction is common. Did you work on retention?"

**If user confirms** → suggest `/add-achievement` → re-run mapping

***

## 📂 DIRECTORY STRUCTURE

```
starry/
├── CLAUDE.md                    # This file - overview
├── README.md                    # User documentation
├── .claude/
│   ├── skills/                  # Agent Skills format (each skill is a directory)
│   │   ├── starr-achievements/
│   │   │   ├── SKILL.md         # Main skill file with YAML frontmatter
│   │   │   └── references/
│   │   │       └── template_story.md
│   │   ├── company-profiles/
│   │   │   ├── SKILL.md
│   │   │   └── references/
│   │   │       └── company_template.md
│   │   ├── job-analysis/
│   │   │   ├── SKILL.md
│   │   │   └── references/
│   │   │       ├── role_profile_template.md
│   │   │       ├── skills_mapping_template.md
│   │   │       └── cv_template.md
│   │   ├── company-context/
│   │   │   ├── SKILL.md
│   │   │   └── references/
│   │   │       └── quick_setup_reference.md
│   │   └── applications/
│   │       └── SKILL.md         # Application tracking workflow
│   └── commands/                # Commands (interactive flows)
│       ├── quick_setup.md
│       ├── add_achievement.md
│       ├── add_company.md
│       ├── analyze_role.md
│       └── map_skills.md
├── achievements/
│   ├── template_story.md               # ⚠️ Keep synced with skill reference
│   ├── template_stories_index.md       # ⚠️ Keep synced with skill reference
│   └── my_data/
│       ├── story_[slug].md
│       └── stories_index.md
├── companies_i_worked/
│   ├── template_company.md      # ⚠️ Keep synced with skill reference
│   └── my_data/
│       ├── company_[slug].md
│       └── companies_index.md
└── target_roles/
    ├── template_role/           # ⚠️ Keep synced with skill references
    │   ├── role_profile.md
    │   ├── skills_mapping.md
    │   └── cv.md
    └── my_data/
    ├── roles_index.md          # Market response analysis by role type
    └── role_[role_type]/       # e.g., role_design_ops/
        ├── role_profile.md     # JD History + merged requirements
        ├── skills_mapping.md
        ├── cv.md
        ├── jd_company1_2026-04-30.md  # Full original JDs
        └── jd_company2_2026-05-15.md  # Added with each new JD
├── applications/                # CV snapshots sent to companies
│   ├── README.md
│   └── my_data/
│       ├── README.md
│       ├── applications_index.md   # Master tracking + conversion funnel
│       └── app_[company]_[date]/   # One folder per application
│           ├── cv_sent.md          # Exact CV snapshot
│           └── cover_email.md      # (optional)
```

***

## 🚀 Getting Started (For Users)

1. **Quick setup first:** Run `/quick-setup` to collect company context
2. **Add achievements:** Run `/add-achievement` for each major achievement
3. **Refine companies:** Run `/add-company` to build company profiles from achievements
4. **Apply for roles:** Run `/analyze-role` → `/map-skills` (assesses readiness, advises on gaps) → `/generate-cv` (only after you decide to apply). Each new JD for the same role type refines the requirements and improves your CV.

***

**For detailed workflows, theory, and templates, see the skills in `.claude/skills/[skill-name]/SKILL.md`**

**Skills follow Agent Skills specification:** [https://agentskills.io/specification.md](https://agentskills.io/specification.md)