import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Check, X, BookOpen, AlertCircle, Award } from 'lucide-react';

const DatabaseExamSystem = () => {
  const [expandedSheets, setExpandedSheets] = useState({ sheet1: true });
  const [expandedSections, setExpandedSections] = useState({ 'sheet1-mcq': true });
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState({});

  // SHEET 1: Complete MCQ (48 questions from the solution)
  const sheet1MCQ = [
    { id: 1, q: "What is the primary purpose of a DBMS?", opts: ["To store data as plain files in the operating system", "To assist in maintaining and utilizing large collections of data", "To replace all application software", "To execute user programs without data storage"], ans: 1 },
    { id: 2, q: "Which of the following is NOT an advantage of using a DBMS?", opts: ["Data independence", "Concurrency control and crash recovery", "Writing ad-hoc application-specific programs for every question", "Reduced development time"], ans: 2 },
    { id: 3, q: "In the relational model, what is a schema?", opts: ["A specific instance of data in a database", "A template describing the structure of data (tables/relations)", "The physical storage layout on disk", "A type of user interface for querying"], ans: 1 },
    { id: 4, q: "Which level of abstraction describes the data as stored in the database, including storage details and access paths?", opts: ["External schema", "Conceptual schema", "Physical schema", "Logical schema"], ans: 2 },
    { id: 5, q: "What does 'data independence' mean in the context of DBMS?", opts: ["Data can be copied independently of applications", "Applications are shielded from changes in data representation and storage", "Data can be freely modified without consistency checks", "Data is independent of security policies"], ans: 1 },
    { id: 6, q: "Which language is primarily used to define external and conceptual schemas in a relational DBMS?", opts: ["DML (Data Manipulation Language)", "DDL (Data Definition Language)", "SQL for data querying only", "Prolog"], ans: 1 },
    { id: 7, q: "Which of the following is a valid example of an integrity constraint?", opts: ["A view definition", "Each student must have a unique sid", "A storage engine choice", "A user interface layout"], ans: 1 },
    { id: 8, q: "The three-level architecture of a DBMS includes:", opts: ["External, Conceptual, and Physical schemas", "Client, Server, and Network layers", "User, Application, and Database layers", "Transaction, Query, and Storage managers"], ans: 0 },
    { id: 9, q: "What is a transaction in a DBMS?", opts: ["A single read operation", "Any execution of a user program that performs a sequence of read/write operations as a single logical unit", "A backup procedure", "A SQL syntax construct"], ans: 1 },
    { id: 10, q: "Which principle ensures that the changes of one transaction are not visible to others until they are committed?", opts: ["Cache coherence", "Locking protocol with isolation", "Write-ahead logging", "Checkpointing"], ans: 1 },
    { id: 11, q: "What does WAL stand for, in the context of DBMS recovery?", opts: ["Write-Ahead Logging", "Write-after Logging", "Write-Allocated Ledger", "Web Access Layer"], ans: 0 },
    { id: 12, q: "Which of the following is commonly used as a conceptual data model?", opts: ["Hierarchical model", "Relational model", "Object-oriented model", "Semantic model"], ans: 1 },
    { id: 13, q: "A view in a DBMS:", opts: ["Is a physical table stored on disk", "Is computed on demand from base relations", "Cannot be used like a relation", "Replaces the conceptual schema"], ans: 1 },
    { id: 14, q: "What is the purpose of a database administrator (DBA)?", opts: ["Writing all end-user applications", "Designing and maintaining the database, including schemas, security, and recovery", "Compiling SQL into machine code", "Providing hardware maintenance only"], ans: 1 },
    { id: 15, q: "Which of the following is a commonly used data model feature in the relational model?", opts: ["File system navigation", "Schema with relations and attributes, including integrity constraints", "Tag-based document storage", "Network topology management"], ans: 1 },
    { id: 16, q: "External schemas can include:", opts: ["Only one fixed view", "A collection of views tailored to a user group", "Physical disk layout details", "The complete internal engine code"], ans: 1 },
    { id: 17, q: "The term 'concurrency control' refers to:", opts: ["Scheduling users' login times", "Managing simultaneous data accesses to ensure correctness", "Copying data to multiple servers", "Encrypting data at rest"], ans: 1 },
    { id: 18, q: "In the sample university database, which relation would likely hold the mapping of which students enroll in which courses?", opts: ["Students", "Courses", "Enrolled", "Teaches"], ans: 2 },
    { id: 19, q: "Which of the following statements is true about relational algebra and relational calculus?", opts: ["They are both used purely for data storage decisions", "They provide formal query languages with different approaches but equivalent expressive power", "They are obsolete in modern DBMS", "They deal only with physical storage layouts"], ans: 1 },
    { id: 20, q: "The term 'data independence' includes:", opts: ["Logical data independence only", "Physical data independence only", "Both physical and logical data independence", "No independence; data structure is exposed to users"], ans: 2 },
    { id: 21, q: "Data independence means:", opts: ["We must ensure that data is restored to a consistent state if the system crashes while changes are being made", "We must protect the data from inconsistent changes made by different users accessing the data concurrently", "Application programs should not be exposed to details of data representation and storage", "all of the previous", "none of the previous"], ans: 2 },
    { id: 22, q: "A Data Model:", opts: ["Is responsible for organizing the data representation to minimize redundancy", "Are conditions that the records in a relation must satisfy", "Summarizes how the relations described in the conceptual schema are actually stored", "none of the previous"], ans: 3 },
    { id: 23, q: "A Semantic Data Model:", opts: ["Are conditions that the records in a relation must satisfy", "Is responsible for organizing the data representation to minimize redundancy", "Summarizes how the relations described in the conceptual schema are actually stored", "none of the previous"], ans: 3 },
    { id: 24, q: "Database Management System (DBMS) is a:", opts: ["collection of data", "software designed to assist in maintaining and utilizing large collections of data", "collection of high-level data description constructs", "all of the previous", "none of the previous"], ans: 1 },
    { id: 25, q: "Crash recovery means:", opts: ["Scheduling concurrent accesses to the data in such a manner that users can think of the data as being accessed by only one user at a time", "Enforcing integrity constraints", "enforcing access controls", "We must ensure that data is restored to a consistent state if the system crashes while changes are being made", "all of the previous", "none of the previous"], ans: 3 },
    { id: 26, q: "________ is a collection of relations with distinct relation names.", opts: ["A relation schema", "A relational database schema", "A relational database", "A relationship set", "None of the previous"], ans: 1 },
    { id: 27, q: "Information about the conceptual, external, and physical schemas is stored in:", opts: ["The system catalogs", "Write-Ahead Log", "An execution plan", "All the previous", "None of the previous"], ans: 0 },
    { id: 28, q: "The subset of SQL that supports the creation, deletion, and modification of tables is called:", opts: ["Relational Calculus", "DDL", "DML", "Relational Algebra", "2 and 3", "1 and 4"], ans: 1 },
    { id: 29, q: "Which of the following contains a complete record of all activity that affected the contents of a database during a certain period of time?", opts: ["An execution plan", "Write-Ahead Log", "transaction log", "All the previous", "None of the previous"], ans: 1 },
    { id: 30, q: "Information about the conceptual, external, and physical schemas is stored in:", opts: ["An execution plan", "Write-Ahead Log", "Relational Calculus", "All the previous", "None of the previous"], ans: 4 },
    { id: 31, q: "The subset of SQL that supports deletion and modification of data is called:", opts: ["Relational Calculus", "DDL", "DML", "Relational Algebra", "2 and 3", "1 and 4"], ans: 2 },
    { id: 32, q: "Which of the following contains a complete record of all activity that affected the contents of a database during a certain period of time?", opts: ["An execution plan", "Write-Ahead Log", "buffer manager", "All the previous", "None of the previous"], ans: 1 },
    { id: 33, q: "Which of the following uses information about how the data is stored to produce an efficient execution plan for evaluating the query?", opts: ["Relational operators", "The buffer manager", "The disk space manager", "1 and 2", "query optimizer", "none of the previous"], ans: 4 },
    { id: 34, q: "Which of the following ensures that transactions request and release locks according to a suitable locking protocol and schedules the execution transactions?", opts: ["Relational operators", "The buffer manager", "The disk space manager", "concurrency control", "query optimizer", "none of the previous"], ans: 3 },
    { id: 35, q: "User views are included as part of which schema?", opts: ["Internal", "Conceptual", "External", "All the previous", "none of the previous"], ans: 2 },
    { id: 36, q: "Write-Ahead log (WAL) is a strategy used to:", opts: ["Record each write action in the log (on disk) before the corresponding change is reflected in the database itself", "Control access to database objects", "Ensure that the changes made by an incomplete transaction are removed from the database", "", "All the above", "None of the above"], ans: 0 },
    { id: 37, q: "A Database is a:", opts: ["Collection of data describing the activities of one or more related organizations", "software designed to assist in maintaining and utilizing large collections of data", "collection of high-level data description constructs", "all of the previous", "none of the previous"], ans: 0 },
    { id: 38, q: "System catalogs are used to store information about:", opts: ["the conceptual schema", "the external schema", "physical schema", "all of the previous", "none of the previous"], ans: 3 },
    { id: 39, q: "A transaction:", opts: ["can be interrupted before running to completion", "Is the basic unit of change as seen by the DBMS", "Is anyone execution of a user program in a DBMS", "", "All the above", "None of the above"], ans: 4 },
    { id: 40, q: "A Physical Schema:", opts: ["Is a formal query language based on mathematical logic", "Specifies storage details", "Consists of a collection of one or more views and relations from the conceptual schema", "Is guided by end user requirements", "all of the previous", "none of the previous"], ans: 1 },
    { id: 41, q: "Which of the following uses information about how the data is stored to produce an efficient execution plan for evaluating the query?", opts: ["Relational operators", "The buffer manager", "The disk space manager", "1 and 2", "concurrency control", "none of the previous"], ans: 5 },
    { id: 42, q: "A Conceptual Schema:", opts: ["Is a formal query language based on mathematical logic", "Specifies storage details", "Consists of a collection of one or more views and relations from the conceptual schema", "Is guided by end user requirements", "all of the previous", "none of the previous"], ans: 5 },
    { id: 43, q: "A Semantic Data Model:", opts: ["high-level data model that makes it easier for a user to come up with a good initial description of the data in an enterprise", "Are conditions that the records in a relation must satisfy", "Summarizes how the relations described in the conceptual schema are actually stored", "Is responsible for organizing the data representation to minimize redundancy", "all of the previous", "none of the previous"], ans: 0 },
    { id: 44, q: "A Data Model:", opts: ["Specifies storage details", "Are conditions that the records in a relation must satisfy", "Is a collection of high-level data description constructs that hide many low-level storage details", "Is responsible for organizing the data representation to minimize redundancy", "all of the previous", "none of the previous"], ans: 2 },
    { id: 45, q: "Which of the following keeps track of the pages in a file and organizes the information within a page?", opts: ["Relational operators", "The buffer manager", "The disk space manager", "the file and access methods", "concurrency control", "none of the previous"], ans: 3 },
    { id: 46, q: "Which of the following is responsible for maintaining a log and restoring the system to a consistent state after a crash?", opts: ["Relational operators", "The buffer manager", "recovery manager", "the file and access methods", "concurrency control", "none of the previous"], ans: 2 },
    { id: 47, q: "Data independence means:", opts: ["We must ensure that data is restored to a consistent state if the system crashes while changes are being made", "We must protect the data from inconsistent changes made by different users accessing the data concurrently", "Application programs must be aware of the details of data representation and storage", "", "all of the previous", "none of the previous"], ans: 4 },
    { id: 48, q: "A transaction:", opts: ["Can not be interrupted before running to completion", "Can not make changes to the database", "Is anyone execution of a user program in a DBMS", "", "All the above", "None of the above"], ans: 4 }
  ];

  // SHEET 1: True/False (54 questions)
  const sheet1TrueFalse = [
    { id: 1, q: "External schemas provide user-specific views of the data and do not describe the entire database structure.", ans: true, correction: "" },
    { id: 2, q: "The three-level architecture of a DBMS consists of External, Conceptual, and Physical schemas.", ans: true, correction: "" },
    { id: 3, q: "A transaction in a DBMS is any single read operation on the database.", ans: false, correction: "A transaction is a sequence of read/write operations treated as a single logical unit that must be atomic." },
    { id: 4, q: "Data independence means applications must be rewritten if the data representation changes.", ans: false, correction: "Data independence means applications are shielded from changes in data representation and storage." },
    { id: 5, q: "The relational model uses tables (relations), with attributes and constraints.", ans: true, correction: "" },
    { id: 6, q: "Write-Ahead Logging (WAL) is a recovery mechanism that logs changes after they are applied to the database.", ans: false, correction: "WAL logs changes before applying them to storage to ensure recoverability." },
    { id: 7, q: "Integrity constraints are optional and rarely used in DBMS designs.", ans: false, correction: "Integrity constraints enforce data validity and are central to data integrity." },
    { id: 8, q: "Views in a DBMS are physically stored as separate base tables on disk.", ans: false, correction: "Views are typically computed on demand from base relations and are not necessarily stored as separate physical tables." },
    { id: 9, q: "The external schema defines how data is stored on disk and indexed.", ans: false, correction: "The external schema concerns user views; physical storage details belong to the physical schema." },
    { id: 10, q: "A DBA is primarily responsible for writing all end-user applications.", ans: false, correction: "The DBA designs and maintains the database, including schemas, security, and recovery, not end-user apps." },
    { id: 11, q: "A view can simplify complex queries by presenting a simpler virtual table, but it is not a stored copy of data by default.", ans: true, correction: "" },
    { id: 12, q: "Concurrency control is concerned with ensuring that multiple transactions occurring at the same time do not lead to inconsistent database state.", ans: true, correction: "" },
    { id: 13, q: "In a three-level DBMS architecture, the conceptual schema describes how data is organized logically, independent of physical storage.", ans: true, correction: "" },
    { id: 14, q: "ER/semantic models are primarily used to capture high-level data requirements and relationships before mapping to a relational schema.", ans: true, correction: "" },
    { id: 15, q: "The physical schema includes details like file structures, indexes, and storage paths.", ans: true, correction: "" },
    { id: 16, q: "A primary key constraint guarantees that no two tuples in a relation have the same primary key value.", ans: true, correction: "" },
    { id: 17, q: "The mapping from external schemas to the conceptual schema is an example of maintaining data independence.", ans: true, correction: "" },
    { id: 18, q: "Rollback in DBMS recovery is used to undo an incomplete transaction during failure or error.", ans: true, correction: "" },
    { id: 19, q: "The relational model inherently supports multivalue attributes without any form of normalization.", ans: false, correction: "Multivalue attributes conflict with first normal form; normalization is often used to handle such cases." },
    { id: 20, q: "The role of a DBA includes setting up security policies, user roles, and backup/recovery plans.", ans: true, correction: "" },
    { id: 21, q: "A view is always stored as a separate physical table to improve performance.", ans: false, correction: "Views are typically virtual; only materialized views would be stored, and that's not the default." },
    { id: 22, q: "Recovery mechanisms like logs and checkpoints are primarily designed to minimize downtime during system maintenance rather than for crash recovery.", ans: false, correction: "Logs and checkpoints are fundamental for crash recovery and protecting data integrity after failures." },
    { id: 23, q: "A foreign key constraint enforces referential integrity between two relations.", ans: true, correction: "" },
    { id: 24, q: "The external schema and the physical schema are the same thing.", ans: false, correction: "They represent different concerns: user views vs. storage details." },
    { id: 25, q: "In the context of DBMS, 'semantic model' is another term for the physical implementation details.", ans: false, correction: "Semantic models (like ER) are high-level conceptual representations, not physical implementations." },
    { id: 26, q: "The database implementors are responsible for ensuring that unauthorized data access is not permitted.", ans: false, correction: "DBA is responsible for this." },
    { id: 27, q: "The disk space manager brings pages in from disk to main memory as needed in response to read requests.", ans: false, correction: "buffer manager does this." },
    { id: 28, q: "A checkpoint is the periodic operation of forcing some information to disk.", ans: true, correction: "" },
    { id: 29, q: "A lock is a mechanism used to control access to database objects.", ans: true, correction: "" },
    { id: 30, q: "Disallowing concurrent access can improve performance.", ans: false, correction: "allowing or degrade" },
    { id: 31, q: "When the crash occurs, the partial changes due to incomplete transactions should be stored in the database when the system comes back up.", ans: false, correction: "should be removed from the database" },
    { id: 32, q: "The conceptual schema insulates users from changes in physical storage details.", ans: true, correction: "" },
    { id: 33, q: "The physical schema design is guided by end user requirements.", ans: false, correction: "the external schema is guided by end user requirements" },
    { id: 34, q: "Query optimizer serves as the building blocks for evaluating queries posed against the data.", ans: false, correction: "Relational operators serve as building blocks" },
    { id: 35, q: "The time required to recover from a crash can be reduced by making a checkpoint periodically.", ans: true, correction: "" },
    { id: 36, q: "A DBMS enables users to create, modify, and query data through a data definition language (DDL).", ans: false, correction: "DML is used for create, modify, and query data" },
    { id: 37, q: "The records in a view are not stored in the DBMS.", ans: true, correction: "" },
    { id: 38, q: "A Database application programmer designs, constructs, and manages the databases.", ans: false, correction: "database administrator does this" },
    { id: 39, q: "The relational database schema is a collection of relations with distinct relation names.", ans: false, correction: "relational database is a collection of relations" },
    { id: 40, q: "The DBMS must restore all data to a consistent state when the system is restarted after a crash.", ans: true, correction: "" },
    { id: 41, q: "Exclusive locks on an object can be held by two different transactions at the same time.", ans: false, correction: "shared locks can be held by two transactions" },
    { id: 42, q: "The Data Manipulation Language (DML) is the subset of SQL that supports the creation, deletion, and modification of definitions for tables and views.", ans: false, correction: "DDL supports this" },
    { id: 43, q: "Shared locks on an object can be held by two different transactions at the same time.", ans: true, correction: "" },
    { id: 44, q: "The relational database is a collection of relations with distinct relation names.", ans: true, correction: "" },
    { id: 45, q: "The relational database schema is a collection of relation schemas with distinct relation names.", ans: true, correction: "" },
    { id: 46, q: "A locking protocol is the periodic operation of forcing some information to disk.", ans: false, correction: "A checkpoint is this operation" },
    { id: 47, q: "Query optimization is the periodic operation of forcing some information to disk.", ans: false, correction: "A checkpoint is this operation" },
    { id: 48, q: "A checkpoint is a mechanism used to control access to database objects.", ans: false, correction: "A lock is used for this" },
    { id: 49, q: "The relational database is a collection of relation schemas with distinct relation names.", ans: false, correction: "relational database schema is this" },
    { id: 50, q: "The relational database schema is a collection of relation with distinct relation names.", ans: false, correction: "The relational database is this" },
    { id: 51, q: "Exclusive locks on an object can be held by only one transaction at time.", ans: true, correction: "" },
    { id: 52, q: "The records in a view are stored in the DBMS.", ans: false, correction: "are not stored" },
    { id: 53, q: "The time required to recover from a crash can be reduced by using a locking protocol.", ans: false, correction: "by making a checkpoint periodically" },
    { id: 54, q: "Relational operators serve as the building blocks for evaluating queries posed against the data.", ans: true, correction: "" }
  ];

  // SHEET 1: Written Questions
  const sheet1Written = [
    { 
      id: 1, 
      q: "Explain the difference between logical and physical data independence.", 
      ans: "Logical data independence means that users are shielded from changes in the logical structure of the data, while physical data independence insulates users from changes in the physical storage of the data." 
    },
    { 
      id: 2, 
      q: "What are the responsibilities of a DBA? If we assume that the DBA is never interested in running his or her own queries, does the DBA still need to understand query optimization? Why?", 
      ans: "The DBA is responsible for: Designing the logical and physical schemas, as well as widely-used portions of the external schema. Security and authorization. Data availability and recovery from failures. Database tuning: The DBA is responsible for evolving the database, in particular the conceptual and physical schemas, to ensure adequate performance as user requirements change. A DBA needs to understand query optimization even if s/he is not interested in running his or her own queries because some of these responsibilities (database design and tuning) are related to query optimization. Unless the DBA understands the performance needs of widely used queries, and how the DBMS will optimize and execute these queries, good design and tuning decisions cannot be made." 
    },
    { 
      id: 3, 
      q: "Which of the following plays an important role in representing information about the real world in a database? Explain briefly: 1. The data definition language. 2. The data manipulation language. 3. The buffer manager. 4. The data model.", 
      ans: "The data definition language is important in representing information because it is used to describe external and logical schemas. The data manipulation language is used to access and update data; it is not important for representing the data. The buffer manager is not very important. The data model is fundamental to representing information. The data model determines what data representation mechanisms are supported by the DBMS. The data definition language is just the specific set of language constructs available to describe an actual application's data in terms of the data model." 
    }
  ];

  // SHEET 3: MCQ (54 questions)
  const sheet3MCQ = [
    { id: 1, q: "What is the main construct for representing data in the relational model?", opts: ["A key", "A relation", "A view", "An index"], ans: 1 },
    { id: 2, q: "An instance of a relation is best described as:", opts: ["A set of schemas", "A table of tuples", "A foreign key constraint", "A database"], ans: 1 },
    { id: 3, q: "In a relation schema, what does a domain refer to?", opts: ["The set of possible tuples", "The name of the relation", "A set of values that a column can take", "The primary key"], ans: 2 },
    { id: 4, q: "The degree (arity) of a relation is:", opts: ["The number of tuples", "The number of attributes (fields)", "The number of constraints", "The number of relations in the database"], ans: 1 },
    { id: 5, q: "Which of the following is true about a relation instance?", opts: ["Rows may be identical", "The order of rows is important", "No two rows are identical", "The order of columns is fixed and cannot change"], ans: 2 },
    { id: 6, q: "In SQL, which statement is used to define a new table?", opts: ["INSERT", "CREATE TABLE", "ALTER TABLE", "DROP TABLE"], ans: 1 },
    { id: 7, q: "Which SQL clause is used to specify the condition for rows to be modified in an UPDATE?", opts: ["WHERE", "SET", "FROM", "INTO"], ans: 0 },
    { id: 8, q: "Which constraint ensures that a set of fields uniquely identifies a tuple?", opts: ["Foreign key", "Candidate key", "Domain constraint", "Check constraint"], ans: 1 },
    { id: 9, q: "How many candidate keys can be designated as a primary key in a table?", opts: ["All candidate keys", "None", "At most one", "Exactly one per foreign key"], ans: 2 },
    { id: 10, q: "A foreign key constraint:", opts: ["Guarantees a unique value within its own table", "Enforces a relationship to a primary key in another table", "Requires null values only", "Is automatically a primary key"], ans: 1 },
    { id: 11, q: "If a foreign key constraint exists between Enrolled(sid, cid, grade) and Students(sid, ...), what must be true for any Enrolled tuple?", opts: ["sid must be unique in Enrolled", "sid must appear as a sid in Students", "sid must be null", "sid must equal the primary key of Enrolled"], ans: 1 },
    { id: 12, q: "What happens when you attempt to insert into Enrolled a tuple with a sid that does not exist in Students?", opts: ["The insert is allowed", "The DBMS rejects the insertion", "The sid is automatically created in Students", "The system converts sid to NULL"], ans: 1 },
    { id: 13, q: "Which SQL clause can be used to name a constraint so that its violation can be identified?", opts: ["CONSTRAINT constraint-name", "PRIMARY KEY constraint-name", "FOREIGN KEY constraint-name", "CHECK constraint-name"], ans: 0 },
    { id: 14, q: "Which action is described by ON DELETE CASCADE in a foreign key definition?", opts: ["Deleting a referenced row deletes all referencing rows", "Deleting a referencing row deletes the referenced row", "Deleting does nothing to related rows", "Deleting a row sets foreign keys to NULL"], ans: 0 },
    { id: 15, q: "In the context of transactions, when are integrity constraints typically checked by default?", opts: ["Only at the end of the transaction", "After every statement that could lead to a violation", "Never, constraints are advisory", "Only during data loading"], ans: 1 },
    { id: 16, q: "A view in SQL is:", opts: ["A physical table stored on disk", "A virtual table computed from a view definition", "The same as a base table", "A trigger"], ans: 1 },
    { id: 17, q: "The purpose of a view includes:", opts: ["Physical data replication", "Providing logical data independence and security", "Enforcing referential integrity", "Storing computed indexes"], ans: 1 },
    { id: 18, q: "Which statement best describes data independence in the context of views?", opts: ["Views physically store data to speed up queries", "Views mask changes in the conceptual schema from applications", "Views force all applications to use the same schema", "Views are only for security and cannot be updated"], ans: 1 },
    { id: 19, q: "When translating an ER relationship set with a participation constraint into tables, what is often included as keys in the resulting table?", opts: ["Only the descriptive attributes", "The primary keys of participating entity sets as foreign keys", "Only a new synthetic key", "No keys are needed"], ans: 1 },
    { id: 20, q: "In SQL, which of the following constructs declares a primary key as a constraint?", opts: ["PRIMARY KEY (column)", "UNIQUE (column)", "FOREIGN KEY (column)", "CHECK (condition)"], ans: 0 },
    { id: 21, q: "The total participation of an entity set in a relationship set means:", opts: ["The participation of all entities of the entity set in the relationship", "Each entity in the entity set appears in at most one relationship of the relationship set", "The entity sets that participate in a relationship set are distinct", "none of the previous"], ans: 0 },
    { id: 22, q: "An instance of a relationship set is:", opts: ["A ternary relationship", "The descriptive attributes of the relationship", "A set of relationships at some instant", "none of the previous"], ans: 2 },
    { id: 23, q: "The partial participation of an entity set in a relationship set means:", opts: ["The participation of all entities of the entity set in the relationship", "The entity sets that participate in a relationship set are distinct", "Each entity in the entity set appears in at most one relationship of the relationship set", "none of the previous"], ans: 2 },
    { id: 24, q: "What should SQL do when the Insert command violates a foreign key constraint?", opts: ["Accept the INSERT command", "Insert null in the column of certain rows", "Reject the INSERT command", "none of the previous"], ans: 2 },
    { id: 25, q: "Which of the following is a group of one or more attributes that uniquely identifies a row?", opts: ["Key", "Tuple", "foreign keys", "Relation"], ans: 0 },
    { id: 26, q: "In the relational model, relationships between relations or tables are created by using:", opts: ["Primary keys", "Foreign keys", "Candidate keys", "all the previous"], ans: 1 },
    { id: 27, q: "Which type of entity set cannot exist in the database unless another type of entity set also exists in the database?", opts: ["Strong entity set", "relationship set", "Weak entity set", "candidate key set"], ans: 2 },
    { id: 28, q: "The minimal set of attributes whose values uniquely identify an entity in the set is called:", opts: ["A domain", "an entity set", "A primary key", "An attributes"], ans: 2 },
    { id: 29, q: "Which of the following data constraints would be used to specify that the value of cells in a column must be one of a specific set of possible values?", opts: ["A key constraint", "A domain constraint", "A participation constraint", "None of the previous"], ans: 1 },
    { id: 30, q: "What should SQL do when the delete command violates a foreign key constraint?", opts: ["Accept the deletion and delete all rows that refer to the deleted row", "Disallow the deletion", "Accept the deletion", "1 or 2"], ans: 3 },
    { id: 31, q: "When mapping a many-to-many unary relationship into a relation which of the following is true?", opts: ["One relation is created", "Two relations are created", "Three relations are created", "Four relations are created"], ans: 1 },
    { id: 32, q: "The key constraint is:", opts: ["is a statement that a certain minimal subset of the fields of a relation is a unique identifier for a tuple", "A constraint on the name of the relation's fields", "A constraint on the value that can be stored in the relation's rows", "none of the previous"], ans: 0 },
    { id: 33, q: "Which one of the following alternatives SQL provides to handle the foreign key constraint violation in case of deletion of a tuple from a relation:", opts: ["NO ACTION", "CASCADE", "SET NULL", "SET DEFAULT", "all of previous", "none of the previous"], ans: 4 },
    { id: 34, q: "In the relational model, the number of attributes and number of tuples in a relation are termed as __________ and ______________respectively.", opts: ["Cardinality, domain", "Degree, cardinality", "Domain, degree", "Cardinality, degree"], ans: 1 },
    { id: 35, q: "An instance of relational schema R (A, B, C) has distinct values of A including NULL values. Which one of the following is true?", opts: ["A is a candidate key", "A is not a candidate key", "A is a primary Key", "Both (A) and (C)"], ans: 1 },
    { id: 36, q: "Which one of the following is not true for a view:", opts: ["View is derived from other tables", "View is a virtual table", "A view definition is permanently stored as part of the database", "View never contains derived columns"], ans: 3 },
    { id: 37, q: "The SQL command that extracts some of the records from a relation instance is the ……….. command", opts: ["SELECT", "PROJECT", "JOIN", "PRODUCT"], ans: 0 },
    { id: 38, q: "NULL is:", opts: ["The same as 0 for integer", "The same as blank for character", "The same as 0 for integer and blank for character", "Not a value"], ans: 3 },
    { id: 39, q: "A set of possible data values is called:", opts: ["Attribute", "Degree", "Tuple", "Domain"], ans: 3 },
    { id: 40, q: "What is a relationship called when it is maintained between two entities?", opts: ["Unary", "Binary", "Ternary", "Quaternary"], ans: 1 },
    { id: 41, q: "In a relation:", opts: ["Ordering of rows is immaterial", "No two rows are identical", "(A) and (B) both are true", "None of these"], ans: 2 },
    { id: 42, q: "Key to represent relationship between tables is called:", opts: ["Primary key", "Secondary Key", "Foreign Key", "None of these"], ans: 2 },
    { id: 43, q: "You can add a row using SQL in a database with which of the following?", opts: ["ADD", "CREATE", "INSERT", "MAKE"], ans: 2 },
    { id: 44, q: "The command to remove rows from a table 'CUSTOMER' is:", opts: ["REMOVE FROM CUSTOMER", "DROP FROM CUSTOMER", "DELETE FROM CUSTOMER WHERE", "UPDATE FROM CUSTOMER"], ans: 2 },
    { id: 45, q: "The SQL WHERE clause:", opts: ["limits the column data that are returned", "limits the row data are returned", "Both A and B are correct", "Neither A nor B are correct"], ans: 1 },
    { id: 46, q: "ON UPDATE CASCADE ensures which of the following?", opts: ["Normalization", "Data Integrity", "Materialized Views", "All of the above"], ans: 1 },
    { id: 47, q: "Which of the following is the correct order of keywords for SQL SELECT statements?", opts: ["SELECT, FROM, WHERE", "FROM, WHERE, SELECT", "WHERE, FROM, SELECT", "SELECT, WHERE, FROM"], ans: 0 },
    { id: 48, q: "In an SQL SELECT statement querying a single table, the asterisk (*) means that:", opts: ["all columns of the table are to be returned", "all records meeting the full criteria are to be returned", "all records with even partial criteria met are to be returned", "None of the above is correct"], ans: 0 },
    { id: 49, q: "SQL is:", opts: ["a programming language", "an operating system", "a data sublanguage", "a DBMS"], ans: 2 },
    { id: 50, q: "Create table employee (name varchar ,id integer). What type of statement is this?", opts: ["DML", "DDL", "View", "Integrity constraint"], ans: 1 },
    { id: 51, q: "Select * from employee. What type of statement is this?", opts: ["DML", "DDL", "View", "Integrity constraint"], ans: 0 },
    { id: 52, q: "Insert into instructor values (10211, 'Smith', 'Biology', 66000). What type of statement is this?", opts: ["DML", "DDL", "Query", "Integrity constraint"], ans: 0 },
    { id: 53, q: "Updates that violate __________ are disallowed.", opts: ["Transaction control", "Integrity constraints", "Authorization", "DDL constraints"], ans: 1 },
    { id: 54, q: "Select * from employee where salary>10000 and dept_id=101. Which of the following fields are displayed as output?", opts: ["Salary, dept_id", "Employee", "Salary", "All the field of employee relation"], ans: 3 }
  ];

  // SHEET 3: True/False (49 questions)
  const sheet3TrueFalse = [
    { id: 1, q: "A relation in the relational model is a set of tuples and does not preserve any particular order of those tuples.", ans: true, correction: "" },
    { id: 2, q: "In a relation schema, a domain refers to a set of permissible values that an attribute can take.", ans: true, correction: "" },
    { id: 3, q: "The degree (arity) of a relation is the number of tuples it can contain.", ans: false, correction: "The degree (arity) of a relation is the number of attributes (columns) in a tuple." },
    { id: 4, q: "In a relation instance, two rows may be identical if they belong to different transactions.", ans: false, correction: "In a relation instance, no two rows are identical (the set semantics forbid exact duplicates)." },
    { id: 5, q: "SQL uses the INSERT statement to define a new table in the database.", ans: false, correction: "CREATE TABLE (not INSERT) defines a new table. INSERT adds rows to an existing table." },
    { id: 6, q: "The WHERE clause in an UPDATE statement specifies which rows should be updated.", ans: true, correction: "" },
    { id: 7, q: "A candidate key is a set of attributes that can uniquely identify a tuple, and there can be multiple candidate keys in a table.", ans: true, correction: "" },
    { id: 8, q: "A foreign key constraint ensures referential integrity by requiring that the values of the foreign key must exist as primary keys in the referenced table.", ans: true, correction: "" },
    { id: 9, q: "ON DELETE CASCADE means that deleting a row in the referenced table will automatically delete the related rows in the referencing table.", ans: true, correction: "" },
    { id: 10, q: "A view stores data physically on disk just like a base table.", ans: false, correction: "A view is a virtual table; it does not store data separately (unless it's a materialized view)." },
    { id: 11, q: "Data independence is enhanced when applications use views to abstract the underlying schema changes.", ans: true, correction: "" },
    { id: 12, q: "When translating an ER model to relational tables, a participation constraint in a one-to-many relationship is typically represented using a foreign key in the child table.", ans: true, correction: "" },
    { id: 13, q: "A primary key can be NULL in SQL.", ans: false, correction: "A primary key cannot be NULL" },
    { id: 14, q: "A view in SQL can be used to restrict access to specific columns or rows for security purposes.", ans: true, correction: "" },
    { id: 15, q: "In SQL, a constraint can be named to help identify violations during error reporting.", ans: true, correction: "" },
    { id: 16, q: "The clause PRIMARY KEY (column) is used to declare a primary key as part of a constraint in SQL.", ans: true, correction: "" },
    { id: 17, q: "A domain constraint ensures that a column only contains values from a specified data type and range.", ans: true, correction: "" },
    { id: 18, q: "The order of columns in a relation is important for query results.", ans: false, correction: "The logical order of columns is not semantically important for correctness; queries can project or reorder columns as needed." },
    { id: 19, q: "A relation schema does not include information about keys or constraints.", ans: false, correction: "A relation schema can include information about keys and constraints." },
    { id: 20, q: "In SQL, CHECK constraints can enforce conditions on the values of a column.", ans: true, correction: "" },
    { id: 21, q: "Every relation is guaranteed to have a key.", ans: true, correction: "" },
    { id: 22, q: "The Delete command can cause a violation of domain, primary key or unique constraints.", ans: false, correction: "foreign key constraint can be violated" },
    { id: 23, q: "The update command can cause violations of domain, primary key or unique constraints.", ans: true, correction: "" },
    { id: 24, q: "An integrity constraint restricts the data that can be stored in an instance of the database.", ans: true, correction: "" },
    { id: 25, q: "An E-R diagram with 2 entities and 1 relationship must be translated to a relational schema with at least 3 relations.", ans: false, correction: "at least 2 relations" },
    { id: 26, q: "In SQL, the Insert command can cause a violation of domain, primary key or unique constraints.", ans: true, correction: "" },
    { id: 27, q: "When a database application is running, the DBMS checks for violations and disallows changes to the data that violate the specified Integrity constraints.", ans: true, correction: "" },
    { id: 28, q: "In The CREATE TABLE statement, when we specify a constraint by preceding it with CONSTRAINT constraint-name, if the constraint is violated, the constraint name is returned and can be used to identify the error.", ans: true, correction: "" },
    { id: 29, q: "The foreign key in the referencing relation must match the primary key of the referenced relation in number of columns and the data types but the column names can be different.", ans: true, correction: "" },
    { id: 30, q: "A relation may have several primary keys.", ans: false, correction: "candidate keys" },
    { id: 31, q: "Cascading updates refers to referenced rows being automatically deleted when a referencing row is deleted.", ans: false, correction: "the contrary - cascading deletes" },
    { id: 32, q: "In a 1:1 relationship, the primary key placement is arbitrary.", ans: true, correction: "" },
    { id: 33, q: "In SQL, deletes can be cascaded to enforce foreign key constraints.", ans: true, correction: "" },
    { id: 34, q: "In a relation instance, the order in which the rows are listed is important.", ans: false, correction: "not important" },
    { id: 35, q: "Each relation instance must satisfy the domain constraints that the relation schema specifies.", ans: true, correction: "" },
    { id: 36, q: "The relational database schema is a collection of relations with distinct relation names.", ans: false, correction: "collection of relation schemas" },
    { id: 37, q: "An integrity constraint restricts the data that can be stored in an instance of the database.", ans: true, correction: "" },
    { id: 38, q: "A key constraint is a statement that a certain minimal subset of the fields of a relation is a unique identifier for a tuple.", ans: true, correction: "" },
    { id: 39, q: "In SQL, we can declare that a subset of the columns of a table constitute a key by using the PRIMARY KEY constraint.", ans: false, correction: "UNIQUE constraint" },
    { id: 40, q: "Two relations can be linked by using the domain constraints.", ans: false, correction: "foreign key" },
    { id: 41, q: "The Delete command can cause violation of foreign key constraints.", ans: true, correction: "" },
    { id: 42, q: "The condition in a WHERE clause can refer to only one value.", ans: false, correction: "more than one value" },
    { id: 43, q: "SQL is a programming language.", ans: false, correction: "data sublanguage" },
    { id: 44, q: "The result of every SQL query is a table.", ans: true, correction: "" },
    { id: 45, q: "Data manipulation language (DML) commands are used to define a database, including creating, altering, and dropping tables and establishing constraints.", ans: false, correction: "DDL" },
    { id: 46, q: "The order of the rows and columns is important to the DBMS.", ans: false, correction: "unimportant" },
    { id: 47, q: "The one-to-many (1:M) relationship is easily implemented in the relational model by putting the foreign key of the '1' side in the table of the 'many' side as a primary key.", ans: false, correction: "putting the primary key of 1 side as a foreign key of the many side" },
    { id: 48, q: "A foreign key must exist in both tables that have a relationship.", ans: false, correction: "not must" },
    { id: 49, q: "Each row in the relational table is known as an entity instance or entity occurrence in the ER model.", ans: true, correction: "" }
  ];

  // SHEET 3: Written Questions (13 questions)
  const sheet3Written = [
    { id: 1, q: "Define a relation in the relational model. What are its core components?", ans: "A relation is a formal structure consisting of a set of tuples (rows) that share the same attributes (columns). Core components: a heading (schema) with attribute names and domains; a set of tuples; no inherent order of tuples; fixed arity (same number of attributes in every tuple)." },
    { id: 2, q: "Explain the difference between a relation schema and a relation instance. Give a concrete example.", ans: "A relation schema describes the structure: relation name, attributes, and their domains (e.g., R(A: Int, B: String, C: Date). A relation instance is a particular, current set of tuples conforming to that schema (e.g., R has tuples (1, 'Alice', 2020-01-01), (2, 'Bob', 2020-02-02)). Emphasize that the instance can change over time; the schema remains fixed." },
    { id: 3, q: "Why is the order of tuples in a relation not significant? How does this affect query results?", ans: "The relation is defined as a set of tuples; sets are unordered. Queries should not rely on the physical order of tuples. Result order is determined by ORDER BY in SQL or by the query planner, not by the natural storage order." },
    { id: 4, q: "Differentiate between candidate keys and a primary key. How many candidate keys can serve as a primary key, and why?", ans: "Candidate keys are minimal sets of attributes that uniquely identify a tuple. A relation can have one or more candidate keys. The primary key is the chosen candidate key used to uniquely identify tuples; exactly one candidate key is designated as the primary key." },
    { id: 5, q: "What is a foreign key and how does it enforce referential integrity? Give a simple example.", ans: "A foreign key in table A references a primary (or unique) key in table B. It enforces that every value of the foreign key must either match an existing value in B (or be NULL, if allowed). Example: Enrolls(student_id, course_id) with student_id referencing Students(id) and course_id referencing Courses(id) ensures enrollments refer to existing students and courses." },
    { id: 6, q: "Describe what ON DELETE CASCADE does and provide a scenario where it might be appropriate or inappropriate.", ans: "ON DELETE CASCADE means that when a referenced row is deleted, all referencing rows are automatically deleted. Appropriate: deleting a department should remove all its courses and related enrollments. Inappropriate: cascading deletes could cause unintentional mass data loss if a parent row is removed accidentally." },
    { id: 7, q: "A one-to-many relationship exists between Department(DeptID, DeptName) and Course(CourseID, Title, DeptID). How would you implement this in relational tables? Identify keys and constraints.", ans: "Departments(DeptID, DeptName); Courses(CourseID, Title, DeptID FK REFERENCES Departments(DeptID)). The foreign key enforces the one-to-many link." },
    { id: 8, q: "Write the SQL snippet to create a table named Courses with attributes course_id (primary key), title, and credits. Include a simple primary key constraint.", ans: "CREATE TABLE Courses (course_id INT, title VARCHAR(100) NOT NULL, credits INT NOT NULL, PRIMARY KEY (course_id));" },
    { id: 9, q: "Explain the difference between CREATE TABLE and INSERT INTO in SQL. When would you use each?", ans: "CREATE TABLE defines a new table structure. INSERT INTO adds new rows to an existing table. Use CREATE TABLE first to define the schema; then populate with INSERTs." },
    { id: 10, q: "Explain the role of a NULL/NOT NULL constraint in the context of keys.", ans: "Primary keys must be NOT NULL because they must uniquely identify rows. Foreign keys can be NULL if the relationship is optional; otherwise, they must match a parent key." },
    { id: 11, q: "What is a view? How does it differ from a base table in terms of data storage and performance implications?", ans: "A view is a virtual table defined by a query; it does not store data (unless it's a materialized view). It can simplify queries and provide security/abstraction, but it may incur runtime computation costs; materialized views store results and require maintenance." },
    { id: 12, q: "Given a simple ER model with entities Student(SID, Name, Major) and Course(CID, Title, Dept), and a many-to-many relationship Enrolls(SID, CID, Grade), design a possible relational schema including primary keys and necessary foreign keys. Explain your choices.", ans: "Students(SID, Name, Major); Courses(CID, Title, Dept); Enrolls(SID FK REFERENCES Students(SID), CID FK REFERENCES Courses(CID), Grade, PRIMARY KEY(SID, CID)). Explanation: The many-to-many relationship is captured by Enrolls as a bridge/association table. Composite primary key ensures each student-course pair is unique." },
    { id: 13, q: "You are given a small dataset: Students(SID, Name, Year) and Enrollments(SID, CID, Grade). Propose a set of constraints (primary keys, foreign keys, and a sample CHECK constraint) you would implement. Then write the corresponding SQL statements.", ans: "CREATE TABLE Students (SID INT, Name VARCHAR(100), Year INT, PRIMARY KEY (SID)); CREATE TABLE Enrollments (SID INT, CID INT, Grade CHAR(2), PRIMARY KEY (SID, CID), FOREIGN KEY (SID) REFERENCES Students(SID));" }
  ];

  // SHEET 4: MCQ (26 questions)
  const sheet4MCQ = [
    { id: 1, q: "What is relational algebra primarily used for?", opts: ["Defining data storage formats", "Writing procedural programs", "Designing user interfaces", "Specifying queries in a formal way"], ans: 3 },
    { id: 2, q: "In relational algebra, what are the inputs and outputs of a query?", opts: ["Tables", "Files", "Relations", "Tuples only"], ans: 2 },
    { id: 3, q: "Which of the following is a unary operator in relational algebra?", opts: ["Union", "Cross-product", "Selection", "Difference"], ans: 2 },
    { id: 4, q: "Which of the following is a binary operator in relational algebra?", opts: ["Projection", "Selection", "Union", "Rename"], ans: 2 },
    { id: 5, q: "Which operators are considered the basic set of relational algebra operators?", opts: ["Selection, projection, union, cross-product, difference", "Intersection, join, division, projection", "Selection, projection, rename, assignment", "Order, grouping, aggregation, projection"], ans: 0 },
    { id: 6, q: "Which operator would you use to retrieve specific columns from a relation?", opts: ["Selection", "Projection", "Union", "Difference"], ans: 1 },
    { id: 7, q: "Given a relation S2 with attributes (age, rating, sname, sid), which expression would retrieve sailors with rating > 8?", opts: ["σ(rating > 8)(S2)", "π(sname, rating)(S2)", "S2 ÷ 8", "S2 × S2"], ans: 0 },
    { id: 8, q: "What does the projection expression πsname, rating(S2) do?", opts: ["Select rows where sname or rating matches", "Compute the sum of sname and rating", "Extract the sname and rating columns", "Rename columns to sname and rating"], ans: 2 },
    { id: 9, q: "What is the general form of a selection expression?", opts: ["π column list", "R ∪ S", "R × S", "σ condition (Relational expression)"], ans: 3 },
    { id: 10, q: "Which condition operators are allowed in selection and join conditions?", opts: ["+ and -", "<, <=, =, ≠, >=, >", "AND, OR, NOT", "∑ and ∏"], ans: 1 },
    { id: 11, q: "What does the union operation require regarding the operands?", opts: ["They must have identical schemas and domains", "They must be disjoint", "They must be union-compatible (same number of fields and matching domains)", "They must be identical"], ans: 2 },
    { id: 12, q: "In a union, which of the following determines the schema of the result?", opts: ["The schema of the right operand", "The schema is the intersection of both operands", "The schema of the left operand", "The union is always a new schema"], ans: 2 },
    { id: 13, q: "What is a key requirement for two relations to be union-compatible?", opts: ["They must have the same attribute names", "They must be of the same cardinality", "They must come from the same table", "They must have the same number of fields and corresponding domains"], ans: 3 },
    { id: 14, q: "What does the intersection operation produce?", opts: ["Tuples that appear in either relation", "Tuples that appear in both relations", "Tuples that appear in the first but not the second", "A Cartesian product"], ans: 1 },
    { id: 15, q: "What is the result of a set-difference R - S?", opts: ["Tuples unique to R", "Tuples unique to S", "Tuples common to R and S", "All possible combinations of R and S"], ans: 0 },
    { id: 16, q: "What is the cross-product (Cartesian product) R × S?", opts: ["Tuples common to R and S", "Cartesian product of schema plus a single tuple", "A relation containing all concatenations of tuples r ∈ R and s ∈ S", "A projection of R onto the attributes of S"], ans: 2 },
    { id: 17, q: "How is a join operation conceptually defined?", opts: ["A union followed by a projection", "A cross-product followed by a selection", "A projection followed by a cross-product", "A difference followed by a union"], ans: 1 },
    { id: 18, q: "In a join with a condition c, which attributes can c refer to?", opts: ["Attributes of both R and S", "Only attributes from R", "Only attributes from S", "Only new attributes introduced by the join"], ans: 0 },
    { id: 19, q: "What is an equijoin?", opts: ["A join followed by a split", "A join with no condition", "A natural join only", "A join where the condition uses only equalities between attributes"], ans: 3 },
    { id: 20, q: "What is the natural join?", opts: ["A cross-product followed by a projection", "A join with explicit equality conditions on all common attributes", "A join where all common attributes are eliminated automatically", "A join that requires disjoint schemas"], ans: 1 },
    { id: 21, q: "In the natural join S1 ⨝ S2, what is guaranteed about the result schema?", opts: ["It contains all attributes from both relations, including duplicates", "It contains duplicate attribute names", "It contains no attributes from either relation", "It contains common attributes only once"], ans: 3 },
    { id: 22, q: "Consider the example: Find the names of sailors who have reserved boat 103.", opts: ["Both 2 and 4 are correct representations", "πsname(σcolor=103(Boats))", "", "πsname(σbid=103(Reserves)) or σbid=103(Reserves) then πsname"], ans: 0 },
    { id: 23, q: "Which of the following expressions would return the names of sailors who have reserved at least one boat?", opts: ["πsname( Sailors × Reserves )", "πsname( Sailors ⨝ Reserves )", "πsname(Sailors)", "σ(day > 0)(Reserves)"], ans: 1 },
    { id: 24, q: "Given Sailors(SailorID, SName, Rating, Age), Boats(BoatID, Color, Length) and Reserves(SailorID, BoatID, Day), How would you express 'the colors of boats reserved by Lubber' in relational algebra?", opts: ["πcolor(σsname='Lubber'(Sailors)) ⨝ Reserves ⨝ Boats", "πcolor((σsname='Lubber'(Sailors)) ⨝ Reserves ⨝ Boats)", "σsname='Lubber'(Boats)", "πcolor(σsname='Lubber'(Sailors))"], ans: 1 },
    { id: 25, q: "What would you expect as the result of: Find the names of sailors who have reserved a red and a green boat?", opts: ["A list of sailors who have reserved at least one red or green boat", "A list of sailors who reserved both a red and a green boat", "A list of sailors who reserved only red boats", "A list of sailors who reserved only green boats"], ans: 1 },
    { id: 26, q: "In which of the following relational algebra operators the relations must be union-compatible?", opts: ["Set-difference", "Intersection", "Union", "All the previous", "None of the previous"], ans: 3 }
  ];

  // SHEET 4: True/False (25 questions)
  const sheet4TrueFalse = [
    { id: 1, q: "The output of a relational algebra query is always a single relation.", ans: true, correction: "" },
    { id: 2, q: "Selection filters rows based on a condition.", ans: true, correction: "" },
    { id: 3, q: "Projection can duplicate tuples.", ans: false, correction: "Projection removes duplicates." },
    { id: 4, q: "Union requires union-compatible operands.", ans: true, correction: "" },
    { id: 5, q: "Cartesian product combines all tuples from both relations.", ans: true, correction: "" },
    { id: 6, q: "Intersection returns tuples in either input.", ans: false, correction: "Intersection returns tuples in both." },
    { id: 7, q: "R - S yields tuples in R and not in S.", ans: true, correction: "" },
    { id: 8, q: "A join is always more expensive than a Cartesian product.", ans: false, correction: "A selective join can be cheaper." },
    { id: 9, q: "Natural join removes common attributes automatically.", ans: true, correction: "" },
    { id: 10, q: "A single relation expression is valid without operators.", ans: true, correction: "" },
    { id: 11, q: "Selection conditions reference only the left relation.", ans: true, correction: "" },
    { id: 12, q: "Projection can alter the order of attributes.", ans: false, correction: "Projection preserves the listed order." },
    { id: 13, q: "Rename changes attribute names but not tuples.", ans: true, correction: "" },
    { id: 14, q: "The union result schema is identical to the left operand.", ans: false, correction: "Schema must be union-compatible with both operands." },
    { id: 15, q: "Same schema means the relations are disjoint.", ans: false, correction: "Schema is independent of disjointness." },
    { id: 16, q: "Equijoin uses only equality conditions.", ans: true, correction: "" },
    { id: 17, q: "Natural join requires an explicit equality condition on common attributes.", ans: false, correction: "It uses all common attributes automatically." },
    { id: 18, q: "Set-difference yields tuples in either R or S but not both.", ans: false, correction: "This is symmetric difference; R - S yields those in R not in S." },
    { id: 19, q: "Complementation is a standard relational algebra operation.", ans: false, correction: "No universal relation in standard RA." },
    { id: 20, q: "πsname(σage>18(Sailors)) yields names aged >18.", ans: true, correction: "" },
    { id: 21, q: "Operator precedence in RA is fixed like arithmetic.", ans: false, correction: "Precedence is not fixed; use parentheses." },
    { id: 22, q: "Projection may produce duplicate tuples.", ans: false, correction: "It eliminates duplicates." },
    { id: 23, q: "A theta-join references attributes from both relations.", ans: true, correction: "" },
    { id: 24, q: "Sailors ⨝ Reserves on sailor = sailor yields results for sailors with no reserves.", ans: false, correction: "Inner join excludes sailors with no reserves." },
    { id: 25, q: "RA operators are closed under set operations; results are always relations.", ans: true, correction: "" }
  ];

  // SHEET 4: Written Questions (8 questions)
  const sheet4Written = [
    { 
      id: 1, 
      q: "Given Sailors(SailorID, SName, Rating, Age) and Reserves(SailorID, BoatID, Day), find the names of sailors who have reserved boat with BoatID = 103. Explain each step and provide both RA and SQL solutions.", 
      ans: "Relational Algebra: πSName(σBoatID=103(Reserves) ⨝ Sailors)\n\nSQL: SELECT DISTINCT S.SName FROM Sailors S, Reserves R WHERE S.SailorID = R.SailorID AND R.BoatID = 103;" 
    },
    { 
      id: 2, 
      q: "Define a relational algebra expression for 'sailors who have reserved every boat' given Boats(BoatID, Color, Length) and Reserves(SailorID, BoatID, Day).", 
      ans: "πSailorID(Sailors) − πSailorID((Sailors × Boats) − Reserves)\n\nOr: πSailorID(Sailors) − πSailorID((Sailors × Boats) − (Reserves ⨝ Sailors))" 
    },
    { 
      id: 3, 
      q: "Given Sailors(SailorID, SName, Rating, Age), Boats(BoatID, Color, Length) and Reserves(SailorID, BoatID, Day), Suppose you want the set of boats that have been reserved by every sailor. How would you express this in relational algebra?", 
      ans: "πBID(Boats) − πBID(Boats × Sailors − Reserves)\n\nExplanation: Boats not reserved by some sailor are excluded." 
    },
    { 
      id: 4, 
      q: "Formulate a relational-algebra expression to find sailors who have reserved more than one boat (i.e., at least two distinct BoatIDs).", 
      ans: "πSID(σSID = SID and BID <> BID(Reserves × Reserves))" 
    },
    { 
      id: 5, 
      q: "Consider employee (person-name, street, city), works (person-name, company-name, salary), company (company-name, city). Find the names of all employees who work for First Bank Corporation.", 
      ans: "Πperson-name(σcompany-name = 'First Bank Corporation'(works))" 
    },
    { 
      id: 6, 
      q: "Find the names and cities of residence of all employees who work for First Bank Corporation.", 
      ans: "Πperson-name, city(employee ⨝ (σcompany-name = 'First Bank Corporation'(works)))" 
    },
    { 
      id: 7, 
      q: "Consider FLIGHTS (flight_num, source_city, destination_city), DEPARTURES (flight_num, date, plane_type), PASSENGERS (passenger_id, passenger_name, passenger_address), BOOKINGS(passenger_id, flight_num, date, seat_number). Find the cities that have direct flights to both Cairo and Doha.", 
      ans: "πsource_city(σdestination_city = 'Cairo'(FLIGHTS)) ∩ πsource_city(σdestination_city = 'Doha'(FLIGHTS))" 
    },
    { 
      id: 8, 
      q: "Find the flight_num and date of all flights for which there are no reservations.", 
      ans: "πflight_num, date(DEPARTURES) - πflight_num, date(BOOKINGS)" 
    }
  ];

  const toggleSheet = (sheet) => {
    setExpandedSheets(prev => ({ ...prev, [sheet]: !prev[sheet] }));
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleAnswer = (sheet, section, questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [`${sheet}-${section}-${questionId}`]: value
    }));
  };

  const checkAnswer = (sheet, section, questionId, correctAnswer) => {
    const userAnswer = answers[`${sheet}-${section}-${questionId}`];
    setShowResults(prev => ({
      ...prev,
      [`${sheet}-${section}-${questionId}`]: true
    }));
    return userAnswer === correctAnswer;
  };

  const MCQQuestion = ({ sheet, question, index }) => {
    const key = `${sheet}-mcq-${question.id}`;
    const userAnswer = answers[key];
    const showResult = showResults[key];
    const isCorrect = userAnswer === question.ans;

    return (
      <div className="mb-6 p-4 bg-white rounded-lg border border-gray-200">
        <div className="font-medium text-gray-900 mb-3">
          Q{question.id}. {question.q}
        </div>
        <div className="space-y-2">
          {question.opts.map((opt, idx) => (
            <label key={idx} className={`flex items-start p-3 rounded border cursor-pointer transition-colors ${
              showResult && idx === question.ans ? 'bg-green-50 border-green-500' :
              showResult && idx === userAnswer && idx !== question.ans ? 'bg-red-50 border-red-500' :
              userAnswer === idx ? 'bg-blue-50 border-blue-500' :
              'bg-gray-50 border-gray-200 hover:bg-gray-100'
            }`}>
              <input
                type="radio"
                name={key}
                value={idx}
                checked={userAnswer === idx}
                onChange={(e) => handleAnswer(sheet, 'mcq', question.id, idx)}
                className="mt-1 mr-3"
                disabled={showResult}
              />
              <span className="text-gray-700">{opt}</span>
            </label>
          ))}
        </div>
        <div className="mt-3 flex gap-2">
          {!showResult && (
            <button
              onClick={() => checkAnswer(sheet, 'mcq', question.id, question.ans)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              disabled={userAnswer === undefined}
            >
              Check Answer
            </button>
          )}
          {showResult && (
            <div className={`flex items-center gap-2 px-4 py-2 rounded ${
              isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {isCorrect ? <Check size={20} /> : <X size={20} />}
              <span className="font-medium">
                {isCorrect ? 'Correct!' : `Wrong! Correct answer: Option ${question.ans + 1}`}
              </span>
            </div>
          )}
        </div>
      </div>
    );
  };

  const TrueFalseQuestion = ({ sheet, question }) => {
    const key = `${sheet}-tf-${question.id}`;
    const userAnswer = answers[key];
    const showResult = showResults[key];
    const isCorrect = userAnswer === question.ans;

    return (
      <div className="mb-6 p-4 bg-white rounded-lg border border-gray-200">
        <div className="font-medium text-gray-900 mb-3">
          Q{question.id}. {question.q}
        </div>
        <div className="flex gap-4 mb-3">
          <label className={`flex items-center gap-2 px-4 py-2 rounded border cursor-pointer transition-colors ${
            showResult && question.ans === true ? 'bg-green-50 border-green-500' :
            showResult && userAnswer === true && !question.ans ? 'bg-red-50 border-red-500' :
            userAnswer === true ? 'bg-blue-50 border-blue-500' :
            'bg-gray-50 border-gray-200 hover:bg-gray-100'
          }`}>
            <input
              type="radio"
              name={key}
              checked={userAnswer === true}
              onChange={() => handleAnswer(sheet, 'tf', question.id, true)}
              disabled={showResult}
            />
            <span>True ✓</span>
          </label>
          <label className={`flex items-center gap-2 px-4 py-2 rounded border cursor-pointer transition-colors ${
            showResult && question.ans === false ? 'bg-green-50 border-green-500' :
            showResult && userAnswer === false && question.ans ? 'bg-red-50 border-red-500' :
            userAnswer === false ? 'bg-blue-50 border-blue-500' :
            'bg-gray-50 border-gray-200 hover:bg-gray-100'
          }`}>
            <input
              type="radio"
              name={key}
              checked={userAnswer === false}
              onChange={() => handleAnswer(sheet, 'tf', question.id, false)}
              disabled={showResult}
            />
            <span>False ✗</span>
          </label>
        </div>
        <div className="mt-3 flex flex-col gap-2">
          {!showResult && (
            <button
              onClick={() => checkAnswer(sheet, 'tf', question.id, question.ans)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors w-fit"
              disabled={userAnswer === undefined}
            >
              Check Answer
            </button>
          )}
          {showResult && (
            <>
              <div className={`flex items-center gap-2 px-4 py-2 rounded w-fit ${
                isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {isCorrect ? <Check size={20} /> : <X size={20} />}
                <span className="font-medium">
                  {isCorrect ? 'Correct!' : `Wrong! Correct answer: ${question.ans ? 'True' : 'False'}`}
                </span>
              </div>
              {!isCorrect && question.correction && (
                <div className="mt-2 p-3 bg-yellow-50 border border-yellow-200 rounded">
                  <div className="font-medium text-yellow-900 mb-1">Correction:</div>
                  <div className="text-yellow-800">{question.correction}</div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    );
  };

  const WrittenQuestion = ({ sheet, question }) => {
    const key = `${sheet}-written-${question.id}`;
    const showResult = showResults[key];

    return (
      <div className="mb-6 p-4 bg-white rounded-lg border border-gray-200">
        <div className="font-medium text-gray-900 mb-3">
          Q{question.id}. {question.q}
        </div>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg mb-3 min-h-32"
          placeholder="Write your answer here..."
          onChange={(e) => handleAnswer(sheet, 'written', question.id, e.target.value)}
        />
        <div className="flex flex-col gap-2">
          {!showResult && (
            <button
              onClick={() => setShowResults(prev => ({ ...prev, [key]: true }))}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors w-fit"
            >
              Show Solution
            </button>
          )}
          {showResult && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="font-medium text-green-900 mb-2 flex items-center gap-2">
                <BookOpen size={20} />
                Model Answer:
              </div>
              <div className="text-gray-700 whitespace-pre-line">{question.ans}</div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="text-blue-600" size={32} />
            <h1 className="text-3xl font-bold text-gray-900">CS307 Database Systems</h1>
          </div>
          <p className="text-gray-600">Practice Exam - Cairo University</p>
          <p className="text-sm text-gray-500 mt-2">Dr. Hatem Moharram - Faculty of Science, Mathematics Department</p>
        </div>

        {/* Sheet 1 */}
        <div className="bg-white rounded-xl shadow-lg mb-6">
          <button
            onClick={() => toggleSheet('sheet1')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors rounded-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-blue-600">1</span>
              </div>
              <div className="text-left">
                <h2 className="text-xl font-bold text-gray-900">Sheet 1: Database Systems Fundamentals</h2>
                <p className="text-sm text-gray-600">48 MCQ + 54 T/F + 3 Written Questions</p>
              </div>
            </div>
            {expandedSheets.sheet1 ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
          </button>

          {expandedSheets.sheet1 && (
            <div className="p-6 border-t border-gray-200">
              {/* MCQ Section */}
              <div className="mb-6">
                <button
                  onClick={() => toggleSection('sheet1-mcq')}
                  className="w-full flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded flex items-center justify-center font-bold">
                      MCQ
                    </div>
                    <span className="font-semibold text-gray-900">Multiple Choice Questions (48)</span>
                  </div>
                  {expandedSections['sheet1-mcq'] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                </button>

                {expandedSections['sheet1-mcq'] && (
                  <div className="mt-4 space-y-4">
                    {sheet1MCQ.map((q, idx) => (
                      <MCQQuestion key={q.id} sheet="sheet1" question={q} index={idx} />
                    ))}
                  </div>
                )}
              </div>

              {/* True/False Section */}
              <div className="mb-6">
                <button
                  onClick={() => toggleSection('sheet1-tf')}
                  className="w-full flex items-center justify-between p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-600 text-white rounded flex items-center justify-center font-bold">
                      T/F
                    </div>
                    <span className="font-semibold text-gray-900">True/False Questions (54)</span>
                  </div>
                  {expandedSections['sheet1-tf'] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                </button>

                {expandedSections['sheet1-tf'] && (
                  <div className="mt-4 space-y-4">
                    {sheet1TrueFalse.map((q) => (
                      <TrueFalseQuestion key={q.id} sheet="sheet1" question={q} />
                    ))}
                  </div>
                )}
              </div>

              {/* Written Section */}
              <div>
                <button
                  onClick={() => toggleSection('sheet1-written')}
                  className="w-full flex items-center justify-between p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded flex items-center justify-center font-bold">
                      ✍
                    </div>
                    <span className="font-semibold text-gray-900">Written Questions (3)</span>
                  </div>
                  {expandedSections['sheet1-written'] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                </button>

                {expandedSections['sheet1-written'] && (
                  <div className="mt-4 space-y-4">
                    {sheet1Written.map((q) => (
                      <WrittenQuestion key={q.id} sheet="sheet1" question={q} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Sheet 3 */}
        <div className="bg-white rounded-xl shadow-lg mb-6">
          <button
            onClick={() => toggleSheet('sheet3')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors rounded-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-green-600">3</span>
              </div>
              <div className="text-left">
                <h2 className="text-xl font-bold text-gray-900">Sheet 3: Relational Model & SQL</h2>
                <p className="text-sm text-gray-600">54 MCQ + 49 T/F + 13 Written Questions</p>
              </div>
            </div>
            {expandedSheets.sheet3 ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
          </button>

          {expandedSheets.sheet3 && (
            <div className="p-6 border-t border-gray-200">
              {/* MCQ Section */}
              <div className="mb-6">
                <button
                  onClick={() => toggleSection('sheet3-mcq')}
                  className="w-full flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded flex items-center justify-center font-bold">
                      MCQ
                    </div>
                    <span className="font-semibold text-gray-900">Multiple Choice Questions (54)</span>
                  </div>
                  {expandedSections['sheet3-mcq'] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                </button>

                {expandedSections['sheet3-mcq'] && (
                  <div className="mt-4 space-y-4">
                    {sheet3MCQ.map((q, idx) => (
                      <MCQQuestion key={q.id} sheet="sheet3" question={q} index={idx} />
                    ))}
                  </div>
                )}
              </div>

              {/* True/False Section */}
              <div className="mb-6">
                <button
                  onClick={() => toggleSection('sheet3-tf')}
                  className="w-full flex items-center justify-between p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-600 text-white rounded flex items-center justify-center font-bold">
                      T/F
                    </div>
                    <span className="font-semibold text-gray-900">True/False Questions (49)</span>
                  </div>
                  {expandedSections['sheet3-tf'] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                </button>

                {expandedSections['sheet3-tf'] && (
                  <div className="mt-4 space-y-4">
                    {sheet3TrueFalse.map((q) => (
                      <TrueFalseQuestion key={q.id} sheet="sheet3" question={q} />
                    ))}
                  </div>
                )}
              </div>

              {/* Written Section */}
              <div>
                <button
                  onClick={() => toggleSection('sheet3-written')}
                  className="w-full flex items-center justify-between p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded flex items-center justify-center font-bold">
                      ✍
                    </div>
                    <span className="font-semibold text-gray-900">Written Questions (13)</span>
                  </div>
                  {expandedSections['sheet3-written'] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                </button>

                {expandedSections['sheet3-written'] && (
                  <div className="mt-4 space-y-4">
                    {sheet3Written.map((q) => (
                      <WrittenQuestion key={q.id} sheet="sheet3" question={q} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Sheet 4 */}
        <div className="bg-white rounded-xl shadow-lg mb-6">
          <button
            onClick={() => toggleSheet('sheet4')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors rounded-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-purple-600">4</span>
              </div>
              <div className="text-left">
                <h2 className="text-xl font-bold text-gray-900">Sheet 4: Relational Algebra</h2>
                <p className="text-sm text-gray-600">26 MCQ + 25 T/F + 8 Written Questions</p>
              </div>
            </div>
            {expandedSheets.sheet4 ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
          </button>

          {expandedSheets.sheet4 && (
            <div className="p-6 border-t border-gray-200">
              {/* MCQ Section */}
              <div className="mb-6">
                <button
                  onClick={() => toggleSection('sheet4-mcq')}
                  className="w-full flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded flex items-center justify-center font-bold">
                      MCQ
                    </div>
                    <span className="font-semibold text-gray-900">Multiple Choice Questions (26)</span>
                  </div>
                  {expandedSections['sheet4-mcq'] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                </button>

                {expandedSections['sheet4-mcq'] && (
                  <div className="mt-4 space-y-4">
                    {sheet4MCQ.map((q, idx) => (
                      <MCQQuestion key={q.id} sheet="sheet4" question={q} index={idx} />
                    ))}
                  </div>
                )}
              </div>

              {/* True/False Section */}
              <div className="mb-6">
                <button
                  onClick={() => toggleSection('sheet4-tf')}
                  className="w-full flex items-center justify-between p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-600 text-white rounded flex items-center justify-center font-bold">
                      T/F
                    </div>
                    <span className="font-semibold text-gray-900">True/False Questions (25)</span>
                  </div>
                  {expandedSections['sheet4-tf'] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                </button>

                {expandedSections['sheet4-tf'] && (
                  <div className="mt-4 space-y-4">
                    {sheet4TrueFalse.map((q) => (
                      <TrueFalseQuestion key={q.id} sheet="sheet4" question={q} />
                    ))}
                  </div>
                )}
              </div>

              {/* Written Section */}
              <div>
                <button
                  onClick={() => toggleSection('sheet4-written')}
                  className="w-full flex items-center justify-between p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded flex items-center justify-center font-bold">
                      ✍
                    </div>
                    <span className="font-semibold text-gray-900">Written Questions (8)</span>
                  </div>
                  {expandedSections['sheet4-written'] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                </button>

                {expandedSections['sheet4-written'] && (
                  <div className="mt-4 space-y-4">
                    {sheet4Written.map((q) => (
                      <WrittenQuestion key={q.id} sheet="sheet4" question={q} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <p className="text-gray-600 font-medium mb-2">
            ✅ Sheet 1: Database Systems Fundamentals (48 MCQ + 54 T/F + 3 Written)
          </p>
          <p className="text-gray-600 font-medium mb-2">
            ✅ Sheet 3: Relational Model & SQL (54 MCQ + 49 T/F + 13 Written)
          </p>
          <p className="text-gray-600 font-medium mb-2">
            ✅ Sheet 4: Relational Algebra (26 MCQ + 25 T/F + 8 Written)
          </p>
          <p className="text-sm text-gray-500 mt-4">
            📚 Sheets 2 and 5 ready to implement next!
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Complete all questions and check your answers to master Database Systems! 🎯
          </p>
        </div>
      </div>
    </div>
  );
};

export default DatabaseExamSystem