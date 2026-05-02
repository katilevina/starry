# CLAUDE: Job Hunt System Instructions

**Purpose:** Overview of how I work with achievements, companies, target roles, and CVs in this project

**🗣️ Communication Style:** Use informal address with the user ("ты" in Russian, informal "you" in English, or equivalent informal address in whatever language we're communicating in).

**Last Updated:** 2026-04 (added bash note for hidden folders)

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

**🎯 Job Analysis & CV Generation** → `.claude/skills/job-analysis/SKILL.md`

* Analyzing job descriptions (JDs)
* Extracting requirements, keywords, and skills by priority
* Skills mapping algorithm
* Three templates in `references/`: role\_profile\_template.md, skills\_mapping\_template.md, cv\_template.md
* CV generation rules

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

**`/map-skills`** — Map achievements to target role + generate CV

* Deep analysis of each achievement in context of target role
* Matches achievements to role requirements
* Generates skills\_mapping.md
* Generates tailored CV

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

## ⚠️ CRITICAL: Chronological Story Numbering

**ALL achievements MUST be numbered chronologically by start date, NOT by creation order.**

**When creating a new achievement:**

1. Extract `dates:` field from ALL existing story files
2. Sort ALL stories (existing + new) by start date chronologically
3. Assign sequential numbers: story\_01, story\_02, story\_03...
4. **If new story belongs in the middle:**
   * Rename ALL subsequent files (e.g., story\_03 → story\_04, story\_04 → story\_05...)
   * Update ALL references in: stories\_index.md, company files, companies\_index.md
   * Then create the new file with correct number

**Example:**

* Existing: story\_01 (2015), story\_02 (2019), story\_03 (2020)
* New story from 2017
* **Correct:** New becomes story\_02, old story\_02 → story\_03, old story\_03 → story\_04
* **Wrong:** New becomes story\_04 (breaks chronological order)

**Why this matters:**

* Shows evolution of skills over time
* Creates logical reading sequence
* CV generation assumes chronological order

***

## ✅ QUALITY CHECKLIST

Before finalizing any document:

**Achievements:**

* [ ] All claims have numbers/metrics
* [ ] No invented details
* [ ] Complete STARR (all 5 sections)
* [ ] Reflection included (learning + what you'd change)
* [ ] No skills/keywords extracted (that's per-target-role)
* [ ] Linked to related companies

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
* [ ] CV bullets all have metrics
* [ ] CV follows template format (result-first bullets, mission line, etc.)
* [ ] CV uses domain-specific framing and vocabulary from Domain Context
* [ ] CV proofread against BOTH story files AND company profile documents
* [ ] Currency matches target company context (EUR for EU, USD for US)
* [ ] Every phrase makes logical sense (no contradictions)
* [ ] Can speak to every bullet in interview

**General:**

* [ ] Follows naming convention
* [ ] Templates synced (skill file + folder file)
* [ ] Index files updated

**Applications:**

* [ ] CV snapshot saved to `applications/my_data/app_[company]_[date]/cv_sent.md`
* [ ] Diff notes included (what changed from role version)
* [ ] `applications_index.md` updated with new entry
* [ ] Conversion funnel counts recalculated

***

## 🔗 HOW THE SYSTEM WORKS TOGETHER

### Workflow 1: Getting Started

1. **`/quick-setup`** → Collect company context for all employers
2. **`/add-achievement`** → Add achievements using company context
3. **`/add-company`** → Refine company profiles (built from achievements)

### Workflow 2: Applying for a Role

1. **`/analyze-role`** → Analyze JD, create role folder OR merge into existing role
2. **`/map-skills`** → Map achievements to role requirements + suggest missing experience
3. Review generated CV in target role folder
4. When new JD for same role arrives → **`/analyze-role` merges it** → re-run `/map-skills` → CV gets refined

### Key Relationships

* **Achievements → Company profiles:** Profiles extract FROM achievements
* **Achievements → Skills mapping:** Different skills extracted for different roles
* **Skills mapping → CV:** CV generated from Tier 1/2 achievements
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
        └── role_[role_type]/    # e.g., role_design_ops/
            ├── role_profile.md  # JD History + merged requirements
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
4. **Apply for roles:** Run `/analyze-role` → `/map-skills` to generate tailored CVs. Each new JD for the same role type refines the requirements and improves your CV.

***

**For detailed workflows, theory, and templates, see the skills in `.claude/skills/[skill-name]/SKILL.md`**

**Skills follow Agent Skills specification:** [https://agentskills.io/specification.md](https://agentskills.io/specification.md)