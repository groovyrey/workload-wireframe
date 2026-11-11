# Design Decisions

## Low fidelity on purpose

The set is grayscale with hairline borders and hatched placeholders. Color, imagery, and brand are undecided, so adding them now would invite debate about taste instead of structure. The one accent color marks rule IDs, active tabs, and the current navigation item. It does not carry meaning on its own.

## One action per screen

Each screen has a single primary button in the top right. Teacher screens act on personal work. School head screens read division data or export it. Splitting read and write this way keeps permissions obvious in the interface and in the server rules that follow.

## Recorded data and predicted data never share a surface

This is the most important decision in the set. On the division overview, recorded charts have no model output, and the at-risk panel is marked predicted. On the predictions screen, the risk column is explicitly labeled "predicted, not recorded." The scope section of the study says the system must distinguish recorded task information from predicted outcomes to prevent misleading interpretation, so the layout enforces it.

## Three data states for prediction

The predictions screen has three tabs: sufficient data, insufficient data, and synthetic demo. The insufficient state removes the score entirely instead of showing a low-confidence number. The synthetic state is labeled as a demonstration only. This follows the scope section, which says synthetic records are not evidence of predictive accuracy under real conditions.

## Status is written, not colored

Task state is written as Pending, In progress, Completed, or Overdue. Color is secondary. A teacher on a low-end phone or a printed report still understands the state. This also keeps the wireframe usable for respondents who may be color blind.

## Recommendations show their reason

Every support suggestion carries a rule ID and a sentence naming the condition that fired. The school head accepts, defers, or dismisses. Nothing applies automatically. This keeps the system in a decision-support role, which the study repeats in the scope, significance, and definition of terms.

## Efficiency is framed carefully

The efficiency screen gives plain definitions for completion, processing time, and on-time submission, and states that they do not measure instructional effectiveness or overall teacher performance. Load is shown beside completion so a lower rate is not read without context.

## Access is a rule, not a hidden menu

The permission matrix on the users and access screen is the single statement of what each role can do. The note says capabilities are checked on the server for every request, not only hidden in the interface. This matches Research Question 2.6 and the security characteristic in Research Question 4.

## Responsive without a separate design

The shell keeps the sidebar on desktop and turns it into an off-canvas drawer below 900 pixels, opened by a hamburger button. The drawer keeps the same icons and labels and holds the role switch on mobile, closes with the close button, the overlay, or Escape, and restores focus to the button. Stat rows and two-column layouts stack. The timetable compresses but stays readable. Teachers are likely to use phones, and administrators desktops, so both are handled from the same markup.

## Folder per screen

Each screen is a folder with an index file, for example `tasks/index.html`. Shared styles live in `assets/css` and shared behavior in `assets/js`. This keeps navigation predictable and lets a reviewer open any screen directly without a build step.

## What the wireframe does not decide

- Final typography, color, and imagery.
- The database schema.
- The predictive algorithm.
- Authentication implementation.

Those belong to development and technical evaluation, not to the wireframe.
