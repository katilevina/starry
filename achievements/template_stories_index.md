> **⚠️ SYNC RULE:** This template must be kept in sync with `.claude/skills/starr-achievements/references/stories_index_template.md`
> When updating this template, also update the skill reference file to keep them consistent.

# Stories Index

Overview of all STAR stories in your bank.

***

## By Company

### \[Company Name] (\[Year Range])

[story\_01](story_01_[slug].md) — \[Title]
*\[Period]* · \[Brief context: 1-2 sentences]

**See also:** [company\_\[slug\]](../../companies_i_worked/my_data/company_[slug].md) for full company context

***

## Projects

*Side projects, consulting gigs, personal projects — stories with `Type: project`. These don't have company profiles.*

### \[Project/Client Name] (\[Year Range])

[story\_XX](story_XX_[slug].md) — \[Title] *(project)*
*\[Period]* · \[Brief context: 1-2 sentences]

***

## How to Add Stories

Use the `/add-achievement` command to interactively create a new STAR story.

It will:

1. Ask you for Situation, Task, Action, Result, Reflection
2. Help you extract metrics (before/after, percentages, time saved, revenue impact)
3. Create the file with YAML frontmatter
4. Update this index automatically