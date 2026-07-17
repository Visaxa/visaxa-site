# A17 Evidence Pack

## Record identity

- Article ID: A17
- Decision ID: D14
- Article working title: *Build the Exit Inventory Before You Buy*
- Public title: *Before You Switch Salon Software, Find Out What Happens to Your Client Data*
- Research scope: evidence for the distinction between a client-list export and usable data portability
- Access date: 2026-07-17
- Jurisdiction note: legal and privacy sources apply only within their stated scope; this record is not legal advice

This file is the canonical evidence record for A17. It stores the source log, claim audit, wording boundaries, unresolved evidence gaps, and publication conclusion. It does not change A17 ownership or any canonical Decision, Article, Concept, or Evidence ID.

## Evidence status

| Evidence ID | Status | Coverage conclusion |
| --- | --- | --- |
| E05 | SUPPORTED | Current official product documentation establishes that client profiles, appointments, payments, notes, balances, reports, and export permissions can be separate surfaces. |
| E07 | PARTIALLY SUPPORTED | Current Square terms establish that contract and termination terms can affect access, return, retention, and deletion. Equivalent contract review has not been completed across all vendors. |
| E08 | NOT YET SUPPORTED | Official API and table documentation describe relationships, but no real anonymized CSV/XLSX export or source-to-target import report was obtained. |
| E15 | PARTIALLY SUPPORTED | Official regulatory and contract sources establish that contact details, consent, opt-out state, and lawful transfer are distinct. The applicable rule remains jurisdiction- and channel-specific. |

### Coverage conclusion

A17 can safely publish a decision method: a client-list export is not proof of data portability, and an owner should inventory objects, meanings, and relationships before switching. The evidence does not support claims that a named vendor provides complete portability, that a standard client export includes related operational records, or that relationships will survive migration.

## Source log

### SRC-01

- URL: https://www.fresha.com/help-center/knowledge-base/clients/58-export-your-client-list
- Publisher: Fresha
- Document/page title: Export your client list
- Publication/update date: unavailable on the inspected page
- Access date: 2026-07-17
- Evidence ID: E05
- Supported claims: P02, P03, P10, P14, P18
- Confidence: High
- Limitations: Documents Excel/CSV client-list export, a separate permission, non-exportable card data, and separate appointment export. It does not publish the complete client-file schema or prove importability or relationship preservation.
- Jurisdiction: not jurisdiction-specific; product availability and behavior may vary

### SRC-02

- URL: https://www.fresha.com/help-center/knowledge-base/clients/57-merge-client-profiles
- Publisher: Fresha
- Document/page title: Merge client profiles
- Publication/update date: unavailable on the inspected page
- Access date: 2026-07-17
- Evidence ID: E05
- Supported claims: P04, P05
- Confidence: High
- Limitations: Establishes duplicate detection and merge behavior, but does not establish that merge history or previous identifiers appear in an export.
- Jurisdiction: not jurisdiction-specific

### SRC-03

- URL: https://www.fresha.com/help-center/knowledge-base/reports/101734-data-connector-tables
- Publisher: Fresha
- Document/page title: Data connector tables
- Publication/update date: unavailable on the inspected page
- Access date: 2026-07-17
- Evidence ID: E05; partial schema support for E08
- Supported claims: P03, P07, P08, P11, P13, P16
- Confidence: High for the documented Data Connector structure; Medium for portability inferences
- Limitations: Data Connector tables are not a sample of the standard client export. Table availability does not prove target importability.
- Jurisdiction: not jurisdiction-specific; product/plan scope may vary

### SRC-04

- URL: https://www.fresha.com/help-center/knowledge-base/reports/191-export-reports
- Publisher: Fresha
- Document/page title: Export reports
- Publication/update date: unavailable on the inspected page
- Access date: 2026-07-17
- Evidence ID: E05
- Supported claims: P10, P17, P18
- Confidence: High
- Limitations: Establishes individual PDF/CSV/XLSX report export, customization, and permissions. It does not establish that definitions, source records, or audit history are included.
- Jurisdiction: not jurisdiction-specific

