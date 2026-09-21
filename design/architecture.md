# Technology Governance Assessment and Prioritization Architecture

## Purpose

This document describes the architecture of the Technology Governance Assessment and Prioritization process developed for the MSIT 5910 Capstone.

The solution is intended to help small and growing organizations determine which technology governance practices are appropriate for their circumstances and how those practices should be prioritized for implementation.

The architecture represents a structured process rather than assuming the development of a conventional software application.

## Architecture Overview

The process begins by identifying the organization's existing technology governance practices. These practices are compared with technology governance practices identified from eight core literature sources.

Existing organizational practices and literature-based practices that are not currently represented are assessed using organizational factors. The assessment produces scores and priority rankings based on criteria established by the organization.

Literature-based practices that are appropriate for the organization are added to the organization's practice list. The resulting practice list is then assessed for implementation feasibility based on organizational resources and constraints.

Practices that are not currently implementable are deprioritized. The reason for deprioritization is recorded in the assessment record for traceability.

Feasible practices are organized into an implementation roadmap. The roadmap contains the rank, practice, and description of each practice.

Implementation, evaluation, reassessment, and adaptation occur after the roadmap has been established.

## Process Flow

The process consists of the following stages:

1. **Identify Existing Practices**
   - Document the organization's existing technology governance practices, including informal practices where applicable.

2. **Compare Existing and Literature-Based Practices**
   - Compare the organization's existing practices with technology governance practices identified from the eight core literature sources.
   - Identify practices that are already represented and literature-based practices that are not currently represented.

3. **Assess Practices Using Organizational Factors**
   - Assess existing practices and literature-based practices under consideration against organizational factors.
   - Apply the organization's selected weights or point values.

4. **Score and Prioritize Practices**
   - Calculate the assessment score for each practice.
   - Assign a priority category according to the organization's established thresholds.

5. **Select Practices and Assess Feasibility**
   - Add appropriate literature-based practices to the organization's practice list based on the assessment and priority results.
   - Assess whether the resulting practices can realistically be implemented using available organizational resources and capabilities.
   - Practices that are not currently implementable are deprioritized and the reasons are recorded.

6. **Maintain the Assessment Record**
   - Preserve assessment results, scores, priority decisions, feasibility findings, and reasons for inclusion, exclusion, or deprioritization.
   - Maintain traceability of decisions made during the assessment and prioritization process.

7. **Develop the Implementation Roadmap**
   - Organize feasible practices according to implementation order.
   - Provide the rank, practice, and description for each practice.

8. **Implement Practices**
   - Implement practices according to the established roadmap.

9. **Evaluate Implementation**
   - Determine whether each practice was implemented.
   - Identify implementation issues.
   - Examine why issues occurred.
   - Consider whether additional organizational support could have helped.
   - Identify needed improvements.

10. **Reassess and Adapt**
    - Reassess the organization's technology governance practices when appropriate or when significant organizational circumstances change.
    - Use the previous assessment record and roadmap as a starting point.
    - Update practices, priorities, feasibility decisions, and the roadmap when warranted.

## Assessment Record and Traceability

The Assessment Record is a supporting component of the architecture rather than a separate stage in the decision process.

The record preserves the reasoning behind decisions made during assessment, prioritization, and feasibility evaluation. It may include:

- Practices assessed
- Organizational factors considered
- Scores
- Priority rankings
- Selection decisions
- Feasibility findings
- Reasons for inclusion or exclusion
- Reasons for deprioritization
- Relevant notes and observations

Maintaining this record allows an organization to trace how a practice progressed from assessment through prioritization and feasibility to the final roadmap.

The record also provides a starting point for future reassessment rather than requiring the organization to repeat the entire process from the beginning.

## Organizational Factors

The assessment uses organizational factors as an assessment lens for determining the relevance and priority of technology governance practices.

The factors include:

- Ability to remain in operation
- Mission and vision
- Goals and objectives
- Customers
- Resources and capabilities
- Technology orientation
- Current governance
- External environment

These factors are used to evaluate practices in relation to the organization's circumstances. They are not themselves technology governance practices.

## Feasibility Assessment

Priority and feasibility are treated as separate parts of the process.

A practice may receive a priority ranking during the assessment, but it must still be evaluated for implementation feasibility.

Feasibility may consider factors such as:

- Funding and budget
- Staffing
- Expertise
- Technology and infrastructure
- Time
- Other relevant organizational resources and constraints

When a practice is determined to be not currently implementable, it is deprioritized for current implementation. The reason is recorded in the Assessment Record for traceability, and the practice is not included in the current implementation roadmap.

## Implementation Roadmap

The implementation roadmap contains three fields:

| Rank | Practice | Description |
|------|----------|-------------|
| 1 | Practice A | What the organization needs to do |
| 2 | Practice B | What the organization needs to do |

The roadmap communicates the order in which feasible practices should be implemented.

Implementation, evaluation, and reassessment are not included as roadmap columns. They are subsequent activities in the overall process.

## Reassessment and Adaptation

The process is intended to support reassessment as organizational circumstances change.

Significant changes may include changes in:

- Organizational goals
- Resources and capabilities
- Technology
- Customers
- Laws or regulations
- Competition
- Economic or other external conditions

The organization determines when reassessment is appropriate. If no significant change has occurred, the organization does not necessarily need to repeat the entire assessment process.

When reassessment is warranted, the previous assessment record and roadmap provide the starting point for determining what has changed and whether existing practices, priorities, feasibility decisions, or implementation plans need to be updated.

## Architecture Boundary

The Capstone focuses on assessing and prioritizing technology governance practices rather than implementing a complete technology governance program.

The architecture therefore does not assume specific software components such as servers, databases, APIs, or automated user interactions.

The process may be implemented using an appropriate format such as structured documents, spreadsheets, a lightweight prototype, or software. The underlying process architecture remains applicable regardless of the implementation format.

If the process is implemented using software, appropriate technical controls can be incorporated into that implementation. If it is implemented using documents or spreadsheets, appropriate access controls and secure handling of assessment information should still be applied.
