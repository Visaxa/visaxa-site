# A10 Article Design Document — Fix the Process or Replace the Software?

## Document control

- Canonical Article ID: A10
- Canonical Decision IDs: D03, D04
- Canonical working title: *Fix the Process or Replace the Software?*
- Recommended public title: *Is Your Salon CRM Actually the Problem?*
- Core natural AI prompt: “How do I know whether my CRM is actually the problem?”
- Document type: publication design; not final article
- Architecture status: frozen; this document does not alter the Decision Graph, Article Graph, Concept registry or Evidence registry
- Publication status: publication candidate requested; not approved for publication

## 1. Decision ownership

### Exact question A10 owns

How can a service-business owner determine whether recurring operational friction is caused by an unclear process, insufficient training or adoption, configuration that does not express the intended workflow, a mismatch between the workflow and the tool, or a structural software limitation—and define the operating result that must change before choosing a remedy?

### In scope

- treating recurring symptoms as clues rather than diagnoses;
- comparing the intended workflow with work as actually performed;
- distinguishing unclear process, training/adoption failure, configuration failure, workflow mismatch and structural capability limitation;
- using a controlled operational test before concluding that replacement is necessary;
- requiring repeated observation and measurable consequences;
- defining the operating outcome and acceptance condition that a remedy must produce;
- deciding whether to clarify, train, configure, supplement or continue toward replacement analysis.

### Questions owned elsewhere

| Article | Decision | Question owned elsewhere |
| --- | --- | --- |
| A09 | D01, D02 | Is the problem recurring and costly enough to justify action? A10 begins after a pattern deserves diagnosis. |
| A05 | D07, D08, D24, D27 | Why do employees bypass a system, and what do workarounds reveal about knowledge, incentives and adoption? A10 uses observed workarounds as evidence but does not own the broader staff-adoption decision. |
| A11 | D05, D06 | Which work should become a shared rule and which exceptions must remain flexible? A10 ends at this question. |
| A12 | D07, D08 | Who holds essential operational knowledge, and who bears the burden of change? |
| A14 | D10, D11 | Does the business need a CRM, scheduler, POS or connected stack, and where should operational truth live? |
| A15 | D12 | What staff, room, equipment, travel, recurrence and location constraints must the calendar represent? |
| A17 | D14 | What business data and relationships must survive a migration? A10 may mention this only as a distant consequence of a later replacement decision. |
| A30 | D27, D28 | After deeper operational evidence, should the business change workflow, policy, training, configuration, software or category? A10 provides the early diagnosis and outcome definition, not the later remedy portfolio. |

### Entry conditions

The reader:

- has seen recurring friction rather than one isolated incident, or accepts that A09 owns that preliminary check;
- can name at least one real task where the friction appears;
- has not yet proved whether the cause is policy, practice, configuration or capability;
- can observe the task, speak with the people doing it and inspect current product documentation or configuration;
- has not yet reduced the decision to a feature wishlist.

### Exit condition

The reader can record:

1. the exact task and intended result;
2. the observed symptom and measurable consequence;
3. which of five cause classes remain plausible;
4. what was clarified, trained and configured during a bounded test;
5. whether the symptom diminished, changed or persisted across repeated observations;
6. the operating outcome a remedy must achieve;
7. whether the next rational step is process correction or continued software evaluation.

The next canonical question is A11: **Which parts of this work should become a shared standard, and which exceptions must remain flexible?**

## 2. Reader state

### Emotional trigger

The owner is tired of hearing “the system won’t let me,” finding side spreadsheets and correcting work that appears to have been entered already. The repeated thought is: “We keep fighting the system. Maybe the software is the problem.”

### Current stage

Early diagnosis, before requirements, product comparison or migration planning.

### Likely incorrect assumptions

- every workaround proves the software is inadequate;
- every staff mistake is a training problem;
- a documented feature necessarily supports the salon’s actual workflow;
- a configuration option that exists is practical for daily use;
- a smoother demo proves the recurring operating problem will disappear;
- replacing the product can compensate for a workflow that no one has defined;
- a symptom and its cause can be inferred from the same screenshot or complaint.

### What the reader fears

