# A29 Evidence Pack — Monitor Operational Truth After Go-Live

Status: **COMPLETE FOR METHOD DESIGN; NO REAL SALON OR PRODUCT VERIFIED**

Access date: **2026-09-12**

Evidence owner: **Visaxa Research editorial maintainer**

## Evidence boundary

This pack supports an owner-facing method for renewing confidence in operational records after go-live. It does not establish that “operational truth drift” is a standard salon-software industry term, that drift is prevalent, that any named vendor has a defect, or that a real salon’s records agree or disagree.

Official vendor documentation establishes only documented behavior, definitions, settings, exclusions, and limits in the described product and scope. Only local E10–E12 evidence can establish a salon-specific result. E13 can provide incident context but cannot prove reliability from silence.

## Evidence-class interpretation

| Evidence | Canonical meaning | A29 use | Boundary |
| --- | --- | --- | --- |
| E10 | Audit, access, and system logs | Recorded changes, actors, provenance, delivery attempts, or transitions where available | Coverage, access, retention, integrity, and unlogged activity remain unknown unless established |
| E11 | Raw operational records | Client, appointment, service, location, and other base states | Requires definitions, privacy controls, and an authority hierarchy |
| E12 | Accounting, processor, and ledger records | Charge, refund, payout, liability, and reconciliation evidence | Does not explain workflow or cause by itself |
| E13 | Public status and incident history | Known incident timing and affected functions | Absence of a public incident is not evidence that no issue occurred |

## Source register

