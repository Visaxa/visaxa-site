# Visaxa Decision Framework — Source of Truth

Status: **Canonical**  
Authority: highest-level architecture for Visaxa Research  
Version: 1.0  
Established: 2026-07-13

If another research file conflicts with this document on IDs, terminology, hierarchy or article status, this document controls. Older files remain supporting evidence and historical analysis; they are not deleted.

# 1. Purpose

Visaxa Research exists to help service-business owners make defensible operating decisions before software selection, during implementation and after go-live.

Keywords are insufficient because they capture the wording of a search, not the sequence of decisions that produced it. Concept graphs are also insufficient as the primary interface: concepts explain mechanisms, but owners usually recognize decisions such as “Can I leave later?” or “Can I prove the report?” rather than abstract nodes such as portability or reconciliation.

The organizing principle is therefore the **Human Decision**. Concepts, evidence and articles support decisions. Products do not create decisions; products may satisfy them.

The framework answers:

> Which human decision is being resolved, what fear makes it consequential, what concepts and evidence are required, and what decision follows?

# 2. Architecture

```text
Human Emotion
    ↓
Human Decision
    ↓
AI Clarification
    ↓
Concept Nodes
    ↓
Evidence
    ↓
Research Articles
    ↓
Product Comparison
    ↓
Product Selection
```

| Layer | Canonical role |
|---|---|
| Human Emotion | Signals uncertainty, fear, frustration, control, regret or desired relief. It changes the evidence threshold; it is not used for persuasion. |
| Human Decision | Primary unit of architecture. A decision states what the owner must conclude before proceeding. |
| AI Clarification | Observable reconstruction of missing context: owner profile, operating outcome, constraints, evidence and decision phase. It is not private chain of thought. |
| Concept Nodes | Reusable mechanisms required to explain one or more decisions. One decision may require several concepts. |
| Evidence | Material capable of increasing, reducing or bounding confidence in a concept or decision. |
| Research Articles | Decision aids that assemble concepts and evidence for a defined decision and lead to the next decision. |
| Product Comparison | Valid only after prerequisite decisions and evidence gates are resolved. |
| Product Selection | Owner-specific conclusion. Visaxa Research may inform it but does not manufacture certainty unsupported by evidence. |

The hierarchy is decision-led, concept-supported and evidence-controlled. Keywords are a discovery and measurement layer outside the canonical hierarchy.

# 3. Decision IDs

IDs are permanent. A decision may be clarified or split only through the maintenance process in section 11. Never reuse a retired ID.

Owner profiles: **ALL** all service businesses; **SOLO** solo professional; **FIRST** first business/first salon; **TEAM** staffed single location; **GROW** growing business; **MULTI** multi-location; **REPLACE** replacing failed software.

