# Quick Setup Reference Guide

Detailed workflow examples for the company context setup process.

***

## Example Conversation Flow

### Scenario A: Fresh Start (No Data)

**User:** /quick-setup

**Claude:**
Great! Let's quickly set up context for your work history. This will help me ask better questions when you add achievements.

**\[Quiz: number of companies, list companies]**

**Claude:**
Got it! Let me gather a few details about each company.

**\[For Company 1 - Quiz with 6 questions including employment dates]**

**Claude:**
I found some interesting information about Acme Corp online during your employment (2020-2023):

* In 2021, they raised Series B funding and grew from 50 to 150 employees
* Launched their flagship product "AcmePro" in 2022
* Expanded to European market in early 2023

This will help me ask better questions! For example: "Did you work on the AcmePro launch in 2022?"

**User confirms or adjusts info**

**\[For Company 2 - Quiz with 6 questions including employment dates]**

**Claude:**
Want me to search online for TechCorp during 2018-2020?

**User:** No

**\[Repeat for all companies]**

**Claude:**
✅ Setup complete! I've created draft company profiles for:

* company\_acme\_corp.md (SaaS, B2B, 50-200 people, with web research)
* company\_techcorp.md (E-commerce, B2C, 1000+ people, basic info only)

Ready to add your first achievement? Use `/add-achievement`

***

### Scenario B: Existing Companies, No Achievements

**User:** /quick-setup

**Claude checks for existing data...**

**Claude:**
I found 2 company profiles already:

1. **company\_acme\_corp.md** — SaaS, B2B, 50-200 people (draft)
2. **company\_techcorp.md** — E-commerce, B2C, 1000+ people (draft)

Do you want to:

* Skip existing companies and add new ones?
* Update existing profiles with new info?
* Start fresh (overwrite all)?

**User:** Update existing profiles

**Claude:**
Got it! Let me update each profile.

**\[For company\_acme\_corp]**

**Claude:**
Current info for Acme Corp:

* Industry: SaaS
* Size: 50-200 people
* Business model: B2B subscription

What would you like to update or add?

**\[User provides updates]**

**Claude:**
Want me to search online for Acme Corp during 2020-2023?

**User:** Yes

**\[Web research performed, findings added]**

**\[Repeat for other companies]**

***

### Scenario C: Achievements Exist, No Company Profiles

**User:** /quick-setup

**Claude checks for existing data...**

**Claude:**
I found 5 achievements but no company profiles yet.

I can extract company context from your achievements automatically:

**From your achievements, I found:**

**For Acme Corp (3 achievements):**

* You worked on product roadmap (story\_1, story\_2)
* Led cross-functional team of 5 (story\_3)
* Built data analytics framework using Tableau and SQL (story\_1)
* Tools used: Jira, Figma, Tableau, SQL, Amplitude

**For TechCorp (2 achievements):**

* Launched new feature (story\_4)
* Managed stakeholder communications (story\_5)

Should I create company profiles from this information?

**User:** Yes

**Claude:**
Great! I'll create draft company profiles from your achievements, then ask a few questions to fill in the gaps.

**\[Creates profiles with extracted info, then asks for high-level context]**

**Claude:**
For **Acme Corp**, I have:

* Responsibilities: product roadmap, team leadership, analytics
* Tools: Jira, Figma, Tableau, SQL, Amplitude

I still need:

* What does Acme Corp do? (product/service)
* Industry?
* Company size during your tenure?
* Business model?

**\[User fills gaps]**

**\[Offers web research for each company]**

***

## Smart Questions Examples

### How Context Transforms Questions

**Without context:**

* "What was the situation?"
* "Who did you work with?"
* "What tools did you use?"

**With industry context (SaaS company):**

* "What was the situation at \[SaaS company]? Were you working on \[product launches, customer retention, feature development, user growth]?"

**With company context (50-200 person B2B SaaS):**

* "Who from \[Product, Engineering, Customer Success, Sales] did you collaborate with?"
* "Did you use \[Jira, Figma, Amplitude, Salesforce] for this?"

**With web research findings (Product X launched in 2022):**

* "In 2022, \[Company] launched \[Product X]. Did your achievement relate to this launch?"
* "During your tenure, the company grew from 50 to 200 employees. How did this growth affect your role and decisions?"

**With tools context:**

* "I see from your profile you used \[Tableau, SQL] for analytics. Did you use similar tools for this achievement?"

***

## Web Research Output Examples

### Example 1: Product Company

```
I found some information about Google during your employment (2019-2022):

**Key events:**
- In 2019, Google launched Google Workspace (formerly G Suite)
- In 2020, they announced $10 billion commitment to cybersecurity over 5 years
- In 2021, Google Cloud reached $19B annual revenue run rate

**This helps me ask:**
- "Did you work on the Google Workspace launch in 2019?"
- "Were you involved in any cybersecurity initiatives during the 2020 commitment?"
- "How did Google Cloud's growth affect your role in 2021?"
```

### Example 2: Startup

```
I found information about Acme Corp during your employment (2020-2023):

**Company milestones:**
- 2020: Founded with $2M seed round
- 2021: Series A funding ($15M), grew from 10 to 50 employees
- 2022: Launched flagship product "AcmePro"
- 2023: Expanded to European market

**This helps me ask:**
- "Were you there from the founding? What was it like joining a 10-person startup?"
- "How did your role change when the company grew from 10 to 50 employees in 2021?"
- "Did you work on the AcmePro launch in 2022?"
```

### Example 3: Large Company

```
I found information about Microsoft during your employment (2018-2021):

**Key events:**
- 2020: GitHub grew to 50M+ developers
- 2020: Teams usage surged to 115M daily active users
- 2021: Microsoft Cloud exceeded $59B in annual revenue

**This helps me ask:**
- "Did you work on Teams during the 2020 surge?"
- "Were you involved in GitHub integration initiatives?"
- "How did Microsoft Cloud growth impact your work?"
```

***

## Data Flow Integration

### With STARR Achievements Skill

When user runs `/add-achievement`:

1. **Load company context:**
   * Industry: SaaS
   * Size: 50-200 people
   * Business model: B2B subscription
   * Typical stakeholders: Product, Engineering, Customer Success
   * Typical tools: Jira, Figma, Amplitude
2. **Load web research:**
   * 2021: Series B funding, grew to 150 employees
   * 2022: Launched AcmePro product
3. **Ask smart questions:**
   * "What was the situation at Acme Corp? Were you working on product launches, customer retention, or feature development?"
   * "Who from Product, Engineering, or Customer Success did you collaborate with?"
   * "Did you work on the AcmePro launch in 2022?"
   * "How did the company growth from 50 to 150 employees in 2021 affect your work?"

### With Company Profiles Skill

When user runs `/add-company`:

1. **Check for achievements:**
   * Found 3 achievements from Acme Corp
2. **Extract from achievements:**
   * Responsibilities from Action sections
   * Tools from Action sections
   * Metrics from Result sections
3. **Merge with context:**
   * Basic info (from quick setup)
   * Extracted details (from achievements)
   * Web research (from quick setup)
4. **Create complete profile:**
   * All sections filled
   * Sources cited
   * No manual entry required