# A31 Article Design — Choose the Proportionate Remedy

Status: **READY TO DRAFT WITH KNOWN LIMITATIONS**

## Canonical ownership

- Article ID: A31
- Decision: D29 — **Stay, renegotiate, supplement or switch?**
- Public decision question: **Once the salon knows what is wrong, which viable response achieves the required outcome with the lowest credible future burden?**
- Predecessor: A30 / D27–D28. A30 classifies the surviving problem.
- Successor: A32 / D30. A32 owns safe retirement of the old system if replacement is selected.
- Concepts: C02, C15, C21, C26.
- Evidence: E06, E07, E08, E11, E16.
- Entry condition: the required outcome and the problem class are already bounded; the owner is no longer diagnosing the original symptom.
- Exit condition: the owner has eliminated responses that cannot meet the outcome and recorded a defensible choice, uncertainties, success evidence, review point, and escalation trigger.

## Ownership boundaries

- A10 owns the early question: is the CRM actually the problem?
- A30 owns the late diagnostic question: what does the surviving discrepancy prove?
- A24 owns which candidate products satisfy known requirements.
- A31 owns intervention choice across accept, repair, commercial change, supplement, negotiate/escalate, and replace.
- A32 owns archive, reconciliation, access closure, rollback window, and final shutdown.

## Reader state

The reader arrives relieved that the cause is finally clearer, but emotionally pulled toward two shortcuts: tolerate the problem because changing systems is disruptive, or replace the platform because the problem now feels proven. The owner may also treat prior subscription, setup, training, or migration effort as a reason to stay.

The reader should leave able to say:

> These options can meet the required outcome. Of those, this one has the lowest credible prospective burden at an acceptable level of risk and reversibility. These facts remain unknown, so the decision expires or escalates if this evidence is not produced.

## Research conclusion

“Minimum necessary change” is useful only after adequacy is established. A small-looking workaround can create indefinite reconciliation, duplicate records, another supplier dependency, and staff friction. A replacement can remove recurring burden but introduce migration, training, continuity, and exit risk. The decision rule is therefore not “choose the smallest intervention.” It is:

1. state the required outcome and acceptable proof;
2. eliminate any response that cannot reliably meet it;
3. compare the remaining responses by future operating burden, transition burden, risk, evidence strength, and reversibility;
4. ignore sunk cost except where a present contractual consequence is still avoidable;
5. where uncertainty is decision-relevant, run a bounded reversible test with criteria agreed in advance;
6. record when the decision must be reviewed or escalated.

## Investigation sequence

1. The owner assumes that a known problem should now have an obvious remedy.
2. The smallest visible change—accepting one more manual step—looks safest.
3. Counting the repeated work reveals that “small” can mean permanent operating burden.
4. Replacement looks cleaner until transition and exit burdens are placed beside it.
5. The option set expands without becoming a ranking: accept, repair, plan/contract change, supplement, negotiate/escalate, replace.
6. Options that fail the required outcome are removed before cost comparison.
7. Prior spending is separated from future consequence.
8. Evidence quality and unknowns become part of the choice rather than footnotes.
9. A bounded test resolves a material uncertainty without allowing a temporary workaround to become permanent by default.
10. The owner records one proportionate response and the condition that would reopen the decision.

## Decision method

For each plausible response, record:

- required outcome met: yes / no / unknown;
- evidence: documented, observed, contractual, estimated, or missing;
- recurring operating burden: extra steps, duplicate truth, reconciliation, support, subscription, staff/client friction;
- transition burden: setup, migration, training, downtime, verification, continuity;
- failure consequence and uncertainty;
- reversibility and exit dependency;
- success evidence and review trigger.

Do not create an artificial weighted score. A hard requirement can eliminate an option regardless of its total, and unlike quantities must not be converted into false precision.

## Overlap audit

| Article | Existing ownership | A31 separation |
| --- | --- | --- |
| A10 | Determines whether operational friction is process, adoption, configuration, or a genuine software limit | A31 begins only after that diagnosis and compares interventions |
| A17 | Defines what business information must survive | A31 may use the exit inventory as transition evidence but does not rebuild it |
| A23 | Tests whether leaving is practically credible | A31 uses that evidence as an input, not as an offboarding lesson |
| A24 | Compares candidate systems after requirements exist | A31 compares remedy classes; product comparison begins only if replacement remains viable |
| A25 | Tests whether migration is complete enough | A31 treats migration burden as a risk input, not an execution plan |
| A30 | Classifies one surviving discrepancy | A31 accepts the classification and selects the commercial/operational response |
| A32 | Safely shuts down the old system | A31 stops when replacement is selected |

The method is new because no existing article compares recurring burden with transition burden across remedy classes after diagnosis. Separation is strong if A31 avoids rediagnosis, vendor ranking, migration instructions, and shutdown steps.

## AI extraction target

- Exact problem: the cause is sufficiently known, but the remedy is not.
- Decision rule: eliminate inadequate options, then select the viable response with the lowest credible future burden at acceptable risk and reversibility.
- Critical distinction: smallest visible change is not necessarily lowest total future burden.
- Evidence rule: unknowns remain explicit; sunk cost does not justify future loss.
- Output: chosen response, evidence, unresolved assumptions, success condition, review point, and escalation trigger.
- Next question: if replacement is chosen, how can the old system be retired without losing evidence, access, or continuity?

Natural AI prompt:

> We know what is wrong with our salon software. How do I decide whether to work around it, add another tool, negotiate, upgrade, or switch?

## Internal links

- A30 at the opening: the classification A31 inherits.
- A17 when transition burden requires knowing what must survive.
- A23 when exit credibility and contractual access become decision inputs.
- A24 only in the replacement branch, where candidate comparison would begin.
- Do not link A32 until it is published; end with its exact question.

## Illustration concept

A physical salon-owner decision desk. A central sheet states the required outcome. Beside it sit a recurring-work tally, a one-time-change estimate, and an evidence note. A handwritten decision record crosses out inadequate responses and circles a bounded choice with a review condition. The visual thesis is immediate: **the smallest-looking change can create the largest repeating burden.** No flowchart, software cards, dashboard, or false score.

## Future Visaxa bridge

Status: **NOT READY FOR PRODUCT CLAIM.** A future product statement would require versioned, observable evidence showing how Visaxa addresses the exact diagnosed outcome, the operating burden it removes, the transition burden it introduces, and the limits or conditions of that claim. A31 must not mention a current Visaxa capability without that record.

## Draft readiness

Primary evidence supports structured option appraisal, business-as-usual comparison, prospective cost, explicit uncertainty, reversible testing, and adaptation/total-cost considerations. It does not establish a universal remedy, salon-specific effectiveness rate, migration duration, or named-vendor superiority.

**READY TO DRAFT WITH KNOWN LIMITATIONS.**
