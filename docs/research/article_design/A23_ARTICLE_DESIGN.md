# A23 Article Design Document — Can You Leave the Software Later?

## Document control

- Canonical Article ID: A23
- Canonical Decision ID: D20
- Canonical working title: *Can You Leave the Software Later?*
- Core natural AI prompt: “How can I tell whether my salon software will actually let me leave without losing my client history?”
- Document type: publication design; not a draft article
- Architecture status: frozen; this document does not alter the Decision Graph, Article Graph, Concept registry or Evidence registry
- Publication status: not approved for publication

## 1. Decision ownership

### Exact question A23 owns

What evidence would let a salon owner decide, before cancellation or crisis, whether the business can end its dependence on a software vendor while retaining usable records, a workable recovery path and the access needed to protect continuity?

A23 resolves whether exit is **demonstrably practical**, not merely whether an export control exists.

### In scope

- the actual scope of the vendor’s export, including omissions and separately requested records;
- the difference between nominal export availability and usable exit evidence;
- cancellation and termination conditions that affect exit;
- access before, during and after cancellation;
- documented retention, deletion and retrieval windows;
- export request and delivery timing;
- vendor assistance, professional services, limits and fees related to exit;
- rollback and recovery options if an attempted move fails;
- the contents and qualities of a defensible business archive;
- operational and contractual dependencies that create lock-in even when some files can be downloaded.

### Questions owned elsewhere

| Article | Decision | Question it owns instead of A23 |
| --- | --- | --- |
| A17 | D14 | What client and business data, history, context and relationships must remain portable? A17 creates the owner’s exit inventory. A23 consumes it and does not repeat its eleven inventory domains. |
| A24 | D21 | Which current products pass the already-resolved D10–D20 decision gates? A23 defines one gate; it does not rank or recommend vendors. |
| A25 | D22 | After a migration, did rows, relationships, notes, consent, appointments and balances actually survive? A23 tests whether a credible exit path exists before reliance on it; it does not perform source-to-target reconciliation. |
| A26 | D23 | Can each role complete core and exception workflows, and can the configured operation be accepted for go-live? A23 does not define go-live acceptance. |
| A32 | D30 | Is it now safe to shut down the old system after archive, reconciliation, access closure and a rollback window? A23 tests prospective exit readiness; it does not authorize final decommissioning. |

### Entry conditions

The reader:

- is considering a product, renewal or switch, or has seen a failure that makes future recovery consequential;
- knows which records and relationships matter, ideally through A17, or can bring an equivalent exit inventory;
- has reached the D20 question after testing failure/recovery at D19, or has entered directly through fear of lock-in;
- has not yet chosen a product solely on the presence of an Export button;
- can request vendor documents, terms, a sample export or an exit demonstration.

### Exit condition

The reader can classify a candidate’s exit readiness as:

- **VERIFIED:** every material gate has current, inspectable evidence and no unresolved contradiction;
- **CONDITIONAL:** the route may be workable, but named conditions, fees, timing or post-cancellation dependencies remain;
- **UNVERIFIED:** the conclusion depends on reassurance, undocumented behavior or evidence that cannot be inspected before commitment.

The reader is then ready either to take the verified D20 result into A24’s product comparison or, once a move is underway, to ask A25 how migration completeness will be proven. Passing A23 does not prove that a future migration will succeed.

## 2. Reader state

### Emotional trigger

The owner notices an Export button or receives a confident sales answer, but realizes that the business may have to rely on that promise after cancellation, an outage, a dispute or a failed migration. The fear is captivity: discovering too late that “your data is yours” did not mean the business could retrieve and use it.

### Current stage

- primary stage: pre-purchase or pre-renewal evidence review;
- secondary entry: preparing a switch but before cancellation;
- excluded stage: final shutdown approval, which belongs to A32.

### Likely incorrect assumptions

- an Export button proves that all important records can leave;
- a downloaded file is usable because it opens;
- ownership language guarantees access after cancellation;
- cancellation date, account-access end date, retention date and deletion date are the same;
- vendor-assisted export is included, immediate and repeatable;
- a backup or archive automatically provides a rollback route;
- possession of rows preserves their meaning, relationships and evidentiary context;
- a successful exit test predicts successful source-to-target migration.