### SRC-05

- URL: https://support.vagaro.com/hc/en-us/articles/360006371094-Export-Your-Customer-List
- Publisher: Vagaro Support
- Document/page title: Export Your Customer List
- Publication/update date: updated 2026-07-01
- Access date: 2026-07-17
- Evidence ID: E05
- Supported claims: P02, P03, P09, P10, P18
- Confidence: High
- Limitations: Establishes owner-only PDF/Excel export and filter effects. The phrase "all customer information" is not accompanied by an export schema and must not be read as proof that every profile tab or relationship is included.
- Jurisdiction: page inspected in the US help center

### SRC-06

- URL: https://support.vagaro.com/hc/en-us/articles/115004392674-Customer-Profile-Overview
- Publisher: Vagaro Support
- Document/page title: Customer Profile Overview
- Publication/update date: updated 2026-07-01
- Access date: 2026-07-17
- Evidence ID: E05
- Supported claims: P03, P06, P07, P09, P11, P12
- Confidence: High
- Limitations: Establishes that appointments, notes, forms, files, gift cards, packages, memberships, invoices, and balances exist in separate profile areas. It does not establish their inclusion in the customer-list export.
- Jurisdiction: page inspected in the US help center

### SRC-07

- URL: https://support.vagaro.com/hc/en-us/articles/360021380053-View-a-Customer-s-Appointment-History
- Publisher: Vagaro Support
- Document/page title: View a Customer's Appointment History
- Publication/update date: updated 2026-07-01
- Access date: 2026-07-17
- Evidence ID: E05
- Supported claims: P07, P08
- Confidence: High
- Limitations: Establishes appointment status, time, service, provider, price, location, and a separate history export. It does not establish future/recurring export coverage or relationship preservation.
- Jurisdiction: page inspected in the US help center

### SRC-08

- URL: https://support.vagaro.com/hc/en-us/articles/360007906613-Manage-Customer-Notes
- Publisher: Vagaro Support
- Document/page title: Manage Customer Notes
- Publication/update date: updated 2026-07-01
- Access date: 2026-07-17
- Evidence ID: E05
- Supported claims: P06
- Confidence: High
- Limitations: Establishes distinct customer and appointment-note contexts. It does not establish export of note text, type, date, author, or appointment relationship.
- Jurisdiction: page inspected in the US help center

### SRC-09

- URL: https://support.vagaro.com/hc/en-us/articles/115004772554-Customer-List-Report
- Publisher: Vagaro Support
- Document/page title: Run the Customer List Report
- Publication/update date: updated 2026-07-16
- Access date: 2026-07-17
- Evidence ID: E05
- Supported claims: P03, P05, P09, P12, P17
- Confidence: High
- Limitations: Establishes selected fields, aggregates, filters, and date-range effects. A report view is not proof that underlying records and relationships are exported.
- Jurisdiction: page inspected in the US help center

### SRC-10

- URL: https://support.vagaro.com/hc/en-us/articles/204347110-Cancel-or-Pause-Your-Vagaro-Subscription
- Publisher: Vagaro Support
- Document/page title: Cancel or Pause Your Vagaro Subscription
- Publication/update date: updated 2026-06-29
- Access date: 2026-07-17
- Evidence ID: E05; contextual support for E07
- Supported claims: P18, P20, P21
- Confidence: High
- Limitations: Recommends exporting sales data, the customer list, and individual reports before cancellation. Help-center guidance is not a contract and does not establish a right to every data category or a migration-ready format.
- Jurisdiction: page inspected in the US help center

### SRC-11

