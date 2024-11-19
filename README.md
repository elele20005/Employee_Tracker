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
To install and run this application follow these steps:

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

The codebase includes two files: `schema.sql` and `seeds.sql`. To create the necessary tables, please execute the command `node src/app.js` will start the build, command  `psql -U postgres` will get you to access the fucntion and create tables,at which point you will be prompted to enter a password. After successfully executing this command, you may proceed by running command: `progres=# exit` will stop your code. This step is essential; however, if you require a database populated with employee data, you may also execute `psql -U postgres -d empdb`.

## License
This project is licensed under the MIT License and Apache 2.0

## Contributing
Contributions are welcome! Please feel free to submit pull requests.

## Tests
To test the application, run the builder and verify that outputs match expected results based on various inputs

## Walkthrough Video 
You can check out the Walkthrough video being used below      

https://drive.google.com/file/d/1zL8PeJW-upIadunbzBz9WHUpDiSzCQhE/view

## For more questions, please reach out to:
 
- GitHub: https://github.com/elele20005
- Email: ralphconsultant1@gmail.com
