# A29 Article Design — Monitor Operational Truth After Go-Live

Status: **READY TO DRAFT WITH KNOWN EVIDENCE LIMITS**

## Canonical ownership

- Article ID: A29
- Owning decision: D26 — **Is operational truth stable over time?**
- Exact question: **How can a salon owner obtain reasonable recurring evidence that the records and reports relied on to run the salon still correspond to real business events weeks or months after go-live?**
- Predecessor: A28 / D25. A28 establishes client continuity under defined conditions at a point in time.
- Successor: A30 / D27–D28. A30 diagnoses whether workflow, policy, training, configuration, plan, or platform should change.
- Concepts: C09 operational source of truth; C18 metric contract and reconciliation; C25 operational truth monitoring and scale.
- Evidence types: E10 audit, access, and system logs; E11 raw operational records; E12 accounting, processor, and ledger records; E13 public status and incident history.
- Exit condition: the owner has a repeatable, bounded check that can identify and record a material disagreement without pretending to know its cause or remedy.

No ownership conflict was found in the SOT, Human Decision Graph, Decision-to-Concept Map, Article Graph, A28 design, or published A28.

## A28 → A29 → A30 reasoning chain

### A28 establishes

A material client journey passes only when the client can complete it, understands the result, and the corresponding salon records agree under the documented test conditions.

### A28 cannot establish

That the same agreement remains true after later bookings, refunds, client merges, staff changes, permission edits, report refreshes, integration deliveries, configuration changes, or incidents. A28 is point-in-time evidence.

### Therefore A29 asks

**How can the owner tell whether the system still represents the salon’s real operation accurately enough to trust after weeks or months of change?**

### A29 should establish

A minimum recurring verification loop that begins with a real material event, identifies the expected business result and authoritative record, checks the downstream operational or financial consequence using declared definitions, and records any exception with evidence and scope.

### A29 cannot establish

Why a disagreement occurred, whether it is a workflow, training, policy, configuration, integration, plan, or platform failure, or which intervention is economically justified. A mismatch is a signal, not a diagnosis.

### Therefore A30 asks

**Once a material disagreement is documented, what should change: the workflow, policy, training, configuration, plan, or platform?**

## Reader state

### Entering

The owner has completed a migration and realistic go-live/client tests. The system worked when tested. The owner reasonably assumes that the successful launch remains evidence of current accuracy.

### Likely fear

The salon may be making staffing, client, cash, or growth decisions from a calendar or report that no longer corresponds to what actually happened.

### Likely incorrect models

1. A passed go-live test remains valid indefinitely.
2. If screens disagree, one must be broken.
3. If no one complained, the records remain trustworthy.
4. Every report should equal every other report.
5. One mismatch proves that the software must be replaced.

### Leaving

The owner can define a small recurring check, distinguish legitimate differences in scope/timing from unresolved exceptions, and decide when a discrepancy requires investigation. The owner cannot yet choose the remedy.

## Primary human question

> My salon software worked when we launched it. How do I check that its client records, appointments, payments, balances, and reports still match what is actually happening months later?

## Adjacent AI/search formulations

These are entry-language hypotheses informed by inspected search results, not prevalence claims:

1. Why do my salon software reports no longer match my payments?
2. How can I tell whether appointment statuses are being kept accurate?
3. Why are duplicate clients changing my salon reports?
4. How often should I check salon software data after go-live?
5. What should I reconcile between my booking system and payment processor?
6. Why does one salon report show a different total from another?
7. How do I know whether a refund, deposit, or gift-card balance was recorded correctly?
8. Can a software integration look connected while some updates are missing?
9. What should I check after changing permissions, prices, services, or booking rules?
10. Does one wrong report mean I need different salon software?

## Central thesis

**A successful launch does not create permanent trust; operational trust is renewed by repeatedly tracing a small sample of material real events from what happened, to the authoritative record, to the downstream result, and recording every unexplained difference without diagnosing it prematurely.**

Supporting claims:

1. Business states remain editable and can have different operational meanings across appointments, payments, liabilities, and reports.
2. A report comparison is meaningful only when the owner declares the metric definition, date basis, location, filters, included states, and refresh point.
3. Logs, raw records, financial records, and incident history answer different questions and none is a complete account by itself.

Important limitation: no real salon monitoring record was collected. The proposed loop is an evidence-bounded editorial synthesis, not a validated control framework or prescribed audit standard.

The article must not imply that every difference is corruption, that all reports should match exactly, or that a discrepancy identifies the correct remedy.

## What A29 owns

