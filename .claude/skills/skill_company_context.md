# Company Context Skill

**Purpose:** Complete guide to gathering company context upfront to enable better achievement gathering, including web research for triggering memories

---

## 🎯 Why Gather Context First?

### Benefits

**Enables smarter questions:**
- Instead of: "Who did you work with?"
- I ask: "Who from [Product, Engineering, Customer Success] did you collaborate with?"

**Faster achievement gathering:**
- Less clarification needed
- Context guides the conversation

**Better quality achievements:**
- Specific details from the start
- More accurate terminology

**Web research triggers memories:**
- "Oh right, I worked on that launch!"
- Helps date achievements more accurately

---

## 📚 Quick Setup Process

### Step 1: Check for Existing Data

**Search for:**
- Company profiles in `companies_i_worked/my_data/`
- Achievements in `achievements/my_data/`

**If data already exists:**

**Scenario A: Company profiles exist**
- Show list: "I found [X] company profiles already:"
- Ask: "Do you want to:"
  - Skip existing companies and add new ones?
  - Update existing profiles with new info?
  - Start fresh (overwrite all)?

**Scenario B: Only achievements exist (no company profiles)**
- Say: "I found [X] achievements but no company profiles yet."
- Ask: "Should I extract company context from your achievements automatically?"
  - If yes: Extract from achievements → show → confirm
  - Then fill gaps with targeted questions
  - If no: Proceed to manual collection

**Scenario C: Both exist**
- Say: "I found [X] company profiles and [Y] achievements."
- Explain: "Quick setup will update company profiles with new info, extract from achievements if gaps exist, add any new companies you mention"
- Confirm: "Proceed?"

### Step 2: Collect Company List

Ask:
- "How many companies have you worked for?"
- "List them briefly (most recent first)"
- If updating existing: focus on NEW companies or CHANGES

### Step 3: For Each Company, Ask

**Basic info:**
- Company name (for folder naming)
- **Employment dates** (YYYY-YYYY format) — REQUIRED for web research
- What do they do? (product/service, 1 sentence)
- Industry? (SaaS, E-commerce, Fintech, Healthcare, Consulting, Other)
- Company size? (Startup <50, Small 50-200, Mid 200-1000, Large 1000+)
- Business model? (B2B/B2C, subscription, marketplace, ads, etc)

**If profile exists:**
- Show current info → ask what to update

**If profile exists & achievements exist:**
- Show what I extracted from achievements → ask to confirm/add

### Step 4: Offer Web Research (PER COMPANY)

Ask: "Want me to search online for information about [Company Name] during [YYYY-YYYY]?"

**If yes:**
- Use web search (Perplexity or standard search)
- Look for company milestones during that period
- Extract relevant information that would help user remember achievements
- Store findings with `source: web_research` tag in company profile

**If no:**
- Proceed to next company or create profile with basic info

### Step 5: Create or Update Company Profiles

**If new:**
- Set `status: draft`
- Set `achievements_based_on: 0`
- Use template from `skill_company_profiles.md`

**If updating:**
- Keep `achievements_based_on` count
- Update status
- Merge: existing + achievements + new input + web research

### Step 6: Update Index

- Add to or update `companies_i_worked/my_data/companies_index.md`
- Mark status appropriately (draft or complete)

---

## 🌐 Web Research Feature

### Why Web Research Helps

**Triggers memories:**
- "Oh right, I worked on that launch!"
- Provides specific company events during user's tenure
- Adds rich context without manual effort

**Helps date achievements:**
- "When did you launch that feature?"
- "In 2020, they launched Product X — did you work on this?"

### What to Search For

When user provides employment dates (e.g., "2020-2023" for "Google"), search for:

**Company milestones:**
- Funding rounds
- Acquisitions
- IPO
- Major leadership changes

**Product launches:**
- New products during that period
- Feature releases
- Product updates

**Company growth:**
- Employee count changes
- Expansion to new markets
- Office openings

**News and events:**
- Awards
- Partnerships
- Major press coverage

**Industry trends:**
- Market shifts during that period
- Competitor moves
- Regulatory changes

### Example Search Queries

```
"[Company Name] [YYYY-YYYY] product launches"
"[Company Name] funding rounds 2020 2021 2022"
"[Company Name] during [year range] news"
"[Company Name] [year] milestones"
"[Company Name] employee growth [years]"
```

### How to Use Findings

