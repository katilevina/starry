# Perplexity Skill

Claude Code skill for searching the web using Perplexity AI API with AI-grounded results and citations.

## Features

- **Search API** - Get ranked web search results with advanced filtering
- **Chat API** - Get AI-summarized answers with web context and citations
- **Multiple Export Formats** - Markdown, JSON, CSV
- **Domain Filtering** - Search specific websites only
- **Recency Filters** - Filter by day, week, month, year
- **TypeScript** - Type-safe implementation with modern tooling

## Structure

```
.claude/skills/perplexity/
├── SKILL.md              # Main skill instructions for Claude
├── setup-guide.md        # API credentials setup guide
├── reference.md          # Technical documentation
├── examples.md           # Real-world usage examples
├── README.md             # This file
└── scripts/
    ├── perplexity_search.ts  # TypeScript main script
    ├── perplexity.sh         # Shell wrapper
    ├── package.json          # Node dependencies
    ├── tsconfig.json         # TypeScript config
    ├── .env                  # API key (user creates this)
    ├── .gitignore            # Git ignore rules
    ├── node_modules/         # Dependencies (auto-created)
    ├── dist/                 # Compiled JS (auto-created)
    └── out/                  # Search results (gitignored)
```

## How to Use

The skill automatically activates when users request web searches or information.

### Example Requests:

- "Search for latest AI developments"
- "Find Python tutorials from official sources"
- "Explain how transformers work in machine learning"
- "Get recent tech news as JSON for analysis"

### What the Skill Does:

1. Clarifies search parameters (mode, filters, format)
2. Forms and executes appropriate command
3. Shows results with summary
4. Suggests next actions

## Files

### SKILL.md
Main instructions for Claude Code:
- When to activate the skill
- How to interact with users
- Command syntax and examples
- Error handling procedures

### setup-guide.md
Complete API setup instructions:
- Getting Perplexity API key
- Installing Node.js and dependencies
- Configuring environment
- Troubleshooting common issues

### reference.md
Technical reference:
- Command-line syntax
- API parameters and limits
- Response structures
- Error codes
- Best practices

### examples.md
Real-world scenarios:
- Research workflows
- User dialogs
- Command patterns
- Common use cases

## Progressive Disclosure

Claude Code reads files as needed:
1. `SKILL.md` - read first for basic instructions
2. `reference.md` - for technical details
3. `examples.md` - when specific examples needed
4. `setup-guide.md` - when setup help required

This saves context and improves performance.

## Quick Start

### Prerequisites

1. **Node.js 18+** and npm installed
2. **Perplexity API key** from https://www.perplexity.ai/settings/api

### Setup (First Time)

```bash
cd .claude/skills/perplexity/scripts

# Create .env file with your API key
echo "PERPLEXITY_API_KEY=pplx-your-key-here" > .env

# First run auto-installs dependencies and compiles TypeScript
./perplexity.sh "test search" -l 3
```

That's it! The skill is ready to use.

For detailed setup instructions, see `setup-guide.md`.

## Usage Examples

### Basic Search
```bash
cd .claude/skills/perplexity/scripts
./perplexity.sh "machine learning trends"
```

### Search with Filters
```bash
./perplexity.sh "AI news" -l 15 -r week -d techcrunch.com -d wired.com
```

### Chat API for Explanations
```bash
./perplexity.sh "explain quantum computing" --chat
```

### Save to File
```bash
./perplexity.sh "blockchain technology" -l 20 --save
```

### Export to JSON
```bash
./perplexity.sh "blockchain technology" -l 20 -f json --save
```

See `examples.md` for more detailed usage scenarios.

## Command Options

| Option | Description | Default |
|--------|-------------|---------|
| `query` | Search query (required) | - |
| `-l, --limit` | Number of results (max 20) | 10 |
| `-d, --domains` | Filter by domains | all web |
| `-r, --recency` | day, week, month, year | all time |
| `-f, --format` | markdown, json, csv | markdown |
| `-s, --save` | Save to file | false (stdout) |
| `-o, --output` | Custom file path | auto-generated |
| `-c, --chat` | Use Chat API | false |
| `-m, --model` | Model for Chat API | sonar |
| `--citations` | Show citations | true |

See `reference.md` for complete parameter documentation.

## Output

**By default:** Results are printed to stdout (terminal)

**With `--save` flag:** Results are saved to `scripts/out/`:
- **Markdown** (`.md`) - default, human-readable format
- **JSON** (`.json`) - structured data for programmatic processing
- **CSV** (`.csv`) - tabular data for spreadsheet analysis

Filename pattern: `perplexity_search_{query}_{timestamp}.{ext}`

## Two API Modes

