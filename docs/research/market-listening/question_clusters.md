> Architecture status: supporting research. Canonical IDs and rules are defined in [Visaxa Decision Framework SOT](../../master/00_VISAXA_DECISION_FRAMEWORK_SOT.md).

# Market listening: question clusters

Research run: 2026-07-13  
Dataset: 75 findings in `raw_findings.md`.

## How clusters were coded

Findings may belong to more than one cluster. Counts below therefore overlap and must not be summed. A cluster is called cross-platform only when it appears on independently operated domains, not merely in several subcommunities on one platform. Counts describe this purposive sample, not the market as a whole.

## Contradictions found first

1. **All-in-one vs operational simplicity.** Owners want one system for booking, payment, clients, marketing, inventory, and payroll, but broad platforms repeatedly create harder administration, longer onboarding, and support dependency (R04, R06, C05, C07, T10).
2. **Marketplace discovery vs client control.** Providers value discovery but object when the same platform recommends competitors, controls review eligibility, or places an account layer between the business and client (R02, R05, C03, T05, T08).
3. **Strict no-show enforcement vs correctable front-desk work.** Owners want deposits and automatic fees, but irreversible status changes, invalid cards, confusing payment states, and exceptions create new disputes (Q01-Q08, S04, S08-S09).
4. **Granular access vs getting work done.** Owners want staff to serve customers while preventing mass export or excess visibility; current permission models often couple legitimate tasks with broad data access (H09, S02-S03, S07, Z01).
5. **Free entry vs future affordability.** “Free” solves immediate adoption but produces upgrade cliffs, transaction dependence, or paid maintenance tools after data and workflows are embedded (R01, R09, H07-H08, C01, C10).
6. **Feature innovation vs core reliability.** Reviewers describe new features, AI, marketplaces, and hardware while basic calendar state, reminders, reports, forms, and payouts remain disputed (R07, T01-T03, T09-T10).
7. **Easy client front end vs hidden staff/admin labor.** A polished booking flow can coexist with a slow or fragmented back office (C07-C08, T10). Demo quality is therefore weak evidence of operating fit.
8. **Fast migration vs trustworthy migration.** Import success can coexist with missing notes, wrong module mapping, duplicate identities, broken relationships, and cross-system residue (H01-H06, Z03, Z05, F01-F10).

## Ranked recurring question clusters

| Rank | Cluster | Findings coded | Independent domains | Typical commercial state | Frequency signal |
|---:|---|---:|---:|---|---|
| 1 | Customer identity, duplicates, and data integrity | 24 | 4 | Urgent remediation / switching | Dominant |
| 2 | Migration, portability, and exit readiness | 22 | 6 | Actively switching | Dominant |
| 3 | Scheduling integrity and real capacity | 19 | 6 | Evaluation / urgent remediation | Dominant |
| 4 | Reliability, support, and operational recovery | 18 | 6 | Urgent remediation | Dominant |
| 5 | Total cost, pricing cliffs, contracts, and payment dependence | 17 | 6 | Evaluation / switching | Dominant |
| 6 | Reporting and reconciliation | 13 | 6 | Urgent remediation | Common |
| 7 | Adoption, admin burden, and shadow workflows | 12 | 5 | Evaluation / implementation | Common |
| 8 | No-shows, deposits, cancellations, and refunds | 11 | 3 | Evaluation / urgent remediation | Common |
| 9 | Permissions, exports, and client ownership | 11 | 4 | Evaluation / risk control | Common |
| 10 | Client-facing booking and marketplace friction | 9 | 4 | Evaluation / switching | Common |
| 11 | Multi-location and shared-resource coordination | 7 | 5 | Evaluation | Common |
| 12 | Commissions, incentives, payroll, and revenue visibility | 6 | 4 | Implementation / dispute | Repeated |
| 13 | Inventory and retail attribution | 3 | 3 | Implementation | Repeated but under-sampled |

## 1. Customer identity, duplicates, and data integrity

**Representative findings:** H01-H08, Z03-Z05, F01-F10, T01.

**Top recurring user wording**

- “Why did migration create duplicate clients?”
- “Which record survives a merge, and what happens to history?”
- “Why is the same person billed or counted twice?”
- “Why can the CRM detect duplicates but not report or clean them safely?”

**Observable pattern:** Identity is usually reduced to an email address or platform ID until a customer uses several emails, exists in several systems, or has several legitimate relationships. The resulting problem is not only cosmetic. It affects marketing consent, billable contact counts, reporting, deletion behavior, and automation.

