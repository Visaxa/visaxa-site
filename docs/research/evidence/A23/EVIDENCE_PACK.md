# A23 Evidence Pack

## Record identity

- Article ID: A23
- Decision ID: D20
- Canonical working title: *Can You Leave the Software Later?*
- Research question: What evidence shows that a salon can leave or recover from software dependence while retaining usable records and a workable exit path?
- Evidence scope: export documentation, cancellation and termination, post-cancellation access, retention and deletion, rollback and recovery, migration assistance, sample exports, APIs, contracts and privacy implications
- Access date: 2026-07-17
- Source policy: official vendor documentation, official contracts/terms, official developer documentation and official government/legal guidance only
- Jurisdiction note: legal conclusions apply only within the source’s stated jurisdiction and role allocation; this record is not legal advice

This file is the canonical evidence record for A23. Source labels and claim labels are local evidence-record references, not new canonical Article, Decision, Concept or Evidence IDs. The pack does not change A23 ownership or any architecture.

## Evidence verdict

| Evidence ID | Status | Coverage conclusion |
| --- | --- | --- |
| E07 | SUPPORTED WITH LIMITS | Current public terms and official cancellation guidance from Mindbody, Square, Fresha and Vagaro establish that notice, service end, access, assistance, fees and reactivation conditions can materially differ. Public terms do not replace a customer’s executed Order Form, SOW or region-specific agreement. |
| E08 | PARTIALLY SUPPORTED | Official export and API documentation identifies formats, objects, permissions and exclusions. No real anonymized vendor export package was obtained, so delivered field coverage, relationship keys, attachments and archive usability remain unverified. |
| E09 | NOT YET SUPPORTED | Official migration-assistance and reactivation documentation exists, but no source-to-target extract, exception report, completed cutover record or tested rollback record was obtained. Product documentation is not proof that rollback or migration succeeded. |
| E15 | PARTIALLY SUPPORTED | ICO and EU sources establish scoped controller/processor end-of-contract duties and limits on the individual right to data portability. They do not establish a universal business right to every operational record or resolve non-UK/EU obligations. |

### Overall conclusion

The evidence safely supports a product-neutral A23 decision method and selected, carefully scoped examples of how exit conditions differ. It does not support declaring any vendor exit-ready, claiming that a named export is complete or usable, or claiming that a rollback route has worked. The Evidence Pack is complete as a durable record, but evidence for an evidence-bearing A23 draft remains incomplete.

## Source log

### SRC-01 — Fresha client-list export

- Source: Fresha Help Center, *Export your client list*
- URL: https://www.fresha.com/help-center/knowledge-base/clients/58-export-your-client-list
- Publication/update date: unavailable on the inspected page
- Access date: 2026-07-17
- Evidence category: export documentation; E08
- Supported claims: CLM-01, CLM-02, CLM-03, CLM-21
- Confidence: High for the documented action, formats, permission and card-data exclusion; Low for any inference about total portability
- Limitation: Documents Excel/CSV client-list export, a download permission, non-exportable client card data and a separate appointment export path. It provides no complete client-export schema, sample output, delivery manifest, relationship map or proof of importability.

### SRC-02 — Fresha report export

- Source: Fresha Help Center, *Export reports on Fresha*
- URL: https://www.fresha.com/help-center/knowledge-base/reports/191-export-reports
- Publication/update date: unavailable on the inspected page
- Access date: 2026-07-17
- Evidence category: export documentation; E08
- Supported claims: CLM-03, CLM-11, CLM-21
- Confidence: High for documented PDF/CSV/XLSX report export; Low for archive-completeness inferences
- Limitation: Report exports are separate, filtered outputs. The page does not establish inclusion of definitions, source records, audit history or a complete business archive.

### SRC-03 — Fresha Data Connector

- Source: Fresha Help Center, *Data connector overview* and *Data connector tables*
- URLs:
  - https://www.fresha.com/help-center/knowledge-base/reports/432-data-connector-overview
  - https://www.fresha.com/help-center/knowledge-base/reports/101734-data-connector-tables
- Publication/update date: unavailable on the inspected pages
- Access date: 2026-07-17
- Evidence category: official data-integration/schema documentation; E08
- Supported claims: CLM-04, CLM-11, CLM-13, CLM-21
- Confidence: High for the documented paid connector and table model; Medium for portability relevance
- Limitation: A paid reporting connector is not the standard client export, not a public sample export and not evidence that another system can reproduce all relationships after cancellation.

### SRC-04 — Fresha plan cancellation and reactivation