| ID | Name | Purpose | Profiles | Primary fear | Desired outcome | Concepts | Evidence | Possible next decisions |
|---|---|---|---|---|---|---|---|---|
| D01 | Is the problem recurring and systemic? | Separate a repeatable operating failure from one incident | ALL | Normalizing failure or overreacting | Causal clarity | C01,C19 | E01,E10,E13,E16 | D02 |
| D02 | Is the cost or risk high enough to act? | Bound the cost of inaction and urgency | ALL | Wasting money or waiting too long | Proportional commitment | C02 | E01,E02,E11,E12 | D03 |
| D03 | Can process, policy or training fix it? | Avoid buying software for an unclear process | ALL | Automating chaos | Simplest adequate remedy | C03,C17,C26 | E02,E03,E05,E17 | D04,D27 |
| D04 | What operating outcome must change? | Replace feature wishes with a success condition | ALL | Solving the wrong problem | Explicit outcome | C04 | E01,E02,E04,E11 | D05 |
| D05 | Is the business ready to standardize? | Decide which practices can become shared rules | FIRST,TEAM,GROW,MULTI | Encoding inconsistency | Stable operating baseline | C05 | E02,E03,E11,E17 | D06 |
| D06 | What must remain flexible? | Preserve legitimate exceptions and local variation | TEAM,GROW,MULTI | Breaking valid work | Bounded flexibility | C05,C10 | E02,E03,E07,E15 | D07 |
| D07 | Who holds essential operating knowledge? | Find tacit knowledge and shadow systems before change | FIRST,TEAM,GROW,MULTI,REPLACE | Losing knowledge or one-person dependency | Resilience | C06 | E02,E03,E10,E17 | D08 |
| D08 | Who must agree and bear the change? | Make role, client and incentive effects explicit | FIRST,TEAM,GROW,MULTI | Resistance, unfairness or exclusion | Legitimate participation | C06,C17 | E03,E04,E07,E17 | D09 |
| D09 | Can the business absorb implementation now? | Test time, data, support, dual-run and cash capacity | ALL | Failed onboarding and downtime | Realistic readiness | C07,C22,C23 | E03,E07,E08,E14 | D10,D27 |
| D10 | What system boundary is required? | Choose CRM, scheduler, POS or coordinated stack | ALL | Comparing the wrong category | Correct scope | C08,C09 | E02,E05,E11 | D11 |
| D11 | What must be the source of truth? | Define authoritative identity, appointment, payment and metric records | TEAM,GROW,MULTI,REPLACE | Conflicting truths | Defensible authority hierarchy | C09,C13,C18,C20 | E05,E10,E11,E12 | D12 |
| D12 | Which operating constraints must be represented? | Model staff, resources, travel, buffers and locations | ALL | Impossible schedules or promises | Operational realism | C10,C11,C19 | E02,E05,E14,E16 | D13 |
| D13 | Which trust and access boundaries are required? | Separate view, edit, export, API and financial visibility | TEAM,GROW,MULTI | Data leakage or blocked work | Least-privilege continuity | C12,C21 | E05,E10,E15 | D14 |
| D14 | What data and history must remain portable? | Inventory objects, relationships, consent and balances | ALL | Lock-in or lost history | Reversible commitment | C13,C14,C21 | E05,E07,E08,E15 | D15 |
| D15 | What evidence would make a candidate trustworthy? | Establish claim-specific evidence thresholds | ALL | Sales bias and false confidence | Conditional trust | C15 | E05,E06,E07,E13,E14,E16 | D16 |
| D16 | Will cost remain acceptable at the next threshold? | Model first hire, location, volume and exit | SOLO,FIRST,TEAM,GROW,MULTI | Upgrade cliff or sunk cost | Predictable economics | C02,C16,C21 | E06,E07,E11,E12 | D17 |
| D17 | Will staff and clients use it in real conditions? | Test task time, device parity, access and accessibility | ALL | Rejection and shadow systems | Usable workflow | C17,C24 | E02,E03,E04,E14,E17 | D18 |
| D18 | Can reports and states be proven correct? | Define metrics and reconcile base records and money | TEAM,GROW,MULTI,REPLACE | Wrong decisions and disputes | Operational truth | C09,C18,C20 | E10,E11,E12,E14 | D19 |
| D19 | Can the system survive exceptions and failure? | Test concurrency, correction, outage and recovery | ALL | Client harm and revenue loss | Recovery confidence | C19,C20,C25 | E10,E13,E14,E16 | D20 |
| D20 | Can the business leave or recover later? | Verify export, rollback, offboarding and contract exit | ALL | Captivity | Optionality | C14,C21,C22,C26 | E07,E08,E09,E15 | D21 |
| D21 | Which products pass the resolved decisions? | Compare only candidates that pass D10–D20 gates | ALL | Generic ranking and regret | Evidence-bounded shortlist | C08,C15,C16 | E05,E06,E07,E08,E14,E16 | D22 |
| D22 | Is migration complete? | Prove rows, relationships, notes, consent, appointments and balances survived | ALL | Silent data loss | Verified continuity | C13,C14,C22 | E08,E09,E10,E11,E12 | D23 |
| D23 | Is the configured operation accepted? | Verify core and exception tasks before sign-off | ALL | Paying for unusable setup | Accountable go-live | C04,C07,C23 | E02,E04,E07,E14 | D24 |
| D24 | Are workarounds useful signals or unsafe bypasses? | Classify knowledge, friction, incentive and control failures | TEAM,GROW,MULTI | Staff blame or hidden drift | Correct diagnosis | C06,C17,C25 | E02,E03,E10,E17 | D25 |
| D25 | Is client experience intact? | Verify booking, changes, reminders, payment and accessibility | ALL | Reputation and demand loss | Client continuity | C19,C20,C24 | E04,E10,E11,E14 | D26 |
| D26 | Is operational truth stable over time? | Detect report, identity and state drift after go-live | TEAM,GROW,MULTI,REPLACE | Unnoticed corruption | Repeatable confidence | C09,C18,C25 | E10,E11,E12,E13 | D27 |
| D27 | Should workflow, policy, training, configuration or software change? | Select the causal remedy | ALL | Repeating the wrong intervention | Agency | C03,C17,C26 | E01,E02,E03,E05,E17 | D28 |
| D28 | Has the business outgrown configuration, plan or category? | Distinguish scale and architecture limits | GROW,MULTI | Overbuying or stagnation | Correct growth response | C08,C16,C25,C26 | E05,E06,E11,E14 | D29 |
| D29 | Stay, renegotiate, supplement or switch? | Compare recovery, future risk, exit cost and sunk cost | GROW,MULTI,REPLACE | Repeated migration or captivity | Defensible recovery choice | C02,C15,C21,C26 | E06,E07,E08,E11,E16 | D14,D23,D30 |
| D30 | Can the old system be shut off safely? | Complete archive, reconciliation, access closure and rollback window | REPLACE,GROW,MULTI | Final irreversible loss | Safe closure | C14,C22,C23,C26 | E07,E08,E09,E10,E12,E15 | D26 |

