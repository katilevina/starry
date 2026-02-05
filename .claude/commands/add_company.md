# Add Company Profile

**Goal:** Document a company where you worked there — BUILT FROM EXISTING STORIES

***

## Instructions for Me (Claude)

1. **Gather basic company info** using quiz:
   * Company name
   * Industry
   * Company size/stage
   * Your role title
   * Duration (dates)
2. **CRITICAL: Check for existing achievements FIRST:**
   * Search all story files in `achievements/my_data/` for this company name
   * Count how many achievements exist
   * If NO achievements:
     * Ask user: "I don't see any achievements from this company yet. Do you have experiences you'd like to document as STARR achievements first?"
     * If YES: Encourage `/add-achievement` first, then return here
     * If NO: Collect info manually BUT add prominent warning: "⚠️ This profile was created without achievements. Once you add achievements, this profile will be auto-updated to align with them."
   * If achievements exist: Proceed to extract from them
3. **Extract FROM achievements automatically:**
   * Read ALL achievements in `achievements/my_data/` with `company: "X"` in YAML
   * **Responsibilities:** Extract from Action sections
     * What actions did you take repeatedly?
     * What themes appear across achievements?
   * **Tools/Stack:** Extract from Action sections
     * Tools mentioned in your actions
     * Methodologies/frameworks used
   * **Team & Stakeholders:** Extract from Action sections
     * Who did you work with?
     * Team sizes mentioned
   * **Achievements:** Extract from Result sections
     * Compile metrics from multiple achievements
     * Identify themes in your impact
4. **Present extracted info to user:**
   * Show: "Based on your \[X] achievements from \[Company], I found:"
   * List responsibilities (with source story references)
   * List tools (with source story references)
   * List key achievements
   * Ask: "Is this accurate? Anything to add or correct?"
5. **Fill ONLY the gaps:**
   * Ask for high-level company context NOT in achievements:
     * What does the company do? (product/service)
     * Business model (how they make money)
     * Market position
   * DO NOT ask for job details — those should be in achievements
6. **Link achievements automatically:**
   * Find all achievements with matching company in YAML
   * Create `[[story_X]]` references
   * Add `achievements_based_on: X` to YAML frontmatter
7. **Create the file:**
   * Use template: `companies_i_worked/my_data/company_[slug].md`
   * **Template source:**
     * If user has skills enabled → use template from this skill file (see "Company Template" section below)
     * If user doesn't have skills → use `companies_i_worked/template_company.md`
   * Fill with extracted info + user's additional context
   * Mark which sections came from achievements
8. **Update both indexes:**
   * `companies_i_worked/my_data/companies_index.md` — add employer entry
   * `achievements/my_data/stories_index.md` — link achievements back to this employer
9. **Preview and confirm:**
   * Show the user the created file
   * Highlight what was extracted from achievements vs what they provided
   * Ask if edits needed
   * Get final confirmation

***

## Quiz Questions to Start

1. **Company name?** (free text)
2. **Industry?** (free text or select: SaaS, E-commerce, Finance, Healthcare, Consulting, Other)
3. **Company size/stage?** (select: Startup \<50, Small 50-200, Mid 200-1000, Large 1000+, Enterprise)
4. **Your role title?** (free text)
5. **Duration?** (free text: YYYY-MM to YYYY-MM or "Present")

***

## Example Conversation Flow

**User:** /add-employer

**Claude:**
Let's document an employer and your role there.

**\[Quiz questions for basic info]**

**Claude:**
Let me check if you have any achievements from this company already...

**\[Searches story files]**

**Claude:**
Great! I found \[X] achievements from \[Company Name]:

* story\_1: \[Title]
* story\_2: \[Title]
* story\_3: \[Title]

Let me extract information from these achievements...

**\[Reads all achievements, extracts responsibilities, tools, achievements]**

**Claude:**
Based on your achievements, here's what I found about your role at \[Company]:

**Responsibilities** (from your achievements):

* Owned product roadmap for X product line (story\_1, story\_2)
* Led cross-functional team of 5 (story\_3)
* Built data analytics framework (story\_1)

**Tools & Stack** (mentioned in your actions):

* Jira, Figma — product design
* Tableau, SQL — analytics
* Amplitude — product analytics

**Key Achievements** (from your achievements):

* Decision speed improved by 40% (story\_1)
* 3 teams adopted framework within 2 months (story\_1)
* \[Other metrics from achievements]

Is this accurate? Anything to add or correct?

**\[User confirms or corrects]**

**Claude:**
Great! Now, for high-level company context:

* What does \[Company] do? What product/service do they provide?
* Who are their customers?
* What's the business model? (how they make money)

**\[User provides company context]**

**Claude:**
Perfect! Creating your company profile now, built from \[X] achievements...

**\[Creates file with extracted info + company context]**

**\[Updates indexes]**

**Claude:**
Here's your company profile. Sections marked with "*Extracted from achievements:*" came from your STARR achievements. Any edits needed?

***

## Alternative: No Stories Exist

**User:** /add-employer (for company with no achievements)

**Claude:**
Let me check for achievements from this company...

**Claude:**
I don't see any achievements from \[Company] yet.

**Recommendation:** I strongly encourage you to add STARR achievements first, then I'll build this company profile from them. This ensures:

