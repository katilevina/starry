# Map Achievements to Target Role & Generate CV

**Goal:** Match your STAR achievements to target target role requirements and generate a tailored CV

---

## Instructions for Me (Claude)

1. **Identify the target role**:
   - Ask user which target role folder to work with
   - Read the `target role_profile.md` to understand requirements
   - Read `skills_mapping.md` (if exists)

2. **Read all achievements**:
   - Read ALL story files in `achievements/my_data/` directory
   - For each story, read the FULL STAR narrative — not just tags or metadata
   - Understand what you actually did in each story

3. **Deep analysis of each story**:

   For each story, analyze how it relates to the target role:
   - What skills from the target role does this story demonstrate?
   - What specific actions/metrics prove each skill?
   - How strong is the evidence? (quote from story)
   - Rate coverage: ✅ Strong / ⚠️ Moderate / ❌ Gap

   **IMPORTANT:** The same story may demonstrate different skills for different target roles. Always re-analyze the full story, never rely on pre-extracted tags.

4. **Tier the achievements**:

   **Tier 1 (Must Include in CV):**
   - Stories that demonstrate critical skills
   - Stories with strongest metrics
   - Most relevant to the target role

   **Tier 2 (Good to Have):**
   - Supporting achievements that add depth
   - Show secondary skills

   **Tier 3 (If Space Allows):**
   - Nice-to-have achievements
   - Less relevant but still valid

5. **Fill skills_mapping.md**:
   - Update coverage table for each skill
   - List Tier 1/2/3 story recommendations
   - Identify gaps (skills with no achievements)
   - Provide go/no-go recommendation

6. **Generate CV in cv.md**:
   - Write professional summary using Tier 1 achievements
   - Create work experience bullets from Tier 1 and Tier 2
   - Emphasize target role's priority keywords
   - Include all metrics from achievements
   - Mirror action verbs from JD

7. **Show outputs and confirm**:
   - Present skills mapping summary
   - Show CV preview
   - Ask if user wants edits
   - Flag any critical gaps

---

## Quiz Questions to Start

1. **Which target role do you want to map achievements to?**
   - Type: single choice
   - Options: List all folders in `target_roles/my_data/` directory

---

## Example Conversation Flow

**User:** /map-skills

**Claude:**
Let's map your achievements to a target role and generate a CV.

**[Quiz: Which target role?]**

**Claude:**
I'll analyze the **[Role Title]** at **[Company]** target role and match it to your achievements.

**[Reads target role_profile.md and all story files]**

**Claude:**
Here's the skills mapping:

## Critical Skills Coverage

| Skill | Status | Best Story | Confidence |
|-------|--------|------------|------------|
| Skill 1 | ✅ Strong | story_1 | High |
| Skill 2 | ✅ Strong | story_3 | High |
| Skill 3 | ⚠️ Moderate | story_2 | Medium |
| Skill 4 | ❌ Gap | - | Low |

## Story Recommendations

**Tier 1 (Must Include in CV):**
- story_1 — [Title] (demonstrates: Skill 1, Skill 2)
- story_3 — [Title] (demonstrates: Skill 5, Skill 6)

**Tier 2 (Good to Have):**
- story_2 — [Title] (demonstrates: Skill 3)

**Gaps to Address:**
- Skill 4 (Critical) — No strong evidence. Consider: [suggestion]

**Recommendation:** ✅ Apply / ⚠️ Strengthen first / ❌ Skip

**[User responds]**

**Claude:**
I've updated `skills_mapping.md` with full analysis. Now generating your CV...

**[Generates CV based on Tier 1/2 achievements]**

**Claude:**
Your CV is ready! Here's a preview:

**[Shows CV preview]**

**[Confirms or user requests edits]**

---

## Tips for Me

- **Be thorough** — read ALL story files, not just recent ones
- **Match keywords** — look for exact phrases from JD in achievements
- **Prioritize metrics** — achievements with numbers beat achievements without
- **Flag gaps clearly** — don't hide missing skills
- **Be honest about go/no-go** — if critical skills are missing, recommend skipping
- **Mirror JD language** — use their words in the CV
- **Every bullet needs a number** — if a story lacks metrics, flag it

---

## Mapping Algorithm

For each skill in the target role:

1. **Deep story analysis** — Read the FULL STAR narrative:
   - What did you actually DO in this story?
   - How do those actions demonstrate this skill?
   - What metrics prove the impact?

2. **Quote-based evidence:**
   - Extract specific quotes from the story
   - Explain the connection: "This demonstrates [skill] because..."

3. **Rate coverage:**
   - **Strong:** Story has clear action + metrics directly showing skill
   - **Moderate:** Story implies skill or has weak metrics
   - **Gap:** No story demonstrates this skill

4. **One story → multiple skills:**
   - A single story can demonstrate multiple skills
   - Extract different aspects for different skills
   - Same story may cover "data analysis" for one target role, "process improvement" for another

5. **Select best achievement:**
   - Prefer achievements with stronger metrics
   - Prefer achievements where skill is central (not incidental)
   - Prefer recent achievements (unless older is stronger)

---

## CV Generation Rules

1. **Professional Summary:**
   - 2-3 sentences max
   - Mention target role title + years experience
   - 2 key achievements from Tier 1 achievements with metrics
   - 3 top skills from target role requirements

2. **Work Experience Bullets:**
   - Start with action verbs from JD
   - Use Tier 1 achievements first, then Tier 2
   - Every bullet must have a number
   - Max 3-4 bullets per target role
   - Order by relevance to this target role (not chronology)

3. **Skills Section:**
   - Group by category (Technical, Leadership, etc.)
   - Only list skills actually demonstrated in achievements
   - Mirror JD terminology

4. **What to exclude:**
   - Tier 3 achievements (unless space allows)
   - Irrelevant experience
   - Stories without metrics (flag these first)

---

## Output

Updated: `target_roles/my_data/[target role_folder]/skills_mapping.md`
Updated: `target_roles/my_data/[target role_folder]/cv.md`

Files created/updated:
- ✅ Skills mapping with coverage tables and recommendations
- ✅ CV tailored to this target role with matched achievements
- ✅ Go/no-go recommendation based on critical skills