- renewing confidence after point-in-time acceptance;
- selecting material real events and their expected business consequences;
- naming the authoritative record for identity, appointment, payment, balance, and metric questions;
- comparing like with like by definition, time, location, state, and filter;
- recording PASS, EXPLAINED DIFFERENCE, UNRESOLVED EXCEPTION, and NOT CHECKED;
- using E10–E13 evidence without overstating coverage;
- choosing a risk- and change-sensitive review trigger without prescribing a universal cadence;
- handing a documented disagreement to A30.

## What A29 does not own

- migration completeness (A25);
- initial go-live acceptance (A26);
- interpretation of staff workarounds (A27);
- point-in-time client journey testing (A28);
- root-cause diagnosis or intervention choice (A30);
- deciding whether to stay or switch (A31);
- product monitoring architecture, observability stacks, databases, event sourcing, or telemetry design;
- accounting, legal, privacy, or audit assurance;
- claims that a named product is accurate, inaccurate, reliable, or unreliable.

## Candidate discrepancy classes after research

These are check domains, not claims that they occur in every salon:

| Owner-visible domain | Material question | Evidence boundary |
| --- | --- | --- |
| Client identity | Do the selected records still represent the intended person, contact state, history, and consent context? | Duplicate/merge documentation shows mutable identity behavior; only local E10/E11 evidence establishes the salon result. |
| Appointment state | Does the recorded state correspond to booked, confirmed, changed, cancelled, no-show, or completed reality? | Official status definitions show distinct and editable states; they do not prove staff used them correctly. |
| Money | Do charge, refund, payout, deposit, gift-card, credit, and outstanding-balance records reconcile under their respective definitions? | E12 is required; one summary may intentionally exclude states shown elsewhere. |
| Communication | Does the recorded event correspond to the promised message and current appointment state? | A28 owns client receipt/comprehension; A29 checks continuing state agreement and exceptions. |
| Reporting | Does the report use the declared grain, date basis, filters, states, exclusions, and refresh point? | Different correct definitions can produce different totals. |
| Configuration and permissions | Do current service, price, duration, availability, role, and access rules still reflect the intended operation? | Current docs establish possible configuration effects; local records establish current state. |
| Integration or device consequence | Did the relevant source event reach the downstream surface once and in usable form? | Retry/duplicate/discard documentation supports checking; it does not prove a local failure. |
| Incident context | Did a known incident overlap the unexplained period or function? | E13 can contextualize; absence from public history is not proof of reliability. |

## Minimum useful recurring verification loop

This is the proposed editorial method supported in parts by the evidence and explicitly labeled as synthesis:

1. **Choose a material real event.** Examples may include a changed appointment, client merge, refund, deposit redemption, gift-card use, permission change, or integrated update.
2. **Write the expected business truth.** Record what should now be true for the client, appointment, staff member, balance, or location.
3. **Name the authoritative record.** Decide which raw operational or financial record controls this particular question; do not let two summaries silently compete as “the truth.”
4. **Trace the downstream consequence.** Check the relevant client profile, calendar state, message/event record, financial transaction, liability, transfer, or report.
5. **Reconcile like with like.** Hold definition, date basis, location, included state, filter, and known refresh delay constant.
6. **Classify the result.** PASS; EXPLAINED DIFFERENCE; UNRESOLVED EXCEPTION; NOT CHECKED.
7. **Retain the exception.** Record the event, expected and observed result, evidence, consequence, owner, and next investigation point. Do not choose the remedy inside A29.

### Cadence rule

No universal weekly or monthly frequency is supported. The article should recommend two complementary triggers without presenting either as a standard:

- after material change: configuration, permission, price/service, integration, bulk edit/merge, incident, or process change;
- a recurring owner-defined sample proportionate to consequence and transaction volume.

The public draft must say that frequency remains a business-risk decision unless applicable accounting, contractual, or regulatory requirements prescribe one.

## Narrative structure

The article must read as an investigation, not monitoring documentation.

| Section | Initial mental model | Discovery | Better model / transition |
| --- | --- | --- | --- |
| 1. The launch test was still true—but old | A28/go-live pass proves current accuracy | The evidence described one date and set of conditions | Confidence must be renewed, not assumed |
| 2. A real event became the anchor | Start with dashboards and compare totals | A report is downstream of an event and definition | Begin with one material event and expected result |
| 3. “The system” contained several truths | One screen is the truth for everything | Identity, appointment, payment, liability, and report questions can have different authoritative records | Name authority per question |
| 4. Different totals were not automatically wrong | Every report must match | Official definitions show exclusions, filters, date bases, states, and refresh timing | Reconcile like with like before calling a difference an exception |
| 5. The event had a downstream consequence | Correct source record is sufficient | A message, payout, balance, report, or integration can be a separate evidence surface | Trace the selected event to the consequence that matters |
| 6. Logs helped, but did not become reality | Audit/log history explains everything | Logs cover recorded events and depend on access, retention, and implementation | Combine E10 with E11/E12 and acknowledge gaps |
| 7. The exception record became the useful output | Monitoring should produce a score | A bounded discrepancy needs evidence, consequence, owner, and status | Preserve unknowns without inflating them |
| 8. Calendar frequency was the wrong first question | “Check monthly” is universally safe | Risk changes after configuration, merges, incidents, refunds, or integration changes | Use change triggers plus an owner-defined recurring sample |
| 9. Finding drift did not choose the fix | A mismatch proves replacement is needed | The same signal can come from definitions, workflow, training, configuration, integration, plan, or platform | End at A30’s causal remedy question |

