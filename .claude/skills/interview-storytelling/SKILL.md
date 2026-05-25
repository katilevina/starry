---
name: interview-storytelling
description: Analyze interview transcripts to evaluate which stories were chosen, which should have been chosen, and how to reframe answers for next time. Use after a real interview to turn the experience into structured feedback and new STARR achievements.
version: 0.1.0-stub
status: placeholder — to be filled in a dedicated session
author: Job Hunt System
tags: [interview, storytelling, retrospective, behavioral, STARR]
---

# Interview Storytelling Skill (Placeholder)

> ⚠️ **Status: STUB.** This skill is being designed in a dedicated session. The structure below is a placeholder that captures intended scope. Do not rely on the details — they will be revised.

---

## 🎯 Purpose

Help the user turn an interview (especially behavioral / experience-based ones) into a structured retrospective:

- **Which stories did I pick?** Were they the strongest available for each question?
- **Which stories should I have picked?** What did my story library have that I didn't use?
- **What didn't land?** Where did the interviewer push back, lose interest, or change topic?
- **How do I retell the weak ones?** Reframe, restructure, add metric, change opening.
- **What gaps does this expose?** Questions I had no story for — feed back into `/add-achievement`.

The goal is twofold:
1. Get better at the next interview.
2. Surface forgotten achievements that should have been in the story library all along.

---

## 🧩 Inputs (intended)

- Interview transcript (pasted text, or file in `interviews/`)
- Target role context (`target_roles/[role]/role_profile.md`)
- Available story library (`achievements/my_data/`)
- Optional: JD for the company being interviewed at

---

## 🔄 Intended Workflow (rough sketch)

1. **Parse the transcript.** Identify each question + the story the user used to answer.
2. **Match stories to library.** For each used story, find the closest match in `achievements/my_data/`.
3. **Score the choice.** Was the chosen story the strongest available for that question, given role priorities?
4. **Suggest alternatives.** For weak choices, recommend swaps from the library.
5. **Surface gaps.** Questions where the user had no good story — flag for `/add-achievement`.
6. **Reframe weak answers.** For stories that didn't land, draft alternative openings, structure, or framing.
7. **Save retrospective.** Output to `interviews/interview_[company]_[date].md`.

---

## 📐 Intended Output (placeholder format)

```markdown
# Interview Retrospective — [Company] — [Date]

## Questions & Story Choices

### Q1: "Tell me about a time you led a difficult project."
- **Story used:** story_data_framework
- **Match score:** ✅ Strong — Tier 1 for this role
- **What landed:** clear metric, owned the action
- **What to improve:** opening was too long, get to the result faster

### Q2: "Walk me through a conflict with a stakeholder."
- **Story used:** story_pricing_dispute
- **Match score:** ⚠️ Weak — story exists in library but not the strongest available
- **Better alternative:** story_legal_negotiation (Tier 1 for conflict + influence)
- **Why better:** higher stakes, clearer outcome, role-aligned

## Gaps Surfaced
- No story for: "tell me about a failure"
  - Suggested: extract from your time at [Company X] — you mentioned the [Y] rollback
  - Run `/add-achievement` to capture it.

## Reframing Notes
- ...

## Next Steps
- [ ] Add 1–2 missing stories via `/add-achievement`
- [ ] Practice reframed opening for story_pricing_dispute
- [ ] Re-run `/map-skills` if new stories are added
```

---

## 🔗 Integration with Other Skills

- **`starr-achievements`** — gaps surfaced here feed `/add-achievement`
- **`job-analysis`** — role priorities determine which stories were "strongest available"
- **`applications`** — interview retrospectives link back to the application that produced them
- **`fix-errors`** — if the retrospective reveals a factual error in a story, propagate via `/fix`

---

## 📁 Intended File Locations

- Skill: `.claude/skills/interview-storytelling/SKILL.md` (this file)
- Command: `.claude/commands/analyze_interview.md` (stub)
- Output folder: `interviews/my_data/interview_[company]_[date].md` (folder TBD)
- Reference templates: `.claude/skills/interview-storytelling/references/` (TBD)

---

## 📝 Open Questions (to resolve in the dedicated session)

- Format of transcript input — paste, file, audio + transcription?
- How to score "strongest available story" — heuristic, LLM judgement, or user-confirmed?
- How to handle interviews that aren't fully STARR-style (e.g. case studies, system design)?
- Do retrospectives live under `interviews/` (new folder) or inside `applications/app_*/`?
- How aggressive should reframing suggestions be vs honest acknowledgement of weak fit?

---

**TODO before promoting from stub to v1.0:**
- [ ] Fill in real workflow based on the user's existing transcript-analysis session
- [ ] Create `analyze_interview.md` command with real prompts
- [ ] Decide folder layout and create template
- [ ] Sync template across skill `references/` and folder template (per CLAUDE.md sync rule)
- [ ] Update `CLAUDE.md` to list this skill among "Available Skills"
- [ ] Update `PRODUCT.md` Roadmap entry to "Done"
