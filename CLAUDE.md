# CLAUDE: Job Hunt System Instructions

**Purpose:** How I work with achievements, companies, target roles, and CVs in this project

***

## 🎯 PROJECT PRINCIPLES

1. **FACTS ONLY** — Never invent or assume. If something is missing → ask the user
2. **TEMPLATABLE** — Everything I create should be reusable for other people
3. **ITERATIVE** — Start with what we have, refine over time
4. **TRACEABLE** — Each achievement should link to specific skills/keywords

***

## 📝 HOW I WORK WITH STARR ACHIEVEMENTS

### Data Extraction Process

When I gather a STARR achievement from the user, I follow this structure:

1. **Context Gathering** (ask questions to understand):
   * What was the situation?
   * What were the stakes/constraints?
   * Who were the stakeholders?
2. **STARR Structure**:
   * **S**ituation — Background, context, timeline
   * **T**ask — What needed to be done, the goal
   * **A**ction — Specific steps taken (focus on YOUR contribution)
   * **R**esult — Measurable outcome with NUMBERS
   * **R**eflection — What you learned, what you'd do differently
3. **Number Mining** (I always ask for):
   * Before/after metrics
   * Percentages improved
   * Time saved
   * Revenue impact
   * Team size affected
   * Budget managed
4. **Reflection Extraction** (crucial for growth):
   * What did you learn from this experience?
   * What would you do differently?
   * How did this shape your professional growth?
   * What advice would you give someone in similar situation?

**IMPORTANT:** I do NOT extract skills or keywords into the story file. Skills analysis happens ONLY in `skills_mapping.md` for each specific target role, where I deeply analyze how the achievement demonstrates required skills.

### Output Format

Each story becomes a markdown file with:

* YAML front-metadata (role, company, dates, tags for basic organization)
* STARR narrative (the full achievement in your words)
* Quantified results (all the metrics)

**What goes in YAML tags:** Basic categorization for navigation (e.g., \[data, product, launch])
**What does NOT go in achievement:** Skills breakdown, keyword extraction — these happen per-role

### Achievement File Structure

**REQUIRED sections (user writes):**

* STARR narrative (Situation, Task, Action, Result, Reflection)
* Quantified results (all metrics with numbers)

**REQUIRED sections (I auto-generate):**

* **YAML frontmatter** — title, company, role, dates, tags, metrics (for indexing and search)
* **TOOLS & TECH STACK** — extracted from Action section (tools, methodologies)
* **INTERVIEW USES** — ready-made answers to common interview questions, derived from achievement
* **KEYWORD BANK** — terminological reference (industry terms, methodologies, tools) for JD keyword matching

**NOT ALLOWED in achievement:**

Any section that links achievement to specific roles or job requirements. These live in `target_roles/[role_name]/skills_mapping.md` instead:

* ❌ Skills breakdown or analysis (per-role deep analysis of how achievement demonstrates skills)
* ❌ "Maps to Requirements" (job-specific requirement mapping)
* ❌ "Best For Roles" (role recommendations depend on target role being applied for)
* ❌ Any role-specific or job-specific categorization

**Principle:** Achievement files are role-agnostic evidence sources. Skills analysis, role matching, and job requirement mapping happens when analyzing specific target roles, not in the achievement itself.

### When User Imports Pre-Written Achievements

**Strategy: Preserve value → Apply structure rules**

When user adds story files they've already written:

1. **Assess quality first:**
   * Complete STARR structure? ✅
   * Metrics present? ✅
   * Reflection included? ✅
   * Sufficient detail? ✅
2. **Apply minimal adaptations:**
   * Add missing REQUIRED sections (YAML, Tools, Interview Uses, Keyword Bank) — I auto-generate these
   * Remove any disallowed role-specific sections (see "NOT ALLOWED" above)
   * Update file naming to match convention (achievement\_*.md, company\_*.md)
   * Link to related company file: `**See also:** [[company_X]]`
   * Update index files (stories\_index.md, companies\_index.md)
3. **Preserve user's content:**
   * DO NOT rewrite STARR narrative to match "template"
   * DO NOT change their voice or structure
   * Keep all their valid content
4. **Naming convention:**
   * Stories: `story_[descriptive_slug].md` (lowercase)
   * Companies: `company_[slug].md` (lowercase)
   * I suggest proper names based on content, user can adjust

**Quality principle:** High-quality existing content > template compliance. Structure rules ensure consistency without destroying valuable content.