Do not invent a salon observation. If a narrative example is needed, label it once as a constructed example and keep every outcome hypothetical.

## AI extraction target

An AI should be able to extract:

- exact problem: launch evidence has expired as proof of current conditions;
- decision rule: trace material events through authoritative records and downstream consequences under declared definitions;
- result vocabulary: PASS / EXPLAINED DIFFERENCE / UNRESOLVED EXCEPTION / NOT CHECKED;
- evidence boundary: documentation describes behavior; only local records establish a local result;
- non-diagnosis rule: a discrepancy is evidence to investigate, not proof of cause or replacement;
- next question: A30.

Concise future answer block:

> To check whether salon software still represents the business correctly, sample a material real event and write down what should now be true. Compare the authoritative client, appointment, or transaction record with the downstream result that matters, using the same date basis, location, status definitions, filters, and refresh point. Record a pass, explained difference, unresolved exception, or untested area. One disagreement does not identify the cause or prove that the software should be replaced.

## Copyable AI question

> My salon software worked at go-live. What small recurring checks would show whether its client, appointment, payment, balance, and report records still match the real business months later?

No link belongs inside this question.

## Internal-link strategy

1. Primary upstream link to A28 near the opening: a client-continuity pass is point-in-time evidence.
2. Optional contextual link to A27 only where an unofficial record becomes one possible source of a disagreement; do not re-diagnose workarounds.
3. A21 must remain plain text until published; it owns initial metric/report proof.
4. Do not link A30 until it is published. End on its exact question.
5. Keep the public article to one primary and at most one contextual internal link.

## Future Visaxa bridge

### Status

**NOT READY FOR PRODUCT CLAIM.** The site repository explicitly records product support as unverified and contains no authoritative Visaxa capability matrix.

### Natural insertion point

After the section establishing the exception record, before cadence. The problem and required property are clear there, while no remedy has yet been selected.

### Evidence-shaped bridge

| Element | Requirement |
| --- | --- |
| Problem | Owner cannot tell whether a real event still agrees with the authoritative record and downstream result. |
| Required operational property | Inspectable state history, stable identity, explicit status definitions, scoped financial records, and a traceable exception/reconciliation route. |
| Possible Visaxa mechanism | UNKNOWN until an authoritative, versioned product capability record exists. |
| Required observable evidence | Deployed version/date; account/role/location/device; seeded or privacy-safe real scenario; before/after state; corresponding client/appointment/payment records; audit/event evidence with coverage; report definition and filters; processor/ledger tie-out where money is claimed; retained screenshots/exports; known omissions and retest. |
| Limitation | A passing scenario supports only that tested configuration, event, role, surface, and date. It does not prove permanent consistency or superiority. |

### Prohibited future claims

- Visaxa keeps all records synchronized or prevents drift.
- Visaxa provides a complete or immutable audit trail.
- Visaxa reports always match accounting or processor records.
- Visaxa automatically detects every discrepancy.
- Visaxa is more accurate than named competitors.
- Any claim based only on code, roadmap, UI presence, or documentation without observed production evidence.

## Visual concepts — design only

### 1. The same appointment, three dated papers

A landscape desk composition with the go-live acceptance card, a later appointment record, and a month-end report extract. Small handwritten circles reveal where time, state, or amount no longer answers the same question. The visual conclusion: the old pass is still valid for its date, not for today.

### 2. A receipt pinned to its consequences

One tactile receipt-like real event sits at the center. Around it are a client card, calendar page, payment slip, and report margin note. No arrows; matching reference marks and pencil annotations show which pieces agree and which remains unresolved. The figure rewards inspection while making the event-to-consequence method visible.

### 3. The exception ledger

A calm editorial spread showing four clipped paper rows: PASS, EXPLAINED DIFFERENCE, UNRESOLVED EXCEPTION, NOT CHECKED. One unresolved row is expanded with expected result, observed result, evidence, and owner. It must not resemble a software dashboard or technical monitoring screen.

No final SVG is authorized at this stage.

## Draft readiness

The evidence supports a durable owner-facing method and carefully attributed product examples. It does not support a real-salon drift verdict, universal cadence, product reliability claim, or automated-monitoring promise.

**Verdict: READY TO DRAFT.**
