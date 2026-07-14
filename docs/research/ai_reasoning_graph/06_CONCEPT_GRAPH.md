> Architecture status: supporting research. Canonical IDs and rules are defined in [Visaxa Decision Framework SOT](../../master/00_VISAXA_DECISION_FRAMEWORK_SOT.md).

# Concept graph

## Human-readable hierarchy

- **Software decision quality**
  - System boundary and workflow fit
  - Workflow-adjusted total cost
    - Free-plan growth threshold
    - Marketplace dependency
  - Implementation acceptance
    - Adoption acceptance
      - Workflow friction
      - Operational knowledge capture
  - Exit readiness
    - Migration completeness
      - Customer identity
      - Data portability
    - Offboarding and client continuity
- **Operational scheduling truth**
  - Operational capacity
    - Resource identity
    - Multi-location control plane
  - Scheduling integrity
    - Appointment/payment state separation
- **Governance and trustworthy operations**
  - Capability-level access
  - Operational truth
    - Metric contract
    - Report reconciliation

## Node registry

Demand uses `very high / high / medium`; it reflects cross-domain recurrence in this purposive corpus, not market share. Competition means how crowded generic web coverage appears, not a measured SEO difficulty score.

| Canonical node | Plain-language definition | Common user phrasings | Questions it helps answer | Parents / children / adjacent | Evidence needed | Demand / competition | Salon / cross-industry / MVP+ relevance | Credible now? | Existing overlap | Best form |
|---|---|---|---|---|---|---|---|---|---|---|
| System boundary and workflow fit | Decide whether the operating problem needs CRM, scheduling, POS or a coordinated stack | “CRM or booking app?”, “all-in-one?” | What category should I compare? | Parent: decision quality; children: cost, implementation; adjacent: capacity | Process map, product scope docs, failure cases | high / high | high / high / medium | yes | evaluation and salon-choice articles | flagship article |
| Workflow-adjusted total cost | Subscription plus payments, messages, add-ons, labor, failure and exit cost | “free CRM”, “hidden fees”, “worth it?” | What will this cost at current and future scale? | Parent: decision quality; children: growth threshold, marketplace dependency | Current pricing, transaction terms, task time, migration cost | very high / high | high / high / medium | yes | partial evaluation overlap | comparison framework |
| Free-plan growth threshold | The operational event that forces a paid tier or migration | “first employee cost”, “upgrade cliff” | When does free stop being economical? | Parent: total cost; adjacent: portability | Plan history, limits, volume scenarios | high / high | high / high / low | yes | none | deep research note |
| Marketplace dependency | Reliance on platform discovery, account, fees or rankings for client flow | “promotes competitors”, “new client fee” | Who controls acquisition and the client relationship? | Parent: total cost; adjacent: offboarding, portability | Marketplace terms, fee attribution, booking flow | high / medium | very high / medium / low | yes, cautiously | salon-choice mentions | deep research note |
| Implementation acceptance | Measurable proof that configured software works in real operations | “onboarding complete?”, “go-live failed” | When can we sign off, pay or cancel the old tool? | Parent: decision quality; children: adoption, migration | Acceptance criteria, defect log, task/reconciliation tests | very high / medium | high / high / high | yes | draft owner checklist | methodology page |
| Adoption acceptance | Evidence that roles can complete core tasks without unsafe workarounds | “team hates CRM”, “still uses spreadsheets” | Is resistance training, design or incentive failure? | Parent: implementation; children: friction, knowledge capture | Task observation, audit, interviews, error/time metrics | high / medium | high / high / high | yes | employee-adoption article | flagship article |
| Workflow friction | Extra steps, duplicate entry, context switching and exception failure | “too many clicks”, “slow front desk” | Why is technically capable software abandoned? | Parent: adoption; adjacent: interface parity | Task timing, workflow map, usability evidence | very high / high | high / high / high | yes | adoption and evaluation overlap | glossary/explainer |
| Operational knowledge capture | Preserve why frontline workarounds and exceptions exist before redesign | “receptionist resists”, “only one person knows” | What will automation accidentally remove? | Parent: adoption; adjacent: permissions | Interviews, exception inventory, role map | medium / low | high / high / medium | yes | adoption article partial | methodology page |
| Operational capacity | Availability after staff, room, equipment, travel, buffers and policy intersect | “slot is open but not bookable” | What can actually be promised? | Parent: scheduling truth; children: resources, multi-location | Constraint model, scenario tests, docs | very high / medium | very high / high / high | yes | scheduling articles strong | flagship article |
| Resource identity | Correct representation of a room, chair, device, vehicle or shared asset | “two people booked one room” | What should block or share capacity? | Parent: capacity; adjacent: pricing context | Resource docs, capacity model, concurrency test | high / medium | very high / high / high | yes | scheduling articles partial | deep research note |
| Multi-location control plane | Rules for what is shared, local, inherited and consolidated across sites | “supports two locations?” | How do clients, staff, price, inventory and reports behave at location two? | Parent: capacity; adjacent: identity, access, truth | Hierarchy docs, pricing, scenario matrix | high / high | very high / medium / medium | yes conceptually | scheduling scale partial | flagship article |
| Scheduling integrity | Ability to preserve correct appointment state through concurrent changes and failures | “appointment disappeared”, “double booked” | Can the calendar be operationally trusted? | Parent: scheduling truth; child: appointment/payment state | Audit logs, sync semantics, incident and reconciliation evidence | very high / medium | very high / high / high | yes | scheduling articles partial | methodology page |
| Appointment/payment state separation | Treat requested, booked, no-show and canceled separately from held, charged, refunded and disputed | “deposit saved but not charged” | What happened to the appointment and money? | Parent: scheduling integrity; adjacent: operational truth | Payment docs, state diagrams, ledger tests | very high / medium | very high / medium / high | yes conceptually | none | deep research note |
| Customer identity | Rules that decide when records represent the same person across systems | “duplicate clients”, “two emails” | Why did migration, billing or consent fragment? | Parent: migration; adjacent: truth, multi-location | Identity keys, merge rules, relationship model | very high / high | high / very high / high | yes | none | flagship article |
| Migration completeness | Proof that rows, relationships, notes, consent, appointments and balances survived | “import succeeded—are we done?” | How do we validate and roll back? | Parent: exit readiness; children: identity, portability | Schemas, dry run, reconciliation, rollback | very high / high | very high / very high / high | yes | evaluation partial, draft checklist | methodology page |
| Data portability | Ability to export usable records with relationships and context | “can I take my clients/history?” | Can I leave without rebuilding? | Parent: exit readiness; adjacent: offboarding, cost | Export/API docs, formats, contract terms | high / high | high / very high / medium | yes | evaluation partial | comparison framework |
| Offboarding and client continuity | Revoke access, preserve consent/history and communicate service continuity when people or vendors leave | “who owns clients?”, “remove card/account?” | How do we exit safely? | Parent: exit readiness; adjacent: access, marketplace | Contract/legal review, audit, privacy, export evidence | high / medium | very high / high / medium | only with legal caveats | privacy draft partial | deep research note |
| Capability-level access | Separate view, edit, delete, export, API and financial visibility by role/location | “see but not export?”, “hide revenue?” | How can staff work without excessive access? | Parent: governance; adjacent: offboarding, multi-location | Permission matrix, audit/API docs, security principles | high / medium | very high / very high / high | yes | Safe Mode draft too narrow | flagship article |
| Operational truth | A defensible hierarchy of records and states used for owner decisions | “which number is right?” | What is the source of truth when systems disagree? | Parent: governance; children: metric contract, reconciliation | Data lineage, raw records, ledger, report definitions | very high / medium | high / very high / high | yes | none | flagship article |
| Metric contract and reconciliation | Explicit definition of grain, timing, filters and tie-out method for a metric | “why is commission report wrong?” | Can reports support payroll and trend decisions? | Parent: operational truth; adjacent: payment state | Data dictionary, raw export, accounting tie-out | high / medium | high / very high / medium | yes | evaluation mentions reports | methodology page |

## High-value edges

- `system boundary → operational capacity`: category choice must follow the constraints the system needs to model.
- `total cost → data portability`: low entry price can create expensive exit.
- `implementation acceptance → migration completeness`: imported rows are only one go-live criterion.
- `migration completeness → customer identity`: reconciliation fails without a canonical person rule.
- `adoption acceptance → operational knowledge capture`: workarounds must be classified before removal.
- `operational capacity → resource identity`: availability is wrong when shared assets are modeled incorrectly.
- `scheduling integrity → appointment/payment state separation`: a no-show correction must not silently rewrite money.
- `multi-location control → capability-level access`: location two creates scope boundaries.
- `operational truth → metric contract`: “source of truth” is empty unless each metric is defined and reconcilable.
- `offboarding → data portability`: client continuity depends on export scope, consent and access revocation.
