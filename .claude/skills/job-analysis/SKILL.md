---
name: job-analysis
description: Complete workflow for analyzing job descriptions, mapping achievements to roles, assessing readiness, and generating tailored CVs. Use when applying for jobs, preparing for interviews, or creating targeted resumes. Covers JD analysis, skills mapping with evidence-based matching, readiness assessment with consultant-style gap advice, and CV generation.
---

# Job Analysis & Skills Mapping

This skill combines four related workflows:

1. **Job Description Analysis** — Extract and categorize requirements from JDs
2. **Skills Mapping** — Match achievements to role requirements with evidence
3. **Readiness Assessment** — Decide whether to apply, strengthen first, take a pause, or pivot. **This is a hard gate before CV generation.**
4. **CV Generation** — Create tailored resumes ONLY after readiness assessment chooses 🟢 Go

**⚠️ Two-command split:**
- `/map-skills` does steps 1-3 (analysis + readiness assessment + decision)
- `/generate-cv` does step 4 (CV generation only after explicit "Go" decision)

**Why split:** Skills mapping is analytical. CV generation is a commitment. Splitting them creates a deliberate consultation moment so we don't auto-generate CVs that hide real gaps.

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
- **Update `target_roles/my_data/roles_index.md`:**
  - Add to "Total roles" count
  - Add new row to Role Type Fit Matrix (Result = "Not applied yet")
  - Add to Strategy section (Pursue/Test/Avoid) based on domain fit analysis

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

**Goal:** Fill remaining gaps (❌ and ⚠️) by going through previous companies in reverse chronological order, then project-type stories.

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
6. **Then check project-type stories** (`Type: project`):
   - These are side projects, consulting gigs, personal projects
   - Analyze same as employment stories — quote-based evidence, metrics
   - Note: these go to CV Projects section (optional) or Summary, NOT Experience