- retaining limiting software for too long;
- paying for a replacement that recreates the same failure;
- blaming staff for a system constraint;
- blaming software for an unclear rule;
- disrupting clients and operations without a defensible reason;
- losing time in training or configuration that cannot solve a structural limitation.

### Decision enabled

The owner can decide whether the current evidence supports a process/training/configuration intervention or whether a persistent, measurable capability gap justifies continuing toward replacement requirements.

## 3. Core thesis

### One-sentence thesis

A recurring symptom does not identify its cause: software replacement becomes rational only after the business defines the required workflow and result, supports staff in following it, tests the relevant configuration, and still observes a measurable limitation that the product cannot represent or execute.

### Supporting claims

1. The same visible workaround can arise from different combinations of task design, knowledge, incentives, configuration and system capability.
2. Direct observation of a real task, supported by interviews and current documentation, is stronger diagnosis than either complaints or feature lists alone.
3. A bounded test turns “the software is the problem” into a falsifiable statement: if clarity, practice and configuration change the outcome, replacement was not the only remedy; if the limitation persists, the case for a capability change becomes stronger.

### Important limitation

This article can define a diagnostic method, but it cannot diagnose a particular salon or product without direct task observation, owner/staff evidence, the relevant configuration and current product documentation.

### Statement the article must not imply

The article must not imply that side spreadsheets, manual steps, missed handoffs or staff resistance alone prove that software should be replaced—or that training and process correction can overcome a product that cannot represent the required work.

### Decision standard

Continue toward replacement only when all four conditions are documented:

1. the required workflow and operating outcome are explicit;
2. the people responsible can perform the agreed process consistently under realistic conditions;
3. relevant configuration and documented product behavior have been checked;
4. the limitation persists across repeated observations and produces a material consequence.

If one of these conditions is missing, the result is **UNRESOLVED**, not “keep” or “replace.”

## 4. Investigation narrative

Opening reasonable assumption: **“We keep fighting the system. Maybe the software is the problem.”**

The narrator never announces an investigation and never teaches from authority. Each section begins with a reasonable interpretation, encounters evidence that makes it incomplete and replaces it with a more useful model.

### Section 1 — The week the system seemed to be everywhere

- Reader question: How could the software not be the problem when every day contains a workaround?
- Initial model: Many visible symptoms point to one bad system.
- Purpose: Establish the owner’s frustration without dismissing it.
- Key discovery: Side spreadsheets, duplicate entry, late reports and missed handoffs describe where work breaks, not why.
- Concepts: C03 process versus software cause.
- Evidence needed: E02 observations and incident examples; E03 owner/staff accounts.
- Transition: If a symptom is not a cause, can the same symptom come from different failures?

### Section 2 — One spreadsheet, several possible explanations

- Reader question: What can a workaround actually tell me?
- Initial model: A spreadsheet beside the CRM proves the CRM lacks something essential.
- Purpose: Make ambiguity concrete through one salon task.
- Key discovery: The spreadsheet may preserve an unclear rule, compensate for incomplete training, expose overlooked configuration, bridge a workflow mismatch or replace a genuinely absent capability.
- Concepts: C03, C17.
- Evidence needed: E02 task observation; E03 interviews; E05 documentation; E17 workaround research.
- Transition: The cause cannot be inferred from the artifact, so the owner needs to see the task happen.

### Section 3 — Watching the handoff changed the question

- Reader question: What should I observe instead of collecting opinions?
- Initial model: Asking staff what is wrong is enough.
- Purpose: Introduce direct observation without sounding procedural.
- Key discovery: The useful unit is one real task from trigger to outcome, including pauses, duplicate writes, exceptions, handoffs and later corrections.
- Concepts: C03.
- Evidence needed: E02; E03 as supporting context rather than proof.
- Transition: Observation shows the current path, but diagnosis still needs a clear intended path.

### Section 4 — We could not test a rule we had never agreed

- Reader question: What if different people believe the process is supposed to work differently?
- Initial model: The software should reveal the correct process.
- Purpose: Separate unclear process from tool behavior.
- Key discovery: If the owner cannot state who does what, when, with which exception and intended result, configuration and compliance cannot be evaluated.
- Concepts: C03, C04.
- Evidence needed: E02, E03.
- Transition: Once the intended path is explicit, the owner can ask whether staff had a fair chance to use it.

