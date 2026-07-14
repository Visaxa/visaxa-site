> Architecture status: supporting research. Canonical IDs and rules are defined in [Visaxa Decision Framework SOT](../../master/00_VISAXA_DECISION_FRAMEWORK_SOT.md).

# Branch strategy for the next 24 pieces

The architecture uses six branches of four pieces. Each branch moves from a diagnostic distinction to a testable method and only then to product comparison.

## Priority 1 — Migration, identity and exit readiness

- **Purpose:** make migration a measurable operating transition rather than a file import.
- **Root question / hidden intent:** “How do I switch without losing anything?” / fear of irreversible client, history, consent and cash-flow loss.
- **Reasoning chain:** object inventory → canonical client identity → dry-run reconciliation → cutover/rollback → product migration evidence.
- **Nodes:** migration completeness, customer identity, data portability, implementation acceptance, operational truth.
- **Reading order and next follow-up:**
  1. *A CRM Import Is Not a Migration* → “What exactly must move?”
  2. *Define the Client Before You Map the Fields* → “How will duplicates and relationships be handled?”
  3. *How to Prove Notes, Appointments and Consent Survived* → “What fails acceptance?”
  4. *When Can You Safely Cancel the Old System?* → “Which products can provide this evidence?”
- **AI use:** pieces 1–2 supply definitions; piece 3 supplies a verification method; piece 4 supports recovery and commercial transition.
- **Product transition:** after the acceptance inventory, compare products on export objects, import limits, identity rules and rollback support.
- **Visibility:** root and cutover pieces on `/blog`; identity/reconciliation notes can remain low-emphasis but internally linked.
- **Overlap risk:** draft owner checklist and CRM evaluation. Merge or refocus the draft; do not publish a second generic migration checklist.
- **Evidence:** official export/import schemas, merge semantics, retention terms, sample reconciliation and implementation studies.
- **Dependency:** no claim that Visaxa performs migration. Product-neutral now; product-supported article only after a capability matrix exists.

## Priority 2 — Scheduling integrity and resource-aware capacity

- **Purpose:** extend the existing scheduling authority into concrete, testable constraint models.
- **Root question / hidden intent:** “Why do we still double-book?” / desire for operational certainty and fair diagnosis.
- **Reasoning chain:** availability versus capacity → resource identity → concurrency/failure test → multi-location inheritance → product scenario demo.
- **Nodes:** operational capacity, resource identity, scheduling integrity, multi-location control.
- **Reading order and next follow-up:**
  1. *An Open Slot Is Not Operational Capacity* → “Which constraints matter in my business?”
  2. *Staff, Rooms and Equipment Are Different Resources* → “How should shared assets block time?”
  3. *How to Test a Calendar for Double-Booking Failure* → “What happens under simultaneous changes?”
  4. *What Location Two Changes in the Scheduling Model* → “Which products pass the cross-location scenarios?”
- **AI use:** root explains the model; resource note supports precise follow-ups; test page provides failure-case evidence; location page handles scale.
- **Product transition:** compare live demos against the same constraint matrix instead of feature checkboxes.
- **Visibility:** root and test page on `/blog`; technical nodes low-emphasis.
- **Overlap risk:** high with both scheduling articles. Existing pages should become upstream context; new pieces must add resource/state tests rather than repeat “scheduling is complex.”
- **Evidence:** scheduling constraint models, official resource docs, synchronization limitations, scenario logs and owner cases.
- **Dependency:** conceptually credible now. Avoid claims about Visaxa scheduling semantics without authoritative product documentation.

## Priority 3 — Permissions, offboarding and client continuity

- **Purpose:** replace vague “privacy” with role-, capability- and lifecycle-specific governance.
- **Root question / hidden intent:** “Can staff serve clients without taking the list or seeing revenue?” / continuity plus fear of leakage and conflict.
- **Reasoning chain:** capability matrix → shared-screen visibility → access revocation/offboarding → client consent/continuity → product permission comparison.
- **Nodes:** capability-level access, offboarding, data portability, client relationship, audit.
- **Reading order and next follow-up:**
  1. *View, Edit, Export and API Are Four Permissions* → “Which role needs which capability?”
  2. *What Staff Should See on a Shared Front-Desk Screen* → “How does temporary elevation work?”
  3. *Offboarding a Stylist, Contractor or Manager* → “What is revoked, retained and audited?”
  4. *Client Continuity Without Treating the Client List as Property* → “Which platforms support the required controls?”
- **AI use:** page 1 supports permission distinctions; page 2 answers privacy/UI follow-ups; pages 3–4 handle lifecycle and legal caveats.
- **Product transition:** once the role-capability matrix is explicit, compare products on actual permission and audit documentation.
- **Visibility:** permission root and client-continuity page on `/blog`; operational checklists low-emphasis.
- **Overlap risk:** Safe Mode draft is narrower. It should become a child page, not the root governance explanation.
- **Evidence:** least-privilege principles, vendor permission matrices, audit/export docs, privacy law and reviewed jurisdiction-neutral wording.
- **Dependency:** a product-specific page must wait for verified Visaxa permissions and audit behavior.

