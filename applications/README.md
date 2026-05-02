# Applications

This directory tracks all job and volunteer applications you've sent.

Each application is stored as a separate folder with a **snapshot of the exact CV** that was sent — not a link to the role folder, because CVs in role folders evolve with each new JD.

***

## Why snapshot?

CVs in `target_roles/my_data/role_[name]/cv.md` change over time — every new JD refines the role and regenerates the CV. But when you applied to a specific company, you sent a specific version. That version must be frozen here for:

- **Conversion tracking** — knowing exactly what you sent
- **Comparison** — seeing how you tweaked the generated CV
- **Improvement** — learning which CV versions get responses

***

## Structure

```
applications/
├── README.md              ← this file
└── my_data/
    ├── README.md          ← how to add applications
    ├── applications_index.md  ← master tracking file
    └── app_[company]_[date]/
        ├── cv_sent.md     ← snapshot of CV sent
        ├── cover_email.md ← (optional) cover letter / email text
        └── notes.md       ← (optional) responses, follow-ups
```

***

## See also

- **Skill:** `.claude/skills/applications/SKILL.md` — full workflow for AI
- **CLAUDE.md** — project overview including applications workflow
