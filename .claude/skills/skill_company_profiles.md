# Company Profiles Skill

**Purpose:** Complete guide to creating and managing company profiles built FROM achievements

---

## 🎯 Core Principle

**CRITICAL:** Company profiles are built FROM existing achievements, not the other way around.

Achievements are the **source of truth**. Company profiles extract and summarize what you actually did (from achievements) plus high-level company context.

---

## 📚 Data Extraction Strategy

### Step 1: Check for Existing Achievements FIRST

**Search all story files** in `achievements/my_data/` for this company name

**If NO achievements exist:**
- Ask user: "Do you have achievements for this company yet?"
- If YES: Encourage `/add-achievement` first, then return here
- If NO: Collect basic info manually BUT add prominent warning:
  > ⚠️ **This profile was created without achievements. Once you add achievements, this profile will be auto-updated to align with them.**

**If achievements exist:** Proceed to extract from them

### Step 2: Extract FROM Achievements Automatically

**Responsibilities:**
- Read Action sections across all achievements from this company
- What actions did you take repeatedly?
- What themes appear?
- Extract unique responsibilities

**Tools/Stack:**
- Search Action sections for tool names
- Note context of usage (what was the tool used for?)
- Group by category (analytics, design, communication, etc.)

**Team & Stakeholders:**
- Search for "team", "stakeholder", "managed", "led"
- Extract team sizes and roles
- Note collaboration patterns

**Achievements:**
- Read Result sections
- Compile metrics from multiple achievements
- Identify themes in your impact

### Step 3: Present Findings to User

Show what you extracted:

```
Based on your [X] achievements from [Company]:

**Responsibilities** (from your achievements):
- Owned product roadmap for X product line (story_1, story_2)
- Led cross-functional team of 5 (story_3)
- Built data analytics framework (story_1)

**Tools & Stack** (mentioned in your actions):
- Jira, Figma — product design
- Tableau, SQL — analytics
- Amplitude — product analytics

**Key Achievements** (from your achievements):
- Decision speed improved by 40% (story_1)
- 3 teams adopted framework within 2 months (story_1)
```

Ask: "Is this accurate? Anything to add or correct?"

### Step 4: Fill ONLY the Gaps

Ask for high-level company context NOT in achievements:

- What does the company do? (product/service)
- Business model (how they make money)
- Market position

**DO NOT ask for job details** — those should be in achievements

### Step 5: Link Achievements Automatically

- Find all achievements with `company: "X"` in YAML
- Create `[[story_X]]` references
- Add `achievements_based_on: X` to YAML frontmatter
- Update both indexes (companies_index.md and stories_index.md)

---

## 📄 Company Profile Template

**⚠️ SYNC RULE:** This template must be kept in sync with `companies_i_worked/template_company.md`
When updating this template, also update the file in the companies_i_worked folder.

```yaml
---
company: "Company Name"
industry: "Industry (e.g., SaaS, E-commerce, Healthcare)"
size: "Company size (e.g., 50-200 employees, Series B)"
business_model: "How they make money (e.g., B2B subscription, marketplace)"
your_role: "Your Job Title"
duration: "YYYY-YYYY"
dates: "YYYY-YYYY"  # Your employment dates
achievements_based_on: 0  # Will be updated when stories are added
---
```

## Company Overview