# 4. Concept IDs

Product support code: **U = unverified/not established**. The repository contains no authoritative Visaxa capability matrix. A concept's relevance does not imply current product support.

| ID | Canonical concept and definition | Supported decisions | Evidence | Existing articles | Future articles | Product support | Relationships |
|---|---|---|---|---|---|---|---|
| C01 | **Systemic problem diagnosis:** distinguish repeatable failure from isolated incident | D01 | E01,E10,E13,E16 | A02 | A09 | U | leads to C02,C03; uses C19 for scheduling cases |
| C02 | **Cost of operational friction:** time, cash, rework, trust and risk cost | D02,D16,D29 | E01,E02,E11,E12 | A01,A04 | A09,A19,A31 | U | feeds C16,C26 |
| C03 | **Process versus software cause:** locate policy, training, configuration or capability failure | D03,D27 | E02,E03,E05,E17 | A02,A05 | A10,A30 | U | depends on C01; routes to C17,C26 |
| C04 | **Outcome and acceptance definition:** state measurable success before selection or sign-off | D04,D23 | E01,E02,E04,E14 | A01,A04 | A10,A26 | U | controls C07,C23 |
| C05 | **Standardization and bounded flexibility:** define shared rules and legitimate exceptions | D05,D06 | E02,E03,E07,E15 | A05 | A11 | U | precedes C08,C10; informs C06 |
| C06 | **Operational knowledge and change burden:** preserve tacit knowledge and map who bears change | D07,D08,D24 | E02,E03,E10,E17 | A05 | A12,A27 | U | supports C17,C25 |
| C07 | **Implementation readiness:** time, data, support, dual-run and cutover capacity | D09,D23 | E03,E07,E08,E14 | A06 | A13,A26 | U | precedes C22,C23 |
| C08 | **System boundary and workflow fit:** CRM, scheduling, POS or stack matched to lifecycle | D10,D21,D28 | E02,E05,E11 | A01,A04 | A14,A24,A30 | U | connects C09,C10,C16 |
| C09 | **Operational source of truth:** authoritative hierarchy for identity, state and metrics | D11,D18,D26 | E05,E10,E11,E12 | A01 | A14,A21,A29 | U | parent of C13,C18,C20,C25 |
| C10 | **Operational capacity:** availability after staff, resources, travel, buffers and policy intersect | D06,D12 | E02,E05,E14,E16 | A02,A03,A04 | A15 | U | parent of C11,C19; scales through C25 |
| C11 | **Resource identity:** correct representation of rooms, chairs, devices and shared assets | D12 | E02,E05,E14 | A02,A03 | A15,A22 | U | child of C10; adjacent C19 |
| C12 | **Capability-level access:** separate view, edit, delete, export, API and financial visibility | D13 | E05,E10,E15 | A07 | A16 | U | connects C21,C24; scopes through C25 |
| C13 | **Customer identity:** rules deciding when records represent the same person | D11,D14,D22 | E05,E08,E09,E10 | none | A17,A25 | U | required by C22; stabilizes C09 |
| C14 | **Data portability:** export usable objects, relationships and context | D14,D20,D22,D30 | E05,E07,E08,E09 | A01,A04 | A17,A23,A25,A32 | U | supports C21,C22,C26 |
| C15 | **Evidence hierarchy and conditional trust:** match claim to source and falsification test | D15,D21,D29 | E05,E06,E07,E13,E14,E16 | A01,A04 | A18,A24,A31 | U | governs all comparison claims |
| C16 | **Workflow-adjusted total cost:** subscription, transactions, labor, failure and exit cost | D16,D21,D28 | E06,E07,E11,E12 | A01,A04 | A19,A24,A30 | U | depends on C02,C14; adjacent marketplace evidence |
| C17 | **Adoption and workflow friction:** task burden, duplicate entry, role effects and shadow systems | D03,D08,D17,D24,D27 | E02,E03,E04,E10,E17 | A01,A05 | A12,A20,A27,A30 | U | connects C06,C23,C24 |
| C18 | **Metric contract and reconciliation:** grain, timing, filters and tie-out method | D11,D18,D26 | E10,E11,E12,E14 | A01 | A21,A29 | U | child of C09; consumes C20 states |
| C19 | **Scheduling integrity and failure recovery:** preserve appointment correctness through concurrent change | D01,D12,D19,D25 | E05,E10,E13,E14,E16 | A02,A03,A04 | A15,A22,A28 | U | depends C10,C11; adjacent C20 |
| C20 | **Appointment/payment state separation:** distinguish booking lifecycle from authorization, charge, refund and dispute | D11,D18,D19,D25 | E05,E10,E11,E12,E14 | A02 | A21,A22,A28 | U | feeds C18,C24,C25 |
| C21 | **Exit readiness and offboarding:** rollback, access revocation, contract exit and client continuity | D13,D14,D16,D20,D29 | E07,E08,E10,E15 | A04,A07 | A17,A23,A31,A32 | U | depends C12,C14; connects C24,C26 |
| C22 | **Migration completeness:** prove row, relationship, note, consent, appointment and balance survival | D09,D20,D22,D30 | E08,E09,E10,E11,E12,E14 | A01,A06 | A25,A32 | U | depends C13,C14; precedes C23 |
| C23 | **Implementation acceptance:** measurable task, defect, reconciliation and sign-off criteria | D09,D23,D30 | E02,E04,E07,E14 | A06 | A13,A26 | U | consumes C04,C07,C22; leads C25 |
| C24 | **Client continuity:** preserve client access, identity, communication and service experience | D13,D17,D25 | E04,E10,E11,E15 | A04,A07 | A16,A20,A28 | U | depends C12,C19,C20,C21 |
| C25 | **Operational truth monitoring and scale:** detect drift and govern shared/local behavior over time | D19,D24,D26,D28 | E10,E11,E12,E13,E14 | A03,A05 | A22,A27,A29,A30 | U | monitors C09,C18,C19,C20 |
| C26 | **Remedy selection and decommissioning:** choose intervention and close systems without loss | D03,D20,D27,D28,D29,D30 | E01,E05,E07,E08,E12,E15,E17 | A03,A05 | A23,A30,A31,A32 | U | routes back to C03,C14,C22,C23 |

