# Site Intelligence hosting decision

Status: **HOSTING DECISION REQUIRED**. Reviewed 2026-10-25 against current provider documentation and the authenticated project dashboard.

## Current risk

The authenticated Vercel project is on **Hobby**. Visaxa Site is not credibly personal/non-commercial: it describes and promotes a commercial SaaS product and includes walkthrough/product links. Vercel's Fair Use Guidelines state that Hobby is restricted to non-commercial personal use and explicitly include advertising the sale of a product or service as commercial usage. The current deployment therefore conflicts with the published Hobby examples even though the site does not collect payment.

Sources:

- Vercel [Terms of Service](https://vercel.com/legal/terms), updated 2026-10-19.
- Vercel [Fair Use Guidelines](https://vercel.com/docs/limits/fair-use-guidelines), commercial-use section, updated 2026-09-14.
- Vercel [Hobby plan](https://vercel.com/docs/plans/hobby), which repeats the non-commercial limitation.

## Options

| Option | Compatibility with current application | Ongoing cost | Migration effort | Decision |
|---|---|---:|---|---|
| Vercel Pro | Native Next.js 16 App Router, route handlers, environment variables, previews, custom domain, HTTPS, Upstash REST, rollback and current workflow | Paid; current price must be confirmed at purchase time | Low | Technically simplest compliant route, but purchase is not authorized |
| Cloudflare Workers Free | Cloudflare currently recommends `vinext` on Workers for full-stack Next.js. Workers provides route handlers, secrets, custom domains, HTTPS and preview tooling; free allowance is currently 100,000 requests/day with 10 ms CPU/invocation | $0 within free limits | Medium/high: adapter/build/runtime differences, regression work for Next.js 16, API route, MDX/SSR, metadata, sitemap, deployment protection and rollback | Most plausible $0 commercial path, but not a drop-in migration and not yet acceptance-tested |
| Cloudflare Pages static export | Straightforward only for static Next.js output | $0 within plan limits | High because the existing analytics API and dynamic endpoints need a separate Worker or redesign | Not recommended as the direct migration path |

Cloudflare sources: [Next.js guidance](https://developers.cloudflare.com/pages/framework-guides/nextjs/) and [Workers pricing](https://developers.cloudflare.com/workers/platform/pricing/).

## Recommendation

Do not activate Production analytics on Vercel Hobby. The immediate decision is either:

1. authorize Vercel Pro as the low-engineering path; or
2. authorize a bounded Cloudflare Workers migration spike that proves the current Next.js build, API endpoint, secrets, preview environment, custom domain, SEO/SSR and rollback before any DNS change.

No compliant zero-cost Vercel option is confirmed by the published terms. Cloudflare Workers Free may provide a $0 commercial path, but compatibility remains unproven until the migration spike passes.

## WAF consequence

Vercel documents one Hobby rate-limit rule per project and 1,000,000 included allowed requests, but also publishes a $0.50-per-million rate. Because Hobby itself is not a compliant production host for this site and applying a rule requires accepting a pricing dialog and publishing a Production firewall change, no WAF rule was applied. If Vercel Pro is authorized, scope the rule only to `POST /api/site-intelligence/events`, begin in log mode, then use a conservative fixed window such as 60 requests per source per minute after reviewing real traffic. Regional counters and forged browser requests remain limitations.

