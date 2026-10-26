# Site Intelligence measurement and privacy basis

Status: **READY FOR OPERATOR PRIVACY DECISION**. Last reviewed: 2026-10-25. Production telemetry remains off.

This is a technical compliance assessment, not a legal opinion. It distinguishes what the application actually does, what providers may process to operate their services, and what still depends on the operator's entity, audience, and applicable law.

## Decision summary

Visaxa needs counts about editorial usefulness, not identities. The current first-party design has no visitor ID, cookie, user profile, raw-event store, cross-session history, advertising purpose, or cross-site use. Accepted events are reduced immediately to per-day Redis counters.

That design materially reduces privacy risk, but it does not make device-access and data-protection rules disappear. Browser JavaScript still reads the current path, a clicked element, copy success, and—in one bounded case—the referring hostname before sending an event. Vercel and Upstash necessarily receive network requests and may process IP addresses and other request data independently of the application aggregates.

The project direction supplied for this review is a US-based, US-focused public site. Mere worldwide accessibility is not the same as intentionally offering services to, or monitoring the behavior of, people in the EU or UK. GDPR Article 3 and the corresponding UK territorial test turn on establishment, intentional offering, or monitoring—not reachability alone. EDPB and ICO guidance also distinguish ordinary availability from targeting. This narrows the likely scope, but it is a factual/legal conclusion the operator must keep accurate as the business changes.

The recommended operating model is:

1. Use ordinary Vercel server/CDN statistics for short-window technical diagnostics where available. Do not represent those logs as complete article analytics.
2. For a confirmed US-established, US-directed deployment with no intentional EU/UK offering or behavioral monitoring, use the implemented aggregate `opt-out` policy: accurate notice, an accessible free disable control, no identifiers, and immediate daily aggregation.
3. Keep `opt-in` as the code and configuration default. Missing, invalid, or unapproved policy configuration must never silently become `opt-out`.
4. Do not deploy a first-visit banner for the approved US opt-out model. If the factual scope cannot be confirmed, remain in opt-in mode and decide separately how affirmative consent will be obtained.
5. Do not treat this conclusion as permission to expand into identifiers, profiles, targeted advertising, sensitive data, children-directed processing, or individualized journeys.

## Measurement inventory

All application event requests use `navigator.sendBeacon`, or a same-origin keepalive `fetch` fallback. The endpoint validates a fixed schema and increments bounded daily counters. It does not retain the request body after aggregation.

| Measurement | Purpose | Exact application fields | Mechanism | Individual tracking? | Consent considerations | Recommended implementation |
|---|---|---|---|---|---|---|
| `page_view` | Count article/page openings and route changes | event type, normalized source path, article slug, AI-referrer category when recognized | Client event after render or route change | No application identifier or event history; infrastructure still receives a request | Browser-side observation can fall within storage/access rules; UK exception may apply if all conditions hold; EU national treatment varies | Retain behind current gate. Do not infer precise views from incomplete Hobby logs |
| `internal_link_click` | Identify which exact editorial/navigation links are used | event type, source path, destination path, stable editorial link ID, link category, article slug, optional AI-referrer category | Capturing click listener, same-origin event | No visitor linkage | Core aggregate interaction statistic; same jurisdiction caveat as other client events | Retain |
| `article_next_click` | Measure intended article-to-article transitions | same fields as internal click, category `next_article` | Explicitly marked link click | No visitor linkage | Same as above | Retain as an exclusive category, not in addition to generic click |
| `research_question_copy` | Count successful use of a copyable research question | event type, source path, article slug, stable question ID, optional AI-referrer category | Event only after Clipboard API success | No copied text and no visitor linkage | Clipboard result is browser-side interaction information; not essential to deliver the requested copy action | Retain behind the gate |
| `product_cta_click` | Count movement from editorial/public pages toward product contact or comparison | event type, source path, destination path, stable link ID, category, optional AI-referrer category | Explicitly marked same-origin click | No visitor linkage and no conversion identity | Statistical purpose must remain content/product-navigation improvement, not individual attribution or advertising | Retain; never call it a conversion |
| `external_link_click` | Learn which cited external sources are opened | event type, source path, destination hostname only, stable link ID, category, optional AI-referrer category | External-link click | No visitor linkage; hostname can still reveal the selected source | Secondary value; adds destination processing | Retain only while editorial source usefulness is an active reporting need; review quarterly |
| AI-associated referral | Count recognized AI referrer categories by destination path | broad enum such as `ai_chatgpt`; source path | Client classifies `document.referrer`; full referrer URL is never sent | No visitor linkage; browser temporarily exposes the full referrer to page script | Secondary measurement; depends on referrer policy and cannot prove AI citation or recommendation | Retain category-only; collapse all non-AI/direct referrals to one value |
| Crawler requests | Count claimed/verified AI and search crawler document requests | timestamp, normalized path, status, agent classification, verification signal from imported provider log | Offline import of server/CDN records | No application visitor profile; provider logs may contain request-level data | Ordinary request processing and later statistical reuse remain separate legal questions | Keep separate from human events; import only provider data actually available and retain verification label |
| HTTP requests/errors | Operations, security, diagnosis | Provider-defined request/log fields | Vercel infrastructure logs | Potential request-level personal data at provider stage | May rely on service-operation/security purposes, but transparency, minimization, contracts, and retention still apply | Use Vercel's existing bounded logs; do not copy them into Redis merely to create analytics |