| Ref | Evidence | Source | Source type | What it establishes | What it does not establish | Published / updated | Durability | Refresh | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A29-S01 | Method context | GOV.UK Service Manual, *Quality assurance: testing your service regularly* — https://www.gov.uk/service-manual/technology/quality-assurance-testing-your-service-regularly | Authoritative government guidance | Services should be tested regularly; technical behavior and usability both matter; normal and unusual conditions should be considered | No salon-specific cadence, control set, or result | Published 2016-05-23; updated 2017-06-28 | DURABLE PRINCIPLE | Review annually or if page changes | HIGH for general method |
| A29-S02 | E10,E11 | Fresha Help Center, *Merge client profiles* — https://www.fresha.com/help-center/knowledge-base/clients/57-merge-client-profiles | Official product documentation | Current documented matching/merge behavior; profile merges combine details, sales, and appointments and are described as irreversible | That a particular profile is a duplicate, that a merge was correct, or that every relevant field is preserved | No date displayed | TIME-SENSITIVE PRODUCT DETAIL | Before drafting/publication and every 90 days if cited | HIGH for documented Fresha behavior |
| A29-S03 | E11 | Fresha Help Center, *Update appointment statuses* — https://www.fresha.com/help-center/knowledge-base/calendar/600-update-appointment-statuses | Official product documentation | Appointment states have documented meanings; some may be manual or automatic; custom states can be created/edited | That a real salon used states consistently or that a displayed status matches the real visit outcome | No date displayed | TIME-SENSITIVE PRODUCT DETAIL | Before publication and every 90 days if cited | HIGH for documented behavior |
| A29-S04 | E11 | Fresha Help Center, *Reports & Insights glossary* — https://www.fresha.com/help-center/knowledge-base/reports/270-reports-and-insights-glossary | Official report documentation | Reports have distinct purposes and can use filters/grouping; current documentation states report data may update on a stated delay | That a selected report is accurate, complete, or suitable for a salon’s accounting | No date displayed | TIME-SENSITIVE PRODUCT DETAIL | Before publication and every 90 days if cited | HIGH for current definitions |
| A29-S05 | E11,E12 | Fresha Help Center, *Finance summary report* — https://www.fresha.com/help-center/knowledge-base/reports/335-finance-summary-article-1 | Official report documentation | Sales, payments, liabilities, refunds, gift cards, and deposits are separated through documented definitions and exclusions; sections can be cross-checked | That all sections must be numerically equal or that a local discrepancy is a defect | No date displayed | TIME-SENSITIVE PRODUCT DETAIL | Before publication and every 90 days if cited | HIGH for definitions |
| A29-S06 | E11,E12 | Fresha Help Center, *Liability summary report* — https://www.fresha.com/help-center/knowledge-base/reports/349-liability-summary-article-1 | Official report documentation | Opening balance, collections, redemptions, expirations, refunds, closing balance, and net change have separate documented meanings and location/date filters | That a specific salon’s deposits or gift cards reconcile | No date displayed | TIME-SENSITIVE PRODUCT DETAIL | Before publication and every 90 days if cited | HIGH for definitions |
| A29-S07 | E11,E12 | Square Support, *View future bookings report* — https://squareup.com/help/us/en/article/8115-access-your-square-appointments-future-booking-report | Official product documentation | Current US documentation defines collected/uncollected/projected values and states that a refund without appointment cancellation is not reflected in the future-bookings report | That the report is wrong, or that every Square account/plan/region has the same behavior | No date displayed | TIME-SENSITIVE PRODUCT DETAIL | Before publication and every 90 days if cited | HIGH for scoped example |
| A29-S08 | E12 | Square Support, *Match transfers to sales* — https://squareup.com/help/us/en/article/3813-match-deposits-to-sales | Official product documentation | Payments can be traced into transfers; cutoff timing, location, bank destination, and permissions affect inspection | That a local bank deposit reconciles or that missing same-day funds indicate data loss | No date displayed | TIME-SENSITIVE PRODUCT DETAIL | Before publication and every 90 days if cited | HIGH for documented route |
| A29-S09 | E10,E11 | Square Support, *Edit, merge, or delete customer profiles* — https://squareup.com/help/us/en/article/8401-edit-merge-or-delete-customer-profiles | Official product documentation | Customer records can be edited and merged; current docs describe duplicate suggestions and irreversible merge behavior | That a merge was correct, that all identity conflicts are detected, or that historical states are fully auditable | No date displayed | TIME-SENSITIVE PRODUCT DETAIL | Before publication and every 90 days if cited | HIGH for documented behavior |
| A29-S10 | E10 | Square Developer, *Square Webhooks* — https://developer.squareup.com/docs/webhooks/overview | Official developer documentation | Downstream event delivery can be retried, duplicated, and eventually discarded after the documented retry window if not acknowledged | That a salon uses webhooks, that a specific integration missed/duplicated an event, or that the source record is wrong | No date displayed | TIME-SENSITIVE PRODUCT DETAIL | Before publication and every 90 days if cited | HIGH for integration behavior; LOW for salon outcome without local evidence |
| A29-S11 | E13 | Square official Statuspage, *Incident History* — https://square2.statuspage.io/history | Official public status history | Provides a current public record of incidents disclosed on that status surface | Complete incident coverage, account-specific impact, root cause, or reliability from months with no listed incident | Continuously updated | TIME-SENSITIVE PRODUCT DETAIL | At the time of any incident-related claim | MEDIUM-HIGH for disclosed incidents only |
| A29-S12 | E10 | NIST SP 800-92, *Guide to Computer Security Log Management* — https://csrc.nist.gov/pubs/sp/800/92/final | Authoritative government technical guidance | Logs can support auditing, investigations, policy-violation detection, and operational problem analysis; log sources and management have limitations | A complete account of real-world activity, user intent, or a salon-specific diagnosis | Published 2006-09-13; NIST page updated 2021-10-12 | DURABLE PRINCIPLE with aging implementation detail | Review annually; replace if superseded | HIGH for log-boundary principle |
| A29-S13 | E10,E11 | Fresha Help Center, *Manage permission roles* — https://www.fresha.com/help-center/knowledge-base/team/100692-manage-permission-roles | Official product documentation | Current documented role edits can apply immediately to assigned team members | That a particular permission change occurred, was authorized, or produced a business discrepancy | No date displayed | TIME-SENSITIVE PRODUCT DETAIL | Before publication and every 90 days if cited | HIGH for documented behavior |

## What the evidence changes about the initial taxonomy

### Retained

- identity disagreement;
- appointment-state disagreement;
- money and liability disagreement;
- communication-state disagreement;
- report-definition or reconciliation disagreement;
- configuration/permission change;
- integration or device consequence;
- known incident context.

### Reframed

