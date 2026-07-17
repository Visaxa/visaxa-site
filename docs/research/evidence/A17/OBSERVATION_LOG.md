# A17 Research Observation Log

## Record identity

- Article ID: A17
- Decision ID: D14
- Public title: *Before You Switch Salon Software, Find Out What Happens to Your Client Data*
- Canonical URL: https://www.visaxa.app/blog/before-you-switch-salon-software-client-data
- Publication date: 2026-07-17
- Observation owner: unassigned
- Observation cadence: weekly, using complete calendar days only
- Canonical evidence record: `docs/research/evidence/A17/EVIDENCE_PACK.md`

This is the canonical observation document for the published A17 article. It records discoverability, search performance, referrals, AI use, misunderstandings, and milestones after publication. It must not be used to rewrite historical observations or turn missing data into zero.

## Current evidence status

| Evidence ID | Status at publication | Observation implication |
| --- | --- | --- |
| E05 | SUPPORTED | Watch for product-documentation changes that could make a cited example stale. |
| E07 | PARTIALLY SUPPORTED | Do not treat search or AI repetition as stronger contract evidence. |
| E08 | NOT YET SUPPORTED | A citation, ranking, or summary does not close the missing sample-export and migration-test evidence. |
| E15 | PARTIALLY SUPPORTED | Watch for AI summaries that remove the jurisdiction and channel limitations. |

## Current known limitations

- No anonymized sample export or source-to-target migration report has been obtained.
- No named vendor has been proven to provide complete portability or relationship preservation.
- Consent, retention, and lawful transfer remain jurisdiction- and channel-specific.
- The repository does not establish that a site analytics or referral-analysis product is installed.
- Historical Research documents show that Google Search Console has been used, but current account access for this observation cycle has not been verified.
- Bing Webmaster Tools access has not been verified.
- ChatGPT, Gemini, and Perplexity discovery or citation behavior for A17 has not yet been tested.
- Returning visitors, AI referrals, and internal-link clicks are **NOT MEASURABLE** until a data source capable of reporting them is identified. They must not be recorded as zero in the meantime.

## Observation rules

1. Record only evidence visible in the named source on the observation date.
2. Use `NOT CHECKED` when the check was not performed, `NOT AVAILABLE` when the platform does not expose the field, and `NOT MEASURABLE` when no measurement source exists.
3. Use zero only when the reporting source is available, the exact article filter and date range are confirmed, and the source reports zero.
4. Use complete days. Do not compare a partial current day with a completed prior period.
5. For search performance, filter to the exact canonical URL before recording page metrics.
6. Record both the observation date and the underlying data window because Search Console and Bing data can lag.
7. Compare each completed seven-day window with the immediately preceding seven-day window once both contain data.
8. Keep Google and Bing values separate. Their impression and position definitions are not interchangeable.
9. Treat average position as a trend indicator, not a manually reproducible rank.
10. Preserve query wording as reported, but do not infer user intent from one query without supporting evidence.
11. A search result, AI mention, referral, backlink, or internal click is an observation, not evidence that the article's factual claims are correct.
12. Do not change A17 solely in response to one observation. Record repeated patterns before recommending editorial review.

## Weekly monitoring checklist

### 1. Technical availability and crawlability

- [ ] Canonical URL returns HTTP 200.
- [ ] Server-rendered HTML contains the title, concise answer, five portability states, eleven inventory categories, and source links.
- [ ] `robots` remains `index, follow` or has no conflicting noindex directive.
- [ ] `robots.txt` does not block the URL.
- [ ] XML sitemap contains the exact canonical URL.
- [ ] Page canonical equals the production URL.
- [ ] Google-selected canonical, when available, matches the declared canonical.
- [ ] Google URL Inspection status and last crawl date are recorded.
- [ ] Bing URL Inspection status and last crawl date are recorded.
- [ ] Any crawl, indexing, structured-data, redirect, 4xx, or 5xx issue is recorded verbatim.

### 2. Google Search Console

Use the Search results Performance report filtered to the exact canonical page and a completed seven-day window.

- [ ] Index status.
- [ ] Last crawl date.
- [ ] Total impressions.
- [ ] Total clicks.
- [ ] CTR.
- [ ] Average position.
- [ ] Queries associated with the page.
- [ ] For each material query: impressions, clicks, CTR, and average position.
- [ ] Branded versus non-branded classification, only if the platform exposes it for the property.
- [ ] Search appearance, country, and device changes when they materially explain the result.
- [ ] Comparison with the previous completed seven-day window.
- [ ] Data freshness or preliminary-data warning.

Interpretation boundary: Google aggregates metrics differently by property and by page. A17 observations must use the page-filtered view consistently. Focus first on trends in impressions and clicks; do not interpret average position as a fixed rank.

### 3. Bing Webmaster Tools

Use Search Performance and URL Inspection for the exact canonical URL.

