# Add a New STARR Achievement

**Goal:** Interactively create a new STARR achievement with metrics and skills

---

## Instructions for Me (Claude)

1. **Check for existing data:**
   - Ask which company this achievement is from
   - Search for company profile in `companies_i_worked/`
   - Search for other achievements from this company

   **If company profile exists:**
   - Load context (industry, size, business model, typical stakeholders, tools)
   - Check for web research findings (company events, product launches during user's tenure)
   - Show user: "I have context: [summary]"
   - If web research exists: "I also found info about [company events during your dates]"
   - Proceed with context-aware questions using both general context AND specific web research

   **If no company profile but other achievements exist:**
   - Say: "I found [X] other achievements from this company. Let me extract what I can..."
   - Extract basic info (industry, tools from actions, stakeholders)
   - Show: "Based on your achievements, this appears to be [industry] company"
   - Ask: "Want to quickly fill in the gaps? (industry, size, business model - 1-2 minutes)"
     - If yes: Quick questions → create/update company profile
     - If no: Continue but note limited context

   **If no data exists at all:**
   - Ask: "This is a new company. Want to quickly collect context? (2-3 minutes)"
     - If yes: Collect basic info → create draft company profile
     - If no: Continue without context (but note it's not ideal)

2. **Gather basic achievement info:**
   - Get brief 1-sentence summary
   - Ask which role/title at this company
   - Dates/period

3. **Guide through STARR structure with CONTEXT-AWARE questions:**
   - For each section (S-T-A-R-R), ask specific questions
   - **Use company context to be specific:**
     - Instead of "Who did you work with?" → "Who from [specific departments based on company] did you work with?"
     - Instead of "What tools did you use?" → "Did you use [typical tools for this industry/company]?"
   - **Use web research findings when available:**
     - "I see that [Company] launched [Product X] in [Year]. Did you work on this?"
     - "During [Year], the company [grew from X to Y employees / raised funding]. How did this affect your work?"
     - "Given that [market condition] during your tenure, what challenges did you face?"
   - Probe for numbers and metrics continuously
   - Don't move to next section until current is complete

3. **Number Mining** — ask follow-up questions for metrics:
   - "What was the before/after?"
   - "How many people were affected?"
   - "What was the time/impact/money saved?"
   - "What percentage improved?"
   - "Can you quantify that?"

4. **Extract skills** after achievement is complete:
   - Identify hard skills (tools, methods)
   - Identify soft skills (leadership, communication)
   - Ask user to confirm/add more

5. **Create the file**:
   - Use template: `achievements/achievement_[slug].md`
    with `achievements/template_achievement.md` structure
   - Generate appropriate slug from title
   - Fill in all YAML front-matter
   - Write complete STAR narrative

6. **Update index**:
   - Add entry to `achievements/achievements_index.md`
   - Update summary table
   - Add to skill tag sections

7. **Preview and confirm**:
   - Show the user the created file
   - Ask if they want to edit anything
   - Get final confirmation

---

## Quiz Questions to Start

Use the `askUserQuestions` tool with:

1. **Which company is this achievement from?**
   - Type: free text
   - After answer: Check if company profile exists

2. **What's the brief summary of what you achieved?**
   - Type: free text
   - One sentence overview

**IF company profile exists:**
- Show context: "I see this is [SaaS/B2B/50-200 people company]. I'll use this to ask better questions."

**IF no company profile:**
- Ask: "I don't have context for this company yet. Want to collect it now? (2-3 minutes)"
  - If yes: Quick quiz (industry, size, business model, main stakeholders, typical tools)
  - Create draft company profile
  - Then continue with achievement

---

## Example Conversation Flow

**User:** /add-achievement

**Claude:**
Let's create a new STARR achievement! I'll guide you through the process.

**[Quiz: company and summary]**

**Claude checks for company profile...**

**[IF company profile exists:]**
**Claude:**
Great! I have context for [Company Name]:
- [Industry] company, [size], [business model]
- Typical teams: [stakeholders from profile]
- Standard tools: [tools from profile]

**[IF web research exists:]**
I also found some information from your time there [YYYY-YYYY]:
- [Major product launch or company event]
- [Another relevant finding]

This will help me ask specific questions! For example, "Did you work on the [Product X] launch in [Year]?"

I'll use all this context to ask better questions!

**[IF no company profile:]**
**Claude:**
I don't have context for this company yet. Want to quickly collect it? (2-3 minutes)
This will help me ask better questions about your achievement.

**[If user says yes - Quick context collection]**

**Claude:**
Now let's start with the Situation.

**[CONTEXT-AWARE questions:]**
**What was the context at [Company Name]?**
- What team were you on? [use knowledge: product/engineering/sales/etc]
- Who were the main stakeholders? [suggest: [specific departments for this company type]]
- What were the stakes or constraints?

**[User provides situation]**

**Claude:**
Got it. Now, what was the **Task**?
- What needed to be done?
- What was the goal?
- What problem were you solving?

**[User provides task]**

**Claude:**
Perfect. Now for the **Actions** — what specifically did YOU do?
- Step 1: What action did you take first?
- Step 2: What did you do next?
- Step 3: Any other key actions?

**[CONTEXT-AWARE follow-up:]**
- "Did you use [tool from company profile] for this?"
- "How did you work with [stakeholder type]?"

**[User provides actions]**

**Claude:**
Excellent. Now the most important part — **Results with metrics**:
- What was the measurable outcome? (numbers, percentages, time saved, etc.)
- Before: What was the situation before?
- After: What changed?

**[User provides results]**

**Claude:**
[If metrics are weak, probe more]
- Can you quantify that X?
- How many people were impacted?
- What was the dollar value or time saved?

**[Continue until metrics are strong]**

**Claude:**
Excellent results! Now let's add the **Reflection** — this is where you show what you learned.

**What did you learn from this experience?**
- About yourself?
- About the work/skills?
- About working with others?

**[User provides learning]**

**Claude:**
Great. What would you do **differently** if you faced this situation again?

**[User provides what they'd change]**

**Claude:**
How did this experience **shape you** professionally? What skills or perspective did you develop?

**[User provides growth]**

**Claude:**
Perfect! Now, for organization purposes, what basic tags should I add for navigation?
These are NOT skills — just basic categories like "data", "product", "team", "process"

**[User provides tags or I suggest based on achievement]**

**Claude:**
Perfect! I'm creating the achievement file now...

**[Creates file, updates index, shows preview]**

**Claude:**
Here's your achievement. Any edits needed, or shall I save it?

---

## Tips for Me

- **Be persistent about metrics** — don't accept "it improved" without a number
- **Keep user focused on THEIR actions** — not what "we" did
- **Probe deeply in Reflection** — this is where growth mindset shows
  - "What did you learn about yourself?"
  - "What surprised you?"
  - "What would you change?"
  - "How did this prepare you for future roles?"
- **DO NOT extract skills into the achievement** — skills analysis happens per-role in skills_mapping.md
- **Tags are for navigation only** — basic categories like "data", "product", "launch"
- **Generate a clear slug** — use lowercase with underscores, e.g., `achievement_data_framework.md`
- **Always update the index** — don't forget this step
- **Leverage web research findings** — Use specific company events/milestones to trigger memories
  - "In [Year], [Company] [launched X / raised funding / grew to Y people]. Did your achievement relate to this?"
  - This helps users connect their work to company context they may have forgotten

---

## Output

New file created: `achievements/achievement_[slug].md`
Updated: `achievements/achievements_index.md`