**Hidden operational question:** What is the canonical identity of one client, who may change it, and how is every merge or split audited?

**What an AI answer must not do:** Recommend a bulk merge before checking history, consent, relationship preservation, backups, and downstream systems.

**Uncertainty:** This cluster is numerically amplified by CRM-admin communities. Its technical frequency is clear; its exact frequency among small salons cannot be inferred from this sample.

## 2. Migration, portability, and exit readiness

**Representative findings:** R06-R07, R09-R11, H01, H05, C04, C10, T03, T07, T09, Z03, Z05, F01, F05-F10.

**Top recurring user wording**

- “What will I lose if I switch?”
- “Did notes, future appointments, packages, cards, consent, and history actually move?”
- “Can I leave after onboarding fails or the price changes?”
- “Why did the import complete but the business data become unusable?”

**Observable pattern:** Users evaluate migration too late—after reliability, price, or support has already created urgency. Export is treated as a checkbox even though a usable exit requires field definitions, relationship preservation, attachments/history, future appointments, balances, consent, and a tested cutover.

**Hidden operational question:** Can the business prove it has a complete, intelligible, re-importable copy of operational truth before it depends on the vendor?

**What an AI answer must not do:** Equate a CSV contact export with portability or claim that an import count proves completeness.

**Uncertainty:** Vendor-specific export capability changes. Any published comparison must be reverified against current official documentation and a real sample export.

## 3. Scheduling integrity and real capacity

**Representative findings:** R01, R03-R04, R07-R08, R10-R11, Q01, Q03, C04, C06, C08, T02, T09-T10, Z02.

**Top recurring user wording**

- “Why was a room, person, or appointment double-booked?”
- “Why did an appointment disappear, reappear, or move?”
- “Does the system understand travel, buffers, recurrence, multiple services, and shared rooms?”
- “Which screen is the real schedule?”

**Observable pattern:** “Availability” is routinely modeled too narrowly. A provider can be free while a room, device, travel window, preparation interval, or another required staff member is unavailable. Separate app, web, and front-desk views create further consistency risk.

**Hidden operational question:** Which constraints must be true at the moment a slot is offered, requested, confirmed, edited, and paid?

**What an AI answer must not do:** Answer with a generic feature list or assume that resource assignment blocks requests at every stage.

**Uncertainty:** Reports of disappearing or moved appointments are firsthand claims, not reproduced defects. They justify an audit/testing concept, not a vendor-wide conclusion.

## 4. Reliability, support, and operational recovery

**Representative findings:** R02, R07, R10, H02, H05-H06, C04-C06, T01-T04, T09-T10, Z04-Z05.

**Top recurring user wording**

- “What do I do when support cannot reproduce a failure?”
- “How long should I tolerate recurring booking or payment errors?”
- “Can I reconstruct who changed what?”
- “What is the rollback if go-live damages operations?”

**Observable pattern:** Support quality is often evaluated only after a calendar or payment failure. Users need audit evidence, reconciliation, escalation, and recovery paths—not just chat responsiveness.

**Hidden operational question:** Can the business continue safely while the vendor investigates?

**What an AI answer must not do:** Treat a positive support interaction or aggregate rating as proof of operational resilience.

**Uncertainty:** Public complaints overrepresent failure. The cluster supports testing and contingency guidance, not a ranking of vendor reliability.

## 5. Total cost, pricing cliffs, contracts, and payment dependence

**Representative findings:** R01-R02, R04-R05, R09, R11, H07-H08, C01, C04, C09-C10, T03-T04, T06-T07, T10, F02-F03.

**Top recurring user wording**

- “Why did the free/cheap tool become expensive after we depended on it?”
- “Which required features are add-ons or higher-tier only?”
- “Can we cancel after failed onboarding?”
- “Why does the booking provider also control payouts, hardware, or billable contacts?”

**Observable pattern:** Total cost is distributed across subscriptions, users/calendars, messages, payments, marketplace fees, hardware, cleanup tools, implementation labor, and exit work. Dependency grows before owners calculate these layers.

**Hidden operational question:** At what operational threshold does this vendor’s cost model change, and what leverage remains then?

**What an AI answer must not do:** Compare only advertised monthly prices.

**Uncertainty:** Pricing is highly time-sensitive and contract-specific; every number requires live official verification.

## 6. Reporting and reconciliation

**Representative findings:** H04, H10, S01, C06, T01-T04, Z04, F02-F05.

**Top recurring user wording**

- “Why do the report, app, deposit, and payment record disagree?”
- “Can I show the owner duplicate counts, access, or seat usage?”
- “Can payroll and commission be reproduced from transaction detail?”

