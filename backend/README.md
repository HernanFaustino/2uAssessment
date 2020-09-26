# React Backend Server

This is a project for a NodeJS based backend.

# Getting Started

## Requirements

Main requirements for this project are:

- node: >10.0.0
- npm: >5.8.0

## Usage
To run this project follow this instructions:

* Clone this repository
    ```
    $ git clone https://github.com/HernanFaustino/2uAssessment.git
    ```
* Go to the project folder and then go into the backend folder
    ```
    $ cd <project-dir>/backend
    ```
* To create the needed table, execute the queries located in ```
  <project-dir>/backend/sql/db.sql```
* Configure the database conections in ```<project-dir>/backend/src/config/database.js```. This
project is developed with postgres database. If you want to use another database ensure you have installed the following according your database:

  ```
  $ npm install --save pg pg-hstore # Postgres already in package.json
  $ npm install --save mysql2
  $ npm install --save mariadb
  $ npm install --save sqlite3
  $ npm install --save tedious # Microsoft SQL Server
  ```

* Install dependencies

    ```
    $ npm install
    ```
    or
    ```
    $ yarn install
    ```
  

* Test if all works well
  
  Start the project on dev mod.

  ```
  $ npm run dev
  ```
  or
  ```
  $ yarn run dev
  ```
  
  Production build with Babel
  
  ```
  $ npm run build
  ```
  or
  ```
  $ yarn run build
  ```
  
  Test the following endpoints
  
  - GET: ```http://127.0.0.1:8000/api/invoice/pending``` to list pending invoices.
  - POST: ```http://127.0.0.1:8000/api/invoice/```: to create an invoice with the following body:
    ```
    {
      "invoice_number": "12348",
      "total": "200.99",
      "currency": "USD",
      "invoice_date": "2019-08-17",
      "due_date": "2019-09-17",
      "vendor_name": "Acme Cleaners Inc.",
      "remittance_address": "123 ABC St. Charlotte, NC 28209"
    }
    ```
  - POST: ```http://127.0.0.1:8000/api/invoice/approve/<id>``` to approve a invoice

# Contributing
If you have some ideas or improvements to this project, feel free to create pull requests or contact the memebers of the Unity team.


