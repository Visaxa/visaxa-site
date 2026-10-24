# Visaxa Site Intelligence MVP

Status: deploy-ready code; production collection disabled by default.  
Architecture audit: 2026-10-24.

## Audited architecture

- Next.js 16 App Router with statically generated public pages and MDX Research articles.
- Production is deployed through Vercel, as evidenced by the repository deployment workflow and production marker. No separate CDN or reverse proxy configuration is present in the repository.
- No existing analytics SDK, database, event collector, cookie banner, consent manager, authenticated admin area, or private reporting UI was found.
- The privacy notice describes hosting/security access data but does not yet disclose this first-party interaction measurement.
- Vercel Runtime Logs are short-lived. Complete static/edge request export requires a Vercel Log Drain, an operator-configured Pro/Enterprise feature. Application middleware would not be an honest substitute for complete CDN visibility.

## Decision

Human interactions are sent to a first-party endpoint only when both public and server feature flags are enabled. The browser sets no analytics cookie, has no persistent visitor identifier, and sends no form values, copied text, full referrer, IP address, or arbitrary query parameters. The endpoint writes daily aggregate counters only. Raw browser events are not retained.

The aggregate store uses the Vercel/Upstash Redis REST contract already available through common Vercel integrations. No client dependency is added. Keys expire after `SITE_INTELLIGENCE_AGGREGATE_DAYS` (default 365, bounded to 7–366 days).

Crawler observation is a separate offline import of Vercel Log Drain JSON/NDJSON. It never shares a metric with human events or AI referrals. User-Agent matches remain `claimed_*`. A record becomes `verified_*` only when an independent upstream process adds a matching `verifiedProvider` after CDN verification, official IP-range validation, or provider-supported forward/reverse DNS validation.

## Collected human fields

Event type, normalized source path, normalized destination path or external host, stable link ID, article slug, question ID, referrer category, coarse device category, and allowlisted `utm_source`, `utm_medium`, and `utm_campaign` values. Campaign values must match a bounded non-free-text syntax.

Supported events: `page_view`, `internal_link_click`, `external_link_click`, `research_question_copy`, `article_next_click`, and `product_cta_click`. The last two require `data-analytics-event` on a designated link. Link text is never an identifier. The A18 copy control demonstrates the supported question-copy path; an event is emitted only after Clipboard API success.

## Safety boundaries

- Collection is off unless `NEXT_PUBLIC_SITE_INTELLIGENCE_ENABLED=true` and `SITE_INTELLIGENCE_ENABLED=true`.
- Same-origin POST only; 4 KB body limit; strict event allowlist; bounded values; no public GET endpoint.
- A small in-process flood guard limits accidental bursts. It is not a distributed abuse control; production should also use Vercel Firewall rate limiting.
- Storage failure returns 204 and never affects rendering, navigation, or copying.
- No raw events, visitor profiles, fingerprinting, cross-site tracking, full URLs, arbitrary referrers, cookies, headers, or IP addresses are stored.
- Synthetic QA must run with collection disabled or with a separate nonproduction store.

## Enablement checklist

1. Provision a private Redis REST store and set server-only `KV_REST_API_URL` and `KV_REST_API_TOKEN`.
2. Update and legally review `/privacy`; decide whether consent is required in the jurisdictions actually served. If consent is required, add an approved consent control before enabling the public flag.
3. Set `SITE_INTELLIGENCE_AGGREGATE_DAYS` if the default 365-day aggregate retention is unsuitable.
4. Add a Vercel Firewall rule for `/api/site-intelligence/events`.
5. Enable both feature flags only after steps 1–4.
6. For crawler coverage, configure a signed Vercel Log Drain or export logs manually. Remove/omit `proxy.clientIp` before durable storage. The importer stores no IP or UA.

## Operations

- `npm run intelligence:report -- 7` (also 28 or 90) prints the private report. Missing storage is reported as `Not available`, never zero.
- `npm run intelligence:import-crawlers -- path/to/vercel-log.ndjson` imports aggregate crawler observations.
- Bing Webmaster Tools citation counts and Google Search Console data remain external datasets. They are not scraped or combined with first-party metrics.

## Registry and verification references

The central registry is `src/lib/site-intelligence/crawlers.mjs`. Verification should follow current provider documentation: OpenAI's published crawler/IP guidance, Google's crawler verification guidance, Bing's Verify Bingbot method, and any official Anthropic or Perplexity documentation available at review time. Registry entries require periodic review; names alone are not proof of identity.

## Costs and limitations

Human aggregation requires a Redis REST store; cost depends on the selected Vercel/Upstash plan and event volume. Complete crawler visibility requires Vercel Pro/Enterprise Log Drains or periodic log export. With no drain, crawler data is `Not available`. Runtime logs alone may omit cache hits and are retained only briefly. This MVP cannot prove that a copy became an AI prompt, that a crawler request became a citation, or that an AI referral came from a particular generated answer.
