# A19 Article Design — Cost at the Next Operational Threshold

Status: **READY FOR OWNER REVIEW WITH KNOWN EVIDENCE LIMITS**

## Canonical ownership

- Article ID: **A19**
- Decision ID: **D16 — Will cost remain acceptable at the next threshold?**
- Canonical concepts: C02 cost of operational friction; C16 workflow-adjusted total cost; C21 exit readiness and offboarding.
- Canonical evidence: E06 current pricing and fee terms; E07 contracts and implementation scope; E11 raw operational records; E12 accounting, processor, and ledger records.
- Predecessor: A18 / D15. A18 establishes how a material vendor claim should be tested.
- Successor: A20 / D17. A20 tests whether staff and clients will actually use the candidate under real conditions.
- Entry condition: the owner has a credible candidate and can name the next likely operational threshold.
- Exit condition: the owner has a dated, scenario-specific cost model showing direct expenditure, transition cost, workflow burden, potential economic benefit, uncertainty, and the threshold at which the decision changes.

## Repository truth

The published MDX inventory contains A18 and A23–A32 but no A19 publication. The Editorial Roadmap marks A19 as `PLANNED`, evidence not started, and identifies it as the next unimplemented decision after A18. The Human Decision Graph and Decision-to-Concept Map preserve the sequence:

`A18 / D15 → A19 / D16 → A20 / D17`

The master SOT also assigns A19 exclusively to D16. No new Article, Decision, Concept, or Evidence ID is required.

## Exact question A19 owns

> What will this candidate cost when the salon crosses the next realistic staffing, location, usage, workflow, or exit threshold—and will the resulting economics still be acceptable?

This is not merely a subscription-price question. It is a decision about the change in total economic cost between the current operating state and the next likely state.

## Questions owned elsewhere

- A18: What evidence makes a vendor claim safe enough to rely on?
- A20: Will staff and clients actually use the software in real conditions?
- A21: Can the reports and states be reconciled and proven?
- A23: Can the salon leave the software later, and what evidence proves that exit is practical?
- A24: Which candidates pass requirements already established?
- A31: After a proven problem, should the salon stay, supplement, renegotiate, or switch?

A19 may price an exit scenario, but it must not repeat A23's portability and cancellation investigation. It may price adoption burden, but it must not perform A20's real-use test.

## Reader state

### Entering assumption

“The plans are $X and $Y per month, so I can compare them now.”

### Emotional trigger

The owner can afford the entry price but fears discovering later that a hire, second location, higher message volume, payment mix, or required add-on changes the economics after the salon is committed.

### Likely incorrect models

1. The advertised subscription is the total cost.
2. A lower entry price stays lower as the salon grows.
3. Time saved is automatically payroll saved.
4. Recovered bookings equal profit.
5. Avoiding a hire means eliminating an employee.
6. Every claimed benefit can be added to every other claimed benefit.
7. Migration and exit are exceptional costs that can be ignored until they happen.

### Leaving decision

The reader should be able to state:

- the next threshold most likely to occur;
- the cost drivers that change at that threshold;
- the dated evidence behind each driver;
- the difference between expenditure and net economic outcome;
- the assumptions that would make the candidate acceptable or unacceptable;
- the observations A20 must test before any labor-saving assumption is trusted.

## Core thesis

### One-sentence thesis

The useful price of salon software is not today's subscription but the change in total economic cost when the salon reaches its next operational threshold, including direct fees, implementation and exit costs, transferred work, and only those financial benefits that can be measured without double-counting.

### Supporting claims

1. Official pricing pages show materially different threshold units: per location, per user or bookable team member, plan bands, included message allowances, processing rates, and paid add-ons.
2. Workflow changes can move rather than remove work; five extra minutes inside every service may consume bookable capacity even when a receptionist vacancy remains unfilled.
3. A benefit becomes economic only when it changes paid labor, avoids a documented future cost, or produces incremental contribution profit after variable costs.

### Important limitation

No retained evidence establishes a typical ROI for salon software. Current official pricing can establish dated vendor charges and limits, not a salon's future behavior, savings, revenue, or profit.

### The article must not imply

- that any named vendor is cheapest;
- that a feature necessarily reduces no-shows or staffing;
- that a vendor ROI claim has been independently replicated;
- that an avoided hire is equivalent to firing an employee;
- that VisaxaCRM currently produces measurable savings or revenue.