# 5. Evidence IDs

Evidence IDs identify types, not individual documents. Every claim must still cite the actual source and date.

| ID | Evidence type | What it can establish | Primary limitation |
|---|---|---|---|
| E01 | Incident timeline and owner problem record | Recurrence, sequence and operational impact | Local and potentially incomplete |
| E02 | Direct task observation and task-time record | Workflow, friction, exceptions and rework | Requires access to real operation |
| E03 | Staff/owner interview | Tacit knowledge, fear, incentives and decision burden | Self-report; not system proof |
| E04 | Client journey/usability test | Booking, change, payment, access and accessibility experience | Scenario coverage may be narrow |
| E05 | Current official product documentation | Intended behavior, scope, limits and configuration | May omit defects and implementation reality |
| E06 | Current pricing and fee terms | Dated direct cost and plan thresholds | Volatile; refresh before publication |
| E07 | Contract, SLA and implementation scope | Obligations, exit, support and responsibility | Jurisdiction and negotiated terms vary |
| E08 | Export schema and sample export | Portability fields, format and relationship coverage | Availability does not prove importability |
| E09 | Import/migration report and source-target extract | Completeness, exceptions and transformed records | Vendor “success” status is insufficient alone |
| E10 | Audit, access and system logs | Who changed what, provenance and state transitions | May be unavailable or permission-limited |
| E11 | Raw operational records | Base appointments, clients, inventory or transactions | Needs definitions and privacy controls |
| E12 | Accounting, processor and ledger records | Financial state and reconciliation | Does not explain workflow by itself |
| E13 | Public status and incident history | Known outages, timing and recovery statements | Absence is not proof of reliability |
| E14 | Implementation, acceptance and failure-case test | Whether required workflows operate under defined conditions | Must be designed before results are known |
| E15 | Legal, privacy and professional authority | Applicable duties and boundaries | Jurisdiction-specific; not replaced by AI advice |
| E16 | Independent owner discussion or moderated review | Failure discovery, language and lived experience | Not prevalence or root-cause proof |
| E17 | Organizational/change-management research | Adoption, incentives and role effects | Must be translated cautiously to local context |
| E18 | Search/discovery evidence | Entry wording and visibility signals | Does not define the decision architecture or market prevalence alone |

