> Architecture status: supporting research. Canonical IDs and rules are defined in [Visaxa Decision Framework SOT](../../master/00_VISAXA_DECISION_FRAMEWORK_SOT.md).

# Prioritized concept and article map

> Normalization note: the 24 ordered proposals below are a historical concept-led view. They do not define independent article IDs. Canonical ownership and status are A09–A32 in the SOT; overlapping proposals should be merged into those articles or retained as supporting sections.

## Scoring model

Columns: F frequency, B buying/switching intent, AI reasoning importance, Q follow-up potential, X cross-industry relevance, S salon relevance, M MVP+ fit, D distance from published content, C credibility/evidence, P product-discovery transition. Raw scores are 1–5.

Weights: F 14%, B 12%, AI 15%, Q 10%, X 8%, S 10%, M 8%, D 8%, C 10%, P 5%. Full rationale and formula are in `10_METHOD_AND_LIMITATIONS.md`.

| Rank | Concept node | F | B | AI | Q | X | S | M | D | C | P | Weighted /100 |
|---:|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | Migration completeness | 5 | 5 | 5 | 5 | 5 | 5 | 4 | 5 | 5 | 5 | 98.4 |
| 2 | Implementation acceptance | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 4 | 4 | 97.0 |
| 3 | Appointment/payment state separation | 5 | 5 | 5 | 5 | 3 | 5 | 5 | 5 | 5 | 5 | 96.8 |
| 4 | Scheduling integrity | 5 | 5 | 5 | 5 | 4 | 5 | 5 | 3 | 5 | 5 | 95.2 |
| 5 | Customer identity | 5 | 4 | 5 | 5 | 5 | 4 | 5 | 5 | 5 | 4 | 94.6 |
| 6 | Operational truth | 5 | 4 | 5 | 5 | 5 | 4 | 5 | 5 | 5 | 4 | 94.6 |
| 7 | Data portability | 4 | 5 | 5 | 5 | 5 | 5 | 4 | 4 | 5 | 5 | 94.0 |
| 8 | Capability-level access | 4 | 4 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 4 | 93.8 |
| 9 | Operational capacity | 5 | 4 | 5 | 5 | 5 | 5 | 5 | 2 | 5 | 5 | 92.8 |
| 10 | Workflow-adjusted total cost | 5 | 5 | 4 | 5 | 5 | 5 | 3 | 4 | 5 | 5 | 92.2 |
| 11 | System boundary and workflow fit | 4 | 5 | 5 | 5 | 5 | 5 | 4 | 2 | 5 | 5 | 90.8 |
| 12 | Resource identity | 4 | 4 | 5 | 5 | 5 | 5 | 5 | 3 | 5 | 4 | 90.6 |
| 13 | Metric contract and reconciliation | 4 | 4 | 5 | 5 | 5 | 4 | 4 | 5 | 5 | 4 | 90.2 |
| 14 | Workflow friction | 5 | 4 | 5 | 5 | 5 | 5 | 5 | 1 | 5 | 4 | 90.2 |
| 15 | Offboarding and client continuity | 4 | 5 | 5 | 5 | 4 | 5 | 3 | 5 | 4 | 4 | 89.4 |
| 16 | Adoption acceptance | 4 | 4 | 5 | 5 | 5 | 5 | 5 | 2 | 5 | 4 | 89.0 |
| 17 | Multi-location control plane | 4 | 5 | 5 | 5 | 3 | 5 | 4 | 4 | 4 | 5 | 88.8 |
| 18 | Free-plan growth threshold | 4 | 5 | 4 | 4 | 5 | 5 | 2 | 5 | 5 | 5 | 87.4 |
| 19 | Marketplace dependency | 4 | 5 | 4 | 4 | 3 | 5 | 2 | 5 | 4 | 5 | 82.2 |
| 20 | Operational knowledge capture | 3 | 3 | 4 | 5 | 5 | 4 | 4 | 4 | 5 | 3 | 79.4 |

High score does not mean “publish immediately.” Branch coherence, evidence readiness and overlap control determine sequence.

