# CodeAtlas

**Your Complete Developer Learning Platform** — a curated, searchable hub for programming tutorials, documentation, books, roadmaps, cheat sheets, and interview prep across every major technology domain.

Built by **Dhruv R. Shingote**

---

## Features

- **10 Technology Categories** — Languages, Web Development, Databases, AI & ML, Data Science, DevOps, Cybersecurity, Mobile Development, IoT, and more
- **Curated Resources** — Hand-picked Notes, official Documentation, and Books with authoritative URLs for every technology
- **Books Library** — Category-browsable books with Most Used and Top 500 rankings, plus free ebook library links
- **Interactive Roadmaps** — Step-by-step learning paths for all experience levels
- **Cheat Sheets & Interview Prep** — Quick-reference guides and curated interview questions
- **Full-Text Search** — Fuse.js-powered global search with instant filtering, type faceting, and URL query sync
- **FAQ Sections** — 42+ technologies with 8+ FAQ entries each, SEO-optimized with FAQPage schema
- **Blog Engine** — Schema-first blog with markdown content, auto-generated TOC, and SEO metadata
- **Analytics** — Google Analytics 4 + Microsoft Clarity via environment variable gating
- **Dark Mode** — Light/dark theme toggle with persistent preference
- **Bookmarks** — Save and organize your favorite resources
- **Responsive Design** — Mobile-friendly with horizontal scrollable nav showing all categories
- **Content Pipeline** — Data-driven architecture: hand-authored JS data files → auto-generated `content.json` → React components

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 |
| Build | Vite 5 |
| Styling | Tailwind CSS 3 |
| Routing | React Router v6 |
| Animations | Framer Motion 11 |
| Linting | ESLint |

## Quick Start

```bash
npm install
npm run dev      # Development server at http://localhost:5173
npm run build    # Production build to dist/
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Data Architecture

```
src/
├── config/
│   └── constants.js       # Design tokens, navigation, footer links, site metadata
├── context/
│   └── SearchContext.jsx  # React context for global search state management
├── data/
│   ├── languages.js           # 11 programming languages
│   ├── webDevelopment.js      # 12 web technologies (FE + BE)
│   ├── databases.js           # 8 database technologies
│   ├── aiML.js                # 10 AI/ML frameworks
│   ├── dataScience.js         # 8 data science tools
│   ├── devops.js              # 10 DevOps tools
│   ├── cybersecurity.js       # 7 cybersecurity tools
│   ├── mobileDevelopment.js   # 6 mobile technologies
│   ├── iot.js                 # 7 IoT technologies
│   ├── books.js               # 9 curated book categories + auto-generated collections
│   ├── catalog.js             # Central re-export hub combining all data
│   └── generated/
│       └── content.json       # Auto-generated aggregate content (see scripts/)
└── pages/
    └── SearchPage.jsx     # Full-text search results page with URL query sync

scripts/
└── generate-content.mjs   # Data pipeline: enriches source data → validates → writes content.json
```

## Phase 3 — Content & Search Layer (May 2026)

### FAQ Content System
```js
src/content/
├── faq.js                        # 42+ technologies with 8+ FAQ entries each
├── loaders/
│   └── contentLoader.js          # Merges catalog + FAQ for search indexing
└── blog/
    ├── posts.js                  # 3 starter blog posts with real content
    ├── loader.js                 # Blog loader with auto-generated TOC
    └── schema.js                 # Blog post schema & generateTOC utility
```

**Implementation details:**
- Each FAQ item gets `FAQPage` JSON-LD schema for Google rich results
- `getFAQSchema()` in `src/seo/structuredData.js` wraps arrays of `{question, answer}` for SEO
- FAQ content is imported directly by `TechnologySubPage.jsx` (no pipeline rebuild needed)
- Technologies without FAQ entries return `null` (handled by fallback component)

### Global Search — Fuse.js Integration
- `src/hooks/useSearch.js` — Singleton Fuse.js instance with 200ms debounce, category filtering, and ranked results
- Searches across `name`, `description`, `tags`, `topics`, `author`, `searchText` with weighted scoring
- `src/context/SearchContext.jsx` — React context providing `search()`, `clearSearch()`, `query`, `results`, and `isSearching` state across components
- `src/pages/SearchPage.jsx` — Indexed items: 79 technologies + all books + all tools in a single unified index; instant search with type filters (all/technology/book/tool), URL query sync, animated results grid

### Analytics
- `src/components/Analytics.jsx` — Google Analytics 4 + Microsoft Clarity integration
- Gated on environment variables (`VITE_GA_MEASUREMENT_ID`, `VITE_CLARITY_PROJECT_ID`)
- Automatic page_view tracking on route changes via `useLocation`
- Wired in `main.jsx` inside `BrowserRouter` — no-op when env vars are absent

### Blog Architecture
- Schema-first: `src/content/blog/schema.js` defines post structure with metadata, categories, and auto-TOC
- 3 starter posts: choosing first language, modern frontend guide, database paradigms
- SEO metadata per post (title, description, tags, published dates, canonical)
- `generateTOC()` extracts headings from markdown content for navigation

### SEO Updates
- FAQ content type added to all 79 technology sub-pages (`/:category/:slug/faq`)
- `TechnologySubNav.jsx` includes FAQ tab between Docs and Projects
- Sitemap generator includes `/faq` sub-pages — total 909 URLs (was 830)
- FAQ pages carry `FAQPage` structured data for Google rich results

## Potential Enhancements

- **Community Contributions** — Allow users to submit resource suggestions via PRs or a form
- **Progress Tracking** — Mark resources as completed, track learning streaks
- **Spaced Repetition / Flashcards** — Generate flashcards from cheat sheets and interview questions
- **Code Sandbox Integration** — Embed runnable code examples (CodeSandbox, CodePen)
- **API Mode** — Expose curated data as a REST/GraphQL API for external tools
- **PWA / Offline Support** — Service worker for offline access to resources
- **AI-Powered Recommendations** — Suggest next resources based on current viewing patterns
- **i18n / Multi-language** — Support for non-English resource collections
- **Browser Extension** — Quick-access companion extension

---

*Your all-in-one hub for learning, resources, and career growth.*