# 6. Article IDs

IDs cover published, draft and canonical planned articles. Titles may change; IDs and decision ownership do not change without SOT maintenance.

| ID | Article | Decisions | Concepts | Evidence | Status |
|---|---|---|---|---|---|
| A01 | How to Evaluate a CRM: What Actually Matters for Service Businesses | D10,D15,D21 | C08,C15,C16,C18 | E05,E06,E14,E16 | Published |
| A02 | Why Scheduling Breaks in Service Businesses (and How to Fix It) | D01,D03,D12 | C01,C03,C10,C19 | E02,E05,E14,E16 | Published |
| A03 | What Actually Breaks First When a Scheduling System Scales | D12,D28 | C10,C11,C25,C26 | E02,E05,E14,E16 | Published |
| A04 | How to Choose a Salon CRM Without Regretting It Later | D10,D16,D17,D20,D21 | C08,C14,C16,C17,C21 | E05,E06,E08,E14,E16 | Published |
| A05 | Why Good Employees Stop Using Good Software | D07,D08,D24,D27 | C03,C06,C17,C25 | E02,E03,E10,E17 | Published |
| A06 | Owner Checklist — Launching a Salon CRM | D09,D22,D23 | C07,C22,C23 | E07,E08,E09,E14 | Draft |
| A07 | Financial Privacy / Safe Mode PIN — Why It Matters | D13,D25 | C12,C21,C24 | E05,E10,E15 | Draft |
| A08 | Square vs Fresha vs Mindbody — Practical Trade-offs | D21 | C08,C15,C16 | E05,E06,E08,E14,E16 | Draft |
| A09 | Is This a Software Problem or One Bad Incident? | D01,D02 | C01,C02 | E01,E10,E13,E16 | Planned |
| A10 | Fix the Process or Replace the Software? | D03,D04 | C03,C04 | E02,E03,E05,E17 | Planned |
| A11 | Standardize Before You Configure | D05,D06 | C05 | E02,E03,E07,E15 | Planned |
| A12 | Capture Operational Knowledge Before Automation | D07,D08 | C06,C17 | E02,E03,E10,E17 | Planned |
| A13 | Are You Ready to Implement New Business Software? | D09 | C07,C22,C23 | E03,E07,E08,E14 | Planned |
| A14 | CRM, Scheduler, POS, or Connected Stack? | D10,D11 | C08,C09 | E02,E05,E11 | Planned |
| A15 | What Can Your Business Actually Promise on the Calendar? | D12 | C10,C11,C19 | E02,E05,E14 | Planned |
| A16 | View, Edit, Export, API: Decide Access Before Choosing Software | D13 | C12,C21,C24 | E05,E10,E15 | Planned |
| A17 | Build the Exit Inventory Before You Buy | D14 | C13,C14,C21 | E05,E07,E08,E15 | Planned |
| A18 | What Evidence Should Make You Trust Business Software? | D15 | C15 | E05,E06,E07,E13,E14,E16 | Planned |
| A19 | What Will This Software Cost at Your Next Threshold? | D16 | C02,C14,C16 | E06,E07,E11,E12 | Planned |
| A20 | Test Adoption Before Contract Signature | D17 | C06,C17,C24 | E02,E03,E04,E14,E17 | Planned |
| A21 | Prove the Report Before You Trust the Dashboard | D18 | C09,C18,C20 | E10,E11,E12,E14 | Planned |
| A22 | Make Vendors Demonstrate the Failure Cases | D19 | C10,C11,C19,C20,C25 | E10,E13,E14,E16 | Planned |
| A23 | Can You Leave the Software Later? | D20 | C14,C21,C22,C26 | E07,E08,E09,E15 | Planned |
| A24 | Compare Products Only After the Decisions Are Clear | D21 | C08,C15,C16 | E05,E06,E07,E08,E14,E16 | Blocked |
| A25 | A Successful Import Is Not a Successful Migration | D22 | C13,C14,C22 | E08,E09,E10,E11,E12 | Planned |
| A26 | Define Go-Live Acceptance Before Onboarding Ends | D23 | C04,C07,C23 | E02,E04,E07,E14 | Planned |
| A27 | What Staff Workarounds Are Trying to Tell You | D24 | C06,C17,C25 | E02,E03,E10,E17 | Planned |
| A28 | Test Client Continuity After a System Change | D25 | C19,C20,C24 | E04,E10,E11,E14 | Planned |
| A29 | Monitor Operational Truth After Go-Live | D26 | C09,C18,C25 | E10,E11,E12,E13 | Planned |
| A30 | Change the Workflow, Configuration, Plan, or Platform? | D27,D28 | C03,C08,C17,C25,C26 | E01,E02,E03,E05,E17 | Planned |
| A31 | Stay, Supplement, Renegotiate, or Switch? | D29 | C02,C15,C21,C26 | E06,E07,E08,E11,E16 | Planned |
| A32 | When Is It Safe to Shut Down the Old System? | D30 | C14,C22,C23,C26 | E07,E08,E09,E10,E12,E15 | Planned |

