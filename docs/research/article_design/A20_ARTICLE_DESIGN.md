# A20 Article Design — Test Adoption Before Contract Signature

Status: **PUBLISHED**

## Canonical ownership

- Article ID: **A20**
- Decision ID: **D17 — Will staff and clients use it in real conditions?**
- Concepts: **C17 adoption and workflow friction; C24 client continuity**
- Evidence: **E02 direct task observation; E03 staff/owner interview; E04 client journey/usability test; E14 implementation/acceptance and failure-case test; E17 organizational/change research**
- Predecessor: **A19 / D16** — the economics are acceptable on paper.
- Successor: **A21 / D18** — reports and states must be proven correct.
- Entry condition: the salon has one or more credible candidates and knows the required workflows and next-threshold economics.
- Exit condition: representative staff and client roles have attempted defined ordinary and exception tasks under realistic conditions; the owner has recorded outcomes, assistance, errors, task time, workarounds, training effects and unresolved access limits.

## Exact question owned

> How can a salon owner learn, before signing, whether receptionists, professionals and clients can complete the work that matters in the candidate system under realistic conditions?

## Questions owned elsewhere

- A18: What evidence should make a vendor claim trustworthy?
- A19: What will the candidate cost at the next operational threshold?
- A21: Can reports and operational states be reconciled and proven correct?
- A22: What happens in failure cases and exceptions beyond adoption?
- A26: Has the configured implementation met go-live acceptance criteria?
- A27: What do workarounds mean after the system is in use?
- A28: Did client continuity survive an actual system change?

A20 may use exceptions to expose usability friction, but it must not claim to complete implementation acceptance, prove reporting correctness or diagnose post-launch workaround causes.

## Reader state

- Initial assumption: “The demo went smoothly, so the team should be able to use it.”
- Emotional trigger: the owner fears paying for a system that staff avoid or clients cannot navigate.
- Incorrect model: a polished demonstration proves ordinary people can perform the salon's work.
- What the reader fears losing: front-desk speed, professional attention, client bookings, staff trust and the option to reject a poor fit before commitment.
- Leaving decision: whether evidence is sufficient to proceed, whether a bounded second test is needed after training/configuration, or whether the candidate should be rejected.

## Core thesis

### One sentence

A product demonstration shows what a prepared demonstrator can perform; a pre-contract adoption test shows whether representative staff and clients can complete the salon's required tasks, exceptions and handoffs with acceptable help, errors, time and workarounds.

### Supporting claims

1. Usability evidence depends on representative users attempting realistic, goal-based tasks rather than being guided through a feature tour.
2. Completion, errors, elapsed time and assistance reveal different failure modes; satisfaction alone is insufficient.
3. Retesting with an equivalent task after limited training can help distinguish learnable unfamiliarity from persistent workflow friction, while practice and familiarity remain alternative explanations and future organization-wide adoption remains unproven.

### Important limitation

A short pre-contract test cannot reproduce live data, full configuration, peak demand, integrations, long-term habits or organizational incentives. It reduces uncertainty; it does not guarantee adoption.

### Must not imply

- that a universal number of users, minutes or errors determines purchase;
- that staff reluctance proves poor software;
- that one successful test predicts organization-wide adoption;
- that a vendor must provide a particular trial environment;
- that VisaxaCRM has passed this method.

## Investigation sequence

| Section | Initial model | Discovery | Better model | Evidence |
| --- | --- | --- | --- | --- |
| The demo went well | Smooth demo equals usable system | The demonstrator chose data, order and pace | Demo proves demonstrability, not local adoption | NIST procurement usability; Digital.gov |
| Write outcomes, not clicks | Feature checklist defines the test | Instructions can reveal the path | Give believable goals without telling the user how | GOV.UK; Digital.gov |
| Test roles, not “the team” | One confident user represents everyone | Reception, professionals, clients and owners have different constraints | Test representative roles and devices | GOV.UK; NIST |
| An ordinary Tuesday | Happy-path booking is representative | Interruptions, corrections and handoffs reveal friction | Include common exceptions and simultaneous demands | GOV.UK QA; editorial synthesis |
| Record the help | Completion means success | Coaching can hide dependence | Record success, time, errors, assists and workarounds separately | NISTIR 7741; NIST CIF |
| Retest after training | First failure rejects product | Some friction is unfamiliarity, but an identical repeat can reward recall | Prefer an equivalent task with changed but comparable details after bounded training; record practice and familiarity as alternative explanations | NIST learnability metric; editorial boundary |
| Decision sheet | Average score chooses product | Critical tasks and local consequences differ | Define task-specific acceptance before observing | NIST; local evidence |
| Limits of the trial | Trial predicts go-live | Live conditions remain untested | Carry open risks into implementation acceptance | A26 boundary |

## Pre-contract adoption test

### 1. Define required outcomes

Use 6–10 salon-specific tasks across four roles. Describe the outcome, starting state, device, permissions and evidence of completion. Do not prescribe clicks.

### 2. Use safe representative data

Prefer a vendor sandbox or synthetic salon records. Do not enter real client data into an unapproved trial environment. Record which integrations, permissions or devices cannot be reproduced.

### 3. Observe without rescuing immediately

One person attempts the task; one observer records. The observer uses neutral prompts and records every hint or intervention.

### 4. Record separate signals

- correct outcome;
- completion time;
- errors and incorrect states;
- assistance required;
- workaround or external note created;
- participant confidence and explanation;
- device/role/access condition;
- whether an equivalent task improved after bounded training, and whether practice or familiarity could explain the change.

### 5. Decide by consequence, not a universal score

Before the test, label critical tasks, tolerable training needs and unacceptable unresolved failures. A minor delay in finding a note is not equivalent to a wrong deposit, lost appointment or inaccessible client cancellation path.

## Scenario set

- Reception: create an appointment while handling a call; move it; correct the wrong service; take or identify a deposit; find the client record; explain what needs manager approval.
- Professional: find today's schedule on the device actually used; identify a change; record completed work; locate tips/compensation information within allowed permissions.
- Client: find the right service on mobile; understand price/duration; book; locate confirmation; reschedule or cancel; recover from an input error.
- Owner/manager: resolve a permission boundary; inspect an exception without taking over the participant's task; record which workflows remain unavailable in the trial.

These are constructed test candidates, not claims about every salon or product.

## Internal links

1. Upstream A19 near the opening: the financial model depends on people performing the workflow.
2. Contextual A18 where the owner distinguishes vendor proof from buyer-run evidence.
3. Do not link to unpublished A21. End with its natural question in plain text.

## AI usefulness

The article must expose a compact extractable answer containing:

- the problem: demos test the demonstrator, not representative users;
- the decision rule: use realistic role-specific tasks and predeclared consequences;
- the method: outcome, context, observation, metrics, comparable post-training retest, decision;
- the evidence boundary: pre-contract test reduces uncertainty but does not prove live adoption;
- next question: whether reports and states are correct.

## Illustration

One editorial SVG: a polished vendor demo card sits above a physical “ordinary Tuesday” test sheet, with role cards and handwritten observation marks. The image should communicate in five seconds: **watch the people do the work; do not watch the salesperson do the demo.**

## Recommended metadata

- Public title: **Will Your Staff Actually Use New Salon Software? Test It Before You Sign.**
- Slug: `will-your-staff-use-new-salon-software`
- SEO title: **Test Salon Software Adoption Before You Sign**
- Description: a salon-owner method for testing staff and client workflows before committing.
