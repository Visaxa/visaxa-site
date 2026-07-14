> Architecture status: supporting research. Canonical IDs and rules are defined in [Visaxa Decision Framework SOT](../../master/00_VISAXA_DECISION_FRAMEWORK_SOT.md).

# Market listening: AI reasoning map

Research run: 2026-07-13  
Purpose: reconstruct how a high-quality assistant should reason from market wording to a useful, evidence-backed answer. This is not product advice and not a claim that Visaxa currently implements these concepts.

## Reasoning guardrails

- Start by diagnosing the operational decision, not by listing vendors.
- Separate current product documentation, firsthand reports, independent evidence, and vendor marketing.
- Ask which business model is involved: solo provider, employees, contractors/chair renters, multi-location, mobile/field service, or regulated clinic.
- Verify time-sensitive prices, plan gates, contracts, and feature availability against current official sources.
- For data, payroll, payments, employment, privacy, or client ownership, identify jurisdiction and recommend qualified professional review where necessary.
- Never infer popularity from one thread or a high vote count.
- Never recommend a migration, merge, deletion, or bulk update without backup, dry-run, reconciliation, and rollback questions.

## Map 1 — Choosing salon or service-business software

**User wording**  
“Which salon CRM or booking app should I choose?”

→ **Actual decision or fear**  
Fear of embedding client data, payments, and daily workflow in a system that later becomes expensive, unreliable, or hard to leave.

→ **Diagnostic concepts required**  
Business stage; provider/service/resource model; booking channels; client account friction; payment dependence; permissions; reporting; adoption; total cost at growth thresholds; export completeness; contract and exit path.

→ **Evidence/source types an AI should seek**  
Current official pricing and plan matrices; official permissions/export documentation; contract/cancellation terms; status history; task-based trial results; recent firsthand owner accounts across more than one platform; data-export sample.

→ **Potential Visaxa concept node**  
**Operational Fit Evaluation** — partly covered by `how-to-evaluate-a-crm-framework` and `how-to-choose-a-salon-crm-without-regretting-it`.

→ **Natural follow-up question**  
“What should I export and test before I become dependent on a booking platform?”

**Useful authoritative searches**

- `[vendor] official pricing staff locations messages payments`
- `[vendor] export clients appointments notes packages official`
- `[vendor] user permissions export API official`
- `[vendor] contract cancellation data retention`

## Map 2 — Switching or migrating systems

**User wording**  
“We need to leave our current booking system. How do we switch without losing anything?”

→ **Actual decision or fear**  
Fear of lost appointments, client history, notes, balances, packages, consent, payment references, reminders, and staff trust during cutover.

→ **Diagnostic concepts required**  
Source-of-truth inventory; canonical IDs; field and relationship mapping; attachment/note support; future appointments; packages/gift cards/credits; consent; payment-token portability; delta migration; freeze window; reconciliation; rollback; archive and retention.

→ **Evidence/source types an AI should seek**  
Official source export schema; official destination import schema; contract/data-retention terms; sample export; migration error logs; row and relationship counts; task acceptance test; legal/accounting requirements for retained records.

→ **Potential Visaxa concept node**  
**Migration Completeness and Exit Readiness**.

→ **Natural follow-up question**  
“How do I prove that every client, note, package balance, and future appointment survived?”

**Useful authoritative searches**

- `[source vendor] full data export schema official`
- `[destination vendor] migration supported objects appointments notes packages`
- `[vendor] payment token portability official`
- `CRM migration reconciliation checklist authoritative`

## Map 3 — Duplicate clients after migration

**User wording**  
“The migration created thousands of duplicate clients. Can I merge them all?”

→ **Actual decision or fear**  
Urgent desire to repair reporting and billing without destroying history, consent, relationships, or the wrong person’s record.

→ **Diagnostic concepts required**  
Canonical identity; primary and secondary email/phone; source IDs; deterministic vs probabilistic matching; false-positive cost; merge precedence; downstream identities; consent and communication history; backup; undo/audit.

