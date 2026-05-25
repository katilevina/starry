---
name: cover-letters
description: Complete guide to writing effective cover letters that differentiate you from other candidates
version: 1.0.0
author: Job Hunt System
tags: [cover-letter, application, job-search, writing]
---

# Cover Letters Skill

**Purpose:** Teach how to write effective cover letters that complement your CV and demonstrate genuine interest in the role.

---

## 🎯 Why Cover Letters Matter

**The Goal:** Stand out from other candidates.

When a hiring manager receives 100 applications:
1. They filter out irrelevant ones
2. They review CVs and cover letters of potentially relevant candidates
3. **First** invitations go to candidates with relevant CV + good cover letter
4. **Second** invitations go to candidates with just a relevant CV

A cover letter is your **first test assignment** for the company.

---

## 👀 What Employers Evaluate

### 1. Is this personal or spam?

- Did you read the job posting, or are you mass-applying?
- Employers ALWAYS prefer motivated candidates

### 2. Motivation to work at THIS company

- Did you research beyond the job posting?
- Why did you choose to apply here specifically?

### 3. Communication effectiveness

- Can you put yourself in another person's shoes?
- Do you make it convenient and clear for them?
- ❌ Focus on yourself and your problems/goals
- ✅ Focus on the employer and the role

### 4. Social evaluation

- CV is structured and formal
- Cover letter shows your human side
- **People prefer working with pleasant people** — hard skills are secondary

### 5. Attention test

- Some employers explicitly state what they want in the cover letter
- Ignoring this = automatic rejection
- Follow instructions: email vs. LinkedIn vs. application form

---

## ✅ What Employers Want to See

1. You know the company and read the job posting
2. You have relevant experience (at least 70% match)
3. You have individuality (people hire people)

**📌 Exception:** If a recruiter at a specific company gives different advice, follow theirs — but only for that company. They know their company better.

---

## 📝 Cover Letter Structure

**📌 Cover letter COMPLEMENTS your CV, it does NOT duplicate it**

### 1. Introduction

Who you are and what role you're applying for

### 2. Why You're a Great Fit (2-3 brief bullets)

Carefully read the job requirements, select the most relevant ones, and be specific:

❌ "3 years of writing experience"
✅ "Wrote 47 articles for TechCorp that generated 50K+ monthly views"

### 3. Motivation

Why this role and/or company interests you. If you don't have genuine motivation, create it based on what you know about the company.

### 4. Individual Hook — Optional!

A brief personal fact that connects you to the company.

### 5. Call to Action

Closing with next steps and contact information.

---

## 🚫 Anti-Patterns: What NOT to Do

❌ **Same cover letter for all employers**
❌ **Repeating your CV**
❌ **Writing only about motivation without mentioning fit**
❌ **Focusing on your problems and challenges**
❌ **Not proofreading for grammar errors** (use Grammarly for English)
❌ **Not explaining nonlinear career paths** (e.g., dev → product)
❌ **Not explaining domain switches** (e.g., applying to FinTech without FinTech experience)

---

## ✅ Best Practices

✅ **Use ChatGPT for brainstorming, but rewrite in your own words**
✅ **Use keywords from the job description** for motivation and results
✅ **No fluff whatsoever** — only essential content
✅ **Remove all empty adjectives and polite phrases**
✅ **Use bullets for structure**
✅ **Less fluff = more substance = saves your time**
✅ **State relocation readiness** ("I'm ready to relocate anywhere for this role")

---

## 🔍 Research for Personalization

Before writing your cover letter:

1. **Company website** — mission, values, products
2. **Recent news** — funding, product launches, expansions
3. **Team** — founders, hiring manager, team members on LinkedIn
4. **Your connection** — are you a user? Did you attend an event?

**Goal:** Find 1-2 specific references that prove you did your homework.

---

## 📏 Quality Checklist

Before sending:

- [ ] No generic phrases ("always wanted to work here")
- [ ] Each bullet has a specific metric/result
- [ ] At least one specific company reference
- [ ] Tone matches job description (formal vs. casual)
- [ ] Doesn't duplicate CV — complements it
- [ ] No self-focus — all about value to company
- [ ] Proofread for grammar (Grammarly for English)
- [ ] Length: 150-250 words
- [ ] Explains nonlinear career path (if applicable)
- [ ] Explains domain/industry switch (if not obvious)

---

## 📧 Email Subject Line

**Format:** `[Role Title] application - [Your Name]`

**Example:** `Senior Product Manager application - Jane Doe`

---

## 🎨 Tone Matching

Adjust your tone based on the company and role:

**Corporate/Traditional:**
- More formal language
- Focus on stability, process, results
- "Dear [Name]" vs "Hi [Name]"

**Startup/Casual:**
- More conversational tone
- Focus on impact, growth, startup experience
- "Hey [Name]" vs "Hi [Name]"

**Clue:** Read the job description language carefully — mirror their tone.

---

## 🔗 Integration with System Workflow

### Prerequisites

- CV exists in `target_roles/[role]/cv.md` (via `/generate-cv`)
- JD exists in `target_roles/[role]/jd_[company]_[date].md`

### When to Write Cover Letter

After CV generation, before or during application:

1. `/analyze-role` → creates role folder with JD
2. `/map-skills` → assesses readiness
3. `/generate-cv` → creates tailored CV
4. **`/write-cl`** → writes cover letter for specific company
5. Review both CV and CL
6. Apply → track conversion in `applications_index.md`

### Cover Letter is NOT Auto-Generated

CV and CL are separate because:
- CL is highly specific to exact company and timing
- CL may require company research not done for CV
- You might use same CV for multiple companies but different CLs
- CL might need iteration based on networking/conversations

---

## 🎯 When to Skip Cover Letter

Some companies explicitly say "no cover letters needed."

**Respect this** — skip the cover letter and proceed directly to application tracking.

---

## 📚 Further Reading

See `references/` for:
- **cl_template.md** — structured template with placeholders
- **cl_examples.md** — good vs. bad examples with analysis

---

## 📎 External References

Дополнительные материалы из открытых/закрытых источников (гайды, статьи, скриншоты, конспекты курсов) лежат в `/references/cover-letters/` на уровне проекта.

- Source of truth для скилла — шаблоны в `references/` внутри самого скилла
- Внешка — для вдохновения, дополнительных приёмов и примеров
- Индекс источников: `/references/cover-letters/sources.md`
- Как добавить новый материал: см. `/references/README.md`

---

## 🤖 Related Skills

- **starr-achievements** — source of achievement stories for CL bullets
- **job-analysis** — JD analysis for understanding requirements
- **applications** — tracking CLs sent and conversion rates
