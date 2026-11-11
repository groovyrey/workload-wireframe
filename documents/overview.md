# Wireframe Overview and Connection to the Proposed Title

## The study in one paragraph

The proposed study is titled "Development and Evaluation of an AI-Driven Faculty Workload Management and Support System with Predictive Analytics Dashboard for Public Senior High School Teachers." It is set in the Schools Division of the City of San Jose del Monte, Bulacan, Region III. The study designs, develops, tests, and evaluates one system for public senior high school teachers, and it uses the Technology Acceptance Model as a theoretical guide while evaluating technical performance and ISO/IEC 25010 software quality.

## What this wireframe is

This is a low-fidelity, clickable wireframe of that system. It is not the finished application and it does not contain real teacher data. It exists to settle structure, navigation, screen responsibilities, and the placement of recorded data versus predicted data before any visual design or code is committed.

It covers the six requirement domains named in Research Question 2:

1. Faculty workload recording and scheduling.
2. Automated task monitoring and notification.
3. Teaching-related task efficiency analytics.
4. Predictive analysis of task completion delays.
5. Faculty support recommendation generation.
6. Data security and user access management.

It supports the four research questions:

1. Existing challenges in workload management.
2. Functional and nonfunctional requirements.
3. Technical performance of the developed system.
4. Software quality under ISO/IEC 25010.

## How it connects to the title

The title names three things that must appear in the product:

- Faculty workload management. The workload screen records and schedules teaching load, which is the data source for everything else.
- A support system. The overview and the support screen turn recorded workload into suggestions a school head can act on.
- A predictive analytics dashboard. The division overview and the predictions screen present delay risk, with the prediction kept separate from recorded figures.

If a screen does not serve one of those three ideas, it is not in the set. That rule is why there is no general messaging, no student records, and no teacher rating page. The scope section of the study says the system is decision support, not a performance evaluation tool, and the interface follows that boundary.

## Actors

The wireframe has two working actors.

- Teacher. Records own workload, monitors own tasks, sees own support suggestions. Cannot view other faculty.
- School head. Views division workload, predictions, efficiency, support recommendations, reports, and access control.

The study also names Faculty Development Coordinators and ICT Coordinators. In the wireframe they are roles inside the same access model, not separate interfaces. Their capabilities appear in the permission matrix on the users and access screen.

## What is deliberately left out

- No final visual design, color system, or brand assets.
- No working database or authentication.
- No real or synthetic teacher data stored in the project.
- No student-level data.
- No automatic action on a recommendation. A human accepts, defers, or dismisses.

These exclusions match the scope and limitations of the study.