* No manual duplication of work
* Company profile always matches your achievements
* Stories remain the source of truth

**Options:**

1. **Add achievements first** — Use `/add-story` to document your experiences, then return here
2. **Create basic profile now** — I'll create a minimal profile, but it will need updating once you add achievements

What would you prefer?

**\[If user chooses option 2]**

**Claude:**
Understood. I'll create a basic profile now.

**\[Collects info manually]**

**Claude:**
⚠️ **IMPORTANT:** This profile was created without STARR achievements. Once you add achievements for this company, I'll need to update this profile to align with them. Your achievements will always be the source of truth.

**\[Creates profile with warning]**

***

## Tips for Me

* **ALWAYS check for achievements FIRST** — never skip this step
* **Extract from achievements, don't ask** — responsibilities, tools, teams should come from Actions
* **Only ask for company context** — industry, model, size, product
* **Show your work** — tell user what you extracted and from which achievements
* **Mark sources** — use "*from story\_X*" labels so user knows what came from where
* **Link bidirectionally** — employer ↔ achievements
* **Warn if no achievements** — be clear about limitations
* **Template sync** — When updating the company template below, also update `companies_i_worked/template_company.md` to keep them in sync

***

## Extraction Algorithm

For responsibilities:

1. Read Action sections of all achievements
2. Identify repeated themes (what did you do in multiple achievements?)
3. Extract unique responsibilities
4. Group by category (leadership, technical, process, etc.)
5. Cite source achievements: "(from story\_1, story\_3)"

For tools:

1. Search Action sections for tool names
2. Note context of usage (what was the tool used for?)
3. Group by category (analytics, design, communication, etc.)
4. Cite source achievements

For team/stakeholders:

1. Search for mentions of "team", "stakeholder", "managed", "led"
2. Extract team sizes and roles
3. Note collaboration patterns
4. Cite source achievements

***

## Output

New file created: `companies_i_worked/my_data/company_[slug].md`
Updated: `companies_i_worked/my_data/companies_index.md`
Updated: `achievements/my_data/stories_index.md` (back-links)

YAML includes: `achievements_based_on: X` (number of achievements used)

***

## Company Template

**⚠️ IMPORTANT:** This template must be kept in sync with `companies_i_worked/template_company.md`
When updating this template, also update the file in the companies\_i\_worked folder.

```markdown
---
company: "Company Name"
industry: "Industry (e.g., SaaS, E-commerce, Healthcare)"
size: "Company size (e.g., 50-200 employees, Series B)"
business_model: "How they make money (e.g., B2B subscription, marketplace)"
your_role: "Your Job Title"
duration: "YYYY-YYYY"
dates: "YYYY-YYYY"  # Your employment dates
achievements_based_on: 0  # Will be updated when stories are added
---

## Company Overview

**What they do:**
[Brief description of company's product/service and who they serve]

**Market position:**
[Where they fit in their industry — startup, incumbent, niche player]

***

## Web Research Findings (Optional)

*Information gathered from online sources during your employment period*

**Key events during your tenure [YYYY-YYYY]:**

* [Major product launch, funding round, company milestone] *(source: web_research, date: YYYY)*
* [Another relevant event] *(source: web_research, date: YYYY)*

**Products/features you might have worked on:**

* [Product name] — [Launched YYYY, what it does] *(source: web_research)*
* [Feature name] — [Launched YYYY, target audience] *(source: web_research)*

**Company context during your tenure:**

* [Size, growth phase, major changes] *(source: web_research)*

***

## Your Role Context

**Why you were hired:**
[What problem they needed you to solve]
*Note: This should align with stories you add for this company*

***

## Key Responsibilities

*This section is auto-generated from your STARR stories*

**Core duties:**

* [Primary responsibility 1] *(from story_X, story_Y)*
* [Primary responsibility 2] *(from story_Z)*
* [Primary responsibility 3] *(from story_X)*

**Projects owned:**

* [Major project 1] *(from story_X)*
* [Major project 2] *(from story_Y)*

***

## Tools & Stack

*Extracted from your stories' Action sections*

**Tools you used:**

* [Tool 1] — [What you used it for] *(from story_X)*
* [Tool 2] — [What you used it for] *(from story_Y)*
* [Tool 3] — [What you used it for] *(from story_Z)*

**Methodologies:**

* [Framework or process 1] *(from story_X)*
* [Framework or process 2] *(from story_Y)*

***

## Key Achievements

*Compiled from Result sections of your stories*

**Quantified impact:**

* [Achievement 1 with metric] *(from story_X)*
* [Achievement 2 with metric] *(from story_Y)*
* [Achievement 3 with metric] *(from story_Z)*

**Related STAR stories:**

* [[story_X]] — [Brief description]
* [[story_Y]] — [Brief description]
* [[story_Z]] — [Brief description]

***

## Company Culture & Context

**Work environment:**
[Remote/hybrid, pace, decision-making style]

**Challenges specific to this company:**
[Any unique constraints or opportunities]

***

## Lessons Learned

**What this job taught you:**
[Key takeaways from Reflection sections of your stories]

**Skills developed here:**
[Skills you grew in this role — should match evidence in stories]
```