# Role Profile Template

**⚠️ SYNC RULE:** This template must be kept in sync with `target_roles/template_role/role_profile.md`
When updating this template, also update the file in the target_roles folder.

```yaml
---
title: "ROLE TYPE (e.g., Senior Product Manager)"
slug: "role_type_slug (e.g., senior_product_manager)"
status: "draft | analyzing | ready | applied | rejected | offer"
jds_analyzed: N
priority_keywords: [keyword-1, keyword-2, keyword-3]
required_skills:
  - name: "Skill Name"
    priority: "critical | high | medium"
    frequency: "N/N JDs"
    evidence_needed: "What kind of proof this skill requires"
  - name: "Another Skill"
    priority: "high"
    frequency: "1/N JDs"
    evidence_needed: "What to demonstrate"
---
```

## Role Overview

[Brief summary of what this role type is about — 2-3 sentences. This describes the GENERAL role, not a specific company's version of it.]

---

## Domain Context

**⚠️ DOMAIN-AWARE PROCESS:** Different industries/domains emphasize different aspects of the same skills. Domain context is extracted from JDs and influences how stories are selected, tiered, and framed in the CV. This section grows as JDs from new domains are added.

### Domain: [Domain Name] (e.g., EdTech, FinTech, HealthTech, Enterprise SaaS)
*Source: JD from [Company], YYYY-MM-DD*

**What makes this domain different for this role:**
- [Specific aspects of the role that are unique or emphasized in this domain]
- [Keywords and concepts that carry special meaning in this domain]
- [What "success" looks like in this domain vs. general]

**Story framing guidance for this domain:**
- [How to frame existing stories for this domain context — what to emphasize]
- [What aspects to de-emphasize]
- [Domain-specific vocabulary to use in CV bullets]

**JD-specific domain signals:**
- [Key phrases from JD that reveal domain-specific expectations]
- [Repeated domain concepts that signal what matters most]

---

## JD History

**All JDs analyzed for this role type. Each new JD refines the requirements.**

| # | Company | Source | Date Analyzed | Key Emphasis | JD File |
|---|---------|--------|---------------|--------------|---------|
| 1 | [Company Name] | [LinkedIn / Referral / etc.] | YYYY-MM-DD | [What this JD emphasized most] | [jd_company_YYYY-MM-DD.md](jd_company_YYYY-MM-DD.md) |
| 2 | [Company Name] | [Source] | YYYY-MM-DD | [What this JD emphasized most] | [jd_company_YYYY-MM-DD.md](jd_company_YYYY-MM-DD.md) |

**Market insights from JD patterns:**
- [Skill that appears in most JDs — strong market signal]
- [Keyword that's consistent across companies]
- [Trend you're noticing in requirements]

---

## Merged Requirements

### Must-Have Skills (Critical)

*Skills confirmed by multiple JDs or marked as "required" in recent JDs.*

| Skill | Priority | Frequency | Evidence Needed | My Coverage |
|-------|----------|-----------|-----------------|-------------|
| Skill 1 | Critical | 2/2 JDs | [What JD says] | [To be filled] |
| Skill 2 | Critical | 1/2 JDs | [What JD says] | [To be filled] |

### Nice-to-Have (High Priority)

| Skill | Priority | Frequency | Evidence Needed | My Coverage |
|-------|----------|-----------|-----------------|-------------|
| Skill 3 | High | 1/2 JDs | [What JD says] | [To be filled] |

### Bonus Skills

| Skill | Priority | Frequency | Evidence Needed | My Coverage |
|-------|----------|-----------|-----------------|-------------|
| Skill 4 | Medium | 1/2 JDs | [What JD says] | [To be filled] |

---

## Keyword Analysis

**Priority keywords (ranked by cross-JD frequency):**
[Words that appear frequently or are emphasized across multiple JDs]

1. **keyword_1** — [In N/N JDs] — [Why it's important]
2. **keyword_2** — [In N/N JDs] — [Why it's important]
3. **keyword_3** — [In N/N JDs] — [Why it's important]

**Action verbs used (across all JDs):**
[Verbs like "led", "launched", "managed" — mirror these in your CV]

---

## Application Strategy

**My unique value prop for this role type:**
[What makes you a strong fit for this type of role across companies]

**Key stories I want to highlight:**
[Once you've mapped skills, list which stories are most relevant]

**Gaps to address:**
[Skills or experience where you're weak — decide if it's worth applying]

---

## Active Applications

**Track specific applications using this role profile:**

| Company | Date Applied | Stage | Notes |
|---------|-------------|-------|-------|
| [Company Name] | YYYY-MM-DD | [Application / Screen / Technical / Onsite / Offer / Rejected] | [Any feedback or learnings] |

---

## Next Steps

* [ ] Run `/map-skills` to match stories to this role (or re-run after new JD)
* [ ] Review skills mapping and address gaps
* [ ] Generate/refine CV using skills mapping
* [ ] [Apply to specific company / Skip]

---

**Created:** YYYY-MM-DD
**Last Updated:** YYYY-MM-DD
**Last JD Added:** YYYY-MM-DD