- Source: Fresha Help Center, *Manage your Fresha plan*
- URL: https://www.fresha.com/help-center/knowledge-base/billing-and-fees/574-manage-your-fresha-plan
- Publication/update date: unavailable on the inspected page
- Access date: 2026-07-17
- Evidence category: cancellation; post-cancellation access; reactivation; E07
- Supported claims: CLM-05, CLM-07, CLM-18
- Confidence: High for documented plan behavior; Medium where contract rights are inferred
- Limitation: The page says workspace access is removed at the end of the billing cycle and full access can be restored by reactivation. It does not state a retention period, guarantee indefinite reactivation or define an exit export package.

### SRC-05 — Fresha Partner Terms of Business

- Source: Fresha, *Partner Terms of Business*
- URL: https://terms.fresha.com/partner-terms
- Publication/update date: unavailable on the inspected page
- Access date: 2026-07-17
- Evidence category: official contract/terms; cancellation; professional services; E07
- Supported claims: CLM-06, CLM-09, CLM-15, CLM-18
- Confidence: High for the public terms; Medium for any individual account because Order Forms and regional terms may control
- Limitation: Public terms describe written notice, service-fee notice, professional services, mutually agreed migration scope and pricing at purchase. They do not provide a fixed migration deliverable, universal fee, exit SLA or sample result.

### SRC-06 — Fresha Data Protection Addendum

- Source: Fresha, *Data Protection Addendum*
- URL: https://terms.fresha.com/data-protection
- Publication/update date: unavailable on the inspected page
- Access date: 2026-07-17
- Evidence category: official data-processing terms; retention/privacy; E07, E15
- Supported claims: CLM-08, CLM-16, CLM-19
- Confidence: High within the defined partner/processor relationship; Low for universal application
- Limitation: Roles, personal-data categories and duration depend on the agreement and applicable law. The addendum does not establish export completeness, a salon-wide archive or a migration-ready format.

### SRC-07 — Vagaro cancellation and pre-cancellation export

- Source: Vagaro Support, *Cancel or Pause Your Vagaro Subscription*
- URL: https://support.vagaro.com/hc/en-us/articles/204347110-Cancel-or-Pause-Your-Vagaro-Subscription
- Publication/update date: updated 2026-06-29
- Access date: 2026-07-17
- Evidence category: cancellation; post-cancellation access; export timing; E07, E08
- Supported claims: CLM-01, CLM-05, CLM-07, CLM-10, CLM-18
- Confidence: High for the documented current workflow; Medium for contractual rights
- Limitation: Advises exporting sales data, the customer list and reports before cancellation; each report must be run/exported separately. If reports were not exported, the account must be reactivated and later deactivated again. Help guidance is not a contractual guarantee of scope or retention.

### SRC-08 — Vagaro account reactivation

- Source: Vagaro Support, *Reactivate Your Vagaro Account or Subscription*
- URL: https://support.vagaro.com/hc/en-us/articles/20859790362779-Reactivate-Your-Vagaro-Account
- Publication/update date: page displayed “Updated” with date 2025-03-11; the search index exposed a later date, so freshness should be rechecked before publication
- Access date: 2026-07-17
- Evidence category: post-cancellation access; reactivation; fees; E07
- Supported claims: CLM-07, CLM-09, CLM-18, CLM-20
- Confidence: Medium-High for current documented behavior; reduced by inconsistent displayed/indexed date metadata
- Limitation: States that reactivation restores business data and the customer list and may trigger subscription or outstanding-balance charges. It does not promise indefinite retention, a no-loss rollback, or restoration of every record type.

### SRC-09 — Vagaro restoration scope and exclusions

- Source: Vagaro Support, *Restore Deleted Information and Files*
- URL: https://support.vagaro.com/hc/en-us/articles/35900291870747-Restore-Deleted-Information-and-Files
- Publication/update date: updated 2026-01-12
- Access date: 2026-07-17
- Evidence category: recovery documentation; retention; fees; E07; contextual only for E09
- Supported claims: CLM-09, CLM-12, CLM-17, CLM-20
- Confidence: High for the documented restore/cannot-restore lists and stated fees; Low for migration rollback inference
- Limitation: Says closed-account information is not deleted and reactivation is required, but lists non-restorable record types and fees for some restores. This is deleted-data restoration documentation, not a tested migration rollback record and not a contractual retention guarantee.

### SRC-10 — Vagaro customer-list export

- Source: Vagaro Support, *Export Your Customer List*
- URL: https://support.vagaro.com/hc/en-us/articles/360006371094-Export-Your-Customer-List
- Publication/update date: updated 2026-07-01
- Access date: 2026-07-17
- Evidence category: export documentation; E08
- Supported claims: CLM-01, CLM-02, CLM-11, CLM-21
- Confidence: High for owner-only PDF/Excel export and filter behavior; Low for total-scope inference
- Limitation: No public export schema or anonymized sample was available. “All customer information” must not be expanded to mean every related appointment, form, balance, attachment or audit record.

