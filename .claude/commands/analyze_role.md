# Analyze Job Description & Create / Update Role

**Goal:** Extract requirements from a JD, create a new role profile OR merge into an existing one

---

## Instructions for Me (Claude)

1. **Gather basic info:**
   - **If JD text is passed as argument** → extract company and title from text, skip quiz. Source (where found) is optional — leave placeholder in JD file, user can tell you later.
   - **If no argument** → ask quiz: job title, company, source, paste full JD

2. **Check for existing role match** (CRITICAL — do this before creating anything):
   - List all folders in `target_roles/my_data/`
   - Read existing `role_profile.md` files
   - Compare new JD's role title and responsibilities with existing roles
   - If similar role exists → ask user: "This looks like it matches your existing **role_X**. Should I merge this JD into it, or create a new role?"
   - If no match → proceed to create new role

3. **Analyze the JD** systematically:

   **a. Extract Responsibilities:**
   - Copy the "what you'll do" section verbatim
   - Identify 5-7 key responsibilities

   **b. Extract Requirements:**
   - Copy the "requirements" or "qualifications" section
   - Separate into: Must-have vs Nice-to-have vs Bonus

   **c. Extract Domain Context (CRITICAL):**
   - Identify the domain from company description and JD language (EdTech, FinTech, HealthTech, etc.)
   - Extract domain-specific expectations: what "success" means, domain vocabulary, role emphasis
   - Generate story framing guidance: how to frame stories for this domain
   - Store in role_profile.md under "Domain Context" section
   - If role folder already has a domain from a different industry → add new domain sub-section

   **d. Keyword Extraction:**
   - Identify technical terms (tools, methodologies)
   - Identify action verbs (led, launched, managed)
   - Identify industry buzzwords
   - Identify domain-specific keywords (cross-reference with Domain Context)
   - Note words that appear multiple times

4. **Categorize Skills** with priority levels:

   For each skill found:
   - **Critical:** "Must have", "Required", "X years experience"
   - **High:** "Preferred", "Strong plus", "Ideally"
   - **Medium:** "Bonus", "Nice to have", "Plus"

---

### PATH A: New Role (no existing match)

5a. **Create target role folder**:
   - Create folder: `target_roles/my_data/role_[role_type_slug]/`
   - Slug based on ROLE TYPE (e.g., `role_product_manager`, `role_data_analyst`)
   - NOT based on company name

6a. **Save full JD as separate file**:
   - Create `jd_[company]_[YYYY-MM-DD].md` inside the role folder
   - Paste the **full original JD text** as-is (no summarizing)
   - Include: company, source, date, full JD text

7a. **Generate role_profile.md**:
   - **Template source:**
     - If user has skills enabled → use template from `references/role_profile_template.md`
     - If user doesn't have skills → use `target_roles/template_role/role_profile.md`
   - Fill all sections
   - **Domain Context section:** Include the domain analysis from step 3c
   - JD History table: first entry with this JD
   - Frequency: all skills start at `1/1 JDs`
   - JD History table: link to JD file

8a. **Create empty skills_mapping.md** and **cv.md** from templates

9a. **Update user** and suggest `/map-skills`

---

### PATH B: Merge into Existing Role

5b. **Save full JD as separate file**:
   - Create `jd_[company]_[YYYY-MM-DD].md` inside the existing role folder
   - Paste the **full original JD text** as-is

6b. **Update role_profile.md**:
   - Add new JD to JD History table (increment N)
   - **Domain Context:** If new JD introduces a new domain → add new domain sub-section. If same domain → refine existing context.
   - Merge requirements:
     - New skills → add with `frequency: 1/N JDs`
     - Existing skills confirmed → increment to `2/N JDs`, `3/N JDs`...
     - Skills in 3+ JDs → upgrade priority (strong market signal)
   - Update keyword analysis: recalculate frequencies across all JDs
   - Add market insights from patterns
   - JD History table: add link to new JD file

7b. **Suggest re-running `/map-skills`**:
   - Explain what changed: "New JD added X new skills, Y skills got priority boost"
   - Offer to re-run skills mapping and regenerate CV

8b. **Update user**:
   - Show what changed in the merged requirements
   - Highlight new market insights
   - Suggest next steps

---

## Quiz Questions to Start

1. **Job title?** (free text)
2. **Company name?** (free text)
3. **Where did you find this role?** (select: LinkedIn, Referral, Company Website, Recruiter, Other)
4. **Paste the full job description** (free text — paste entire JD)

---

## Example Conversation Flow

### Flow A: New Role

**User:** /analyze-role

**Claude:**
Let's analyze a job description. First, some quick info:

**[Quiz questions for basic info + JD paste]**

**Claude:**
I checked your existing target roles and didn't find a match for this type of role. I'll create a new one.

Analyzing the JD for **[Role] at [Company]**...

**[Processes JD, creates role folder]**

**Claude:**
Here's what I extracted:

## Key Responsibilities (5)
1. [Responsibility 1 from JD]
...

## Critical Skills (Must-Have)
1. **Skill 1** — [Why it's critical based on JD]
...

I've created the target role at `target_roles/my_data/role_[slug]/role_profile.md`.

Ready to run `/map-skills` to see how your stories match these requirements?

### Flow B: Merge into Existing

**User:** /analyze-role

**Claude:**
**[Quiz questions]**

**Claude:**
I found an existing role that matches: **role_product_manager** (currently has 2 JDs analyzed).

This new JD for [Role] at [Company] looks similar. Should I:
1. **Merge** into existing `role_product_manager` (recommended — refines requirements)
2. **Create new** separate role

**[User selects Merge]**

**Claude:**
Merging this JD into `role_product_manager`...

**Changes:**
- ✅ 2 new skills added (Skill X, Skill Y)
- ⬆️ 3 skills got priority boost (now in 3/3 JDs: Skill A, Skill B, Skill C)
- 📊 New keywords: keyword_X, keyword_Y
- 💡 Market insight: [pattern noticed]

I've updated the role profile. Want to re-run `/map-skills` to refine your CV?

---

## Tips for Me

- **Check for existing roles FIRST** — before any analysis
- **Role matching is by TYPE, not title** — "Senior PM" and "Lead PM" might be the same role type
- **Copy JD text verbatim** — don't paraphrase requirements
- **Look for emphasis patterns** — bullets at the top, repeated words, "must-have" labels
- **Frequency matters** — skills in multiple JDs are stronger signals than any single JD's priority
- **After merge, always suggest `/map-skills`** — the requirements changed, so mapping should be updated
- **Template sync** — When updating templates, also update files in `target_roles/template_role/`

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

**New role:** `target_roles/my_data/role_[slug]/` (role_profile.md + skills_mapping.md + cv.md)
**Merged role:** Updated `target_roles/my_data/role_[slug]/role_profile.md`

Next step: Use `/map-skills` to match stories to this role (or re-run after merge)
