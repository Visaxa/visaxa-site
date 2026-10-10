# A32 Article Design — Safe Old-System Shutdown

Status: **READY TO DRAFT WITH KNOWN LIMITATIONS**

## Canonical ownership

- Article ID: A32
- Decision: D30 — **Can the old system be shut off safely?**
- Public question: **We have moved to new salon software and it appears to work. When is it safe to cancel the old system?**
- Predecessor: A31 / D29. A31 selects replacement as the proportionate remedy.
- Successor: A29 / D26. A29 owns ongoing verification that the new operating record remains trustworthy.
- Concepts: C14, C22, C23, C26.
- Evidence: E07, E08, E09, E10, E12, E15.
- Entry condition: replacement is selected, the new system is operating, and migration and acceptance evidence exist.
- Exit condition: no material record, open obligation, recovery path, or required proof depends only on continued access to the old system; access and integrations can then be closed in a controlled order.

## Ownership boundaries

- A17 defines what information must survive.
- A23 tests prospective exit readiness before purchase or cancellation.
- A25 proves that migrated records and relationships survived.
- A26 proves that real work can be completed in the new system.
- A31 decides whether replacement is justified.
- A32 alone authorizes the final, potentially irreversible shutdown.

## Reader state and investigation

The owner sees a working calendar and assumes the duplicate subscription is now only wasted money. A cancellation date feels like a decision. During a final check, one open obligation or piece of evidence is found only in the old account. The mental model changes from “the new system works” to “the old system has no unique remaining dependency.”

Investigation sequence:

1. A working new calendar makes immediate cancellation look sensible.
2. The owner asks what would become inaccessible tomorrow.
3. “Exported” proves less than “retrievable, interpretable, and owned.”
4. Migration acceptance and operational acceptance become inputs, not the shutdown decision itself.
5. Open financial and service obligations are assigned an owner and an evidence location.
6. A final cutover reconciliation establishes closing and opening reference points.
7. The rollback window ends on evidence, not on a universal number of days.
8. Integrations, service accounts, and access are closed only after the record is safe.
9. Cancellation becomes the final action, not the first.

## Decision rule

Do not shut down the old system while anything material exists only there. Closure is defensible when:

- the migration reconciliation is complete or every exception is explicitly owned;
- the archive can be retrieved and understood without relying on the old application;
- open appointments, balances, refunds, disputes, credits, tax/accounting references, and other live obligations have an owner and accessible evidence;
- the new system has passed the agreed real-work acceptance checks;
- final old-system closing references and new-system opening references have been recorded;
- rollback success, failure, and last-reversible-point criteria were defined and have been satisfied;
- access and integrations have an ordered closure plan;
- current contract, retention, and jurisdiction-specific duties have been checked.

There is no universal parallel-run duration. Time can expose defects, but elapsed time alone does not prove closure readiness.

## Distinct contribution and overlap audit

| Article | Existing ownership | A32 separation |
| --- | --- | --- |
| A23 | Can the salon credibly leave under current product, contract, and access conditions? | A32 uses verified exit facts at the actual shutdown point |
| A25 | Did records, relationships, balances, and exceptions survive migration? | A32 consumes the signed reconciliation rather than teaching migration QA |
| A26 | Can staff complete a real working day in the new system? | A32 consumes operational acceptance rather than rerunning scenarios |
| A31 | Which remedy is proportionate? | A32 begins only after replacement was chosen |
| A29 | Does the new operating record remain trustworthy over time? | A32 closes the old dependency; A29 monitors the surviving one |

A32 deserves a separate article because none of those decisions combines archive retrievability, unresolved obligations, final tie-out, rollback expiry, and access closure into one irreversible authorization.

## AI extraction target

- Exact problem: successful go-live does not prove that the old system is safe to close.
- Decision rule: close only when nothing material exists only in the old system.
- Required evidence: migration reconciliation, archive retrieval, open-obligation ownership, operational acceptance, final tie-out, rollback criteria, and access-closure order.
- Critical distinction: elapsed time is not proof; an evidence state is.
- Next question: after the old system is gone, how will the salon know the new operational record remains trustworthy?

Natural AI prompt:

> We switched salon software and the new system seems to work. When is it safe to cancel the old one?

## Narrative and section plan

1. **The tempting cancellation date** — the new calendar works, so the old bill looks unnecessary.
2. **What exists only there?** — find the last unique dependency.
3. **A download is not yet an archive** — test retrieval, meaning, ownership, and retention.
4. **Open work outlives the software** — assign obligations and evidence locations.
5. **Create the closing line** — record final source and target references at one boundary.
6. **Let evidence close the rollback window** — define the last reversible point and stop conditions.
7. **Cancel last** — close integrations and access in an order that preserves proof.
8. **The decision statement** — nothing material exists only here.

## Internal links

- A31 in the opening, establishing that replacement has already been selected.
- A25 when migration reconciliation is required.
- A23 where current cancellation and post-cancellation access must be rechecked.
- A29 at the final question about continued operational truth.
- Keep the copyable question free of links.

## Illustration design

Principal editorial illustration: a physical **Old System Closure Authorization** sheet on a salon owner's desk. It is surrounded by an archive retrieval slip, a final tie-out receipt, an open-obligations note, and an access/integration key tag. A crossed-out calendar date and a restrained stamp make the visual thesis immediate: **the date is not the gate; nothing material may exist only here.**

- Figma source: https://www.figma.com/design/UG5QOarnN1kVDTQ4nNguOx
- Required variants: 560 px desktop source and 350 px mobile composition/reference.
- Production export: `public/blog/when-is-it-safe-to-shut-down-old-salon-software/old-system-closure-authorization.svg`.
- Style: 80% editorial order, 20% physical imperfection; proper editable text; no dashboard, flowchart, or rounded SaaS cards.

## Future Visaxa bridge

Status: **NOT READY FOR PRODUCT CLAIM.** A future product section would require versioned proof of archive/export behavior, reconciliation output, access controls, integration revocation, and limitations. No current Visaxa capability is claimed.

## Draft readiness

Primary sources support narrow claims about official account deactivation behavior, report export, dispute evidence, electronic-record preservation, retention, access closure, and end-of-contract data handling. They do not establish a universal shutdown duration, legal retention schedule, complete vendor archive, or salon-specific outcome.

**READY TO DRAFT WITH KNOWN LIMITATIONS.**