1. **Different numbers do not equal drift by themselves.** Reports may use different states, exclusions, date bases, locations, filters, or refresh points.
2. **Operational truth is question-specific.** The authoritative record for a completed visit is not automatically the authoritative record for a settled payout or outstanding gift-card liability.
3. **Integration evidence is secondary unless the salon depends on an integration.** Developer documentation belongs only where a downstream business consequence exists.
4. **Configuration drift is not assumed.** The evidence establishes that settings and permissions can change and affect behavior; only local records establish whether an unintended change occurred.
5. **Public incidents contextualize, not exonerate or convict.** E13 is one evidence surface, never the final verdict.

## Material claim audit

### SUPPORTED

| Claim | Evidence | Safe interpretation |
| --- | --- | --- |
| A point-in-time acceptance result should not be treated as permanent proof of future conditions. | S01 plus A28 evidence boundary | Repeat testing is justified; no universal schedule is established. |
| Client identity records can be edited or merged under documented product rules. | S02, S09 | Inspect local identity outcomes; do not call a documented mechanism a defect. |
| Appointment status can represent distinct operational states and may be changed manually or automatically in the cited product. | S03 | Compare the state with the real event; do not generalize to every product. |
| Report comparison requires attention to definitions, filters, states, date basis, location, exclusions, and refresh timing. | S04–S08 | Reconcile like with like before classifying an exception. |
| Deposits and gift cards can require liability-state reconciliation rather than treatment as ordinary sales/payment totals. | S05, S06 | Use the cited definitions only as examples; local E12 decides the result. |
| A refund and an appointment cancellation are not interchangeable states in the cited Square future-bookings report. | S07 | Narrow documented example, not a vendor verdict. |
| A payment-to-bank question may require tracing payments into transfers with timing/location context. | S08 | A same-day difference may be explained by cutoff timing. |
| Downstream event delivery can include retry and duplicate behavior in the cited integration mechanism. | S10 | If relevant, inspect downstream receipt and processing; do not infer a local integration failure. |
| Logs and incident histories have useful but bounded evidentiary roles. | S11, S12 | Combine with raw records; absence of evidence is not evidence of absence. |

### PARTIALLY SUPPORTED / EDITORIAL SYNTHESIS

| Claim | Basis | Limitation |
| --- | --- | --- |
| The seven-step recurring verification loop is the smallest useful method. | S01–S13 plus canonical C09/C18/C25 | Editorial synthesis; no comparative validation against another control method. |
| A change-trigger plus recurring sample is preferable to a fixed universal calendar. | S01 and observed mutability in S02/S03/S13 | Sensible risk-based inference; no salon trial or optimal cadence evidence. |
| Identity, appointment, money, communication, report, configuration, integration, and incident form a complete taxonomy. | Source coverage and canonical concepts | Useful coverage map, not proven complete. |
| A documented exception record improves later diagnosis. | E10–E13 logic and S12 | No salon outcome study establishes effect size. |
| Repeated reconciliation renews reasonable operational confidence. | S01 and report/reconciliation documentation | “Reasonable” remains scoped; it is not audit assurance or a reliability guarantee. |

### HYPOTHETICAL ONLY

- a client merge causes an appointment or consent-history disagreement;
- a refund remains visible in one owner-facing report but not another outside the cited Square example;
- a permission change causes a staff workflow failure;
- an integration retry produces a duplicate downstream action;
- a report definition or service configuration changes silently;
- a salon discovers drift three months after go-live.

Any such narrative must be clearly labeled constructed and may not be attributed to Visaxa, Fresha, Square, or a real salon without retained local evidence.

### NOT SUPPORTED / EXCLUDED

- “Operational truth drift” is a recognized standard salon-software industry term.
- Record or report disagreement is common or increasing among salons.
- Every report should show the same number.
- Every difference is an error or corruption.
- One discrepancy proves a software bug, integration bug, staff failure, or configuration failure.
- One discrepancy means the salon should replace its software.
- Weekly, monthly, or quarterly is the correct universal review frequency.
- Logs contain every relevant event or prove user intent.
- A public status page is a complete incident record.
- Any named vendor is accurate, inaccurate, reliable, unreliable, or superior.
- Visaxa currently provides the A29 mechanisms.