### Example Achievement File

```yaml
---
title: "Launched data-driven decision making framework"
company: "Acme Corp"
role: "Product Manager"
dates: "2022-2023"
tags: [data, process, framework]
metrics:
  - type: "efficiency"
    value: "40% faster decisions"
  - type: "adoption"
    value: "3 teams using framework"
---

## Situation
Our product team was making decisions based on gut feel. We had no single source of truth and different stakeholders were using different data sources. This led to misaligned priorities and wasted resources.

## Task
I needed to introduce a data-driven decision framework that would align the team on shared metrics and reduce time spent debating priorities.

## Action
- Built centralized analytics dashboard using Tableau and SQL, pulling data from 3 different product tools
- Trained 3 cross-functional teams (product, engineering, design) on new framework and metrics definitions
- Created weekly metrics review ritual to track progress and align on priorities

## Result
- Decision speed improved by 40% — from avg 2 weeks to 1 week for major roadmap decisions
- 3 cross-functional teams adopted framework within 2 months
- Reduced failed experiments by 25% due to better upfront data validation

## Reflection
**What I learned:**
- Change management is as important as the technical solution
- Early adopters championing the framework was key to adoption

**What I'd do differently:**
- Involve engineering teams earlier in the design process
- Create pilot program before full rollout

**How this shaped me:**
- Developed stronger cross-functional leadership skills
- Learned to balance technical quality with organizational buy-in
```

**Note:** No skills listed here. When I analyze this achievement for a "Data Analyst" target role, I'll extract how it demonstrates data analysis, stakeholder management, and process improvement — but that analysis lives in `skills_mapping.md`, NOT in the story file.

***

## 🏢 HOW I WORK WITH COMPANIES

### Data Extraction Strategy

**CRITICAL:** Company profiles are built FROM existing achievements, not the other way around.

When creating a company profile:

1. **First, check if stories exist:**
   * Search all story files for this company name
   * If NO stories exist → ask user: "Do you have achievements for this company yet?"
     * If NO: Collect basic info manually, but add warning: "⚠️ This profile will be auto-updated once you add achievements"
     * If YES: Encourage adding achievements first, then return to company profile
   * If achievements exist → proceed to step 2
2. **Extract from achievements automatically:**
   * **Role & dates:** From YAML frontmatter across all achievements from this company
   * **Responsibilities:** From Action sections of achievements (what you actually did)
   * **Tools/stack:** From Action sections (tools mentioned in your actions)
   * **Team size & stakeholders:** From Action sections (who you worked with)
   * **Achievements:** From Result sections (metrics from multiple achievements)
3. **Present findings to user:**
   * Show what I extracted from achievements
   * Ask: "Is this accurate? Anything to add or correct?"
4. **Fill gaps with targeted questions:**
   * Only ask what's NOT mentioned in achievements
   * Examples: company industry, business model, overall context
   * Focus on high-level company info (not job details — those are in achievements)
5. **Link achievements automatically:**
   * Find all story files with `company: "X"` in YAML
   * Create `[[achievement_X]]` references
   * Update achievements\_index.md to cross-link back

### Output Format

```yaml
---
company: "Acme Corp"
industry: "SaaS"
size: "100-500 employees"
your_role: "Senior Product Manager"
duration: "2021-2024"
achievements_based_on: 3  # Number of achievements this profile is built from
---

## Role Overview
[Context about what the company does and your place in it]

## Key Responsibilities
*Extracted from achievements:*
- Owned product roadmap for X product line (from achievement_1, achievement_2)
- Led cross-functional team of 5 (from achievement_3)
- Launched data-driven decision framework (from achievement_1)

## Tools & Stack
*Mentioned in your achievements:*
- Jira, Figma — product design and roadmap
- Amplitude, SQL — analytics and data analysis
- Notion, Confluence — documentation

## Related Achievements
- [[achievement_1]] — Data framework launch
- [[achievement_2]] — Feature release
- [[achievement_3]] — Team restructuring
```

### Important Principles

**DO:**

* ✅ Extract job details FROM achievements automatically
* ✅ Ask only for high-level company context (industry, model, size)
* ✅ Show user what I found and ask for confirmation
* ✅ Link all related achievements automatically
* ✅ Flag when achievements mention responsibilities not yet in profile
* ✅ Mark sources clearly: "(from achievement\_X)"

**DO NOT:**