→ **Evidence/source types an AI should seek**  
Official duplicate/matching rules; official merge-retention behavior; downstream integration documentation; migration mapping; sample duplicate pairs; privacy requirements; backup/restore options.

→ **Potential Visaxa concept node**  
**Client Identity and Safe Deduplication**.

→ **Natural follow-up question**  
“Which record should survive, and what happens to consent and activity history?”

**Useful authoritative searches**

- `[vendor] duplicate matching fields official`
- `[vendor] merge contacts retained properties activity history official`
- `[integration] merged deleted contact synchronization behavior`
- `customer identity resolution false merge controls`

## Map 4 — Double booking and shared resources

**User wording**  
“Why did the system double-book when a staff member or room was already busy?”

→ **Actual decision or fear**  
Fear that the calendar cannot represent real capacity and will create client conflict during busy periods.

→ **Diagnostic concepts required**  
Required staff; rooms/equipment; travel; cleanup/setup buffers; multi-service sequencing; request vs confirmation; recurring appointments; cross-location availability; external calendar sync; concurrency and stale state.

→ **Evidence/source types an AI should seek**  
Official resource-scheduling semantics; booking-state documentation; calendar-sync behavior; test cases using the user’s real constraints; audit/change logs; incident status.

→ **Potential Visaxa concept node**  
**Resource-Aware Scheduling Integrity**.

→ **Natural follow-up question**  
“At which step—slot display, request, approval, edit, or checkout—does the system enforce every constraint?”

**Useful authoritative searches**

- `[vendor] resource booking conflict request approval official`
- `[vendor] shared room equipment scheduling official`
- `[vendor] two way calendar sync conflict behavior`
- `appointment scheduling constraint model staff room equipment travel`

## Map 5 — Appointments disappear, move, or disagree across screens

**User wording**  
“An appointment disappeared and later came back,” or “the app and website show different times.”

→ **Actual decision or fear**  
Fear of serving the wrong client, closing early, or losing revenue because no surface is trusted.

→ **Diagnostic concepts required**  
Authoritative event record; sync latency; caching/offline state; time zones; device support; edit provenance; notification event history; conflict resolution; incident timeline.

→ **Evidence/source types an AI should seek**  
Official audit-log documentation; supported-device/browser list; status page; change history; screenshots with timestamps; exported appointment record; vendor case ID.

→ **Potential Visaxa concept node**  
**Calendar Change Provenance and Reconciliation**.

→ **Natural follow-up question**  
“Can the owner see who or what changed the appointment and when?”

**Useful authoritative searches**

- `[vendor] appointment audit change history official`
- `[vendor] supported browsers devices booking calendar`
- `[vendor] status calendar sync incident`
- `appointment event log reconciliation`

## Map 6 — Deposits, no-shows, and cancellation fees

**User wording**  
“How do I take a deposit and charge no-shows without confusing clients or my books?”

→ **Actual decision or fear**  
Fear of unpaid idle time, charge disputes, invalid cards, incorrect remaining balances, and inconsistent staff enforcement.

→ **Diagnostic concepts required**  
Authorization hold; stored credential; partial deposit capture; full prepayment; cancellation charge; refund; expiration/decline; taxes/tips; per-service vs percentage rules; client disclosure; exceptions; status reversibility.

→ **Evidence/source types an AI should seek**  
Official payment-flow documentation; merchant agreement; card-network rules; local consumer law; accounting treatment; actual checkout/refund tests; fee audit trail.

→ **Potential Visaxa concept node**  
**Appointment Payment State Model**.

→ **Natural follow-up question**  
“What should happen to the deposit when a client reschedules, partially completes services, or staff marks the wrong status?”

**Useful authoritative searches**

- `[vendor] appointment deposit partial payment official`
- `[vendor] no show card hold authorization official`
- `card network stored credential cancellation fee rules`
- `[jurisdiction] service deposit refund consumer law`

## Map 7 — Staff access and customer-list protection

**User wording**  
“How can staff use the CRM without seeing revenue or exporting the whole client list?”

