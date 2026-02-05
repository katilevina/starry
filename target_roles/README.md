# Target Roles Folder

**What goes here:** Generalized roles you want — built from analyzing 20+ similar job postings

---

## 🎯 What is a Target Role?

**NOT a specific job posting!** A generalized role based on market analysis.

For example:
- **"Senior Product Manager in SaaS"** — built from 20+ similar PM job postings
- **"Data Analyst in Fintech"** — built from 15+ similar analyst postings
- **"Head of Growth at Series B Startups"** — built from 10+ similar growth lead postings

**Key insight:** One generalized role = One CV that fits multiple similar jobs!

---

## 📂 What's in a Target Role Folder?

Each target role folder contains 3 files:

1. **`role_profile.md`** — Market analysis from multiple JDs
   - Common requirements across all jobs
   - Priority keywords and skills (what appears most often?)
   - Market patterns and trends

2. **`skills_mapping.md`** — How your achievements match this generalized role
   - Which of your achievements demonstrate required skills?
   - What skills are missing?
   - Which achievements to include in CV?

3. **`cv.md`** — Tailored CV for this generalized role
   - Built from your best-matching achievements
   - Emphasizes keywords that appear across market
   - Every bullet has metrics

---

## 🎯 Why This Structure?

1. **Work smarter, not harder** — Analyze once, apply to many similar jobs
2. **Market-informed** — Your CV is based on what the market actually wants
3. **Efficient** — One CV for 10-20 similar jobs, not 10-20 different CVs
4. **Reusable** — Your achievements work for multiple target roles

---

## 🚀 How to Add Target Roles

**Step 1:** Collect 10-20 similar job postings
- Look for patterns in titles, requirements, skills
- Save JDs from different companies but similar roles

**Step 2:** Analyze the market:
```
/analyze-role
```
Paste multiple JDs → system creates generalized role profile

**Step 3:** Match your achievements:
```
/map-skills
```
System finds your best achievements → generates CV automatically

**Step 4:** Apply to multiple similar jobs with ONE CV!

---

## 📊 Example Target Role Folder

```
target_roles/
├── role_senior_pm_saaS/
│   ├── role_profile.md      ← Analysis of 20+ SaaS PM job postings
│   ├── skills_mapping.md    ← My achievements that match
│   └── cv.md                ← ONE CV for all SaaS PM jobs!
├── role_data_analyst_fintech/
│   ├── role_profile.md      ← Analysis of 15+ fintech analyst postings
│   ├── skills_mapping.md
│   └── cv.md
```

---

## 💡 Key Insight

**Achievements are permanent, target roles are dynamic**

- ✅ Achievements = Your permanent career highlights (write once, keep forever)
- ✅ Companies worked = Your permanent work history (built from achievements)
- ⚡ Target Roles = Generalized roles based on market (add/remove anytime)
- ⚡ CVs = Generated per target role (one CV fits many similar jobs)

---

## 🔄 Workflow

```
1. Find 10-20 similar job postings
2. /analyze-role → creates generalized target role folder
3. /map-skills → matches achievements + generates ONE CV
4. Review CV, make edits if needed
5. Apply to ALL similar jobs with this ONE CV!
6. Repeat for different type of role (achievements stay constant)
```

**Result:** Instead of 20 CVs for 20 jobs, you have 2 CVs for 2 generalized roles.

---

## 📈 When to Create New Target Roles

- **When exploring new career direction** — "Should I move from PM to Growth?"
- **When seeing patterns in job market** — "Many jobs require X skill"
- **When applying across different industries** — "SaaS vs Fintech vs E-commerce"

---

**Need more info?** See `../README.md` for full system overview.
