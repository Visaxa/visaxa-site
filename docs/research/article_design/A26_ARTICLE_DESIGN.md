# A26 Article Design — Define Go-Live Acceptance Before Onboarding Ends

Status: **PUBLICATION DESIGN**

Canonical owner: **A26 / D23**

Prepared: **2026-08-27**

## Decision ownership

- Exact question: **How can a salon owner prove that the configured operation works for staff, clients and money before accepting onboarding and going live?**
- Entry: A25 has reconciled the migrated records and relationships to its declared thresholds.
- Exit: named salon roles have completed ordinary and exception scenarios under realistic conditions; money has reconciled; every result is recorded as PASS, CONDITIONAL, FAIL or NOT TESTED; a named owner has authorized or blocked go-live.
- Next: D24 / A27 asks why staff still use workarounds after a technically working system is available.
- Excluded: proving migration completeness (A25), diagnosing adoption or process workarounds (A27), vendor selection, product ranking, and final retirement of the old system.

## Reader state

The owner sees a configured calendar, imported clients and a nearly completed onboarding checklist. The reasonable assumption is that the salon is ready. The fear appears when the owner imagines the first busy morning: a receptionist with the wrong access, a client booking the wrong duration, a refund that changes the closeout, or a late cancellation that nobody has rehearsed.

Natural AI prompt: **“My salon software onboarding is almost finished. What real front-desk, staff, client, payment, and exception tests should I run before I agree to go live?”**

The reader should finish able to define acceptance before sign-off, run the test with the people who will do the work, and refuse to convert an unknown or material failure into a pass.

## Thesis

**A salon is ready to go live only when its actual roles can complete ordinary and exception work under realistic conditions, the resulting records and money reconcile, and every unresolved result has an explicit owner and consequence.**

Supporting claims:

1. Configuration proves that settings exist; it does not prove that the right person can complete the work on the device and account they will actually use.
2. A normal booking is too narrow because cancellations, no-shows, absences, corrections, refunds and permission denials expose different operating conditions.
3. Go-live acceptance is a recorded business decision, not the disappearance of every defect or the completion of a vendor checklist.

Limitation: public documentation can define current product behaviors and plausible test scenarios. It cannot establish that a salon’s configured account passed those scenarios without direct task observation, client-journey evidence, financial reconciliation and an acceptance record.

## Investigation sequence

| Section | Starting model | Discovery and improved model | Evidence |
| --- | --- | --- | --- |
| 1. The setup looked finished | Onboarding completion means operational readiness | The checklist describes configured elements; acceptance asks whether the salon can operate | C07, C23; E07, E14 |
| 2. The first role changed the result | An owner test represents everyone | Permissions, account, device and responsibility change what a person can do | C04, C23; E02, E14 |
| 3. A client took a different route | A staff-created booking proves booking works | The client journey has its own availability, service, staff, price and communication conditions | C23; E04, E14 |
| 4. Ordinary work hid the weak point | One happy-path appointment is enough | Exceptions reveal policy, state and responsibility gaps | C23; E02, E04, E14 |
| 5. Money made the test accountable | A completed checkout proves the day balances | Payment state, tip, discount, refund, liability and staff consequence must reconcile | C04, C23; E02, E14 |
| 6. The result needed more than yes/no | Small issues can be remembered and fixed later | PASS, CONDITIONAL, FAIL and NOT TESTED preserve uncertainty and ownership | C04, C23; E07, E14 |
| 7. Sign-off became a decision | Go-live follows automatically when onboarding ends | A named owner accepts evidence, conditions and blockers before authorizing launch | C04, C07, C23; E07, E14 |

## Acceptance model

For every scenario record:

- role, account, permissions, device and location;
- starting data and realistic timing;
- ordinary or exception condition;
- expected observable result;
- actual observable result;
- downstream record, message, payment and reporting effect;
- status: **PASS / CONDITIONAL / FAIL / NOT TESTED**;
- defect or condition, owner, deadline and retest evidence;
- go-live consequence.

Unknown cannot pass. CONDITIONAL requires an accepted limitation, compensating action, owner, deadline and explicit launch consequence. A material FAIL or NOT TESTED scenario blocks acceptance.

## Scenario coverage

Minimum role coverage: owner/manager, front desk, service provider and client. Add payroll, inventory or multi-location roles only when they are material to the salon.

Minimum scenario coverage:

- ordinary booking, arrival, service completion, checkout and closeout;
- online client booking and the messages or confirmations the client actually receives;
- no-show, late cancellation, staff absence, different service duration, incorrect booking, duplicate client, refund/correction, permission denial and unavailable staff/resource;
- total, payment state, tip, discount, refund, package or gift-card redemption where used, staff-pay consequence where used, and end-of-day reconciliation.

## Evidence architecture

- **E02:** direct observation of each role completing the task under the intended account, permissions and device.
- **E04:** end-to-end client journey from availability and selection through confirmation, change, arrival and downstream record.
- **E07:** onboarding scope, contract, service-level or acceptance terms that define deliverables, responsibility and sign-off consequences.
- **E14:** the salon-specific scenario, expected result, observed result, defect record, retest and acceptance decision.

Official product documentation may establish that a current behavior, permission or report exists. It cannot substitute for the salon’s observed A26 result.

## Internal link plan

Exactly one internal link: early in the article, link to A25 with the meaning **first prove that migrated records and relationships survived; then test the configured operation**. Do not expose A27 as a link until it is published.

## Editorial figures

1. **The salon opened at 9:00.** A compact editorial daybook contrasts a clean setup checklist with five moments from an ordinary opening hour. The visual conclusion: readiness appears in the working day, not the setup screen.
2. **Go-live sign-off.** A restrained owner’s acceptance sheet shows four scenario statuses and makes NOT TESTED visibly incapable of becoming a signature. The visual conclusion: the signature follows evidence.

Both figures use a 760 × 430 landscape viewBox, embedded title and description, large type, generous margins and one muted terracotta accent. They must remain legible when scaled to 375 px without horizontal scrolling.

## Failure review

- Do not turn the article into generic software QA guidance or a checklist detached from salon work.
- Do not imply that any named vendor failed a scenario.
- Do not treat a documented feature as a passed test.
- Do not drift backward into A25 source-to-target reconciliation.
- Do not drift forward into A27 adoption diagnosis or workaround remedies.
- Do not use “seamless,” “future-proof,” “guaranteed,” “best practice” or Visaxa product language.
- Do not publish an invented threshold or pronounce a salon ready without its local E02/E04/E14 evidence.

## Publication recommendation

- Public title: **Before Your Salon Goes Live, Test a Real Working Day**
- Subtitle: **Onboarding can be complete while the front desk, staff, clients, payments, and exceptions are still unproven.**
- Next question: **What if the system technically works, but staff still keep using spreadsheets, notes, or the old system?**
- Design status: **READY WITH KNOWN LIMITATIONS**.