After collecting web research:

**1. Store findings:**
- Add to company profile with `source: web_research` tag
- Include date: `*(source: web_research, date: YYYY)*`
- Create section: "Web Research Findings (Optional)"

**2. Present to user:**
```
I found some interesting information about Acme Corp online during your employment (2020-2023):

- In 2021, they raised Series B funding and grew from 50 to 150 employees
- Launched their flagship product "AcmePro" in 2022
- Expanded to European market in early 2023

This will help me ask better questions! For example: "Did you work on the AcmePro launch in 2022?"
```

**3. Use for targeted questions:**
- "In 2020, Google launched Google Workspace — did you work on this?"
- "During your tenure, Acme Corp grew from 50 to 200 employees. How did this affect your role?"
- "I see they launched [Product] in [Year]. Was your achievement related to this?"

### Sourcing: Always Mark Web Research

**DO:**
- Always mark with `*(source: web_research, date: YYYY)*`
- Distinguish between user-provided info and web findings
- Allow user to correct or reject findings

**DON'T:**
- Don't present web research as fact without source tag
- Don't assume user worked on everything mentioned
- Don't overwhelm with too much detail

### When to Skip Web Research

**Skip if:**
- Small companies with no online presence
- Very old employment dates (pre-internet or limited archives)
- User declines the offer
- Company operates in stealth mode
- Employment dates are missing (can't search effectively)

---

## 🎯 How Context Improves Achievement Gathering

### Before Context (Generic Questions)

- "What was the situation?"
- "Who did you work with?"
- "What tools did you use?"
- "What were the constraints?"

### After Context (Smart Questions)

**Using industry knowledge:**
- "What was the situation at [SaaS company]? Were you working on [product launches, customer retention, feature development]?"

**Using company info:**
- "Who from [Product, Engineering, Customer Success] did you collaborate with?"

**Using typical tools:**
- "Did you use [Jira, Figma, Amplitude] for this?"

**Using web research:**
- "In 2020, [Company] launched [Product X]. Did your achievement relate to this?"
- "During [Year], the company grew from X to Y employees. How did this affect your work?"
- "Given that [market condition] during your tenure, what challenges did you face?"

---

## 📋 Data Structure

### What Gets Collected

**For each company:**

**Basic info (always):**
- Company name
- Employment dates (YYYY-YYYY)
- Industry
- Size
- Business model

**Optional (web research):**
- Company milestones during tenure
- Product launches
- Growth metrics
- Major events

### Profile Status

**Draft:**
- `status: draft`
- `achievements_based_on: 0`
- Basic info only
- May have web research findings

**Complete:**
- `status: complete`
- `achievements_based_on: 3+` (or however many)
- Built from achievements
- Has web research (optional)
- Culture/context sections filled

---

## ✅ Quality Checklist

Before finishing quick setup:

- [ ] Checked for existing data first (companies + achievements)
- [ ] If achievements exist, showed what I extracted before asking questions
- [ ] Collected employment dates (REQUIRED for web research)
- [ ] Offered web research for each company
- [ ] Marked web-researched info with `source: web_research` tag
- [ ] Created or updated company profiles
- [ ] Updated companies_index.md
- [ ] Confirmed next steps with user

---

## 🔗 Integration with Other Skills

### With STARR Achievements

**When user runs `/add-achievement`:**
- Check if company profile exists
- If yes: Load context (industry, size, business model, typical stakeholders, tools)
- Check for web research findings
- Use context + web research to ask smart questions

**Example:**
```
I have context for [Company]:
- SaaS company, 50-200 people, B2B subscription
- Typical teams: Product, Engineering, Customer Success
- Standard tools: Jira, Figma, Amplitude

I also found info from your time there [YYYY-YYYY]:
- Launched [Product X] in [Year]
- Grew from [X] to [Y] employees

This helps me ask specific questions!
```

### With Company Profiles

**When user runs `/add-company`:**
- Check for achievements first
- If achievements exist, extract from them
- Fill gaps with targeted questions
- Web research findings already in profile from quick setup

---

## 📝 Example Conversation Flow

**User:** /quick-setup

**Claude checks for existing data...**

**Scenario A: Fresh start (no data)**

**Claude:**
Great! Let's quickly set up context for your work history. This will help me ask better questions when you add achievements.

**[Quiz: number of companies, list companies]**

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

**Last Updated:** 2026-01
