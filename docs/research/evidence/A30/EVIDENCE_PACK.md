# A30 Evidence Pack — Classify One Surviving Software Discrepancy

Access date: **2026-09-19**

Status: **COMPLETE FOR DRAFTING WITH KNOWN LIMITATIONS**

## Evidence boundary

No salon account, support case, product version, or Visaxa capability was tested. Official product documentation supports documented conditions only. The diagnostic sequence is editorial synthesis, not an audit standard or guarantee of root-cause identification.

## Source register

| ID | Source | Type | Supports | Does not support | Confidence |
| --- | --- | --- | --- | --- | --- |
| A30-S01 | [GOV.UK, Test and Learn](https://www.gov.uk/government/publications/the-magenta-book/test-and-learn-html), updated 2026-05-15 | Government evaluation guidance | explicit challenge statements, critical assumptions, targeted small tests, predetermined decision criteria, documented changes | salon-specific troubleshooting or vendor diagnosis | HIGH |
| A30-S02 | [GOV.UK, Contextual research and observation](https://www.gov.uk/service-manual/user-research/contextual-research-and-observation), published 2017-09-01 | Government service guidance | observing real work, data, documents, devices, barriers, and workarounds | causal proof from observation alone | HIGH |
| A30-S03 | [Microsoft Dynamics 365, Help us help you](https://learn.microsoft.com/en-us/dynamics365/get-started/support/support-scope) | Official support guidance | retain steps to reproduce, expected outcome, actual outcome; expectation itself can be wrong | that Microsoft’s support process is universal | HIGH for evidence packet |
| A30-S04 | [Atlassian Incident Management Handbook](https://www.atlassian.com/dam/jcr%3Af79066c7-2877-4b1d-8779-bb0af946b59a/Atlassian-incident-management-handbook-.pdf) | Official operational methodology | separate proximate and root causes; select change point that prevents recurrence | a salon-specific root cause | MEDIUM-HIGH |
| A30-S05 | [NIST SP 800-61 Rev. 3](https://csrc.nist.gov/pubs/sp/800/61/r3/final), published 2025-04-03 | Government cybersecurity guidance | preparation, detection, response, recovery and improvement require retained evidence and coordinated learning | ordinary salon application support rules | HIGH for incident evidence boundary |
| A30-S06 | [Fresha, Manage permission roles](https://www.fresha.com/help-center/knowledge-base/team/100692-manage-permission-roles) | Official product documentation | role assignment and edits can change access immediately | that a real access problem was caused by a role | HIGH, time-sensitive |
| A30-S07 | [Fresha, Set up new appointment assignment](https://www.fresha.com/help-center/knowledge-base/calendar/102178-set-up-new-appointment-assignment) | Official product documentation | documented configuration can intentionally change appointment assignment behavior | that the behavior is suitable for every salon | HIGH, time-sensitive |
| A30-S08 | [Square, Add and manage bookable team members](https://squareup.com/help/us/en/article/5350-create-staff-member-profiles-for-square-appointments) | Official product documentation | bookability, services, hours, permissions, and dashboard access are separate conditions | a real salon’s configuration or outcome | HIGH, time-sensitive |
| A30-S09 | [Square Appointments pricing](https://squareup.com/us/en/appointments/pricing) | Official pricing/plan documentation | capabilities may vary by current plan and commercial conditions | absence outside the listed scope or future availability | HIGH for current US plan matrix; volatile |
| A30-S10 | [Square Developer, Webhooks overview](https://developer.squareup.com/docs/webhooks/overview) | Official developer documentation | delivery may be retried or duplicated and depends on acknowledgement | that a salon uses webhooks or experienced a delivery failure | HIGH for documented integration behavior |
| A30-S11 | [Square Statuspage history](https://square2.statuspage.io/history) | Official incident record | disclosed platform incidents can provide context | complete incident coverage or account-specific cause | MEDIUM-HIGH |
| A30-S12 | [GOV.UK, Quality assurance: testing your service regularly](https://www.gov.uk/service-manual/technology/quality-assurance-testing-your-service-regularly), updated 2017-06-28 | Government service guidance | functional testing compares behavior with expected operation; different tests serve different risks | a universal cadence or salon control set | HIGH |

## Research finding

The broad workflow/configuration/software diagnosis is already owned by A10. A30 begins after that work and A29's record reconciliation. “Configuration” still mixes data, permissions, integrations, device/location conditions, and settings; “platform problem” still mixes entitlement, designed limitation, and incorrect behavior. The evidence supports five bounded classifications:

1. local-condition mismatch;
2. entitlement boundary;
3. designed-fit boundary;
4. possible defect/incident after documented prerequisites and reproduction;
5. unknown when evidence cannot distinguish the remaining explanations.

## Claim classification

### DOCUMENTED FACT

- Support evidence commonly distinguishes expected from actual outcomes and asks for reproduction steps (S03).
- Observation can reveal how work differs from intended design but does not prove cause alone (S02).
- Permissions and configuration can materially change available actions or appointment behavior in documented products (S06–S08).
- Current plan matrices can place capabilities behind commercial conditions (S09).
- Integration delivery can retry or duplicate events (S10).
- Public status history records disclosed incidents but is not complete account-specific proof (S11).

### METHODOLOGICAL INFERENCE

- Freeze one case before testing possible remedies.
- Treat agreed rule, ordinary execution/training, basic configuration, and basic access as prerequisite exclusions rather than A30 conclusions.
- Change one plausible condition at a time where safe.
- Treat designed-but-unsuitable behavior separately from incorrect behavior.
- A reproducible divergence after prerequisites supports escalation but does not prove internal root cause.

### HYPOTHETICAL ONLY

- A completed $120 salon visit remains BOOKED.
- A role cannot perform a required status change.
- A setting or documented manual rule explains the result.
- A plan boundary prevents an otherwise documented capability.

### RECOMMENDATION

- Retain event, expected/observed outcome, time, user/role, data, configuration, account/plan/region, location/device where relevant, integration context, documentation version/access date, consequence, and reproduction result.
- Contain material client or financial harm before diagnosis, while preserving evidence.
- Escalate with a falsifiable case rather than “the software did something weird.”

## Unsupported claims excluded

- The five-part model is a universal standard.
- One successful repeat proves permanent cause.
- Missing documentation proves missing capability.
- A plan upgrade will solve a diagnosed problem.
- A reproducible discrepancy proves source-code defect.
- Any named vendor is reliable, unreliable, better, or worse.
- Visaxa currently provides diagnostic, audit, configuration, or remediation capabilities.

## Evidence gaps

- No first-party salon case.
- No cross-vendor controlled test.
- No evidence establishing diagnostic prevalence.
- No universal threshold for reproduction count or review duration.
- No authoritative Visaxa capability matrix.
- Current vendor plan, permission, and configuration details require refresh before later reuse.

## Verdict

Evidence is sufficient for a cautious salon-owner diagnostic method and clearly scoped examples.

**READY TO DRAFT WITH KNOWN LIMITATIONS.**