* ❌ Ask user to manually list responsibilities (extract from achievements instead)
* ❌ Ask for tools/stack (extract from Action sections)
* ❌ Let company profile contradict achievements (they must align)
* ❌ Create company profile if no achievements exist (strongly encourage achievements first)
* ❌ Duplicate work — if it's in an achievement, reference it, don't retype it

***

## 🎯 HOW I ANALYZE JOB DESCRIPTIONS FOR TARGET ROLES

### Analysis Process

When I receive a JD, I extract:

1. **Role Requirements**:
   * Key responsibilities (verbatim from JD)
   * Required skills (hard + soft)
   * Experience level
   * Industry/domain knowledge
2. **Keyword Extraction**:
   * Technical terms (tools, methodologies)
   * Action verbs (led, managed, launched)
   * Industry buzzwords
   * Must-have vs nice-to-have
3. **Priority Scoring**:
   * "Must have" skills → priority: critical
   * "Preferred" → priority: high
   * "Bonus" → priority: medium

### Output Format (Role Profile)

```yaml
---
title: "Senior Product Manager"
company: "Target Corp"
source: "LinkedIn - applied on 2026-01-15"
priority_keywords: [stakeholder management, roadmap, agile]
critical_skills:
  - name: "Data Analysis"
    priority: "critical"
    evidence_needed: "Tools used + metrics"
  - name: "Stakeholder Management"
    priority: "critical"
    evidence_needed: "Cross-functional leadership"
---

## JD Summary
[Brief overview of the generalized role]

## Key Requirements
[Extracted from multiple JDs - common patterns]

## Market Context
[What I learned from analyzing 10-20 similar job postings]

## Skills Breakdown
[Table with skill | priority | frequency in JDs | where to find evidence]
```

***

## 🔗 HOW I MAP ACHIEVEMENTS TO TARGET ROLES

### Mapping Logic

When I connect achievements to a target role, I:

1. **Deep Achievement Analysis** (not just keyword matching):
   * Read the FULL achievement — Situation, Task, Action, Result, Reflection
   * Understand the context and what YOU actually did
   * Extract how the achievement demonstrates specific skills required by the target role
   * Different skills can be extracted from the SAME achievement for different target roles
2. **Skill Coverage**:
   * For each critical skill in the target role → find best achievement
   * Quote the exact evidence from the achievement
   * Explain WHY this demonstrates the skill
   * Flag gaps (no achievement demonstrates this skill)
3. **Evidence Quality**:
   * Does the achievement have metrics?
   * Is the impact clear?
   * Is it relevant to the target role?

### Output Format (Skills Mapping)

```markdown
## Critical Skills Coverage

| Skill | Status | Best Achievement | Evidence |
|-------|--------|------------|----------|
| Data Analysis | ✅ Covered | achievement_1 | "Built analytics dashboard, 40% efficiency gain" |
| Stakeholder Management | ✅ Covered | achievement_2 | "Led 3 cross-functional teams" |
| Budget Management | ❌ Gap | - | Need achievement about financial responsibility |

## Achievement Recommendations for This Target Role

**Tier 1 (Must Include in CV)**
- achievement_1 - Data framework (covers: data analysis, process improvement)
- achievement_3 - Product launch (covers: roadmap, agile, stakeholder management)

**Tier 2 (Good to Have)**
- achievement_2 - Team restructuring (covers: leadership, change management)

**Tier 3 (If Space Allows)**
- achievement_4 - Tool migration (covers: technical skills)

## Gaps to Address
[Skills we need achievements for before applying]
```

***

## 📄 HOW I GENERATE CVs

### CV Strategy

When creating a CV for a target role:

1. **Prioritization**:
   * Tier 1 achievements → Summary + top bullet points
   * Tier 2 achievements → Work experience bullets
   * Tier 3 → Only if space allows
2. **Tailoring**:
   * Use target role's priority keywords in headers/bullets
   * Reorder bullets by relevance to this target role
   * Mirror market language (what appears across JDs)
3. **Structure**:
   ```markdown
   ## Professional Summary
   [2-3 lines using Tier 1 achievement outcomes, with target role keywords]

   ## Experience
   ### Company A | Role
   - [Bullets from Tier 1 achievements, with metrics]
   - [Bullets from Tier 2 achievements]

   ### Company B | Role
   - [Relevant bullets from Tier 2/3 achievements]

   ## Key Skills
   [Extracted from mapped skills, grouped by category]
   ```
