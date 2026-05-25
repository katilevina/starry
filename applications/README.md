# Applications

This directory tracks all job and volunteer applications you've sent, plus batch outreach campaigns.

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
    ├── README.md          ← how to add applications and campaigns
    ├── applications_index.md  ← master tracking file (all apps + campaigns)
    ├── app_[company]_[date]/  ← one per formal application
    │   ├── cv_sent.md     ← frozen snapshot
    │   └── cover_letter.md ← (optional) cover letter
    └── campaign_[name]/       ← one per batch outreach campaign
        ├── outreach_plan.md   ← companies, tracks, priorities, status + stats
        ├── cold_outreach_templates.md  ← message templates by cluster
        ├── cv_sent.md         ← CV snapshot for batch
        └── messages/          ← sent message drafts
            └── [company].md
```

***

## See also

- **Skill:** `.claude/skills/applications/SKILL.md` — application tracking workflow
- **Skill:** `.claude/skills/hypotheses/SKILL.md` — campaigns and routing rules
- **CLAUDE.md** — project overview
