---
name: job-analysis
description: Complete workflow for analyzing job descriptions, mapping achievements to roles, and generating tailored CVs. Use when applying for jobs, preparing for interviews, or creating targeted resumes. Covers JD analysis, skills mapping with evidence-based matching, and CV generation.
---

# Job Analysis & Skills Mapping

This skill combines three related workflows:

1. **Job Description Analysis** — Extract and categorize requirements from JDs
2. **Skills Mapping** — Match achievements to role requirements with evidence
3. **CV Generation** — Create tailored resumes from skills mapping

---

## Part 1: Job Description Analysis

### Analysis Process

When analyzing a JD, extract systematically:

#### 1. Extract Responsibilities

- Copy the "what you'll do" section verbatim
- Identify 5-7 key responsibilities
- Look for emphasis patterns (bullets at top = more important)

#### 2. Extract Requirements

- Copy the "requirements" or "qualifications" section
- Separate into:
  - **Must-have** → "Must have", "Required", "X years experience"
  - **Nice-to-have** → "Preferred", "Strong plus", "Ideally"
  - **Bonus** → "Bonus", "Nice to have", "Plus"

#### 3. Extract Domain Context (CRITICAL — do this BEFORE keyword extraction)

**Principle:** Every JD exists within a specific industry/domain. The same role (e.g., Engagement Manager) means different things in EdTech vs. FinTech. Domain context must be extracted to correctly frame stories and select achievements.

**How to extract domain context:**

1. **Identify the domain** from the company description and JD language:
   - What industry is the company in? (EdTech, FinTech, HealthTech, Enterprise SaaS, etc.)
   - What domain-specific concepts appear repeatedly? (e.g., "learning", "knowledge", "education" → EdTech)
   - What is the product? (learning platform, financial product, health app, etc.)

2. **Extract domain-specific expectations:**
   - What does "success" mean in this domain? (e.g., EdTech → learning outcomes, engagement metrics; FinTech → compliance, transaction volume)
   - What domain-specific vocabulary is used? (e.g., "knowledge maps", "reinforcement loops" in EdTech; "risk assessment", "compliance" in FinTech)
   - What aspects of the role are emphasized differently? (e.g., "adoption" in SaaS = user onboarding; "adoption" in EdTech = learning engagement)

3. **Generate story framing guidance:**
   - How should existing stories be framed for this domain? (e.g., "learning platform redesign" vs. "scaled capacity")
   - What aspects to emphasize vs. de-emphasize?
   - What domain vocabulary should appear in CV bullets?

4. **Store in role_profile.md** under "Domain Context" section:
   - Each domain gets its own sub-section
   - Domain context accumulates as new JDs from new domains are analyzed
   - When a JD matches an existing domain → refine that domain's context
   - When a JD introduces a new domain → add new sub-section

**Why this matters:**
- Skills-first analysis can miss the narrative layer that makes CVs resonate
- The same story framed for EdTech highlights different aspects than for FinTech
- Domain context ensures the CV speaks the language of the target industry
- Without domain context, you might frame a learning platform redesign as "scaled capacity" instead of "redesigned learning experience" — missing the strongest angle

#### 4. Keyword Extraction

**Technical terms:**
- Tools (Salesforce, Tableau, Jira)
- Methodologies (Agile, Scrum, Lean)

**Action verbs:**
- led, launched, managed, optimized, drove, built

**Industry buzzwords:**
- Words that appear multiple times
- Terms specific to this industry/role

**Domain-specific keywords:**
- Words that carry special meaning in this domain (cross-reference with Domain Context)

**Note:** These keywords should appear in your CV bullets

#### 5. Categorize Skills by Priority

For each skill found:

- **Critical:** "Must have", "Required", "X years experience"
- **High:** "Preferred", "Strong plus", "Ideally"
- **Medium:** "Bonus", "Nice to have", "Plus"

See [Role Profile Template](references/role_profile_template.md) for the complete JD analysis template.

---

## Part 1.5: JD Merging & Role Refinement

### Role-Based Approach (NOT Company-Based)

**Principle: Target roles are organized by ROLE TYPE, not by company.**

- `role_product_manager/` NOT `role_google_pmm/`
- Each role folder accumulates JDs from multiple companies for the same role type
- Every new JD **refines** the requirements and **improves** the CV

### When a New JD Comes In