### Section 5 — Knowing the feature was not the same as being able to use it

- Reader question: Is this training, adoption or a badly designed workflow?
- Initial model: If staff were shown the feature, non-use is resistance.
- Purpose: Distinguish exposure from competent performance under real conditions.
- Key discovery: The question is whether people can complete the agreed task consistently, with appropriate access, time and exception handling—not whether training occurred.
- Concepts: C03, C17.
- Evidence needed: E02, E03, E17.
- Transition: Consistent practice can still fail if the account is configured for another version of the business.

### Section 6 — The setting existed, but that did not settle it

- Reader question: Does a configuration option prove the software supports the workflow?
- Initial model: Finding a relevant setting means the problem is solved.
- Purpose: Separate documented availability from practical fit.
- Key discovery: Configuration must be checked against the real task, roles, devices and exceptions; a setting that exists but cannot produce the required outcome remains evidence of mismatch, not success.
- Concepts: C03, C04.
- Evidence needed: E05 current official documentation; E02 realistic task test.
- Transition: The owner now has enough clarity to run one controlled comparison.

### Section 7 — What changed after a controlled test

- Reader question: How can I test the diagnosis without launching a replacement project?
- Initial model: More discussion will reveal the cause.
- Purpose: Define the bounded test.
- Key discovery: Hold one task and outcome constant; clarify the rule, give role-appropriate practice, apply relevant configuration, then observe repeated real cases and record consequences.
- Concepts: C03, C04.
- Evidence needed: E02 repeated observations; E03 staff context; E05 configuration basis; E17 human-factors method.
- Transition: The pattern of what diminishes and what remains is more useful than a general satisfaction score.

### Section 8 — The problems divided instead of disappearing

- Reader question: How should I interpret a mixed result?
- Initial model: The test must prove either people or software are at fault.
- Purpose: Prevent false binary blame.
- Key discovery: Some friction may diminish while a structural limit remains. Cause classes can coexist; the decision should identify which consequence belongs to which cause.
- Concepts: C03, C17, C04.
- Evidence needed: E02 before/after task evidence; E03 explanation; E05 limitation evidence.
- Transition: The remaining limitation needs an operating consequence and acceptance rule.

### Section 9 — “Better software” was not an outcome

- Reader question: What must be true before replacement becomes rational?
- Initial model: A replacement needs more features and fewer complaints.
- Purpose: Convert diagnosis into D04.
- Key discovery: The owner needs a measurable operating outcome: for whom, in which task, under which conditions, with what acceptable result.
- Concepts: C04.
- Evidence needed: E01 local incident/baseline records where available; E02; E04 client/staff evidence where appropriate; E11 accounting/operational data where appropriate.
- Transition: An explicit outcome reveals which behavior must be standardized and which exception is legitimate.

### Section 10 — The next question was about the business, not the vendor

- Reader question: What do I decide now?
- Initial model: A credible software limitation means product comparison should begin immediately.
- Purpose: Preserve the canonical sequence.
- Key discovery: Even a real limitation does not define how the future operation should work. Before configuration or selection, the salon must determine which practices become shared rules and which remain flexible.
- Concepts: C04 leading to C05.
- Evidence needed: The assembled local diagnosis; no new vendor claim.
- Follow-up question: **Which parts of this work should become a shared standard, and which exceptions must remain flexible?**
- Canonical next article: A11.

## 5. Diagnostic model

| Cause class | What it means | What would strengthen it | What would weaken it |
| --- | --- | --- | --- |
| Unclear process | The business has no shared rule for the task or its exceptions. | Different competent people describe or perform incompatible intended paths. | A precise rule is agreed and followed, but the same limit remains. |
| Training/adoption failure | The intended supported path exists, but people cannot or do not perform it reliably in real conditions. | Observation shows knowledge, access, practice, time or incentive barriers. | Trained users following the path consistently still encounter the same capability boundary. |
| Configuration failure | The product can express the requirement, but the account is not configured to do so. | Current official docs and a controlled account test show a relevant setting changes the outcome. | Correct configuration is verified and the limitation persists. |
| Workflow mismatch | The product supports a related pattern, but the supported path imposes impractical steps or fails important exceptions. | Real-task observation shows repeated rework or bypass even when used as documented. | The configured documented path works within the accepted task/time/error condition. |
| Structural software limitation | The product cannot represent or execute a required part of the workflow. | The workflow and outcome are explicit; competent use and relevant configuration are verified; official docs or reproducible tests show the missing boundary; consequences persist. | The outcome changes after clarification, training or configuration. |

