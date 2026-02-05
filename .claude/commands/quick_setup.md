# Quick Setup

**Goal:** Collect basic company context upfront to enable better achievement gathering

---

## Instructions for Me (Claude)

1. **Check for existing data:**
   - Search for existing company profiles in `companies_i_worked/my_data/`
   - Search for existing achievements in `achievements/my_data/`
   - If found → show user what exists

2. **If data already exists:**

   **Scenario A: Company profiles exist**
   - Show list: "I found [X] company profiles already:"
   - Ask: "Do you want to:"
     - Skip existing companies and add new ones?
     - Update existing profiles with new info?
     - Start fresh (overwrite all)?"

   **Scenario B: Only achievements exist (no company profiles)**
   - Say: "I found [X] achievements but no company profiles yet."
   - Ask: "Should I extract company context from your achievements automatically?"
     - If yes: Extract from achievements → show → confirm
     - Then fill gaps with targeted questions
     - If no: Proceed to manual collection

   **Scenario C: Both exist**
   - Say: "I found [X] company profiles and [Y] achievements."
   - Ask: "Quick setup will:"
     - Update company profiles with new info
     - Extract from achievements if gaps exist
     - Add any new companies you mention
   - Confirm: "Proceed?"

3. **If no data exists (fresh start):**
   - Explain value: "This will help me ask better questions"
   - Takes 3-5 minutes for all companies
   - Proceed to collection

4. **Collect company list:**
   - Ask: "How many companies have you worked for?"
   - Ask: "List them briefly (most recent first)"
   - If updating existing: focus on NEW companies or CHANGES

5. **For each company, ask:**
   - Company name (for folder naming)
   - **Employment dates** (YYYY-YYYY format) — REQUIRED for web research
   - What do they do? (product/service, 1 sentence)
   - Industry? (SaaS, E-commerce, Fintech, Healthcare, Consulting, Other)
   - Company size? (Startup <50, Small 50-200, Mid 200-1000, Large 1000+)
   - Business model? (B2B/B2C, subscription, marketplace, ads, etc)
   - **If profile exists:** Show current info → ask what to update
   - **If profile exists & achievements exist:** Show what I extracted from achievements → ask to confirm/add

6. **Offer web research for each company:**
   - Ask: "Want me to search online for information about [Company Name] during [YYYY-YYYY]?"
   - If yes:
     - Use web search (Perplexity or standard search) with query: "[Company Name] [YYYY-YYYY]"
     - Look for: company size during that period, major products/features launched, news, funding rounds, market position
     - Extract relevant information that would help user remember achievements
     - Store findings with `source: web_research` tag in company profile
     - Example: "In 2020, Google launched Google Workspace — did you work on this?"
   - If no: Proceed to next company or create profile with basic info

7. **Create or update company profiles:**
   - **Template source:**
     - If user has skills enabled → use template from `/add-company` skill
     - If user doesn't have skills → use `companies_i_worked/template_company.md`
   - If new: Set `status: draft` and `achievements_based_on: 0`
   - If updating: Keep `achievements_based_on` count, update status
   - Merge info: existing + achievements + new input + web research
   - Create or update file: `companies_i_worked/my_data/company_[slug].md`

8. **Update index:**
   - Add to or update `companies_i_worked/my_data/companies_index.md`
   - Mark status appropriately (draft or complete)

9. **Confirm next steps:**
   - Show summary of what was created/updated
   - If web research was done, highlight key findings
   - If achievements exist: Suggest "/add-company" to refine profiles
   - If no achievements: Suggest "Ready to add your first achievement? Use `/add-achievement`"

---

## Quiz Questions

Use `askUserQuestions`:

1. **How many companies have you worked for?** (number)
2. **List them briefly** (most recent first) — free text

Then for each company, ask using quiz:
- Company name
- **Employment dates** (format: YYYY-YYYY, e.g., 2020-2023)
- What they do (1 sentence)
- Industry (select: SaaS, E-commerce, Fintech, Healthcare, Consulting, Other)
- Size (select: Startup <50, Small 50-200, Mid 200-1000, Large 1000+)
- Business model (select: B2B subscription, B2C subscription, Marketplace, Ads, Enterprise sales, Other)

