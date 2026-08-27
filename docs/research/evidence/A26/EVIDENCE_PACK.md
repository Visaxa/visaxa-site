# A26 Evidence Pack — Operational Go-Live Acceptance

Status: **COMPLETE FOR METHOD PUBLICATION; NO SALON-SPECIFIC OPERATION ACCEPTED**

Access date: **2026-08-27**

Evidence owner: **Visaxa Research editorial maintainer**

## Evidence boundary

This pack supports a method for deciding D23. Official sources show that roles, client booking, exceptions, refunds and financial reporting are separate behaviors with specific conditions. They do not prove that a salon’s configuration works. Only observed role tests, client-journey evidence, financial tie-outs and a signed acceptance record can establish a local result.

## Primary source register

| Ref | Evidence | Publisher and source | URL | Published / updated | Claim supported | Confidence | Limitation | Refresh |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A26-S01 | E14 | GOV.UK Service Manual, Using moderated usability testing | https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing | Published 2017-02-21; updated 2017-10-03 | Observe actual or likely users attempting relevant, believable tasks; realistic data and devices can expose contextual problems | HIGH | Usability guidance, not salon go-live certification | Annual |
| A26-S02 | E14 | GOV.UK Service Manual, Quality assurance: testing your service regularly | https://www.gov.uk/service-manual/technology/quality-assurance-testing-your-service-regularly | Updated 2017-06-28 | Test both normal and unusual conditions; test usability as well as technical behavior | HIGH | General public-service guidance; article adapts the principle to salon scenarios | Annual |
| A26-S03 | E14 | Salesforce Trailhead, Best Practices for Effective Software Testing | https://trailhead.salesforce.com/content/learn/modules/software-testing-fundamentals/follow-testing-best-practices | No date displayed | Acceptance criteria are conditions software must meet to be accepted by a customer or user | MEDIUM-HIGH | Educational vendor source; not salon-specific and not an acceptance result | 2026-11-27 |
| A26-S04 | E02, E14 | Fresha Help Center, Manage permission roles | https://www.fresha.com/help-center/knowledge-base/team/100692-manage-permission-roles | No date displayed | Access depends on assigned role; role changes apply to assigned members; no-access prevents workspace access | HIGH for documented behavior | Fresha only; current documentation does not prove a salon configured roles correctly | 2026-09-27 |
| A26-S05 | E04, E14 | Fresha Help Center, Learn how clients book appointments online | https://www.fresha.com/help-center/knowledge-base/online-profile/101646-learn-how-clients-book-appointments-online | No date displayed | Client journey includes service, staff, real-time availability, date/time, price and booking details | HIGH for documented behavior | Fresha’s current journey only; channels and plans may differ | 2026-09-27 |
| A26-S06 | E04, E14 | Fresha Help Center, Limit online service availability | https://www.fresha.com/help-center/knowledge-base/catalog/100643-limit-online-service-availability | No date displayed | Bookability can depend on overlapping service limits, staff shifts, locations and required resources | HIGH for documented behavior | Specific current Fresha configuration; not a universal product rule | 2026-09-27 |
| A26-S07 | E02, E04, E14 | Square Support, Manage booking cancellations and prepayment policies | https://squareup.com/help/us/en/article/5493-set-a-custom-cancellation-policy-with-square-appointments | No date displayed | Cancellation, no-show, prepayment and refund outcomes depend on policy and appointment state | HIGH for documented behavior | US documentation and eligible Square plans/modes only | 2026-09-27 |
| A26-S08 | E02, E14 | Fresha Help Center, Refund a sale | https://www.fresha.com/help-center/knowledge-base/sales/368-refund-a-sale | No date displayed | Full/partial and item/amount refunds can have different reporting consequences | HIGH for documented behavior | Fresha only; does not prove a real refund was reconciled | 2026-09-27 |
| A26-S09 | E02, E14 | Fresha Help Center, Payments summary report | https://www.fresha.com/help-center/knowledge-base/reports/345-payments-summary-article-1 | No date displayed | Reports distinguish payments, refunds, methods, clients, locations and team members; some liability activity is reported elsewhere | HIGH for documented behavior | Report definitions are Fresha-specific and may change | 2026-09-27 |
| A26-S10 | E02, E14 | Fresha Help Center, Finance summary report | https://www.fresha.com/help-center/knowledge-base/reports/335-finance-summary-article-1 | No date displayed | Sales, payments, liabilities, deposits, gift-card redemption and timing are distinct report states | HIGH for documented behavior | Fresha only; not evidence that a salon’s closeout balances | 2026-09-27 |

## Claim audit

| Claim | Status | Basis | Safe publication wording |
| --- | --- | --- | --- |
| A realistic test should use relevant, believable tasks with actual or likely users | SUPPORTED | S01 | Present as the reason to test with the people who perform the work |
| Normal and unusual conditions can reveal different problems | SUPPORTED | S02 | Use ordinary and exception scenarios; do not promise exhaustive coverage |
| Permission settings can change whether a staff member can complete work | SUPPORTED for the cited product example | S04 | Attribute the example and require a local role test |
| A staff-created appointment proves the online client journey | NOT SUPPORTED | S05, S06 show additional client-side conditions | Explicitly reject as sufficient proof |
| Cancellation, no-show and refund behavior can depend on policy and state | SUPPORTED for cited product examples | S07, S08 | Attribute narrowly; do not generalize exact behavior to every vendor |
| A completed checkout proves financial closeout | NOT SUPPORTED | S09, S10 distinguish several report and liability states | Require local reconciliation; do not claim a named vendor passes |
| A particular salon is ready to go live | NOT YET SUPPORTED | No E02/E04/E14 local artifacts | Do not publish a readiness verdict |
| A named vendor meets every salon acceptance scenario | NOT YET SUPPORTED | Documentation is not observed execution | Do not publish |

## Required local evidence for an actual verdict

1. E02 observation notes for owner/manager, front desk and service-provider tasks using intended accounts, permissions and devices.
2. E04 evidence of the client journey from availability through booking, confirmation, change and downstream record.
3. E07 signed onboarding scope, acceptance terms, unresolved commitments and responsibility boundaries.
4. E14 scenario register containing expected result, actual result, status, defect/condition, owner, deadline, retest and launch consequence.
5. Financial tie-out covering the salon’s used payment states, refunds, liabilities, tips, discounts, staff consequences and closeout.

Without these artifacts, the article may publish the decision method but cannot call a salon operationally accepted.

## Known limitations

- No salon account, role test, client booking or payment scenario was observed.
- No onboarding contract or acceptance clause was reviewed for a real implementation.
- No local defect ledger, retest record or go-live authorization was available.
- Official vendor pages are selected examples, not a capability survey or ranking.
- Pages without displayed update dates require monthly refresh while their examples remain in the article.
