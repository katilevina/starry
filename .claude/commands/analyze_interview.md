# /analyze-interview — Interview Retrospective (Placeholder)

> ⚠️ **Status: STUB.** This command is being designed in a dedicated session. The structure below is a placeholder. Do not rely on the details — they will be revised.

---

## Purpose

After a real interview, turn the experience into structured feedback:
- Were the stories you picked the strongest available?
- Which stories should you have used?
- What gaps does this expose in your story library?
- How would you reframe the answers that didn't land?

See the full skill at `.claude/skills/interview-storytelling/SKILL.md`.

---

## When to use

After any behavioral or experience-based interview — especially one that:
- Went unexpectedly badly despite a strong CV.
- Surfaced a question you weren't prepared for.
- Made you realize mid-call that you picked the wrong story.

**Prerequisites (intended):**
- A transcript of the interview (pasted, recorded + transcribed, or reconstructed from memory).
- Existing target role: `target_roles/[role]/role_profile.md`.
- Existing achievement library: `achievements/my_data/`.

---

## Intended Workflow (rough sketch)

```
👋 User runs /analyze-interview
  ↓
📋 Agent asks: Which company / role / date?
  ↓
📋 Agent asks: Paste transcript, or path to transcript file?
  ↓
🧠 Agent parses transcript into Q&A pairs
  ↓
🧠 For each Q&A pair:
   - Identify the story used
   - Match to existing achievement file
   - Score: was this the strongest available?
   - Suggest alternative if weak
  ↓
🚨 Surface gaps: questions with no good story → suggest /add-achievement
  ↓
✍️  Draft reframing notes for weak answers
  ↓
💾 Save retrospective to interviews/my_data/interview_[company]_[date].md
  ↓
📊 Optional: update applications_index.md with interview outcome
```

---

## Output (placeholder)

`interviews/my_data/interview_[company]_[date].md` — see SKILL.md for format.

---

## Open Questions

See the **Open Questions** section in `.claude/skills/interview-storytelling/SKILL.md`. Will be resolved in the dedicated design session.

---

**This command is not yet wired up. Treat it as design notes, not a working command.**