7. **If a company is clearly irrelevant** (completely different industry, role type doesn't match) → ask user: "[Company Y] seems quite different from this role. Should I still check it for relevant stories?"

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

## Part 2.5: Readiness Assessment (Decision Gate)

**Principle:** Skills mapping tells us WHAT evidence we have. Readiness assessment decides WHETHER to apply with that evidence — and if not, what to do about it.

**This is a hard gate.** No CV gets generated until the user explicitly chooses 🟢 Go or 🟡 Go with caveats.

### When Readiness Assessment Runs

**Trigger condition:** Phase 6 of `/map-skills` runs UNLESS coverage is 100% across BOTH Critical AND High priorities. If perfect coverage → skip the assessment, offer `/generate-cv` directly.

**Why skip on full coverage:** No real decision to make. The user has all evidence; the assessment would be theatre.

### Coverage Summary

Calculate:
- Critical: covered (✅ Strong + ⚠️ Moderate) / total / %
- High: covered / total / %
- Medium: covered / total / %
- Overall: total covered / total requirements / %

### Four Scenarios

| Scenario | Criteria (guidance, not strict) | What it means |
|----------|----------------------------------|---|
| 🟢 **Go** | Critical ≥80% Strong, High ≥60% covered | All key requirements have solid evidence — apply now |
| 🟡 **Go with caveats** | Critical 100% but real gaps in High/Medium | Apply, address gaps in cover letter / interview prep |
| 🟠 **Wait & strengthen** | Critical gaps are FILLABLE from existing experience | User has the experience, just hasn't documented it. Add stories first. |
| 🔴 **Not yet** | Critical gaps are STRUCTURAL (no existing experience) | Need new experience, training, or pivot to a different role |

**Be honest in scenario assessment.** If Critical is 50% covered and there's no fillable experience, that's 🔴. Don't soften to 🟠 to be encouraging.

### Consultant Mode: Action Options Per Gap

For each genuine gap (or moderate-coverage Critical/High skill), provide options from this menu:

* **(a) Add achievement** — user likely has the experience, just hasn't documented it
  - Specify: which company, what to ask, estimated time (1-2 hour conversation typical)
  - Confidence: 🔴 High (company profile evidence) / 🟡 Medium (role-based) / 🟢 Worth checking (industry pattern)
* **(b) Training / course** — user genuinely lacks the skill
  - Recommend specific: platform + course name + duration + cost
  - Be concrete. "Take a Product Analytics course" is bad. "Reforge: Mastering Product Analytics, 6 weeks, $2K" is good.
* **(c) Pet-project / practice** — user needs portfolio evidence
  - Specify: what to build, what skills it demonstrates, realistic time
  - Example: "Build a Streamlit dashboard analyzing public dataset to demonstrate SQL + product metrics — 2 weekends"
* **(d) Reframe existing experience** — adjacent story can be re-angled
  - Specify: which story, what angle, what JD aspect it could match
* **(e) Accept as gap** — real but not deal-breaking
  - Justify: priority level, compensating strengths, how to address in cover letter

For each gap, recommend ONE option with reasoning.

### Decision Quiz

Present:
- Coverage summary table
- Selected scenario with reasoning
- Gaps with recommended option per gap

Then ask the user:

> What do you want to do?
> - 🟢 Generate CV now — apply with current evidence
> - 🟠 Add N stories first — document existing experience
> - 🟠 Strengthen specific stories — add metrics, then re-run
> - 🔴 Take a pause — need training or new experience
> - 🔄 Pivot to adjacent role — gaps are structural
> - ❌ Skip this role — not the right fit

### Recording the Decision

Write to `skills_mapping.md` Readiness Assessment section:
- Coverage Summary (numbers)
- Scenario + reasoning
- Gaps Analysis & Action Options (all 5 options + recommended per gap)
- Recommendations (short-term / medium-term / alternative paths)
- Decision Record (user's choice + next step)

### Acting on the Decision

| Decision | Next step |
|----------|-----------|
| 🟢 Generate CV now | Run `/generate-cv` |
| 🟠 Add stories first | Run `/add-achievement` per gap, then re-run `/map-skills` |
| 🟠 Strengthen stories | User finds metrics, re-runs `/map-skills` |
| 🔴 Take a pause | Save assessment, suggest learning resources, set check-in date |
| 🔄 Pivot | List existing `role_*` folders, OR run `/analyze-role` for adjacent role |
| ❌ Skip | Note reasoning, move on |

### Why This Gate Matters

- **Prevents wasted applications:** A CV generated against weak evidence still leads to interview rejection. Better to know upfront.
- **Surfaces hidden experience:** Many "gaps" are actually undocumented stories. The consultation finds them.
- **Encourages skill investment:** When training/projects are framed as concrete options (not vague advice), users actually do them.
- **Respects user agency:** The decision is the user's, not Claude's. The consultation provides options; the user chooses.

---

## Part 3: CV Generation

**⚠️ Prerequisite:** This part runs ONLY via the `/generate-cv` command, AFTER `/map-skills` has been run AND the user has explicitly chosen 🟢 Go or 🟡 Go with caveats in the Readiness Assessment. Never auto-generate a CV at the end of skills mapping.

**Refusal conditions for CV generation:**
1. No `skills_mapping.md` exists → tell user to run `/map-skills` first
2. No Readiness Assessment in skills_mapping.md AND coverage is incomplete → tell user to run `/map-skills`
3. Readiness scenario is 🔴 Not yet → require explicit user override
4. User asks for CV without choosing a target role → ask first
5. Required story files missing → list them, suggest `/add-achievement`

### Pre-Generation: Role Framing Analysis (CRITICAL)

**Why this step exists:** Skills mapping tells you WHAT to include. But without framing analysis, a "Product Operations" CV can read as "Business Operations" — right skills, wrong positioning. This step determines HOW to frame every bullet so the CV speaks the role's language.

**Run this step AFTER reading skills_mapping.md and BEFORE writing any bullet.**

#### Step A: JD Verb Pattern Analysis

Analyze the JD's dominant verb patterns to determine what TYPE of professional the role expects:

| Verb pattern | Signals | Leading framing |
|---|---|---|
| **Builder:** "design", "build", "create", "establish", "implement", "develop" | Infrastructure, processes, systems from scratch | Lead bullets with **HOW** — the method, process, or system designed |
| **Operator:** "run", "manage", "optimize", "maintain", "improve", "streamline" | Existing operations, efficiency, scale | Lead bullets with **impact on system** — efficiency gains, adoption rates |
| **Growth:** "drive", "grow", "scale", "increase", "accelerate", "launch" | Revenue, users, metrics | Lead bullets with **WHAT** — the metric, the outcome, the growth |
| **Leader:** "lead", "manage", "mentor", "develop", "build team" | People, culture, org design | Lead bullets with **WHO** — team size, structure, development |
| **Strategist:** "define", "own", "set", "align", "create vision" | Direction, priorities, frameworks | Lead bullets with **scope** — what was defined, for whom, with what authority |

**How to determine dominant pattern:**
1. Count verbs in JD responsibilities section
2. The pattern with the most verbs = PRIMARY framing
3. A second strong pattern = SECONDARY framing (can appear in supporting bullets)
4. Write down: "This role is primarily [Builder/Operator/Growth/Leader/Strategist] with secondary [X] framing"

**Example:** Product Operations Team Lead JD → verbs: "design", "build", "establish", "implement", "streamline" → PRIMARY: Builder, SECONDARY: Operator → bullets should lead with HOW (processes, systems, methods designed/built).

#### Step B: Story Deep Mining for Framing Evidence

**Beyond skills mapping — re-read stories specifically looking for:**

1. **Processes designed** (not just used) — "created SOPs", "established prioritization framework", "built incident tracking system"
2. **Systems built** (not just results) — "rolled out Jira for agile", "set up self-service design system", "implemented goal decomposition with Miro+Jira"
3. **Methodologies introduced** (not just followed) — "moved team to OKR-based planning", "introduced cross-functional observation sessions"
4. **Tools implemented** (not just used) — "deployed ChatGPT for ticket generation", "set up AmoCRM with per-stage instructions"
5. **Change management** — "drove adoption across N teams", "trained X people on new workflow", "achieved N% adoption rate"

**Why this matters:** These details are the difference between "Grew revenue 2.6×" (generic business ops) and "Designed goal decomposition system with Miro+Jira, driving 2.6× revenue growth through aligned execution" (product ops). Same metric, completely different positioning.

**How to mine:**
- Read each Tier 1 and Tier 2 story's Action section slowly
- Highlight every sentence that describes HOW something was done
- For each highlighted sentence, ask: "Does this show me designing/building/implementing something?"
- Extract the specific process/system/method/tool + the outcome it produced

#### Step C: Bullet Framing Rules by Role Type

After Steps A and B, apply framing rules:

**Builder/Operator roles (most common for "Operations" titles):**
- Bullet format: `[Strong verb] [PROCESS/SYSTEM/METHOD] → resulting in [OUTCOME with metric]`
- Example: "Designed goal decomposition system with Miro+Jira, aligning quarterly OKRs to sprint-level tasks for 3 cross-functional crews"
- The HOW dominates the bullet. The metric is supporting evidence, not the lead.

**Growth/PM roles:**
- Bullet format: `[Strong verb] [OUTCOME with metric] by/through [METHOD]`
- Example: "Grew monthly active users by 40% by redesigning the onboarding flow"
- The WHAT dominates. The HOW is supporting detail.

**Leadership-heavy roles:**
- Bullet format: `[Strong verb] [TEAM/ORG CHANGE] → resulting in [OUTCOME]`
- Example: "Restructured 8-person team from functional silos into 3 cross-functional crews, increasing throughput by X%"
- The WHO dominates. The outcome validates the structural decision.

**Default rule:** If unsure, match the JD's first 3 responsibility bullets. Their verb pattern = your bullet pattern.

#### Step D: Anti-Pattern Detection

Before finalizing bullets, check for these red flags:

| Anti-pattern | What it looks like | Fix |
|---|---|---|
| **Wrong role type framing** | All bullets lead with revenue/metrics for a "design processes" JD | Re-read Step A. Rewrite bullets to lead with HOW. |
| **Shallow bullets** | Bullet describes outcome but not method ("Grew revenue 2.6×") | Re-read Step B. Find the process/system detail. Add it. |
| **Missed process details** | Story has "built Jira workflow" but bullet just says "managed projects" | Re-read story Action section. Extract the specific process. |
| **Generic verbs** | "Managed", "handled", "was responsible for" | Replace with role-specific verbs from JD (designed, built, implemented, established) |
| **Metric-only bullets** | "2.6× growth" without HOW | Add the method that produced the growth |
| **JD keyword reframing** | Facts are correct but described in JD vocabulary that inflates scope or formality ("testing channels" → "executing multi-channel acquisition strategy", "noticed pattern" → "discovered through analysis") | Rewrite bullet using the story's own natural language. Keep it simple and honest. If you tried things and noticed what worked, say that. |

**Self-check question:** "If I remove all metrics from my bullets, does the CV still clearly show WHAT TYPE of professional this person is?" If no → framing is wrong. The role type should be obvious from verbs and methods alone.

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
- Select and prioritize facts that align with JD requirements (WHAT you include)
- Use JD keywords ONLY when they accurately describe your actual actions (HOW you describe them must stay honest — see Framing Honesty Rule)
- Reorder bullets by relevance to this target role
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
3. Experience (each company: company line → role → mission → bullets) — **employment stories only**
4. **Projects (optional)** — only if a project story clearly strengthens the position for THIS role. Project stories (`Type: project`) NEVER go in Experience.
5. Certifications
6. Education
7. Skills & Languages

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

**⚠️ Framing Honesty Rule:** Describe what you ACTUALLY did using natural language, not JD vocabulary. Facts from stories must keep their original framing. Do not rephrase actions in JD language to make them sound more strategic, more formal, or more aligned with the role than they actually were.

**The test:** Read the bullet aloud. Does it make the work sound like a different, more senior, or more strategic activity than what the story describes? If yes → rewrite.

**Allowed:** Choosing which facts to include (selection), which to emphasize (prioritization), using JD verbs that ACCURATELY describe what you did.
**NOT allowed:** Reframing "tried different ways" as "executed multi-channel strategy", upgrading "noticed" to "analyzed", inflating "had partners" to "built strategic partnerships".

- **Format:** `[Strong verb] [result] due to / by [action]`
- **Result goes FIRST** — the impact, the metric, the outcome
- **Then how** — the action, method, or approach that led to it
- Every bullet MUST have a number/metric
- Use strong verbs that ACCURATELY describe what you did — JD verbs are fine if truthful, but don't upgrade "tried" to "executed" or "noticed" to "analyzed"

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

### Before finalizing readiness assessment (skip if 100% Critical+High coverage):

- [ ] Coverage Summary table includes accurate numbers (covered / total / %)
- [ ] Selected scenario matches the actual coverage (no softening 🔴 to 🟠 to be encouraging)
- [ ] Each gap has all 5 action options listed (a/b/c/d/e), not just one
- [ ] Recommended option per gap is justified with reasoning
- [ ] Training/course recommendations are SPECIFIC (platform + name + duration), not vague
- [ ] Pet-project recommendations specify what to build and time investment
- [ ] Decision was explicitly chosen by the user, not assumed
- [ ] Decision Record points to the correct next step (run /generate-cv, /add-achievement, etc.)
- [ ] No CV has been generated as part of /map-skills

### Before finalizing CV:

- [ ] **Role framing analysis completed:** JD verb patterns analyzed, primary framing determined (Builder/Operator/Growth/Leader/Strategist)
- [ ] **Story deep mining completed:** Re-read Tier 1/2 story Action sections for process/system/method details, not just skills mapping coverage
- [ ] **Bullet framing matches role type:** Builder/Operator → HOW leads. Growth → WHAT leads. Leader → WHO leads. (See Pre-Generation: Role Framing Analysis)
- [ ] **Anti-pattern check passed:** No metric-only bullets, no generic verbs, no JD keyword reframing, no shallow bullets. If metrics removed, role type is still obvious from verbs and methods alone.
- [ ] **Framing Honesty Rule followed:** CV bullets describe what user ACTUALLY did in natural language, not reframed in JD vocabulary to sound more strategic/formal. Test: read bullet aloud — does it make the work sound like a different activity than what the story describes? If yes → rewrite.
- [ ] All bullets follow format appropriate for role type (see Step C: Bullet Framing Rules)
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
- [ ] **ATS language check:** CV bullets use JD keywords naturally AND truthfully — keywords must accurately describe actual actions, not inflate them
- [ ] **Domain framing check:** Stories are framed using domain-specific vocabulary from Domain Context (not generic skill descriptions)
- [ ] **Proofread against BOTH stories AND company documents:** Verify all metrics and facts against both story files AND company profile documents (company profiles may contain details like branch counts, user numbers, etc. that complement stories)
- [ ] **Currency check:** For international/foreign companies, use appropriate currency (EUR for EU companies, USD for US companies, etc.). Ask user if unsure.
- [ ] **Logical sense check:** Every phrase in every bullet must make logical sense (e.g., "scaled engagement 117%" is nonsensical if 82→178 is capacity, not engagement; "2.6× growth from zero" is contradictory)
- [ ] **Story type check:** No project-type story appears in Experience section. Project stories only in optional Projects section or Summary.
- [ ] **Projects section justification:** If Projects section is included, it's because a project clearly strengthens the position — not just to fill space.
