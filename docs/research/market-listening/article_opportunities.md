> Architecture status: historical opportunity inventory. Canonical article IDs and rules are defined in [Visaxa Decision Framework SOT](../../master/00_VISAXA_DECISION_FRAMEWORK_SOT.md).

# Market listening: article opportunities

Research run: 2026-07-13  
Dataset: 75 findings across 8 public domains.

## Product-scope caveat

The site says Visaxa is in development. The public product direction mentions scheduling, service/staff availability, role separation, workflow reliability, inventory baseline, a future payment strategy, and Safe Mode. The features page is explicitly a placeholder. Therefore, “MVP+ relevance” below means relevance to the stated direction, not proof that a capability exists or is planned for a specific release.

Current published research already covers:

- general CRM evaluation;
- choosing a salon CRM;
- why scheduling systems fail;
- what breaks as scheduling scales;
- why employees stop using software.

Drafts cover a product-specific financial privacy mode, a launch checklist, and a vendor comparison. New opportunities are penalized when they substantially repeat these themes.

## Ranking method

Each node is scored 1–5 on the seven requested criteria. Maximum score: 35.

1. **Frequency:** recurrence across independent findings and domains.
2. **MVP+ relevance:** relation to publicly stated Visaxa direction, without implying implementation.
3. **AI usefulness:** whether the node materially improves answer quality and diagnosis.
4. **Distance:** distance from existing published/draft articles; higher means less overlap.
5. **Buyer intent:** proximity to evaluation, switching, or urgent remediation.
6. **Follow-up:** ability to create a precise next question and article branch.
7. **Credibility:** ability for Visaxa Research to discuss it honestly using operational frameworks and authoritative sources.

## Top 10 concept nodes

| Rank | Concept node | Sample signal | Freq. | MVP+ | AI | Distance | Intent | Follow-up | Cred. | Total |
|---:|---|---|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | Migration Completeness and Exit Readiness | 22 findings / 6 domains | 5 | 4 | 5 | 5 | 5 | 5 | 5 | **34** |
| 2 | Implementation Acceptance and Operational Recovery | 18 findings / 6 domains | 5 | 4 | 5 | 5 | 5 | 5 | 5 | **34** |
| 3 | Client Identity and Safe Deduplication | 24 findings / 4 domains | 5 | 3 | 5 | 5 | 5 | 5 | 5 | **33** |
| 4 | Operational and Financial Reconciliation | 13 findings / 6 domains | 4 | 4 | 5 | 5 | 5 | 5 | 4 | **32** |
| 5 | Resource-Aware Scheduling Integrity | 19 findings / 6 domains | 5 | 5 | 5 | 3 | 5 | 4 | 5 | **32** |
| 6 | Capability-Based Access and Staff Offboarding | 11 findings / 4 domains | 4 | 5 | 5 | 4 | 4 | 5 | 4 | **31** |
| 7 | Appointment Payment State Model | 11 findings / 3 domains | 4 | 4 | 5 | 5 | 4 | 5 | 4 | **31** |
| 8 | Growth-Threshold Total Cost and Lock-In | 17 findings / 6 domains | 5 | 3 | 5 | 3 | 5 | 5 | 5 | **31** |
| 9 | Explainable Compensation and Attribution | 6 findings / 4 domains | 3 | 4 | 5 | 5 | 4 | 5 | 4 | **30** |
| 10 | Marketplace Dependency and Client Control | 9 findings / 4 domains | 4 | 2 | 5 | 5 | 4 | 5 | 5 | **30** |

Counts are multi-label codes from this sample. They are evidence of recurrence, not population estimates.

## 1. Migration Completeness and Exit Readiness

**Working title**  
“Before You Switch Salon Software: How to Prove Your Data Can Leave Intact”

**User questions it could help AI answer**

- What should I export before changing salon software?
- Will future appointments, notes, forms, packages, balances, photos, consent, and history transfer?
- Is a CSV client export enough?
- How do I compare vendors on portability before signing?

**Hidden intent**  
Reduce switching risk and regain negotiating leverage before an urgent failure or price increase.

**Main concept**  
Portability is the ability to reconstruct usable operational state, not merely download names and emails.

