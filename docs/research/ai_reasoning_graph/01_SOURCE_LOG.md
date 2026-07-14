> Architecture status: supporting research. Canonical IDs and rules are defined in [Visaxa Decision Framework SOT](../../master/00_VISAXA_DECISION_FRAMEWORK_SOT.md).

# Source log

Research date: 2026-07-13. All access was read-only. No accounts were created, and no forum interaction occurred.

## Corpus coverage

| Domain / community | Corpus rows | Evidence role | Access note |
|---|---:|---|---|
| Reddit | 12 | Firsthand owner questions and peer discussion | Public indexed threads |
| HubSpot Community | 10 | CRM administration, dedupe, permissions | Public community pages |
| Square Community | 8 | Deposits, status, resource scheduling | Public community pages |
| Salon Geek | 10 | Salon ownership, contractors, commission, no-shows | Public forum pages |
| Capterra | 10 | Identified Mindbody reviews | Public review page; incentive label must be rechecked before quotation |
| Trustpilot | 10 | Recent complaint and exit narratives | Public review pages; allegations are not independently verified |
| Zoho Community | 5 | Migration, export permissions, reporting | Original dates not exposed in indexed output |
| Salesforce Stack Exchange | 10 | Identity, imports, relationships, consent | Public technical Q&A; older items used as recurrence evidence |
| G2 | 20 | Recent Zenoti, Mindbody and Vagaro reviews | Some rows split distinct issues from one review; not counted as independent recurrence |
| Software Advice | 20 | Recent salon-platform reviews and excerpts | Identified where exposed; otherwise marked as review excerpt |
| TrustRadius | 15 | Vetted CRM and appointment-platform reviews | Incentive status preserved in engagement field |
| GetApp | 20 | Verified-review aggregates and excerpts | Aggregate rows are demand facets, not 20 independent reviewers |
| **Total** | **150** |  | **12 domains** |

The four review platforms in the second half broaden source coverage but share the same underlying review-market ecosystem. They are independent domains, not proof of twelve statistically independent populations.

## Search-demand evidence

### Visaxa Google Search Console

Authenticated read-only access was available for property `visaxa.app`. Performance report, Web search type, 2026-04-12 through 2026-07-11:

- 151 impressions
- 8 clicks
- 5.3% CTR
- average position 56
- 19 query rows

The visible query set was concentrated around `crm evaluation`, including `how to evaluate crm software based on pricing, scalability, and customer support?`, `crm software evaluation`, `crm evaluation matrix`, `crm assessment`, and `crm evaluation framework`. This is evidence that the existing evaluation page has begun to receive query exposure. The sample is far too small to estimate broad market demand or compare branches reliably.

### Google Trends, autocomplete, PAA and related searches

- Google Trends was accessible as a product, but no stable comparative numeric export was obtained in this run.
- The Google suggestion endpoint could not be opened through the research interface, so autocomplete phrases were not recorded as if observed.
- Search-result research surfaced related language around best salon software, all-in-one booking, double-booking prevention, appointment deposits, free versus paid, migration checklists and CRM evaluation. These phrases are qualitative corroboration only.
- No PAA panel was captured reproducibly. No PAA frequency or volume is claimed.

## AI-search behavior sources

- [Google Search Central: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features) — official description of query fan-out, eligibility, links, internal discoverability and measurement.
- [Google: Expanding AI Overviews and introducing AI Mode](https://blog.google/products-and-platforms/products/search/ai-mode-search/) — official description of multi-step searches, complex comparison and follow-ups.
- [Google: AI in Search at I/O 2025](https://blog.google/products-and-platforms/products/search/google-search-ai-mode-update/) — complex, longer questions and follow-up behavior.
- [Google: five ways to explore the web with generative AI](https://blog.google/products-and-platforms/products/search/explore-web-generative-ai-search/) — 2026 update emphasizing original sources, links beside claims and next-step suggestions.
- [Google: seamless AI Overview to AI Mode follow-ups](https://blog.google/products-and-platforms/products/search/ai-mode-ai-overviews-updates/) — conversational continuation while retaining context.

The requested uploaded Google AI Mode U.S. Insights report was not present in the attachment directory. Only the task text was available. No conclusions are attributed to the missing report.

## Internal Visaxa evidence

Inspected:

- `src/content/blog/*.mdx`
- `src/app/blog/page.tsx`
- `src/lib/blog.ts`
- `src/app/sitemap.ts`
- `src/app/research/*`
- `src/app/compare/*`
- `src/app/features/page.tsx`
- `docs/RESEARCH_CONTENT_MAP.md`
- prior market-listening files under `docs/research/market-listening/`

Five posts are currently published and three are drafts. No product roadmap or authoritative MVP capability matrix was found in the repository. Public feature copy is treated as positioning or future intent, not as verified shipped capability.
