# Screen Inventory

Each screen is a folder with an `index.html` file. This document lists the actor, purpose, and research question for each one.

## 01 Sign in

Folder: `login/`

Actor: public, teacher, and school head.

Purpose: authenticate and route by role. The account type field is a convenience only. The study's access model assumes the server confirms the role, so the interface must not treat the dropdown as the authorization decision.

Research questions: RQ 2.6, RQ 4.6.

## 02 Teacher overview

Folder: `teacher-home/`

Actor: teacher.

Purpose: show what is due, what is late, the current load, and the next support suggestion on one screen. Support suggestions sit in their own panel with a rule ID so they cannot be read as a score.

Research questions: RQ 1.2, RQ 2.2, RQ 2.5.

## 03 Division overview

Folder: `admin-dashboard/`

Actor: school head.

Purpose: the predictive analytics dashboard. It shows recorded workload distribution and completion trend, then predicted at-risk tasks in a separate panel marked as predicted.

Research questions: RQ 2.4, RQ 3.4.

## 04 Workload and schedule

Folder: `workload/`

Actor: teacher.

Purpose: record and schedule teaching load in structured fields. Two tabs separate the load records from the weekly timetable. The form warns that overlapping section, room, or teacher schedules block a record until resolved.

Research questions: RQ 2.1.

## 05 Tasks

Folder: `tasks/`

Actor: teacher.

Purpose: the working list of teaching-related tasks with computed deadline state. The status filter and search work. Status is written as a word, not a colored badge, so meaning does not depend on color.

Research questions: RQ 1.2, RQ 2.2.

## 06 Efficiency

Folder: `efficiency/`

Actor: school head.

Purpose: descriptive analytics on completion rate, processing time, on-time submission, and overdue count. The screen states what the numbers do not measure, matching the scope limitation on teaching effectiveness.

Research questions: RQ 2.3, RQ 3.3.

## 07 Predictions

Folder: `predictions/`

Actor: school head.

Purpose: predicted delay risk with three explicit data states. The tabs switch between sufficient data, insufficient data, and synthetic demo. The insufficient state hides the score rather than showing a low-confidence number.

Research questions: RQ 2.4, RQ 3.4.

## 08 Support recommendations

Folder: `recommendations/`

Actor: school head and Faculty Development Coordinator.

Purpose: rule-based support suggestions, each shown with its rule ID and the condition that fired. The school head accepts, defers, or dismisses. Nothing applies automatically.

Research questions: RQ 2.5, RQ 3.5.

## 09 Users and access

Folder: `users/`

Actor: school head and ICT Coordinator.

Purpose: account list, permission matrix, and audit log. The matrix is the single statement of what each role can do, and the note says capabilities are checked on the server for every request.

Research questions: RQ 2.6, RQ 4.6.

## 10 Reports

Folder: `reports/`

Actor: school head.

Purpose: preview generated workload and completion reports, run an accuracy check against reference records, then export. A mismatch blocks the verified state.

Research questions: RQ 3.3, RQ 4.1.

## Teacher flow

1. Sign in.
2. Read deadlines, status, and load on the overview.
3. Work the task list and update status.
4. Review or adjust the teaching load.
5. Act on a support suggestion.
6. Sign out.

## School head flow

1. Sign in.
2. Read the division overview.
3. Check the prediction data state before trusting a risk score.
4. Review efficiency and support recommendations.
5. Verify report accuracy and export.
6. Manage accounts and permissions.