`A24` is blocked until current product evidence, maintenance ownership and claim-refresh rules exist. `A08` may remain a draft, but publication is governed by the same gate.

# 7. Internal Linking Rules

Every article must expose, in prose or structured metadata:

1. **Previous Decision** — prerequisite or most likely entry decision.
2. **Current Decision** — canonical D ID the article resolves.
3. **Next Decision** — the conclusion that naturally follows.
4. **Related Concepts** — canonical C IDs actually explained.
5. **Related Evidence** — canonical E types and direct source citations used.
6. **Curiosity Hook** — unresolved implication that makes the next decision useful, without artificial suspense.
7. **Subtle Link** — a contextual internal link to the next decision or required concept.

Rules:

- No article may be an isolated node.
- Link by decision dependency, not merely thematic similarity.
- One canonical article owns the primary decision. Supporting pages deepen concepts without competing for ownership.
- Published article IDs remain stable if titles or URLs change.
- Product comparison must link backward to every prerequisite decision it assumes.

# 8. Research Rules

Future research is high priority only when it:

- discovers a genuinely new Human Decision;
- discovers a concept not represented by C01–C26;
- improves, contradicts or dates better evidence for an existing concept;
- identifies an owner profile whose decision order materially differs;
- falsifies an existing relationship or decision gate.

