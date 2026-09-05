# A28 Article Design — Test Client Continuity After a System Change

Status: **READY WITH KNOWN LIMITATIONS**

## Decision ownership

- Article ID: A28
- Owning decision: D25 — Is client experience intact?
- Canonical question: **After a system change, can clients still book, understand, change, confirm, pay for, and access the service under realistic conditions?**
- Predecessor: A27 / D24. A27 interprets staff workarounds; A28 checks the external journey that staff-side evidence cannot prove.
- Next unresolved question: D26 / A29 — **Is operational truth stable over time?**
- Concepts: C19 scheduling integrity and failure recovery; C20 appointment/payment state separation; C24 client continuity.
- Evidence: E04 client journey/usability test; E10 audit, access, and system logs; E11 raw operational records; E14 implementation, acceptance, and failure-case test.
- Exit condition: material client journeys have an expected result, an observed client result, a matching operational record, and an explicit status. A28 does not establish long-term stability.

## Search and discovery intent

Natural questions:

- “We changed salon software. How do I check that clients can still book?”
- “Are appointment reminders actually reaching clients after migration?”
- “How do I test online booking from the client side?”
- “Can clients reschedule or cancel without calling the salon?”
- “How do I know the booking page works for older or disabled clients?”

Core AI prompt:

> We changed salon software. How can I check that clients can still book, change an appointment, receive the right confirmation, and pay without getting lost?

Search review found configuration guides and feature explanations more readily than owner-facing continuity methods. Search wording informs entry language only; it does not alter D25 ownership or establish prevalence.

User-supplied Search Console observations indicate emerging visibility around salon client data and CRM evaluation. These are E18 discovery signals, not article evidence, and no quantitative Search Console claim belongs in public prose.

## Reader and initial model

A salon owner who has accepted the configured operation and examined remaining staff workarounds. The owner assumes that a visible booking in the calendar proves the client experience survived.

The reader is afraid of silent loss: clients abandoning booking, receiving the wrong time or policy, missing a change, paying under unclear terms, or being unable to complete the journey on their device or with assistive technology.

## Thesis

**Client continuity is not proved by a correct calendar entry; it is proved when a real client can complete the intended journey, receives an understandable result, and the salon’s corresponding appointment and payment records agree with that result.**

Supporting claims:

1. Staff-side creation does not establish what a client can see or complete.
2. Booking, change, notification, payment, and accessibility are separate evidence surfaces.
3. Configuration documentation describes intended behavior; observed client action plus resulting records establish the local outcome.

Limitation: no real salon client journey, message delivery record, payment, or accessibility session was observed for A28. The article can publish the method, not a continuity verdict.

## Non-goals

- No product ranking, vendor verdict, conversion benchmark, or prevalence estimate.
- No claim that reminders reduce no-shows or that online booking increases revenue.
- No legal conclusion about accessibility or payment obligations.
- No staff-workaround diagnosis (A27) and no long-term record-drift conclusion (A29).
- No Visaxa product claim or CTA.

## Evidence classes and claim boundaries

| Class | Use |
| --- | --- |
| A — official vendor documentation | Narrow examples of documented booking, change, reminder, and record behavior, scoped by product/settings/plan/region. |
| B — independent authoritative guidance | Real-user usability and accessibility testing principles; W3C error/status requirements. |
| D — first-party test | None exists. No actual salon continuity result may be implied. |
| E — analysis | The continuity chain and evidence record are editorial syntheses, not validated instruments. |
| F — hypothetical scenario | One clearly disclosed constructed client journey. |
| G — unsupported | Zero. Remove outcome, prevalence, legal, or product claims without adequate evidence. |

## Narrative structure

