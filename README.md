# Exam subject for WebTech


## to run:

1. Open a terminal, go in the root folder and type "npm install", then "npm start" to start the backend
2. Open another terminal, go in the "frontend" folder and type "npm install", then "npm start" to start the frontend 

___________________________________________________________________________________
## List of what's been done from the subject:

General objective

Implementing an application on the specified subject, with a REST-ful backend which accesses data stored in a relational database through an ORM. The backend is used from a React SPA frontend.
Description

Implementing a REST service and a React interface for the following entities: - Company - Founder

Company has many Founder. Company has an id (integer, primary key), a name (string of at least 3 characters), a date (date, when the company was founded). Founder has an id (integer, primary key), a name (string of at least 5 characters), a role within the company (from a limited set of possible roles e.g. CEO, CTO)
Graded components and detailed points

    REST service
        ✔️Defining the first entity - 0.3
        ✔️Defining the second entity - 0.3
        ✔️Defining the relation between the two entities - 0.3
        ✔️GET operation for the first entity - 0.3
        ✔️POST operation for the first entity - 0.3
        ✔️PUT operation for the first entity - 0.3
        ✔️DELETE operation for the second entity as a child resource - 0.3
        ✔️GET operation for the second entity as a child resource - 0.3
        ✔️POST operation for the second entity as a child resource - 0.3
        ✔️PUT operation for the second entity as a child resource - 0.3
        ✔️DELETE operation for the second entity as a child resource - 0.3
        Filtering on two fields for the first entity - 0.3
        Sorting on a field for the first entity - 0.3
        Paging for the first entity - 0.3
        Import - 0.2
        Export - 0.2
    SPA interface in React
        Routing to the child entity based on the parent's id - 0.3
        ✔️Create for the first entity - 0.3
        ✔️Read for the first entity - 0.3
        ✔️Update for the first entity - 0.3
        ✔️Delete for the first entity - 0.3
        Create for the second entity (master-detail, based on the id of the parent) - 0.3
        Read for the second entity (master-detail, based on the id of the parent) - 0.3
        Update for the second entity (master-detail, based on the id of the parent) - 0.3
        Delete for the second entity (master-detail, based on the id of the parent) - 0.3
        Filtrare on two fields for the first entity - 0.3
        Sortare on a field for the first entity - 0.3
        Paginare for the first entity - 0.3
        Interfață import - 0.2
        Interfața export - 0.2
        ✔️Layout cu grid/flex - 0.4
    Punctaj din oficiu] - 10%

Notes

    If the application does not run on Heroku a 10% penalty is applied
    If the video is not uploaded, the submission will not be graded
    After finalizing your submission, upload its components here


