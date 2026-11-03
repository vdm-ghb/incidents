# Bow-Tie and Causal Theme Coding Protocol

## Status of generated analysis

`bowtie_full.json` and `causal_tags_full.json` are candidate-retrieval outputs. They classify wording in `data/incidents.js`; they are not source-verified causal analyses. A generated relationship must not be used in HSSE assurance, performance reporting, comparative risk ranking, or decision-making until an analyst has accepted it using this protocol.

## Evidence hierarchy

1. Formal investigation, regulator, flag-state, or court finding.
2. Contemporaneous operator or contractor record that identifies its author and evidence base.
3. Peer-reviewed technical analysis that distinguishes observations from reconstruction.
4. Credible secondary reporting, used only for contextual facts and explicitly labelled.

Lessons, actions and recommendations are not evidence that a control existed, failed, or would have prevented an event. An absence of a keyword-derived candidate is not evidence of absence.

## Acceptance record

For every accepted relationship, record the incident ID, relationship type, coded element, causal stage, exact source title, page/section/paragraph locator, verbatim supporting passage, evidence tier, analyst name, review date and rationale. Record `rejected` or `insufficient_evidence` rather than forcing a classification.

Use these relationship types without mixing them:

- `observed_cause`: a documented mechanism preceding the top event.
- `barrier_failed_or_absent`: a documented control failure or absence linked to the scenario.
- `barrier_present_performance_unknown`: a documented control exists but its performance cannot be established.
- `recovery_constraint`: a documented post-top-event limitation to mitigation or rescue.
- `lesson`: a transferable learning point, not evidence of historical causation.
- `recommended_action`: a prospective measure, not an historical barrier.

## Bow-tie decision rules

- Define the top event as the first evidenced loss of control, not the first keyword occurrence.
- Code threats only when they precede and plausibly contribute to that top event.
- Place downstream loss escalation, evacuation difficulty, rescue limitations and damage after the top event.
- Do not mark a barrier effective unless the source expressly supports its availability and performance in the scenario.
- Treat uncertainty language, reconstructed mechanisms and contradictory sources as `insufficient_evidence` unless the accepted coding states the limitation.

## Causal-theme decision rules

- A match in `what_went_wrong` is a review candidate, not a proven cause.
- A match only in `lessons_learned` or `actions` is a learning theme and must never be counted as a causal occurrence.
- Co-occurrence is a retrieval signal only. It does not establish direction, common cause or relative importance.
- Do not compare discipline frequencies unless denominators, source quality and coding completeness have been reviewed.

## Research priority

Start with fatal and high-consequence records that have retained primary evidence, including Seacrest, Bohai No. 2, Usumacinta, Glomar Java Sea, Thunder Horse, SEACOR POWER, Skandi Pacific and the ONGC Tauktae incidents. Their source files and detailed evidence notes are retained under `background files/`. Review candidates one incident at a time; do not bulk-accept keyword outputs.