**Step 1: Check for existing role match**
- List all folders in `target_roles/my_data/`
- Compare new JD's role title and responsibilities with existing role profiles
- Ask user: "This looks like it matches your existing `role_X`. Merge into it, or create a new role?"

**Step 2: If merging into existing role**
- Save full JD text as `jd_[company]_[YYYY-MM-DD].md` inside the role folder
- Add new JD to the "JD History" section in role_profile.md (with link to JD file)
- **Read ALL JD files** in the role folder to recalculate merged requirements — never rely on role_profile summaries alone
- Merge requirements: new skills get added, existing skills get their **frequency** updated
- Skills that appear in multiple JDs get **priority boost** (wider market demand = more important)
- Update keyword analysis: add new keywords, recalculate frequency
- Regenerate skills_mapping.md with updated requirements
- Regenerate cv.md with refined keywords and priorities

**Step 3: If new role type**
- Create new folder `role_[role_type_slug]/`
- Save full JD text as `jd_[company]_[YYYY-MM-DD].md` inside the new folder
- Follow standard JD analysis process

### JD Merging Rules

**Requirements merging:**
- New skill from new JD → add with `frequency: 1/N JDs`
- Existing skill confirmed by new JD → increment frequency: `2/N JDs`, `3/N JDs`...
- Skill only in one JD → keep but lower visual priority
- Skill in 3+ JDs → **critical market signal**, treat as Critical even if individual JDs mark it as "preferred"

**Priority recalculation after merge:**
- Frequency-based priority: skills in most JDs → highest priority
- Original JD priority still matters: "must-have in 2/3 JDs" > "preferred in 3/3 JDs"
- Use combined score: `(frequency_weight × JD_count) + (priority_weight × original_level)`

**Keyword recalculation:**
- Union of all keywords from all JDs
- Rank by total frequency across all JDs
- Highlight keywords that appear consistently

### Experience Suggestions (Proactive Gap Filling)

**Principle: When a JD asks for something and you have no story for it, proactively suggest experience the user likely has.**

**When to suggest:**
1. After identifying gaps in skills mapping
2. After merging a new JD that introduces new requirements

**How to generate suggestions:**

1. **Company profile mining:**
   - Look at company profiles for relevant experience not captured in stories
   - Example: "JD asks for NPS experience. Your profile at Company X mentions 'NPS program'. Did you work on this?"
   - Example: "JD asks for vendor management. Your profile at Company Y lists 'procurement' as a responsibility. Do you have a story?"

2. **Role-based inference:**
   - Based on user's job title and level, what would they typically have done?
   - Example: "As a Senior PM, you likely did roadmap prioritization. Do you have a story about prioritizing competing stakeholder requests?"
   - Example: "As a Team Lead, you likely handled performance reviews. Do you have a story about developing team members?"

3. **Industry pattern matching:**
   - Skills common in the user's industry that match JD requirements
   - Example: "You worked in SaaS and the JD asks for churn reduction — this is very common. Did you work on retention?"

**How to present suggestions:**
- Group by likelihood: "High confidence" (company profile evidence) → "Medium confidence" (role-based) → "Worth checking" (industry pattern)
- Always ask: "Did you do something like this?" NOT "Tell me about this"
- If user confirms → suggest creating a new story via `/add-achievement`
- If user says no → note as genuine gap in skills_mapping.md

---

## Part 2: Skills Mapping

### Data Source Hierarchy (CRITICAL)

**Three sources of data, each with different rules:**

1. **Company Profiles** (`companies_i_worked/my_data/`) — READ FIRST
   - Purpose: Understand context, culture, role evolution, stakeholders, tools
   - Use for: Background understanding, framing, identifying skills not in stories
   - ⚠️ **Can NOT be used as CV bullet facts** — only as supporting context

2. **Story Files** (`achievements/my_data/`) — PRIMARY SOURCE OF TRUTH
   - Purpose: Facts, metrics, actions, results for CV bullets
   - ⚠️ **ONLY facts present in the story file can go into CV bullets**
   - If you want to add something from company profile that's NOT in the story → flag it to user first

3. **Stories Index** (`stories_index.md`) — NAVIGATION ONLY
   - Purpose: Quick overview to find relevant stories
   - ⚠️ **NEVER use summaries as source for CV bullet content** — summaries may contain inaccuracies
   - Always read the FULL story file before writing any bullet

