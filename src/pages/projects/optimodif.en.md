---
order: 3
title: Optimod'IF
subtitle: Software development with AGILE methodology
date: 2019-09-10
directory: projects
worktype: school project
skills: Java programming, Algorithms, AGILE
location: France
totalPeriod: 4 weeks
topImage: ../../assets/projects/agile/top.png
tags:
  - Java
  - Algorithms
  - AGILE
---

## About
Optimod'IF is a POC for physical delivery systems such as UPS or Amazon to optimize their delivery circuits by calculating the best route while taking into account time and logistic constraints.
The software is coded in Java and uses Swing as tool for UI construction.

## User story
1. First users need to import a city map from a XML file saved on the machine.
2. Users then inpu their delivery points with details on location, ETA and other constraints (e.g. if the delivery has to come in first or last, or follow a specific trail, etc...).
3. It is possible to add, remove or modify details about each delivery. Optionally, users can add or remove delivery points altogether.
4. The software takes into account time and location of each delivery and computes the optimal route in order to satisfy the maximum amount of constraints.
5. Users can then save the route and download a roadmap with instructions to follow.

## Implementation
### Architecture
The software is built with several Patterns in mind. First we use **MVC** for the general architecture. The Controllers also manage the **States** of the application and adapts what kind of action to execute when in certain state. Finally, a **Command** pattern is implemented to allow undo/redo operations.

![Optimod'IF Package Diagram](../../assets/projects/agile/package.png)
### Algorithms
The use case is similar to a Travelling Salesman Problem (TSP). Since it is a NP-hard problem, computing a exact solution is not advised. 
Our application offers multiple ways to compute a solution:
* A first approach would be to use a Dijkstra algorithm without heuristics to get a solution rapidly. This approach is not optimal and is not really usable.
* A second way is to use a Branch and Bound method with heurisitc of minimum-first and cut branches when we know they will not bring up an optimal solution.
* A last choice, more compute-heavy, is to take into account all the constraints and optimizes the maximum amount of constraints.

## AGILE methodology
The project is divided into 3 sprints. Our team is made of 6 persons with one architect, two developers, a advisor for the theorical approach and a project manager for everything related to planning and communication. The final report has been written by everyone from the team.

Each sprint has been planned in order to have sgnificant contribution to the realization of the solution. Goals have been clearly defined at the start of the project and have been distributed amongst the sprints.

- The first phase is all about design and set-up of the ground architecture. We built UML diagrams to visualize the abstract structure and wrote the specifications. Discussions with the professors as clients are planned regularly to ensure the quality of the solution.
- The second phase is a period of software development to implement the UI, the algorithms and prepare the final report. Testing is also integrated with unit tests and integration tests being done systematically.
- Final phase starts after a meeting with the clients to submit the progress and modifications added to the project. Finally, after adjusting the functional specifications one last time, we finish the development and fix the remaining bugs detected from tests. A presentation with use case of the software and final report is performed for the clients to conclude the project.

## Final words
This project was a great opportunity to experience a agile methodology done from start to finish. Since the settings are inspired by real-world problems, it was highly motivating for every member of our group. The product can be considered as a Proof of Concept we would have done in the context of a profesionnal environment.

Our solution can be improved by adapting the architecture to a distributed service with a cloud back-end exposing REST APIs for example, and a UI front-end for control and data display. 
