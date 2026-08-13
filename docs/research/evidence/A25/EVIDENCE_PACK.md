# A25 Evidence Pack — Migration Completeness

Status: **COMPLETE FOR METHOD PUBLICATION; NO SALON-SPECIFIC MIGRATION CERTIFIED**  
Access date: **2026-08-13**  
Evidence owner: **Visaxa Research editorial maintainer**

## Evidence boundary

This pack supports a method for proving D22. It does not establish that any named vendor completed or failed a particular migration. Official documentation establishes intended import behavior and documented limitations. Only the salon’s E09–E12 artifacts can establish its outcome.

## Search/discovery record (E18)

Queries inspected on 2026-08-13 included `salon software migration import successful missing data how verify migration`, `salon CRM migration checklist client records appointments balances`, `switching salon software data migration import errors duplicates`, and product-switch variants. Results were dominated by comparison/affiliate pages and vendor import instructions. Recurring owner language included switching, importing clients, duplicates, errors, missing history and whether data would be lost. This is wording evidence, not prevalence evidence and not authority for factual product claims.

## Primary source register

| Ref | Evidence | Source | URL | Updated / published | What it supports | Confidence | Limitation | Refresh |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A25-S01 | E09, E10 | Fresha Help Center, Import your existing client list | https://www.fresha.com/help-center/knowledge-base/clients/51-import-your-existing-client-list | No date displayed | CSV field requirements; column mapping; unmatched columns ignored; invalid-row download; duplicate matching rules | HIGH for documented behavior | Client-list import only; not proof of full migration or actual salon result | 2026-09-12 |
| A25-S02 | E08, E11 | Fresha Help Center, Data connector tables | https://www.fresha.com/help-center/knowledge-base/reports/101734-data-connector-tables | No date displayed | Bookings link to appointments, locations, team members, clients and services through identifiers; business meaning spans tables | HIGH for documented model | Data Connector structure is not proof of standard export/import preservation | 2026-09-12 |
| A25-S03 | E09, E10 | Square Support, Add new customers to Customer Directory | https://squareup.com/help/us/en/article/5498-manage-your-customer-directory-online | No date displayed | Import summary separates Imported, Matched and Failed rows; error file and reimport route | HIGH | US documentation; customer directory only; does not certify other objects | 2026-09-12 |
| A25-S04 | E09, E11 | Square Support, Troubleshoot item library importing | https://squareup.com/help/us/en/article/6172-import-item-library-troubleshooting | No date displayed | Partial import may accept some entries and produce an error report; formatting can transform identifiers such as leading-zero SKUs | HIGH | Item library example, not salon client migration | 2026-09-12 |
| A25-S05 | E08, E09, E11 | Square Support, Bulk import items | https://squareup.com/help/us/en/article/5153-import-items-online | No date displayed | Backup recommendation; some relationships/configuration require manual setup; blank or transformed fields can change reporting behavior | HIGH | Product catalog context; cannot be generalized to every object or vendor | 2026-09-12 |
| A25-S06 | E10, E11 | Square Support, Edit, merge, or delete customer profiles | https://squareup.com/help/us/en/article/8401-edit-merge-or-delete-customer-profiles | No date displayed | Duplicate records require review and merge decisions | HIGH | Current Square behavior only; duplicate rules differ by system | 2026-09-12 |
| A25-S07 | E09 | Vagaro Support, Import your business from Mindbody to Vagaro | https://support.vagaro.com/hc/en-us/articles/19007464899995-Import-Your-Business-From-Mindbody-to-Vagaro | Updated 2026-04-22 | Documents self-service customer upload and an assisted import appointment | MEDIUM-HIGH | Broad migration guidance; no inspected deliverable or completeness report | 2026-09-12 |

## Claim audit

| Claim | Status | Basis | Publication wording |
| --- | --- | --- | --- |
| An import status can distinguish created, matched and failed rows | SUPPORTED for selected official examples | S01, S03 | Attribute narrowly to official instructions |
| A partial import can coexist with an error report | SUPPORTED for a selected Square workflow | S04 | Use as an illustration, not a universal vendor rule |
| Equal row counts prove migration completeness | NOT SUPPORTED | Counts cannot identify omission/duplicate cancellation | Explicitly reject as a sufficient test |
| Relationships can span multiple records and identifiers | SUPPORTED | S02 | Explain in owner language; do not imply a standard export contains them |
| Duplicate handling can change identity outcomes | SUPPORTED for selected docs | S01, S06 | State that rules must be inspected and reconciled |
| A named salon migration preserved all data | NOT YET SUPPORTED | No E09–E12 case artifacts | Do not publish |
| Financial balances survived correctly | NOT YET SUPPORTED | No source/target ledger or processor tie-out | Publish only the required method |

## Required local evidence for an actual verdict

1. E08 source schema/export manifest.
2. E09 import report, failed/invalid rows, transformations and target extract.
3. E10 audit/import logs and merge history where available.
4. E11 authoritative client, appointment, note, consent, service and future-booking records.
5. E12 deposits, gift cards, credits, refunds, disputes and processor/accounting totals.

Without these artifacts the article may teach the decision method but must not pronounce a migration complete.

## Known limitations

- No anonymized salon source/target dataset was available.
- No actual migration report or exception ledger was inspected.
- No financial reconciliation was performed.
- Official pages are selected examples, not a market-wide capability survey.
- Pages without displayed update dates require monthly refresh and publication-day recheck.