### Facts-Only Rule (CRITICAL)

**Principle: Never add information to CV bullets that doesn't come from the story file.**

- If a story says "managed team of 8" → you can write "managed 8-person team"
- If a story says nothing about outsourced designers → you can NOT write "including outsourced designers" even if you know this from the company profile
- If you know something from the company profile that would strengthen a bullet → **ask the user to confirm** before including it
- **No inferences, no assumptions, no mixing of sources** — only verified facts from the story file

**Why this matters:**
- Wrong facts in CV = failed interview when you can't speak to the bullet
- ATS systems don't care about extra keywords if the interview fails
- Company profiles contain aggregated info that may not apply to specific stories

### Waterfall Mapping Strategy (CRITICAL)

**Principle:** Map achievements to JD requirements in a structured cascade — primary company covers as much as possible, then previous companies fill gaps, then all companies strengthen by priority. This ensures the most relevant experience dominates the CV while leveraging all career history.

**Recency is structural, not just preferential:** The primary company (usually most recent) gets the most Tier 1 stories and the most CV bullets. Previous companies provide supporting evidence. This isn't a tiebreaker — it's the organizing principle of the entire mapping.

#### Deep Achievement Analysis (applies to all phases)

When analyzing ANY story against a JD requirement:

1. Read the FULL achievement — Situation, Task, Action, Result, Reflection
2. Understand what YOU actually did
3. Extract how the achievement demonstrates specific skills required by the target role
4. Different skills can be extracted from the SAME achievement for different target roles

**Evidence Quality:**
- Does the achievement have metrics?
- Is the impact clear?
- Is it relevant to the target role?

**Coverage Rating:**
- **✅ Strong:** Story has clear action + metrics directly showing skill
- **⚠️ Moderate:** Story implies skill or has weak metrics
- **❌ Gap:** No story demonstrates this skill

**Example:**
- Same achievement for "Data Analyst" role → demonstrates data analysis skills
- Same achievement for "Team Lead" role → demonstrates stakeholder management skills

#### Phase 1: Identify Primary Company

**Goal:** Determine which company in the user's work history is the best starting point for covering JD requirements.

**How to determine:**
1. **Default:** most recent company (strongest recency signal, easiest to speak about in interviews)
2. **Override:** if a previous company matches the JD's domain/industry/role type significantly better
   - E.g., JD is for EdTech PM and a previous employer was EdTech, while most recent was FinTech
   - E.g., JD is for a specific tool stack that was primary at a previous company
3. **Always confirm with user:** "I think [Company X] is the best primary match for this role because [reason]. Agree?"

**Why this matters:**
- Primary company provides the core CV bullets and dominates the summary
- Starting focused avoids diluting the narrative
- Primary company gets the most Tier 1 stories and the most CV bullet points

#### Phase 2: Primary Company Deep Dive

**Goal:** Cover as many JD requirements as possible from the primary company alone.

**Process:**
1. Read the primary company profile → build context (tools, stakeholders, culture, responsibilities)
2. Read ALL stories from the primary company → full STAR narratives
3. For EACH JD requirement (Critical → High → Medium):
   - Find matching stories from this company
   - Extract quote-based evidence
   - Rate coverage: ✅ Strong / ⚠️ Moderate / ❌ Gap
4. Check company profile for undocumented experience:
   - Profile mentions "NPS program" but no story → note as potential evidence
   - Profile lists tools/methodologies relevant to JD → note as supporting context
5. Result: **Primary Coverage Map** — what's covered, what's missing, what's uncertain

**No user questions in this phase** — complete the full analysis first.

#### Phase 3: Sequential Gap Filling

**Goal:** Fill remaining gaps (❌ and ⚠️) by going through previous companies in reverse chronological order.

**Process:**
1. Take the gap list from Primary Coverage Map
2. Go to the next most recent company:
   - Read company profile → understand context
   - Read ALL stories from this company → full STAR narratives
   - For each gap, check if any story covers it
   - Also check company profile for undocumented experience
3. Update coverage for newly filled gaps
4. Move to the next company → repeat
5. Continue until:
   - All gaps filled, OR
   - All companies checked