- URL: https://developer.squareup.com/docs/customers-api/what-it-does
- Publisher: Square Developer
- Document/page title: Customers API — What it does
- Publication/update date: unavailable on the inspected page; documentation displayed API version 2026-05-20
- Access date: 2026-07-17
- Evidence ID: E05; schema support for E08
- Supported claims: P03, P04, P05, P13, P15, P16
- Confidence: High for API behavior; Medium for portability inferences
- Limitations: Establishes linked customer identifiers, duplicate/merge complications, and API-scope exclusions. API access is not the same as a dashboard export and is not a sample export.
- Jurisdiction: API documentation; availability and legal use depend on account and region

### SRC-12

- URL: https://developer.squareup.com/reference/square/objects/Booking
- Publisher: Square Developer
- Document/page title: Booking object
- Publication/update date: unavailable on the inspected page; documentation displayed API version 2026-05-20
- Access date: 2026-07-17
- Evidence ID: E05; schema support for E08
- Supported claims: P07, P08, P11, P13
- Confidence: High
- Limitations: Describes a booking as a linked object. It does not prove inclusion in a user export or acceptance by another system.
- Jurisdiction: API documentation; availability and legal use depend on account and region

### SRC-13

- URL: https://developer.squareup.com/docs/customers-api/use-the-api/integrate-with-other-services
- Publisher: Square Developer
- Document/page title: Integrate Customer Profiles with Other Services
- Publication/update date: unavailable on the inspected page; documentation displayed API version 2026-05-20
- Access date: 2026-07-17
- Evidence ID: E05; schema support for E08
- Supported claims: P07, P08, P11, P13
- Confidence: High
- Limitations: Establishes relationships through customer identifiers across several APIs. It does not prove that those relationships appear in a standard export or survive migration.
- Jurisdiction: API documentation; availability and legal use depend on account and region

### SRC-14

- URL: https://squareup.com/help/us/en/article/8362-print-export-or-email-your-reports
- Publisher: Square Support Center
- Document/page title: Print, export, or email your reports
- Publication/update date: unavailable on the inspected page
- Access date: 2026-07-17
- Evidence ID: E05
- Supported claims: P17, P18
- Confidence: High
- Limitations: Establishes that export depends on report, filters, and selected columns and that some reports are not exportable. It does not establish transfer of definitions, formulas, source rows, or audit history.
- Jurisdiction: United States help center

### SRC-15

- URL: https://squareup.com/us/en/legal/general/data-processing
- Publisher: Block, Inc. / Square
- Document/page title: Square Data Processing Agreement
- Publication/update date: last updated 2026-03-16
- Access date: 2026-07-17
- Evidence ID: E07, E15
- Supported claims: P09, P20, P21, P22
- Confidence: High
- Limitations: Roles and obligations depend on context, region, applicable law, and whether Square acts as processor or controller. Return language does not promise a migration-ready format.
- Jurisdiction: as specified in the DPA, with separate EEA/UK terms where applicable

### SRC-16

- URL: https://squareup.com/us/en/legal/general/ua
- Publisher: Block, Inc. / Square
- Document/page title: General Terms of Service
- Publication/update date: last updated 2026-06-01; effective 2026-07-01
- Access date: 2026-07-17
- Evidence ID: E07
- Supported claims: P20, P21
- Confidence: High
- Limitations: Must be read with applicable additional and regional terms. It establishes possible deletion and loss of access after termination, not the content or format of an export.
- Jurisdiction: United States version inspected

### SRC-17

- URL: https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business
- Publisher: U.S. Federal Trade Commission
- Document/page title: CAN-SPAM Act: A Compliance Guide for Business
- Publication/update date: unavailable on the inspected page
- Access date: 2026-07-17
- Evidence ID: E15
- Supported claims: P09, P22
- Confidence: High within scope
- Limitations: Applies to commercial email in the United States; it does not establish a universal rule for SMS, all communications, or every jurisdiction.
- Jurisdiction: United States

### SRC-18

- URL: https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/electronic-and-telephone-marketing/using-marketing-lists/
- Publisher: UK Information Commissioner's Office
- Document/page title: Using marketing lists
- Publication/update date: unavailable on the inspected page
- Access date: 2026-07-17
- Evidence ID: E15
- Supported claims: P09, P22
- Confidence: High within scope
- Limitations: Applies within the UK PECR/UK GDPR context and cannot be presented as universal legal guidance.
- Jurisdiction: United Kingdom

