# CLAUDE: Job Hunt System Instructions

**Purpose:** Overview of how I work with achievements, companies, target roles, and CVs in this project

**🗣️ Communication Style:** Use informal address with the user ("ты" in Russian, informal "you" in English, or equivalent informal address in whatever language we're communicating in).

**Last Updated:** 2026-01 (added chronological story numbering: story\_01\_, story\_02\_, etc.; informal address style)

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
* Achievement template in `references/achievement_template.md`
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
2. **In folders** (`achievements/template_achievement.md`, `companies_i_worked/template_company.md`, `target_roles/template_role/*.md`) — for users who don't have skills enabled

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

| Skill              | Skill Reference Template                                                                                        | Folder Template                                                                                                                      |
| ------------------ | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| starr-achievements | `references/achievement_template.md`                                                                            | `achievements/template_achievement.md`                                                                                               |
| company-profiles   | `references/company_template.md`                                                                                | `companies_i_worked/template_company.md`                                                                                             |
| job-analysis       | `references/role_profile_template.md`<br>`references/skills_mapping_template.md`<br>`references/cv_template.md` | `target_roles/template_role/role_profile.md`<br>`target_roles/template_role/skills_mapping.md`<br>`target_roles/template_role/cv.md` |
| company-context    | `references/quick_setup_reference.md`                                                                           | N/A (reference guide only)                                                                                                           |

***

## 📋 FILE NAMING CONVENTIONS

**Achievements:** `story_[descriptive_slug].md` (e.g., `story_data_framework.md`)

**Companies:** `company_[slug].md` (e.g., `company_acme_corp.md`)

**Target Roles:** `role_[slug]/` folder with files inside (e.g., `role_google_pmm/`)

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
* [ ] Skills categorized by priority
* [ ] Skills mapping includes quote-based evidence
* [ ] CV bullets all have metrics
* [ ] Can speak to every bullet in interview

**General:**

* [ ] Follows naming convention
* [ ] Templates synced (skill file + folder file)
* [ ] Index files updated

***

## 🔗 HOW THE SYSTEM WORKS TOGETHER

### Workflow 1: Getting Started

1. **`/quick-setup`** → Collect company context for all employers
2. **`/add-achievement`** → Add achievements using company context
3. **`/add-company`** → Refine company profiles (built from achievements)

### Workflow 2: Applying for a Role

1. **`/analyze-role`** → Analyze JD, create target role folder
2. **`/map-skills`** → Map achievements to role requirements
3. Review generated CV in target role folder

### Key Relationships

* **Achievements → Company profiles:** Profiles extract FROM achievements
* **Achievements → Skills mapping:** Different skills extracted for different roles
* **Skills mapping → CV:** CV generated from Tier 1/2 achievements
* **Company context → Achievement gathering:** Enables smart questions

***

## 📖 KEY CONCEPTS

### Achievements are Role-Agnostic

**Principle:** Achievement files are evidence sources. They don't link to specific roles or job requirements.

**What goes IN achievement:**

* STARR narrative (Situation, Task, Action, Result, Reflection)
* Metrics (all numbers)
* Tools & Tech Stack (what you used)
* Interview Uses (ready-made answers)
* Keyword Bank (terminology for JD matching)

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
│   │   │       └── achievement_template.md
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
│   │   └── company-context/
│   │       ├── SKILL.md
│   │       └── references/
│   │           └── quick_setup_reference.md
│   └── commands/                # Commands (interactive flows)
│       ├── quick_setup.md
│       ├── add_achievement.md
│       ├── add_company.md
│       ├── analyze_role.md
│       └── map_skills.md
├── achievements/
│   ├── template_achievement.md  # ⚠️ Keep synced with skill reference
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
        └── role_[slug]/
            ├── role_profile.md
            ├── skills_mapping.md
            └── cv.md
```

***

## 🚀 Getting Started (For Users)

1. **Quick setup first:** Run `/quick-setup` to collect company context
2. **Add achievements:** Run `/add-achievement` for each major achievement
3. **Refine companies:** Run `/add-company` to build company profiles from achievements
4. **Apply for roles:** Run `/analyze-role` → `/map-skills` to generate tailored CVs

***

**For detailed workflows, theory, and templates, see the skills in `.claude/skills/[skill-name]/SKILL.md`**

**Skills follow Agent Skills specification:** [https://agentskills.io/specification.md](https://agentskills.io/specification.md)