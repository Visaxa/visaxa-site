# A27 Article Design — What Staff Workarounds Are Trying to Tell You

Status: **READY WITH KNOWN LIMITATIONS**

## Decision ownership

- Article ID: A27
- Owning decision: D24 — Are workarounds useful signals or unsafe bypasses?
- Canonical question: **Does the workaround preserve operating knowledge, reduce avoidable friction, compensate for an incentive or responsibility mismatch, or bypass a necessary control?**
- Predecessor: A26 / D23. A26 proves that configured operation can complete defined tasks; A27 investigates why unofficial work remains after that technical acceptance.
- Next unresolved question: D25 / A28 — **Is the client experience intact?**
- Concepts: C06 operational knowledge and change burden; C17 adoption and workflow friction; C25 operational truth monitoring and scale.
- Evidence types: E02 direct task observation; E03 staff/owner interview; E10 audit, access and system logs; E17 organizational/change research.
- Exit condition: the owner has a bounded record of what the workaround does, why the person uses it, what official record or control it affects, and what remains unknown. A27 does not choose the final remedy.

## Search and discovery intent

Natural owner language includes:

- “Why is my staff still using spreadsheets after we changed salon software?”
- “Why does reception keep notes outside the booking system?”
- “Should I stop employees using the old calendar after go-live?”
- “Is a staff workaround a training problem or a software problem?”
- “How do I know whether a workaround is dangerous?”

Core natural AI prompt:

> Our salon software works, but staff still use spreadsheets, notes, and the old system. How do I tell whether those workarounds are useful signals or unsafe bypasses?

Discovery wording informs the title and opening. It must not become a prevalence claim or keyword list.

## Reader

A salon owner or manager whose migration and configured-operation tests have passed, but who sees unofficial notes, spreadsheets, messages, duplicate entry, or continued use of the old system. The emotional trigger is frustration mixed with doubt: the owner is tempted either to blame staff or to tolerate the workaround indefinitely.

Likely incorrect assumptions:

- every workaround is resistance;
- every workaround proves the new system is inadequate;
- asking why is enough to establish the cause;
- a locally useful shortcut is safe for the business record;
- removing the visible artifact removes the dependency.

## Thesis

**Do not remove or normalize a workaround until you know which job it performs: preserving knowledge, relieving friction, compensating for a responsibility or incentive mismatch, or bypassing a control that protects the business record.**

Supporting claims:

1. Similar-looking paper and computer workarounds can serve different purposes and create different risks.
2. Observation, interview evidence, and available audit/system records answer different parts of the diagnosis and should not be substituted for one another.
3. A workaround can be useful to the person completing the task and harmful to the shared record at the same time.

Limitation: the classification is an editorial synthesis of canonical D24 and bounded research from government service design, human factors, healthcare information systems, and one industrial case. It is not a validated salon diagnostic instrument.

## Non-goals

- No vendor ranking or named-product diagnosis.
- No claim about how common workarounds are in salons.
- No promise that training, configuration, process change, or replacement will solve a case.
- No decision about whether to keep, supplement, or replace software; that belongs to D27 and later decisions.
- No client-continuity verdict; that belongs to A28.
- No Visaxa product explanation or promotion.

## Evidence and claim boundaries

| Claim class | Allowed use |
| --- | --- |
| Independent authoritative evidence (B) | Government research and human-factors guidance may support observing real work and separating task, person, and organization conditions. |
| Primary empirical research (B) | Healthcare and industrial studies may establish what occurred in their settings and support cautious transfer of the ambiguity principle. |
| Analysis / inference (E) | The four-job classification and owner record are editorial syntheses and must be described as such, not as validated scales. |
| Hypothetical scenario (F) | The salon episode must be explicitly introduced as a hypothetical composite. |
| First-party test (D) | None exists and none may be implied. |
| Unsupported (G) | Zero in publication. Narrow or remove any diagnosis, prevalence, outcome, or vendor claim without evidence. |

## Investigation narrative

