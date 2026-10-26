# Site Intelligence privacy basis and analytics choice

Status: implemented as worldwide opt-in by default. Last reviewed: 2026-10-25.

This is an engineering and operating record, not legal advice. It documents the deployed mechanisms, the official sources reviewed, the conditions that can change the analysis, and the conservative operating model selected while Visaxa has a worldwide public audience and no reliable jurisdiction gate.

## Actual browser-side collection

When both Site Intelligence feature flags are enabled, the browser client is capable of sending these optional editorial events to the first-party endpoint `/api/site-intelligence/events`:

- rendered page and client-side route views;
- internal, next-article, product-CTA, and external-reference clicks;
- a research-question copy event, but only after the Clipboard API reports success.

The event body can contain the normalized source path, article slug, stable editorial link or question identifier, destination path or external hostname, coarse device category derived from viewport width, a bounded campaign label, and a broad referrer category. It does not contain copied text, form content, a cookie identifier, a generated visitor identifier, or the full external referrer URL.

Delivery uses `navigator.sendBeacon` when available and a keepalive `fetch` fallback. The application endpoint aggregates accepted events by day in Redis. Vercel and Upstash may separately process request-level network data, including IP addresses, to deliver, secure, and operate their services; that processor activity is not converted into a Visaxa analytics identifier or stored in the application aggregates.

## Choice and storage mechanism

Optional analytics are disabled until the visitor takes the affirmative **Allow analytics** action.

When client-side analytics is available and no valid preference exists, a compact non-blocking first-visit panel presents **Allow analytics** and **Decline** with equal visual prominence. The panel is not rendered until browser storage has been resolved, so it does not flash an incorrect state during hydration. It is not shown when the deployment disables client analytics or when preference storage cannot be read safely.

The choice is stored in browser `localStorage` under `visaxa:analytics-consent:v1`. Its complete allowed value is either `granted` or `denied`. No preference record is written before the first choice. The site performs one temporary write-and-remove capability check before offering the choice; that fixed probe contains no visitor data and is not retained. The preference value has one purpose: remembering whether the browser may send optional Site Intelligence events. It contains no timestamp, account data, random token, device identifier, or event history, and it is not transmitted as an analytics event.

The Privacy page and footer expose the same settings. Choosing **Decline** in the first-visit panel or **Keep analytics off** in Settings stores the same denied state. Choosing **Keep analytics off** after a grant is withdrawal: subsequent page-view, navigation, click, and copy events are blocked immediately. Refresh and client-side navigation re-read or retain the same preference. If storage is unavailable, invalid, or cleared, the system fails closed to the unset/off state. Consent-control button presses are not analytics events.

The local-storage value itself is a storage/access technology. The operating justification is limited to remembering and enforcing the choice explicitly requested by the user. It must not be reused for analytics, identity, attribution, or any other purpose.

## Why worldwide opt-in is the operating model

The site is publicly reachable without a reliable audience or residency boundary. The reviewed rules do not support one worldwide conclusion that first-party, aggregate, cookieless analytics may always run on an opt-out basis.

In the UK, the ICO's final 2026 guidance says PECR applies beyond cookies to scripts, navigational tracking, and web storage, and that non-exempt storage/access technologies must not be pre-enabled. In the EU/EEA, Article 5(3) of the ePrivacy Directive and EDPB Guidelines 2/2023 likewise address storing information or accessing information on terminal equipment; implementation and exemptions still depend on national law. The current client observes browser-side navigation and interaction state through a script, and the exact application of every national exemption to this minimal first-party design has not been established.

Canada requires meaningful, accessible choice where processing is not necessary, although the appropriate form of consent depends on sensitivity, reasonable expectations, and context. US state laws are not uniform: applicability thresholds, definitions of personal data, and special opt-outs for sale, sharing, or targeted advertising vary. This implementation does not sell data, use targeted advertising, or create cross-site profiles, but Visaxa's threshold status and every visitor's jurisdiction have not been established.

Opt-in therefore operates as a conservative product control, not as a claim that consent is the only possible lawful basis in every jurisdiction. It avoids collecting optional events before an informed action while a jurisdiction-specific legal assessment remains incomplete.

## Jurisdiction conditions and uncertainties