After quiz, ask: "Want me to search online for information about [Company] during [dates]?"

---

## Example Flow

**User:** `/quick-setup`

**Claude checks for existing data...**

**Scenario A: Fresh start (no data)**
**Claude:**
Great! Let's quickly set up context for your work history. This will help me ask better questions when you add achievements.

**[Quiz: number of companies]**

**Claude:**
**[Quiz: list companies]**

**Claude:**
Got it! Let me gather a few details about each company.

**[For Company 1 - Quiz with 6 questions including employment dates]**

**Claude:**
I found some interesting information about Acme Corp online during your employment (2020-2023):
- In 2021, they raised Series B funding and grew from 50 to 150 employees
- Launched their flagship product "AcmePro" in 2022
- Expanded to European market in early 2023

This will help me ask better questions! For example: "Did you work on the AcmePro launch in 2022?"

**User confirms or adjusts info**

**[For Company 2 - Quiz with 6 questions including employment dates]**

**Claude:**
Want me to search online for TechCorp during 2018-2020?

**User: No**

**[Repeat for all companies]**

**Claude:**
✅ Setup complete! I've created draft company profiles for:
- company_acme_corp.md (SaaS, B2B, 50-200 people, with web research)
- company_techcorp.md (E-commerce, B2C, 1000+ people, basic info only)

Ready to add your first achievement? Use `/add-achievement`

---

**Scenario B: Achievements exist, no company profiles**
**Claude:**
I found [X] achievements but no company profiles yet. Let me extract company context from your achievements...

**[Analyzes achievements, extracts: companies, roles, dates]**

**Claude:**
Based on your achievements, I found:
- Company 1: [Industry from achievements], [Role], [Dates]
- Company 2: [Industry from achievements], [Role], [Dates]

I've created draft company profiles from your achievements. Now let me fill in the gaps:

**[For each company, ask missing info]**
- Industry? (if not clear from achievements)
- Size?
- Business model?

**[Create company profiles with extracted info]**

**Claude:**
✅ Setup complete! I've created company profiles from your achievements:
- company_acme_corp.md (built from 3 achievements)
- company_techcorp.md (built from 2 achievements)

Want to add more details? Use `/add-company` to refine them.

---

**Scenario C: Both exist**
**Claude:**
I found [X] company profiles and [Y] achievements already!

**[Shows list of what exists]**

**Claude:**
Quick setup will:
- Update company profiles with any new info you provide
- Extract additional context from achievements
- Add any NEW companies you mention

Want to proceed?

**[If yes]**

**[For each existing company:]**
**Claude:**
Current info for [Company]:
- Industry: [SaaS]
- Size: [50-200 people]
- Business model: [B2B subscription]

What to update? (or say "skip" if no changes)

**[For any NEW companies]**
**Claude:**
New company detected! Let me gather details...

**[Standard questions for new company]**

**Claude:**
✅ Setup complete! Updated [X] company profiles, added [Y] new ones.

---

## Tips

- **ALWAYS check for existing data first** — Don't assume fresh start
- **If achievements exist:** Extract from them first → then fill gaps
- **If company profiles exist:** Ask what to update, don't overwrite
- **Keep it brief** — This is just context, not full company profiles
- **Show before creating** — Always show what I found/extracted before creating
- **Merge smartly:** Combine existing info + achievements + new input + web research
- **Use industry knowledge** — If user says "SaaS", I know typical tools/stakeholders
- **Web research is optional** — Not all companies have online presence, especially smaller ones or older periods
- **Web research dates matter** — Use employment dates to find relevant company info during user's tenure
- **Source everything** — Mark web-researched info with `source: web_research` tag

---

## Output

Created: `companies_i_worked/my_data/company_[slug].md` (draft)
Updated: `companies_i_worked/my_data/companies_index.md`

Files have:
- Basic company info (industry, size, model, dates)
- Optional web research findings (with `source: web_research` tag)
- `status: draft`
- `achievements_based_on: 0`

Next step: `/add-achievement` will use this context (including web research for targeted questions)