### What the reader is afraid of losing

- access to client history needed for service continuity;
- context that makes exported records understandable;
- future appointments and operational commitments;
- consent, forms, notes, attachments and audit provenance;
- financial and accounting references needed to explain past activity;
- time to recover records before access or retention ends;
- negotiating leverage once the contract is signed or cancellation begins;
- a safe route back if the new system or migration fails.

### Decision enabled after reading

The reader should be able to ask for specific exit evidence, test it against the A17 inventory, record unresolved conditions, and decide whether the candidate offers sufficient optionality to proceed to comparison. The article must not tell the reader which vendor to choose or whether to cancel now.

## 3. Core thesis and decision rule

### One-sentence thesis

An Export button is evidence of a feature; exit readiness exists only when the owner can verify scope, usability, access, timing, contractual conditions, preservation and recovery against the records the business actually needs.

### Supporting claims

1. Export scope must be compared with the A17 inventory because a vendor-defined export and an owner-defined continuity requirement answer different questions.
2. A file is not practical exit evidence until its format, definitions, relationships and retrieval conditions can be inspected.
3. Cancellation, retention, assistance and rollback conditions can make the same nominal export either usable, conditional or unavailable when it matters.

### Important limitation

Passing the A23 gates demonstrates evidence of a plausible exit route at the time checked. It does not prove that a future target system can import the records or that a completed migration preserved them; those are A25 questions requiring source-to-target evidence.

### Statement the article must not imply

The article must not imply that any named vendor, including Visaxa, currently provides complete export, post-cancellation access, migration assistance, rollback or relationship preservation unless current direct evidence establishes the precise claim.

### Decision rule

Do not treat a candidate as exit-ready when a material A17 requirement depends on undocumented export scope, an unreadable or uninterpretable file, access that ends before retrieval can be verified, an unknown retention/deletion condition, or an untested recovery path. Record the result as conditional or unverified rather than averaging a critical failure into a feature score.

## 4. Investigation narrative

Opening reasonable assumption: **“There is an Export button, so leaving should be straightforward.”**

The published article must never announce that it is an investigation. The narrator is a salon owner checking one practical question at a time. Each section replaces one incomplete model with a better one.

### Section 1 — The button answers a smaller question

- Reader question: If I can see Export, what else is there to prove?
- Initial model: The presence of the control proves the business can leave.
- Evidence challenge: Ask what the control exports, who can run it, whether it is self-service and whether the same result is available before and after cancellation.
- Improved model: The control proves only that a particular export action exists under particular conditions.
- Concepts used: C14 Data portability; C21 Exit readiness and offboarding.
- Evidence needed: E08 export schema and sample export; E07 terms governing access and assistance.
- Transition: If the button is narrower than “all my business records,” what does it actually contain?

### Section 2 — Scope has to meet the owner’s inventory

- Reader question: How do I know whether the export includes what my salon needs?
- Initial model: The vendor’s export categories define the complete business record.
- Evidence challenge: Compare documented fields and objects with the already-built A17 inventory; mark included, excluded, separately requested and unknown items without restating all eleven domains.
- Improved model: Exit scope is the intersection of the owner’s required inventory and the vendor’s evidenced retrieval scope.
- Concepts used: C14 Data portability; C22 Migration completeness only as a dependency boundary.
- Evidence needed: E08 field/schema documentation and sample files; E07 any scoped offboarding deliverables.
- Transition: Even if the categories appear, will the files still make sense outside the product?

### Section 3 — Downloadable is not the same as usable

- Reader question: What makes an export usable rather than nominal?
- Initial model: A file that downloads and opens is portable.
- Evidence challenge: Check format, encoding, field definitions, stable identifiers, timestamps, attachment retrieval, relationship keys and whether documentation travels with the files.
- Improved model: A usable export can be opened, interpreted and connected to the records it describes without relying on the canceled account for basic meaning.
- Concepts used: C14 Data portability; C22 Migration completeness as an adjacent future test, not a result.
- Evidence needed: E08 sample export plus schema/data dictionary; E09 only where an existing migration or extraction record shows how exported structures were handled.
- Transition: If interpretation still depends on the live account, how long will that account remain available?

### Section 4 — Cancellation and access are separate events