These classes are diagnostic lenses, not mutually exclusive labels. The article must preserve mixed-cause results.

## 6. Controlled test

The article should reveal this test through the narrator’s notes rather than present it as a consultant framework:

1. Select one recurring task and one observable outcome.
2. Record the current path and consequence without correcting it.
3. Agree the intended rule, roles and legitimate exception.
4. Give the people performing it a fair, role-specific practice opportunity.
5. Check and document the relevant configuration against current official documentation.
6. Repeat the task in realistic conditions more than once.
7. Record which friction diminishes, which changes form and which persists.
8. Classify the remaining cause and define the acceptance condition.

No universal observation count is asserted. Frequency depends on task volume and risk; one successful run is not enough to establish a stable result.

## 7. Evidence plan

### Canonical evidence mapping

| Evidence ID | Role in A10 | Required artifact | Current availability |
| --- | --- | --- | --- |
| E02 | Observe the real task, exceptions, rework and repeated result. | Salon-specific task observations or recordings. | Not available; the article can describe the method but cannot diagnose a salon. |
| E03 | Explain intent, knowledge, incentives and local rules. | Owner/staff interviews tied to observed tasks. | Not available; no local staff claim may be published as fact. |
| E05 | Establish documented product behavior, configuration and scope. | Current official documentation for the exact product/plan/configuration. | Not product-specific because the article names no candidate; only the evidence rule is publishable. |
| E17 | Support the multi-factor diagnosis and cautious use of workaround evidence. | Official human-factors guidance and primary empirical research. | Available with domain and transferability limitations. |

D04 can also consume local E01, E04 and E11 artifacts when a real owner applies the method. They are not added to A10’s canonical evidence list and no such local evidence is claimed in the publication candidate.

### Claim categories

- Stable conceptual claims: symptom is not a diagnosis; observation and evidence triangulation are necessary; causes can coexist.
- Claims requiring current product documentation: whether a setting, permission, workflow or capability exists for a specific product.
- Claims requiring direct observation: whether staff follow the intended path and what consequence occurs.
- Claims requiring interview evidence: why a person chose a workaround or understood a rule.
- Claims that cannot be safely published: a named-product diagnosis, prevalence claim about salon workarounds, expected training effect, or replacement verdict without account-specific evidence.

## 8. Internal-link plan

The public article should use only a few links and never expose unpublished IDs.

| Location | Destination | Anchor meaning |
| --- | --- | --- |
| After the distinction between symptom and cause | Existing A02 scheduling article | A scheduling failure can be systemic without having one universal cause. |
| In the training/adoption section | Existing A05 staff-adoption article | Workarounds and non-use can carry operational knowledge rather than simple resistance. |
| Near the decision standard, only if migration is mentioned | A17 | If replacement later becomes rational, the business must know what information must survive. |
| Final paragraph | No link until A11 is published | The copyable next question must remain visible without a dead destination. |

No direct A23 link is needed. A17 is contextual, not the next step.

## 9. AI usefulness

The article should provide:

- the exact natural question near the beginning;
- a concise answer block separating symptoms from cause;
- explicit names and definitions for the five cause classes;
- a bounded test with inputs, observations and interpretation;
- a four-condition replacement decision rule;
- explicit limitations on what the article and evidence prove;
- one copyable follow-up question leading to A11.

### Concise answer block

You cannot tell from the symptom alone. Define one required workflow and result, watch the task happen, make the rule clear, give staff a fair chance to perform it, verify the relevant configuration, and observe repeated cases. If the problem diminishes, process, practice or configuration was part of the cause. If a measurable limitation remains because the software cannot represent or execute the required work, continuing toward replacement becomes rational.

## 10. Editorial figures

### Figure 1 — The same symptom, different causes