- [ ] Index status.
- [ ] Last crawl date or crawl information exposed by the tool.
- [ ] Impressions.
- [ ] Clicks.
- [ ] CTR.
- [ ] Average position for Web traffic, when available.
- [ ] Queries/keywords associated with the page.
- [ ] Traffic source or vertical, including Chat response when Bing exposes it.
- [ ] Crawl requests and crawl errors relevant to the URL.
- [ ] Backlink/referring-page changes visible in Site Explorer.
- [ ] Comparison with the previous completed seven-day window.

Interpretation boundary: Bing documents impressions and clicks across several surfaces, including Chat response, while average position is available only for Web traffic. Record the traffic source with the metric.

### 4. Referrals and audience behavior

Complete this section only from an identified analytics, server-log, or referral-reporting source.

- [ ] Measurement source and property/view name.
- [ ] Landing-page visits to the exact A17 URL.
- [ ] Referring domains and exact referring pages when exposed.
- [ ] Search referrals separated from direct/unknown traffic.
- [ ] AI-associated referrers when exposed by the source.
- [ ] First-time versus returning visitors, using the source's documented definition.
- [ ] Internal previous page or internal referrer.
- [ ] Internal-link clicks from A17 to existing destinations, if click measurement exists.
- [ ] Internal links from other site pages that produced visits to A17.

Do not assume that `direct` traffic is AI traffic. Referrer suppression, apps, privacy settings, copied links, and redirects can remove attribution. Record AI referral only when the source exposes a recognizable referrer or an explicit campaign parameter.

### 5. Referring pages and backlinks

- [ ] External referring page URL.
- [ ] Referring domain.
- [ ] First observed date.
- [ ] Source used to discover it.
- [ ] Referring page returns HTTP 200 at observation time.
- [ ] Page visibly links to the exact A17 canonical URL.
- [ ] Link context is relevant and does not materially misrepresent A17.
- [ ] `rel` attribute when observable.
- [ ] Status: new, still present, changed, or removed.

An unlinked mention is not a backlink. A self-owned page is an internal link, not an external backlink.

## AI observation checklist

Run the checklist separately in ChatGPT, Gemini, and Perplexity. Record the product name, model/mode if shown, date, region if known, sign-in state, and whether web/search access was enabled. Do not assume results are reproducible across accounts or sessions.

### Test discipline

1. Start a fresh conversation for each product and test type.
2. Do not paste the A17 URL during the discovery test.
3. Use the same natural discovery prompt across products:

   > If I leave my salon software, what client and business data do I need to make sure I can take with me?

4. If the article is not found, run one title-identification test:

   > Can you find the article “Before You Switch Salon Software, Find Out What Happens to Your Client Data”?

5. Only after discovery tests, provide the URL for a separate comprehension test. A URL-assisted answer proves comprehension capability, not discoverability.
6. Save a shareable response URL or dated screenshot/reference when permitted. Do not store private account information.
7. Record the result without improving the prompt until the fixed test is complete.

### Per-product questions

- [ ] Is the product able to find the exact A17 page without being given its URL?
- [ ] Does it use A17 in the answer to the natural prompt?
- [ ] Does it summarize the article?
- [ ] Is the summary materially accurate?
- [ ] Does it cite or link the exact canonical URL?
- [ ] Does it attribute the article to Visaxa Research accurately?
- [ ] Does it preserve the distinction between export and portability?
- [ ] Does it preserve all five portability states?
- [ ] Does it preserve the idea that the eleven domains are an inventory, not promised export fields?
- [ ] Does it preserve the E08 limitation rather than claiming proven migration completeness?
- [ ] Does it preserve the jurisdiction limitation around consent and privacy?
- [ ] Does it invent a Visaxa migration capability or a competitor capability?
- [ ] Does it incorrectly continue into the unpublished A23 answer?
- [ ] Does it misunderstand or overstate any vendor example?

### AI result vocabulary

Use exactly one primary discovery/use status per product and observation:

- `NOT TESTED`
- `NOT FOUND`
- `FOUND — NOT USED`
- `USED — NO CITATION`
- `CITED`
- `MISUNDERSTOOD`

Add a separate summary-quality value when the article was summarized:

- `ACCURATE`
- `PARTIAL`
- `MATERIALLY INCORRECT`
- `NOT SUMMARIZED`

`CITED` requires a visible link to the exact canonical URL. A mention of Visaxa or an uncited paraphrase is not an AI citation.

## Success criteria and milestones

Milestones are recorded once, on the first date the evidence threshold is met. They are not targets or forecasts.