## Claim matrix

| Claim | Public proposition | Status | Evidence | Publication treatment |
| --- | --- | --- | --- | --- |
| P01 | A client-list export can look like a complete exit plan. | SUPPORTED | SRC-01, SRC-05, SRC-06 | Publish as the narrator's initial assumption, not a product claim. |
| P02 | Some vendors document client-list export in spreadsheet formats. | SUPPORTED | SRC-01, SRC-05 | Limit examples to the documented vendor and format. |
| P03 | Client profiles connect to separate appointment, payment, note, balance, and report records. | SUPPORTED | SRC-01, SRC-03, SRC-06, SRC-11 | Publish as an evidence-bounded observation from systems examined. |
| P04 | Customer identity includes duplicate and merge rules. | SUPPORTED | SRC-02, SRC-11 | Publish. |
| P05 | Previous identifiers or merge history may be needed to understand an identity record. | PARTIALLY SUPPORTED | SRC-02, SRC-11 | Ask whether they are available; do not say they are exportable. |
| P06 | Notes, forms, waivers, attachments, and photos need their context. | PARTIALLY SUPPORTED | SRC-06, SRC-08 | Publish as an inventory question; state that export coverage is unverified. |
| P07 | An appointment can contain status, service, provider, customer, location, price, and notes. | SUPPORTED | SRC-03, SRC-07, SRC-12 | Publish with official-source examples. |
| P08 | Past, future, and recurring appointments require separate verification. | PARTIALLY SUPPORTED | SRC-01, SRC-07, SRC-12 | Publish as a verification rule; do not claim recurring-series export. |
| P09 | Contact details and communication permission are distinct. | SUPPORTED | SRC-11, SRC-15, SRC-17, SRC-18 | Publish with jurisdiction limitation. |
| P10 | Export ability can depend on role or permission. | SUPPORTED | SRC-01, SRC-04, SRC-05 | Publish. |
| P11 | Packages, memberships, gift cards, credits, and balances can be separate objects or records. | SUPPORTED | SRC-03, SRC-06, SRC-13 | Publish without claiming portability. |
| P12 | Those obligations may not be included in a client-list export. | PARTIALLY SUPPORTED | SRC-05, SRC-06 | Use "do not assume" rather than a universal exclusion. |
| P13 | Deposits, charges, refunds, disputes, and credits should be inventoried as distinct financial states. | SUPPORTED | SRC-03, SRC-07, SRC-13 | Publish as an inventory rule. |
| P14 | Financial-state relationships survive export. | NOT YET SUPPORTED | none | Leave unpublished. |
| P15 | Staff names alone do not establish assignments, roles, and permissions. | PARTIALLY SUPPORTED | SRC-05, SRC-07, SRC-12 | Publish as a question; do not claim these relationships export. |
| P16 | Audit history belongs in the exit inventory. | PARTIALLY SUPPORTED | SRC-11, SRC-13, SRC-15 | Publish as an item to ask for; disclose that availability is unverified. |
| P17 | Report values depend on definitions, filters, dates, and selected fields. | SUPPORTED | SRC-04, SRC-09, SRC-14 | Publish. |
| P18 | Data can exist in a system without being available through a given export path. | SUPPORTED | SRC-01, SRC-06, SRC-11, SRC-14 | Publish. |
| P19 | An export button does not by itself prove that a file is interpretable. | PARTIALLY SUPPORTED | SRC-01, SRC-04, SRC-05 | Publish as a decision rule; E08 is needed for a vendor conclusion. |
| P20 | A readable export does not prove target importability. | PARTIALLY SUPPORTED | SRC-03, SRC-11, SRC-12 | Publish as a decision rule, not a measured vendor result. |
| P21 | Importability does not prove relationship preservation. | PARTIALLY SUPPORTED | SRC-02, SRC-03, SRC-11, SRC-12 | Publish as a decision rule, not a migration result. |
| P22 | Contract, termination, retention, consent, and opt-out state require separate review. | SUPPORTED | SRC-10, SRC-15, SRC-16, SRC-17, SRC-18 | Publish with scope and jurisdiction limits. |
| P23 | A readable file is only one stage of portability. | SUPPORTED | Combined evidence above | Publish as the article's synthesis. |
| P24 | Official documentation does not prove the contents of an actual export file. | SUPPORTED | SRC-01, SRC-04, SRC-05 | Publish as a source limitation. |
| P25 | A real sample export is required to test field and relationship coverage. | SUPPORTED | E08 method; contrast SRC-03 | Publish as the next evidence step. |
| P26 | The exit inventory needs eleven operational domains. | SUPPORTED | SRC-02, SRC-03, SRC-06–SRC-14 | Publish all eleven categories as an inventory, not as promised export fields. |
| P27 | A named vendor preserves all relationships after migration. | NOT YET SUPPORTED | none | Leave unpublished. |
| P28 | A named vendor exports waivers, photos, audit history, and merge history. | NOT YET SUPPORTED | none | Leave unpublished. |

