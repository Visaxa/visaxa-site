# A20 Evidence Pack — Pre-Contract Adoption Testing

Status: **COMPLETE FOR PUBLICATION CANDIDATE WITH KNOWN LIMITATIONS**
Access date: **2026-11-11**

## Evidence boundary

This pack supports a buyer-run method for observing whether representative users can complete realistic tasks before contract commitment. The sources are general usability, procurement and accessibility guidance. They do not establish how common adoption failure is in salons, a universal pass threshold, or the future performance of any product or team.

No salon trial, staff interview, client test, vendor sandbox, account data or VisaxaCRM capability was inspected for A20. All salon scenarios are constructed test designs.

## Source register

| ID | Evidence | Source | Publisher | Date / access | Supports | Confidence | Limitation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| A20-S01 | E02,E04,E14 | [Using moderated usability testing](https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing) | UK Government Digital Service | Published 2017-02-21; updated 2017-10-03; accessed 2026-11-11 | Observe actual or likely users completing clear, believable tasks; use neutral instructions; test the service, not the participant; dummy data and personal-device considerations | HIGH for method | Government-service context, not salon software procurement; page is older but method remains current on GOV.UK |
| A20-S02 | E02,E03,E04,E14 | [How to conduct a usability test](https://digital.gov/resources/how-conduct-usability-test) | U.S. General Services Administration, Digital.gov | Current resource; accessed 2026-11-11 | Specific research purpose, representative participants, non-leading tasks, quiet observers, documented patterns | HIGH for method | Not a purchasing standard and does not define sample size or pass criteria for a salon |
| A20-S03 | E02,E04,E14 | [NISTIR 7741: NIST Guide to the Processes Approach for Improving the Usability of Electronic Health Records](https://nvlpubs.nist.gov/nistpubs/Legacy/IR/nistir7741.pdf) | National Institute of Standards and Technology | 2010; accessed 2026-11-11 | Effectiveness, efficiency and satisfaction; task success, time, errors, assistance and learnability as distinct observations | HIGH for measurement concepts | Health-record domain; not evidence that the same risks or thresholds apply to salons |
| A20-S04 | E14 | [The IUSR Project: Industry Usability Report](https://www.nist.gov/itl/tted/iusr-project-industry-usability-report) | National Institute of Standards and Technology | Project originated 1998–1999; page updated 2025-08-27; accessed 2026-11-11 | Software purchasers need user/task context and interpretable usability evidence; supplier results may be accepted or replicated; reports should disclose participants, tasks, method, interventions and measures | HIGH for procurement evidence structure | Historical project; no certification of supplier data and no salon-specific result |
| A20-S05 | E04 | [Forms Tutorial](https://www.w3.org/WAI/tutorials/forms/) | W3C Web Accessibility Initiative | Updated 2026-03-27; accessed 2026-11-11 | Labels, instructions, validation, error recovery and completion feedback affect form accessibility; accessible forms help users with different needs | HIGH for web-form guidance | Does not evaluate a named booking journey or mobile app |
| A20-S06 | E04,E14 | [Quality assurance: testing your service regularly](https://www.gov.uk/service-manual/technology/quality-assurance-testing-your-service-regularly) | UK Government Digital Service | Published 2016-05-23; updated 2017-06-28; accessed 2026-11-11 | Test usability across devices and simulate ordinary and unusual conditions; technical correctness alone is insufficient | HIGH for general test principle | Government-service context; “unusual conditions” must be translated cautiously into salon scenarios |
| A20-S07 | E02,E04,E14 | [NISTIR 7804: Technical Evaluation, Testing and Validation of EHR Usability](https://www.nist.gov/publications/nistir-7804-technical-evaluation-testing-and-validation-usability-electronic-health) | National Institute of Standards and Technology | Published 2012-02-21; accessed 2026-11-11 | Representative user groups and realistic tasks can reveal critical interaction issues | MEDIUM-HIGH for transferable method | Medical safety context; cannot establish salon criticality, scenario set or pass thresholds |

## Claim map

| Claim | Sources | Status | Publication boundary |
| --- | --- | --- | --- |
| A polished demonstration does not establish local usability or support needs | S04 | SUPPORTED | Phrase as procurement evidence principle, not criticism of a named vendor |
| Representative users should attempt realistic, goal-based tasks | S01,S02,S07 | SUPPORTED | Salon tasks are editorial constructions |
| Instructions should avoid revealing the interface path | S01,S02 | SUPPORTED | Neutral task wording is the method |
| Record success, time, errors, assistance and participant response separately | S03,S04 | SUPPORTED | Do not combine into a universal score |
| Assistance can hide dependency | S03,S04 | SUPPORTED | Record assistance; do not automatically label every assisted task a purchase failure |
| Testing after limited training can provide evidence about learnability | S03 | SUPPORTED | Prefer an equivalent task with comparable difficulty where practical; improvement may also reflect practice, familiarity or recall and does not prove long-term adoption |
| Client booking/rescheduling should be tested on relevant devices and with accessibility needs represented | S01,S05,S06 | SUPPORTED | Does not prove compliance or coverage of all disabilities |
| Simultaneous salon demands should be included | S06 plus editorial translation | PARTIALLY SUPPORTED | The general principle is supported; the specific front-desk scenario is constructed |
| A short trial predicts future adoption | None | NOT SUPPORTED | Article explicitly rejects this claim |
| A fixed number of participants or a universal task-time threshold determines purchase | None | NOT SUPPORTED | Owner defines risk-based criteria before observing |

## What can be learned before purchase

- whether the vendor will provide a trial, sandbox or representative demonstration environment;
- whether named roles can access the required task on their real device;
- whether participants can reach the correct outcome with synthetic data;
- where errors, assistance, delay or external notes appear;
- whether performance changes on an equivalent task after limited training, while recording practice and familiarity as alternative explanations;
- which workflows, permissions, integrations or data states remain unavailable for testing.

## What remains for implementation or live operation

- actual data quality and migration completeness;
- real integrations, payments, messages and device reliability;
- sustained behavior during peak periods;
- organization-wide incentives, trust and policy compliance;
- long-term workaround formation;
- report correctness and reconciliation;
- full accessibility conformance;
- production failure and recovery behavior.

## Constructed observation sheet

For each task record:

```text
role / device / starting state
goal and correct observable outcome
completed correctly? yes / no / uncertain
elapsed time
errors or wrong state created
assistance: none / prompt / instruction / takeover
workaround or external note created
confidence and explanation
result on an equivalent task after bounded training
practice/familiarity explanation still plausible: yes / no / uncertain
untested dependency
decision consequence
```

No universal weighting is assigned. A critical wrong state may outweigh several fast routine tasks.

## Unresolved evidence gaps

1. No direct salon adoption test validates the proposed scenario set.
2. No current vendor-specific trial access was investigated; access must be checked candidate by candidate.
3. No evidence establishes a universal acceptable task time, assistance count or participant count.
4. A pre-contract environment may omit configuration, integrations and real data.
5. No VisaxaCRM claim is supported or made.