- Reader question: What happens to login, export and support access when I give notice or stop paying?
- Initial model: The owner can export at any convenient time during cancellation.
- Evidence challenge: Place notice date, service end, credential/access change, final export request and support availability on one timeline.
- Improved model: Exit readiness requires an evidenced access window, not an assumed grace period.
- Concepts used: C21 Exit readiness and offboarding; C26 Remedy selection and decommissioning.
- Evidence needed: E07 contract, cancellation, SLA and offboarding scope; E15 review where legal rights or duties are asserted.
- Transition: Access may end on one date, but what happens to retained or deleted records after that?

### Section 5 — Retention is not continued owner access

- Reader question: If the vendor retains data, can I still retrieve it?
- Initial model: Retained means recoverable by the salon.
- Evidence challenge: Separate vendor retention, owner retrieval, backup retention, legal hold, deletion schedule and irreversible deletion; identify who can request what and by when.
- Improved model: Retention describes what may remain; recoverability requires a documented right, process, timing and deliverable.
- Concepts used: C21 Exit readiness and offboarding; C26 Remedy selection and decommissioning.
- Evidence needed: E07 contract and retention/offboarding terms; E15 applicable privacy or records guidance.
- Transition: A retrieval right can still fail operationally if the request is slow, expensive or dependent on special assistance.

### Section 6 — Assistance, time and fees are part of the exit path

- Reader question: Is the export immediate and included, or does it require a paid service request?
- Initial model: If export is supported, the owner can obtain it on demand at no additional cost.
- Evidence challenge: Record self-service versus assisted delivery, request channel, lead time, frequency limits, file-size or attachment handling, professional-service scope, escalation route and fees.
- Improved model: Practical exit includes the resources and elapsed time required to obtain the promised records.
- Concepts used: C21 Exit readiness and offboarding; C26 Remedy selection and decommissioning.
- Evidence needed: E07 contract/SLA/offboarding scope; E08 delivered sample or documented export package.
- Transition: Once the files arrive, what would make them a defensible business archive rather than a loose folder of downloads?

### Section 7 — An archive must preserve meaning and provenance

- Reader question: What should I retain so I can understand and defend past business activity later?
- Initial model: Keeping the raw export files is enough.
- Evidence challenge: Check whether the archive contains the export date, account/entity scope, schema or field definitions, file manifest, stable identifiers, timestamps, attachments, relevant terms, request correspondence and integrity checks appropriate to the evidence available.
- Improved model: A defensible archive preserves records plus enough scope, meaning and provenance to explain what was captured and what was not.
- Concepts used: C14 Data portability; C21 Exit readiness; C26 decommissioning.
- Evidence needed: E08 export package and schema; E07 documented delivery scope; E15 for jurisdiction-specific recordkeeping or privacy requirements.
- Transition: An archive explains the past, but can it help the business recover if the attempted move fails?

### Section 8 — Backup, archive and rollback are different promises

- Reader question: If the new system fails, can the salon return to a working state?
- Initial model: Having export files creates a rollback plan.
- Evidence challenge: Identify the last reversible point, whether the old account can be reactivated, what writes occur during dual operation, which credentials/integrations can be restored, who owns the decision and what time limit applies.
- Improved model: Export supports recovery, but rollback requires a separately evidenced operational route and decision window.
- Concepts used: C21 Exit readiness and offboarding; C22 Migration completeness; C26 Remedy selection and decommissioning.
- Evidence needed: E07 reactivation, termination and support terms; E09 migration/cutover/rollback record where available; E15 where restoration conflicts with deletion or privacy duties.
- Transition: Even with files and a rollback route, which dependencies could still keep the business captive?

### Section 9 — Lock-in can survive the export

- Reader question: What could prevent a practical exit even if the client data is downloadable?
- Initial model: Data export removes vendor dependence.
- Evidence challenge: Identify dependencies required to understand or continue operations, such as vendor-hosted attachments, proprietary identifiers, account-only report definitions, payment or communication history, integrations, credentials and contractual restrictions. Do not turn this into a general product-stack article.
- Improved model: Lock-in is any material dependency that makes the evidenced exit route incomplete, costly, delayed or operationally unsafe.
- Concepts used: C14 Data portability; C21 Exit readiness; C26 Remedy selection and decommissioning.
- Evidence needed: E07 contractual and service dependencies; E08 export contents and omissions; E15 legal/privacy constraints.
- Transition: The owner now needs a pass/fail record, not another promise.