| Jurisdiction | Official basis reviewed | Condition relevant here | Uncertainty / operator action |
|---|---|---|---|
| UK | ICO final Storage and Access Technologies guidance (29 Apr 2026); UK PECR guidance | Scripts, navigational tracking, and local storage can fall within regulation 6. Non-essential use should not start before valid consent; withdrawal must be effective. | Whether a narrow statutory analytics exception could apply to every element of the current implementation requires UK-specific legal review. Opt-in avoids relying on that exception. |
| EU/EEA | ePrivacy Directive 2002/58/EC art. 5(3); EDPB Guidelines 2/2023 v2.0 (16 Oct 2024); CJEU C-673/17 | Consent is generally required before non-exempt storage/access to terminal equipment; rules are technology-neutral. National transposition and enforcement matter. | No country-by-country review has been completed. Do not switch to regional opt-out without one. |
| Canada | Office of the Privacy Commissioner of Canada, Guidelines for obtaining meaningful consent | People should receive clear yes/no choices for non-necessary collection and be able to reconsider or withdraw. | Federal/provincial applicability and whether event fields are personal information in context require fact-specific review. |
| California | California Privacy Protection Agency, CCPA statute/regulations and current thresholds | CCPA obligations depend on whether Visaxa is a covered business and on the processing purpose. Sale/share and targeted-advertising opt-outs are distinct from basic first-party measurement. | Revenue/data-volume facts and coverage have not been documented here. No claim of exemption is made. |
| Colorado | Colorado Attorney General, Colorado Privacy Act FAQ and UOOM guidance | Covered controllers must honor recognized universal opt-out mechanisms for sale and targeted advertising. Consent is required in specified circumstances. | Current analytics is neither designed for sale nor targeted advertising, but coverage facts remain unverified. GPC recognition should be reviewed before adding either purpose. |
| Other jurisdictions | Not comprehensively reviewed | Privacy, communications, consumer, and device-access rules vary. | Worldwide opt-in is a risk-reduction default, not proof of compliance everywhere. Obtain counsel before broadening collection or changing purposes. |

## Validity conditions for the choice

- Analytics remains optional; refusing it does not restrict access to the site.
- The allow and reject actions are both plainly available in the same control.
- No optional event is sent before affirmative permission.
- The purpose and event categories are described before or alongside the control.
- Withdrawal is available from the Privacy page and every-page footer and blocks later optional events.
- A new purpose, new event class, advertising use, cross-site use, persistent identifier, or new processor requires a new privacy review and potentially fresh consent.
- The server feature flag remains a separate kill switch. Browser consent does not authorize collection when the server-side system is disabled.

## Official sources

Accessed 2026-10-25:

1. UK Information Commissioner's Office, [Guidance on the use of storage and access technologies](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/), final guidance updated 29 April 2026.
2. UK Information Commissioner's Office, [What are storage and access technologies?](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/what-are-storage-and-access-technologies/).
3. UK Information Commissioner's Office, [How do we manage consent in practice?](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/how-do-we-manage-consent-in-practice/).
4. European Data Protection Board, [Guidelines 2/2023 on Technical Scope of Article 5(3) of the ePrivacy Directive](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-22023-technical-scope-art-53-eprivacy-directive_en), final version 16 October 2024.
5. EUR-Lex, [Directive 2002/58/EC](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32002L0058), Article 5(3).
6. Court of Justice of the European Union, [Case C-673/17, Planet49](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A62017CJ0673), judgment 1 October 2019.
7. Office of the Privacy Commissioner of Canada, [Guidelines for obtaining meaningful consent](https://www.priv.gc.ca/en/privacy-topics/privacy-for-businesses/appropriate-handling-of-personal-information/collecting-personal-information-and-consent/consent/gl_omc_201805/).
8. California Privacy Protection Agency, [Law and regulations](https://cppa.ca.gov/regulations/) and [current monetary thresholds](https://cppa.ca.gov/regulations/cpi_adjustment.html).
9. Colorado Attorney General, [Colorado Privacy Act FAQ](https://coag.gov/resources/colorado-privacy-act/) and [Universal Opt-Out guidance](https://coag.gov/opt-out/).

## Remaining legal and operating questions

1. Confirm the entity, operating location, intended audience, and actual volume/revenue facts used for jurisdictional applicability.
2. Obtain qualified privacy review before replacing worldwide opt-in with any regional opt-out or exemption-based model.
3. Reassess consent and notice before adding a new event, visitor identifier, advertising/remarketing, session replay, third-party analytics SDK, or new processor.
4. Confirm the processor terms and configured retention at production activation; this document does not establish Vercel or Upstash's complete request-log retention.

