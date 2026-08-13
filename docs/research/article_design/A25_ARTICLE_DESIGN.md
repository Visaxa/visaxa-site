# A25 Article Design — A Successful Import Is Not a Successful Migration

Status: **PUBLICATION DESIGN**  
Canonical owner: **A25 / D22**  
Prepared: **2026-08-13**

## Decision ownership

- Exact question: **How can a salon owner prove that the records and relationships the business needs actually survived a software migration?**
- Entry: A24 has produced an evidence-bounded candidate and a migration has reached an import result.
- Exit: source records, target records, exceptions, relationships and financial states have been reconciled to declared acceptance thresholds.
- Next: D23 / A26 asks whether the configured operation is ready for sign-off.
- Excluded: choosing a vendor (A24), defining the exit inventory (A17), proving future exit readiness (A23), testing staff workflows and authorizing go-live (A26).

## Reader state

The owner sees “Import complete” and expects the risky part to be over. The fear appears only when a familiar client is duplicated, a future appointment is absent, a note is detached, or a balance no longer explains itself. The reader should finish able to demand evidence of continuity rather than accepting a technical success message.

Natural AI prompt: **“My salon software says the import was successful. How do I check that no client history, appointments, notes, consent, or balances were lost?”**

## Thesis

**An import succeeds when a destination accepts data; a migration succeeds only when the business can reconcile the expected records, identities, relationships, meanings and money, with every exception explained.**

Supporting claims:

1. Imported, matched and failed rows are different outcomes and must remain visible.
2. Equal totals do not prove that the correct records or relationships survived.
3. Financial and operational continuity require reconciliation to authoritative source records, not confidence in a completion message.

Limitation: public documentation defines possible import behavior, not the result of a salon’s actual migration. A25 cannot certify a migration without source/target extracts, an import report, raw operational records and accounting evidence.

## Investigation sequence

1. **The reassuring message.** Opening assumption: “Import complete means we are done.” Discover that the message describes a process state.
2. **One missing regular.** A spot check finds a duplicate or missing context. Better model: inspect population and exceptions.
3. **The totals agree—but the people do not.** Counts can conceal omissions plus duplicates. Better model: identity reconciliation.
4. **Rows survived; relationships did not.** Appointments, notes, staff, services and payments must still point to the right entities.
5. **A familiar value changed meaning.** Dates, statuses, consent and balances require definition-level checks.
6. **Money forces a harder test.** Deposits, credits, gift cards, refunds and disputes reconcile to authoritative records.
7. **The exception ledger becomes the result.** Every difference is resolved, accepted with an owner and deadline, or blocks completion.
8. **Migration complete is narrower than go-live ready.** End at A26’s operational acceptance question without a link.

## Decision rule

Do not mark D22 complete merely because an import job reports success. Require:

- a frozen, dated source baseline;
- target extracts taken after import;
- object counts plus stable-identifier matching where available;
- duplicate and merge review;
- relationship checks across clients, appointments, staff, services, notes and money;
- definition and state mapping;
- financial tie-outs;
- an exception ledger with disposition and owner.

Result vocabulary: **VERIFIED / CONDITIONAL / NOT VERIFIED**.

## Evidence plan

- E08: source schema, export and sample structure.
- E09: actual import result, invalid-row file and source/target extracts.
- E10: audit/import logs and provenance where available.
- E11: authoritative operational records, including future appointments.
- E12: accounting, processor and ledger records for monetary states.

Official product documentation may illustrate import mechanisms. It cannot establish the salon’s migration outcome.

## Search/discovery intent

Observed question forms cluster around switching salon software, importing client lists, missing data after CRM migration, duplicates, failed rows and verifying whether a migration worked. Product-vs-product queries belong upstream to A24 unless the owner is specifically asking what data survived an actual move.

## AI discovery loop

Copyable question:

> My salon software says the import succeeded. What source-to-target checks would prove that client identities, future appointments, notes, consent, deposits, credits, gift cards and payment history survived correctly?

The question contains no link. Contextual links appear earlier to A24 and A17.

## Internal links

- A24 near the opening: the candidate passed a paper comparison, but documentation did not prove migration outcome.
- A17 when defining the expected population: use the exit inventory as the list of records and relationships that must be reconciled.
- No A26 link until that article exists.

## Visuals

1. **The same count can hide a different client list.** Two compact ledger sheets both total 1,000; one contains a missing record and a duplicate. The visual disproves count-only acceptance.
2. **Rows arrive before the business is reconnected.** A client folder on the left and a reconstructed target folder on the right; five relationship tabs must line up. Minimal text, landscape composition.

## Failure review

- Do not turn the reconciliation layers into a generic migration checklist.
- Do not imply that Fresha, Square, Vagaro or Mindbody lost data.
- Do not treat an undocumented capability as absent.
- Do not drift into A26 role-task, workflow or go-live acceptance.
- Do not call a sample, spot check or row count complete proof.
- Do not mention Visaxa product capabilities.

## Recommendation

- Public title: **Your Salon Data Imported Successfully. How Do You Know Nothing Was Lost?**
- Subtitle: **A completion message proves the file ran—not that client history, appointments, relationships, and balances survived correctly.**
- Status: **READY WITH KNOWN LIMITATIONS**.

