> Architecture status: supporting evidence (E16). Canonical IDs and rules are defined in [Visaxa Decision Framework SOT](../../master/00_VISAXA_DECISION_FRAMEWORK_SOT.md).

# Market listening: raw findings

Research run: 2026-07-13  
Scope: read-only public research; no accounts, posts, reactions, messages, or external publication.

## Method and boundaries

- Unit of analysis: one independently authored forum thread, question, or review. Multiple replies inside one thread were not counted as separate findings.
- Sample: 75 findings from 8 source domains. Reddit is the largest platform at 12/75 (16%), below the 20% cap.
- Business categories represented: hair salons, esthetics/skin clinics, med spas/spas, barbershops, tattoo/nail businesses, fitness/yoga/wellness, home services, and generic CRM/sales operations.
- Review pages contain multiple independently identified reviews. Each included review is identified by reviewer and date; the preserved URL is the public review page because Trustpilot and Capterra do not expose stable per-review URLs in search results.
- Vendor documentation and vendor replies were used only to clarify a reported constraint, not as proof that the complaint is common.
- `Date not exposed` means the public indexed page did not show the original post date. These records are retained but receive less recency weight.
- Frequency labels are judgments within this 75-item sample: `isolated` = one narrow case; `repeated` = similar issue on at least two independent findings; `common` = recurring across at least three platforms; `dominant` = among the most persistent cross-platform themes. They are not market-share statistics.

## Source distribution

| Domain / community | Findings | Share | Evidence type |
|---|---:|---:|---|
| Reddit | 12 | 16.0% | Firsthand questions and peer discussion |
| HubSpot Community | 10 | 13.3% | CRM admin/user questions |
| Square Community | 8 | 10.7% | Seller questions and feature/workflow complaints |
| Salon Geek | 10 | 13.3% | Salon-owner and worker discussion |
| Capterra | 10 | 13.3% | Identified, moderated software reviews; incentive status noted on source |
| Trustpilot | 10 | 13.3% | Identified public reviews and vendor responses |
| Zoho Community | 5 | 6.7% | CRM/Bookings user questions |
| Salesforce Stack Exchange | 10 | 13.3% | CRM administrator/implementation questions |
| **Total** | **75** | **100%** | |

## Field key

Each finding records all requested fields in compact form:

- **Evidence**: URL, platform, date, business type, and the exact or closely paraphrased user question.
- **Complaint**: directly observable claim; it is not independently verified unless stated.
- **Decision / hidden problem**: what the user is trying to accomplish and the underlying operational issue.
- **AI research**: concepts and example searches needed for a strong answer.
- **Site opportunity**: closest existing Visaxa article, missing concept node, article idea, commercial intent, and frequency signal.

## Reddit (R01-R12)

### R01 — Free booking tool for a barbershop

