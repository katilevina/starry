# Job Description Analysis & Skills Mapping Skill

**Purpose:** Complete guide to analyzing job descriptions, mapping achievements to roles, and generating tailored CVs

---

## 📚 Part 1: Job Description Analysis

### Analysis Process

When analyzing a JD, extract systematically:

#### 1. Extract Responsibilities

- Copy the "what you'll do" section verbatim
- Identify 5-7 key responsibilities
- Look for emphasis patterns (bullets at top = more important)

#### 2. Extract Requirements

- Copy the "requirements" or "qualifications" section
- Separate into:
  - **Must-have** → "Must have", "Required", "X years experience"
  - **Nice-to-have** → "Preferred", "Strong plus", "Ideally"
  - **Bonus** → "Bonus", "Nice to have", "Plus"

#### 3. Keyword Extraction

**Technical terms:**
- Tools (Salesforce, Tableau, Jira)
- Methodologies (Agile, Scrum, Lean)

**Action verbs:**
- led, launched, managed, optimized, drove, built

**Industry buzzwords:**
- Words that appear multiple times
- Terms specific to this industry/role

**Note:** These keywords should appear in your CV bullets

#### 4. Categorize Skills by Priority

For each skill found:

- **Critical:** "Must have", "Required", "X years experience"
- **High:** "Preferred", "Strong plus", "Ideally"
- **Medium:** "Bonus", "Nice to have", "Plus"

---

## 📄 Template 1: Role Profile

**⚠️ SYNC RULE:** This template must be kept in sync with `target_roles/template_role/role_profile.md`
When updating this template, also update the file in the target_roles folder.

```yaml
---
title: "JOB TITLE (e.g., Senior Product Manager)"
company: "Company you're applying to"
source: "Where you found this job (e.g., LinkedIn - applied 2026-01-15)"
status: "draft | analyzing | ready | applied | rejected | offer"
priority_keywords: [keyword-1, keyword-2, keyword-3]
required_skills:
  - name: "Skill Name"
    priority: "critical | high | medium"
    evidence_needed: "What kind of proof this skill requires"
  - name: "Another Skill"
    priority: "high"
    evidence_needed: "What to demonstrate"
---
```

## Role Overview

[Brief summary of what this role is about — 2-3 sentences]

---

## JD Summary

**What they're looking for:**
[Copy-paste the key requirements from the JD here]

**Key responsibilities:**
- [Responsibility 1 from JD]
- [Responsibility 2 from JD]
- [Responsibility 3 from JD]

---

## Requirements Breakdown

### Must-Have Skills (Critical)

| Skill | Priority | Evidence Needed | My Coverage |
|-------|----------|-----------------|-------------|
| Skill 1 | Critical | [What JD says] | [To be filled] |
| Skill 2 | Critical | [What JD says] | [To be filled] |

### Nice-to-Have (High Priority)

| Skill | Priority | Evidence Needed | My Coverage |
|-------|----------|-----------------|-------------|
| Skill 3 | High | [What JD says] | [To be filled] |

### Bonus Skills

| Skill | Priority | Evidence Needed | My Coverage |
|-------|----------|-----------------|-------------|
| Skill 4 | Medium | [What JD says] | [To be filled] |

---

## Keyword Analysis

**Priority keywords from JD:**
[These are words that appear frequently or are emphasized]