4. **Principles**:
   * Every bullet has a number/metric
   * No more than 3-4 bullets per role
   * Active voice, action verbs
   * NO invented details

***

## ⚡ HOW I GATHER COMPANY CONTEXT

### Quick Setup (Recommended First Step)

**Why gather context first:**

* Enables smarter questions when adding achievements
* Faster achievement gathering (less clarification needed)
* Better quality achievements (with specific details)

**What I collect:**
For each company:

* **Employment dates** (YYYY-YYYY) — Required for web research
* Industry (SaaS, E-commerce, Fintech, etc.)
* Company size (Startup \<50, Small 50-200, Mid 200-1000, Large 1000+)
* Business model (B2B/B2C, subscription, marketplace, etc.)
* Main stakeholders (departments, teams)
* Typical tools (what they use)

**How it's used:**
When gathering achievements, I ask context-specific questions:

* Instead of: "Who did you work with?"
* I ask: "Who from \[Product, Engineering, Customer Success] did you collaborate with?"
* Instead of: "What tools did you use?"
* I suggest: "Did you use \[Jira, Figma, Amplitude] for this?"

**Quick vs. Full:**

* Quick setup (3-5 min): Basic context, enables smart questions
* Full company profile: Later, built from achievements + refinement

### Web Research Feature (Optional but Powerful)

**Why it helps:**

* Triggers memories: "Oh right, I worked on that launch!"
* Provides specific company events during user's tenure
* Adds rich context without manual effort
* Helps date achievements more accurately

**What I search for:**

When user provides employment dates (e.g., "2020-2023" for "Google"), I search online for:

* Company milestones during that period (funding, acquisitions, IPO)
* Product launches and features
* Company growth (employee count, expansion)
* News and market events
* Industry trends affecting the company

**Example queries:**

* "Google 2020-2023 product launches"
* "Acme Corp funding rounds 2020 2021 2022"
* "\[Company name] during \[year range] news"

**How I use findings:**

After collecting web research, I:

1. Store findings in company profile with `source: web_research` tag
2. Present findings to user for confirmation
3. Use findings to ask targeted questions:
   * "In 2020, Google launched Google Workspace — did you work on this?"
   * "During your tenure, Acme Corp grew from 50 to 200 employees. How did this affect your role?"
   * "I see they launched \[Product] in \[Year]. Was your achievement related to this?"

**Sourcing:**

* Always mark web-researched info with `*(source: web_research, date: YYYY)*`
* Distinguish between user-provided info and web findings
* User can correct or reject any web research findings

**When to skip web research:**

* Small companies with no online presence
* Very old employment dates (pre-internet or limited archives)
* User declines the offer
* Company operates in stealth mode

**Integration with `/add-achievement`:**

When user adds an achievement from a company with web research:

* Check achievement timing against company events
* Ask: "Did your work relate to \[specific company event during your tenure]?"
* Help user date their achievement more precisely
* Provide context for stakeholders and market conditions

***

## 🤖 HOW I USE COMMANDS

### Available Commands

* `/quick-setup` — Quick company context gathering (recommended first step!)
* `/add-achievement` — Interactive STARR achievement gathering (uses company context!)
* `/add-company` — Update/refine company profile from achievements
* `/analyze-role` — Multiple JD analysis + generalized target role creation
* `/map-skills` — Map achievements to target role, generate CV

### Command Behavior

Each command:

1. Checks for existing context/data
2. Asks clarifying questions (via quiz tool)
3. Builds structure incrementally
4. Shows preview before saving
5. Links related files automatically

***

## 📋 FILE NAMING CONVENTIONS

* Achievements: `achievement_[slug].md` (e.g., `achievement_data_framework.md`)
* Companies: `company_[slug].md` (e.g., `company_acme_corp.md`)
* Target Roles: `role_[slug]/` folder with files inside
* ALL LOWERCASE (except CLAUDE.md, README.md)

***

## ✅ QUALITY CHECKLIST

Before finalizing any document:

* [ ] All claims have numbers/metrics
* [ ] No invented details
* [ ] Achievement is complete (S-T-A-R-R all filled)
* [ ] Reflection is thoughtful and honest
* [ ] No skills/keywords extracted (that's per-target-role, not per-achievement)
* [ ] Linked to related companies
* [ ] Follows naming convention
* [ ] Ready for template use

***

**Last Updated:** 2026-01