## Proposed central answer

> Choose a material real event and write down what should now be true. Identify the authoritative record for that question, then inspect the downstream client, appointment, payment, balance, transfer, or report result using the same definitions, date basis, location, states, filters, and refresh point. Classify the result as a pass, explained difference, unresolved exception, or not checked. Repeat after material changes and on a risk-appropriate sample. A mismatch is a reason to investigate; it does not identify the cause or prove that the software should be replaced.

This is publishable as an explicitly bounded method, not as a validated control standard.

## Evidence needed for a real salon conclusion

1. A dated event sample selected before inspecting its outcome.
2. The salon’s declared authority hierarchy for client identity, appointments, payments, liabilities, and metrics.
3. E11 raw records with definitions, state, location, timestamps, and privacy-safe identifiers.
4. E12 processor, payout, bank, gift-card, deposit, credit, refund, and accounting evidence appropriate to the question.
5. E10 change/audit/event records with documented coverage, access, and retention gaps.
6. E13 incident records only where timing and affected surface are relevant.
7. Expected result, observed result, consequence, status, owner, and follow-up investigation.
8. Repeated samples before generalizing beyond one event or period.

## Search / AI discovery record — E18 only

Queries inspected on 2026-09-12 included variants of:

- `salon software wrong reports appointments payments mismatch duplicate clients`;
- `CRM data inconsistent reports don't match payments appointments`;
- `salon booking software wrong appointment status report`;
- `software worked at launch now reports are wrong configuration changed`.

Visible formulations clustered around reports not matching payments, duplicate clients, disappearing or wrong appointments, inconsistent CRM data, stale stages, synchronization gaps, and software that “used to work.” Search results included vendor documentation, support pages, forums, and low-authority marketing content. This record informs natural language only. It does not establish prevalence, cause, market size, or a vendor defect.

## Durable principles versus time-sensitive detail

### Durable principles

- acceptance evidence is scoped to its date and conditions;
- authority must be defined per business question;
- reconciliation requires common definitions and time boundaries;
- a source record and downstream consequence are separate evidence surfaces;
- unknown and unexplained must remain visible;
- a discrepancy does not diagnose its cause;
- logs and public incident histories are bounded evidence.

### Time-sensitive details

- current merge and status behavior;
- current report fields, exclusions, filters, and refresh timing;
- current permission effects;
- current webhook retry behavior;
- current status-page history.

Every time-sensitive detail must retain vendor, product/region scope, access date, and refresh requirement. Remove it rather than generalize if it cannot be refreshed.

## Future Visaxa evidence gate

Current status: **NOT READY FOR PRODUCT CLAIM**.

Repository evidence states that no authoritative Visaxa capability matrix exists and product support remains unverified. A later bridge requires:

- a versioned, dated deployed capability record;
- a defined salon scenario and privacy-safe event;
- the authoritative before/after record;
- downstream client/appointment/payment/report evidence;
- event or audit evidence with scope and retention limits;
- financial tie-out where money is claimed;
- role, location, device, integration, and configuration conditions;
- retained screenshots/exports and reproducible steps;
- known exceptions and failed cases;
- a narrow claim restricted to the tested scenario.

Code presence, roadmap intent, UI labels, or undocumented runtime behavior are not sufficient.

## Evidence gaps

1. No real salon recurring reconciliation record.
2. No evidence establishing an optimal sample size or cadence.
3. No study validating the proposed status vocabulary or loop.
4. No complete cross-vendor comparison of audit, history, or reconciliation capabilities.
5. No evidence that the candidate taxonomy is exhaustive.
6. No authoritative Visaxa product capability source.
7. No observed product behavior for any named vendor.
8. No jurisdiction-specific accounting, privacy, or audit conclusion.

## Final verdict

The available evidence supports a cautious, durable A29 method centered on material events, declared authority, downstream consequences, like-for-like reconciliation, and explicit exceptions. It does not support prevalence, universal cadence, automated-monitoring advice, product reliability judgments, or a Visaxa product bridge.

**READY TO DRAFT WITH KNOWN LIMITATIONS.**
