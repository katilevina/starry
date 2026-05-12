# /write-cl — Write Cover Letter

**Purpose:** Generate a tailored cover letter for a specific job application using your CV, the job description, and company research.

---

## When to use

Use this command **after** you've generated a CV for a target role and are ready to apply to a specific company.

**Prerequisites:**
- CV exists in `target_roles/[role]/cv.md` (generated via `/generate-cv`)
- JD exists in `target_roles/[role]/jd_[company]_[date].md`
- You've decided to apply to this specific company

---

## What the command does

1. **Analyzes the JD** for tone, language, and specific requirements
2. **Reviews your CV** to identify the most relevant achievements for this role
3. **Researches the company** (if needed) to find personalized touchpoints
4. **Generates a cover letter** following the effective CL structure:
   - Personalized intro (not generic)
   - 2-3 specific bullets on why you're a great fit
   - Genuine motivation based on company research
   - Optional personal connection/hook
   - Clear call to action
5. **Proofreads** for grammar, tone, and effectiveness
6. **Saves** to `applications/app_[company]_[date]/cover_letter.md` (when ready to send)

---

## Workflow

```
👋 User runs /write-cl
  ↓
📋 Agent asks: Which company are you applying to?
  ↓
📂 Agent reads: CV + JD + Role Profile
  ↓
🔍 Agent researches: Company website, recent news, team profiles
  ↓
✍️ Agent drafts: Cover letter following best practices
  ↓
👀 Agent presents: Draft for review + explains why it's effective
  ↓
🔄 User iterates: Provide feedback for refinements
  ↓
✅ User approves: Final version saved to applications folder
  ↓
📊 Agent updates: applications_index.md with new application entry
```

---

## Questions the agent will ask

1. **Which company?** (to identify the correct JD and create application folder)
2. **Any specific person you're writing to?** (hiring manager name, recruiter, etc.)
3. **Any personal connection to the company?** (user of their product, attended their event, etc.)
4. **Tone preference?** (formal/corporate vs casual/startup — if not clear from JD)
5. **Language?** (English, Russian, or other — based on job location)

---

## Output

### Draft Cover Letter

The agent will present a draft following this structure:

**Subject:** [Role Title] application - [Your Name]

**Body:**
- Personalized greeting (not "Dear Hiring Manager" if possible)
- 2-3 bullet points with specific, metric-backed achievements relevant to JD
- Motivation section with specific company references
- Optional personal hook (if genuine connection exists)
- Clear call to action + contact info

### Quality Checklist

The agent will verify:

- [ ] No generic phrases ("always wanted to work here")
- [ ] Each bullet has a specific metric/result
- [ ] At least one specific reference to company (product, news, mission)
- [ ] Tone matches JD (formal vs casual)
- [ ] No CV duplication (complements, doesn't repeat)
- [ ] No self-focus (all about value to company)
- [ ] Proofread for grammar (English: Grammarly check)
- [ ] Length: 150-250 words
- [ ] Explains nonlinear career path (if applicable)
- [ ] Explains industry/domain switch (if not obvious)

---

## Integration with existing workflows

### Before /write-cl:

1. `/analyze-role` → creates/updates target role folder with JD
2. `/map-skills` → assesses readiness
3. `/generate-cv` → creates tailored CV

### After /write-cl:

1. Review both CV and CL
2. Run `/apply` (future command) to track application
3. Update `applications_index.md` with send date
4. Wait for response → track conversion funnel

---

## Important Notes

**CL is NOT auto-generated with CV**

Cover letter and CV are separate artifacts because:
- CL is highly specific to the exact company and timing
- CL may require company research that wasn't done for CV
- You might apply to multiple companies with the same CV but different CLs
- CL might need iteration based on networking/conversations

**When to skip CL:**

Some companies explicitly say "no cover letters needed." In that case, skip `/write-cl` and proceed directly to application tracking.

**When to customize further:**

If you have a connection at the company or learn something new through networking, the agent can help you refine the CL to reference that conversation.

---

## Examples

See `.claude/skills/cover-letters/references/cl_examples.md` for:
- Bad examples (generic, vague, self-focused)
- Good examples (specific, personalized, company-focused)
- Language examples (English vs Russian)

---

## Related Skills

- **starr-achievements** — source of achievement stories for CL bullets
- **job-analysis** — JD analysis for understanding requirements
- **applications** — tracking CLs sent and conversion rates
