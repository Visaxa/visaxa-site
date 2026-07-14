> Architecture status: supporting research. Canonical IDs and rules are defined in [Visaxa Decision Framework SOT](../../master/00_VISAXA_DECISION_FRAMEWORK_SOT.md).

# Observed question clusters

Clusters are ordered by cross-domain recurrence and decision severity, not by raw keyword volume.

| Cluster | Observed question pattern | Independent source domains | Salon-specific / cross-industry | Typical stage | Diagnostic distinction |
|---|---|---:|---|---|---|
| Migration completeness and recovery | Did all clients, notes, appointments, consent and history survive? | 9 | Both | implementation / urgent | Import success is not migration acceptance |
| Client identity and duplicate control | Why did one person become several records or charges? | 7 | Cross-industry | implementation | Identity is different from a contact row |
| Scheduling and resource integrity | Can staff, rooms, equipment, travel and buffers be booked without conflict? | 8 | Both | evaluation / active problem | Calendar availability is not operational capacity |
| Payment, deposit and appointment state | Was money held, charged, applied, refunded or merely authorized? | 7 | Salon-heavy | active problem | Booking status and payment status need separate ledgers |
| Total cost, plan cliffs and lock-in | What does “free” or “all-in-one” cost at real scale? | 8 | Both | evaluation / switching | Sticker price is not workflow-adjusted total cost |
| Adoption and daily task friction | Why do competent staff create workarounds or resist the system? | 7 | Both | implementation | Resistance may carry hidden process knowledge |
| Reporting and operational truth | Can owner reports reconcile to base records and transactions? | 7 | Both | active problem | A clean database can still yield a wrong report |
| Permissions, visibility and export | Can people do their job without seeing or extracting everything? | 5 | Both | implementation | View, edit, export, API and financial visibility are separate capabilities |
| Client ownership and offboarding | Who controls records, reviews and communications when a worker or business leaves? | 6 | Salon-heavy | switching / urgent | Relationship, consent, platform account and legal ownership differ |
| Multi-location control | What changes when staff, inventory, clients and reporting span locations? | 6 | Both | evaluation | Location two changes governance, not only calendar count |
| Support and implementation accountability | Who owns unresolved setup defects after contract signature? | 7 | Both | implementation / urgent | Implementation completion needs measurable acceptance criteria |
| Marketplace versus direct relationship | Does discovery justify fees, competing recommendations or client-account friction? | 5 | Salon-heavy | evaluation | Acquisition channel and system of record can conflict |
| Compensation, commission and incentives | What is paid, to whom, from which base, and what behavior does the rule create? | 3 | Salon-heavy | evaluation / implementation | Correct arithmetic can still drive bad incentives |
| Interface and cross-device parity | Do web, mobile, branded app and front desk show the same state? | 6 | Both | evaluation / active problem | Feature availability is not state consistency |
| CRM versus scheduler scope | Does the business need pipeline CRM, appointment operations, or both? | 6 | Both | discovery / evaluation | “CRM” is an overloaded category label |

## Classic search intent versus AI follow-up intent

Classic search usually begins with short comparison language: “best salon software,” “free CRM,” “Mindbody alternative,” “CRM evaluation matrix.” AI follow-ups become conditional and operational: “What changes if two providers share a room?”, “How do I prove notes migrated?”, “Can staff see client notes but not export the list?”, or “What happens to deposits during cutover?”

The strategic implication is not to chase every long phrase. A reusable node should explain the governing distinction, evidence test and failure case that several follow-ups depend on.

## Contradictions found before gaps

1. Users ask for “all-in-one” while repeatedly complaining that breadth creates slow task paths, shallow specialist features and higher training cost.
2. Users ask for “free” while the consequential fear is often lock-in, migration labor or transaction/add-on cost rather than subscription price.
3. Owners want staff visibility for service continuity and simultaneously fear client-list export, financial exposure and employee departure.
4. Marketplaces promise discovery while operators fear competitor promotion and loss of direct client control.
5. Automation is requested to reduce labor, but adoption fails when it removes role identity or ignores frontline exception handling.
6. A successful import or implementation status is treated as completion even when daily task time, data completeness and financial reconciliation fail.
