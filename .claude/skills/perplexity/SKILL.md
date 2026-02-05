---
name: perplexity-search
description: Searches the web using Perplexity API with AI-grounded results and citations
---

# Perplexity Search Skill

This skill allows you to perform web searches using the Perplexity AI API with two modes:

* **Search API** - ranked web search results with advanced filtering
* **Chat API** - AI-grounded answers with web context and citations

## When to Use

Use this skill when the user:

* Asks to search the web for current information
* Wants AI-summarized answers with sources
* Needs to research topics with reliable citations
* Requires filtered searches by domain or recency
* Wants to analyze web content or trends

## How to Work

### 1. Automatically Choose API Mode

**IMPORTANT:** Automatically detect and choose the right API mode based on user intent:

**Use Search API (NO --chat flag) when user wants:**

* 🔍 **Research/Find/Search** - "research TaxDome", "find info about X", "search for Y"
* 📰 **Latest news** - "latest AI news", "recent developments in X"
* 📊 **List of sources** - "get sources about X", "find articles on Y"
* 🏢 **Company research** - "research company X", "investigate product Y"
* 🔗 **Multiple resources** - needs URLs, titles, dates from various sources
* 🎯 **Domain-specific** - wants info from specific websites
* ⏰ **Time-filtered** - needs recent information (add `-r week` or `-r month`)

**Use Chat API (ADD --chat flag) when user wants:**

* ❓ **Explanations** - "explain how X works", "what is Y"
* 🆚 **Comparisons** - "compare X and Y", "difference between A and B"
* 📝 **Summaries** - "summarize X", "tell me about Y in simple terms"
* 💡 **Direct answers** - asks specific question expecting synthesized answer
* 🎓 **Definitions** - "what does X mean", "define Y"
* 🤔 **How-to questions** - "how do I X", "how does Y work"

**Decision Examples:**

```
✅ "Research TaxDome company" → Search API (research = want sources)
✅ "Find information about Rust programming" → Search API (find = want list)
✅ "Latest AI developments" → Search API + `-r week` (news = want articles)
✅ "Get Python tutorials from python.org" → Search API + `-d python.org`

✅ "Explain how transformers work" → Chat API (explain = want answer)
✅ "Compare React vs Vue" → Chat API (compare = want analysis)
✅ "What is TypeScript" → Chat API (what is = want definition)
✅ "How does blockchain work" → Chat API (how does = want explanation)
```

**When in doubt:** Use Search API (safer default, gives sources for verification)

### 2. Clarify Parameters ONLY if Ambiguous

**Don't ask user** - just choose sensible defaults:

* Results: 10 (enough for overview)
* Format: stdout (user can see immediately)
* For news/recent: add `-r week` or `-r month` automatically

**Ask user only if:**

* Need very specific domains (e.g., "from official docs only")
* Unclear how many results (if user says "find ALL" vs "find some")
* Need to save to file (if user mentions "report", "export", "save")

### 3. Form and Execute Command

**Search API (company/topic research):**

```bash
cd .claude/plugins/research/skills/perplexity-search/scripts && ./perplexity.sh "TaxDome company" -l 10
```

**Search API with filters:**

```bash
cd .claude/plugins/research/skills/perplexity-search/scripts && ./perplexity.sh "AI trends" \
  -l 15 \
  -r week \
  -d techcrunch.com -d wired.com
```

**Chat API for explanations:**

```bash
cd .claude/plugins/research/skills/perplexity-search/scripts && ./perplexity.sh "explain quantum computing" --chat
```

**Save results to file:**

```bash
cd .claude/plugins/research/skills/perplexity-search/scripts && ./perplexity.sh "research report topic" -l 20 --save
```

### 4. Show Results

**By default (stdout):**

* Results appear in terminal immediately
* Show brief summary (top 3 results or key points)
* Suggest next actions

**With --save flag:**

* Report file path where saved
* Show brief summary from results
* Offer to read full file if needed

## Command Parameters

| Parameter       | Description                    | Default            |
| --------------- | ------------------------------ | ------------------ |
| `query`         | Search query (required)        | -                  |
| `-l, --limit`   | Number of results (max 20)     | 10                 |
| `-d, --domains` | Filter by domains (max 20)     | all web            |
| `-r, --recency` | hour, day, week, month, year   | all time           |
| `-f, --format`  | markdown, json, csv            | markdown           |
| `-s, --save`    | Save to file (default: stdout) | false              |
| `-o, --output`  | Custom output file path        | auto               |
| `-c, --chat`    | Use Chat API                   | false (Search API) |
| `-m, --model`   | Model for Chat API             | sonar              |
| `--citations`   | Show citations (Chat API only) | true               |

## Available Models (Chat API)

* `sonar` - fast, balanced (default, recommended)
* `sonar-pro` - most capable, slower, more expensive

## Usage Examples

### Example 1: Research Company (Auto: Search API)

**User:** "Research TaxDome company"

**Actions:**

1. **Auto-detect:** Research \= Search API
2. Execute: `./perplexity.sh "TaxDome company" -l 10`
3. Show top 3 results with URLs
4. Suggest: "Want specific domains or save to file?"

### Example 2: Latest News (Auto: Search API + Recency)

**User:** "Find latest AI news"

**Actions:**

1. **Auto-detect:** Latest \= Search API + recency filter
2. Execute: `./perplexity.sh "AI news" -r week -l 10`
3. Show recent articles
4. Suggest: "Want specific tech sites only?"

### Example 3: Explanation (Auto: Chat API)

**User:** "Explain how transformers work in machine learning"

**Actions:**