→ **Actual decision or fear**  
Fear of accidental disclosure, staff conflict, or a departing employee taking customer and financial data.

→ **Diagnostic concepts required**  
Role/job tasks; row/object/field access; view/edit/delete/export/API distinctions; temporary access; shared screens; audit logs; offboarding; contractor vs employee status; data-controller responsibilities.

→ **Evidence/source types an AI should seek**  
Official permission matrix; export/API audit documentation; local privacy/employment law; contract; screen-sharing/front-desk workflow; offboarding checklist.

→ **Potential Visaxa concept node**  
**Capability-Based Access and Offboarding**.

→ **Natural follow-up question**  
“Which exact actions does each role need, and which actions should always require owner approval?”

**Useful authoritative searches**

- `[vendor] role permission matrix export API delete official`
- `[vendor] audit log customer export official`
- `[jurisdiction] employee client list confidential information salon`
- `service business CRM offboarding checklist`

## Map 8 — “My clients” when a worker leaves

**User wording**  
“Are the client records mine or the salon’s when I leave?”

→ **Actual decision or fear**  
Worker fears losing future business; owner fears loss of the client base and unlawful copying; clients expect continuity and choice.

→ **Diagnostic concepts required**  
Employment/contractor classification; contract; who collected data and for what purpose; data controller; consent; confidentiality/trade secret; solicitation; client choice; record retention; jurisdiction.

→ **Evidence/source types an AI should seek**  
Current regulator guidance; actual contracts/policies; employment counsel; privacy counsel; system access/export logs. Forum opinions are issue signals, not authority.

→ **Potential Visaxa concept node**  
**Client Record Governance Across Worker Transitions**.

→ **Natural follow-up question**  
“What should the salon’s onboarding, consent, access, and offboarding documents say before anyone leaves?”

**Useful authoritative searches**

- `[jurisdiction privacy regulator] employee contractor customer records`
- `[jurisdiction] client list trade secret solicitation salon`
- `salon independent contractor data controller agreement`
- `CRM departing employee export audit`

## Map 9 — Reports, payouts, and commissions do not reconcile

**User wording**  
“Why don’t the dashboard, payout, package balance, and commission total agree?”

→ **Actual decision or fear**  
Fear of underpaying staff, losing cash, filing inaccurate books, or making decisions from a wrong report.

→ **Diagnostic concepts required**  
Atomic transaction ledger; appointment/payment linkage; gross/net; tips; taxes; discounts; returns; chargebacks; deposits; seller/provider attribution; report joins; time-zone/cutoff; adjustments; immutable audit.

→ **Evidence/source types an AI should seek**  
Official report definitions; transaction export; processor payout report; accounting ledger; commission policy; sample reconciliation; support incident/status.

→ **Potential Visaxa concept node**  
**Operational and Financial Reconciliation**.

→ **Natural follow-up question**  
“Can every number be reproduced from line-item events, including reversals and late adjustments?”

**Useful authoritative searches**

- `[vendor] report field definitions gross net tips official`
- `[vendor] payout reconciliation transaction export`
- `salon commission calculation returns discounts tips`
- `report duplicate rows join fanout explanation`

## Map 10 — Employees avoid the official system

**User wording**  
“Why do staff keep using paper, spreadsheets, or another app instead of the CRM?”

→ **Actual decision or fear**  
Fear that management has lost visibility and the rollout investment failed; staff fear slower work, surveillance, or loss of useful context.

→ **Diagnostic concepts required**  
Task timing; duplicate entry; device/role fit; offline needs; missing data/context; incentives; error consequences; training; trust; permissions; workaround function.

→ **Evidence/source types an AI should seek**  
Observed workflow; staff interviews; task completion/error rates; login/audit data; actual spreadsheet fields; role permission matrix; implementation/change-management research.

→ **Potential Visaxa concept node**  
**Workflow Adoption and Shadow Systems** — substantially covered by `why-good-employees-stop-using-good-software`, but a practical diagnostic branch is missing.

