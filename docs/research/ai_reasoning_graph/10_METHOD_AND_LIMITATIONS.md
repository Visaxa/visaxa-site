> Architecture status: supporting research. Canonical IDs and rules are defined in [Visaxa Decision Framework SOT](../../master/00_VISAXA_DECISION_FRAMEWORK_SOT.md).

# Method and limitations

## Method

1. Inspected the current site content, publication logic, sitemap, research routes and comparison routes.
2. Reused 75 previously captured, source-linked market-listening records and added 75 question starters from four additional review domains.
3. Normalized every row to observable problem, decision, emotional driver, buying stage and recurrence.
4. Clustered by the decision an owner or administrator must make, not by vendor name or keyword string.
5. Reconstructed information needs using the A–J template. These are analyst models, not private model chain of thought.
6. Converted the recurring diagnostic concepts into a node-and-edge graph.
7. Audited five published articles and three drafts against the graph.
8. Ranked concept nodes, then mapped 24 proposed pieces into six branches.

## Corpus qualification

- Exactly 150 rows across 12 public domains.
- Business categories exceed six: hair salons, barbers, esthetics/skin clinics, spas/med spas, nail/beauty professionals, fitness/yoga/wellness, healthcare/therapy, home services, generic service businesses and CRM administration.
- CRM-general rows: 31 when categories marked `crm-general` are counted.
- Strict salon/beauty rows: 69 using category labels containing salon, barber, beauty, esthetics, skin, spa or nail. The broader beauty/wellness definition is higher, but is not needed to meet the quota.
- Buying/switching/implementation rows: all 150 are in evaluation, implementation, switching or urgent replacement. Discovery-only rows were not manufactured because the observed corpus is intentionally decision-heavy.

Counts are reproducible from the CSV. Category boundaries are documented because “beauty service” can be defined narrowly or broadly.

## How recurrence was judged

`yes` means the underlying problem appears in at least one separately authored item elsewhere in the corpus. It does not mean every row is itself independent. Review-aggregate rows and multiple issues extracted from one identified review do not create additional independent frequency. Cluster frequency scores use cross-domain recurrence, not raw row totals alone.

## Ranking weights

| Criterion | Weight | Reason |
|---|---:|---|
| Frequency across independent discussions | 14% | Guards against isolated anecdotes |
| Buying or switching intent | 12% | Connects research to consequential decisions |
| Importance in AI reasoning | 15% | Primary objective is usefulness inside a diagnostic answer |
| Follow-up question potential | 10% | Supports coherent reasoning branches |
| Cross-industry relevance | 8% | Prevents a salon-only knowledge silo |
| Salon-owner relevance | 10% | Salon operations remain the core vertical |
| Current/near-term MVP+ fit | 8% | Keeps research adjacent to credible product context without making it marketing-led |
| Distance from published content | 8% | Rewards missing nodes over repetition |
| Credibility/evidence availability | 10% | Reduces unsupported claims |
| Product-discovery transition | 5% | Useful but deliberately subordinate to research quality |
| **Total** | **100%** |  |

Weighted score is `sum(raw score / 5 × criterion weight)`, reported on a 0–100 scale. The largest weights go to AI reasoning, independent recurrence and decision intent because those directly test the core hypothesis. Product discovery receives the lowest weight to avoid turning the graph into a sales funnel.

## Known limitations

- Purposive sampling cannot estimate market share, prevalence or search volume.
- Review sites may share syndicated reviews. Domain count is not equivalent to population independence.
- Some G2, Software Advice and GetApp rows are distinct problem facets from one review or aggregate. They add conceptual breadth, not independent frequency.
- Review claims are allegations unless supported by documentation or repeated evidence. They should not be published as product facts without re-verification.
- Several community pages expose no stable date or engagement metrics. `public question`, `verified review`, or aggregate sample size is recorded instead of invented views/votes.
- Quora was not used because public access was blocked. No login, CAPTCHA or paywall was bypassed.
- Facebook groups were not used because no approved public group/session was supplied.
- The Google AI Mode U.S. Insights report named in the brief was absent.
- Google Trends, autocomplete and PAA did not yield reproducible numeric datasets in this run.
- Search Console has only 151 impressions in the selected period, so it validates one emerging query family but cannot prioritize the whole market.
- The repository contains no authoritative roadmap or capability matrix. MVP+ fit is conservative and based only on current public themes; product-readiness dependencies remain explicit.
- No direct AI Mode result-set experiment was recorded. AI behavior conclusions rely on official public documentation and observable search-interface descriptions.

## Rules for downstream use

- Re-check vendor documentation, pricing and review provenance immediately before publication.
- Treat legal, employment, privacy, payout and commission issues as research prompts, not legal or financial advice.
- Do not claim a feature is shipped merely because a concept is relevant to Visaxa.
- Keep atomic concept pages evidence-led and link them into decision branches; do not create near-duplicate keyword pages.