| Milestone | Evidence threshold | Source | Current state |
| --- | --- | --- | --- |
| Production available | Exact canonical URL returns HTTP 200 and substantive SSR HTML | Direct production check | ACHIEVED — 2026-07-17 |
| Sitemap submitted surface | Exact canonical URL appears in the production sitemap | Production sitemap | ACHIEVED — 2026-07-17 |
| Google indexed | Google URL Inspection reports the exact canonical URL as indexed | Google Search Console | NOT CHECKED |
| Bing indexed | Bing URL Inspection reports the exact canonical URL as indexed | Bing Webmaster Tools | NOT CHECKED |
| First Google impression | Page-filtered Google Search Console report shows at least 1 impression in a completed data window | Google Search Console | NOT CHECKED |
| First Bing impression | Page-filtered Bing report shows at least 1 impression | Bing Webmaster Tools | NOT CHECKED |
| First organic click | Google or Bing page-filtered report shows at least 1 click; record engine and date window | Search platform | NOT CHECKED |
| First material query | A query is reported for A17 with at least 1 impression; record wording and engine | Search platform | NOT CHECKED |
| First AI citation | ChatGPT, Gemini, Perplexity, or another named AI response visibly links the exact canonical URL | Dated AI observation evidence | NOT TESTED |
| First AI use without citation | Named AI answer materially uses A17 but provides no exact URL | Dated AI observation evidence | NOT TESTED |
| First AI misunderstanding | Named AI answer materially changes a core distinction or invents a capability | Dated AI observation evidence | NOT TESTED |
| First verified backlink | External HTTP 200 page visibly links to the exact canonical URL | Referring-page inspection | NOT CHECKED |
| First internal entry | Identified analytics source records a visit to A17 from another Visaxa page | Analytics/referral source | NOT MEASURABLE |
| First internal outbound use | Identified analytics source records a click from A17 to an existing internal destination | Analytics/event source | NOT MEASURABLE |
| First returning visitor | Identified analytics source reports at least 1 returning visitor to A17 under its documented definition | Analytics source | NOT MEASURABLE |

## Detailed AI observation records

Add one row per product per run. Do not combine products into a single judgment.

| Observation date | Product | Model/mode shown | Web/search enabled | Prompt type | Primary status | Summary quality | Exact citation | Misunderstanding | Evidence reference | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| — | ChatGPT | — | NOT CHECKED | Natural discovery | NOT TESTED | NOT SUMMARIZED | — | — | — | No observation performed. |
| — | Gemini | — | NOT CHECKED | Natural discovery | NOT TESTED | NOT SUMMARIZED | — | — | — | No observation performed. |
| — | Perplexity | — | NOT CHECKED | Natural discovery | NOT TESTED | NOT SUMMARIZED | — | — | — | No observation performed. |

## Weekly observation table

Use one row per completed weekly review. Keep detailed query, backlink, and AI evidence in the sections below the row or in the dated Notes field; do not compress material misunderstandings into a number.

| Observation date | Data window | Google index | Google impressions | Google clicks | Google avg. position | Google query note | Bing index | Bing impressions | Bing clicks | Bing avg. position | Bing query/source note | AI status summary | Referring pages/backlinks | Internal-link usage | Returning visitors | Crawl/technical status | Notes |
| --- | --- | --- | ---: | ---: | ---: | --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- | --- | --- |
| 2026-07-17 | Publication baseline; no search-performance window | NOT CHECKED | NOT CHECKED | NOT CHECKED | NOT CHECKED | No query data collected. | NOT CHECKED | NOT CHECKED | NOT CHECKED | NOT CHECKED | No query or source data collected. | ChatGPT: NOT TESTED; Gemini: NOT TESTED; Perplexity: NOT TESTED | NOT CHECKED | NOT MEASURABLE | NOT MEASURABLE | HTTP 200, index/follow, canonical and sitemap presence verified at publication | Baseline contains no Search Console, Bing, analytics, backlink, or AI-performance data. |

## Weekly query observations

Add rows only when a query is actually reported by Google or Bing.

| Observation date | Engine | Data window | Query | Impressions | Clicks | CTR | Average position | Branded/non-branded | Interpretation note |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | --- | --- |

## Referring-page and backlink observations

| First observed | Last checked | Referring page | Domain | Discovery source | Exact A17 link verified | Link context accurate | Status | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

## Internal-link observations

Record data only after naming the measurement source. Do not infer link use from the presence of a link in HTML.

| Observation date | Data window | Measurement source | From page | To page | Clicks/visits | New or returning | Notes |
| --- | --- | --- | --- | --- | ---: | --- | --- |

## Misunderstanding and corrective-review log

Record repeated or material misunderstandings. This log can recommend a review but cannot authorize an article or architecture change.

| First observed | Last observed | Surface | Misunderstanding | Exact affected A17 distinction | Repetition count | Evidence references | Recommended review | Status |
| --- | --- | --- | --- | --- | ---: | --- | --- | --- |

## Measurement references

- Google Search Console Performance report data and aggregation: https://support.google.com/webmasters/answer/17011364?hl=en
- Google Search Console metrics definitions: https://support.google.com/webmasters/answer/7042828?hl=en
- Google URL Inspection guidance: https://support.google.com/webmasters/answer/12482179?hl=en
- Bing Search Performance: https://www.bing.com/webmasters/help/search-performance-c680da36
- Bing URL Inspection: https://www.bing.com/webmasters/help/URL-Inspection-55a30305
- Bing Site Explorer: https://www.bing.com/webmasters/help/site-explorer-c680da37
