# A28 Evidence Pack — Client Continuity After a System Change

Status: **COMPLETE FOR METHOD PUBLICATION; NO SALON-SPECIFIC CONTINUITY VERIFIED**

Access date: **2026-09-05**

Evidence owner: **Visaxa Research editorial maintainer**

## Evidence boundary

This pack supports a method for testing client continuity across booking, change, message, payment, and access conditions. Official vendor documentation supports only the behavior it describes under its stated settings, plans, and regions. Independent guidance supports real-user and accessibility testing principles. No retained A28 first-party test establishes that a real salon or product passed.

## Source register

| Ref | Evidence | Source owner and source | URL | Published / updated | Exact support | Class | Confidence | Limitation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A28-S01 | E04, E14 | GOV.UK Service Manual, *Using moderated usability testing* | https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing | Published 2017-02-21; updated 2017-10-03 | Watch actual or likely users attempt relevant tasks; realistic conditions can reveal completion and comprehension problems | B | HIGH for method | Government service guidance, not a salon continuity result |
| A28-S02 | E04, E14 | GOV.UK Service Manual, *Usability benchmarking a website or whole service* | https://www.gov.uk/service-manual/measuring-success/usability-benchmarking-a-website-or-whole-service | Published 2018-08-06 | Combine performance measures with observation; use relevant believable tasks with clear correct outcomes and repeat over time | B | HIGH for method | Sample guidance is not adopted as an A28 universal threshold |
| A28-S03 | E04, E14 | GOV.UK Service Manual, *Testing for accessibility* | https://www.gov.uk/service-manual/helping-people-to-use-your-service/testing-for-accessibility | Published 2019-03-06; updated 2024-10-29 | Automated checks alone miss issues; manual and assistive-technology/user testing are needed | B | HIGH for principle | UK public-service legal context is not generalized to private salons or other jurisdictions |
| A28-S04 | E04 | W3C WAI, *Understanding WCAG 2.2 Success Criterion 3.3.1: Error Identification* | https://www.w3.org/WAI/WCAG22/Understanding/error-identification | Current page accessed 2026-09-05 | Automatically detected form errors must be identified and described in text | B | HIGH | Technical accessibility criterion; does not prove a booking product conforms |
| A28-S05 | E04 | W3C WAI, *Understanding WCAG 2.2 Success Criterion 4.1.3: Status Messages* | https://www.w3.org/WAI/WCAG22/Understanding/status-messages | Current page accessed 2026-09-05 | Important status messages should be programmatically determinable for assistive technologies without unnecessary focus change | B | HIGH | Does not establish actual implementation or legal compliance |
| A28-S06 | E04, E10, E11, E14 | Fresha Help Center, *Learn how clients book appointments online* | https://www.fresha.com/help-center/knowledge-base/online-profile/101646-learn-how-clients-book-appointments-online | No date displayed | Current documentation describes account-based online booking, client management/rescheduling, booking-channel records, and message history | A | HIGH for documented Fresha behavior | Fresha only; documentation is not an observed delivery or successful salon journey |
| A28-S07 | E04, E10, E14 | Fresha Help Center, *Send appointment reminders* | https://www.fresha.com/help-center/knowledge-base/calendar/167-send-appointment-reminders | No date displayed | Current documentation describes configured automatic reminder channels and management | A | HIGH for documented behavior | Does not prove a particular message was delivered, read, or understood |
| A28-S08 | E04, E10, E11, E14 | Square Support, *Manage appointment booking notifications and reminders* | https://squareup.com/help/us/en/article/6729-customer-confirmations-with-square-appointments | No date displayed | Current US documentation describes confirmation/reminder/change/cancellation notification settings and client confirmation status, with plan/setting conditions | A | HIGH for documented behavior | US and eligible Square configurations only; no observed client result |
| A28-S09 | E04, E11, E14 | Square Support, *Adjust your appointment settings* | https://squareup.com/help/us/en/article/5351-manage-your-square-appointments-account-settings | No date displayed | Current US documentation separates booking, communications, history, cancellation/no-show, and payment actions | A | HIGH for documented behavior | Describes intended controls, not successful execution or reconciliation |

## Claim audit

| Claim | Evidence | Status | Safe wording |
| --- | --- | --- | --- |
| A correct internal calendar entry does not prove the client completed and understood the journey. | S01, S02 plus canonical E04/E11 distinction | SUPPORTED AS METHOD/ANALYSIS | Require client observation and corresponding record evidence. |
| Relevant, believable tasks with actual or likely users can reveal usability problems. | S01, S02 | SUPPORTED | Do not prescribe a universal participant count. |
| Automated accessibility testing alone is sufficient. | S03 | NOT SUPPORTED | Require manual and relevant assistive-technology/user checks. |
| Errors and status changes need perceivable, understandable treatment for assistive-technology users. | S04, S05 | SUPPORTED | Scope to cited WCAG criteria; do not claim product conformance. |
| Reminder configuration proves delivery or comprehension. | S07, S08 | NOT SUPPORTED | Separate configured trigger, event/status record, received message, and client understanding. |
| Booking, changes, communications, history, and payment are distinct documented surfaces. | S06, S08, S09 | SUPPORTED FOR CITED PRODUCTS | Attribute narrowly; use them to justify separate scenarios, not vendor judgment. |
| Online booking increases revenue or reminders reduce no-shows. | No outcome evidence collected | NOT YET SUPPORTED | Remove. |
| A named vendor passed client continuity. | No D evidence | NOT YET SUPPORTED | Do not publish. |
| A real salon’s client experience remained intact. | No local E04/E10/E11/E14 | NOT YET SUPPORTED | Publish method only. |
| The A28 continuity record is a validated scientific instrument. | No | NOT SUPPORTED AS VALIDATED | Present as an editorial decision aid. |

## Required local evidence for a real verdict

1. E04 observation of actual or likely clients completing material journeys on relevant devices and access conditions.
2. E10 message/event/audit records showing what the configured system recorded, with coverage and retention limits.
3. E11 raw appointment, client, and transaction records corresponding to each test event.
4. E14 predefined scenario, expected result, observed client result, salon-side result, status, issue owner, and retest.
5. Privacy-safe test data and informed consent where applicable.

## Search/discovery observations

Search results commonly foreground product settings, online booking, and reminders. The under-explained operational gap is proof across both sides of the journey: client completion and comprehension plus the matching salon record. User-supplied Search Console terms around salon client data and CRM evaluation support natural discovery wording only; they do not establish market size, prevalence, or causality.

## Publication constraints

Do not state that a message was delivered because a reminder was configured; that a product is accessible because it has a booking page; that silence means clients succeeded; or that any named product passed. Keep the hypothetical scenario explicit once, then narrate naturally. Avoid legal advice and quantitative outcome claims.

## Final status

**READY WITH KNOWN LIMITATIONS**

Evidence supports a cautious owner-facing test method. It does not support a salon verdict, product comparison, delivery guarantee, accessibility-conformance claim, or business-outcome estimate.