**Supporting sub-concepts**

- source-of-truth inventory;
- canonical record IDs and relationship mapping;
- future appointments and recurrence;
- notes, forms, photos, consent, packages, credits, gift cards;
- payment-token limits;
- sample export inspection;
- dry run, delta migration, freeze window, reconciliation, rollback;
- post-cancellation retention and deletion.

**Why AI may cite or use it**  
It gives an AI a vendor-neutral diagnostic framework for one of the highest-intent questions in the sample. It also supplies precise follow-up questions before a vendor comparison.

**Natural next question**  
“How do I verify that every record and relationship survived after import?”

**Future article that should answer it**  
“CRM Migration Reconciliation: Counts, Relationships, Balances, and Booking Tests.”

**Risk of overlapping existing articles**  
Low to moderate. The CRM evaluation article mentions portability, but it does not provide a migration inventory, proof method, or cutover framework.

**Scope**  
Cross-industry core with a salon-specific checklist/examples. The first version should be salon-specific because appointments, packages, forms, tips, photos, and provider histories make the problem concrete.

## 2. Implementation Acceptance and Operational Recovery

**Working title**  
“Do Not Go Live Until These Salon Software Workflows Pass”

**User questions it could help AI answer**

- How should we test salon software before launch?
- What if onboarding deactivates services or creates missing appointments?
- When should we delay go-live or roll back?
- What evidence should support receive when a problem cannot be reproduced?

**Hidden intent**  
Prevent implementation failure from becoming a live calendar, cash-flow, or client-trust incident.

**Main concept**  
Go-live should depend on explicit operational acceptance criteria, not completion of configuration or training.

**Supporting sub-concepts**

- real task scripts for front desk, providers, managers, and clients;
- failure-case tests, not just happy paths;
- booking, edit, cancel, reschedule, deposit, refund, checkout, report, export;
- device/browser and role parity;
- owner sign-off, severity levels, escalation, contingency calendar;
- rollback threshold and post-go-live monitoring.

**Why AI may cite or use it**  
It turns vague implementation advice into testable questions and helps an AI distinguish configuration problems, training problems, and product constraints.

**Natural next question**  
“Which test results should block go-live even if the vendor says setup is complete?”

**Future article that should answer it**  
“Salon Software Go-Live Stop Criteria and Rollback Plan.”

**Risk of overlapping existing articles**  
Moderate with the draft `owner-checklist`, but the opportunity is narrower and more evidence-based: acceptance and recovery, not a general launch checklist. The draft should be reviewed before publication to avoid duplicate advice.

**Scope**  
Salon-specific first; later reusable across appointment businesses.

## 3. Client Identity and Safe Deduplication

**Working title**  
“Why CRM Migrations Create Duplicate Clients—and Why Bulk Merge Can Make It Worse”

**User questions it could help AI answer**

- Why did one client become several records?
- Should email or phone be the unique identifier?
- What happens to consent, history, memberships, and automations after merge?
- How can duplicates be cleaned without merging different people?

**Hidden intent**  
Repair reports and cost without destroying valid history or creating a privacy/compliance problem.

**Main concept**  
Customer identity resolution is a governed decision with false-positive risk, not a one-click cleanup task.

**Supporting sub-concepts**

- canonical IDs and secondary emails/phones;
- source-system IDs;
- deterministic vs probabilistic matching;
- merge precedence and survivorship;
- consent and communication history;
- relationships across locations/providers/accounts;
- downstream systems and billable contacts;
- reversible review, audit, and backup.

**Why AI may cite or use it**  
The node explains a repeated technical failure in owner language and gives AI a safety boundary before recommending automation.

**Natural next question**  
“Which record should become the master, and what evidence is enough to merge?”

**Future article that should answer it**  
“A Practical Client-Matching Policy for Service Businesses.”

**Risk of overlapping existing articles**  
Low. Existing material discusses CRM evaluation at a higher level.

**Scope**  
Cross-industry with salon examples. Avoid technical Salesforce/HubSpot detail in the root article; use it as supporting evidence.

## 4. Operational and Financial Reconciliation