### SRC-11 — Vagaro migration assistance and import template

- Source: Vagaro Support, *Import Your Customer List*
- URL: https://support.vagaro.com/hc/en-us/articles/204348170-Import-Contacts
- Publication/update date: updated 2026-06-29
- Access date: 2026-07-17
- Evidence category: migration assistance; import timing/fees; sample import template; contextual E09
- Supported claims: CLM-13, CLM-14, CLM-15, CLM-22
- Confidence: High for documented assistance, timing, pricing conditions and input formats; Low for source-to-target completeness
- Limitation: Describes a one-time free premium import, later fees, typical processing time and a downloadable blank import template. A blank import template is not a sample export and an import-complete email is not a reconciliation or rollback report.

### SRC-12 — Square account deactivation

- Source: Square Support Center, *Deactivate your Square account*
- URL: https://squareup.com/help/us/en/article/3819-deactivate-your-account
- Publication/update date: unavailable on the inspected page; page copyright displayed 2026
- Access date: 2026-07-17
- Evidence category: cancellation/deactivation; post-cancellation access; export timing; E07, E08
- Supported claims: CLM-05, CLM-07, CLM-10, CLM-18
- Confidence: High for documented United States account behavior
- Limitation: Tells owners to export payment history, Item Library and Customer Directory before deactivation; says the existing account cannot be reactivated and payment/account information becomes inaccessible. It does not enumerate a complete exit package or apply automatically to every region/product.

### SRC-13 — Square General Terms of Service

- Source: Block, Inc. / Square, *General Terms of Service*
- URL: https://squareup.com/us/en/legal/general/ua
- Publication/update date: last updated 2026-06-01; effective for all Square Sellers 2026-07-01
- Access date: 2026-07-17
- Evidence category: official contract/terms; termination; deletion; E07
- Supported claims: CLM-06, CLM-08, CLM-16, CLM-18
- Confidence: High for the United States public terms
- Limitation: States that service rights cease and Square may, but is not obligated to, delete account information after termination. Additional product and regional terms may control; the clause does not describe export contents or timing.

### SRC-14 — Square Data Processing Agreement

- Source: Block, Inc. / Square, *Square Data Processing Agreement*
- URL: https://squareup.com/us/en/legal/general/data-processing
- Publication/update date: last updated 2026-03-16
- Access date: 2026-07-17
- Evidence category: data-processing contract; end-of-service return/deletion; privacy; E07, E15
- Supported claims: CLM-08, CLM-16, CLM-19
- Confidence: High within its stated processor context
- Limitation: Square may act as processor or controller depending on context. The end-of-service delete-or-return clause is subject to legal retention and does not promise a migration-ready format or cover data Square processes as controller in the same way.

### SRC-15 — Square Customers API

- Source: Square Developer, *Customers API — What it does*
- URL: https://developer.squareup.com/docs/customers-api/what-it-does
- Publication/update date: unavailable on the inspected page; current documentation accessed 2026-07-17
- Access date: 2026-07-17
- Evidence category: official API/schema documentation; E08
- Supported claims: CLM-04, CLM-11, CLM-12, CLM-21
- Confidence: High for documented API objects, permissions and limitations; Low for dashboard-export or post-cancel availability inference
- Limitation: API access is permissioned; some profile data is unavailable through list/search, rich Dashboard notes lack API access, merge history complicates order lookup and relationships span other APIs. It is not a sample export or guaranteed archive route.

### SRC-16 — Mindbody cancellation and export guidance

- Source: Mindbody, *Mindbody Contracts, Cancellation Policies, and Data Exports Explained*
- URL: https://www.mindbodyonline.com/business/education/blog/mindbody-contracts-cancellation-data
- Publication/update date: last updated 2026-03-12
- Access date: 2026-07-17
- Evidence category: official vendor guidance; export; cancellation; post-cancellation access; assisted export; E07, E08
- Supported claims: CLM-02, CLM-05, CLM-07, CLM-09, CLM-10, CLM-15, CLM-18
- Confidence: Medium; official and current, but promotional and subordinate to the contract
- Limitation: Lists CSV export categories, says ordinary access ends on site deactivation and describes an added-fee export service for up to 30 days. Promotional claims about ease, preservation or reduced downtime must not be used without stronger evidence; the Terms control.

### SRC-17 — Mindbody Terms of Service

