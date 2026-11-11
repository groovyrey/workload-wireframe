# Traceability Matrix

The matrix shows that every research question and every requirement domain in the study has a place in the wireframe. Use it during the proposal defense to answer "where is this in the system."

## Research questions to screens

| Research question | What it asks | Where it is represented |
| --- | --- | --- |
| RQ 1 | Existing challenges in workload management | Overview stats, deadline list, task list, support suggestions |
| RQ 2 | Functional and nonfunctional requirements | All ten screens, one domain each on the workload, tasks, efficiency, predictions, and support screens |
| RQ 3 | Technical performance of the developed system | Reports accuracy check, predictions metrics, recommendation rules, functional coverage of each screen |
| RQ 4 | ISO/IEC 25010 software quality | Interaction and reliability patterns across screens, security on the access screen |

## RQ 2 domains to screens

| Requirement domain | Screen | Key elements |
| --- | --- | --- |
| 2.1 Workload recording and scheduling | Workload and schedule | Load table, timetable, structured form, conflict warning |
| 2.2 Automated task monitoring and notification | Tasks, Teacher overview | Task table, computed days left, notification list, deadline reminders |
| 2.3 Teaching-related task efficiency analytics | Efficiency | Completion rate, processing time, on-time share, weekly chart |
| 2.4 Predictive analysis of task completion delays | Division overview, Predictions | Risk list, risk probability, top factor, model status |
| 2.5 Faculty support recommendation generation | Support, Teacher overview | Rule ID, triggering condition, accept or defer |
| 2.6 Data security and user access management | Sign in, Users and access | Role check, permission matrix, audit log, session rule |

## RQ 3 indicators to interface evidence

| Indicator | Where the wireframe prepares for it |
| --- | --- |
| Functional test case pass rate | Each screen lists a small set of core actions that become test cases |
| Average system response time | Filters, tabs, and generated reports define the timed actions |
| Report accuracy | Reports screen compares fields with reference records and shows a verified or mismatch state |
| Predictive model performance | Predictions screen reports precision, recall, F1, and ROC-AUC on a hold-out set |
| Recommendation correctness | Support screen ties each suggestion to a rule ID and expected output |

## RQ 4 ISO/IEC 25010 characteristics to screens

| Characteristic | How the wireframe addresses it |
| --- | --- |
| Functional suitability | Every screen maps to a named requirement domain |
| Performance efficiency | Charts and tables are paginated or summarized, not loaded as raw records |
| Compatibility | Responsive layout and standard inputs, no device-specific control |
| Interaction capability | Plain labels, visible status words, one primary action per screen |
| Reliability | Explicit empty states, conflict warnings, and data-state handling |
| Security | Role-based access, permission matrix, audit log, session expiry |

## Scope boundaries carried into the interface

- Predictions are labeled as estimates and never merged with recorded counts.
- Synthetic data is labeled and never presented as accuracy.
- Recommendations are rule-based and never applied automatically.
- Efficiency metrics state that they are not a measure of teaching quality.
- No student-level data appears anywhere.