### Fields removed by this review

`deviceCategory` and UTM campaign fields were sent to the endpoint but never became aggregate dimensions or report output. They had no demonstrated value for the Research graph, so the client and validator no longer process them. Query strings continue to be removed from normalized paths. Non-AI referrers are no longer distinguished.

### Browser storage and identifiers

The conservative consent control stores one value, `granted` or `denied`, under `visaxa:analytics-consent:v1`. It is a preference, not a visitor ID, and is not included in events. No analytics cookie, random ID, fingerprint, session ID, account ID, or cross-event key exists. The control itself is a storage/access technology and must be described accurately.

### Infrastructure processing

Visaxa's Redis hashes contain aggregate counters only. This does not mean requests are anonymous at every processing stage. Vercel terminates/delivers the HTTP request and Upstash receives the server-to-server Redis request. Their processing, security logs, contractual roles, and retention must be assessed separately. The application does not copy visitor IP addresses into aggregate keys.

## Three analytics levels

### Level A — technical server statistics

Vercel Runtime Logs expose function and middleware invocations and only limited static-request visibility. Cached/static article delivery is therefore not a complete page-view source. Hobby retention is short, and Log Drains require a paid Pro or Enterprise plan. No paid logging service is authorized.

Use the available logs for recent errors, endpoint traffic, security, and bounded crawler investigation. Do not claim they provide durable or complete article views, link clicks, question copies, or client-side transitions.

### Level B — aggregate editorial engagement

The first-party client records the five essential interaction types accurately and aggregates immediately. It is less intrusive than visitor analytics, but it still initiates optional browser-originated requests and reads interaction state. The UK now has an express statistical-purposes exception with conditions. France recognizes a narrower audience-measurement exemption. EDPB Guidelines 2/2023 define the broad technical scope of Article 5(3) but expressly do not settle which exemptions apply; those depend on law as implemented in each member state.

### Level C — individual analytics

Persistent identifiers, unique visitors, journey reconstruction, profiles, fingerprinting, session replay, advertising, retargeting, and individual conversion attribution are prohibited by the product decision and are not implemented.

## Jurisdiction matrix

| Jurisdiction | Established requirement | Supported potential exception | Fit of current design | Unresolved applicability |
|---|---|---|---|---|
| United Kingdom | UK GDPR territorial scope generally requires UK establishment, offering goods/services to people in the UK, or monitoring their behavior there. ICO guidance says global availability alone does not automatically establish scope. PECR has no standalone overseas territorial test, creating residual uncertainty for a non-UK site | If in scope, ICO's 2026 statistical-purposes exception covers sole-purpose aggregate service/site improvement analytics if clear information and a simple, free objection are provided; individual data must not be retained after aggregation | Strong technical fit for the exception, but this review does not rely on it for the US deployment | Confirm no UK establishment, intentional UK offer, or behavioral monitoring; obtain legal advice if UK-directed activity begins |
| EU/EEA generally | GDPR Article 3 requires EU establishment, intentional offering of goods/services to people in the Union, or monitoring their behavior there. EDPB guidance says mere accessibility is insufficient and monitoring requires purposeful tracking and subsequent analysis/profiling | National implementations of ePrivacy Article 5(3) vary; there is no single EU-wide analytics exemption established here | Aggregate unlinked counters are materially different from profiling, but that does not itself prove every national device-access rule is out of scope | Confirm no EU establishment or EU-directed offer and no later use of the counters for behavioral analysis/profiling. Reassess before targeting an EU market |
| France (example member state, not an EU-wide rule) | Consent generally precedes reading/depositing a tracer | CNIL permits qualifying audience measurement on opt-out where it is limited to audience measurement/A-B testing, single-publisher scope, no cross-use, IP truncation, notice/objection, and bounded tracer life | Some conditions fit; no visitor ID or cross-use exists. Processor-level IP handling and exact qualification have not been established | Formal French applicability and provider processing require review before reliance |
| United States — New York operating context | No general NY website-tracking statute identified by NY OAG, but privacy representations and controls must be truthful and not misleading; federal and sector-specific rules still apply | First-party aggregate measurement without sale, sharing, sensitive-data use, or profiling generally presents fewer consent triggers | Strong fit if disclosures remain exact and controls work | Confirm operator entity/location, whether children or regulated-sector data is implicated, and actual audience |
| United States — state comprehensive laws | Coverage, definitions, duties, and thresholds vary. Sale/share/targeted-advertising opt-outs are distinct from basic first-party measurement | Entity/threshold exemptions and non-personal or deidentified-data rules may apply, but differ by state | No sale, targeted advertising, persistent identity, or cross-context use is designed | Revenue, data volume, legal entity, state coverage, and whether transient request data is personal data are not recorded; a blanket US conclusion is not supportable |