- Source: Mindbody, *Terms of Service*
- URL: https://www.mindbodyonline.com/company/legal/terms-of-service
- Publication/update date: last updated 2026-03-20
- Access date: 2026-07-17
- Evidence category: official contract/terms; cancellation; post-cancellation access; retention; assistance/fees; E07, E08
- Supported claims: CLM-06, CLM-07, CLM-08, CLM-09, CLM-10, CLM-16, CLM-18
- Confidence: High for public terms; Medium for any account because an Order Form, SOW, supplemental or regional term may change the result
- Limitation: Provides no more than a 30-day post-termination availability/request window, excludes Cardholder Data and defined Content from standard web-service availability, conditions the export service on paid amounts and an agreed SOW, permits additional retrieval fees and disclaims an obligation after the window except as law requires. No public sample export or delivery SLA was obtained.

### SRC-18 — Mindbody Public API

- Source: Mindbody Developer Portal, *Public API V6.0*, *API Endpoints* and *FAQs*
- URLs:
  - https://developers.mindbodyonline.com/ui/documentation/public-api
  - https://developers.mindbodyonline.com/Resources/Endpoints
  - https://developers.mindbodyonline.com/resources/faqs
- Publication/update date: unavailable on the inspected pages
- Access date: 2026-07-17
- Evidence category: official developer/API documentation; E08
- Supported claims: CLM-04, CLM-11, CLM-12, CLM-21
- Confidence: High for documented activation and endpoint scope; Low for exit availability or export completeness
- Limitation: Requires a developer account, approval and business activation. Endpoints cover multiple linked services, but API availability does not prove that all data can be extracted, that access survives termination or that another system can reconstruct the relationships.

### SRC-19 — ICO controller/processor contract guidance

- Source: UK Information Commissioner’s Office, *What needs to be included in the contract?*
- URL: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/contracts-and-liabilities-between-controllers-and-processors-multi/what-needs-to-be-included-in-the-contract/
- Publication/update date: unavailable on the inspected page
- Access date: 2026-07-17
- Evidence category: official government/privacy guidance; end-of-contract return/deletion; backups; E15
- Supported claims: CLM-08, CLM-16, CLM-17, CLM-19
- Confidence: High within the UK GDPR controller/processor context
- Limitation: Applies to covered personal data and specified controller/processor relationships, not all business records. It recognizes that backup deletion may be delayed with safeguards; it does not create a universal immediate export or migration right.

### SRC-20 — ICO right to data portability guidance

- Source: UK Information Commissioner’s Office, *Right to data portability*
- URL: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/individual-rights/right-to-data-portability/
- Publication/update date: unavailable on the inspected page; page notes current UK data-law changes and review context
- Access date: 2026-07-17
- Evidence category: official government/privacy guidance; portability scope; E15
- Supported claims: CLM-19, CLM-23
- Confidence: High within stated UK scope
- Limitation: The right belongs to individuals and is limited by lawful basis, automated processing and data provided by/observed from the individual. It is not a salon’s general right to all operational, derived, staff, financial or relationship data.

### SRC-21 — EU GDPR Article 28

- Source: EUR-Lex, Regulation (EU) 2016/679, Article 28
- URL: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679
- Publication/update date: adopted 2016-04-27; Official Journal publication 2016-05-04
- Access date: 2026-07-17
- Evidence category: official legislation; processor end-of-contract duties; E15
- Supported claims: CLM-08, CLM-16, CLM-19
- Confidence: High for EU GDPR text
- Limitation: Applies only where EU GDPR and the controller/processor relationship apply. Article 28’s delete-or-return duty concerns personal data processed on the controller’s behalf; it does not define a complete business export, format, importability or rollback.

## Claim audit

Status vocabulary:

- `SUPPORTED` — the bounded proposition is directly established by current primary sources.
- `PARTIALLY SUPPORTED` — part of the proposition is established, but scope, applicability or practical proof remains missing.
- `NOT YET SUPPORTED` — the required direct evidence was not obtained.