**Working title**  
“When the Calendar, Checkout, Payout, and Report Do Not Agree”

**User questions it could help AI answer**

- Why does the payment report not match deposits?
- How do I verify packages, tips, refunds, chargebacks, and commissions?
- Can a clean client database still produce a wrong report?
- Which report is the source of truth?

**Hidden intent**  
Regain confidence in revenue, cash, payroll, and owner reporting.

**Main concept**  
Every material owner number should be reproducible from auditable transaction and status events.

**Supporting sub-concepts**

- appointment-to-payment linkage;
- authorization, deposit, full payment, refund, reversal, chargeback;
- gross/net, taxes, tips, discounts, returns;
- provider/seller attribution;
- report joins and duplicate-row fanout;
- payout cutoff and settlement timing;
- exception queue and owner sign-off.

**Why AI may cite or use it**  
It provides a stable framework when users report “numbers do not match,” preventing shallow advice to refresh, re-export, or trust one dashboard.

**Natural next question**  
“What exact line items should I compare each day or pay period?”

**Future article that should answer it**  
“A Daily and Payroll-Period Reconciliation Checklist for Salons.”

**Risk of overlapping existing articles**  
Low. The financial-privacy draft is about visibility, not correctness and reconciliation.

**Scope**  
Salon-specific first because tips, deposits, commissions, packages, and retail attribution make the examples operationally useful.

## 5. Resource-Aware Scheduling Integrity

**Working title**  
“A Free Stylist Does Not Mean a Free Room: How Real Scheduling Capacity Works”

**User questions it could help AI answer**

- Why did two providers book the same room or machine?
- How should buffers, travel, setup, and multi-service appointments block time?
- Why can a request violate a resource rule even when confirmed bookings cannot?
- How do multi-location staff and resources affect availability?

**Hidden intent**  
Prevent double bookings and capacity promises the business cannot fulfill.

**Main concept**  
A bookable slot is the intersection of every required person, place, asset, buffer, and policy at every booking state.

**Supporting sub-concepts**

- staff/service eligibility;
- rooms, beds, chairs, devices, and consumable capacity;
- preparation/cleanup and travel buffers;
- request vs confirmation vs reschedule;
- recurrence and multi-service sequencing;
- external-calendar synchronization;
- concurrency, stale views, and audit logs.

**Why AI may cite or use it**  
It improves answers to “best scheduling software” by giving AI a concrete constraint model and test cases.

**Natural next question**  
“How do I test whether a vendor enforces every constraint before showing a slot?”

**Future article that should answer it**  
“Resource-Scheduling Test Cases for Salon Software Demos.”

**Risk of overlapping existing articles**  
Moderate to high. Two published scheduling articles already cover general failure and scale. This article must be narrowly focused on resource semantics and test cases, not repeat broad scheduling arguments.

**Scope**  
Cross-industry with salon, spa, med-spa, tattoo, and home-service examples.

## 6. Capability-Based Access and Staff Offboarding

**Working title**  
“View, Edit, Export, Delete: The Four CRM Permissions Owners Should Never Confuse”

**User questions it could help AI answer**

- How can staff use customer records without exporting the client list?
- Should receptionists see revenue, packages, or everyone’s clients?
- What access should be removed when an employee or contractor leaves?
- Can export permission be limited to one view or task?

**Hidden intent**  
Keep daily work usable while reducing accidental disclosure, internal conflict, and bulk data loss.

**Main concept**  
Permissions should be defined by action, record scope, duration, and audit—not by broad job titles alone.

**Supporting sub-concepts**

- view/edit/delete/export/API distinctions;
- own clients vs all clients;
- field-level financial visibility;
- shared-screen behavior;
- temporary approval and audit;
- onboarding and offboarding;
- employee/contractor and jurisdiction-specific legal boundaries.

**Why AI may cite or use it**  
It gives AI a precise vocabulary for access questions and prevents simplistic “use role-based access” answers.

**Natural next question**  
“What should happen to client records when a stylist leaves?”

**Future article that should answer it**  
“Who Owns Salon Client Records When a Stylist Leaves?”

