---
order: 1
title: Semantic Editor
subtitle: Reseach project at Hasida Lab
date: 2019-08-20
directory: projects
worktype: academic research
skills: Java programming, software engineering, academic writing
location: The University of Tokyo, Japan
totalPeriod: 6 months
topImage: ../../assets/projects/se/top.png
tags:
  - Java
  - R&D
---
## About
Semantic Editor is a software developed by the laboratory of professor Koiti Hasida at The University of Tokyo. It uses Java as it primary language and can be hence installed on any machine equipped with the Java Virtual Machine.

The software has two main features :
- **Graph-based editing system**: using the GUI, the user is able to create, move, delete, and modify nodes and links between nodes. A link is annotated using semantic labels from a specified ontology and represents the logical relationship between two nodes.
- **Real-time collaborative editing capabilities**: real-time collaboration between different users in different location is achieved through a cloud-based architecture with a real-time synchronization system. Data management is realized by the Personal Life Repository (PLR)[^1] framework, an underlying library developed as a Personal Data Store (PDS) by the laboratory.

## Motivations
Studies conducted on adult literacy revealed that the average people’s reading skill is unbalanced across the world and is strongly dependent on the social and educational statuses. This average is also much lower than the proficiency of machines. Graph-based representation, where subjects or ideas are linked together using named relations, is a concept already used to describe specific data structures. As Semantic Web is becoming more and more relevant for automatic processing of human-generated data (for instance fields from Natural Language Processing or Machine Learning), machines can perform better analysis when confronted with structured and pre-labelled data. 

The general consensus is to extract meaningful information for amorphous or unstructured documents and transform it to make computers able to process it. We think using graph-based representations directly in our common life would be more productive for writing, reading and understanding documents. However, authoring documents using graph representation is not a method commonly taught or used. It is necessary to assess how well people behave and what requirements are necessary for this approach to be able to perform at a maximum efficiency level.

Therefore, standardization of such document is necessary, and has been proposed by Prof. Hasida. Main usage of Semantic Editor will be for research purpose at first, but we plan to make it available for the general public at a certain point.
![Motivations behind our approach](../../assets/projects/se/motivation.png)

## Technical specifications
### Architecture
![General architecture of Semantic Editor](../../assets/projects/se/archi.png)

Semantic Editor is built on top of the PLR library. Functionalities of Semantic Editor have to comply to the same endowments as PLR, meaning that data created using Semantic Editor has to be fully compatible with other PLR-related content. Nevertheless, several aspects of our application are already managed by PLR such as identification, security or privacy matters. 

In a nutshell, PLR is focused on data and storage management while Semantic Editor acts as a end-user application to create and shape said data.

### Ontology
Semantic Editor include a ontology domain called "Discourse Semantic Authoring". This standard includes more than fifty semantic relationships to define discourse and speech connectors used for argumentation. Relations such as "*and"*, "*elaboration"*, "*comparison"*, "*purpose"*, are included. However Semantic Editor can support an unlimited amount of ontology and be compatible with other types of semantic documents since it's using the RDF representation format.

### Front-end
We call frontend the GUI part of the application, the components that directly interact with users. We use JavaFX and more precisely the FXML annotation model as our baseline. This implementation method adheres to the Model-View-Controller pattern and facilitate maintenance. The UI can be divided into mainly two parts: one part is dealing with operations related to the act of authoring semantic documents and the other part deals with diverse operations such as identification, document management (creation, deletion, etc.) and settings.

UI designed for authoring includes the displaying mechanic of documents: formatting nodes and links; resizing; zooming; moving and re-centering. It also includes operations for the sake of document edition: create, modify and delete a node; create, modify and delete a link; display of semantic relations and relocation of entities.

### Back-end
The backend of Semantic Editor concerns the PLR library and transactions between the library and the data processed by the application. The PLR library is included as a Java package resource and can be viewed as an API from the point of view of Semantic Editor. A middle layer is present to manage operations concerning data transformation retrieved from PLR.

Data format managed by PLR and Semantic Editor are strongly different. Since PLR is a library built for multiple purposes, data models include abstractions we must embody when building Semantic Editor. In PLR, every fragment of content is considered a graph. Documents are linked together in a tree-shaped structure, and the top level is represented by a Root node. Content from PLR are saved on cloud storage services as encrypted JSON-LD files. Semantic Editor, on the other hand, treat documents as semantically annotated graphs. When retrieving data from PLR, conversion has to be made in order to show the user with comprehensible text.

### Real-time synchronisation
The synchronization process is implemented to occur asynchronously, meaning users will still be able to use the software during the synchronization. This is achieved by using different threads where transactions with the server are made. We are using the legacy centralized procedure supported by PLR at the moment for synchronisation. Unfortunately, because of the need to communicate with the central server every synchronization call, the software could not achieve near-instant synchronisation of data. In best conditions, synchronization can be performed between one and two seconds. Moreover, this process is causing several read-write conflits in bad usage conditions. 

As such, three trigger modes have been implemented to mitigate these effects :

· Periodic automatic synchronization: a worker periodically triggers a synchronization with the server. This method is similar to a polling and is only relevant if users also periodically edit their documents.

· Event-based trigger: this system will fire a synchronization whenever an event of modification concerning the document occurs. This method can keep up with fast edits and guarantees that every participant is looking at the same version of the document they are working on. However, this approach is computationally heavy and can cause conflicts between different versions of a document when the server cannot keep up with the number of synchronization request.

· Manual trigger: in this case the synchronization is actioned by the user himself. This method is useful if all users are communicating well enough between them to guarantee the data is constant across all participants.

## Conclusion and future work
If Semantic Editor can be used for educational and research-oriented tasks, it is yet to be functional enough for the general public. Further improvements concerning stability and performance are mandatory. Furthermore, a different, more performant approach should be taken to achieve real-time synchronisation: a system based around peer-to-peer sharing of modifications can be implemented and will improve drastically the performance. This approach is also more in line with the general philosophy of the PLR library, which advocates fully decentralized data sharing.

As of today, Semantic Editor has proven to be efficient for the sake of document editing and two publication submissions have been made at the EMNLP-IJCNLP 2019 and JIST 2019.


[^1]: Hasida, K. (2012). Personal Life Repository as Foundation of B2C Services ― Big Data without Big Brother ―. The 21st Annual Frontiers in Service Conference, Maryland University.