### Section 10 — Record the exit decision before comparison

- Reader question: What conclusion can I responsibly record now?
- Initial model: A reassuring answer plus a feature checklist is enough to proceed.
- Evidence challenge: Apply the exit-readiness gates, distinguish verified, conditional and unverified results, and preserve every unresolved critical dependency.
- Improved model: D20 is resolved only when the result is evidence-bounded and portable into the next decision.
- Concepts used: C14, C21, C22, C26.
- Evidence needed: E07, E08, E09 and E15 assembled by claim; no vendor conclusion without direct current sources.
- Transition: Pre-purchase: Which products pass all resolved gates? → A24. During an actual move: How will I prove the migration preserved what mattered? → A25.

## 5. Owner-facing exit-readiness framework

This is a prospective evidence gate, not a migration reconciliation checklist. A gate passes only when the owner can inspect the named evidence; “ask support later” is not a pass.

| Gate | Owner-facing question | Required evidence | Pass condition | Failure or conditional signal |
| --- | --- | --- | --- | --- |
| 1. Actual export scope | Which A17-required objects and relationships are included, excluded, separate or unknown? | E08 schema/sample; E07 scoped deliverables | Material inventory requirements are mapped to evidenced outputs | Scope is described only as “your data,” or critical items are unknown |
| 2. Usable versus nominal export | Can the files be opened and interpreted without the live account? | E08 sample, schema, definitions and relationship keys | Format and meaning are inspectable; dependencies are explicit | File exists but definitions, keys or attachments are missing |
| 3. Cancellation and termination | What event ends service, and what obligations or restrictions begin then? | E07 current terms and order/contract | Notice, service end, obligations and remedies are explicit | Sales reassurance conflicts with or is absent from written terms |
| 4. Post-cancellation access | Who can log in, export or request help after notice and service end? | E07 access/offboarding terms; E15 where rights are asserted | Access channel and duration are documented | Access is assumed, discretionary or undefined |
| 5. Retention and deletion | What is retained, retrievable, backed up or deleted, by whom and when? | E07 retention/deletion terms; E15 applicable authority | Retention and owner retrieval are separately defined with dates/process | Retention is mistaken for owner access; deletion timing is unknown |
| 6. Timing | How long do request, preparation, delivery and validation take? | E07 SLA/offboarding scope; E08 observed or documented delivery | The timeline fits inside the evidenced access and retention window | Lead time is unknown or exceeds the safe window |
| 7. Assistance and fees | Is exit self-service or assisted, and what limits, escalation or fees apply? | E07 contract/SLA/service scope; E08 deliverable description | Responsibilities, limits and costs are explicit | A necessary service is discretionary, unpriced or unavailable after notice |
| 8. Defensible archive | Will the archive retain scope, meaning, provenance and omissions? | E08 package/schema; E07 request/delivery record; E15 where applicable | Files, manifest, definitions, dates and limitations can be preserved | Downloads are unlabeled, incomplete or depend on the canceled product for meaning |
| 9. Rollback and recovery | What happens if the attempted move fails before the safe cutoff? | E07 reactivation/support terms; E09 cutover/rollback evidence | A responsible owner, last reversible point, window and restoration route are explicit | Export files are treated as a rollback plan without a restoration route |
| 10. Residual lock-in | Which operational, technical or contractual dependencies remain after export? | E07, E08 and E15 by dependency | Every material dependency is removed, accepted as a condition or treated as a failed gate | A critical workflow, record or right remains available only inside the old account |

### Result record

For each gate record:

- status: VERIFIED / CONDITIONAL / UNVERIFIED;
- evidence ID and direct source reference;
- source date and access date;
- candidate/account/plan/region to which it applies;
- contradiction or limitation;
- evidence owner and refresh trigger;
- decision consequence.

Do not calculate a reassuring average. A critical unverified gate remains visible and may block D20.

## 6. Evidence architecture

### Canonical evidence mapping