1. **Auto-detect:** Explain \= Chat API
2. Execute: `./perplexity.sh "explain transformers in ML" --chat`
3. Show AI answer with citations
4. Offer to search for specific implementations

### Example 4: Comparison (Auto: Chat API)

**User:** "Compare React vs Vue"

**Actions:**

1. **Auto-detect:** Compare \= Chat API
2. Execute: `./perplexity.sh "compare React vs Vue" --chat`
3. Show comparison with sources
4. Offer detailed search for specific aspects

### Example 5: Save Results

**User:** "Get AI companies data for my report"

**Actions:**

1. Execute: `./perplexity.sh "AI companies 2024" -l 20 --save`
2. Report file path
3. Offer to analyze or export to different format

## Data Returned

### Search API Results

For each result:

* Title and URL
* Content snippet
* Publication date
* Crawl/index date

### Chat API Results

* AI-generated answer (web-grounded)
* List of source citations with URLs
* Contextual information from recent web data

## API Limits

* **Search API**: max 20 results per request
* **Domain filter**: max 20 domains
* **Rate limits**: handled automatically by SDK
* **Context**: 128k tokens for online models

## Error Handling

### Missing API Key

If user gets "PERPLEXITY\_API\_KEY не найден" error:

1. **Explain the issue:**
   ```
   The Perplexity API requires an API key. You need to create one in your Perplexity account.
   ```
2. **Guide them step-by-step:**
   * Tell them to open `setup-guide.md` for full instructions
   * Or provide quick steps:
     1. Go to [https://www.perplexity.ai/settings/api](https://www.perplexity.ai/settings/api)
     2. Sign in or create account
     3. Click "Generate API Key"
     4. Copy the key
3. **Help them save credentials:**
   ```bash
   cd .claude/plugins/research/skills/perplexity-search/scripts

   # Create .env file
   echo "PERPLEXITY_API_KEY=pplx-your-key-here" > .env
   ```
4. **Verify setup:**
   ```bash
   cd .claude/plugins/research/skills/perplexity-search/scripts
   ./perplexity.sh "test query" -l 3
   ```
5. **Confirm success:**
   ```
   If you see "✓ Успешное подключение к Perplexity API", you're all set!
   ```

### TypeScript Compilation Errors

If compilation fails:

1. Check Node.js version (requires 18+)
2. Delete `node_modules` and `dist` folders
3. Run: `cd scripts && npm install && npm run build`

### Other Common Errors

If command fails, check:

1. Node.js and npm are installed
2. API key in `.env` file is correct
3. Internet connection is working
4. Query is not empty
5. Refer to `setup-guide.md` and `reference.md` for details

## Project Structure

```
.claude/plugins/research/skills/perplexity-search/
├── SKILL.md              # Main instructions (this file)
├── README.md             # Skill overview
├── setup-guide.md        # API setup guide
├── reference.md          # Technical reference
├── examples.md           # Usage examples
└── scripts/
    ├── perplexity_search.ts  # TypeScript main script
    ├── perplexity.sh         # Shell wrapper
    ├── package.json          # Node dependencies
    ├── tsconfig.json         # TypeScript config
    ├── .env                  # API key (user creates)
    ├── .gitignore           # Git ignore rules
    ├── node_modules/        # Dependencies (auto-created)
    ├── dist/                # Compiled JS (auto-created)
    └── out/                 # Results (not committed)
```

## Important Notes

* ✅ Always use `./perplexity.sh`, not TypeScript/Node directly
* ✅ Script auto-compiles TypeScript on first run
* ✅ **Default: stdout** (results to terminal, use `--save` for files)
* ✅ Default format is Markdown
* ✅ API key must be configured in `.env`
* ✅ **Auto-detect API mode** based on user query type
* ⚠️ Always show brief summary (top 3 items)
* ⚠️ Search API limited to 20 results max
* ⚠️ Domain filter limited to 20 domains max

## API Mode Auto-Detection Summary

**Triggers Search API (default):**

* "find", "search", "research", "get", "look up"
* "latest", "recent", "new" (add recency filter)
* Company/product/tool research
* Need list of sources

**Triggers Chat API:**

* "what", "how", "why", "explain"
* "compare", "difference between"
* "summarize", "tell me about"
* Direct questions needing reasoning

**When in doubt:** Use Search API (safer default)

## User Communication

### Example Dialog 1: Company Research (Auto Search API)

```
User: Research TaxDome company

After successful search, suggest:
- View specific results in detail
- Try Chat API for summarized answer (or vice versa)
- Refine search with different filters
- Export to different format
- Search related topics

## Quick Reference: Auto-Detection Rules

### ✅ DO: Execute Immediately

**Search API (default):**
- "research/find/search [X]" → just execute
- "latest/recent [X]" → add `-r week` and execute
- "get/find sources about [X]" → execute
- Company/product research → execute

**Chat API:**
- "explain/what is/how does [X]" → add `--chat` and execute
- "compare [X] vs [Y]" → add `--chat` and execute
- "summarize [X]" → add `--chat` and execute

### ❌ DON'T: Ask User Unnecessarily

**Bad:**
```

User: Research TaxDome
Claude: Хочешь Search API или Chat API?

```

**Good:**
```

User: Research TaxDome
Claude: \[executes Search API immediately, shows results]

```

### 💡 Best Practice

1. **Read user intent** from keywords
2. **Choose API automatically** based on patterns above
3. **Execute immediately** with sensible defaults
4. **Show results** and offer refinements
5. **Ask only if** truly ambiguous

Remember: **Speed matters more than perfect choice**. User can always refine!
```