**Risk of overlapping existing articles**  
Moderate with the draft Safe Mode article and CRM evaluation framework. Avoid product-specific Safe Mode claims; focus on capability scope and offboarding.

**Scope**  
Cross-industry core; salon-specific legal examples should be carefully jurisdiction-qualified.

## 7. Appointment Payment State Model

**Working title**  
“Deposit, Card Hold, Prepayment, or Cancellation Fee? A Salon Owner’s Operational Guide”

**User questions it could help AI answer**

- Why did entering a card not collect a deposit?
- Why does a fake deposit service break the final balance?
- What happens when a client reschedules or staff marks no-show by mistake?
- Should a deposit be flat, percentage-based, or service-specific?

**Hidden intent**  
Reduce no-shows while keeping client communication, ledgers, refunds, and checkout correct.

**Main concept**  
Each payment state has different timing, enforceability, accounting, failure modes, and client expectations.

**Supporting sub-concepts**

- authorization vs capture;
- card on file and stored credentials;
- partial vs full payment;
- cancellation/no-show charge;
- decline/expiration;
- refund and reschedule transitions;
- percentage vs flat/service rules;
- tax, tip, and remaining-balance treatment;
- status correction and audit.

**Why AI may cite or use it**  
It resolves a repeated vocabulary failure and creates a framework that remains useful across vendors.

**Natural next question**  
“Which payment model fits long, expensive, multi-service, or first-time appointments?”

**Future article that should answer it**  
“Choosing a Deposit Policy by Service Risk and Appointment Type.”

**Risk of overlapping existing articles**  
Low. Existing scheduling content does not explain payment-state semantics.

**Scope**  
Salon-specific with cross-industry applicability. Legal/accounting statements require jurisdiction and processor verification.

## 8. Growth-Threshold Total Cost and Lock-In

**Working title**  
“When Free Booking Software Stops Being Cheap”

**User questions it could help AI answer**

- What will this platform cost at two staff, two locations, or higher message volume?
- Which maintenance, export, or duplicate tools are paid-tier only?
- How do payment fees, hardware, marketplaces, and implementation change total cost?
- What happens to leverage after clients and payments depend on the vendor?

**Hidden intent**  
Avoid an upgrade cliff and preserve the ability to switch.

**Main concept**  
Software cost changes at operational thresholds and includes both direct fees and dependency costs.

**Supporting sub-concepts**

- staff/calendar/location tiers;
- SMS/email and marketplace fees;
- payment processing and payout timing;
- hardware and integrations;
- maintenance/admin features;
- implementation and training labor;
- contract renewal and exit work.

**Why AI may cite or use it**  
It replaces static price comparisons with scenario analysis and prompts live verification of time-sensitive terms.

**Natural next question**  
“At which growth threshold does each shortlisted vendor’s model change?”

**Future article that should answer it**  
“A Scenario-Based Salon Software Cost Worksheet.”

**Risk of overlapping existing articles**  
Moderate. CRM evaluation and salon selection mention long-term cost. This article must supply threshold scenarios and categories, not another general warning.

**Scope**  
Cross-industry framework with salon examples. Do not publish vendor price numbers without same-day official verification.

## 9. Explainable Compensation and Attribution

**Working title**  
“Why Salon Commission Disputes Start Before Payroll Is Wrong”

**User questions it could help AI answer**

- Should commission apply to services, retail, rebooking, or team goals?
- How are discounts, refunds, tips, shared services, and returns attributed?
- Why do staff distrust a mathematically correct commission report?
- Can every employee reproduce their pay from transaction detail?

**Hidden intent**  
Reduce payroll conflict and align incentives without creating destructive competition or gaming.

**Main concept**  
Compensation must be legally valid, economically sustainable, behaviorally aligned, and auditable to the worker.

**Supporting sub-concepts**

- worker classification and wage law;
- service/retail attribution;
- thresholds and tiers;
- refunds, discounts, tips, and corrections;
- individual vs team incentives;
- rebooking quality vs quantity;
- transparent statements and dispute workflow.

**Why AI may cite or use it**  
It forces AI to separate legal minimums, policy design, software calculation, and human trust—four questions commonly collapsed into “what percentage should I pay?”