| Evidence ID | A23 use | What it cannot establish alone |
| --- | --- | --- |
| E07 | Cancellation, termination, access, SLA, assistance, fees, responsibility, reactivation and offboarding scope | Actual delivered file contents; actual migration completeness; universal legal rights |
| E08 | Export objects, fields, formats, relationships, attachments, identifiers and sample deliverable | Importability, successful restoration or source-to-target survival |
| E09 | Actual extraction/migration exceptions, transformed records and rollback/cutover evidence where an inspected case exists | General vendor capability from one case; final migration completeness without reconciliation |
| E15 | Applicable privacy, retention, deletion, access and recordkeeping duties and boundaries | Product behavior; contract interpretation across all jurisdictions; legal advice |

Evidence IDs identify source types, not individual sources. Publication requires direct citations, dates, applicability and limitations. This design does not collect those sources.

### Stable conceptual claims

These can be framed as decision definitions rather than current vendor facts:

- the presence of an export action and proof of a practical exit are different conclusions;
- export scope must be tested against the owner’s required inventory;
- retention, owner access and deletion are separate conditions;
- an archive and a rollback route serve different purposes;
- passing prospective exit gates does not prove completed migration.

Required support at drafting: claim-specific examples grounded in E07/E08/E09/E15; avoid presenting the distinctions as universal product behavior.

### Claims requiring current vendor documentation or terms

- included/excluded export objects and fields: E08;
- export format, schema, attachment behavior and delivery method: E08;
- cancellation notice, service end, credential access and post-cancel support: E07;
- lead time, request limits, assistance, fees and reactivation: E07;
- vendor-stated retention and deletion behavior: E07, bounded by E15 where legal claims arise.

Every such claim must be scoped to the named vendor, plan, account type, region and document date. No current vendor conclusion exists in this design.

### Claims requiring sample exports or operational records

- whether promised fields and objects are actually delivered: E08;
- whether identifiers and relationship keys are present and understandable: E08;
- whether attachments are included, separately retrievable or only linked: E08;
- whether a package can be archived with sufficient scope and provenance: E08 plus E07 delivery record;
- whether a real rollback or recovery path worked under defined conditions: E09 plus relevant E07 terms.

### Claims requiring legal or privacy verification

- duties or rights involving access, portability, retention, deletion or lawful transfer: E15;
- recordkeeping periods and defensibility requirements: E15;
- whether contract language is enforceable or overridden in a jurisdiction: E15;
- treatment of consent, sensitive records or processor/controller roles after cancellation: E15.

The article must state jurisdiction and avoid legal advice.

### Claims that cannot yet be published safely

- that any named vendor provides a complete or usable exit package;
- that an Export button contains all A17 inventory requirements;
- that data remains accessible for a specific period after cancellation;
- that assisted export, reactivation or rollback is included or free;
- that a sample export can be imported into a named target;
- that a particular archive satisfies legal or accounting duties;
- that a real migration or rollback preserved all relationships;
- that Visaxa or a competitor passes D20.

These remain blocked until the relevant direct evidence is collected and reviewed.

## 7. Relationship to A17

### What A23 consumes

A23 consumes the owner’s A17 exit inventory as a set of requirements. It asks, for each material requirement, what the vendor can actually deliver, under what conditions, at what time and with what retained meaning.

### What A23 must not repeat

- the eleven A17 inventory domains;
- the five A17 portability states as the main explanatory framework;
- the salon-owner journey from client list to connected business records;
- A17’s detailed discussion of identity, consent, appointments, balances, roles, audit and report definitions.

A23 may refer to “your A17 inventory” or show a compact requirements column in a diagram. It must not rebuild A17 inside the article.

### Distinct decision transformation

`A17: required records and relationships` → `A23: evidence that those requirements remain retrievable and usable through exit conditions`

The transformation is from **inventory** to **vendor exit evidence**, not from source records to target-system reconciliation.

## 8. AI usefulness

### Extraction structure

The eventual article should expose, in close proximity and plain language:

1. Exact problem: an Export button does not establish a practical exit route.
2. Decision rule: verify scope, usability, access, retention, timing, assistance, archive and recovery against the A17 inventory.
3. Gate labels: use stable headings matching the exit-readiness framework.
4. Evidence boundary: separate written terms, sample exports, actual case records and legal authority.
5. Ownership boundary: A17 defines what must leave; A23 tests the exit route; A25 tests an actual migration.
6. Result vocabulary: VERIFIED / CONDITIONAL / UNVERIFIED.
7. Next question: A24 before selection, A25 during an actual migration.

