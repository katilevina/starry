---
name: starr-achievements
description: Complete guide to creating STARR achievement stories with measurable results. Use when gathering work achievements, building accomplishment stories, or preparing for behavioral interviews. Helps extract metrics, structure narratives, and create evidence-based achievement files.
---

# STARR Achievements

## Core Concepts

### What is a STARR Achievement?

A structured story that demonstrates your skills through measurable results:

* **S**ituation — Background, context, timeline
* **T**ask — What needed to be done, the goal
* **A**ction — Specific steps YOU took (focus on YOUR contribution)
* **R**esult — Measurable outcome with NUMBERS
* **R**eflection — What you learned, what you'd do differently

### Key Principles

**FACTS ONLY** — Never invent or assume. If something is missing → ask the user

**Anti-fabrication examples:**

* User says "I analyzed student questions" → ❌ do NOT write "identified top 10 friction points" (they never said "10")
* User says "I mapped processes" → ❌ do NOT write "conducted structured interviews in 3 phases" (they never said "3 phases")
* User says "we had metrics" → ❌ do NOT write "tracked 15 KPIs including..." (they never said "15")
* ✅ Use the user's exact words. If you need specificity → ASK: "Did you track specific metrics? How many friction points?"

**NO SKILLS IN ACHIEVEMENT FILES** — Skills analysis happens per-target-role in `skills_mapping.md`, not in the achievement itself. Achievements are role-agnostic evidence sources.

**EVERY CLAIM NEEDS A NUMBER** — Before/after metrics, percentages, time saved, revenue impact, team size affected, budget managed.

***

## Data Extraction Process

### 1. Context Gathering (ask questions)

* What was the situation?
* What were the stakes/constraints?
* Who were the stakeholders?

### 2. STARR Structure (guide through each section)

**For SITUATION:**

* What team/company situation?
* What were the stakes or constraints?
* Timeline: When did this happen?

**For TASK:**

* What was the goal?
* What problem needed solving?
* What was your responsibility?

**For ACTION:**

* What specifically did YOU do? (not "we")
* Step 1, 2, 3...
* What tools/methods did you use?
* Who did you work with?

**For RESULT:**

* What was the measurable outcome? (numbers!)
* Before: What was the situation before?
* After: What changed?
* **Probe for metrics:** "Can you quantify that?"

**For REFLECTION:**

* What did you learn about yourself?
* What would you do differently?
* How did this shape you professionally?
* What advice would you give someone else?

### 3. Number Mining (ask follow-up questions)

Always ask for:

* Before/after metrics
* Percentages improved
* Time saved
* Revenue impact
* Team size affected
* Budget managed

**Be persistent about metrics** — don't accept "it improved" without a number.

***

## Writing Quality Examples

### Good vs Bad ACTIONS

❌ "I improved the process"
✅ "I mapped current workflow in Miro, identified 3 bottlenecks using JTBD framework, eliminated 2 approval steps, and automated status updates in Jira"

**Why:** Specific tools, specific steps, specific numbers. This is where the work shows.

### Good vs Bad RESULTS

❌ "The process was faster"
✅ "Reduced cycle time from 2 weeks to 3 days (85% improvement), enabling team to handle 3× more requests"

**Why:** Before/after numbers + business context of what the improvement enabled.

### Good vs Bad REFLECTIONS

❌ "I learned a lot"
✅ "I learned that technical solutions alone don't fix process problems — you need to address human behavior and incentives. Next time I'd involve stakeholders earlier in design."

**Why:** Specific insight + actionable "what I'd change" \= shows growth mindset.

### What Makes a Strong Action Section

* Detailed steps with tools/methods mentioned
* YOUR actions ("I did X"), not team actions ("we did X")
* Specific: names of tools, frameworks, approaches
* Sequential: step 1, 2, 3

### What Makes a Strong Result Section

* Before/after numbers
* Percentage or multiplier improvements
* Business context (what the number means)
* Who benefited and how

***

## Achievement File Structure

### REQUIRED Sections (User Provides)

1. **STARR narrative** — Situation, Task, Action, Result, Reflection
2. **Quantified results** — All metrics with numbers

### REQUIRED Sections (Auto-Generated)

1. **YAML frontmatter** — title, company, role, dates, tags, metrics
2. **TOOLS & TECH STACK** — Extracted from Action section
3. **INTERVIEW USES** — Ready-made answers to common interview questions

### NOT ALLOWED in Achievement Files

Any section that links achievement to specific roles:

* ❌ Skills breakdown or analysis (per-role deep analysis)
* ❌ "Maps to Requirements" (job-specific mapping)
* ❌ "Best For Roles" (role recommendations)
* ❌ Any role-specific or job-specific categorization

**Principle:** Achievement files are role-agnostic evidence sources. Skills analysis happens when analyzing specific target roles.

***

See [Story Template](references/template_story.md) for the full template structure.

## Working with Pre-Written Achievements

### Quality Assessment Checklist

Before importing user-written stories:

* [ ] Complete STARR structure? (all 5 sections)
* [ ] Metrics present? (numbers, not just "improved")
* [ ] Reflection included? (learning + what you'd change)
* [ ] Sufficient detail? (specific actions, not vague)

### Import Strategy

**1. Assess quality first**

* If high-quality → preserve content
* If missing sections → add REQUIRED sections only
* If has disallowed sections → remove them

**2. Apply minimal adaptations**

* Add missing REQUIRED sections (YAML, Tools, Interview Uses)
* Remove any role-specific sections (see NOT ALLOWED above)
* Update file naming to match convention
* Link to related company file: `**See also:** [[company_X]]`
* Update index files

**3. Preserve user's content**

* DO NOT rewrite STARR narrative to match "template"
* DO NOT change their voice or structure
* Keep all valid content

**Quality principle:** High-quality existing content > template compliance. Structure rules ensure consistency without destroying valuable content.

***

## Tags vs Skills

### Tags (YAML frontmatter)

* **Purpose:** Navigation and categorization
* **Examples:** \[data, product, launch, team, process]
* **Level:** Basic categories
* **Used for:** Finding achievements, filtering

### Skills (in target\_roles/\[role]/skills\_mapping.md)

* **Purpose:** Deep analysis for specific job applications
* **Examples:** "Data Analysis" with evidence from achievement
* **Level:** Role-specific, detailed
* **Used for:** Matching achievements to job requirements

**Key distinction:** Tags live in achievement YAML (basic organization). Skills analysis happens per-target-role where we deeply analyze how the achievement demonstrates required skills.

***

## Naming Conventions

* Achievement files: `story_[descriptive_slug].md` (lowercase)
* Use underscores, not hyphens
* Be descriptive: `story_data_framework_launch.md` not `story_1.md`

***

## Quality Checklist

Before finalizing any achievement:

* [ ] All claims have numbers/metrics
* [ ] No invented details
* [ ] Achievement is complete (S-T-A-R-R all filled)
* [ ] Reflection is thoughtful and honest
* [ ] No skills/keywords extracted (that's per-target-role)
* [ ] No contradicting metrics with other stories
* [ ] Linked to related companies
* [ ] Follows naming convention
* [ ] Ready for template use

### Cross-Reference Check

When creating or updating an achievement, verify against existing stories:

* [ ] **Timeline consistency** — dates don't overlap impossibly with other stories from same company
* [ ] **Metric consistency** — same metric (e.g., revenue, team size) mentioned in multiple stories doesn't contradict
* [ ] **Company context alignment** — description of company situation aligns across stories from same period