- **Evidence:** [Reddit / r/Barber](https://www.reddit.com/r/Barber/comments/12ph16u/best_tool_for_booking_appointments/), 2023-04-17, barbershop. Closely paraphrased question: “What free tool lets customers book appointments in a shop that still uses no digital agenda?”
- **Complaint:** The shop has no digital booking; replies expose trade-offs among Square, Booksy, Fresha, Resurva, marketplace discovery, accounts, and custom slot lengths.
- **Decision / hidden problem:** Choose a low-cost entry system without losing service-duration control or forcing client friction. Hidden problem: “free” plans shift cost into payments, discovery, or later growth.
- **AI research:** free-tier boundaries, booking lead time, variable durations, client-account requirements, payment economics. Queries: `Square Appointments free plan staff limits`; `Booksy Fresha pricing barber custom duration`; `booking marketplace client ownership terms`.
- **Site opportunity:** Existing: `how-to-choose-a-salon-crm-without-regretting-it`. Missing node: **Free Is a Pricing Model, Not a Requirement Fit**. Article: “What ‘Free Booking Software’ Actually Costs a Barbershop.” Intent: evaluating software. Frequency: common.

### R02 — Solo esthetician comparing booking platforms

- **Evidence:** [Reddit / r/Esthetics](https://www.reddit.com/r/Esthetics/comments/1mkrv5l/solo_estheticians_booking_platformswebsites/), 2025-08-08, solo esthetics. Question: “Which booking platform works without client app friction, nickel-and-dime add-ons, unstable updates, or weak support?”
- **Complaint:** Firsthand replies report add-on fatigue, account/password friction for clients, bugs released before fixes, and checkout/support failures; some comments may include promoters.
- **Decision / hidden problem:** Separate genuine operator experience from paid promotion and pick a sustainable stack. Hidden problem: acquisition convenience can conflict with client experience and predictable total cost.
- **AI research:** pricing schedules, review provenance, support SLAs, booking conversion, app/account requirements, export policy. Queries: `site:fresha.com pricing partner fees`; `site:vagaro.com pricing add-ons`; `GlossGenius client booking account required`; `software status history booking platform`.
- **Site opportunity:** Existing: CRM selection article. Missing node: **Total Cost and Client Friction Audit**. Article: “How to Verify Salon Software Beyond Influencer Reviews.” Intent: evaluating software. Frequency: dominant.

### R03 — Location-aware scheduling for home services

- **Evidence:** [Reddit / r/smallbusiness](https://www.reddit.com/r/smallbusiness/comments/1m32lnw/scheduling_software_for_small_service_business/), 2025-07-18, landscaping/repairs. Question: “What lets a two-person sales team offer direct booking while limiting travel across town?”
- **Complaint:** Generic meeting schedulers do not clearly model location-based availability and travel buffers.
- **Decision / hidden problem:** Reduce phone coordination without creating impossible routes. Hidden problem: staff availability is not the same as operational availability.
- **AI research:** service areas, travel-time buffers, routing, territory rules, calendar synchronization. Queries: `field service scheduling travel time buffer`; `Calendly location based availability`; `service business routing appointment booking documentation`.
- **Site opportunity:** Existing: scheduling-failure article. Missing node: **Geographic Capacity**. Article: “Why an Open Calendar Slot May Not Be Bookable.” Intent: evaluating software. Frequency: repeated.

### R04 — All-in-one booking for a new barbershop

- **Evidence:** [Reddit / r/Barber](https://www.reddit.com/r/Barber/comments/1kwwxvf/booking_software/), 2025-05-27, new barbershop. Question: “Which affordable app lets clients choose a service and a specific barber?”
- **Complaint:** The owner is overwhelmed by Booksy, Fresha, Vagaro, Mangomint, Zenoti, and unfamiliar ranking claims.
- **Decision / hidden problem:** Avoid buying an oversized system while retaining provider choice and future growth. Hidden problem: category rankings do not encode business size or workflow fit.
- **AI research:** staff/service matrix, plan limits, marketplace behavior, onboarding, switching cost. Queries: `booking software staff service mapping barber`; `Zenoti minimum business size pricing`; `Booksy Fresha data export`.
- **Site opportunity:** Existing: salon CRM selection. Missing node: **Complexity Fit by Business Stage**. Article: “Solo, Shop, or Multi-location: How Much Booking System Do You Need?” Intent: evaluating software. Frequency: common.

### R05 — Barber software trade-offs and client control

- **Evidence:** [Reddit / r/Barber](https://www.reddit.com/r/Barber/comments/1lo6cf3/which_barber_booking_software_you_use_and_why_do/), 2025-06-30, barbers. Question: “Which booking system do you use, and what do you actually dislike?”
- **Complaint:** Replies contrast free/paid tiers, marketplace recommendations to competing barbers, short-notice controls, reminders, no-show protection, and rising cost.
- **Decision / hidden problem:** Choose between discovery and direct client control. Hidden problem: a marketplace can be both an acquisition channel and a competing relationship layer.
- **AI research:** marketplace terms, profile recommendation behavior, booking lead-time controls, data ownership, payment fees. Queries: `Square Go marketplace recommendations`; `Booksy marketplace client relationship terms`; `Vagaro export customer list`.
- **Site opportunity:** Existing: CRM evaluation framework. Missing node: **Marketplace Dependency and Client Control**. Article: “When Your Booking App Also Markets Other Providers.” Intent: evaluating software. Frequency: common.

### R06 — Moving a four-person service team off Google tools

- **Evidence:** [Reddit / r/smallbusiness](https://www.reddit.com/r/smallbusiness/comments/198dtyj), 2024-01-16, four-person field service business. Question: “Which CRM combines a shared tech calendar, job notes, completion notes, and photos?”
- **Complaint:** Google Forms, Sheets, Drive, and calendar are fragmented; mobile apps for many alternatives have poor ratings.
- **Decision / hidden problem:** Centralize customer and job context before growth. Hidden problem: the spreadsheet is not merely a bad habit; it fills gaps between scheduling, field evidence, and handoff.
- **AI research:** field-service data model, offline/mobile reliability, notes/photos permissions, invoicing integrations. Queries: `field service CRM job notes photos shared calendar`; `mobile offline field service CRM`; `CRM export attachments photos`.
- **Site opportunity:** Existing: employee-adoption article. Missing node: **Workflow Consolidation Without Losing Useful Workarounds**. Article: “When Spreadsheets Are a Symptom, Not the Root Problem.” Intent: actively switching. Frequency: common.

### R07 — Disappearing and duplicated salon appointments

- **Evidence:** [Reddit / r/Estheticians](https://www.reddit.com/r/Estheticians/comments/1so98mr/salon_booking_software_advice/), 2026-04-17, skin-care clinic. Question: “What should replace Vagaro after appointments disappeared/reappeared and deposit/price values changed?”
- **Complaint:** Firsthand report of stale calendar state, apparently duplicated bookings, and checkout/deposit discrepancies; replies include vendor promotion, so only the operator’s account is treated as evidence.
- **Decision / hidden problem:** Switch without repeating a reliability failure. Hidden problem: calendar integrity and payment math need failure-case testing, not just feature comparison.
- **AI research:** incident history, sync semantics, audit logs, deposit reconciliation, migration validation. Queries: `Vagaro status incident calendar`; `appointment audit log booking software`; `salon migration appointment reconciliation checklist`.
- **Site opportunity:** Existing: scheduling articles. Missing node: **Scheduling Integrity and Reconciliation**. Article: “How to Test Whether a Salon Calendar Is Operationally Trustworthy.” Intent: urgently seeking a solution. Frequency: common.

### R08 — Recurring appointments and cancellation links

- **Evidence:** [Reddit / r/smallbusiness](https://www.reddit.com/r/smallbusiness/comments/1lepn36/scheduling_software/), 2025-06-18, solo service business. Question: “What supports two-way sync, buffers, recurring meetings, and cancel/reschedule links?”
- **Complaint:** Wix lacked useful cancellation/reschedule handling; paid Calendly lacked the required recurring workflow.
- **Decision / hidden problem:** Reduce no-shows without creating calendar drift. Hidden problem: a short checklist can span several distinct scheduling models that generic tools implement unevenly.
- **AI research:** recurrence rules, cancellation windows, two-way conflict semantics, buffers. Queries: `recurring appointment scheduler two way sync`; `cancellation link confirmation email scheduling`; `calendar sync conflict behavior documentation`.
- **Site opportunity:** Existing: scheduling-failure article. Missing node: **Recurrence and Change Management**. Article: “Recurring Appointments Are Not Just Repeated Calendar Events.” Intent: actively switching. Frequency: repeated.

### R09 — Outgrowing a free CRM

- **Evidence:** [Reddit / r/smallbusiness](https://www.reddit.com/r/smallbusiness/comments/109stea/crm_and_scheduling_software/), 2023-01-12, small service business. Question: “What replaces free Workiz when the upgrade is $225/month, while preserving SMS and scheduling?”
- **Complaint:** A useful free workflow becomes costly at the first growth threshold.
- **Decision / hidden problem:** Determine whether to pay, split the stack, or migrate. Hidden problem: free-plan adoption can create switching cost before total cost is understood.
- **AI research:** pricing thresholds, message costs, export completeness, integration costs, migration labor. Queries: `Workiz pricing SMS limits`; `Workiz export customers jobs`; `service CRM total cost calculator`.
- **Site opportunity:** Existing: CRM evaluation framework. Missing node: **Growth Threshold Pricing**. Article: “The Upgrade Cliff in Free Service-Business Software.” Intent: actively switching. Frequency: dominant.

### R10 — Barbershop leaving a malfunctioning booking system

- **Evidence:** [Reddit / r/Barber](https://www.reddit.com/r/Barber/comments/1rw8h9b/booking_system/), 2026-03-17, barbershop. Question: “What should replace Vagaro after repeated client complaints that booking does not work?”
- **Complaint:** The owner reports four years on the system and recurring client-facing failures; replies include Square, Wix, Bookedin, and pen-and-paper.
- **Decision / hidden problem:** Migrate while retaining essential behavior and client confidence. Hidden problem: switching is driven by client experience, but alternatives are suggested without migration evidence.
- **AI research:** booking funnel tests, export/import scope, reminders, payments, cutover plan. Queries: `Vagaro customer export appointments`; `Square Appointments import client list`; `booking software cutover checklist`.
- **Site opportunity:** Existing: CRM selection and draft rollout checklist. Missing node: **Switching Readiness**. Article: “Before You Leave Your Booking System: What Must Be Exported and Tested.” Intent: actively switching. Frequency: dominant.

### R11 — Two-location salon and double-booking risk

- **Evidence:** [Reddit / r/smallbusiness](https://www.reddit.com/r/smallbusiness/comments/1op2fyz/best_salon_scheduling_software_to_prevent_double/), 2025-11-05, two-location salon. Question: “Which salon scheduler prevents double bookings without becoming expensive or fragmented at multiple locations?”
- **Complaint:** Calendly produced scheduling failures; compared products trade low entry price against multi-location cost, annual contracts, and multi-app fragmentation. Some wording resembles a comparison post, so firsthand weight is moderate.
- **Decision / hidden problem:** Select a multi-location platform that protects capacity and keeps checkout/retail/booking coherent. Hidden problem: location scale changes permissions, resource pools, reporting, and price simultaneously.
- **AI research:** cross-location staff/resource logic, plan pricing, contract terms, consolidated reporting. Queries: `salon software multi location staff resource scheduling`; `Square Appointments multi location pricing`; `Boulevard contract terms export`.
- **Site opportunity:** Existing: scheduling-scale article. Missing node: **Multi-location Control Plane**. Article: “What Changes in Scheduling When Location Two Opens.” Intent: evaluating software. Frequency: common.

### R12 — High-performing receptionist resists a new workflow

- **Evidence:** [Reddit / r/smallbusiness](https://www.reddit.com/r/smallbusiness/comments/1srcglq/held_hostage_by_a_high_performer/), approximately 2026-05 (public page showed “2mo ago” on 2026-07-13; exact day not exposed), healthcare service business. Question: “What should an owner do when a crucial receptionist resists a new scheduling workflow introduced by a partner?”
- **Complaint:** The owner initially frames resistance as refusal to adopt a more efficient process. Detailed replies surface loss of role identity, lack of consultation, hidden frontline knowledge, patient-contact value, and fear of automation. The update says a direct conversation exposed concerns about diminished importance.
- **Decision / hidden problem:** Preserve a strong employee while changing workflow and reducing single-person dependency. Hidden problem: management changed a frontline process without first documenting why existing steps existed or involving the person who carried the operational knowledge.
- **AI research:** stakeholder mapping, task observation, change management, single-point-of-failure risk, role redesign, healthcare workflow/legal constraints. Queries: `employee technology adoption role identity study`; `healthcare workflow change frontline staff involvement`; `single point of failure receptionist process documentation`.
- **Site opportunity:** Existing: `why-good-employees-stop-using-good-software`. Missing node: **Change Acceptance and Operational Knowledge Capture**. Article: “When Software Adoption Threatens an Employee’s Role, Not Just Their Routine.” Intent: urgently seeking a solution. Frequency: common.

## HubSpot Community (H01-H10)

### H01 — Migration creates duplicate contacts

- **Evidence:** [HubSpot Community](https://community.hubspot.com/t/problems-with-duplicate-contacts-being-created/146784), 2026-02-27, generic CRM migration. Question: “Why did migration create many duplicates when clients have several email addresses?”
- **Complaint:** Secondary emails mapped outside HubSpot’s native email property are not reliably used for identity matching; the user fears automated merging may damage marketing history.
- **Decision / hidden problem:** Clean duplicates without losing history. Hidden problem: identity resolution rules were not defined before field mapping.
- **AI research:** native identity keys, additional-email mapping, merge precedence, activity preservation, backup. Queries: `HubSpot deduplicate additional email migration`; `HubSpot merge contact history behavior`; `CRM migration identity resolution checklist`.
- **Site opportunity:** Existing: CRM evaluation framework mentions portability. Missing node: **Identity Resolution Before Migration**. Article: “Why CRM Migrations Create Duplicate Clients.” Intent: urgently seeking a solution. Frequency: dominant.

### H02 — Duplicate count jumps by 2,000

- **Evidence:** [HubSpot Community](https://community.hubspot.com/t/duplicate-contacts/100419), 2024-02-19, CRM administration. Question: “What caused 2,000 new duplicate contacts over one weekend?”
- **Complaint:** Support did not immediately identify whether an import, workflow, or integration caused the spike.
- **Decision / hidden problem:** Find the source and stop continued contamination. Hidden problem: the CRM lacks an operator-facing provenance view that makes duplicate creation easy to trace.
- **AI research:** import logs, workflow history, integration audit, duplicate rules. Queries: `HubSpot contact source audit duplicate spike`; `HubSpot import history created contacts`; `integration audit duplicate contacts`.
- **Site opportunity:** Existing: none directly. Missing node: **Record Provenance and Data Incident Response**. Article: “How to Investigate a Sudden CRM Duplicate Spike.” Intent: urgently seeking a solution. Frequency: dominant.

### H03 — Duplicates cannot be assigned for cleanup by owner

- **Evidence:** [HubSpot Community](https://community.hubspot.com/t/duplicate-contacts/26732), 2020-10-14, CRM team. Question: “Can I filter potential duplicates by contact owner so each owner can merge their records?”
- **Complaint:** The duplicate list could not be filtered by owner in the described product tier/workflow.
- **Decision / hidden problem:** Distribute cleanup safely. Hidden problem: centralized deduplication does not scale when context is held by individual staff.
- **AI research:** duplicate-manager permissions, owner filters, review workflow, merge audit. Queries: `HubSpot duplicate manager filter owner`; `HubSpot duplicate permissions`; `CRM deduplication stewardship model`.
- **Site opportunity:** Existing: employee-adoption article. Missing node: **Data Stewardship Workflow**. Article: “Who Should Be Allowed to Merge Customer Records?” Intent: informational. Frequency: repeated.

### H04 — No report gives owners visibility into duplicates

- **Evidence:** [HubSpot Community](https://community.hubspot.com/t/how-can-i-report-or-view-duplicate-contacts-in-hubspot-for-clients/147379), 2026-03-18, CRM consultant/client. Question: “How can I report duplicate-contact counts to a client when the duplicate manager is not reportable?”
- **Complaint:** Visibility requires an integration, API work, or spreadsheet export.
- **Decision / hidden problem:** Give an owner an ongoing data-quality metric. Hidden problem: remediation exists without governance/reporting.
- **AI research:** reporting limits, API, export controls, duplicate KPIs. Queries: `HubSpot report potential duplicates`; `HubSpot duplicates API`; `CRM data quality dashboard metrics`.
- **Site opportunity:** Existing: none directly. Missing node: **Owner Visibility Into Data Quality**. Article: “A CRM Cleanup Tool Is Not the Same as a Data-Quality Report.” Intent: evaluating software. Frequency: common.

### H05 — Salesforce sync triples some contacts

- **Evidence:** [HubSpot Community](https://community.hubspot.com/t/contacts-duplicated-in-salesforce-after-syncing-from-hubspot/149315), 2026-05-13, HubSpot/Salesforce integration. Question: “Why did a 923-contact sync create three extra records for contacts owned by two reps?”
- **Complaint:** Deletion tests also removed the original synchronized record; matching rules, integration-user permissions, and legacy connector behavior were uncertain.
- **Decision / hidden problem:** Stop destructive cross-system duplication. Hidden problem: two CRMs create competing identity and ownership rules.
- **AI research:** connector version, sync direction, integration-user visibility, matching rules, sandbox test. Queries: `HubSpot Salesforce sync duplicate contacts legacy connector`; `Salesforce duplicate rules integration user`; `two way CRM sync delete behavior`.
- **Site opportunity:** Existing: CRM evaluation framework. Missing node: **Cross-System Identity and Delete Semantics**. Article: “Why Two-Way CRM Sync Is Not a Backup.” Intent: urgently seeking a solution. Frequency: dominant.

### H06 — Rejecting an uncertain duplicate may be irreversible

- **Evidence:** [HubSpot Community](https://community.hubspot.com/t/duplicate-contacts-that-get-rejected/87955), 2023-08-21 with 2024 follow-up, CRM administration. Question: “If two likely duplicates are rejected now, can they reappear when more evidence exists?”
- **Complaint:** Documented behavior and a later user report appear inconsistent.
- **Decision / hidden problem:** Avoid both false merges and permanent false negatives. Hidden problem: identity decisions need reversibility and evidence history.
- **AI research:** rejection lifecycle, merge audit, undo behavior, confidence scoring. Queries: `HubSpot rejected duplicate suggestion reappear`; `HubSpot merge undo audit`; `CRM probabilistic duplicate review`.
- **Site opportunity:** Existing: none. Missing node: **Reversible Identity Decisions**. Article: “CRM Deduplication Is a Judgment Workflow, Not a Delete Button.” Intent: informational. Frequency: repeated.

### H07 — Importing contacts may inflate billable marketing contacts

- **Evidence:** [HubSpot Community](https://community.hubspot.com/t/duplicate-contacts-within-hubspot-and-new-lists/52912), 2022-03-10, marketing CRM. Question: “Will uploading a list update existing people or create duplicates and increase the marketing-contact tier?”
- **Complaint:** Records without stable email/CRM IDs can duplicate, connecting data hygiene directly to price.
- **Decision / hidden problem:** Import safely without a billing surprise. Hidden problem: identity quality is part of the pricing model.
- **AI research:** import match keys, marketing-contact billing, dry runs, rollback. Queries: `HubSpot import deduplication email contact ID`; `HubSpot marketing contacts pricing duplicates`; `CRM import dry run`.
- **Site opportunity:** Existing: CRM evaluation framework. Missing node: **Data Quality as a Cost Driver**. Article: “How Duplicate Records Increase CRM Cost.” Intent: evaluating software. Frequency: common.

### H08 — Deduplication locked behind higher tiers

- **Evidence:** [HubSpot Community](https://community.hubspot.com/t/merge-duplicate-contacts/28516), 2020-11-28 with 2024 follow-up, free CRM user. Question: “How can a free-plan user find and merge duplicates in a 10,000-contact directory?”
- **Complaint:** Automated duplicate management was paid-tier functionality; manual merging at that scale is impractical, and a later user reports erroneous merges.
- **Decision / hidden problem:** Clean data without buying a much larger plan or risking mass error. Hidden problem: the product can accumulate a problem whose efficient repair is separately monetized.
- **AI research:** tier matrix, merge algorithm, export/manual alternatives, backups. Queries: `HubSpot duplicate management plan`; `HubSpot merge records data retained`; `free CRM deduplication export workflow`.
- **Site opportunity:** Existing: CRM evaluation framework. Missing node: **Maintenance Features Behind Upgrade Gates**. Article: “Which CRM Features You Only Discover You Need After the Trial.” Intent: actively seeking a solution. Frequency: dominant.

### H09 — Export permission is too broad

- **Evidence:** [HubSpot Community](https://community.hubspot.com/t/give-permissions-to-user-to-export-a-particular-view/114947), 2024-08-21, client-services team. Question: “Can a user export one ticket view without receiving global export capability?”
- **Complaint:** Export permission is described as global for accessible CRM data, not scoped to a specific view.
- **Decision / hidden problem:** Enable a legitimate workflow without exposing excess customer data. Hidden problem: task permission and data-exfiltration permission are coupled.
- **AI research:** object/view export scope, row-level access, audit logs, temporary access. Queries: `HubSpot export permission specific view`; `HubSpot export audit log`; `least privilege CRM export`.
- **Site opportunity:** Existing: draft financial-privacy article. Missing node: **Scoped Export and Customer-List Risk**. Article: “The CRM Permission That Can Copy Your Entire Client List.” Intent: evaluating software. Frequency: common.

### H10 — User/seat export does not match the visible filtered view

- **Evidence:** [HubSpot Community](https://community.hubspot.com/t5/Account-Settings/Exporting-User-List-with-Seat-Assigned/td-p/1094894), 2025-01-15 onward, CRM administration. Question: “Why does the user export omit a sortable seat field and ignore the current filter?”
- **Complaint:** The export structure does not mirror the admin view, making seat auditing difficult.
- **Decision / hidden problem:** Audit paid seats and permissions. Hidden problem: owner visibility is weakened when operational views and exports use different schemas.
- **AI research:** seat export schema, API, billing audit, permission sets. Queries: `HubSpot export users assigned seat`; `HubSpot seats API`; `CRM license audit report`.
- **Site opportunity:** Existing: none. Missing node: **License and Permission Reconciliation**. Article: “Can an Owner Prove Who Has Access and Which Seats They Pay For?” Intent: informational. Frequency: repeated.

## Square Community (Q01-Q08)

### Q01 — A no-show status cannot be reversed

- **Evidence:** [Square Community](https://community.squareup.com/t5/Payments-Troubleshooting/How-to-unmark-a-no-show-appointment/m-p/754390), original thread indexed 2024 with 2026 follow-up, appointment business. Question: “How do I undo a no-show marked by mistake and still handle the fee correctly?”
- **Complaint:** The no-show action is irreversible; a later owner explicitly objects because accidental status could trigger a fee.
- **Decision / hidden problem:** Correct staff error without harming the client. Hidden problem: irreversible workflow states combine recordkeeping and money movement.
- **AI research:** status transition model, fee authorization, audit/void behavior. Queries: `Square Appointments undo no show`; `Square no show fee reverse`; `appointment status audit trail`.
- **Site opportunity:** Existing: scheduling articles. Missing node: **Reversible Front-Desk Actions**. Article: “Why Appointment Statuses Need Undo and Audit Trails.” Intent: urgently seeking a solution. Frequency: repeated.

### Q02 — Businesses want a partial deposit, not full prepayment

- **Evidence:** [Square Community](https://community.squareup.com/t5/Square-Appointments/Charge-a-deposit-at-booking/idc-p/623735/highlight/true), 2022-06-23 onward, appointment businesses. Question: “Can Square collect a true deposit at booking and apply it automatically at checkout?”
- **Complaint:** Owners describe workarounds, invalid cards for no-show protection, client confusion, and manual remaining-balance calculations.
- **Decision / hidden problem:** Reduce no-shows without forcing full payment. Hidden problem: deposit, card hold, cancellation fee, and prepayment are different accounting events.
- **AI research:** authorization vs capture, deposit ledger, refund rules, checkout reconciliation. Queries: `Square Appointments partial deposit`; `card hold vs deposit appointment`; `salon deposit accounting workflow`.
- **Site opportunity:** Existing: scheduling-failure article. Missing node: **Deposit and Cancellation Payment Logic**. Article: “Deposit, Card Hold, or Prepayment: They Are Not the Same.” Intent: actively seeking a solution. Frequency: dominant.

### Q03 — A shared spa room can still be requested twice

- **Evidence:** [Square Community](https://community.squareup.com/t5/Appointments-Bookings/Clients-are-requesting-appointments-which-require-a-resource/td-p/768505), 2024-12-22, spa. Question: “Why can two staff receive requests for the same room at the same time after the room was assigned as a resource?”
- **Complaint:** The owner expected resource assignment to block conflicts, but overlapping requests remained possible.
- **Decision / hidden problem:** Make room capacity authoritative across staff. Hidden problem: request workflow and confirmed-booking workflow may enforce constraints at different stages.
- **AI research:** resource assignment semantics, request vs auto-accept, staff availability, conflict validation. Queries: `Square Appointments resource double booking`; `Square booking request resource conflict`; `shared room scheduling constraint`.
- **Site opportunity:** Existing: scheduling articles. Missing node: **Resource-Aware Scheduling**. Article: “A Free Staff Member Does Not Mean a Free Treatment Room.” Intent: urgently seeking a solution. Frequency: common.

### Q04 — Full payment and no-show protection do not equal a deposit

- **Evidence:** [Square Community](https://community.squareup.com/t5/Appointments-Bookings/Deposit-instead-of-full-payment-for-Appointments/td-p/3655/highlight/true/page/3), thread begun 2016; cited user post 2018-06-19, salon/appointment business. Question: “Why did a $50 ‘deposit service’ save a card but not charge it?”
- **Complaint:** The workaround confuses no-show protection with prepayment and distorts service pricing.
- **Decision / hidden problem:** Secure the slot and preserve correct final price. Hidden problem: modeling money as a fake service corrupts reporting and client expectations.
- **AI research:** service catalog design, payment allocation, deposit support, reporting impact. Queries: `Square appointment deposit remaining balance`; `Square prepayment service variation reporting`; `booking deposit ledger`.
- **Site opportunity:** Existing: none directly. Missing node: **Payment Model Integrity**. Article: “Why Fake Deposit Services Break Salon Reporting.” Intent: urgently seeking a solution. Frequency: dominant.

### Q05 — External payment links do not reconcile to appointments

- **Evidence:** [Square Community](https://community.squareup.com/t5/New-to-Square/New-to-Square/m-p/772381), 2025, salon. Question: “How do I attach a 25–50% deposit paid by link to the appointment and split the remaining payment?”
- **Complaint:** Deposit links remain external to the appointment, and split payment over time is not supported in the described workflow.
- **Decision / hidden problem:** Keep front desk, appointment, and payment balances consistent. Hidden problem: disconnected workaround payments destroy a single source of truth.
- **AI research:** invoice/payment-link association, split tender, deposit reconciliation. Queries: `Square payment link appointment association`; `Square split appointment payment dates`; `deposit reconciliation salon POS`.
- **Site opportunity:** Existing: CRM evaluation framework. Missing node: **Appointment-to-Payment Reconciliation**. Article: “When Booking and Payment Records Stop Agreeing.” Intent: actively seeking a solution. Frequency: common.

### Q06 — Card hold setup is misunderstood

- **Evidence:** [Square Community](https://community.squareup.com/t5/Appointments-Bookings/How-to-hold-card-payment-for-no-show-Appointments/m-p/822822/thread-id/5703), 2025, appointment business. Question: “How do I place a card on hold for first-time bookings and no-shows?”
- **Complaint:** The user expects a hold; available choices are no requirement, full prepayment, or a card that may later be charged under policy.
- **Decision / hidden problem:** Verify payment commitment before reserving time. Hidden problem: product labels and payment-network semantics do not match owner vocabulary.
- **AI research:** authorization timing, card validity, charge consent, policy disclosure. Queries: `Square hold card no show authorization`; `card on file vs authorization hold`; `cancellation fee consent requirements`.
- **Site opportunity:** Existing: none. Missing node: **Payment Vocabulary for Operators**. Article: “What ‘Hold a Card’ Actually Means in Booking Software.” Intent: informational. Frequency: common.

### Q07 — No-show cards may be invalid and clients misread the flow

- **Evidence:** [Square Community](https://community.squareup.com/t5/Archived-Discussions-Read-Only/Deposit-instead-of-full-payment-for-Appointments/m-p/86459), 2019-11-07 context, nail/appointment business. Question: “Can the system validate funds or collect a fixed deposit so a cancellation fee is collectible?”
- **Complaint:** Owners report no-show cards may be unusable; clients can believe card entry means payment; true pre-authorization is constrained.
- **Decision / hidden problem:** Choose a policy that is enforceable and understandable. Hidden problem: deterrence, payment assurance, and client communication are separate design goals.
- **AI research:** authorization windows, stored credentials, disclosures, refund policy. Queries: `card authorization validity appointment booking`; `no show fee card declined`; `salon deposit policy client communication`.
- **Site opportunity:** Existing: scheduling-failure article. Missing node: **Enforceable No-Show Controls**. Article: “Why Card-on-File Does Not Guarantee a Cancellation Fee.” Intent: actively seeking a solution. Frequency: dominant.

### Q08 — Percentage deposits remain a workaround

- **Evidence:** [Square Community](https://community.squareup.com/t5/Payments-Troubleshooting/Taking-payments-through-appointments/m-p/210678), 2020-2021, appointment business. Question: “Can the system take a percentage deposit instead of full prepayment?”
- **Complaint:** The described product supports full prepayment or a later cancellation charge, not a true percentage deposit in the appointment ledger.
- **Decision / hidden problem:** Match deposit amount to varied service prices. Hidden problem: flat controls do not map to multi-service economics.
- **AI research:** per-service vs percentage rules, taxes/tips, refunds, remaining balance. Queries: `Square percentage deposit appointments`; `percentage booking deposit tax tip`; `salon multi service deposit calculation`.
- **Site opportunity:** Existing: none directly. Missing node: **Service-Aware Deposit Rules**. Article: “Flat Fee or Percentage Deposit? Test the Edge Cases First.” Intent: evaluating software. Frequency: dominant.

## Salon Geek (S01-S10)

### S01 — Software cannot expose retail sales for commission

- **Evidence:** [Salon Geek](https://www.salongeek.com/threads/salon-advance-software-help.118439/post-1085706), 2010-08-09, salon. Question: “Why can’t the system print retail sales so staff commission can be calculated?”
- **Complaint:** Retail reporting and hardware/receipt customization do not match the salon’s operation.
- **Decision / hidden problem:** Determine whether the software can support pay calculations before rollout. Hidden problem: payroll depends on transaction attribution, not just total sales.
- **AI research:** line-item seller attribution, returns, commission basis, report export. Queries: `salon software retail commission report`; `commission attribution returns discounts`; `POS employee sales report`.
- **Site opportunity:** Existing: none. Missing node: **Commission-Ready Transaction Data**. Article: “Can Your Salon Software Reproduce Every Commission Calculation?” Intent: evaluating software. Frequency: common.

### S02 — Central booking and 60/40 self-employed staff

- **Evidence:** [Salon Geek](https://www.salongeek.com/threads/taking-on-self-employed-staff-60-40-split.329211/), 2019-05-29, salon. Question: “Can self-employed staff share a central booking system and client data while choosing hours under a 60/40 split?”
- **Complaint:** Booking, worker status, data access, hours, and chair economics are entangled.
- **Decision / hidden problem:** Design a workable operating model without unintentionally contradicting contractual status. Hidden problem: software permissions cannot resolve employment classification or data-controller questions.
- **AI research:** local employment law, controller/processor roles, scheduling authority, commission contract. Queries: `UK self employed salon central booking data controller`; `salon chair renter client data agreement`; `commission split booking system access`.
- **Site opportunity:** Existing: draft privacy article only adjacent. Missing node: **Worker Model, Data Access, and Scheduling Authority**. Article: “Employee, Contractor, or Chair Renter: Software Cannot Decide the Relationship.” Intent: informational. Frequency: common. Legal facts require jurisdiction-specific verification.

### S03 — Who owns client record cards after a worker leaves?

- **Evidence:** [Salon Geek](https://www.salongeek.com/threads/client-records-are-they-mine-being-self-employed-or-the-salon-owner.339156/), 2024-02-13, salon worker. Question: “Can a self-employed stylist take client record cards with permission when leaving a salon?”
- **Complaint:** The salon owner threatens data-protection action; physical ownership, client choice, and legal control are confused.
- **Decision / hidden problem:** Continue serving clients without unlawful data use. Hidden problem: “my clients” is not a complete legal or systems definition.
- **AI research:** controller status, consent, contract, record custody, lawful transfer. Queries: `ICO salon self employed client records data controller`; `client consent transfer records salon`; `salon contractor data sharing agreement`.
- **Site opportunity:** Existing: CRM evaluation’s portability section. Missing node: **Client Record Ownership and Lawful Portability**. Article: “Who Owns Salon Client Records When a Stylist Leaves?” Intent: urgently seeking a solution. Frequency: common; legal answer varies by jurisdiction.

### S04 — Late cancellations drive deposit policies

- **Evidence:** [Salon Geek](https://www.salongeek.com/threads/no-shows-and-late-cancellation.328404/), 2019-04-13 discussion, salons. Question: “How strict should deposits and late-cancellation charges be?”
- **Complaint:** Owners describe lost capacity and inconsistent staff enforcement; some report using app flags and prepayment rules.
- **Decision / hidden problem:** Protect capacity without alienating valuable clients. Hidden problem: software can enforce a rule, but the business still needs exceptions, evidence, and consistent communication.
- **AI research:** policy design, grace/exception logic, rebooking, consumer law, payment rules. Queries: `salon cancellation policy enforceability jurisdiction`; `booking deposit refund policy`; `no show policy exception workflow`.
- **Site opportunity:** Existing: scheduling-failure article. Missing node: **Cancellation Policy Operations**. Article: “A No-Show Policy Is a Workflow, Not a Paragraph.” Intent: informational. Frequency: dominant.

### S05 — Can a clientele list be sold?

- **Evidence:** [Salon Geek](https://www.salongeek.com/threads/would-you-sell-your-clientele-list.48088/), 2007-01-08, nail/service professional. Question: “Can a departing provider sell a client list, and how would it be valued?”
- **Complaint:** Participants immediately raise trust and client-choice concerns; the thread predates current privacy regimes and is historical evidence only.
- **Decision / hidden problem:** Transfer goodwill without treating personal data as an unrestricted asset. Hidden problem: commercial value, consent, and data rights are different questions.
- **AI research:** current privacy law, asset-sale clauses, consent/notice, valuation. Queries: `sale of customer database privacy law`; `client list business sale consent`; `salon goodwill valuation client list`.
- **Site opportunity:** Existing: none directly. Missing node: **Client Data Is Not Ordinary Inventory**. Article: “Can a Service Business Sell Its Client List?” Intent: informational. Frequency: repeated; legal content needs counsel and current sources.

### S06 — Staff dispute wages and commission tiers

- **Evidence:** [Salon Geek](https://www.salongeek.com/threads/wages-problem.289589/), 2015-07-02, three-chair hair salon. Question: “Is minimum wage plus tiered service commission and retail commission fair?”
- **Complaint:** Staff are questioning pay after a departure; owner lacks an external benchmark and worries the team is destabilized.
- **Decision / hidden problem:** Validate compensation design and explain it. Hidden problem: commission calculations can be mathematically correct yet perceived as opaque or unfair.
- **AI research:** employment law, effective hourly pay, tier calculation, returns/discounts, transparent statements. Queries: `salon commission structure employment law location`; `tiered commission payroll examples salon`; `commission statement audit trail`.
- **Site opportunity:** Existing: research page names payroll/incentives but no article. Missing node: **Explainable Compensation**. Article: “Why Salon Commission Disputes Start Before Payroll Is Wrong.” Intent: urgently seeking a solution. Frequency: common.

### S07 — Employee leaving and contacting clients

- **Evidence:** [Salon Geek](https://www.salongeek.com/threads/advice-leaving-salon.315778/), 2017-07-04, employed stylist. Question: “Can I tell clients where I am going if my basic contract has no client-poaching clause?”
- **Complaint:** Client choice, employee solicitation, salon reputation, social media, and database use are conflated.
- **Decision / hidden problem:** Build a new book without breaching duties. Hidden problem: CRM access, export, social relationships, and legal solicitation boundaries do not align automatically.
- **AI research:** contract, trade-secret/confidential information law, privacy, social-media evidence, access logs. Queries: `employee salon client solicitation law jurisdiction`; `CRM export audit departing employee`; `salon client list confidentiality clause`.
- **Site opportunity:** Existing: draft privacy article. Missing node: **Offboarding and Client-List Protection**. Article: “What Salon Owners Should Disable and Export When Staff Leave.” Intent: urgently seeking a solution. Frequency: common; legal specifics uncertain.

### S08 — No-show control may require changing booking systems

- **Evidence:** [Salon Geek](https://www.salongeek.com/threads/how-do-you-deal-with-no-shows.332295/), 2019-12-29 onward, salon/spa. Question: “Should I replace Picktime with a system that collects a non-refundable booking fee?”
- **Complaint:** Last-minute cancellations cannot be refilled; the current system’s payment capability is unclear, while changing invalidates printed marketing links.
- **Decision / hidden problem:** Add enforceable deposits without disruptive migration. Hidden problem: a single missing payment workflow can trigger broader switching cost.
- **AI research:** deposit support, URL redirects, client migration, policy communication, payment fees. Queries: `Picktime deposit payments`; `booking URL redirect migration`; `salon booking system deposit comparison official docs`.
- **Site opportunity:** Existing: CRM selection. Missing node: **Trigger-Based Switching Decision**. Article: “Is One Missing Feature Enough Reason to Change Booking Systems?” Intent: actively switching. Frequency: common.

### S09 — Online-only booking excludes some clients

- **Evidence:** [Salon Geek](https://www.salongeek.com/threads/need-help-with-online-bookings.333944/), 2020-05-13, salon. Question: “Should clients who refuse or cannot use online booking be allowed to book by phone?”
- **Complaint:** Online booking reduced no-shows but created friction for clients uncomfortable with apps/cards; age is an unreliable proxy for capability.
- **Decision / hidden problem:** Preserve policy enforcement while offering inclusive channels. Hidden problem: channel flexibility can reintroduce manual exceptions and inconsistent payment capture.
- **AI research:** assisted booking, PCI-safe telephone payment, accessibility, consistent policy state. Queries: `accessible appointment booking alternatives`; `PCI telephone card payment salon`; `assisted booking same cancellation policy`.
- **Site opportunity:** Existing: scheduling-failure article. Missing node: **Inclusive Booking Channels**. Article: “Online-Only Booking Can Solve One Problem and Create Another.” Intent: informational. Frequency: repeated.

### S10 — Commission incentives may distort behavior

- **Evidence:** [Salon Geek](https://www.salongeek.com/threads/staff-incentives-commission.114878/latest), 2010-06-12, salon. Question: “Should commission apply to treatments, retail, or rebooking, and will staff compete too much?”
- **Complaint:** The owner wants motivation and retention but fears counterproductive competition.
- **Decision / hidden problem:** Design incentives that improve business outcomes without gaming. Hidden problem: what software measures becomes what staff optimize.
- **AI research:** incentive design, attribution, team vs individual metrics, returns, rebooking quality. Queries: `salon commission incentive unintended behavior`; `retail commission attribution returns`; `team based salon incentives`.
- **Site opportunity:** Existing: none. Missing node: **Incentive-Compatible Metrics**. Article: “What Happens When Salon Software Turns Every Sale Into a Score.” Intent: informational. Frequency: common.

## Capterra (C01-C10)

All ten records use the public [Mindbody reviews page](https://www.capterra.com/p/40229/MINDBODY/reviews/). Capterra labels the source/incentive status per review; that status should be checked before quotation or publication.

### C01 — Small boutique reaches its fee ceiling

- **Evidence:** Capterra, Julie B., 2025-11-11, boutique fitness/wellness owner. Question implied by review: “Is Mindbody still worth it as fees creep up and new tools are needed?”
- **Complaint:** The owner values operations but says rising cost forces trade-offs elsewhere.
- **Decision / hidden problem:** Stay or switch. Hidden problem: total cost grows through both core price and complementary services.
- **AI research:** current plan, add-ons, transaction fees, export/cancellation terms. Queries: `Mindbody pricing add ons official`; `Mindbody contract cancellation export`; `fitness software total cost`.
- **Site opportunity:** Existing: CRM evaluation. Missing node: **Cumulative Stack Cost**. Article: “The Monthly Price Is Not the Total Software Cost.” Intent: evaluating software. Frequency: dominant.

### C02 — Therapy notes need domain-specific charting

- **Evidence:** Capterra, Kate S., 2025-11-14, wellness/therapy manager. Question: “Does a class-oriented platform support therapist appointment charting deeply enough?”
- **Complaint:** Reviewer wants body drawings and richer appointment documentation.
- **Decision / hidden problem:** Stay with broad platform or choose specialist system. Hidden problem: scheduling breadth can hide weak clinical/service record depth.
- **AI research:** charting, consent, attachments, privacy, export. Queries: `Mindbody appointment notes body chart`; `therapy practice software chart export`; `wellness client record requirements`.
- **Site opportunity:** Existing: CRM evaluation. Missing node: **Record Depth by Service Type**. Article: “A Booking Record Is Not Always a Service Record.” Intent: evaluating software. Frequency: repeated.

### C03 — Platform update changes client relationship

- **Evidence:** Capterra, Kelsey F., 2025-09-19, fitness manager. Question: “Why did the update make client editing harder and advertise other studios?”
- **Complaint:** The reviewer reports lost email-edit control and marketplace recommendations to competitors.
- **Decision / hidden problem:** Decide whether convenience outweighs platform intermediation. Hidden problem: product updates can alter client ownership and staff workflow after purchase.
- **AI research:** release notes, marketplace opt-outs, admin permissions, data correction. Queries: `Mindbody marketplace opt out competitor studios`; `Mindbody edit client email permissions`; `software material product change contract`.
- **Site opportunity:** Existing: CRM evaluation. Missing node: **Post-Purchase Platform Drift**. Article: “What If Your Booking Software Changes the Deal Later?” Intent: actively switching/evaluating. Frequency: common.

### C04 — Onboarding errors plus contract lock-in

- **Evidence:** Capterra, Ollie D., 2025-09-23, exercise science/fitness. Question: “Can a business exit after onboarding errors deactivate appointment types and disrupt cash flow?”
- **Complaint:** Firsthand review alleges setup errors, unusable support, high minimum price, and refusal to cancel.
- **Decision / hidden problem:** Restore operations or leave. Hidden problem: implementation acceptance criteria and contractual exit rights were not aligned.
- **AI research:** contract, onboarding scope, service credits, export, dispute process. Queries: `Mindbody contract cancellation terms`; `Mindbody onboarding support SLA`; `software implementation acceptance checklist`.
- **Site opportunity:** Existing: draft owner rollout checklist. Missing node: **Implementation Acceptance and Exit Rights**. Article: “Do Not Go Live Until These Booking Workflows Pass.” Intent: urgently seeking a solution. Frequency: common.

### C05 — Support knows less than a power user

- **Evidence:** Capterra, Elizabeth J., 2025-08-10, alternative medicine owner. Question: “How reliable is support for nuanced operational issues?”
- **Complaint:** Reviewer says support sometimes needs the customer to explain the product.
- **Decision / hidden problem:** Assess whether breadth is maintainable. Hidden problem: feature count creates support complexity and owner dependency on undocumented knowledge.
- **AI research:** support tiers, escalation, knowledge base, community, admin training. Queries: `Mindbody support escalation`; `Mindbody administrator certification`; `software support response resolution metrics`.
- **Site opportunity:** Existing: employee-adoption article. Missing node: **Operational Knowledge Dependency**. Article: “When the Owner Becomes the Only Person Who Knows the Software.” Intent: informational. Frequency: common.

### C06 — App, website, and Apple devices disagree

- **Evidence:** Capterra, Cesar R., 2025-06-11, yoga/wellness. Question: “Can discrepancies between app, website, and Apple devices be trusted operationally?”
- **Complaint:** Reviewer reports occasional inconsistent information and device-specific hiccups.
- **Decision / hidden problem:** Decide whether reliability remains acceptable. Hidden problem: multiple client/staff surfaces can display different state.
- **AI research:** sync intervals, supported devices, cache, incident history. Queries: `Mindbody app website sync issue`; `Mindbody supported iPad`; `multi surface booking consistency test`.
- **Site opportunity:** Existing: scheduling article. Missing node: **Cross-Surface Consistency**. Article: “One Appointment, Three Screens: Which One Is the Truth?” Intent: informational. Frequency: common.

### C07 — Strong client front end, difficult admin back end

- **Evidence:** Capterra, verified yoga teacher/consultant, 2026-03-17, yoga/wellness. Question: “Why is client signup easy while setup requires too many windows and clicks?”
- **Complaint:** Admin interface is described as unintuitive despite a good client experience.
- **Decision / hidden problem:** Evaluate whether hidden admin labor outweighs client convenience. Hidden problem: demos emphasize the front end while recurring configuration cost sits backstage.
- **AI research:** task-time testing, role-based usability, configuration frequency, training. Queries: `Mindbody admin workflow usability`; `software evaluation task based test`; `booking software admin time cost`.
- **Site opportunity:** Existing: CRM evaluation. Missing node: **Back-Office Effort Test**. Article: “Demo the Admin Work, Not Just the Client Booking Page.” Intent: evaluating software. Frequency: dominant.

### C08 — Blocking time is harder on desktop

- **Evidence:** Capterra, Michelle H., 2026-02-01, alternative medicine practitioner. Question: “Why is self-scheduling and blocking time more complicated on desktop than in the app?”
- **Complaint:** Different interfaces create extra operational friction.
- **Decision / hidden problem:** Establish a reliable daily workflow. Hidden problem: role and device determine whether the same core action is easy.
- **AI research:** feature parity, permissions, block-time behavior, mobile/desktop support. Queries: `Mindbody block time desktop`; `Mindbody app desktop feature parity`; `staff availability change audit`.
- **Site opportunity:** Existing: employee-adoption article. Missing node: **Role-and-Device Workflow Fit**. Article: “Why Staff Avoid the ‘Correct’ Screen.” Intent: informational. Frequency: common.

### C09 — Solo owner pays for breadth but cannot enable SMS

- **Evidence:** Capterra, Helena S., 2025-11-10, solo wellness owner. Question: “Is a broad platform worth the price if a key reminder feature cannot be implemented for a sole proprietor?”
- **Complaint:** Reviewer reports SMS setup blocked by tax-ID requirements and repeated support attempts.
- **Decision / hidden problem:** Continue paying or use another reminder path. Hidden problem: eligibility/compliance dependencies can make an advertised feature unavailable to a specific business form.
- **AI research:** messaging registration, legal entity requirements, alternative channels, plan cost. Queries: `Mindbody SMS TIN requirement`; `A2P messaging sole proprietor requirements`; `appointment reminders email vs SMS`.
- **Site opportunity:** Existing: CRM evaluation. Missing node: **Feature Eligibility, Not Feature Presence**. Article: “A Feature List Does Not Tell You Whether You Can Use the Feature.” Intent: evaluating software. Frequency: common.

### C10 — Annual price increases worry a loyal owner

- **Evidence:** Capterra, Brent B., 2025-11-03, sports/fitness founder. Question: “Should loyal customers receive price stability as annual memberships rise?”
- **Complaint:** The system works, but recurring price increases reduce predictability.
- **Decision / hidden problem:** Forecast cost and switching threshold. Hidden problem: operational dependence weakens pricing leverage.
- **AI research:** renewal clauses, historical invoices, export readiness, alternatives. Queries: `Mindbody annual price increase terms`; `SaaS renewal price cap contract`; `booking software exit readiness`.
- **Site opportunity:** Existing: CRM evaluation. Missing node: **Price-Risk and Exit Readiness**. Article: “How Vendor Dependence Changes Your Negotiating Position.” Intent: evaluating software. Frequency: dominant.

## Trustpilot (T01-T10)

### T01 — Payment and reporting records stop agreeing

- **Evidence:** [Vagaro Trustpilot page](https://www.trustpilot.com/review/vagaro.com), reviewer SS, 2026-05-26, service-business owner. Question implied: “Can the platform be trusted after paid amounts, packages, IOUs, and reports diverge?”
- **Complaint:** Reviewer reports two months of recurring payment/package/reporting discrepancies despite support calls.
- **Decision / hidden problem:** Continue waiting for a fix or leave. Hidden problem: no reliable reconciliation path between operational and financial records.
- **AI research:** status incidents, transaction export, reconciliation, support escalation, migration. Queries: `Vagaro transaction report reconciliation`; `Vagaro export packages payments`; `Vagaro status payment incident`.
- **Site opportunity:** Existing: none directly. Missing node: **Financial Record Reconciliation**. Article: “When the Dashboard and the Deposit Do Not Match.” Intent: urgently seeking a solution. Frequency: common.

### T02 — Appointment times change and reminders misfire

- **Evidence:** [Vagaro Trustpilot page](https://www.trustpilot.com/review/vagaro.com), Savannah Carroll, 2026-05-20, salon/service business. Question: “What do we do when appointments move, reminders ignore rules, and devices disagree?”
- **Complaint:** Firsthand review alleges shifted appointments, late reminders, inconsistent reports/inventory, and credential problems.
- **Decision / hidden problem:** Protect a full day’s schedule and decide whether to switch. Hidden problem: calendar integrity lacks an operator-visible audit trail.
- **AI research:** audit logs, device sync, reminder event history, incident reports, export. Queries: `Vagaro appointment history audit`; `Vagaro reminder logs`; `Vagaro export future appointments`.
- **Site opportunity:** Existing: scheduling articles. Missing node: **Calendar Change Provenance**. Article: “Who Changed the Appointment? The Audit Question Every Calendar Must Answer.” Intent: urgently seeking a solution. Frequency: common.

### T03 — Proprietary front-desk hardware creates lock-in

- **Evidence:** [Vagaro Trustpilot page](https://www.trustpilot.com/review/vagaro.com), Carlos Boquin, 2026-05-20, multi-location service business. Question: “Why can’t expensive front-desk hardware support expected third-party accessories, and why is it non-returnable?”
- **Complaint:** Reviewer alleges sales expectations did not match hardware restrictions, return policy, offline flexibility, and support.
- **Decision / hidden problem:** Recover sunk cost or redesign the stack. Hidden problem: software lock-in can be reinforced by hardware and payment dependencies.
- **AI research:** compatibility list, return terms, offline behavior, data/payment portability. Queries: `Vagaro PayPro third party apps compatibility`; `Vagaro hardware return policy`; `salon POS hardware lock in`.
- **Site opportunity:** Existing: CRM evaluation’s portability dimension. Missing node: **Hardware and Payments Lock-In**. Article: “Data Export Is Not the Only Kind of Vendor Lock-In.” Intent: urgently seeking a solution. Frequency: common.

### T04 — Payout holds and chargeback process

- **Evidence:** [Vagaro Trustpilot page](https://www.trustpilot.com/review/vagaro.com), “Blessed and highly Favor,” 2026-05-18, small service/clinic owner. Question: “How can an owner contest held payouts and chargebacks when support and notice are inconsistent?”
- **Complaint:** Reviewer reports held funds, short deposits, long support loops, and chargeback losses. Amounts are unverified firsthand claims.
- **Decision / hidden problem:** Protect cash flow and choose whether to separate payments from booking. Hidden problem: operational software becomes a financial counterparty.
- **AI research:** merchant agreement, reserve/hold rules, chargeback evidence, payout reconciliation, regulator/card-network guidance. Queries: `Vagaro merchant agreement reserve hold`; `Vagaro chargeback evidence process`; `card network chargeback service business`.
- **Site opportunity:** Existing: none. Missing node: **Payments Counterparty Risk**. Article: “Your Booking Platform May Also Control Your Cash Flow.” Intent: urgently seeking a solution. Frequency: common.

### T05 — Appointment status affects review eligibility

- **Evidence:** [Vagaro Trustpilot page](https://www.trustpilot.com/review/vagaro.com), Fabiola, 2026-06-09, salon client. Question: “Can a business mark a canceled appointment as no-show and thereby affect whether the client can review?”
- **Complaint:** Client alleges status manipulation; vendor replies that appointment status is controlled by the business and review eligibility is tied to history.
- **Decision / hidden problem:** Obtain fair correction and review access. Hidden problem: operational status doubles as reputation-system evidence.
- **AI research:** platform review eligibility, status audit, dispute channel, consumer policy. Queries: `Vagaro review eligibility no show`; `Vagaro appointment status dispute`; `marketplace verified review appointment history`.
- **Site opportunity:** Existing: none. Missing node: **Operational Data Used for Reputation Decisions**. Article: “When Appointment Status Controls More Than the Calendar.” Intent: urgently seeking a solution. Frequency: isolated but credible as a design risk.

### T06 — Payout timing prompts immediate switching intent

- **Evidence:** [GlossGenius Trustpilot page](https://www.trustpilot.com/review/glossgenius.com), Keeta Simonë, 2026-06-05, beauty professional. Question: “Why was part of a payout routed while the rest was held over a weekend?”
- **Complaint:** Reviewer states this alone is reason to leave the platform.
- **Decision / hidden problem:** Regain predictable access to earned funds. Hidden problem: payout timing is an operational requirement, not a minor payment feature.
- **AI research:** payout schedule, cutoff, reserve, connected capital agreement, alternative processor. Queries: `GlossGenius payout schedule`; `GlossGenius Stripe Capital payout allocation`; `booking platform separate payment processor`.
- **Site opportunity:** Existing: none. Missing node: **Cash-Availability Requirements**. Article: “Evaluate Payout Timing Before You Evaluate Dashboard Design.” Intent: actively switching. Frequency: common.

### T07 — Cancellation does not remove stored payment details

- **Evidence:** [GlossGenius Trustpilot page](https://www.trustpilot.com/review/glossgenius.com), Orang, 2026-01-17, salon/small business. Question: “Why can’t a canceled user remove debit-card information, and why was an unsent campaign charged?”
- **Complaint:** Reviewer reports failed verification, extra forms for deletion, and a charge for a campaign not sent.
- **Decision / hidden problem:** End the vendor relationship and control stored payment data. Hidden problem: account closure, billing, and data deletion are separate workflows.
- **AI research:** deletion policy, billing dispute, data-retention law, cancellation evidence. Queries: `GlossGenius delete payment method account`; `GlossGenius cancellation data retention`; `SaaS account closure billing checklist`.
- **Site opportunity:** Existing: CRM portability dimension. Missing node: **Exit Is More Than Data Export**. Article: “The Four Things That Must End When You Cancel Business Software.” Intent: urgently switching. Frequency: common.

### T08 — Platform review transparency questioned

- **Evidence:** [GlossGenius Trustpilot page](https://www.trustpilot.com/review/glossgenius.com), Cassandra Toledano, 2026-03-21, salon client. Question: “Can users trust platform ratings if negative reviews may be removed or hidden?”
- **Complaint:** Reviewer alleges review suppression; no independent verification is available from the page.
- **Decision / hidden problem:** Decide whether ratings are reliable purchase evidence. Hidden problem: marketplace reputation mechanisms are controlled by the same platform being evaluated.
- **AI research:** review moderation policy, eligibility rules, independent review sources, appeal. Queries: `GlossGenius review moderation policy`; `booking marketplace review eligibility`; `FTC review suppression guidance`.
- **Site opportunity:** Existing: CRM selection. Missing node: **Evidence Quality in Software Research**. Article: “How Much Should You Trust Reviews Inside a Booking Marketplace?” Intent: informational. Frequency: repeated.

### T09 — Zenoti switch produces missing appointments and slower work

- **Evidence:** [Zenoti Trustpilot page](https://www.trustpilot.com/review/zenoti.com), Russell, 2026-05-12, salon/service business. Question: “Should we remain after a four-month migration produced slow processes, missing appointments, and weak support?”
- **Complaint:** Firsthand report says work takes much longer and appointments disappear.
- **Decision / hidden problem:** Stabilize or unwind the migration. Hidden problem: implementation success was not measured through daily task time and booking reconciliation.
- **AI research:** implementation acceptance, audit, rollback, export, support escalation. Queries: `Zenoti appointment audit log`; `Zenoti data export appointments`; `salon software migration acceptance criteria`.
- **Site opportunity:** Existing: draft rollout checklist. Missing node: **Post-Migration Operational Acceptance**. Article: “How to Know Whether a Salon Software Migration Actually Worked.” Intent: urgently seeking a solution. Frequency: common.

### T10 — Premium platform prioritizes new AI over core workflows

- **Evidence:** [Zenoti Trustpilot page](https://uk.trustpilot.com/review/zenoti.com), unnamed clinic review displayed 2026-05-12, clinic/med-spa. Question: “Why are booking, forms, week view, mobile navigation, and Safari still weak at a premium price while AI features advance?”
- **Complaint:** Reviewer praises implementation and breadth but reports buggy consent forms, slow navigation, weak view parity, and disappointing paid photo tools.
- **Decision / hidden problem:** Determine whether power and support justify daily friction. Hidden problem: roadmap value does not compensate for unreliable core tasks.
- **AI research:** current release notes, supported browsers, task workflows, add-on contract, incident history. Queries: `Zenoti supported browsers Safari`; `Zenoti forms booking release notes`; `Zenoti photo manager documentation`.
- **Site opportunity:** Existing: CRM evaluation framework. Missing node: **Core Workflow Before Roadmap Features**. Article: “Do Not Let AI Features Distract From Booking Reliability.” Intent: evaluating software. Frequency: dominant.

## Zoho Community (Z01-Z05)

### Z01 — Stop a trial employee exporting customer data

- **Evidence:** [Zoho Community](https://help.zoho.com/portal/en/community/topic/preventing-user-profiles-from-exporting-data-from-zoho-crm), date not exposed; accessed 2026-07-13, sales CRM. Question: “Can a new trial-period sales user be prevented from exporting accounts, contacts, leads, and opportunities?”
- **Complaint:** Owner fears a new hire could leave with company data.
- **Decision / hidden problem:** Grant enough access to work without enabling bulk extraction. Hidden problem: screen visibility, export, API, reports, and copy access are different leakage paths.
- **AI research:** profiles, export/API permissions, audit, offboarding, local law. Queries: `Zoho CRM disable export profile`; `Zoho CRM export audit log`; `CRM least privilege sales trial employee`.
- **Site opportunity:** Existing: draft privacy article. Missing node: **Client-List Protection by Capability**. Article: “View, Edit, Export, API: Four Different CRM Permissions.” Intent: urgently seeking a solution. Frequency: common.

### Z02 — One resource blocks two workspaces incorrectly

- **Evidence:** [Zoho Community](https://help.zoho.com/portal/en/community/topic/zoho-booking-resource-issue), date not exposed; accessed 2026-07-13, resource-booking business. Question: “How can a shared resource have workspace-specific capacity and weekend pricing without duplicate setup?”
- **Complaint:** Booking one workspace blocks another, weekend charges require duplicated resources, and account/add-on constraints complicate setup.
- **Decision / hidden problem:** Represent capacity and price without multiplying configuration. Hidden problem: one physical/resource identity is being used to model several business rules.
- **AI research:** resource pools, workspace scope, price rules, account migration. Queries: `Zoho Bookings resource workspace capacity`; `Zoho Bookings weekend pricing`; `resource scheduling data model`.
- **Site opportunity:** Existing: scheduling articles. Missing node: **Resource Identity vs Pricing Context**. Article: “One Room, Two Workspaces, Three Prices: Model the Constraint First.” Intent: urgently seeking a solution. Frequency: common.

### Z03 — Migration creates 12,000 records with duplicates

- **Evidence:** [Zoho Community](https://help.zoho.com/portal/en/community/topic/can-i-mass-delete-duplicate-records-accounts), date not exposed; accessed 2026-07-13, CRM migration. Question: “How can exact duplicate accounts be removed in bulk after contacts were imported as accounts?”
- **Complaint:** Find/merge is one-at-a-time and the user has over 12,000 records.
- **Decision / hidden problem:** Repair a mapping error at scale. Hidden problem: module semantics were wrong before import, and remediation capability is much weaker than import capability.
- **AI research:** backup, bulk-delete limits, relationship preservation, dedupe, rollback. Queries: `Zoho CRM mass delete duplicate accounts`; `Zoho migration undo`; `CRM migration module mapping validation`.
- **Site opportunity:** Existing: CRM evaluation portability section. Missing node: **Migration Dry Run and Rollback**. Article: “The Import Worked; the Migration Failed.” Intent: urgently seeking a solution. Frequency: dominant.

### Z04 — Reports duplicate the same record and skew results

- **Evidence:** [Zoho Community](https://help.zoho.com/portal/en/community/topic/zoho-crm-reports-contain-duplicate-records), date not exposed; accessed 2026-07-13, CRM reporting. Question: “Why do reports repeat the exact same record even when the underlying record is not duplicated?”
- **Complaint:** Report totals are skewed and the user needs resolution.
- **Decision / hidden problem:** Restore trustworthy owner reporting. Hidden problem: data integrity and query/report integrity are different failure layers.
- **AI research:** report joins, related lists, grouping, known issues, export comparison. Queries: `Zoho CRM report duplicate rows same record`; `CRM report join fanout duplicates`; `reconcile CRM report to base records`.
- **Site opportunity:** Existing: none. Missing node: **Report Reconciliation**. Article: “A Clean CRM Can Still Produce a Wrong Report.” Intent: urgently seeking a solution. Frequency: common.

### Z05 — Migration wizard skips notes unpredictably

- **Evidence:** [Zoho Community](https://help.zoho.com/portal/en-gb/community/topic/crm-migration), date not exposed; accessed 2026-07-13, ACT-to-Zoho migration. Question: “Why does the migration wizard import some note files and skip others for contacts it already migrated?”
- **Complaint:** Import history reports failed/skipped records without an obvious cause.
- **Decision / hidden problem:** Complete the move without losing relationship history. Hidden problem: row counts alone cannot validate relational and attachment/note completeness.
- **AI research:** supported note schema, parent IDs, error export, retry/rollback, reconciliation. Queries: `Zoho ACT migration notes skipped`; `Zoho migration failed records error file`; `CRM migration completeness reconciliation`.
- **Site opportunity:** Existing: CRM evaluation. Missing node: **Migration Completeness, Not Just Success Status**. Article: “How to Prove Notes and History Survived a CRM Migration.” Intent: urgently seeking a solution. Frequency: dominant.

## Salesforce Stack Exchange (F01-F10)

These are implementation/admin discussions, not service-industry owner forums. They receive lower persona weight but strong diagnostic weight for portability and identity concepts.

### F01 — Merging CRM contacts leaves marketing records behind

- **Evidence:** [Salesforce Stack Exchange](https://salesforce.stackexchange.com/questions/308244/merge-of-duplicate-salesforce-contacts-impact-on-marketing-cloud/308255), 2020-06-03, Salesforce/Marketing Cloud. Question: “What survives in Marketing Cloud after duplicate contacts are merged in CRM?”
- **Complaint:** Histories cannot simply merge; losing contacts may persist and trigger automation.
- **Decision / hidden problem:** Deduplicate without corrupting journeys, counts, or history. Hidden problem: “one customer” has separate identities across systems.
- **AI research:** contact keys, delete process, journey triggers, history retention. Queries: `Salesforce Marketing Cloud CRM merge contact behavior`; `SFMC delete merged contact`; `cross system identity merge`.
- **Site opportunity:** Existing: CRM evaluation. Missing node: **Cross-System Customer Identity**. Article: “Merging a Customer in One System Does Not Merge Them Everywhere.” Intent: informational. Frequency: dominant.

### F02 — Duplicate/contact-key choices affect billing

- **Evidence:** [Salesforce Stack Exchange](https://salesforce.stackexchange.com/questions/401705/duplicate-contacts-pricing-problem-when-i-convert-synchronized-data-extension), 2023-04-18, marketing CRM. Question: “Will converting synchronized data to a sendable extension create another billable contact?”
- **Complaint:** Configuration choices can change billable contact counts.
- **Decision / hidden problem:** Avoid duplicate billing while enabling campaigns. Hidden problem: technical identity is directly monetized.
- **AI research:** subscriber/contact key rules, billing, synchronization. Queries: `SFMC billable contacts synchronized data extension`; `Marketing Cloud contact key pricing`; `CRM identity cost`.
- **Site opportunity:** Existing: none. Missing node: **Identity Architecture as Pricing Architecture**. Article: “When Duplicate Customers Become Duplicate Charges.” Intent: evaluating software. Frequency: common.

### F03 — Billable contacts are double the source counts

- **Evidence:** [Salesforce Stack Exchange](https://salesforce.stackexchange.com/questions/416591/duplicate-contacts-with-marketing-cloud-connect-account-and-contact), 2024-02-02, Salesforce/Marketing Cloud. Question: “Why is All Contacts roughly double Account/Contact source counts?”
- **Complaint:** Account IDs and contact IDs represent the same person as separate billable identities.
- **Decision / hidden problem:** Select a canonical key before more channels are added. Hidden problem: an incorrect key choice scales cost and fragments consent.
- **AI research:** person-account IDs, subscriber key, SMS requirements, cleanup. Queries: `SFMC Account ID vs Contact ID subscriber key`; `Marketing Cloud duplicate contact key cleanup`; `canonical customer identity`.
- **Site opportunity:** Existing: CRM evaluation. Missing node: **Canonical Customer Key**. Article: “Every Client Record Needs a Stable Identity Before Migration.” Intent: urgently seeking a solution. Frequency: dominant.

### F04 — Exporting a million-record duplicate report fails

- **Evidence:** [Salesforce Stack Exchange](https://salesforce.stackexchange.com/questions/236241/report-to-fetch-duplicate-contacts), 2018-10-16, large CRM. Question: “How can duplicate contacts be exported when aggregate queries and bulk API limits conflict?”
- **Complaint:** Standard extraction paths do not handle the diagnostic query at scale.
- **Decision / hidden problem:** Create a reviewable cleanup file. Hidden problem: detecting duplicates at enterprise scale is a reporting architecture problem.
- **AI research:** duplicate record sets, report types, query limits, PII minimization. Queries: `Salesforce duplicate records report type`; `Salesforce aggregate query export limit`; `large CRM dedupe reporting`.
- **Site opportunity:** Existing: none. Missing node: **Data Quality at Scale**. Article: “Can You Export the Evidence Needed to Clean Your CRM?” Intent: urgently seeking a solution. Frequency: common.

### F05 — Duplicate subscribers fragment consent and cost

- **Evidence:** [Salesforce Stack Exchange](https://salesforce.stackexchange.com/questions/276607/deleting-doubled-subscribers-on-marketing-cloud), 2019-09-10, marketing CRM. Question: “How can email-key duplicates be merged/deleted when they are also double-billed and hold separate preferences?”
- **Complaint:** One person has CRM-ID and email-key records with disconnected tracking and consent.
- **Decision / hidden problem:** Clean records while preserving engagement and permissions. Hidden problem: duplicate identity is a compliance, cost, and history problem at once.
- **AI research:** consent migration, subscriber-key change, deletion, support process. Queries: `SFMC change subscriber key support`; `Marketing Cloud duplicate consent records`; `customer identity consent migration`.
- **Site opportunity:** Existing: CRM portability section. Missing node: **Consent-Safe Deduplication**. Article: “Do Not Merge Customer Records Until You Know What Happens to Consent.” Intent: urgently seeking a solution. Frequency: dominant.

### F06 — Legacy implementation continuously creates duplicates

- **Evidence:** [Salesforce Stack Exchange](https://salesforce.stackexchange.com/questions/297087/merge-duplicate-contacts), 2020-03-06, legacy Salesforce implementation. Question: “How can future duplicates be prevented across many insert paths without breaking updates?”
- **Complaint:** Six-year-old custom code creates duplicates; a cleanup alone will not stop recurrence.
- **Decision / hidden problem:** Introduce a single identity rule across old entry points. Hidden problem: multiple write paths mean no single source of truth.
- **AI research:** matching rules, upsert, integration inventory, canonical service. Queries: `Salesforce findDuplicates upsert`; `CRM multiple data entry paths duplicate prevention`; `identity resolution write path inventory`.
- **Site opportunity:** Existing: scheduling scale article conceptually adjacent. Missing node: **One Write Policy for Customer Identity**. Article: “Why CRM Cleanup Fails When Duplicate Creation Continues.” Intent: actively implementing a solution. Frequency: dominant.

### F07 — Bulk merging is not a native one-click operation

- **Evidence:** [Salesforce Stack Exchange](https://salesforce.stackexchange.com/a/70557), 2014-04-14, CRM administration. Question: “Can more than 100 duplicate contact sets be merged automatically instead of one at a time?”
- **Complaint:** Answers point to custom code or third-party tools; the question is closed/old and used only as historical recurrence evidence.
- **Decision / hidden problem:** Reduce manual cleanup safely. Hidden problem: automation increases false-merge blast radius.
- **AI research:** matching confidence, backups, merge limits, audit/undo. Queries: `Salesforce bulk merge contacts official`; `Salesforce duplicate job merge`; `bulk dedupe false positive controls`.
- **Site opportunity:** Existing: none. Missing node: **Safe Bulk Remediation**. Article: “The Faster You Merge, the More Expensive a Wrong Match Becomes.” Intent: informational. Frequency: common.

### F08 — Existing duplicates do not appear in the cleanup list

- **Evidence:** [Salesforce Stack Exchange](https://salesforce.stackexchange.com/questions/411091/existing-data-duplication-clean-up-help), 2023-09-28, CRM admin. Question: “Why do matching rules find possible duplicates during search but not populate the duplicate cleanup report?”
- **Complaint:** Checking every contact manually is impractical.
- **Decision / hidden problem:** Turn detection rules into an actionable backlog. Hidden problem: prevention-time alerts and retrospective cleanup use different artifacts.
- **AI research:** duplicate jobs, record sets, permissions, report types. Queries: `Salesforce create duplicate record sets existing data`; `Salesforce duplicate job report`; `duplicate prevention vs cleanup`.
- **Site opportunity:** Existing: none. Missing node: **Prevention Is Not Remediation**. Article: “A CRM Can Detect a Duplicate and Still Make Cleanup Hard.” Intent: urgently seeking a solution. Frequency: dominant.

### F09 — Repeated imports recreate the same contacts

- **Evidence:** [Salesforce Stack Exchange](https://salesforce.stackexchange.com/questions/70442/data-import-wizard-for-contacts-prevent-duplicates), 2015-03-27, nonprofit CRM. Question: “How can a monthly 2,500-contact CSV update existing contacts instead of recreating them?”
- **Complaint:** Default matching is insufficient; the proposed Data Loader adds installation/training burden for a nontechnical client.
- **Decision / hidden problem:** Establish a repeatable, low-skill update process. Hidden problem: handoff usability is part of data integrity.
- **AI research:** external IDs, upsert, saved mappings, permissions, training. Queries: `Salesforce Data Loader upsert contact external ID`; `Salesforce import wizard duplicate contacts`; `repeatable CRM import runbook`.
- **Site opportunity:** Existing: employee-adoption article. Missing node: **Repeatable Import Operations**. Article: “A Migration Script Is Not a Maintainable Import Process.” Intent: actively seeking a solution. Frequency: common.

### F10 — Merge blocked by relationship complexity

- **Evidence:** [Salesforce Stack Exchange](https://salesforce.stackexchange.com/questions/341519/can-we-by-pass-these-contacts-have-the-same-related-account-open-the-related-a), 2021-04-27, Salesforce admin. Question: “Can duplicate contacts merge without manually removing redundant account-contact relationships?”
- **Complaint:** The safe native constraint creates repetitive manual work.
- **Decision / hidden problem:** Automate cleanup without destroying valid relationships. Hidden problem: a duplicate person can still have multiple legitimate business relationships.
- **AI research:** junction relationships, merge semantics, transaction/rollback, test cases. Queries: `Salesforce merge contacts account contact relationships`; `CRM duplicate merge relationship preservation`; `customer identity multiple accounts`.
- **Site opportunity:** Existing: none. Missing node: **Identity vs Relationship Preservation**. Article: “Two Client Records May Be Duplicate While Their Relationships Are Not.” Intent: actively implementing a solution. Frequency: common.

## Raw-sample limitations

- The sample is purposive, not statistically representative. It is designed to expose recurring operational questions, not estimate prevalence in the full market.
- Reddit and forum posts may contain vendor promotion or incomplete diagnoses. Only observable wording and declared experience were recorded.
- Review platforms mix incentivized, vendor-referred, and unsolicited reviews. Capterra’s source label and Trustpilot’s review label must be rechecked before external quotation.
- Several Zoho pages do not expose original dates in indexed public output. They are excluded from recency-sensitive conclusions.
- Quora could not be read because its public pages were blocked by `robots.txt`; no Quora findings were invented.
- Facebook was not used because no explicitly approved group/session was provided.
- Legal and payroll questions are issue signals only, not legal or compensation advice.