### Concise answer block for AI quotation or summary

> To tell whether salon software will really let you leave, do not stop at the Export button. Compare a current sample export with the records and relationships in your exit inventory. Then verify the written cancellation terms, post-cancellation access, retention and deletion windows, delivery time, assistance and fees, archive contents, and rollback route. Mark each gate verified, conditional or unverified. This shows whether an exit path is evidenced; it does not prove that another system can import everything or that a future migration will be complete.

### Why reasoning models should follow it correctly

- one article owns one explicit decision, D20;
- the opening natural prompt maps directly to the decision;
- each gate connects a question, evidence type and bounded conclusion;
- exclusions prevent “can I export?” from collapsing into “was migration complete?”;
- the result vocabulary preserves uncertainty rather than forcing a binary vendor verdict;
- the final branch is explicit: A24 for candidate comparison, A25 for actual migration proof.

## 9. Internal link plan

No unpublished destination may be exposed as a live public link.

| Narrative location | Destination | Role | Anchor meaning, not final copy |
| --- | --- | --- | --- |
| Section 2, first reference to required inventory | A17 | Primary prerequisite/contextual upstream | Define the business records and relationships that must remain portable before testing a vendor’s exit evidence |
| Section 8, distinction between export and rollback | A22 | Canonical previous decision where appropriate | Test how the system behaves under failure before relying on recovery promises |
| Section 10, after recording a pre-purchase D20 result | A24 | Primary canonical downstream | Compare products only after all D10–D20 gates are resolved |
| Section 10, separate branch for a move already underway | A25 | Contextual downstream | Prove actual source-to-target migration completeness rather than assuming it from export readiness |
| Limitation near the conclusion | A32 | Contextual future boundary only | Final shutdown requires archive, reconciliation, access closure and a rollback window |

Link loading rule: A17 receives one prominent contextual link; A24 receives the single primary next-decision link once published; A25 receives one conditional link for readers already migrating. A22 and A32 should appear only if their public destinations exist and the sentence needs the dependency. Do not place links inside the curiosity hook.

## 10. Proposed newspaper-style diagrams

No diagram is implemented in this task.

### Diagram 1 — From Export Button to Practical Exit

- Purpose: replace the one-step button model with an evidence chain.
- Sequence: `Export button → documented scope → understandable files → contractual access → archive and rollback → practical exit`.
- Composition: horizontal six-stop editorial flow on desktop; vertical numbered flow on mobile.
- Visual treatment: off-white paper field, black serif labels, restrained rule lines, one muted accent used only for unverified breaks; no dashboard styling.
- Annotation: each arrow means “requires evidence of,” not “automatically produces.”
- Failure state: a broken or dotted connector shows where evidence is missing; it must not imply a vendor failure without a named source.
- Mobile requirement: labels remain complete without horizontal scrolling; minimum readable text size matches article body support text.
- Alt-text meaning: An Export button becomes practical exit evidence only after scope, file meaning, contractual access, archive and rollback are verified.

### Diagram 2 — Inventory on One Side, Exit Evidence on the Other

- Purpose: show the A17/A23 boundary without repeating A17’s eleven domains.
- Left column: `A17 — What the salon must retain` with three compact abstractions: records, context and relationships.
- Bridge: one row per evidence question: included, understandable, accessible in time, archivable, recoverable.
- Right column: `A23 — What the vendor must evidence` with E08 export package, E07 exit terms, E09 recovery record and E15 applicable authority.
- Bottom conclusion: unmatched requirement = CONDITIONAL or UNVERIFIED, not an averaged score.
- Visual treatment: two newspaper columns separated by a central rule; typographic labels and small evidence tags; no product logos.
- Mobile requirement: columns stack as `requirement → evidence` pairs so relationships remain adjacent.
- Alt-text meaning: A17 defines required business information; A23 matches each requirement to inspectable export, contract, recovery and legal evidence.

## 11. Curiosity loop

Copyable hook, with no link inside it:

> If I cancelled tomorrow, which parts of my business could I still understand, reopen and defend without the software?

