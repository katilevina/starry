# Employers Index

Overview of all companies and roles you've worked for.

---

## 📊 Summary

| Company | Your Role | Duration | Stories Based On | Key Skills | Related Stories |
|---------|-----------|----------|------------------|------------|-----------------|
| Company A | Senior PM | 2021-2024 | 3 stories | skill1, skill2 | story_1, story_2, story_3 |
| Company B | PM | 2019-2021 | 2 stories | skill3, skill4 | story_4, story_5 |

*Update this table as you add employers*

**Note:** "Stories Based On" shows how many STARR stories this employer profile was built from.

---

## 🏢 Employers

### [[employer_company_a]]
**Role:** Senior Product Manager
**Duration:** 2021-2024
**Industry:** SaaS
**Stories based on:** 3

**Key responsibilities** (from stories):
- Product roadmap *(story_1, story_2)*
- Team leadership *(story_3)*
- Data strategy *(story_1)*

**Related stories:**
- [[story_1]] — Data framework launch
- [[story_2]] — Feature release
- [[story_3]] — Team restructuring

---

### [[employer_company_b]]
**Role:** Product Manager
**Duration:** 2019-2021
**Industry:** E-commerce

**Key responsibilities:**
- Feature delivery
- A/B testing
- Stakeholder management

**Related stories:**
- [[story_3]] — Optimization project

---

## 📝 How to Add Employers

Use the `/add-employer` command to interactively create a new employer profile.

**Important:** Employer profiles are built FROM your STARR stories, not the other way around.

The command will:
1. Check if you have stories for this company
2. **If yes:** Extract responsibilities, tools, achievements from your stories automatically
3. **If no:** Encourage you to add stories first (or create minimal profile with warning)
4. Ask only for high-level company context (industry, business model, size)
5. Link all related stories automatically
6. Create the file and update this index

**Why this approach:**
- No manual duplication of work
- Employer profile always matches your stories
- Stories remain the source of truth
- Prevents contradictions between profile and stories

---

## 🔗 Cross-Reference

**Stories link to employers** → Each story file has `company` and `role` fields in YAML
**Employers link to stories** → Each employer file lists `[[story_X]]` references and `stories_based_on: X` count

**This creates a bidirectional web:**
- From story → See which employer it belongs to
- From employer → See all stories from that company
- Employer profile auto-updates when new stories are added

**For CV generation:**
- Employer profiles provide company context
- Stories provide the detailed evidence
- Always aligned because employers are built FROM stories

---

**Last Updated:** [Date]