Research producing only more keywords is low priority. Search data may improve E18 and route users to decisions, but cannot create a new decision by itself.

Before opening new research, record:

`Candidate D/C/E ID → what current framework cannot explain → evidence needed → merge/split test`.

# 9. Article Creation Rules

Before drafting, answer:

- Which canonical Decision ID does the article resolve?
- Which primary fear makes it consequential?
- What desired outcome should the reader reach?
- Which Concept IDs are necessary?
- Which Evidence IDs and direct sources support the claims?
- Which next Decision ID naturally follows?
- Which existing article already owns adjacent territory?

If these answers are absent, the article must not be written.

Additional gates:

- A composite decision may require one flagship plus supporting concept notes.
- Do not create separate articles for synonymous questions unless the decision path differs.
- Do not publish volatile product claims without an evidence owner and refresh date.
- Legal, privacy, payroll and contract claims require E15 and explicit jurisdiction limits.

# 10. Product Rules

- Products never create Decisions. Products satisfy or fail decision requirements.
- No research article starts from Visaxa or a Visaxa feature.
- Product relevance does not prove product support.
- Current Product Support remains **U** until an authoritative capability matrix exists.
- Product comparison is valid only at D21 after D10–D20 prerequisites are explicit.
- Product selection must preserve uncertainty where evidence is incomplete.
- New roadmap items map to existing D/C/E IDs before they influence any article.

# 11. Maintenance Rules

When new research, a feature, roadmap item, forum discovery or Search Console cluster appears, ask in order:

1. Does it introduce a new decision?
2. Does it introduce a new concept?
3. Does it improve or contradict evidence?
4. Is it only another phrasing, keyword or product example?

Then:

- **New decision:** create the next unused D ID only after showing that no existing decision can absorb it.
- **New concept:** create the next unused C ID and map supported decisions, evidence and relationships.
- **Better evidence:** retain the same D/C IDs; update sources, dates and confidence.
- **New article:** create the next unused A ID only after article-creation gates pass.
- **Retirement:** mark an ID retired; never renumber or reuse it.
- **Status change:** Published, Draft, Planned, Blocked or Future must be updated here first.
- **Product change:** update a separate capability source of truth before changing Product Support from U.

Review this SOT whenever a registry changes. Supporting research may be corrected, but canonical IDs change only here.

# 12. Normalization Audit

## Canonical changes

- Human Decision IDs D01–D30 are adopted without renumbering.
- Twenty provisional concept labels from the AI graph are merged into C01–C26; distinctions required by earlier human decisions were added.
- E01–E18 formalize evidence types that were previously described repeatedly in prose.
- Published articles receive A01–A05; drafts receive A06–A08.
- Provisional planned A01–A24 from the Human Decision Graph become canonical A09–A32. The mapping is `old Axx → new A(xx+8)`.
- The separate 24-piece AI article map remains a strategy view. Its proposals map into A09–A32 or become supporting sections; it does not create a second article registry.