## Wording restrictions

- Say "the vendor documents a client-list export," not "your client data can be exported."
- Say "in the systems examined," not "all salon systems work this way."
- Ask whether previous identifiers and merge history are available; do not say they are included.
- Say to verify what consent and opt-out records may lawfully be retained or transferred; do not say consent automatically transfers.
- Ask whether notes, forms, files, photos, recurring appointments, and their context can be retrieved; do not say they can.
- Treat balances and financial states as reconciliation items until export and import evidence proves otherwise.
- Describe report exports as selected views unless source rows and definitions are proven.
- Describe contractual return/deletion terms only within the applicable agreement and jurisdiction; do not imply a guaranteed migration-ready format.
- Do not claim that Visaxa or a competitor provides complete portability.

## Unsupported claims

The following claims are deliberately excluded from public prose until stronger evidence exists:

- a standard client-list export includes notes, forms, waivers, attachments, or photos;
- merge history or previous client identifiers are exported;
- future and recurring appointments retain their series relationships;
- staff assignments, roles, and permissions are portable;
- package, membership, gift-card, credit, or other balances import without reconciliation;
- deposits, refunds, disputes, and credits remain linked to their original transactions;
- audit history is available in export;
- report definitions, formulas, and accounting mappings accompany a report export;
- any named vendor provides a complete export or an easy migration;
- a contractual return right guarantees a useful migration format.

## E08 gaps

E08 remains open until at least one vendor provides or permits inspection of:

1. an anonymized client-list CSV/XLSX export;
2. an appointment export covering history, future bookings, and recurring records;
3. exports for payments, refunds, deposits, gift cards, packages, and memberships;
4. a field-level data dictionary with types, null semantics, time zones, dates, and currency representation;
5. stable identifiers for clients, appointments, staff, services, payments, refunds, and balances;
6. examples of one-to-many and many-to-one relationships;
7. attachment metadata, timestamps, authorship, and relationship keys where applicable;
8. a source-to-target import report showing rejected, transformed, merged, and skipped records;
9. a reconciliation report for balances and financial states.

## Internal relationship record

The public article must not link to unpublished destinations. Preserve these canonical relationships in documentation only until their public routes exist:

- upstream: A31, where appropriate;
- primary downstream: A23;
- contextual: A16 and A25;
- A23 transition question: "What would count as proof that an export is actually usable before I cancel the old system?"

## Publication conclusion

The evidence supports publication of A17 as an investigation and decision framework. It does not support a vendor portability comparison or a claim that a particular migration will preserve data and relationships. Publication status: **READY WITH KNOWN LIMITATIONS**, provided the public article keeps the wording restrictions above and presents the open E08 gap plainly.
