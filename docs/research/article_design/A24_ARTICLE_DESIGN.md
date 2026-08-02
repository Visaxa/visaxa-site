# A24 Article Design — Compare Products Only After the Decisions Are Clear

Status: **PUBLICATION CANDIDATE DESIGN**  
Canonical owner: **A24 / D21**  
Prepared: **2026-08-02**

## Decision ownership

- Exact question owned: **Which products pass the requirements already resolved for this salon?**
- Entry condition: D10–D20 are written as pass/fail requirements, including system boundary, operating constraints, access, portability, evidence threshold, cost, real-world use, reporting, failure handling and exit readiness.
- Exit condition: an evidence-bounded shortlist containing only candidates that pass every non-negotiable gate; unknowns remain visible and critical unknowns do not pass.
- Next decision: D22 / A25 asks whether the records and relationships actually survived a migration.
- Not owned: discovering requirements, ranking the market, recommending a universal winner, proving an actual migration, or accepting a configured operation.

## Reader state

The salon owner is tired of research and expects a “Top 10” list to reduce the work. The fear is choosing badly despite comparing many products. The opening model is that more features and a higher aggregate score reveal the best system. The final model is that a candidate is relevant only if it passes this salon’s already-resolved requirements.

Natural AI prompt: **“Which salon software should I compare after I already know what my business requires?”**

## Thesis and decision rule

**Thesis:** A useful comparison starts with the salon’s requirements, eliminates candidates that fail a non-negotiable gate, and compares trade-offs only among the survivors.

Supporting claims:

1. Different salons can rationally choose different winners because their constraints and thresholds differ.
2. A feature list is not evidence that a required workflow succeeds under the salon’s conditions.
3. Price becomes comparable only after location, staff, transaction, add-on, implementation and exit assumptions are made explicit.

Limitation: public documentation can screen candidates; it cannot substitute for contract review, sample outputs or a salon-specific failure-case test.

The article must not imply that any named vendor is best, that absence from a public page proves absence from a product, or that a passed paper screen predicts migration success.

## Investigation sequence

| Section | Starting model | Discovery and improved model | Evidence | Transition |
| --- | --- | --- | --- | --- |
| 1. The list promised a shortcut | A ranking has already done the comparison | A score combines priorities the reader may not share; comparison needs an owner-specific question | Conceptual, C15 | What would change the winner? |
| 2. Five salons, five winners | One product should dominate | Growth, locations, staff flexibility, migration safety and financial control create different elimination gates | C08, C16; Figure 1 | Requirements must become tests |
| 3. Requirements changed the field | Requirements help score products | Non-negotiable requirements eliminate candidates before preferences are weighed | C08, C15; Figure 2 | What counts as a pass? |
| 4. A checkmark was not proof | A feature-page checkmark is enough | Evidence must match the claim: documentation, price, terms, sample output or observed test | E05–E08, E14, E16 | Unknown is a result |
| 5. Unknown could not receive half credit | Missing evidence can be averaged away | A critical unknown remains unresolved; it cannot be converted into a reassuring score | C15 | Cost also needs a defined case |
| 6. The cheapest column moved | Subscription price is total cost | Staff, locations, processing, add-ons, labor, failure and exit assumptions change the comparison | C16; E06/E07 | Only survivors deserve close comparison |
| 7. The shortlist became smaller and more honest | More candidates means better research | A short evidence register is more defensible than a broad ranking | D21 | The next proof happens during migration |

## Candidate-screen framework

For each resolved D10–D20 requirement record: requirement; non-negotiable or preference; exact pass condition; evidence type; source/date/region/plan; candidate result PASS / FAIL / UNKNOWN; next verification action. Eliminate on a failed non-negotiable. Do not total scores until every non-negotiable is PASS. Keep UNKNOWN separate.

## Evidence architecture

- E05: current first-party capability/configuration documentation.
- E06: current official price and fee evidence for the defined salon scenario.
- E07: current official contract, cancellation and service terms.
- E08: official export documentation and, where obtainable, a representative sample output.
- E14: a designed salon-specific acceptance/failure test; no result may be claimed before execution.
- E16: independent owner evidence may expose failure modes but is not available in the approved source set and is not used for product claims.

Volatile-claim owner: **Visaxa Research editorial maintainer**. Refresh at publication, every 30 days while named product facts remain, and immediately after a pricing, terms, export or plan change. Stale or inaccessible evidence changes the affected result to UNKNOWN and blocks publication of that claim.

## Internal link plan

Exactly one internal link: early in the section where exit readiness becomes a non-negotiable requirement, link to A23 with the meaning **verify whether a documented exit is practical before a product enters the shortlist**. A25 is named only as the next question in plain text because it is not a published destination.

## Editorial figures

1. **The same five salons choose five different winners.** Five fictional owner notes, each with one different requirement underlined; no product names and no rank order. The visual center is the repeated word “winner” changing meaning across five cases.
2. **The field gets smaller when the requirements become real.** A quiet sequence of candidate marks receding as successive requirements are applied. Elimination is conveyed through absence, opacity and whitespace, not arrows or technical boxes.

Both figures: 375 px viewBox, readable type, generous margins, embedded title/desc, one restrained terracotta accent, no engineering notation.

## Failure review

- Generic SEO drift: product roundups, feature-count language, “best for” labels.
- Consultant drift: presenting a completed matrix before the narrator discovers why it is needed.
- Ranking drift: weighted totals that let a critical failure disappear.
- Unsupported drift: inferring capability from silence, marketing copy or another region/plan.
- A25 drift: claiming migration completeness rather than defining the next proof question.
- Sales drift: mentioning Visaxa, implying a preferred architecture, or describing the method as uniquely ours.

## Publication recommendation

- Public title: **There Is No Best Salon Software Until You Know What Must Pass**
- Subtitle: **Why the useful comparison starts after your requirements—and gets smaller with every honest test**
- Promise: help an owner turn resolved requirements into an evidence-bounded shortlist without pretending a universal ranking exists.
- Next article: **A25 — A Successful Import Is Not a Successful Migration**.
- Design status: **READY**.

