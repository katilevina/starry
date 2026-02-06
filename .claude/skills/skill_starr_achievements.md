# STARR Achievements Skill

**Purpose:** Complete guide to creating and managing STARR achievement stories

---

## 📚 Core Concepts

### What is a STARR Achievement?

A structured story that demonstrates your skills through measurable results:

- **S**ituation — Background, context, timeline
- **T**ask — What needed to be done, the goal
- **A**ction — Specific steps YOU took (focus on YOUR contribution)
- **R**esult — Measurable outcome with NUMBERS
- **R**eflection — What you learned, what you'd do differently

### Key Principles

**FACTS ONLY** — Never invent or assume. If something is missing → ask the user

**NO SKILLS IN ACHIEVEMENT FILES** — Skills analysis happens per-target-role in `skills_mapping.md`, not in the achievement itself. Achievements are role-agnostic evidence sources.

**EVERY CLAIM NEEDS A NUMBER** — Before/after metrics, percentages, time saved, revenue impact, team size affected, budget managed.

---

## 🎯 Data Extraction Process

### 1. Context Gathering (ask questions)

- What was the situation?
- What were the stakes/constraints?
- Who were the stakeholders?

### 2. STARR Structure (guide through each section)

**For SITUATION:**
- What team/company situation?
- What were the stakes or constraints?
- Timeline: When did this happen?

**For TASK:**
- What was the goal?
- What problem needed solving?
- What was your responsibility?

**For ACTION:**
- What specifically did YOU do? (not "we")
- Step 1, 2, 3...
- What tools/methods did you use?
- Who did you work with?

**For RESULT:**
- What was the measurable outcome? (numbers!)
- Before: What was the situation before?
- After: What changed?
- **Probe for metrics:** "Can you quantify that?"

**For REFLECTION:**
- What did you learn about yourself?
- What would you do differently?
- How did this shape you professionally?
- What advice would you give someone else?

### 3. Number Mining (ask follow-up questions)

Always ask for:
- Before/after metrics
- Percentages improved
- Time saved
- Revenue impact
- Team size affected
- Budget managed

**Be persistent about metrics** — don't accept "it improved" without a number.

---

## 📁 Achievement File Structure

### REQUIRED Sections (User Provides)

1. **STARR narrative** — Situation, Task, Action, Result, Reflection
2. **Quantified results** — All metrics with numbers

### REQUIRED Sections (Auto-Generated)

3. **YAML frontmatter** — title, company, role, dates, tags, metrics
4. **TOOLS & TECH STACK** — Extracted from Action section
5. **INTERVIEW USES** — Ready-made answers to common interview questions
6. **KEYWORD BANK** — Industry terms, methodologies, tools for JD matching

### NOT ALLOWED in Achievement Files

Any section that links achievement to specific roles:

- ❌ Skills breakdown or analysis (per-role deep analysis)
- ❌ "Maps to Requirements" (job-specific mapping)
- ❌ "Best For Roles" (role recommendations)
- ❌ Any role-specific or job-specific categorization

**Principle:** Achievement files are role-agnostic evidence sources. Skills analysis happens when analyzing specific target roles.

---

## 📄 Achievement Template

**⚠️ SYNC RULE:** This template must be kept in sync with `achievements/template_achievement.md`
When updating this template, also update the file in the achievements folder.

```yaml
---
title: "SHORT DESCRIPTIVE TITLE (what you did)"
company: "Company Name"
role: "Your Role Title"
dates: "YYYY-YYYY"
tags: [category-1, category-2, category-3]
metrics:
  - type: "category (efficiency/revenue/adoption/etc)"
    value: "X% or X number impact"
---
```

### Situation (S)

**Context:**

- What was the background?
- What team/company situation?
- What were the stakes or constraints?

**Timeline:** When did this happen?

***

### Task (T)

**What needed to be done:**

- What was the goal?
- What problem needed solving?
- What was your responsibility?

***

### Action (A)

**What you specifically did:**

- Step 1: [Action you took]
- Step 2: [Action you took]
- Step 3: [Action you took]

**Tools/Methods used:**

- [Tool/framework 1]
- [Tool/framework 2]