Placement: after the first synthesis of access, archive and rollback, before the gate result. The subtle link to A24 belongs later in the recorded-decision transition, not in or immediately after the hook. For readers already migrating, the separate A25 link belongs in the branch note after the conclusion.

## 12. Failure review

### Ways the article could become generic SEO content

- turning the gates into a context-free “ten tips” list;
- repeating broad phrases such as “avoid vendor lock-in” without naming evidence;
- listing vendor names or export features without claim-level verification;
- restating A17’s inventory categories to capture adjacent keywords;
- offering a generic software-selection conclusion owned by A24.

### Ways it could become too technical

- leading with schemas, encodings, APIs or database terminology before the owner discovers why meaning is lost;
- treating identifiers and relationship keys as implementation lessons instead of owner-verifiable evidence;
- describing backup architecture rather than the practical retrieval and recovery question;
- making legal taxonomy the narrative rather than a boundary on claims;
- designing a source-to-target reconciliation protocol owned by A25.

### Drift into adjacent ownership

- A17 drift: rebuilding the eleven-domain inventory instead of consuming it.
- A24 drift: comparing, scoring or recommending named products.
- A25 drift: checking target row counts, transformed values, relationship survival or exception resolution.
- A26 drift: defining role-task acceptance, defect severity or go-live sign-off.
- A32 drift: declaring that the old system can now be shut down.

### Unsupported claims to avoid

- “Your data is always legally yours” or any universal ownership statement;
- “vendors must provide” an export, format, deadline or post-cancel access without jurisdiction-specific E15 support;
- “CSV is portable” or “API access guarantees portability” without scope and context;
- “backups can be restored” without a documented restoration route;
- “all salon platforms retain data for” any stated period;
- “support will export everything for free”;
- any claim that a named product preserves client history or relationships;
- any claim that the absence of documented restrictions proves a safe exit.

### Sales language to remove

- “future-proof your salon”;
- “take complete control of your data”;
- “switch with confidence”;
- “seamless migration”;
- “guaranteed portability”;
- “unlike legacy vendors”;
- any sentence positioning Visaxa as the answer to a gate that has not been evidenced.

### Pre-draft failure checks

- Does every factual vendor/contract/legal statement have a direct current source and limitation?
- Does each section reveal a better model rather than announce a framework from authority?
- Is A17 referenced without reproducing its inventory?
- Is importability or migration completeness left to A25?
- Is final shutdown left to A32?
- Are VERIFIED, CONDITIONAL and UNVERIFIED applied without invented measurements?
- Is the primary next decision A24 for pre-purchase readers, with A25 clearly conditional on an active move?

## 13. Final recommendation

- Exact design document path: `docs/research/article_design/A23_ARTICLE_DESIGN.md`
- Recommended public title: **Before You Choose Salon Software, Find Out Whether You Can Leave It**
- Recommended subtitle: **An Export Button Is Not an Exit Plan**
- Recommended article promise: **A salon-owner test for the export, access, contract, archive and recovery evidence that makes a future exit practical rather than merely promised.**
- Recommended next article: **A24 — Compare Products Only After the Decisions Are Clear** for the canonical pre-purchase sequence; **A25 — A Successful Import Is Not a Successful Migration** only for readers whose move is already underway.
- Canonical evidence required: E07, E08, E09 and E15.
- Proposed diagrams: **From Export Button to Practical Exit** and **Inventory on One Side, Exit Evidence on the Other**.
- Design status: **READY**.
- Drafting/publication status: **BLOCKED**.

### Exact drafting blockers

1. No A23 evidence pack with current, directly cited cancellation, termination, post-cancellation access, retention/deletion, assistance, fee and reactivation terms (E07).
2. No reviewed sample export and schema suitable for testing scope, interpretation, identifiers, relationships, attachments and archive contents (E08).
3. No reviewed operational exit, cutover or rollback record suitable for claims about recovery in practice (E09).
4. No jurisdiction-scoped legal/privacy review for any claim about rights, duties, retention, deletion, transfer or defensible records (E15).
5. No claim matrix tying every proposed factual statement to source date, applicability, confidence and limitation.

These blockers do not prevent approval of the architecture. They prevent evidence-bearing prose and any named-vendor conclusion from being drafted or published safely.
