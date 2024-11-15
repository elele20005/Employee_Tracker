# Employee_Tracker
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) 

## User Story
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

## Description: SQL, Employee Tracker
Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called content management systems (CMS). The task is to build a command-line application from scratch to manage a company's employee database, using `Node.js, Inquirer, and PostgreSQL.`
Because this task will require the use of the Inquirer package, ensure that you install and use `Inquirer version 8.2.4.` To do so, use the following command in your project folder: `npm i inquirer@8.2.4.`
This application won’t be deployed, but a walkthrough video that demonstrates its functionality will be linked below and all of the acceptance criteria being met.

## Table of Contents

-Description      
-Installation   
-Usage     
-License       
-Contribution       
-Tests        
-Questions

## Installation
To install and run this application locally, please follow these steps:

Clone the repository via SSH:

`git clone git@github.com: elele20005/Employee_Tracker.git`
       
   Navigate to the Project Directory


 command: `cd Employee_Tracker`
 
Install Dependencies

Copy code
command:  `npm install`

## Usage

The Design database schema would look like the following image:

![image](https://github.com/user-attachments/assets/cc7dbbfa-2761-4e71-913c-ae9345b57bda)

As the image illustrates, the schema should contain the following three tables:

* department

`id: SERIAL PRIMARY KEY`

`name: VARCHAR(30) UNIQUE NOT NULL to hold department name`


* role

`id: SERIAL PRIMARY KEY`

`title: VARCHAR(30) UNIQUE NOT NULL to hold role title`

`salary: DECIMAL NOT NULL to hold role salary`

`department_id: INTEGER NOT NULL to hold reference to department role belongs to`


* employee


`id: SERIAL PRIMARY KEY`

`first_name: VARCHAR(30) NOT NULL to hold employee first name`

`last_name: VARCHAR(30) NOT NULL to hold employee last name`

`role_id: INTEGER NOT NULL to hold reference to employee role`

`manager_id: INTEGER to hold reference to another employee that is the manager of the current employee (null if the employee has no manager)`


You might want to use a separate file that contains functions for performing specific SQL queries you'll need to use. A constructor function or class could be helpful for organizing these. You might also want to include a `seeds.sql` file to pre-populate your database, making the development of individual features much easier.

command: `node src/app.js` will start the biuld.      
Command: `psql -U postgres` will get you to access the fucntion.          
command: `progres=# exit` will stop your code. 

## License
This project is licensed under the MIT License and Apache 2.0

## Contributing
Contributions are welcome! Please feel free to submit pull requests.

## Tests
To test the application, run the Builder and verify that outputs match expected results based on various inputs


## Additional Requirements
This Challenge combines many of the skills covered so far. In addition to the user story and acceptance criteria, we've provided some guidelines to help you get started. Your application should use Inquirer for collecting input from the user. The application will be invoked by using the following command:

command:  `npm start` 

## Deployement URL
You can check out the deployment url being used below      




## For more questions, please reach out to:
 
- GitHub: https://github.com/elele20005
- Email: ralphconsultant1@gmail.com