## Existing research document mapping

| Document set | Canonical role | Normalization result |
|---|---|---|
| `docs/research/market-listening/raw_findings.md` | E16 source evidence | Preserved; no canonical IDs originate here |
| `market-listening/question_clusters.md` | Decision discovery and recurrence evidence | Clusters map to D/C registries; not a competing taxonomy |
| `market-listening/ai_reasoning_map.md` | Early reasoning hypotheses | Superseded structurally by D/C/E model; evidence retained |
| `market-listening/article_opportunities.md` | Historical opportunity inventory | Ideas must map to A01–A32 before use |
| `ai_reasoning_graph/01_SOURCE_LOG.md` and corpus CSV | E16/E18 provenance and question evidence | Preserved as source layer |
| `ai_reasoning_graph/03_QUESTION_CLUSTERS.md` | Decision discovery | Maps into D01–D30 and C01–C26 |
| `ai_reasoning_graph/04_HIDDEN_INTENTS.md` | Emotion/fear evidence | Feeds decision Fear fields; not a separate hierarchy |
| `ai_reasoning_graph/05_AI_REASONING_PATHS.md` | AI clarification patterns | Maps to D decision rows and C/E dependencies |
| `ai_reasoning_graph/06_CONCEPT_GRAPH.*` | Detailed concept relationships | Node aliases normalized to C01–C26; JSON remains supporting machine-readable graph |
| `ai_reasoning_graph/07_CURRENT_CONTENT_GAP.md` | Article-gap audit | Feeds A status and future ownership |
| `ai_reasoning_graph/08_BRANCH_STRATEGY.md` | Concept-led strategy view | Subordinate to decision-led branches |
| `ai_reasoning_graph/09_PRIORITIZED_ARTICLE_MAP.md` | Ranking and historical 24-piece proposal | No independent A IDs; map to A09–A32 |
| `ai_reasoning_graph/00_EXECUTIVE_SUMMARY.md` and method | Summary/method controls | Supporting rationale; this SOT controls architecture |
| `human_decision_graph/01_HUMAN_DECISION_GRAPH.md` | Canonical decision discovery basis | D01–D30 adopted |
| `human_decision_graph/02_EMOTION_GRAPH.md` | Fear/emotion evidence | Feeds Decision registry; counts remain sample signals |
| `human_decision_graph/03_AI_REASONING_GRAPH.md` | Detailed D→clarification→C→E reconstruction | Canonicalized through registry IDs |
| `human_decision_graph/04_DECISION_TO_CONCEPT_MAP.md` | Article design basis | Provisional A IDs renumbered A09–A32 |
| `human_decision_graph/05_EXISTING_CONTENT_MAPPING.md` | Current-article audit | Published/draft IDs normalized A01–A08 |
| `human_decision_graph/06_NEXT_DECISION_BRANCHES.md` | Decision-led article sequence | Canonical article IDs A09–A32 |
| `human_decision_graph/07_STRATEGIC_CONCLUSIONS.md` and summary | Strategic rationale | Decision-led hybrid adopted here |

## Non-duplication rule

The supporting files may contain different views—source, cluster, graph, ranking or audit—but they may not define independent canonical D/C/E/A registries. Any future conflict is resolved in favor of this SOT.

# 13. Open Questions

1. An authoritative Visaxa product capability matrix does not exist in the inspected repository. Until created, every concept remains Product Support U.
2. Article metadata does not currently store D/C/E/A IDs. Implementation is a separate website task and is not authorized here.
3. A24/A08 require a dated product-evidence maintenance owner before comparison publication.
4. Direct owner interviews are needed to test whether the six profile paths omit materially different decision orders.
5. The machine-readable concept graph still uses descriptive legacy node IDs. A future non-destructive export may mirror canonical C IDs after this SOT is accepted.
