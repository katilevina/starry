# Your Target Roles

This folder is for storing target job roles you're applying for.

## Folder Structure

Each target role gets its own folder:

```
my_data/
├── role_[company]_[position]/
│   ├── role_profile.md       # Job description analysis
│   ├── skills_mapping.md     # Your achievements matched to role requirements
│   └── cv.md                 # Tailored CV for this role
```

## Getting Started

1. Copy the template folder from `../template_role/`
2. Rename to `role_[company]_[position]/` (e.g., `role_google_pmm/`)
3. Run `/analyze-role` to create role_profile.md
4. Run `/map-skills` to create skills_mapping.md and cv.md

## Example Workflow

```bash
# Analyze job description
/analyze-role
# → Creates role_profile.md with requirements

# Map your achievements to role
/map-skills
# → Creates skills_mapping.md and cv.md
```

## Important Notes

- ✅ One folder per target role
- ✅ Each role has 3 files: profile, skills mapping, CV
- ✅ Skills mapping is role-specific (same achievement → different skills for different roles)
- ✅ CV is generated from Tier 1/2 achievements in skills mapping

**Questions?** See the main project README or run `/analyze-role` and `/map-skills` commands.
