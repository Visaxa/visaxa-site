# A18 Article Design — Evidence Before Trust

Status: **READY TO DRAFT WITH KNOWN LIMITATIONS**

## Canonical ownership

- Article ID: A18
- Decision: D15 — **What evidence would make a candidate trustworthy?**
- Public question: **How can a salon owner pressure-test a software vendor's claim before relying on it?**
- Predecessor: A17 / D14. A17 identifies the records and relationships that must survive a future exit.
- Successor: A19 / D16. A19 tests whether the credible candidate remains affordable at the next operating threshold.
- Concept: C15 — evidence hierarchy and conditional trust.
- Evidence: E05, E06, E07, E13, E14, E16.
- Entry condition: the salon has written at least one material requirement or claim that could change the purchase decision.
- Exit condition: each material claim has a named source, scope, date, observable test or artifact where appropriate, and a verdict of supported, conditional, unknown, or contradicted.

## Ownership boundaries

- A01 identifies broad evaluation dimensions. A18 decides what proof is sufficient for one material claim.
- A04 raises operational risks to consider. A18 turns a chosen claim into an auditable evidence question.
- A10 diagnoses whether the existing product is actually the problem. A18 begins after a replacement requirement exists.
- A17 defines the data that must survive. A18 can use one portability requirement as an example but does not rebuild the exit inventory.
- A19 owns future-threshold cost.
- A20 owns staff adoption trials.
- A21 owns report reconciliation.
- A22 owns detailed failure-case demonstrations.
- A23 owns exit readiness and post-cancellation access.
- A24 owns comparison and elimination across candidates.

## Unique decision and cannibalization audit

A18 owns one narrow decision: **is the evidence behind this particular vendor claim strong enough for the salon to rely on it?**

| Existing article | Existing answer | A18 separation |
| --- | --- | --- |
| A01 — How to Evaluate a CRM | What dimensions should be evaluated? | A18 supplies a claim-by-claim proof method, not another evaluation framework. |
| A04 — How to Choose a Salon CRM | What operational risks should an owner consider? | A18 starts with one already-defined requirement and tests the evidence behind a vendor response. |
| A10 — Is Your Salon CRM Actually the Problem? | Is the current friction caused by process, practice, configuration, or software? | A18 evaluates a prospective vendor claim after a genuine need has been established. |
| A24 — Which Salon Software Should You Compare? | Which candidates survive the salon's non-negotiable gates? | A18 defines what counts as a supported pass; A24 applies passes across a shortlist. |

Substantial duplication is avoidable if A18 does not become a feature checklist, product ranking, general buying guide, or catalogue of failure scenarios.

## Reader state

The salon owner has a real requirement and a polished vendor answer. The reasonable starting assumption is that an official page, confident demo, or collection of positive reviews proves the claim. During the investigation, the owner discovers that different claims need different evidence and that a source can be genuine yet still fail to answer the decision.

Emotional trigger: fear of discovering after purchase that a reassuring claim was true only for another plan, workflow, region, role, or definition.

Natural AI prompt:

> How do I pressure-test a salon software vendor's claims before I buy?

Decision after reading: classify a material claim as supported, conditional, unknown, or contradicted without pretending to have performed a product test that did not occur.

## Core thesis

**A vendor claim becomes decision evidence only when its source, scope, conditions, and observable result match the salon requirement being decided.**

Supporting claims:

1. The claim must be rewritten as a precise, falsifiable requirement before evidence can be judged.
2. Documentation, a sample artifact, a witnessed scenario, contract language, and independent assurance answer different questions; none is universally strongest.
3. Missing evidence should remain unknown rather than being converted into a pass or an accusation.

Important limitation: this is an editorial decision method, not a validated procurement instrument, legal opinion, security audit, or substitute for the salon's own testing.

The article must not imply that an official document proves successful operation, that a demo proves production reliability, or that missing documentation proves a capability does not exist.

## Narrative sequence

1. **The reassuring answer** — a vendor says the required capability is included.
2. **The sentence changes under inspection** — “included” lacks plan, role, workflow, output, and exception conditions.
3. **A source can be official and still answer the wrong question** — documentation proves documented scope, not the salon outcome.
4. **The evidence must match the claim** — source, artifact, scenario, terms, and independent evidence have different jobs.
5. **Write the expected result before the demonstration** — prevents the demo from redefining success.
6. **Let unknown remain visible** — conditional and unknown are usable verdicts; optimism is not evidence.
7. **Build a one-page claim record** — claim, requirement, source, date, conditions, test, result, limitation, verdict.
8. **Trust becomes conditional rather than emotional** — the candidate can proceed only for the claims actually supported.
9. **Next question** — if the claims are credible, what will the software cost at the next threshold?

## Evidence method

For each material claim, record:

1. **Decision claim** — the exact statement the salon may rely on.
2. **Required outcome** — who must do what, under which normal and exception conditions, with what observable result.
3. **Evidence object** — current official documentation, terms, sample output, observed scenario, independent assurance, or another claim-appropriate source.
4. **Scope** — product, plan, location, role, configuration, date, and exclusions.
5. **Falsification check** — what observation would show that the claim is not sufficient for this requirement.
6. **Verdict** — supported, conditional, unknown, or contradicted.

## Illustration

One editorial physical-evidence composition: a central printed vendor claim surrounded by four different evidence objects — official documentation, sample output, a salon scenario, and terms/limits. A restrained physical tag reads “TRUST, WITH CONDITIONS.” The visual thesis is that evidence becomes useful only when it matches the decision.

- Figma source: https://www.figma.com/design/kTQXOsLBn7vMMQDwerTJMV
- Production export: `public/blog/how-to-pressure-test-salon-software-vendor-claims/evidence-before-trust.svg`
- Constructed example only; no named vendor claim or observed test.
- Accessibility: meaningful article alt and caption; SVG title and description added to the production asset.

## Internal links

- A17 near the first portability example: the inventory supplies the requirement being tested.
- A24 near the verdict method: supported passes can later feed candidate comparison.
- A19 in the closing transition: credible capability is followed by future-threshold cost.
- Keep the copyable AI question free of links.

## Future Visaxa insertion point

After the claim-record section, a future product-specific passage could show a versioned Visaxa claim, its official documentation, retained test evidence, scope, result, and limitation. It is not publishable until that evidence exists. The current article makes no Visaxa capability claim.

## Draft readiness

Primary sources support the distinction between assertions and evaluated evidence, assessment through examination/interview/testing, requirements-based supplier evaluation, claim–argument–evidence reasoning, and the limitations of endorsements. They do not validate this salon-specific four-verdict method or prove any vendor capability.

**READY TO DRAFT WITH KNOWN LIMITATIONS.**