| Claim | Bounded proposition | Status | Source and URL | Source date | Evidence category | Confidence | Limitation / publication treatment |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CLM-01 | An export control establishes a particular export action, not a complete exit path. | SUPPORTED | Fresha [client export](https://www.fresha.com/help-center/knowledge-base/clients/58-export-your-client-list); Vagaro [customer export](https://support.vagaro.com/hc/en-us/articles/360006371094-Export-Your-Customer-List) | Fresha: unavailable; Vagaro: 2026-07-01 | E08 export documentation | High | Publish as a cross-document distinction, not as a claim that either export is deficient. |
| CLM-02 | Selected vendors document common-file exports, but the named output is scoped to listed categories. | SUPPORTED | Fresha [client export](https://www.fresha.com/help-center/knowledge-base/clients/58-export-your-client-list); Mindbody [export guidance](https://www.mindbodyonline.com/business/education/blog/mindbody-contracts-cancellation-data) | Fresha: unavailable; Mindbody: 2026-03-12 | E08 export documentation | Medium-High | Say only what each page lists; do not generalize to all records or all plans. |
| CLM-03 | Client, appointment and report exports can be separate actions and formats. | SUPPORTED | Fresha [client export](https://www.fresha.com/help-center/knowledge-base/clients/58-export-your-client-list); [report export](https://www.fresha.com/help-center/knowledge-base/reports/191-export-reports) | Unavailable | E08 export documentation | High | Does not establish omissions from a complete offboarding service. |
| CLM-04 | API or connector access can expose structured objects while remaining permissioned and separate from a dashboard export. | SUPPORTED | Square [Customers API](https://developer.squareup.com/docs/customers-api/what-it-does); Mindbody [Public API](https://developers.mindbodyonline.com/ui/documentation/public-api); Fresha [Data Connector](https://www.fresha.com/help-center/knowledge-base/reports/432-data-connector-overview) | Unavailable | E08 API/schema | High | Do not call API access a complete export or assume it survives cancellation. |
| CLM-05 | Cancellation, service end and account access are separate facts that must be checked. | SUPPORTED | Fresha [plan management](https://www.fresha.com/help-center/knowledge-base/billing-and-fees/574-manage-your-fresha-plan); Square [deactivation](https://squareup.com/help/us/en/article/3819-deactivate-your-account); Mindbody [guidance](https://www.mindbodyonline.com/business/education/blog/mindbody-contracts-cancellation-data); Vagaro [cancellation](https://support.vagaro.com/hc/en-us/articles/204347110-Cancel-or-Pause-Your-Vagaro-Subscription) | Mixed; see source log | E07 cancellation/access | High for selected current examples | Scope every example by vendor and document; never imply a universal timeline. |
| CLM-06 | The executed agreement and incorporated terms can control notice, renewal, service end and paid assistance. | SUPPORTED | Mindbody [Terms](https://www.mindbodyonline.com/company/legal/terms-of-service); Fresha [Partner Terms](https://terms.fresha.com/partner-terms); Square [General Terms](https://squareup.com/us/en/legal/general/ua) | Mindbody: 2026-03-20; Square: 2026-06-01; Fresha: unavailable | E07 contract/terms | High | Public terms do not replace the owner’s Order Form, SOW, region or product-specific terms. |
| CLM-07 | Selected official sources show materially different post-cancellation routes: reactivation may restore access for some products, while another account may be non-reactivatable. | SUPPORTED | Vagaro [reactivation](https://support.vagaro.com/hc/en-us/articles/20859790362779-Reactivate-Your-Vagaro-Account); Fresha [plan management](https://www.fresha.com/help-center/knowledge-base/billing-and-fees/574-manage-your-fresha-plan); Square [deactivation](https://squareup.com/help/us/en/article/3819-deactivate-your-account); Mindbody [Terms](https://www.mindbodyonline.com/company/legal/terms-of-service) | Mixed; see source log | E07 post-cancellation access | High for selected documents | This demonstrates variation, not comparative ranking or guaranteed future behavior. |
| CLM-08 | Retention, owner retrieval, return and deletion are distinct legal/contractual conditions. | SUPPORTED | Square [DPA](https://squareup.com/us/en/legal/general/data-processing); Mindbody [Terms](https://www.mindbodyonline.com/company/legal/terms-of-service); ICO [contract guidance](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/contracts-and-liabilities-between-controllers-and-processors-multi/what-needs-to-be-included-in-the-contract/); [EU GDPR](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679) | Square: 2026-03-16; Mindbody: 2026-03-20; law/guidance: see source log | E07/E15 retention and end-of-contract duties | High within source scope | Must preserve roles, legal exceptions and jurisdiction. Retention does not itself prove customer access. |
| CLM-09 | Assisted retrieval, restoration or reactivation can be conditional on payment, an SOW or service fees. | SUPPORTED | Mindbody [Terms](https://www.mindbodyonline.com/company/legal/terms-of-service); Vagaro [reactivation](https://support.vagaro.com/hc/en-us/articles/20859790362779-Reactivate-Your-Vagaro-Account); Vagaro [restore](https://support.vagaro.com/hc/en-us/articles/35900291870747-Restore-Deleted-Information-and-Files); Fresha [Partner Terms](https://terms.fresha.com/partner-terms) | Mixed; see source log | E07 assistance/fees | High for the stated conditions | Do not infer fee amounts or availability beyond the specific source. |
| CLM-10 | Export preparation must occur inside the documented access/request window. | SUPPORTED | Vagaro [cancellation](https://support.vagaro.com/hc/en-us/articles/204347110-Cancel-or-Pause-Your-Vagaro-Subscription); Square [deactivation](https://squareup.com/help/us/en/article/3819-deactivate-your-account); Mindbody [Terms](https://www.mindbodyonline.com/company/legal/terms-of-service) | Mixed; see source log | E07/E08 timing | High | Mindbody’s 30-day provision is a request/availability condition, not a guaranteed delivery SLA. |
| CLM-11 | File format alone does not establish meaning or relationship preservation. | PARTIALLY SUPPORTED | Fresha [report export](https://www.fresha.com/help-center/knowledge-base/reports/191-export-reports); Square [Customers API](https://developer.squareup.com/docs/customers-api/what-it-does); Mindbody [API endpoints](https://developers.mindbodyonline.com/Resources/Endpoints) | Unavailable | E08 format/schema | Medium-High | Sources show separate objects, APIs and reports, but no inspected export package proves which definitions and keys travel with files. Use as a cautious inference. |
| CLM-12 | Restoration documentation is not equivalent to a migration rollback record. | SUPPORTED as a boundary; practical rollback NOT YET SUPPORTED | Vagaro [restore documentation](https://support.vagaro.com/hc/en-us/articles/35900291870747-Restore-Deleted-Information-and-Files); Square [Customers API](https://developer.squareup.com/docs/customers-api/what-it-does) | Vagaro: 2026-01-12; Square: unavailable | E07 context; E09 gap | High for the distinction | No actual cutover/rollback evidence was obtained. Do not claim a rollback capability was tested. |
| CLM-13 | Official migration assistance can have defined input formats, scope, timing and fee conditions. | SUPPORTED | Vagaro [import assistance](https://support.vagaro.com/hc/en-us/articles/204348170-Import-Contacts); Fresha [Partner Terms](https://terms.fresha.com/partner-terms) | Vagaro: 2026-06-29; Fresha: unavailable | E07; contextual E09 | High for documented service conditions | Assistance does not prove completeness, relationship preservation or rollback. |
| CLM-14 | A blank import template is not a sample of the source vendor’s export. | SUPPORTED | Vagaro [import assistance/template](https://support.vagaro.com/hc/en-us/articles/204348170-Import-Contacts) | 2026-06-29 | E08/E09 boundary | High | The template proves accepted input structure only. It cannot close the missing sample-export gap. |
| CLM-15 | Migration or export assistance is not safely described as free, immediate or repeatable without current written scope. | SUPPORTED | Vagaro [import assistance](https://support.vagaro.com/hc/en-us/articles/204348170-Import-Contacts); Mindbody [Terms](https://www.mindbodyonline.com/company/legal/terms-of-service); Fresha [Partner Terms](https://terms.fresha.com/partner-terms) | Mixed; see source log | E07 assistance/fees/timing | High | Each source states different conditions; no universal claim is allowed. |
| CLM-16 | A processor’s legal/contractual deletion duty may include legal-retention exceptions and does not prove a retrievable owner archive. | SUPPORTED | ICO [contract guidance](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/contracts-and-liabilities-between-controllers-and-processors-multi/what-needs-to-be-included-in-the-contract/); Square [DPA](https://squareup.com/us/en/legal/general/data-processing); [EU GDPR](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679) | See source log | E15/E07 | High within scope | Do not equate processor retention with an owner’s login, download or migration right. |
| CLM-17 | Backup/archive deletion may be delayed, and recoverability still requires a documented access process. | PARTIALLY SUPPORTED | ICO [contract guidance](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/contracts-and-liabilities-between-controllers-and-processors-multi/what-needs-to-be-included-in-the-contract/); Vagaro [restore](https://support.vagaro.com/hc/en-us/articles/35900291870747-Restore-Deleted-Information-and-Files) | ICO: unavailable; Vagaro: 2026-01-12 | E15/E07 retention/recovery | Medium-High | UK guidance and one vendor example do not establish a universal recovery route. |
| CLM-18 | Exit conditions differ enough that a vendor-neutral article should require current, account-specific evidence rather than one universal rule. | SUPPORTED | Fresha [plan management](https://www.fresha.com/help-center/knowledge-base/billing-and-fees/574-manage-your-fresha-plan); Square [deactivation](https://squareup.com/help/us/en/article/3819-deactivate-your-account); Mindbody [Terms](https://www.mindbodyonline.com/company/legal/terms-of-service); Vagaro [cancellation](https://support.vagaro.com/hc/en-us/articles/204347110-Cancel-or-Pause-Your-Vagaro-Subscription) | Mixed; see source log | E07 cross-source comparison | High | Use to justify the evidence method, not to rank products. |
| CLM-19 | Privacy law does not create one universal salon right to all operational data. | SUPPORTED | ICO [portability guidance](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/individual-rights/right-to-data-portability/); ICO [contract guidance](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/contracts-and-liabilities-between-controllers-and-processors-multi/what-needs-to-be-included-in-the-contract/); [EU GDPR](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679) | See source log | E15 legal/privacy | High within UK/EU scope | State that rights depend on role, data type, lawful basis and jurisdiction. Do not provide legal advice. |
| CLM-20 | A documented ability to reactivate an account is not proof of a no-loss rollback after a migration. | SUPPORTED as a boundary; rollback result NOT YET SUPPORTED | Vagaro [reactivation](https://support.vagaro.com/hc/en-us/articles/20859790362779-Reactivate-Your-Vagaro-Account); Fresha [plan management](https://www.fresha.com/help-center/knowledge-base/billing-and-fees/574-manage-your-fresha-plan) | Mixed; see source log | E07 context; E09 gap | High | No dual-write, cutover, recovery-time or restored-state test was obtained. |
| CLM-21 | A real export package’s fields, relationship keys, attachments, definitions and manifest have been inspected. | NOT YET SUPPORTED | No qualifying official sample export or account-generated anonymized package obtained | N/A | E08 sample export | None | Do not state that any named export is usable or archive-complete. |
| CLM-22 | A completed migration preserved records and relationships under a documented acceptance test. | NOT YET SUPPORTED | No official source-to-target extract, exception report or completed migration report obtained | N/A | E09 migration record | None | Belongs to A25 if later collected; A23 may only identify the absence. |
| CLM-23 | Data-subject portability rights guarantee a salon’s complete vendor exit. | NOT YET SUPPORTED; proposition contradicted as universal | ICO [portability guidance](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/individual-rights/right-to-data-portability/) | Unavailable | E15 legal boundary | High | Explicitly reject the universal wording. The right is scoped to individuals and qualifying personal data. |
| CLM-24 | A defensible archive has been proven to satisfy accounting, legal and privacy duties for a named salon/jurisdiction. | NOT YET SUPPORTED | No jurisdiction-specific archive review or real package obtained | N/A | E15/E08 archive | None | The article may recommend retaining scope, date, definitions and limitations as a decision method, but must not claim legal sufficiency. |
| CLM-25 | Any named vendor passes all A23 exit-readiness gates. | NOT YET SUPPORTED | No complete candidate-specific evidence set exists | N/A | E07/E08/E09/E15 combined | None | No vendor verdict, ranking or Visaxa capability claim may be published. |

## Exit-readiness gate coverage

| A23 gate | Evidence status | What is established | What remains missing |
| --- | --- | --- | --- |
| 1. Actual export scope | PARTIAL | Official pages list selected exports, formats, permissions and exclusions. | Complete field/object map and actual delivered export package for a named account. |
| 2. Usable versus nominal export | PARTIAL | APIs and connector docs show that meaning and relationships can span objects and permissions. | Real sample export, schema/data dictionary delivered with it, attachment coverage and relationship-key inspection. |
| 3. Cancellation and termination | SUPPORTED for selected public terms | Notice, renewal, deactivation and termination conditions are documented for selected vendors. | Executed customer Order Form/SOW and all product/region-specific terms. |
| 4. Post-cancellation access | SUPPORTED for selected vendor examples | Official sources show reactivation routes, access termination and limited request windows differ. | Account-specific confirmation and proof at the relevant cancellation date. |
| 5. Retention and deletion | PARTIAL | Contracts/guidance distinguish return, deletion, retention exceptions and access. | Complete vendor retention schedule, backup cycle and owner-retrieval process for a named account. |
| 6. Timing | PARTIAL | Some notice periods, request windows and migration-assistance estimates are documented. | Guaranteed export preparation/delivery SLA and validation time for a named export. |
| 7. Assistance and fees | PARTIAL | Sources show SOWs, added fees, free-first-import conditions and restoration charges can apply. | Account-specific scope, price, responsibility matrix, escalation path and repeatability. |
| 8. Defensible archive | NOT YET SUPPORTED | The evidence supports why scope, definitions and provenance should be retained. | Actual archive package and jurisdiction-specific legal/accounting sufficiency review. |
| 9. Rollback and recovery | NOT YET SUPPORTED | Reactivation and restoration procedures exist in selected documentation. | Tested cutover/rollback record, last reversible point, dual-write handling, recovery time and restored-state validation. |
| 10. Residual lock-in | PARTIAL | Official terms/docs show account-only reports, separate services, permissions, fees and excluded data can remain dependencies. | Candidate-specific dependency map covering every material A17 requirement. |

## Sample-export and E09 gap record

### Search result

No publicly accessible, official, anonymized output package was found that could be verified as a current salon-business export from Fresha, Vagaro, Square or Mindbody. Official pages document export buttons, formats, API objects, report outputs and blank import templates, but those are not substitutes for an account-generated sample export.

### Required E08 artifact before a named-vendor usability claim

- generated from a documented test account or lawfully anonymized real account;
- export request date, account/plan/region and filters recorded;
- original files preserved without reformatting;
- manifest of files and omitted categories;
- field headers, encoding, identifiers and timestamps inspected;
- relationship keys and attachment handling inspected;
- schema/data dictionary captured if supplied;
- limitations and unknowns recorded.

### Required E09 artifact before a rollback or practical-migration claim

- source extract and target extract;
- import/migration report and exception log;
- cutover timeline and final-write boundary;
- rollback owner, trigger and last reversible point;
- evidence of whether the old account could be restored/reactivated;
- restored-state task checks;
- unresolved transformations or losses.

No such E09 artifact was obtained. Reactivation documentation, marketing statements and an import-complete email do not meet this threshold.

## Wording restrictions for a future A23 draft

### Safe, evidence-bounded formulations

- “Official documentation from selected vendors shows that cancellation, access and retrieval conditions differ; check the current terms for your account.”
- “An API, connector or CSV instruction describes a retrieval route, not proof that the resulting package is complete or importable.”
- “Some official sources require export before deactivation; others describe a limited assisted-export or reactivation route.”
- “Retention and owner access are separate questions.”
- “A reactivation procedure is not the same as a tested migration rollback.”
- “Privacy duties depend on jurisdiction, role and data type; they do not create one universal right to every business record.”

### Required qualifications

- Name the vendor and source date for every product example.
- Distinguish help-center behavior from contractual rights.
- State when Order Forms, SOWs, additional terms or regional terms may control.
- Treat promotional vendor guidance as lower confidence than the governing contract.
- State that no real sample export or rollback record was inspected.
- Do not convert a 30-day request/availability window into a 30-day delivery guarantee.
- Do not call an import template a sample export.
- Keep UK/EU legal guidance within its jurisdiction and controller/processor context.

## Unsupported claims that must remain out of the article

- any named vendor offers a complete, usable or migration-ready exit package;
- a named client export includes every required A17 record or relationship;
- API access remains available after cancellation;
- retained data remains accessible to the salon;
- assisted export is free, immediate, unlimited or repeatable;
- a vendor will reactivate an account indefinitely or restore every record;
- a backup, archive or reactivation path has been tested as migration rollback;
- a blank import template proves export compatibility;
- a successful import or assistance engagement proves migration completeness;
- a particular archive satisfies accounting, tax, privacy or litigation duties;
- privacy law gives a salon universal ownership or portability rights over all operational data;
- Visaxa or any competitor passes D20.

## Evidence refresh triggers

Recheck affected sources before drafting and again before publication if:

- vendor export, API, connector or report documentation changes;
- cancellation, renewal, access or reactivation terms change;
- an Order Form, SOW or regional term becomes available;
- export-assistance timing or fees change;
- retention/deletion or data-processing terms change;
- an official sample export, export schema or migration report becomes available;
- UK/EU data-protection guidance changes;
- the proposed article names a vendor behavior not already bounded in this pack.

## Publication readiness

- Evidence Pack document status: **COMPLETE**.
- E07 status: **SUPPORTED WITH LIMITS**.
- E08 status: **PARTIALLY SUPPORTED**.
- E09 status: **NOT YET SUPPORTED**.
- E15 status: **PARTIALLY SUPPORTED**.
- A23 drafting status: **BLOCKED** for any prose that implies a verified usable export, defensible archive, practical rollback or named-vendor pass.

### Exact remaining blockers

1. Obtain and inspect at least one qualifying current sample export with schema/manifest evidence (E08).
2. Obtain an actual cutover, exception and rollback/recovery record if the article will make practical recovery claims (E09).
3. Obtain account-specific Order Forms/SOWs before making contractual claims beyond public terms (E07).
4. Complete jurisdiction-specific legal/privacy review before claiming archive sufficiency or legal rights (E15).
5. Build a candidate-specific gate matrix before any vendor can be described as VERIFIED, CONDITIONAL or UNVERIFIED.

Until those blockers are resolved, A23 can be designed but must not be drafted as though the central exit-readiness test has been empirically completed for a named product.