## Proposed 24-piece map

| Order | Branch | Working piece | Primary node | Form | Visibility | Readiness gate |
|---:|---|---|---|---|---|---|
| 1 | Migration | A CRM Import Is Not a Migration | Migration completeness | flagship/methodology | `/blog` | Export/import schema evidence |
| 2 | Migration | Define the Client Before You Map the Fields | Customer identity | deep research note | low-emphasis | Identity and merge documentation |
| 3 | Migration | How to Prove Notes, Appointments and Consent Survived | Reconciliation | methodology page | low-emphasis | Sample validation protocol |
| 4 | Migration | When Can You Safely Cancel the Old System? | Rollback/exit readiness | checklist | `/blog` | Cutover and retention evidence |
| 5 | Scheduling truth | An Open Slot Is Not Operational Capacity | Operational capacity | flagship | `/blog` | Constraint examples |
| 6 | Scheduling truth | Staff, Rooms and Equipment Are Different Resources | Resource identity | deep note | low-emphasis | Product-neutral model |
| 7 | Scheduling truth | How to Test a Calendar for Double-Booking Failure | Scheduling integrity | methodology | `/blog` | Concurrent scenario script |
| 8 | Scheduling truth | What Location Two Changes in the Scheduling Model | Multi-location control | deep note | low-emphasis | Cross-location cases |
| 9 | Payments/no-shows | Deposit, Prepayment and Card Hold Are Not Synonyms | Payment state | flagship/explainer | `/blog` | Processor documentation |
| 10 | Payments/no-shows | The Appointment and the Money Need Separate State | Appointment/payment state | deep note | low-emphasis | State diagram and examples |
| 11 | Payments/no-shows | Correcting No-Show and Cancellation Mistakes Safely | Exception correction | methodology | low-emphasis | Audit/refund scenarios |
| 12 | Payments/no-shows | A No-Show Policy the Software Can Actually Enforce | Policy fit | comparison framework | `/blog` | Legal caveat and product recheck |
| 13 | Governance | View, Edit, Export and API Are Four Permissions | Capability access | flagship | `/blog` | Security/permission sources |
| 14 | Governance | What Staff Should See on a Shared Front-Desk Screen | Visibility | deep note | low-emphasis | Privacy principles |
| 15 | Governance | Offboarding a Stylist, Contractor or Manager | Offboarding | methodology | low-emphasis | Legal/privacy review |
| 16 | Governance | Client Continuity Without Treating the Client List as Property | Client relationship | research note | `/blog` | Jurisdiction-neutral legal framing |
| 17 | Operational truth | Why a Clean CRM Can Still Produce a Wrong Report | Operational truth | flagship | `/blog` | Reporting/data-model evidence |
| 18 | Operational truth | Define the Metric Before You Trust the Dashboard | Metric contract | methodology | low-emphasis | Data dictionary examples |
| 19 | Operational truth | Reconcile Appointments, Payments, Packages and Refunds | Reconciliation | deep note | low-emphasis | Ledger examples |
| 20 | Operational truth | Commission Reports: Correct Math, Wrong Incentive | Incentive interaction | research note | `/blog` | Compensation research/legal caveat |
| 21 | Cost and choice | What Free Salon Software Actually Costs | Total cost | flagship | `/blog` | Current pricing snapshots |
| 22 | Cost and choice | The First-Employee and Second-Location Upgrade Cliffs | Free threshold | deep note | low-emphasis | Scenario pricing |
| 23 | Cost and choice | When a Booking Marketplace Also Owns Discovery | Marketplace dependency | research note | `/blog` | Terms and fee evidence |
| 24 | Cost and choice | A Failure-Case Scorecard for Comparing Salon Platforms | Commercial transition | comparison framework | `/blog` | Current product verification protocol |

## Sequence implication

Start with pieces 1–4, 5–8 and 13–16. They create new graph roots with strong cross-links and do not require Visaxa to claim unverified product capabilities. The payment branch ranks highly but should wait until processor/state evidence is assembled. The cost branch needs live pricing refresh immediately before publication.
