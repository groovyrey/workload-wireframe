# Evaluation and Testing

The wireframe is a design artifact, not evidence of system performance. It does, however, define the actions and states that the later technical and quality evaluation will measure. This document states that link so the proposal does not present design as a result.

## Supporting Research Question 3

Research Question 3 measures five things. Each has a place in the wireframe.

| Indicator | What the wireframe defines | What the evaluation will measure |
| --- | --- | --- |
| Functional test case pass rate | Core actions per screen, for example record load, save task, generate report | Passed test cases divided by executed test cases |
| Average system response time | Timed user actions such as filtering tasks and generating a report | Mean elapsed time across repeated trials |
| Report accuracy | Fields in the report preview | Matched fields divided by fields checked against reference records |
| Predictive model performance | Risk states and the metrics panel | Precision, recall, F1-score, and ROC-AUC on a hold-out set, only when data allows |
| Recommendation correctness | Rule IDs and expected output per scenario | Correct recommendations divided by evaluated scenarios |

The reports screen already shows the intended accuracy check: 58 of 60 fields matched, which is 96.7 percent. That number is a placeholder to demonstrate the state, not a result from testing.

The predictions screen shows the intended metrics panel and the insufficient-data fallback. If there is not enough labeled history, the interface hides the score and the study will not report predictive accuracy as an established finding, consistent with the scope section.

## Supporting Research Question 4

Research Question 4 measures six ISO/IEC 25010 characteristics. The wireframe sets expectations for each.

- Functional suitability. Every screen maps to a requirement domain in the traceability matrix.
- Performance efficiency. Data is shown as summaries and charts, and the timed actions are defined.
- Compatibility. The same markup works at desktop and mobile width with standard inputs.
- Interaction capability. Plain labels, visible status words, and one primary action per screen.
- Reliability. Empty states, conflict warnings, and data-state handling are designed, not left to chance.
- Security. Role-based access, a permission matrix, an audit log, and session expiry are specified.

## Planned usability session

The study uses ten public senior high school teachers selected through purposive sampling. The wireframe supports the needs assessment and the software quality evaluation in that session.

Suggested procedure, consistent with the methodology chapter:

1. Secure division and school approval and written informed consent.
2. Explain the purpose, the voluntary nature, and the data privacy measures.
3. Give a short orientation to the system.
4. Ask each teacher to complete representative tasks: record a teaching load, update a task, read a support suggestion, and find an upcoming deadline.
5. Observe completion and collect the structured questionnaire for the applicable software quality characteristics.
6. Ask optional open questions and group the answers into recurring concerns.

## What to record during the session

- Task completion and any point where the participant pauses or asks for help.
- Comments on labels, navigation, and the clarity of predicted versus recorded information.
- Ratings for interaction capability, reliability, and security perception.
- Suggested improvements.

## Ethics reminders

The session collects professional information from teachers, so the Data Privacy Act of 2012 applies. Participation is voluntary, refusal has no professional consequence, records are de-identified with codes such as T01, and identifiable data is stored separately from responses.

## What this document does not claim

It does not claim that the wireframe improved workload management, teaching efficiency, or learning outcomes. Those claims are outside the scope of the study and would require a separate longitudinal evaluation.
