---
name: company-profiles
description: Complete guide to creating company profiles built FROM achievements (not the other way around). Use when creating or updating company profiles, extracting responsibilities and tools from achievements, or summarizing work history. Achievements are the source of truth; profiles extract and summarize from them.
---

# Company Profiles

## Core Principle

**CRITICAL:** Company profiles are built FROM existing achievements, not the other way around.

Achievements are the **source of truth**. Company profiles extract and summarize what you actually did (from achievements) plus high-level company context.

---

## Data Extraction Strategy

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

See [Company Profile Template](references/company_template.md) for the full template structure.

## Extraction Algorithm

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

## DO's and DON'T's

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

## Naming Conventions

- Company files: `company_[slug].md` (lowercase)
- Use underscores: `company_acme_corp.md`
- Be descriptive but concise

---

## Profile Lifecycle

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

## Quality Checklist

Before finalizing company profile:

- [ ] Built from achievements (not manual entry)
- [ ] All sections cite source achievements
- [ ] Company profile aligns with achievements (no contradictions)
- [ ] Achievements linked back to company profile
- [ ] High-level company context collected
- [ ] Follows naming convention
- [ ] Both indexes updated (companies_index.md + stories_index.md)
