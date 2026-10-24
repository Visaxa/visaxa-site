# Site Intelligence production activation

Status: READY FOR OPERATOR CONFIGURATION. Production collection remains disabled.

## What is being activated

The browser sends anonymous editorial interaction events to `/api/site-intelligence/events`. The endpoint validates and reduces each event to daily aggregate Redis counters. It does not store raw events, cookies, persistent visitor IDs, IP addresses, form values, copied text, or arbitrary query strings.

Event categories are exclusive. An ordinary internal link emits `internal_link_click`; a designated continuation emits `article_next_click`; a product-oriented link emits `product_cta_click`; an external reference emits `external_link_click`. One interaction does not also emit the generic category. Page views come from completed client rendering and route changes, not link inference or prefetching.

## Redis setup

Use a private Upstash Redis database connected to the Vercel project. Direct Upstash credentials use:

- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`

The Vercel-managed Upstash integration may instead inject:

- `KV_REST_API_URL`
- `KV_REST_API_TOKEN`

The application accepts either pair and never exposes them through `NEXT_PUBLIC_*`. Configure credentials for Preview first. Use `SITE_INTELLIGENCE_NAMESPACE=visaxa-site-intelligence-qa` for isolated acceptance testing. Production should use a distinct namespace such as `visaxa-site-intelligence-production`.

Do not paste credentials into source, build logs, browser settings, or CLI output. A changed Vercel environment variable requires a new deployment.

## Feature flags and retention

- `SITE_INTELLIGENCE_ENABLED=true` enables accepted server writes.
- `NEXT_PUBLIC_SITE_INTELLIGENCE_ENABLED=true` includes browser delivery in the deployed client bundle.
- `SITE_INTELLIGENCE_AGGREGATE_DAYS=365` controls aggregate retention and is bounded by code to 7–366 days.

Both flags are required for collection. Set them only in Preview until acceptance passes. Raw browser events are not retained. Each daily aggregate key receives an expiration.

## Privacy gate

The public privacy notice describes the event categories, absence of analytics cookies and persistent identifiers, aggregate retention, Upstash storage, and the separate request-level processing performed by Vercel and Upstash.

Before production enablement, the operator must decide, with advice appropriate to the actual jurisdictions and audience, whether this cookieless aggregate measurement can operate without prior consent. This document does not make that legal determination. If consent is required, do not enable the public flag until a real consent control gates `SiteIntelligenceClient`; a decorative banner is insufficient.

## Abuse protection

The endpoint has a strict event allowlist, bounded fields, a 4 KB request limit, same-origin rejection, no read method, fixed Redis key prefixes, and fail-silent storage behavior. Same-origin headers and CORS do not prove a genuine human request. Sophisticated automation can forge browser events.

In the Vercel project dashboard:

1. Open **Firewall** and create a rule scoped to path `/api/site-intelligence/events` and method `POST`.
2. If the current plan exposes rate limiting, start with 60 requests per minute per source and a temporary deny action. Review legitimate traffic before tightening it.
3. If plan-level rate limiting is unavailable, keep the in-process 120-request/minute safety valve, set an Upstash usage budget/alerts, and review Function/Firewall logs after activation. This is weaker distributed protection and must be recorded as a known limitation.
4. Deny non-POST traffic to the endpoint only if this does not interfere with Vercel platform behavior. The application already returns `405` for public reads.

Do not claim that these controls make analytics immune to fabricated events.

## Storage operations and cost model

Each event is one HTTPS pipeline request, but Upstash meters the Redis commands inside it:

| Interaction | Aggregate increments | Expiry | Commands |
|---|---:|---:|---:|
| Page view on an article | 3 | 1 | 4 |
| Internal link click | 5 | 1 | 6 |
| Research-question copy | 4 | 1 | 5 |
| AI-referral page view | one additional referral increment | — | +1 |

A reader opening three articles and following two internal links produces approximately 24 commands. At page-view-only volume, 1,000 views/day is about 120,000 commands/month and 10,000 views/day about 1.2 million commands/month. Link, copy, CTA, crawler-import, read/report, replication, and retry activity is additional.

As checked on 2026-10-24, Upstash advertises 500,000 monthly commands on its free tier and pay-as-you-go commands at $0.20 per 100,000. Therefore 1.2 million page-view-only commands would be about $2.40/month on pay-as-you-go before additional events, reads, bandwidth, replication, or plan changes. Provider pricing must be rechecked before activation.

## Isolated acceptance test

1. Configure Preview with private test credentials and `SITE_INTELLIGENCE_NAMESPACE=visaxa-site-intelligence-qa`.
2. Enable both flags in Preview and redeploy.
3. Open a Research article and confirm one page-view counter.
4. Follow a standard internal editorial link and confirm source path, destination path, category, and link ID.
5. Follow a designated next-article link and confirm only `article_next_click`.
6. Open an external research reference and confirm only its hostname is retained.
7. Successfully copy an instrumented question and confirm one `research_question_copy`; deny Clipboard permission and confirm no copy event.
8. Exercise client navigation, back/forward, refresh, modifier-click, middle-click, and a simulated unavailable endpoint.
9. Run all three report windows and reconcile exact counts.
10. Delete the QA namespace through the provider console after acceptance. Never point this procedure at the production namespace.

The repository test suite contains a provider-compatible isolated Redis REST harness, but that is not a substitute for the Preview test against the actual configured provider.

## Reporting

Run privately from an environment containing server-only Redis credentials:

```text
npm run intelligence:report -- 7
npm run intelligence:report -- 28
npm run intelligence:report -- 90
```

The report separates dataset availability, page-view events, link-specific transitions, question-copy counts, AI-associated referrals, and crawler observations. `0` means storage was available and no matching aggregate occurred. `Not available` means the dataset could not be read. Page views are not unique visitors.

## Crawler readiness

Crawler logs remain separate from browser analytics and AI referrals. User-Agent-only observations remain `claimed`. Reliable complete edge visibility requires an operator-configured Vercel Log Drain or a bounded manual export. Leave crawler reporting unavailable if the current plan does not provide the required logs. A crawler request is not proof of an AI citation.

## Production activation

After Preview acceptance and privacy approval:

1. Connect the production Redis resource or namespace.
2. Configure the server credentials and retention in Production.
3. Configure and verify the Firewall rule.
4. Set both production feature flags to `true`.
5. Redeploy once.
6. Generate one operator-authorized smoke event sequence and reconcile it in the private report.
7. Record activation time, namespace, retention, WAF rule, and responsible operator outside public source control.

## Rollback

Immediate write stop: set `SITE_INTELLIGENCE_ENABLED=false` in Vercel Production and redeploy. The endpoint then returns `204` without Redis writes, even if an older client still attempts delivery.

Complete browser stop: also set `NEXT_PUBLIC_SITE_INTELLIGENCE_ENABLED=false` and redeploy. Public rendering and navigation do not depend on analytics. Existing aggregate keys expire according to retention; delete them manually only under an approved data-removal procedure.