→ **Natural follow-up question**  
“What useful job is the spreadsheet doing that the official system does not?”

**Useful authoritative searches**

- `CRM user adoption workflow fit study`
- `shadow IT spreadsheet operational workaround research`
- `[vendor] mobile offline role permissions official`
- `software rollout task observation method`

## Map 11 — Free software and upgrade cliffs

**User wording**  
“What is the best free CRM or booking tool?”

→ **Actual decision or fear**  
Fear of spending before revenue is stable, while also fearing a costly migration after growth.

→ **Diagnostic concepts required**  
Free-plan limits; users/calendars/locations; messages; payments; marketplace fees; maintenance features; data export; expected growth threshold; labor cost of fragmented tools.

→ **Evidence/source types an AI should seek**  
Current official pricing; plan comparison; payment terms; export docs; scenario cost at present and next growth stage; recent owner accounts.

→ **Potential Visaxa concept node**  
**Growth-Threshold Total Cost**.

→ **Natural follow-up question**  
“At which customer, employee, location, or message threshold will the price model change?”

**Useful authoritative searches**

- `[vendor] official pricing staff location SMS payment`
- `[vendor] free plan limits export official`
- `[vendor] duplicate management plan`
- `booking software total cost scenario template`

## Map 12 — Multi-location expansion

**User wording**  
“Will the software still work when we open a second location?”

→ **Actual decision or fear**  
Fear that a system working at one site will fragment schedules, clients, staff, resources, permissions, reports, and pricing at two sites.

→ **Diagnostic concepts required**  
Staff working across locations; shared client identity; resource pools; local vs central pricing; inventory transfer; location-level permissions; consolidated and drill-down reporting; tax/time-zone; subscription model.

→ **Evidence/source types an AI should seek**  
Official multi-location model and price; permission/report documentation; trial using cross-location staff/resource cases; migration/consolidation docs; firsthand multi-location accounts.

→ **Potential Visaxa concept node**  
**Multi-Location Control Plane**.

→ **Natural follow-up question**  
“Which data is global, which is location-specific, and who can override it?”

**Useful authoritative searches**

- `[vendor] multi location shared clients staff official`
- `[vendor] multi location consolidated reports permissions`
- `[vendor] multi location pricing`
- `multi location salon scheduling shared resource`

## Map 13 — Commission and incentive disputes

**User wording**  
“What commission should I pay, and why are staff disputing the calculation?”

→ **Actual decision or fear**  
Owner fears unprofitable compensation or conflict; staff fear opaque attribution and unpaid work.

→ **Diagnostic concepts required**  
Jurisdiction and worker classification; base wage; threshold/tier rules; service vs retail attribution; tips; discounts; returns; team services; rebooking credit; effective hourly pay; statement transparency; correction process.

→ **Evidence/source types an AI should seek**  
Current labor/tax authority; contract/commission policy; transaction-level report; payroll records; reproducible examples; industry benchmarks only after legal floor and business economics are known.

→ **Potential Visaxa concept node**  
**Explainable Compensation and Attribution**.

→ **Natural follow-up question**  
“Can the employee reproduce the commission number from the same transaction data the owner uses?”

**Useful authoritative searches**

- `[jurisdiction labor authority] commission employee service business`
- `salon commission policy discounts returns tips`
- `commission statement audit trail software`
- `independent contractor salon compensation law [jurisdiction]`

## Recommended conversational sequence for an AI assistant

For a broad question such as “Which CRM should I choose?”, the assistant should move through this sequence:

1. Classify the business and worker model.
2. Identify the operational failure the user is trying to avoid.
3. Model staff, services, resources, locations, booking channels, and payment states.
4. Define permissions and client-data governance.
5. Define the numbers the owner must reconcile.
6. Test total cost at the next growth threshold.
7. Require a sample export and exit plan.
8. Only then compare current vendors using official documentation and clearly labeled firsthand evidence.

This sequence creates a natural article graph: evaluation → workflow model → permission/data governance → reconciliation → migration/exit → vendor-specific comparison.