| Section | Starting model | Discovery | Better model |
| --- | --- | --- | --- |
| 1. The appointment was in the calendar | Correct internal record proves continuity | The client’s route began before that record and continued after it | Test both sides of the same journey |
| 2. A staff booking was too easy | Staff can reproduce the client experience | Staff know terminology, policies, and recovery routes | Use an actual or likely client with believable intent and device |
| 3. Booking success needed a receipt | A confirmation page is enough | Client understanding, message, and salon record may disagree | Define one observable result across client and salon |
| 4. A change created a second journey | Original booking proves later changes | Reschedule/cancel can alter time, policy, message, payment, and record separately | Test change and recovery as distinct scenarios |
| 5. “Sent” was not “understood” | Enabled reminder proves communication | Trigger, destination, content, delivery record, and client interpretation differ | Verify the message and its corresponding state |
| 6. Payment had its own state | Calendar status explains money | Request, authorization/charge, refund, and appointment state may differ | Reconcile client-facing outcome with raw transaction/appointment records |
| 7. One successful user was too narrow | One pass proves accessibility | Device, zoom, keyboard, assistive technology, language, and error handling can change completion | Include relevant access conditions and real users |
| 8. The continuity record became explicit | “No complaints” means pass | Silence cannot replace defined scenarios and observable evidence | Record PASS / CONDITIONAL / FAIL / NOT TESTED by journey |
| 9. A clean launch could still drift | One round proves future continuity | Templates, policies, staff, integrations, and records can change | Ask whether operational truth remains stable over time |

## Decision aid

For each material client journey record:

1. intent and starting channel;
2. client/device/access condition;
3. expected visible price, policy, time, staff/service, and next action;
4. observed completion, error, confirmation, and message;
5. corresponding appointment/payment record and event evidence;
6. PASS / CONDITIONAL / FAIL / NOT TESTED;
7. owner, consequence, and retest where needed.

Unknown cannot become pass. The method is an editorial decision aid, not a validated scoring system.

## AI usefulness

Use an early concise answer block containing the exact problem, the three-part proof rule—client completes, client understands, records agree—and the five journey surfaces. Use stable headings, explicit contrasts, and a compact decision aid so models can extract an answer without dropping evidence limits.

The article must keep documentation, observation, and analysis distinguishable. The final unresolved question should point to A29 without a dead link.

## AI discovery hook

> What would a client experience if they booked, changed, and paid for an appointment today without anyone from the salon helping them?

No link inside the copyable question.

## Internal links

1. Early link to A27: staff-side workarounds have been classified; now test the client side.
2. Contextual link to A26: go-live acceptance provides scenario discipline, but client continuity requires its own evidence.
3. No A29 link until A29 is published.

## Visual plan

One editorial SVG: **One appointment, two records of the experience.** A client’s folded appointment card sits beside the salon’s working record. Five restrained checkpoints—find, choose, change, message, pay—appear as stamped observations rather than a flowchart. The visual conclusion is that continuity exists only when the client-facing result and salon record agree. Paper/card aesthetic, 760 × 560, large typography, safe padding, `<title>` and `<desc>`, readable at 375 px.

## Future Visaxa Bridge

### Problem boundary

A28 establishes a narrow requirement: the client-facing booking/change/payment outcome must correspond to the salon’s authoritative appointment and transaction state, with evidence a salon operator can inspect.

### Natural insertion point

After **“Booking success needed a receipt”**, where the article has established the two-sided proof requirement but has not yet discussed changes and exceptions.

### Future transition logic

Future copy could show one implemented example of keeping the client confirmation and salon appointment state connected, then explain how an operator verifies the correspondence. It must remain evidence, not a broad product promise.

### Required product evidence

- deployed production client booking route;
- product version/date, account configuration, role, region, device, and scenario;
- retained client-visible booking result and matching salon appointment record;
- tested change/cancellation path if claimed;
- retained notification event plus received client message if delivery is claimed;
- processor/transaction evidence and matching appointment state if payment is claimed;
- real accessibility test conditions for any accessibility claim;
- redacted screenshots and operator test record with expected/observed result and limitations.

### Allowed future claim

If retained evidence exists: **“In the tested Visaxa production configuration, this client booking produced the stated client confirmation and the matching appointment record under the documented scenario.”** Add only separately tested change, message, payment, or accessibility claims.

### Forbidden claim

Never claim seamless booking, guaranteed delivery, universal accessibility, zero client loss, higher conversion, better performance than competitors, or suitability for every salon without corresponding evidence.

### Future visual

A redacted paired production screenshot: the client-visible confirmation and the operator-visible appointment record for the same test booking, with identifiers removed and test scope/date retained separately.

## Publication recommendation

- Public title: **After Changing Salon Software, Test What Your Clients Actually Experience**
- Subtitle: **A correct calendar entry does not prove that clients can still book, understand changes, receive the right message, or complete payment.**
- Status: **READY WITH KNOWN LIMITATIONS**.