**Stakeholders involved:**

- [Who you worked with]

***

### Result (R)

**Measurable outcomes:**

- ✅ **Metric 1:** [Number/Percentage] — [What this means]
- ✅ **Metric 2:** [Number/Percentage] — [What this means]
- ✅ **Metric 3:** [Number/Percentage] — [What this means]

**Business impact:**

- [What changed for the business]
- [Who benefited]

***

### Reflection (R)

**What I learned:**

- [Key insight about yourself, your skills, or the work]
- [What this experience taught you]

**What I'd do differently:**

- [Specific thing you'd change if you could do it again]
- [How you'd approach it now vs. then]

**How this shaped me:**

- [Skills or perspective you developed]
- [How this experience prepared you for future roles]

**Advice I'd give someone else:**

- [What you'd tell someone facing similar challenge]

---

## 🔄 Working with Pre-Written Achievements

### Quality Assessment Checklist

Before importing user-written stories:

- [ ] Complete STARR structure? (all 5 sections)
- [ ] Metrics present? (numbers, not just "improved")
- [ ] Reflection included? (learning + what you'd change)
- [ ] Sufficient detail? (specific actions, not vague)

### Import Strategy

**1. Assess quality first**
- If high-quality → preserve content
- If missing sections → add REQUIRED sections only
- If has disallowed sections → remove them

**2. Apply minimal adaptations**
- Add missing REQUIRED sections (YAML, Tools, Interview Uses, Keyword Bank)
- Remove any role-specific sections (see NOT ALLOWED above)
- Update file naming to match convention
- Link to related company file: `**See also:** [[company_X]]`
- Update index files

**3. Preserve user's content**
- DO NOT rewrite STARR narrative to match "template"
- DO NOT change their voice or structure
- Keep all valid content

**Quality principle:** High-quality existing content > template compliance. Structure rules ensure consistency without destroying valuable content.

---

## 🏷️ Tags vs Skills

### Tags (YAML frontmatter)

- **Purpose:** Navigation and categorization
- **Examples:** [data, product, launch, team, process]
- **Level:** Basic categories
- **Used for:** Finding achievements, filtering

### Skills (in target_roles/[role]/skills_mapping.md)

- **Purpose:** Deep analysis for specific job applications
- **Examples:** "Data Analysis" with evidence from achievement
- **Level:** Role-specific, detailed
- **Used for:** Matching achievements to job requirements

**Key distinction:** Tags live in achievement YAML (basic organization). Skills analysis happens per-target-role where we deeply analyze how the achievement demonstrates required skills.

---

## 📋 Naming Conventions

- Achievement files: `story_[descriptive_slug].md` (lowercase)
- Use underscores, not hyphens
- Be descriptive: `story_data_framework_launch.md` not `story_1.md`

---

## ✅ Quality Checklist

Before finalizing any achievement:

- [ ] All claims have numbers/metrics
- [ ] No invented details
- [ ] Achievement is complete (S-T-A-R-R all filled)
- [ ] Reflection is thoughtful and honest
- [ ] No skills/keywords extracted (that's per-target-role)
- [ ] Linked to related companies
- [ ] Follows naming convention
- [ ] Ready for template use

---

## 🤖 Auto-Generated Sections

### Tools & Tech Stack (Extracted from Action)

**Tools used:**
- [Tool 1] — [What for]
- [Tool 2] — [What for]

**Methodologies:**
- [Framework 1]
- [Framework 2]

### Interview Uses (Derived from Achievement)

**"Tell me about a time you led change":**
[Use this achievement - focus on Action section]

**"Tell me about a challenge you faced":**
[Use Situation + Task + what you learned in Reflection]

**"What's your greatest achievement?":**
[Use Result metrics + business impact]

### Keyword Bank (Terminological Reference)

**Industry terms:**
- [Term 1] — [Context from achievement]
- [Term 2] — [Context]

**Tools/methodologies:**
- [Tool name] — [How you used it]

**Action verbs:**
- led, launched, managed, [verbs from your actions]

**Purpose:** This bank helps match JD keywords when applying for roles.

---

**Last Updated:** 2026-01