1. **keyword_1** — [Why it's important]
2. **keyword_2** — [Why it's important]
3. **keyword_3** — [Why it's important]

**Action verbs used:**
[Verbs like "led", "launched", "managed" — mirror these in your CV]

---

## Company Context

**What I know about this company:**
- [Industry, size, business model]
- [Products/services]
- [Recent news or position]

**Why this role is interesting:**
[Your motivation for applying — keeps you focused]

---

## Application Strategy

**My unique value prop for THIS role:**
[What makes you a strong fit specifically for this position]

**Key stories I want to highlight:**
[Once you've mapped skills, list which stories are most relevant]

**Gaps to address before applying:**
[Skills or experience where you're weak — decide if it's worth applying]

---

## Next Steps

- [ ] Review full JD for additional details
- [ ] Research company more deeply
- [ ] Run `/map-skills` to match stories to this role
- [ ] Generate CV using skills mapping
- [ ] [Apply / Skip]

---

## Application Timeline

- **Date found:** YYYY-MM-DD
- **Date applied:** YYYY-MM-DD
- **Interview stage:** [Application / Screen / Technical / Onsite / Offer / Rejected]
- **Notes:** [Any feedback or learnings]

---

**Created:** YYYY-MM-DD
**Last Updated:** YYYY-MM-DD

---

## 📚 Part 2: Skills Mapping

### Mapping Logic

**Deep Achievement Analysis** (not just keyword matching):

1. Read the FULL achievement — Situation, Task, Action, Result, Reflection
2. Understand what YOU actually did
3. Extract how the achievement demonstrates specific skills required by the target role
4. Different skills can be extracted from the SAME achievement for different target roles

**Example:**
- Same achievement for "Data Analyst" role → demonstrates data analysis skills
- Same achievement for "Team Lead" role → demonstrates stakeholder management skills

**Evidence Quality:**
- Does the achievement have metrics?
- Is the impact clear?
- Is it relevant to the target role?

### Coverage Rating

- **✅ Strong:** Story has clear action + metrics directly showing skill
- **⚠️ Moderate:** Story implies skill or has weak metrics
- **❌ Gap:** No story demonstrates this skill

---

## 📄 Template 2: Skills Mapping

**⚠️ SYNC RULE:** This template must be kept in sync with `target_roles/template_role/skills_mapping.md`
When updating this template, also update the file in the target_roles folder.

```markdown
# Skills Mapping: [Role Title]

Analysis of how your stories demonstrate the required skills for this role.

**📌 IMPORTANT:** I read the FULL STAR narrative for each story and extract specific evidence. I don't rely on tags or pre-categorized skills — I analyze how the story demonstrates skills in the context of THIS specific role.

---

## ✅ Critical Skills Coverage

### Skill 1: [Skill Name]

**Requirement from JD:**
[What the job posting asks for — quote or paraphrase]

**My best evidence:**
- **[[story_X]]** — [Story title]
  - *Quote from story:* "Built centralized analytics dashboard using Tableau and SQL, pulling data from 3 different product tools"
  - *How this demonstrates [skill]:* You analyzed data from multiple sources and created a unified view for decision-making
  - *Metrics:* "Decision speed improved by 40% — from avg 2 weeks to 1 week"
  - *Why strong:* Direct action + measurable business impact

**Coverage status:** ✅ Strong / ⚠️ Moderate / ❌ Gap

---

### Skill 2: [Skill Name]

**Requirement from JD:**
[What the job posting asks for — quote or paraphrase]

**My best evidence:**
- **[[story_Y]]** — [Story title]
  - *Quote from story:* "Trained 3 cross-functional teams (product, engineering, design) on new framework"
  - *How this demonstrates [skill]:* You led change across multiple teams with different priorities
  - *Metrics:* "3 teams adopted framework within 2 months"
  - *Why strong:* Clear stakeholder management + adoption metrics

**Coverage status:** ✅ Strong / ⚠️ Moderate / ❌ Gap

---

## 📊 Coverage Summary

| Skill | Status | Best Story | Confidence |
|-------|--------|------------|------------|
| Skill 1 | ✅ Strong | [[story_X]] | High |
| Skill 2 | ✅ Strong | [[story_Y]] | High |
| Skill 3 | ⚠️ Moderate | [[story_Z]] | Medium |
| Skill 4 | ❌ Gap | - | Low |

---

## 🎯 Story Recommendations for This Role

### Tier 1: Must Include in CV
*These stories best demonstrate the critical skills*

1. **[[story_X]]** — [Title]
   - *From the story:* "[Quote the key action and result]"
   - *Demonstrates:* Skill 1, Skill 2 (specific to THIS role's requirements)
   - *Key metrics:* [Most impressive numbers with context]
   - *Why for this role:* JD emphasizes [requirement]; this story proves you have [specific experience]

2. **[[story_Y]]** — [Title]
   - *From the story:* "[Quote the key action and result]"
   - *Demonstrates:* Skill 3, Skill 4
   - *Key metrics:* [Most impressive numbers with context]
   - *Why for this role:* JD asks for [requirement]; this story shows [specific achievement]

### Tier 2: Good to Have
*Supporting stories that add depth*

1. **[[story_Z]]** — [Title]
   - *Demonstrates:* Skill 5
   - *Key metrics:* [Most impressive numbers]
   - *Why for this role:* [Connects to JD requirements]

### Tier 3: If Space Allows
*Nice-to-have stories*

1. **[[story_W]]** — [Title]
   - *Demonstrates:* Skill 6
   - *Use when:* [When this story is relevant]

---

## ⚠️ Gaps & Areas to Strengthen

### Missing Evidence

**Skill 7:** [Required skill you don't have a strong story for]
- *Current evidence:* [Weak or none]
- *Ideas:* [What story you could develop or how to reframe existing story]
- *Priority:* High / Medium / Low

**Skill 8:** [Another missing skill]
- *Current evidence:* [Weak or none]
- *Ideas:* [What story you could develop]
- *Priority:* High / Medium / Low

### Stories That Need More Metrics

**[[story_A]]** — [Title]
- *Current:* [What you have now]
- *Add:* [What numbers or details would strengthen it]
- *How to get:* [Where to find this data]

---

## 💡 CV Insights

**Your angle for this role:**
[Based on your strongest stories, what's your narrative?]

**Keywords to emphasize in CV:**
[Words from the JD that you should use in your CV bullets]

**Things to downplay:**
[Skills or experience less relevant to this role]

---

## 🚦 Go/No-Go Decision

**Before applying, assess:**

- [ ] **Critical skills covered:** At least 80% of "must-have" skills have strong evidence
- [ ] **No deal-breaker gaps:** Missing skills aren't make-or-break for this role
- [ ] **Compelling narrative:** Your stories tell a coherent story for this role
- [ ] **Authentic fit:** You can genuinely speak to all stories in interviews

**Recommendation:** ✅ Apply / ⚠️ Strengthen first / ❌ Skip

**Reasoning:**
[Your assessment of whether this role is a good match]

---

## 📝 Next Actions

- [ ] [Action 1: e.g., "Add metrics to story_3"]
- [ ] [Action 2: e.g., "Develop story about budget management"]
- [ ] [Action 3: e.g., "Generate CV from Tier 1 stories"]
- [ ] [Action 4: e.g., "Research company more deeply"]

---

**Created:** YYYY-MM-DD
**Last Updated:** YYYY-MM-DD
```

---

## 📚 Part 3: CV Generation

### CV Strategy

**Prioritization:**
- Tier 1 achievements → Summary + top bullet points
- Tier 2 achievements → Work experience bullets
- Tier 3 → Only if space allows

**Tailoring:**
- Use target role's priority keywords in headers/bullets
- Reorder bullets by relevance to this target role
- Mirror market language (what appears across JDs)

**Principles:**
- Every bullet has a number/metric
- No more than 3-4 bullets per role
- Active voice, action verbs
- NO invented details

---

## 📄 Template 3: CV

**⚠️ SYNC RULE:** This template must be kept in sync with `target_roles/template_role/cv.md`
When updating this template, also update the file in the target_roles folder.

```yaml
---
role: "Job Title"
company: "Target Company"
version: "1.0"
last_updated: YYYY-MM-DD
based_on: "skills_mapping.md"
---
```

# Your Name
[City, Country] | [email@example.com] | [LinkedIn] | [Portfolio/Website]

---

## Professional Summary

[2-3 sentences using Tier 1 stories and role keywords]

**Template:**
[Role Title] with [X] years of experience in [industry/domain]. Proven track record of [key achievement from Tier 1 story] and [another key achievement]. Expertise in [skill 1], [skill 2], and [skill 3] — demonstrated through [metric] [outcome] and [metric] [outcome].

---

## Work Experience

### [Current/Most Recent Company] | [Your Role]
*MM.YYYY – Present* | [City]

[**Most relevant Tier 1 story bullets**]
- [Action verb] [what you did] using [tool/method], resulting in [metric] [outcome]
- [Action verb] [what you did], achieving [metric] [outcome]
- [Action verb] [what you did] for [stakeholder], delivering [metric] [outcome]

[**Supporting Tier 2 story bullets**]
- [Action verb] [what you did], improving [metric] by [X]%
- [Action verb] [what you did], managing [team/budget of X]

---

### [Previous Company] | [Your Role]
*MM.YYYY – MM.YYYY* | [City]

[**Relevant story bullets for this role**]
- [Action verb] [what you did], resulting in [metric] [outcome]
- [Action verb] [what you did], achieving [metric] [outcome]
- [Action verb] [what you did], delivering [metric] [outcome]

---

### [Earlier Company] | [Your Role]
*MM.YYYY – MM.YYYY* | [City]

[**Brief relevant bullets**]
- [Key achievement with metric]
- [Key achievement with metric]

---

## Education

### [Degree Name]
[University Name] | *YYYY – YYYY*
- [Relevant detail: GPA, thesis, honors if relevant]

---

## Key Skills

**[Skill Category 1]**
- [Skill] — [Brief context or tool]
- [Skill] — [Brief context or tool]

**[Skill Category 2]**
- [Skill] — [Brief context or tool]
- [Skill] — [Brief context or tool]

**[Skill Category 3]**
- [Skill] — [Brief context or tool]
- [Skill] — [Brief context or tool]

---

## Certifications & Training

- [Certification Name] — [Issuer] | [Year]
- [Certification Name] — [Issuer] | [Year]

---

## Languages

- [Language] — [Native/Fluent/Intermediate]
- [Language] — [Native/Fluent/Intermediate]

---

## Notes for Tailoring

**Keywords emphasized:** [From JD, integrated above]

**Stories used:**
- [[story_X]] — in Summary and Company 1 bullets
- [[story_Y]] — in Company 1 bullets
- [[story_Z]] — in Company 2 bullets

**What was de-emphasized:**
[Skills or experience less relevant to this role — excluded or minimized]

**Custom sections to add:**
[Any role-specific sections like "Projects", "Publications", etc.]

---

## Version History

- **v1.0** (YYYY-MM-DD) — Initial CV from skills mapping

---

**⚠️ REMINDER:** Before using this CV:
1. Proofread for typos
2. Verify all metrics are accurate
3. Ensure you can speak to every bullet in an interview
4. Check formatting when pasting into application system

---

## 🔍 CV Generation Rules

### Professional Summary
- 2-3 sentences max
- Mention target role title + years experience
- 2 key achievements from Tier 1 achievements with metrics
- 3 top skills from target role requirements

### Work Experience Bullets
- Start with action verbs from JD
- Use Tier 1 achievements first, then Tier 2
- Every bullet must have a number
- Max 3-4 bullets per company
- Order by relevance to this target role (not chronology)

### Skills Section
- Group by category (Technical, Leadership, etc.)
- Only list skills actually demonstrated in achievements
- Mirror JD terminology

### What to Exclude
- Tier 3 achievements (unless space allows)
- Irrelevant experience
- Stories without metrics (flag these first)

---

## ✅ Quality Checklist

Before finalizing:

- [ ] All bullets have metrics (no exceptions)
- [ ] Every claim can be backed up with a story
- [ ] Keywords from JD are used naturally
- [ ] Action verbs mirror JD language
- [ ] Tier 1 stories are prominent
- [ ] Summary tells a coherent narrative
- [ ] Can speak to every bullet in interview

---

**Last Updated:** 2026-01