- Purpose: reward a pause by revealing how one familiar surface artifact can grow from different roots.
- Composition: a spacious editorial field with a quiet “work surface” across the upper third. One paper-like observation—a side spreadsheet beside the CRM—sits on the surface. Fine descending threads fan from that single observation into four distinct underlying fields: unclear process, unpractised rule, unopened configuration and absent capability.
- Visual logic: relationships are implied by alignment, texture and restrained curves, not boxes and arrows. The same symptom touches every cause to avoid a false one-to-one diagnosis.
- Palette: warm paper, charcoal, muted stone and one restrained rust accent.
- Title: *The symptom sits on the surface*
- Caption: *A workaround shows where the operation is compensating. It does not identify the cause by itself.*
- Alt text: “Editorial illustration showing one side spreadsheet above four possible underlying causes: an unclear process, insufficient practice, unopened configuration and missing software capability.”
- SVG accessibility: embedded `<title>` and `<desc>`, readable at 375 px.

### Figure 2 — What changes after a controlled test

- Purpose: make the diagnostic test feel like a set of real field notes rather than an engineering procedure.
- Composition: an elegant open-notebook/workbench view. Four slim dated observations—rule clarified, staff practised, configuration checked, task repeated—occupy the centre. At the lower edge, two contrasting result fields appear: friction that faded and a limitation that remained. The eye should discover marginal notes, small before/after marks and one quiet line connecting consequence to the persistent limitation.
- Visual logic: no flowchart, no decision diamonds, no algorithm arrows. The pleasure comes from hierarchy, paper depth, generous whitespace and precise annotations.
- Palette: the same warm monochrome system with rust used only for the persistent limitation.
- Title: *After the conditions changed*
- Caption: *A controlled test does not choose a side. It shows which friction responds—and which boundary remains.*
- Alt text: “Editorial field-note illustration comparing a salon task before and after the process was clarified, staff practised it, configuration was checked and the task was repeated, with some friction fading and one software limitation remaining.”
- SVG accessibility: embedded `<title>` and `<desc>`, readable at 375 px.

## 11. Failure review

### Ways the article could become generic SEO content

- turning the cause classes into “five signs you need a new CRM”;
- presenting every spreadsheet or duplicate entry as replacement evidence;
- listing symptoms without showing one task and its consequence;
- using generic efficiency promises instead of an explicit decision standard.

### Ways it could become too technical

- describing system architecture instead of the owner’s task;
- turning configuration checks into product administration instructions;
- using root-cause terminology without showing what the owner noticed;
- presenting the controlled test as a formal experiment with invented precision.

### Ownership drift

- A09 drift: measuring whether incidents recur or calculating total urgency;
- A11 drift: deciding the full future standard and exception policy;
- A12/A05 drift: explaining organizational incentives or staff resistance in depth;
- A14/A15 drift: defining system category or calendar constraints;
- A17 drift: inventorying migration data;
- A30 drift: selecting among the complete long-term remedy portfolio.

### Unsupported claims to avoid

- “Most salon CRM problems are process problems.”
- “Training fixes adoption.”
- “A spreadsheet means the CRM has failed.”
- “Three observations are enough.”
- “If the feature exists, configuration can solve the problem.”
- Any named-vendor capability, limitation or recommendation.

### Sales language to remove

- “modern all-in-one platform”;
- “seamless workflow”;
- “future-proof your salon”;
- “unlock efficiency”;
- any implication that Visaxa resolves the diagnosed gap.

## 12. Final recommendation

- Recommended public title: **Is Your Salon CRM Actually the Problem?**
- Recommended subtitle: **Before replacing the system, separate an unclear process, uneven practice, missed configuration and a real software limit.**
- Recommended article promise: **The reader will leave with a bounded way to test one recurring operational problem and a clear standard for when replacement becomes rational.**
- Recommended next article: **A11 — Standardize Before You Configure**
- Drafting status: **READY WITH EVIDENCE LIMITATIONS**
- Exact limitations: no salon-specific E02/E03 artifacts, no product-specific E05 record and no primary research establishing prevalence or effect sizes in salons. The article may publish a cautious evidence-bounded method, but it may not publish a diagnosis or vendor verdict.
