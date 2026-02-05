# Analyze Job Descriptions Analyze Job Description & Create Role Create Generalized Target Role

**Goal:** Extract requirements, keywords, and skills from a JD to create a new target role profile

---

## Instructions for Me (Claude)

1. **Gather basic info** using quiz:
   - Job title
   - Company name
   - Where you found it (LinkedIn, referral, etc.)
   - Paste the full JD text

2. **Analyze the JD** systematically:

   **a. Extract Responsibilities:**
   - Copy the "what you'll do" section verbatim
   - Identify 5-7 key responsibilities

   **b. Extract Requirements:**
   - Copy the "requirements" or "qualifications" section
   - Separate into: Must-have vs Nice-to-have vs Bonus

   **c. Keyword Extraction:**
   - Identify technical terms (tools, methodologies)
   - Identify action verbs (led, launched, managed)
   - Identify industry buzzwords
   - Note words that appear multiple times

3. **Categorize Skills** with priority levels:

   For each skill found:
   - **Critical:** "Must have", "Required", "X years experience"
   - **High:** "Preferred", "Strong plus", "Ideally"
   - **Medium:** "Bonus", "Nice to have", "Plus"

4. **Create target role folder**:
   - Create folder: `target_roles/role_[slug]/`
   - Slug based on company + role (e.g., `role_google_pmm`)

5. **Generate role_profile.md**:
   - Fill YAML front-metadata with all fields
   - Complete all sections from template

6. **Create empty skills_mapping.md**:
   - Copy template but leave coverage tables empty
   - These will be filled by `/map-skills` command

7. **Create empty cv.md**:
   - Copy template
   - Will be generated after skills mapping

8. **Update user**:
   - Show summary of what was extracted
   - Highlight top 5 critical skills
   - Ask: "Ready to proceed to skills mapping?"

---

## Quiz Questions to Start

1. **Job title?** (free text)
2. **Company name?** (free text)
3. **Where did you find this role?** (select: LinkedIn, Referral, Company Website, Recruiter, Other)
4. **Paste the full job description** (free text — paste entire JD)

---

## Example Conversation Flow

**User:** /analyze-role

**Claude:**
Let's analyze a job description and create a target role profile.

**[Quiz questions for basic info + JD paste]**

**Claude:**
Great! I'm analyzing the JD for **[Role] at [Company]**...

**[Processes JD]**

**Claude:**
Here's what I extracted:

## Key Responsibilities (5)
1. [Responsibility 1 from JD]
2. [Responsibility 2 from JD]
...

## Critical Skills (Must-Have)
1. **Skill 1** — [Why it's critical based on JD]
2. **Skill 2** — [Why it's critical based on JD]
...

## Priority Keywords
- keyword_1 (mentioned X times)
- keyword_2
- keyword_3

## Action Verbs to Mirror
- led, launched, managed, optimized, etc.

I've created the target role profile at `target_roles/role_[slug]/role_profile.md`.

Ready to run `/map-skills` to see how your stories match these requirements?

**[User responds]**

---

## Tips for Me

- **Copy JD text verbatim** — don't paraphrase requirements
- **Look for emphasis patterns** — bullets at the top, repeated words, "must-have" labels
- **Separate skills clearly** — critical vs high vs medium priority
- **Identify action verbs** — these should appear in CV bullets
- **Note company-specific language** — mirror their terminology in CV
- **Create the full folder structure** — role_profile, skills_mapping, and cv files

---

## What I'm Looking For in the JD

**Red flags (gaps to flag):**
- "X years experience in [specific industry]" — do you have this?
- "Must have experience with [specific tool]" — can you demonstrate this?
- "Proven track record of [outcome]" — do you have a story for this?

**Green flags (your strengths):**
- Skills where you have multiple strong stories
- Keywords that appear in your top Tier 1 stories
- Requirements that match your exact experience

---

## Output

New folder created: `target_roles/role_[slug]/`
Files created:
- `role_profile.md` — Complete JD analysis
- `skills_mapping.md` — Empty template (to be filled)
- `cv.md` — Empty template (to be generated)

Next step: Use `/map-skills` to match stories to this role