6. **If a company is clearly irrelevant** (completely different industry, role type doesn't match) → ask user: "[Company Y] seems quite different from this role. Should I still check it for relevant stories?"

**Result:** **Extended Coverage Map** — gaps filled where possible, remaining genuine gaps identified.

#### Phase 4: Strengthening by Priority

**Goal:** Even when primary company covers a requirement, find additional stories from other companies to strengthen the CV.

**Why this matters:**
- CV shows ALL years of experience — each company section needs strong bullets
- A Critical skill demonstrated at multiple companies is more convincing
- Different stories provide different angles on the same skill
- Multiple stories per skill give options for tailoring

**Process — by priority level:**

1. **Critical skills:** For each Critical skill already covered by primary company:
   - Search ALL other companies for additional stories
   - If another company has a complementary story → add to coverage
   - Note: primary company story stays primary; additional story provides backup/depth
2. **High skills:** Same process — look for additional stories across all companies
3. **Medium skills:** Same process, but only if compelling stories exist (don't force weak matches)
4. **Skip if:** A company has absolutely no relevant stories → don't force it. Ask user if unsure.

**Result:** **Enhanced Coverage Map** — multiple story options per skill, ready for tiering.

#### Phase 5: Final Tiering

**Goal:** Assign stories to tiers for CV generation.

**Tiering rules:**
- **Tier 1 (Must Include in CV):**
  - Stories from primary company that demonstrate Critical/High skills
  - Stories from other companies that are dramatically stronger than primary alternatives
- **Tier 2 (Good to Have):**
  - Supporting stories from any company
  - Stories demonstrating Medium skills
  - Strengthening stories from Phase 4
- **Tier 3 (If Space Allows):**
  - Nice-to-have stories
  - Less relevant but still valid

**Primary company check:** Primary company should have the most Tier 1 stories. If it doesn't, reconsider primary company selection.

**Multi-story skills:** When a skill is covered by stories from multiple companies, note ALL of them — this allows placing the best story in each company's CV section (not duplicating the same story across sections).

### Domain-Aware Story Analysis (CRITICAL)

**Principle:** When the role_profile has Domain Context, use it to adjust story selection, tiering, and framing. The same story can be Tier 1 in one domain and Tier 3 in another.

**Three levels of domain difference:**

1. **Selection:** Which stories to include at all. A story about learning platform redesign is essential for EdTech but may be irrelevant for FinTech.

2. **Tiering:** How high to rank selected stories. The same story can be Tier 1 in EdTech and Tier 3 in Enterprise SaaS, because it demonstrates the domain's core competency.

3. **Framing:** Which aspects of a story to emphasize. Story_10 (heroes.camp) framed for EdTech: "Redesigned learning platform with knowledge maps and reinforcement loops" vs. for general SaaS: "Built real-time analytics dashboard scaling cohorts 82→178."

**Process:**
1. Read Domain Context from role_profile.md
2. For each domain in the role profile, determine which stories are most relevant
3. Create domain-specific tiering in skills_mapping.md under "Domain-Specific Adjustments"
4. When generating a CV, ask which domain to target (if multiple domains exist)
5. Use the domain-specific tiering + framing for that domain

**When only one domain exists:** Use that domain's tiering as the default. General tiering becomes the fallback for when no domain context is available.

See [Skills Mapping Template](references/skills_mapping_template.md) for the complete mapping template.

---

## Part 3: CV Generation

### CV Strategy

**Primary-First Prioritization:**
- **Primary company → gets the most bullets (3-4) and the best Tier 1 stories**
- Other companies → fewer bullets, Tier 2 stories acceptable
- Earlier companies → minimal bullets (1-2), only the strongest metrics
- Professional Summary → prioritizes achievements from the primary company

**Tier-to-Section Mapping:**
- Tier 1 achievements → Summary + top bullet points (most go to the primary company)
- Tier 2 achievements → Work experience bullets for other companies
- Tier 3 → Only if space allows, only for non-primary companies

**Tailoring:**
- Use target role's priority keywords in headers/bullets
- Reorder bullets by relevance to this target role
- Mirror market language (what appears across JDs)
- **Apply domain-specific framing** from Domain Context (e.g., "learning platform redesign" for EdTech, "enterprise deployment" for FinTech)
- **Use domain-specific tiering** when generating CV for a specific domain

**Principles:**
- Every bullet has a number/metric
- Primary company: 3-4 bullets, other companies: 2-3, earlier: 1-2
- Active voice, action verbs
- NO invented details

See [CV Template](references/cv_template.md) for the complete CV template.

### CV Generation Rules

**Follow the template from `references/cv_template.md` exactly. The CV structure is:**

1. Name + Title + Contact info
2. Summary paragraph (no heading)
3. Experience (each company: company line → role → mission → bullets)
4. Certifications
5. Education
6. Skills & Languages

#### Summary Paragraph
- NO heading — just a paragraph after contact info
- Format: `[Role Title]` + `years of experience` + `key skills/areas` + `key results with metrics` + `your value/superpower` + `motivation if applicable`
- **Prioritize achievements from the primary company**
- 2-3 sentences max

#### Work Experience Structure (per company)
Each company block has:
1. **Company line:** `Company Name, one-line company description` tab `City, Country`
2. **Role line:** `Role title` tab `Month 20XX – now / Month 20XX`
3. **Mission line:** `Summary or mission: [Strong verb] [team/project] [product] [result in numbers]`
4. **Bullets:** 3-4 for primary company, 2-3 for others, 1-2 for earlier

#### Bullet Format (CRITICAL — different from typical CVs)
- **Format:** `[Strong verb] [result] due to / by [action]`
- **Result goes FIRST** — the impact, the metric, the outcome
- **Then how** — the action, method, or approach that led to it
- Every bullet MUST have a number/metric
- Use strong verbs from JD (Led, Built, Grew, Reduced, Launched, etc.)

**Examples:**
- Grew monthly active users by 40% by redesigning the onboarding flow
- Reduced customer churn by 25% due to implementing predictive retention model
- Led cross-functional team of 8 to launch new feature, resulting in $2M ARR increase

#### Recency Rules for Bullets
- **Bullet count:** Primary company: 3-4 bullets, other companies: 2-3, earlier: 1-2
- **Best stories go to the primary company** — assign Tier 1 stories there first
- Within each company, order bullets by relevance to this target role

#### Skills & Languages
- Combine into one section
- Format: `General skills & Specific skills` on one line, `Tools, Programming languages` on next, `Languages with levels` on next
- Only list skills actually demonstrated in achievements
- Mirror JD terminology

#### What to Exclude
- Tier 3 achievements (unless space allows)
- Irrelevant experience
- Stories without metrics (flag these first)

---

## Quality Checklist

### Before finalizing skills mapping:

- [ ] All critical skills are mapped
- [ ] Evidence is quote-based (not just assertions)
- [ ] Coverage ratings are honest
- [ ] Gaps are identified
- [ ] Tier 1/2/3 stories are clearly prioritized

### Before finalizing CV:

- [ ] All bullets follow format: `[Strong verb] [result] due to / by [action]` (result first)
- [ ] All bullets have metrics (no exceptions)
- [ ] Every claim can be backed up with a story
- [ ] Keywords from JD are used naturally
- [ ] Summary paragraph has no heading — flows after contact info
- [ ] Each company block has: company line + role line + mission line + bullets
- [ ] Primary company has 3-4 bullets with Tier 1 stories
- [ ] Previous companies have progressively fewer bullets
- [ ] Tier 1 stories are prominent and in the primary company section
- [ ] Skills & Languages section combines both (no separate sections)
- [ ] Can speak to every bullet in interview
- [ ] **Story-Company verification:** For EACH bullet, verify the story belongs to the company section where it's placed (check stories_index if unsure)
- [ ] **Facts-only verification:** For EACH bullet, confirm every fact comes from the story file — no inferences, no company profile additions without user approval
- [ ] **ATS language check:** CV bullets use JD keywords naturally (not just synonyms)
- [ ] **Domain framing check:** Stories are framed using domain-specific vocabulary from Domain Context (not generic skill descriptions)
- [ ] **Proofread against BOTH stories AND company documents:** Verify all metrics and facts against both story files AND company profile documents (company profiles may contain details like branch counts, user numbers, etc. that complement stories)
- [ ] **Currency check:** For international/foreign companies, use appropriate currency (EUR for EU companies, USD for US companies, etc.). Ask user if unsure.
- [ ] **Logical sense check:** Every phrase in every bullet must make logical sense (e.g., "scaled engagement 117%" is nonsensical if 82→178 is capacity, not engagement; "2.6× growth from zero" is contradictory)