## Official source record

Accessed 2026-10-25:

1. UK ICO, [Guidance on the use of storage and access technologies](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/), final guidance updated 29 April 2026.
2. UK ICO, [What are the exceptions?](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/what-are-the-exceptions/), especially the statistical-purposes conditions and objection requirement.
3. European Data Protection Board, [Guidelines 2/2023 on the Technical Scope of Article 5(3)](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-22023-technical-scope-art-53-eprivacy-directive_en), final version 16 October 2024.
4. European Data Protection Board, [Guidelines 3/2018 on the territorial scope of the GDPR](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-32018-territorial-scope-gdpr-article-3-version_en), final version 12 November 2019, including the accessibility, targeting, and monitoring tests.
5. EUR-Lex, [Regulation (EU) 2016/679](https://eur-lex.europa.eu/eli/reg/2016/679/oj), Article 3 territorial scope.
6. EUR-Lex, [Directive 2002/58/EC](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32002L0058), Article 5(3).
7. CNIL, [Use analytics on your websites and applications](https://www.cnil.fr/fr/node/677), audience-measurement exemption conditions.
8. New York Attorney General, [Website Privacy Controls: A Guide for Business](https://ag.ny.gov/resources/organizations/business-guidance/website-privacy-controls), updated 15 July 2024.
9. US Federal Trade Commission, [Privacy and Security](https://www.ftc.gov/business-guidance/privacy-security), including the requirement to honor privacy representations.
10. California Privacy Protection Agency, [Law and Regulations](https://cppa.ca.gov/regulations/), including the CCPA statute and regulations effective 1 January 2026.
11. Vercel, [Runtime Logs](https://vercel.com/docs/logs/runtime), updated 28 August 2026.
12. Vercel, [Working with Drains](https://vercel.com/docs/drains), including plan availability and cost constraints.

## Options compared

| Option | What it measures accurately | What is lost | Privacy/control burden | Decision |
|---|---|---|---|---|
| A. Server statistics only | Recent request/error/function data and some crawler evidence | Reliable cached article views; every client-side click, copy, and SPA transition | Lowest additional application processing, but provider logs still require governance | Safe fallback while Production telemetry is off; insufficient for the editorial questions |
| B. Aggregate first-party analytics with opt-out | All five essential editorial measurements plus bounded secondary events | Nothing material for stated objectives | Proportionate candidate for the represented US-established, US-directed deployment; still requires truthful notice, working opt-out, threshold/sector checks, and scope governance | Recommended only after the operator confirms the factual prerequisites below |
| C. Explicit opt-in | Same accurate events, but only for visitors who affirmatively allow them | Coverage is incomplete and likely biased; a hidden settings-only control yields very little data | Most conservative across uncertain jurisdictions; requires understandable choice UX if activated | Keep as current global-safe implementation; do not deploy the first-visit prompt until operator decides |
| Narrow hybrid | Server statistics for all; exemption-based opt-out in approved jurisdictions; opt-in elsewhere | Complexity, uncertain geo decisions, inconsistent counts | Highest implementation and governance risk | Not justified at current scale; do not build now |

## Minimal change proposal

### Keep unchanged

- Immediate daily aggregation and expiry.
- Fixed event/type allowlists, normalized paths, stable editorial IDs, same-origin endpoint, and bounded payloads.
- Preference controls, fail-closed storage behavior, and `opt-in` as the configuration default.
- Separation of human events, crawler observations, and externally reported AI citations.
- Production feature flags set to off.

### Remove

- Device-category processing.
- UTM campaign processing.
- Non-AI referrer distinctions.

### Implemented but inactive pending operator decision

- `NEXT_PUBLIC_SITE_INTELLIGENCE_POLICY=opt-out` permits aggregate events while preference is unset and stops them after a saved rejection.
- `opt-in` requires `granted`; invalid policy values and unavailable preference storage fail closed.
- Privacy-page and footer controls expose the same persistent choice without creating an identifier.

### Do not implement

- Persistent IDs, unique visitors, profiles, session histories, fingerprinting, precise location, cross-site data, advertising, individual attribution, or a complex consent-management platform.
- Paid Vercel drains or unreliable geolocation solely to choose a privacy rule.

## Required operator decision

Before any Production activation, record:

1. The operating legal entity is US-established and the site is intentionally directed to the US market, rather than offering services into the EU/EEA or UK.
2. The site does not monitor EU/UK behavior for profiling or individualized decisions; these aggregate counters will not be repurposed for that use.
3. Applicable US comprehensive-state-law thresholds, sector rules, and children-directed-service rules do not impose a different requirement for this deployment.
4. Vercel and Upstash contracts/configuration match the public notice, retention, and security statements.
5. The operator approves `NEXT_PUBLIC_SITE_INTELLIGENCE_POLICY=opt-out` for Production and accepts the governance obligation to reassess if markets, purposes, fields, providers, or laws change.

Until those facts are supplied, Production telemetry remains off. Completion of this audit is not authorization to deploy or activate analytics.