| Section | Starting mental model | Discovery | Better model |
| --- | --- | --- | --- |
| 1. The system passed, but the spreadsheet stayed | Technical acceptance should end unofficial work | A passed task and a trusted daily workflow are different observations | Treat the workaround as evidence still needing interpretation |
| 2. The spreadsheet was doing more than one job | One artifact equals one cause | Columns preserve handoffs, reduce clicks, shift responsibility, or evade a rule | Split the artifact into tasks and consequences |
| 3. Watching changed the question | Ask staff why and accept the answer | Interviews reveal purpose; observation reveals timing, tools, handoffs, and rework | Record behavior before interpretation |
| 4. Some notes carried knowledge | Anything outside the system is waste | A note may preserve an exception, promise, or tacit rule | Capture the knowledge dependency before removing the note |
| 5. Some shortcuts bought time | Faster means better | Local time savings may create duplicate entry, delay, or stale shared records | Compare benefit to the person with consequence to the operation |
| 6. Some workarounds redistributed the burden | “Resistance” belongs to the employee | Role, access, responsibility, and incentives can place the cost on one person | Diagnose who bears effort and who depends on the result |
| 7. One line crossed a control | Every useful workaround deserves tolerance | Shared credentials, altered states, unrecorded client data, or bypassed approval can remove accountability | Contain a control bypass while preserving evidence about why it appeared |
| 8. The record became small and specific | Decide keep/remove immediately | Function, trigger, benefit, affected record/control, and evidence can be recorded without selecting a remedy | Finish A27 with a classified, bounded unknown |
| 9. The next blind spot was outside the staff workflow | Staff completion proves the operation is intact | Clients may experience a different booking, message, payment, or correction path | Ask whether client experience remained intact |

## Internal links

1. Early link to A26: meaning **the system passed realistic go-live tests, yet unofficial work remains**.
2. Contextual link to A10: meaning **a visible workaround alone does not establish whether process, training, configuration, or software is the cause**.
3. Do not link A28 until it is published. End on its unresolved question.

## AI discovery hook

> Which part of this workaround keeps the salon running—and which part quietly makes the official record less trustworthy?

No hyperlink inside the phrase. The article should also include an early concise answer block that states the decision rule and preserves the four categories.

## Visual plan

One editorial SVG: **One spreadsheet, four possible jobs.** A central, recognizably imperfect working sheet has four large margin notes: carries knowledge, buys time, shifts burden, bypasses control. The immediate visual conclusion is that the same artifact can help local work while weakening the shared record. Compact 760 × 600 composition, readable at 375 px, restrained monochrome and terracotta accent, embedded title and description. No arrows, technical flowchart, fake UI, vendor screen, or Visaxa screenshot.

## Legal and evidence risks

- Do not present the hypothetical salon as a customer or observed case.
- Do not translate healthcare safety outcomes into salon outcomes.
- Do not call a personal note illegal or insecure without its content, access, jurisdiction, and handling evidence.
- Do not state that logs prove intent; they may establish recorded events within their coverage.
- Do not expose employee identities or client data in a real investigation record.
- Do not imply that missing documentation proves a capability absent.

## Future Visaxa Bridge

### Problem boundary

A27 establishes the need to preserve legitimate handoff and exception knowledge inside the shared operating context while maintaining role boundaries and an inspectable record. A future Visaxa bridge could address only that narrow problem: connecting a real staff handoff or exception to the relevant client or appointment without requiring a parallel private note or spreadsheet.

### Natural insertion point

After the public section **“Some notes carried knowledge”**, before the investigation turns to local time savings. The article has established the requirement but has not yet judged a product implementation.

### Future transition logic

The public article establishes: essential context must survive removal of the private artifact and remain available to the right role at the right operational moment.

A future bridge could then explain, without promotion, that one implementation is to persist the handoff in the client or appointment context, apply role-specific access, and retain an inspectable event trail rather than asking staff to reconcile a separate file.

### Required product evidence

Before publication retain:

- deployed production workflow that creates and retrieves the specific handoff or exception;
- product version, environment, date, account configuration, salon role, device, and scenario;
- redacted production screenshots showing creation and later retrieval in the correct client or appointment context;
- verified persistence after sign-out/sign-in and across the intended staff handoff;
- tested allowed-role visibility and tested restricted-role denial;
- retained audit/event evidence showing the relevant create or update action if such a claim is made;
- an operator test recording expected result, observed result, and limitations;
- confirmation that no real client data is exposed in publication evidence.

### Allowed future claim

If all evidence exists: **“In the tested Visaxa production configuration, the specified staff role could save and later retrieve this handoff in the associated client or appointment context, while the tested restricted role could not access the protected action.”** The claim must state test date and scope.

### Forbidden claim

Do not claim that Visaxa eliminates workarounds, guarantees adoption or data accuracy, is seamless or fully automated, works for every salon, is better than all competitors, or prevents every unauthorized action. Do not make named-competitor comparisons without equivalent retained evidence.

### Future visual

A redacted two-state production screenshot: first, the authorized staff member records the handoff in the relevant client or appointment context; second, the receiving role retrieves it during the next task. If claiming a permission boundary, add a separately retained restricted-role result. No screenshot is created now.

## Publication recommendation

- Public title: **Why Staff Still Use Spreadsheets After Salon Software Goes Live**
- Subtitle: **A workaround can preserve essential knowledge, expose daily friction, shift responsibility, or quietly bypass a control. The useful question is which job it is doing.**
- Meta promise: a salon-owner method for interpreting notes, spreadsheets, and old-system use without blaming staff or normalizing unsafe drift.
- Status: **READY WITH KNOWN LIMITATIONS**.
