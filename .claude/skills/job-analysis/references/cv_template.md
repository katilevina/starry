# CV Template

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

---

Your Name

Your title

your.email@gmail.com • phone no • LinkedIn • Location

Your title + years of experience + key skills/areas of work. Key results. Your value — the superpower you are selling. Your motivation if applicable.

**⚠️ RECENCY RULE:** Summary should feature achievements from the most recent company whenever possible. Only use older achievements if they are dramatically stronger.

**Template:** [Role Title] with [X] years of experience in [key skills/areas]. [Key result from most recent Tier 1 story with metric]. [Your value / superpower]. [Motivation if applicable].

---

Experience

**⚠️ RECENCY-FIRST RULE:** Most recent company gets the most bullets (3-4) and the best Tier 1 stories. Previous companies get fewer bullets (2-3). Earlier companies get minimal bullets (1-2).

**[Current/Most Recent Company], [one-line company description]**	City, Country

**Role title**	Month 20XX – now

Summary or mission: [Strong verb] [team/project] [product] [result in numbers]

- [Strong verb] [result] due to / by [action]
- [Strong verb] [result] due to / by [action]
- [Strong verb] [result] due to / by [action]

*(3-4 bullets — assign the best Tier 1 stories here. Format: result FIRST, then how you achieved it.)*

---

**[Previous Company], [one-line company description]**	City, Country

**Role title**	Month 20XX – Month 20XX

Summary or mission: [Strong verb] [team/project] [product] [result in numbers]

- [Strong verb] [result] due to / by [action]
- [Strong verb] [result] due to / by [action]

*(2-3 bullets — Tier 2 stories, strong older achievements)*

---

**[Earlier Company], [one-line company description]**	City, Country

**Role title**	Month 20XX – Month 20XX

Summary or mission: [Strong verb] [team/project] [product] [result in numbers]

- [Strong verb] [result] due to / by [action]

*(1-2 bullets — only the strongest metrics)*

---

Certifications

Course title [add link], Source	Month 20XX

Course title [add link], Source	Month 20XX

---

Education

BA/MA in XYZ, University name	Country, 20XX

---

Skills & Languages

General from the field & Specific
Tools, Programming languages

English, level

---

## Bullet Format Rules

**Every bullet follows: `[Strong verb] [result] due to / by [action]`**

- **Result goes FIRST** — the impact, the metric, the outcome
- **Then how** — the action, method, or approach that led to it
- Every bullet MUST have a number/metric
- Use strong verbs from JD (Led, Built, Grew, Reduced, Launched, etc.)
- Mirror JD language
- **Apply domain-specific framing** — use vocabulary from Domain Context in role_profile.md (e.g., "learning platform" not "product" for EdTech)

**Examples:**
- Grew monthly active users by 40% by redesigning the onboarding flow
- Reduced customer churn by 25% due to implementing predictive retention model
- Led cross-functional team of 8 to launch new feature, resulting in $2M ARR increase

**Domain framing example:**
- Same story (heroes.camp), two framings:
  - EdTech: "Redesigned learning platform content using knowledge maps and reinforcement loops — 95% reduction in navigation questions"
  - General SaaS: "Built real-time analytics with per-student dashboards — scaled cohorts from 82 to 178 users"

## Quality Rules

**Proofread against BOTH sources:**
1. Story files — verify all metrics and facts come from the story
2. Company profile documents — verify supporting details (branch counts, user numbers, etc.)

**Currency rules:**
- Match currency to target company context (EUR for EU, USD for US, etc.)
- Ask user if unsure

**Logical sense rules:**
- "2.6× growth from zero" is contradictory (can't multiply zero)
- "Scaled engagement 117%" is nonsensical if 82→178 is capacity, not engagement
- Every phrase must make logical sense when read carefully

**Style rules (human writing, not LLM):**
- NO arrows (→) — use "from X to Y" or "X down to Y" instead
- NO plus signs (+) — use "and" or "," instead
- Example: "reduced time from 10 days to 4.8 days" NOT "10 days → 4.8 days"
- Example: "classification and semantic matching" NOT "classification + semantic matching"

---

## Notes for AI (not included in output CV)

**Stories used:**
* [[story_X]] — in Summary and Company 1 bullets
* [[story_Y]] — in Company 1 bullets
* [[story_Z]] — in Company 2 bullets

**What was de-emphasized:**
[Skills or experience less relevant to this role — excluded or minimized]

---

**⚠️ REMINDER:** Before using this CV:
1. Proofread for typos
2. Verify all metrics are accurate
3. Ensure you can speak to every bullet in an interview
4. Check formatting when pasting into application system