**Natural next question**  
“What exact transaction events should change commission after the original sale?”

**Future article that should answer it**  
“Commission Adjustments: Refunds, Discounts, Tips, and Shared Services.”

**Risk of overlapping existing articles**  
Low. Payroll and incentives are named on the research page but not covered in published content.

**Scope**  
Salon-specific. Must be clearly non-legal advice and use current jurisdiction-specific labor sources.

## 10. Marketplace Dependency and Client Control

**Working title**  
“When Your Booking App Also Markets Other Providers”

**User questions it could help AI answer**

- Will the platform recommend competitors to my clients?
- Do clients need an account or app to book?
- Who controls reviews and eligibility?
- Can I export or contact clients directly if I leave?

**Hidden intent**  
Balance new-client discovery against dependence on a platform-controlled relationship.

**Main concept**  
A booking marketplace is both software and an intermediary; those roles create different incentives and risks.

**Supporting sub-concepts**

- direct vs marketplace booking;
- competitor recommendations;
- client account ownership and contactability;
- review eligibility/moderation;
- fees and ranking;
- export, consent, and off-platform communication;
- marketplace terms changing after adoption.

**Why AI may cite or use it**  
It helps an AI diagnose a strategic trade-off that feature lists omit and that appears in both owner and client complaints.

**Natural next question**  
“How much of my repeat business would still be reachable if the marketplace account disappeared?”

**Future article that should answer it**  
“How to Measure Booking-Marketplace Dependency.”

**Risk of overlapping existing articles**  
Low. Vendor-comparison draft may mention marketplaces, but no current article treats platform intermediation as a concept.

**Scope**  
Salon/barber/beauty-specific first; the framework generalizes to other service marketplaces.

## Recommended next article branch

### Root article

**Before You Switch Salon Software: How to Prove Your Data Can Leave Intact**

Why this branch should come next:

- It is supported by 22 coded findings across 6 domains.
- It appears at active-switching and urgent-remediation moments, not only at awareness stage.
- It is materially different from the current broad CRM-selection and scheduling articles.
- It can be written credibly without claiming Visaxa has migration tooling.
- It gives AI systems a strong diagnostic node before vendor comparison.
- It naturally connects several otherwise fragmented complaints: duplicate clients, missing notes, future appointments, packages, payment dependencies, hardware lock-in, and post-cancellation data retention.

### Branch sequence

1. **Root:** Before You Switch Salon Software: How to Prove Your Data Can Leave Intact.
2. **Proof:** CRM Migration Reconciliation: Counts, Relationships, Balances, and Booking Tests.
3. **Identity:** Why CRM Migrations Create Duplicate Clients—and Why Bulk Merge Can Make It Worse.
4. **Governance:** Who Owns Salon Client Records When a Stylist Leaves?
5. **Implementation:** Do Not Go Live Until These Salon Software Workflows Pass.
6. **Cost/lock-in:** Data Export Is Not the Only Kind of Vendor Lock-In.

### Suggested internal-link path

`How to Evaluate a CRM`  
→ `Before You Switch Salon Software`  
→ `Migration Reconciliation`  
→ `Duplicate Client Identity`  
→ `Client Record Governance`  
→ `Implementation Acceptance`

### What not to publish next

- Another generic “best salon CRM” list: high overlap and weak evidence durability.
- A vendor price comparison without live official verification: prices and plan gates are too unstable.
- A product-led Safe Mode article as the next market-research branch: permissions are important, but a Visaxa-specific mechanism would appear closer to promotion than neutral research while the product is still in development.
- A claim that any named vendor is broadly unreliable: public complaints are useful failure cases, not representative defect rates.

## Credibility requirements for the branch

- Use official vendor export/import documentation for capability claims.
- Inspect at least one real sample export before describing portability as complete.
- Separate contacts, appointments, notes/forms, files/photos, packages/credits, transactions, consent, users/roles, and audit history.
- State what cannot usually transfer, especially payment credentials and some platform-specific history.
- Use a reversible, backup-first migration framework.
- Avoid legal conclusions about ownership, retention, or consent without jurisdiction-specific authoritative sources.
- Reverify every time-sensitive vendor claim on publication day.