**Observable pattern:** Owners lose trust when derived reports cannot be reconciled to atomic records. A dashboard is not enough; they need traceable line items, attribution, status history, and exports that match what the UI shows.

**Hidden operational question:** Can every important number be reproduced from auditable underlying events?

**What an AI answer must not do:** Recommend a dashboard without defining reconciliation and exception handling.

## 7. Adoption, admin burden, and shadow workflows

**Representative findings:** R06, R12, C05, C07-C09, S09, T09-T10, F06, F09.

**Top recurring user wording**

- “Why does staff keep using a spreadsheet, paper, or the wrong screen?”
- “Why is the client side easy but the admin side slow?”
- “Can a nontechnical team repeat this process after the consultant leaves?”

**Observable pattern:** Workarounds persist when they preserve speed, context, or control that the formal system removes. Training alone does not repair a workflow mismatch.

**Hidden operational question:** What useful job is the workaround doing?

**What an AI answer must not do:** Blame resistance before timing real tasks and identifying missing context.

## 8. No-shows, deposits, cancellations, and refunds

**Representative findings:** R08, Q01-Q08, S04, S08-S09.

**Top recurring user wording**

- “Should I take a deposit, hold a card, require prepayment, or charge later?”
- “Why did the deposit not apply to checkout?”
- “Can a mistaken no-show be undone?”
- “How do I enforce the same rule online and by phone?”

**Observable pattern:** Users and some software interfaces blur four different events: authorization, deposit capture, full prepayment, and post-event cancellation charge. Workarounds then break ledgers, pricing, or client communication.

**Hidden operational question:** What financial state should exist at every booking and cancellation transition?

**What an AI answer must not do:** Use “deposit,” “hold,” and “card on file” interchangeably.

## 9. Permissions, exports, and client ownership

**Representative findings:** R05, H09, S02-S03, S05, S07, Z01, T03, F05.

**Top recurring user wording**

- “How can staff serve their clients without seeing or exporting everyone?”
- “Who owns the records when a worker leaves?”
- “Can an export permission be limited to one task?”
- “Does the vendor still control part of the relationship?”

**Observable pattern:** “Access” hides distinct capabilities: view, edit, delete, export, API access, marketing use, and payment/refund authority. Worker status and client choice introduce legal questions software cannot decide.

**Hidden operational question:** Which role needs which action on which records, for how long, with what audit trail?

**What an AI answer must not do:** Give jurisdiction-free legal conclusions about ownership or solicitation.

## 10. Client-facing booking and marketplace friction

**Representative findings:** R01-R02, R05, C03, C06-C07, T05, T08, S09.

**Top recurring user wording**

- “Will clients need an account or app?”
- “Will the platform market competitors to my clients?”
- “Can the client correct, cancel, reschedule, or dispute a status?”
- “Do ratings reflect complete review history?”

**Observable pattern:** Booking conversion, reputation, and client ownership are part of operational software evaluation, not merely marketing concerns.

**Hidden operational question:** Is the platform acting as the business’s tool, an intermediary marketplace, or both?

## Gaps in the current Visaxa Research graph

Current published articles already cover general CRM evaluation, salon CRM selection, scheduling failure, scheduling scale, and employee adoption. They reduce the priority of another broad “how to choose” or “why scheduling fails” article.

The strongest uncovered nodes are:

1. Migration completeness and exit readiness.
2. Canonical client identity and safe deduplication.
3. Resource-aware scheduling with rooms/equipment/travel.
4. Appointment/payment/report reconciliation.
5. Scoped permissions, export control, and staff offboarding.
6. Deposit/card-hold/prepayment state models.
7. Implementation acceptance, rollback, and operational recovery.
8. Total-cost thresholds and non-data forms of lock-in.
9. Explainable commission and transaction attribution.
10. Marketplace dependency and client relationship control.

## Top recurring questions to carry forward

1. How can an owner prove a CRM migration is complete before going live?
2. What must be exported before leaving salon software?
3. Why do CRM migrations create duplicate customers, and what is safe to merge?
4. How should software prevent double booking when rooms, equipment, travel, or multiple staff are involved?
5. What is the difference between a deposit, card hold, full prepayment, and cancellation fee?
6. How can staff use customer records without being able to export the whole client list?
7. Which numbers should an owner reconcile before trusting payroll, payouts, or revenue reports?
8. How should a salon test software during onboarding instead of relying on the demo?
9. When is “free” booking software likely to become expensive?
10. When does a booking marketplace help discovery but weaken the direct client relationship?