### Search API
- Returns ranked list of web results
- With titles, URLs, snippets, dates
- Best for: collecting data, multiple sources, filtering

### Chat API
- Returns AI-generated answer
- With citations and web grounding
- Best for: explanations, summaries, Q&A

Claude Code automatically chooses the right mode based on user intent, or you can specify with `--chat` flag.

## Available Models (Chat API)

- `llama-3.1-sonar-small-128k-online` - fast, lightweight
- `llama-3.1-sonar-large-128k-online` - balanced (default)
- `llama-3.1-sonar-huge-128k-online` - most capable

## API Limits

- Search API: max 20 results per request
- Domain filter: max 20 domains
- Context: 128k tokens
- Rate limits: handled automatically by SDK

## Requirements

### Runtime
- Node.js 18+ or 20+
- npm (comes with Node.js)
- Internet connection

### Dependencies (auto-installed)
- `@perplexity-ai/perplexity_ai` - Official SDK
- `dotenv` - Environment variables
- `yargs` - CLI argument parsing
- `typescript` - TypeScript compiler

### API Access
- Perplexity API key (requires paid subscription)
- Get key at: https://www.perplexity.ai/settings/api

## Troubleshooting

### "Node.js не найден"
Install Node.js from https://nodejs.org/ or via package manager.

### "PERPLEXITY_API_KEY не найден"
Create `.env` file in `scripts/` directory with your API key.
See `setup-guide.md` for detailed instructions.

### "401 Unauthorized"
Check that:
1. API key in `.env` is correct
2. API key is active
3. Subscription is active

### TypeScript compilation errors
```bash
cd scripts
rm -rf node_modules dist
npm install
npm run build
```

For more troubleshooting, see `setup-guide.md` and `reference.md`.

## Security

### ⚠️ Important:
- `.env` file is gitignored - never commit it
- API key should be kept private
- Rotate keys periodically
- Monitor usage for unexpected activity

## Cost Management

Perplexity API is paid:
- Search API: ~$0.005 per request
- Chat API: ~$0.20-5.00 per 1M tokens (model dependent)

Set billing alerts in Perplexity dashboard to avoid surprises.

## Development

### Build
```bash
cd scripts
npm run build
```

### Manual Run
```bash
cd scripts
node dist/perplexity_search.js "query" -l 10
```

### Update Dependencies
```bash
cd scripts
npm update
```

## Documentation

- **For Users**: Read `SKILL.md` and `examples.md`
- **For Setup**: Read `setup-guide.md`
- **For Technical Details**: Read `reference.md`
- **For API Docs**: Visit https://docs.perplexity.ai/

## Integration with Claude Code

The skill integrates seamlessly with Claude Code:

```
User: Search for TypeScript best practices

Claude: [automatically activates perplexity skill]
        Выполняю поиск через Perplexity...
        
        [shows results and summary]
```

Claude will:
1. Detect when web search is needed
2. Clarify parameters if needed
3. Execute search with appropriate filters
4. Show relevant summary
5. Offer next actions

## Examples in Action

### Research Workflow
```
User: Find latest information about Rust programming

Claude: [uses Search API with recency filter]
        Shows: Top 10 recent articles
        
User: Explain memory safety in Rust

Claude: [uses Chat API]
        Shows: AI explanation with citations
```

### Domain-Specific Search
```
User: Search Python docs for async/await

Claude: [filters by python.org domain]
        Shows: Official documentation results
```

### Export for Analysis
```
User: Get AI companies data as JSON

Claude: [exports to JSON format]
        Shows: File path and offers to analyze
```

See `examples.md` for 10+ detailed scenarios.

## Updates

When updating the skill:
1. Update code in `perplexity_search.ts`
2. Run `npm run build` to recompile
3. Update `SKILL.md` if behavior changes
4. Update `reference.md` if parameters change
5. Add examples to `examples.md` for new features

## Related Resources

- **Perplexity API Docs**: https://docs.perplexity.ai/
- **TypeScript Docs**: https://www.typescriptlang.org/
- **Node.js Docs**: https://nodejs.org/docs/
- **Yargs Docs**: https://yargs.js.org/

## License

This skill is part of the PKB (Personal Knowledge Base) project.

## Support

For issues or questions:
1. Check `setup-guide.md` and `reference.md`
2. Review `examples.md` for similar use cases
3. Check Perplexity API status and docs
4. Contact Perplexity support for API issues

## Contributing

To improve this skill:
1. Test changes thoroughly
2. Update relevant documentation
3. Add examples for new features
4. Follow existing code style
5. Keep TypeScript types strict

---

**Ready to start?** See `setup-guide.md` for complete setup instructions!