**What they do:**
[Brief description of company's product/service and who they serve]

**Market position:**
[Where they fit in their industry — startup, incumbent, niche player]

***

## Web Research Findings (Optional)

*Information gathered from online sources during your employment period*

**Key events during your tenure [YYYY-YYYY]:**

- [Major product launch, funding round, company milestone] *(source: web_research, date: YYYY)*
- [Another relevant event] *(source: web_research, date: YYYY)*

**Products/features you might have worked on:**

- [Product name] — [Launched YYYY, what it does] *(source: web_research)*
- [Feature name] — [Launched YYYY, target audience] *(source: web_research)*

**Company context during your tenure:**

- [Size, growth phase, major changes] *(source: web_research)*

***

## Your Role Context

**Why you were hired:**
[What problem they needed you to solve]
*Note: This should align with stories you add for this company*

***

## Key Responsibilities

*This section is auto-generated from your STARR stories*

**Core duties:**

- [Primary responsibility 1] *(from story_X, story_Y)*
- [Primary responsibility 2] *(from story_Z)*
- [Primary responsibility 3] *(from story_X)*

**Projects owned:**

- [Major project 1] *(from story_X)*
- [Major project 2] *(from story_Y)*

***

## Tools & Stack

*Extracted from your stories' Action sections*

**Tools you used:**

- [Tool 1] — [What you used it for] *(from story_X)*
- [Tool 2] — [What you used it for] *(from story_Y)*
- [Tool 3] — [What you used it for] *(from story_Z)*

**Methodologies:**

- [Framework or process 1] *(from story_X)*
- [Framework or process 2] *(from story_Y)*

***

## Key Achievements

*Compiled from Result sections of your stories*

**Quantified impact:**

- [Achievement 1 with metric] *(from story_X)*
- [Achievement 2 with metric] *(from story_Y)*
- [Achievement 3 with metric] *(from story_Z)*

**Related STAR stories:**

- [[story_X]] — [Brief description]
- [[story_Y]] — [Brief description]
- [[story_Z]] — [Brief description]

***

## Company Culture & Context

**Work environment:**
[Remote/hybrid, pace, decision-making style]

**Challenges specific to this company:**
[Any unique constraints or opportunities]

***

## Lessons Learned

**What this job taught you:**
[Key takeaways from Reflection sections of your stories]

**Skills developed here:**
[Skills you grew in this role — should match evidence in stories]

---

## 🔍 Extraction Algorithm

### For Responsibilities

1. Read Action sections of all achievements from this company
2. Identify repeated themes (what did you do in multiple achievements?)
3. Extract unique responsibilities
4. Group by category (leadership, technical, process, etc.)
5. Cite source achievements: `*(from story_1, story_3)*`

### For Tools

1. Search Action sections for tool names
2. Note context of usage (what was the tool used for?)
3. Group by category (analytics, design, communication, etc.)
4. Cite source achievements

### For Team/Stakeholders

1. Search for mentions of "team", "stakeholder", "managed", "led"
2. Extract team sizes and roles
3. Note collaboration patterns
4. Cite source achievements

### For Achievements

1. Read Result sections of all achievements
2. Extract all metrics
3. Group by theme/impact area
4. Cite source achievements

---

## ✅ DO's and DON'T's

### DO ✅

- Extract job details FROM achievements automatically
- Ask only for high-level company context (industry, model, size)
- Show user what you found and ask for confirmation
- Link all related achievements automatically
- Flag when achievements mention responsibilities not yet in profile
- Mark sources clearly: `*(from story_X)*`
- Warn if no achievements exist (be clear about limitations)

### DON'T ❌

- Ask user to manually list responsibilities (extract from achievements instead)
- Ask for tools/stack (extract from Action sections)
- Let company profile contradict achievements (they must align)
- Create company profile if no achievements exist (strongly encourage achievements first)
- Duplicate work — if it's in an achievement, reference it, don't retype it

---

## 📋 Naming Conventions

- Company files: `company_[slug].md` (lowercase)
- Use underscores: `company_acme_corp.md`
- Be descriptive but concise

---

## 🔄 Profile Lifecycle

### Stage 1: Draft (no achievements yet)

- `status: draft`
- `achievements_based_on: 0`
- Contains basic company info only
- Has warning about being incomplete

### Stage 2: Built from Achievements

- `status: complete`
- `achievements_based_on: 3` (or however many)
- Responsibilities extracted from achievements
- Tools extracted from Action sections
- Achievements compiled from Result sections
- Links to all related stories

### Stage 3: Refined

- User adds high-level company context
- Web research findings added (optional)
- Culture/context sections filled
- Lessons learned compiled from Reflections

---

## 🤖 Auto-Generated Sections

### Responsibilities Section

```
*This section is auto-generated from your STARR stories*
```

Extract from Action sections:
- What did you DO repeatedly?
- What themes appear?
- Cite sources: `*(from story_X, story_Y)*`

### Tools & Stack Section

```
*Extracted from your stories' Action sections*
```

Group tools by:
- Analytics tools
- Design tools
- Communication tools
- Methodologies/frameworks

### Key Achievements Section

```
*Compiled from Result sections of your stories*
```

- Extract all metrics
- Group by impact area
- Link back to full stories

---

## ✅ Quality Checklist

Before finalizing company profile:

- [ ] Built from achievements (not manual entry)
- [ ] All sections cite source achievements
- [ ] Company profile aligns with achievements (no contradictions)
- [ ] Achievements linked back to company profile
- [ ] High-level company context collected
- [ ] Follows naming convention
- [ ] Both indexes updated (companies_index.md + stories_index.md)

---

**Last Updated:** 2026-01
