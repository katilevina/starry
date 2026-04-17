# Job Hunt System

> **A systematic, AI-driven framework to organize your career history and generate tailored CVs in minutes.**

**Status:** 🚧 Alpha Release | **Version:** 0.5.1 | **Feedback Welcome!**

Template for managing job search process with **STARR** stories (Situation, Task, Action, Result, Reflection), employer context, and role-based CV generation.

> ⚠️ **This is an Alpha release** — Core functionality works, but documentation and examples are still being refined. See [Known Limitations](#-known-limitations-alpha) below.

**What this is:** A **file-first** knowledge system that works with any AI assistant — not a standalone program. Just copy the folder, open it in your AI agent, and start using commands.

***

## ⚙️ Prerequisites

Before using this system, you need:

* **Any AI assistant** with file access (Claude, ChatGPT, Cursor, Windsurf, Kojori, etc.)
* **Basic AI literacy** — ability to open folders and chat with AI
* **Time investment** — 1-2 hours for initial setup, 10 min per subsequent CV

**What you DON'T need:**
* ❌ No coding skills required
* ❌ No Python/JavaScript installation
* ❌ No specific AI subscription (works with free and paid tiers)

***

## 🚀 Installation (Step 0)

**This is a file-first project — just copy and open!**

1. **Download or clone** this repository to your computer
2. **Open the folder** in your AI agent:
   * **Claude:** Create Project → Upload folder
   * **Cursor:** Open Folder
   * **Windsurf:** Open Workspace
   * **Kojori:** Open Workspace
   * **ChatGPT:** Upload files or paste `CLAUDE.md` as system prompt
3. **Start using commands:** Type `/quick-setup` to begin

**That's it!** The AI agent will read the structure and guide you through interactive workflows.

***

## 🔐 For Personal Use (Recommended)

This repository is a **template** for your job hunt. To safely store your personal career data, create your own private copy:

### Option 1: Clone & Create Private Repository (Recommended)

1. **Clone this repository**
   ```bash
   git clone https://github.com/katilevina/starry.git my-starry
   cd my-starry
   ```

2. **Create a PRIVATE repository on GitHub**
   - Go to https://github.com/new
   - Name it: "my-starry" or "job-hunt-system"
   - ⚠️ **IMPORTANT:** Select **Private** visibility
   - Don't initialize with README, .gitignore, or license
   - Click "Create repository"

3. **Connect to your private repository**
   ```bash
   git remote set-url origin git@github.com:YOUR_USERNAME/my-starry.git
   git push -u origin main
   ```

4. **Now you can safely add your personal data**
   - Add stories to `achievements/my_data/`
   - Add companies to `companies_i_worked/my_data/`
   - Everything stays in YOUR private repository ✅

### Option 2: Download & Work Locally

If you prefer not to use GitHub:

1. Download this repository as ZIP
2. Extract to your preferred folder
3. Open in your AI agent
4. Your data stays on your computer only

**Why use a private repository?**
- ✅ Automatic backup in the cloud
- ✅ Access from multiple devices
- ✅ Version history (never lose work)
- ✅ Your personal data stays PRIVATE

***

## 📁 Structure

```
job_hunt_2026/
├── achievements/         # YOUR achievements → written as STARR stories
├── companies_i_worked/   # WHERE you worked → company profiles built FROM your achievements
├── target_roles/         # WHAT you want to do next → generalized roles based on market analysis
└── .claude/commands/     # Interactive commands to automate the process
```

**Quick guide:**

* 📝 `achievements/` \= What you DID (your past achievements)
* 🏢 `companies_i_worked/` \= WHERE you did it (companies you worked for)
* 🎯 `target_roles/` \= What you WANT to do next (generalized roles, not specific job postings)
* 🤖 `commands/` \= Tools to connect it all together

***

## 🚀 Quick Start (5 Steps)

### Step 1: Quick setup (3-5 minutes) ⚡

```
/quick-setup
```

I'll quickly gather basic context about the companies where you've worked. This helps me ask better questions when you add achievements.

**Optional:** I can even search online for company information during your employment dates to find relevant events, product launches, and context!

**Result:** `companies_i_worked/company_[name].md` draft profiles created

***

### Step 2: Add your first STARR achievement

```
/add-achievement
```

Tell me about a work experience. I'll use the company context to ask specific questions and guide you through the STARR framework.

**Result:** `achievements/achievement_1.md` created with rich details

***

### Step 3: Add a few more achievements

Aim for 3-5 to start. Mix of:

* Recent achievements
* Different skills (leadership, technical, impact)
* Different companies/roles

***

### Step 4: Collect job postings for a target role

```
/analyze-role
```

Paste job descriptions from multiple similar jobs. I'll extract common requirements and build a generalized role profile.

**Result:** `target_roles/role_[name]/` folder created with analysis

***

### Step 5: Generate tailored CV

```
/map-skills
```

I'll match your achievements to the role requirements and create a CV.

**Result:** `target_roles/role_[name]/cv.md` — ready to use for multiple similar jobs!

***

**Total time:** First setup takes 1-2 hours. After that, each new CV takes 10 minutes.

***

## ⚠️ Known Limitations (Alpha)

This is an **early release** — some features are still being refined:

- [ ] **Templates** — Need inline examples (currently have abstract placeholders)
- [ ] **Documentation** — Claude-internal comments in some templates (planned to remove)
- [ ] **Guides** — No "Getting Started" guide yet (see README for now)
- [ ] **Testing** — Not tested with external users yet (you're among the first!)
- [ ] **LinkedIn** — Optimization skill in development

**Roadmap:** See [TODO_BEFORE_RELEASE.md](TODO_BEFORE_RELEASE.md) for what's planned for v0.6 (Beta) and v1.0 (Stable).

**Feedback wanted!** Please open issues or share your thoughts — this is an active work in progress.

***

## 📖 How It Works

### 1. Achievements Bank (what YOU did)

Collect your work experiences as **STARR** achievements ONCE:

* **S**ituation — Background and context
* **T**ask — What needed to be done
* **A**ction — What YOU specifically did
* **R**esult — Measurable outcomes with numbers
* **R**eflection — What you learned and what you'd do differently

**Why STARR?** Achievements are reusable building blocks. Write once, use for many CVs.

***

### 2. Companies Context (WHERE you did it)

For each company you worked for, the system automatically builds a profile:

* Extracted from your STARR achievements (no manual work!)
* Company overview (you provide: industry, business model)
* Your role, responsibilities, tools, achievements (from achievements)

**Key insight:** Company profiles are built FROM achievements, not separately.

***

### 3. Target Roles (what you WANT to do next)

**Important:** These are NOT specific job postings. They're generalized roles based on market analysis.

For example: "Senior Product Manager in SaaS" built from 20+ similar job descriptions.

For each target role:

* Collect multiple similar JDs
* Extract common requirements and patterns
* Identify priority keywords and skills
* Build ONE role profile that captures the essence

***

### 4. Skills Mapping (do you fit?)

Match your achievements to role requirements:

* See which required skills your achievements demonstrate
* Identify gaps (skills you need to develop or highlight)
* Tier achievements: Must-have vs nice-to-have for THIS role

***

### 5. CV Generation (tailored for each target role)

Generate a CV specifically for this generalized role:

* Uses only the most relevant achievements
* Emphasizes skills and keywords from the market analysis
* Every bullet has metrics from your achievements

**Result:** One CV that fits multiple similar jobs perfectly.

***

## 💡 What is STARR?

**STARR** is a framework for telling compelling stories about your experiences:

* **S**ituation \= What was happening? (Context, background, timeline)
* **T**ask \= What needed to be done? (Goal, problem to solve)
* **A**ction \= What did YOU do? (Your specific steps — focus on YOUR contribution)
* **R**esult \= What happened? (Measurable outcomes with NUMBERS)
* **R**eflection \= What did you learn? (Growth, what you'd do differently)

**Why STARR works:**

* ✅ Structured → Easy to write and read
* ✅ Quantified → Every story has metrics
* ✅ Reflective → Shows growth mindset
* ✅ Reusable → Same story works for different roles

**Example snippet:**

```
Situation: Our team made decisions based on gut feel...
Task: I needed to introduce data-driven processes...
Action: I built analytics dashboard, trained 3 teams, created weekly review...
Result: Decision speed improved by 40%, 3 teams adopted framework...
Reflection: I learned that change management is as important as the technical solution...
```

***

## 🔄 Before/After: STARR Transformation

**Before (vague input):**
> "I fixed a slow database query."

**After (STARR achievement):**
>
> **Situation:** Our e-commerce platform was experiencing slow checkout times. Customers were abandoning carts at a 35% rate during peak hours, and the database was maxing out at 100% CPU.
>
> **Task:** I needed to identify and optimize the bottleneck causing slow checkout performance.
>
> **Action:** I profiled the database and discovered a missing index on the `orders` table. I implemented a composite index on `customer_id` and `created_at`, rewrote the query to use the index, and set up monitoring to track query performance.
>
> **Result:** Checkout query time dropped from 2.1s to 0.4s (81% improvement). CPU usage during peak hours decreased from 100% to 45%. Cart abandonment rate dropped from 35% to 22% within 2 weeks.
>
> **Reflection:** I learned that systematic profiling beats guessing. Next time, I'll set up performance monitoring before issues become critical.

***

## 🎯 Core Principles

* **Facts only** — Never invent details. If you don't remember a metric, say so.
* **Metrics-driven** — Every claim should have a number when possible.
* **Reusable** — Write once, use for many CVs.
* **Gap-aware** — Know what skills you need to demonstrate before applying.

***

## 📝 Key Files

**For understanding the system:**

* `README.md` — This file! Overview and quick start
* `CLAUDE.md` — Detailed methodology (how the system works)
* `TODO_BEFORE_RELEASE.md` — Known improvements planned

**For managing your content:**

* `achievements/achievements_index.md` — Overview of all your achievements
* `achievements/README.md` — How to write STARR achievements
* `companies_i_worked/companies_index.md` — Overview of all companies you've worked for
* `companies_i_worked/README.md` — How company profiles work
* `target_roles/README.md` — How to manage target roles
* `target_roles/[role_name]/` — One folder per generalized role

**Templates (reference when adding content):**

* `achievements/template_achievement.md` — How to write a STARR achievement
* `companies_i_worked/template_company.md` — Company profile structure
* `target_roles/template_role/` — Complete role analysis structure

**Commands (automation):**

* `.claude/commands/quick_setup.md` — Collects company context upfront (3-5 min)
* `.claude/commands/add_achievement.md` — Collects STARR achievement interactively (uses company context!)
* `.claude/commands/add_company.md` — Updates/refines company profile from achievements
* `.claude/commands/analyze_role.md` — Analyzes job descriptions and builds generalized role
* `.claude/commands/map_skills.md` — Maps achievements to role + generates CV

***

## 🔄 How the Pieces Connect

```
⚡ /quick-setup (3-5 min)
        ↓
Creates draft company profiles
        ↓
┌──────────────────┐
│  Achievements    │  ← Write once, with smart questions based on company context
│ (What you did)   │
└────────┬─────────┘
         │ automatically feeds into
         ↓
┌──────────────────┐
│Companies Worked  │  ← Auto-updated from your achievements + initial context
│ (Where you did)  │
└──────────────────┘
         │
         │ When analyzing market, achievements are matched to roles
         ↓
┌──────────────────┐
│   Target Roles   │  ← Generalized roles from multiple JDs + CV
│ (What you want   │     One folder per generalized role
│  to do next)     │     Built from market analysis of 20+ similar jobs
└──────────────────┘
```

**Key insight:**

* Achievements & Companies \= **Permanent** (your history)
* Target Roles \= **Dynamic** (generalized roles based on market)
* CVs \= **Generated per role** (one CV fits multiple similar jobs)

***

## 🎯 Typical Workflow

1. **Quick setup:** Run `/quick-setup` to gather company context (3-5 min)
2. **Add achievements:** Add 5-10 STARR achievements (system asks smart questions based on company context)
3. **System auto-updates:** Company profiles from those achievements
4. **Market research:** Collect 20+ similar job postings for a role you want
5. **Analyze market:** Run `/analyze-role` to create generalized target role
6. **Match skills:** Run `/map-skills` to see how you fit and generate CV
7. **Apply:** Use this ONE CV for multiple similar jobs!
8. **Repeat:** For each new type of role, steps 4-7 (achievements & companies stay constant!)

***

## 📍 Project Status

**Current Version:** 0.5 Alpha

This is a work-in-progress template. The core structure and commands are functional, but:

* Documentation is still being refined
* Examples are being added
* Some Claude-internal comments need cleaning

**See:** `TODO_BEFORE_RELEASE.md` for what's planned before public release

***

## 🤝 Contributing

If you use this template and have suggestions:

1. Check `TODO_BEFORE_RELEASE.md` for known areas to improve
2. Add your own improvements
3. Share back what worked for you

***

## 📄 License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.

***

**Template Version:** 0.5.1 Alpha
**Created:** 2026-01
**Status:** 🚧 In Development