## Investigation narrative

| Section | Initial mental model | Discovery | Better model | Evidence required | Transition |
| --- | --- | --- | --- | --- | --- |
| 1. The cheapest monthly plan won | Compare today's headline prices | The owner expects a staffing change within a year | Compare candidates at a named future operating state | Current dated pricing | What exactly changes at that state? |
| 2. The threshold had several meters | Growth means only more employees | Vendors meter locations, users, calendars, messages, transactions, add-ons, and plan bands differently | Build one threshold map per candidate | Official pricing and terms | Direct fees still omit work created or removed |
| 3. The invoice was not the whole cost | Subscription plus processing is total cost | Setup, training, dual entry, correction, devices, integration, reporting, and exit consume cash or paid time | Separate recurring, usage, one-time, and contingent cost | Contract scope; owner records | Could benefits offset those costs? |
| 4. Time saved refused to become cash | Saved minutes equal savings | Time has no automatic financial realization | Track time, then separately prove payroll reduction, avoided hiring, or profitable capacity | Task-time and payroll records | Test the avoided-receptionist case |
| 5. Five minutes followed every appointment | An unfilled receptionist position equals full salary saved | Administrative work may be transferred into service appointments | Subtract the capacity cost of transferred work | Muse pilot question; constructed calculation | Revenue claims need the same discipline |
| 6. A recovered booking was not profit | Full service price is benefit | Commission, materials, processing, and other variable costs remain | Use incremental contribution profit | SBA contribution-margin method; salon ledger | Stop benefits from being counted twice |
| 7. One appointment appeared in three benefit columns | Each mechanism can claim full value | Missed-call recovery, no-show prevention, and utilization may describe the same appointment | Use an event ledger and mutually exclusive benefit categories | Raw appointment/payment records | Put costs and benefits in one threshold model |
| 8. The next-threshold model changed the winner | One annual total is sufficient | Results depend on volume, realization, and uncertainty | Show base, low, and high cases with decision boundaries | All above | A20 must test whether the workflow is actually usable |

The narration should remain in a salon owner's first-person investigation. It must not announce a framework from authority.

## Calculation methodology

### 1. Define the threshold state

Record current and next-state values for:

- bookable professionals and other users;
- locations;
- completed appointments and message volume;
- payment mix and processed volume;
- required integrations, permissions, devices, and add-ons;
- current administrative hours and the event expected to trigger a hire;
- implementation, migration, and exit horizon.

### 2. Calculate total incremental expenditure

```text
incremental software expenditure
= subscription change
+ usage and transaction fees
+ required add-ons and integrations
+ hardware and device cost
+ implementation, migration, training, and dual-run cost
+ recurring internal administration and correction cost
+ expected transition and exit cost allocated to the decision horizon
```

Do not mix taxes or optional expenditure into the model silently. Label whether each amount is quoted, estimated, optional, contingent, or unknown.

### 3. Calculate realized economic benefit

```text
realized economic benefit
= paid hours actually removed
+ documented hire cost actually avoided
+ incremental contribution profit from additional completed work
+ measured correction or loss cost actually avoided
```

Time saved remains an operational measure until one of those financial realizations is observed.

### 4. Calculate net economic outcome

```text
net economic outcome
= realized economic benefit
- incremental software expenditure
- value of capacity transferred to other workers
- other new operating cost caused by the workflow
```

A negative result means the measured benefits exceed the measured incremental costs for the declared period. It is not a product-wide ROI claim.

## Avoided-receptionist-hire example

This is a constructed sensitivity test inspired by a Muse pilot observation. It is not a measured salon result.

Assumptions for one month:

- the salon has a documented plan to hire reception coverage costing $3,600 in fully loaded monthly compensation;
- the candidate adds $400 in recurring software and usage cost;
- implementation and training are allocated at $200 per month for the first year;
- 500 service appointments are completed;
- administrative work transferred into appointments adds five minutes per appointment;
- the salon estimates $45 contribution margin per genuinely available bookable hour;
- the upper-bound case assumes all transferred minutes displace otherwise profitable bookable time.

Calculation:

```text
transferred time = 500 × 5 minutes = 2,500 minutes = 41.7 hours
displaced profitable hours = transferred hours × assumed or measured displacement rate
upper-bound capacity value at risk = 2,500 ÷ 60 × 100% × $45 = $1,875
net monthly outcome = $3,600 - $400 - $200 - $1,875 = $1,125
```

This result is not publishable as a prediction. The 41.7 hours are theoretical capacity exposed to transferred work, not proven displaced bookings. At 50% assumed displacement, the capacity cost is $937.50 and the modeled benefit is $2,062.50; at zero displacement no capacity cost is assigned. The result also changes if the salon was not genuinely about to hire, if a realistic non-switch alternative could avoid the same hire, if appointment volume differs, or if the $45 contribution assumption is wrong. At 700 appointments, the transferred burden becomes 58.3 hours; at 300, it becomes 25 hours.

## Double-counting safeguards

1. Give each recovered or protected appointment one counting row so its economic outcome can enter the total only once.
2. Count full contribution profit once, not once for the missed call, again for booking, and again for no-show prevention.
3. Treat a deposit as timing or risk protection unless it creates a separately measured net recovery; do not add the deposit and full completed-service revenue as two benefits.
4. Value released time either as payroll reduction, avoided hiring, or additional contribution profit. Do not value the same hour in multiple categories.
5. Subtract commissions, materials, processing, and other variable costs before calling recovered revenue a profit benefit.
6. Keep implementation savings separate from recurring savings.
7. Compare the chosen software against a defined alternative, including “keep the current process,” not against zero cost.
8. Record attribution confidence and external changes such as pricing, staffing, seasonality, promotions, or policy changes.
9. Compare the switch with the best realistic non-switch alternative. Credit the software only with the incremental improvement that the current system, a policy change, or another feasible workflow could not produce at equal or lower cost.

## Evidence plan

- E06: current official vendor pricing, processing, communication allowances, plan bands, per-user and per-location terms.
- E07: implementation scope, cancellation, migration assistance, hardware, training, and contractual commitments.
- E11: appointment volume, message counts, task time, staffing plans, completed appointments, and workflow corrections.
- E12: payroll, processor fees, commissions, materials, refunds, deposits, and contribution margin.
- E02 may support a future measured workflow study but is not canonical evidence ownership for A19; do not imply such a study occurred.
- E16/Muse pilot is question-generating evidence only. It identifies owner language and possible failure modes, not prevalence or measured ROI.

## Internal-link plan

1. Link upstream to A18 when the owner begins testing current pricing and ROI claims. Anchor meaning: verify each material claim against the source and conditions.
2. Link contextually to A23 only where exit and migration cost enter the model. Anchor meaning: practical exit evidence, not merely an export button.
3. Do not create a dead link to A20. End with A20's exact human question until A20 is published.
4. Do not overload the draft with links to generic comparison pages.

## Copyable research question

> At my salon's next staffing, location, and usage level, which software costs change—and which claimed savings would actually reach payroll or contribution profit?

## Proposed future research topic — noncanonical

Working question: **Can salon software pay for itself? A test, not a promise.**

This may deserve a separate future investigation of baseline design, attribution, benefit realization, contribution profit, and post-implementation measurement. No Article ID is assigned, it is not inserted into the canonical chain, and it must not displace A19's D16 ownership without explicit architecture approval.

## Editorial QA

- PASS: A19 remains centered on the next operational threshold.
- PASS: Net economic outcome enriches rather than replaces total-cost analysis.
- PASS: A20 retains adoption ownership.
- PASS: Vendor facts are limited to official current sources and dated.
- PASS: Muse owner reports are not treated as quantitative proof.
- PASS: No VisaxaCRM capability or ROI claim appears.
- PASS: The calculation exposes assumptions and transferred work.
- PASS: Double-counting controls are explicit.
- LIMITATION: No real salon baseline, payroll ledger, appointment sample, or measured before/after result was inspected.
- LIMITATION: Vendor pricing is volatile and region-specific and must be refreshed immediately before publication.
- LIMITATION: The Muse Facebook material was supplied as an independent pilot report but was not independently authenticated in this worktree.

## Draft readiness

**READY FOR OWNER REVIEW WITH KNOWN LIMITATIONS.**

The method and constructed calculation are supportable. Any claim that a named product saves labor, reduces no-shows, increases retention, or pays for itself remains blocked without independent, salon-specific evidence.