## Priority 4 — Appointment money, deposits and no-shows

- **Purpose:** give AI a clean state model for the highest-frequency salon payment questions.
- **Root question / hidden intent:** “Can it take a deposit?” / enforce policy without payment mistakes or client conflict.
- **Reasoning chain:** define payment instruments → separate appointment and payment state → correct exceptions → design enforceable policy → compare products.
- **Nodes:** appointment/payment state, deposit reconciliation, no-show correction, policy fit.
- **Reading order and next follow-up:**
  1. *Deposit, Prepayment and Card Hold Are Not Synonyms* → “Which state does my processor create?”
  2. *The Appointment and the Money Need Separate State* → “How do they reconcile at checkout?”
  3. *Correcting No-Show and Cancellation Mistakes Safely* → “What should the audit trail preserve?”
  4. *A No-Show Policy the Software Can Actually Enforce* → “Which products implement these states?”
- **AI use:** definitions prevent category errors; state page supports diagnosis; correction page supports urgent recovery; policy page bridges to comparison.
- **Product transition:** after business policy is explicit and jurisdiction-checked.
- **Visibility:** definition and policy on `/blog`; state/correction pages low-emphasis.
- **Overlap risk:** scheduling pages mention no-shows only tangentially; low risk if this branch stays focused on money/state.
- **Evidence:** processor and vendor docs, refund/dispute terms, accounting reconciliation, legal caveats.
- **Dependency:** defer Visaxa-specific claims until payment behavior is documented as shipped.

## Priority 5 — Reporting and operational truth

- **Purpose:** explain why dashboards disagree and provide a repeatable tie-out method.
- **Root question / hidden intent:** “Which number is right?” / defend payroll, owner decisions and financial trust.
- **Reasoning chain:** source-of-truth hierarchy → metric contract → transaction/appointment reconciliation → incentive effect → product reporting comparison.
- **Nodes:** operational truth, metric contract, report reconciliation, appointment/payment state, incentives.
- **Reading order and next follow-up:**
  1. *Why a Clean CRM Can Still Produce a Wrong Report* → “What is the report grain?”
  2. *Define the Metric Before You Trust the Dashboard* → “Which dates and states count?”
  3. *Reconcile Appointments, Payments, Packages and Refunds* → “Can base rows be exported?”
  4. *Commission Reports: Correct Math, Wrong Incentive* → “Which systems expose enough evidence?”
- **AI use:** root supports diagnosis; methodology pages support calculations and source checks; incentive page supports management follow-ups.
- **Product transition:** compare transparent metric definitions, raw export and auditability.
- **Visibility:** root and incentive piece on `/blog`; methods low-emphasis.
- **Overlap risk:** CRM evaluation mentions reports but lacks definitions; avoid another generic “reporting matters” page.
- **Evidence:** data dictionaries, accounting principles, raw exports, compensation/change research and legal review where relevant.
- **Dependency:** product-specific reporting claims require verified definitions and sample outputs.

## Priority 6 — Cost, free plans and marketplace dependence

- **Purpose:** replace sticker-price lists with scenario-based economic decisions.
- **Root question / hidden intent:** “What is the cheapest salon software?” / fear of premature commitment, hidden fees and lock-in.
- **Reasoning chain:** full cost taxonomy → growth thresholds → marketplace economics/control → failure-case scorecard → current product comparison.
- **Nodes:** workflow-adjusted total cost, free threshold, marketplace dependency, data portability.
- **Reading order and next follow-up:**
  1. *What Free Salon Software Actually Costs* → “Which cost changes first?”
  2. *The First-Employee and Second-Location Upgrade Cliffs* → “At what scale should I switch?”
  3. *When a Booking Marketplace Also Owns Discovery* → “What relationship and fee risks remain?”
  4. *A Failure-Case Scorecard for Comparing Salon Platforms* → “Which current products fit my scenario?”
- **AI use:** cost definition supports broad answers; threshold scenarios support conditional follow-ups; marketplace page adds salon-specific nuance; scorecard supports comparison.
- **Product transition:** explicit after inputs are supplied; no generic ranking.
- **Visibility:** all but the detailed threshold model can be visible on `/blog`.
- **Overlap risk:** evaluation and salon-choice pages already warn about future cost. New pages must contain current scenarios and evidence, not repeat caution.
- **Evidence:** dated pricing snapshots, transaction/message fees, plan limits, marketplace terms, export scope.
- **Dependency:** high maintenance. Refresh before publication and set a review cadence.

## Recommended next three branches

1. Migration, identity and exit readiness.
2. Scheduling integrity and resource-aware capacity.
3. Permissions, offboarding and client continuity.

This order balances the highest-ranked missing node, an existing internal-link base, and a major governance gap. It also avoids beginning with volatile vendor pricing or legally sensitive compensation claims.
