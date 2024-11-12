const inquirer = require('inquirer');
const { Pool } = require('pg'); // Import Pool from pg
const {
  viewDepartments,
  viewRoles,
  viewEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
} = require('../db/queries');
const { mainMenu } = require('./prompts');

// Database connection configuration
const pool = new Pool({
  user: 'rafiul', // Replace with your DB username
  host: 'localhost', // Or your DB host
  database: 'empdb', // Replace with your DB name
  password: 'toor', // Replace with your DB password
  port: 5432, // Default PostgreSQL port
});

console.log(`                       

░░███░░░░░█                             ░█░░░███░░░█                             ░░███                         
 ░███  █ ░  █████████████   ████████    ░   ░███  ░  ████████   ██████    ██████  ░███ █████  ██████  ████████ 
 ░██████   ░░███░░███░░███ ░░███░░███       ░███    ░░███░░███ ░░░░░███  ███░░███ ░███░░███  ███░░███░░███░░███
 ░███░░█    ░███ ░███ ░███  ░███ ░███       ░███     ░███ ░░░   ███████ ░███ ░░░  ░██████░  ░███████  ░███ ░░░ 
 ░███ ░   █ ░███ ░███ ░███  ░███ ░███       ░███     ░███      ███░░███ ░███  ███ ░███░░███ ░███░░░   ░███     
 ██████████ █████░███ █████ ░███████        █████    █████    ░░████████░░██████  ████ █████░░██████  █████    
░░░░░░░░░░ ░░░░░ ░░░ ░░░░░  ░███░░░        ░░░░░    ░░░░░      ░░░░░░░░  ░░░░░░  ░░░░ ░░░░░  ░░░░░░  ░░░░░     
                            ░███                                                                               
                            █████                                                                              
                           ░░░░░                                                                               `);
                           
                           
console.log("                                                       ");
console.log("               	      Developed by Rafiu Lawal                     ");
console.log("             		elele20005@gmail.com                     ");
console.log("                                                       ");




const startApp = async () => {
  const { action } = await inquirer.prompt(mainMenu);

  switch (action) {
    case 'View all departments':
      console.table(await viewDepartments());
      break;
    case 'View all roles':
      console.table(await viewRoles());
      break;
    case 'View all employees':
      console.table(await viewEmployees());
      break;
    case 'Add a department':
      const { departmentName } = await inquirer.prompt([{ name: 'departmentName', message: 'Enter department name:' }]);
      await addDepartment(departmentName);
      console.log('Department added successfully.');
      break;
    case 'Add a role':
      const roleInfo = await inquirer.prompt([
        { name: 'title', message: 'Enter role title:' },
        { name: 'salary', message: 'Enter role salary:' },
        { name: 'departmentId', message: 'Enter department ID:' },
      ]);
      await addRole(roleInfo.title, roleInfo.salary, roleInfo.departmentId);
      console.log('Role added successfully.');
      break;
    case 'Add an employee':
      const employeeInfo = await inquirer.prompt([
        { name: 'firstName', message: 'Enter employee first name:' },
        { name: 'lastName', message: 'Enter employee last name:' },
        { name: 'roleId', message: 'Enter role ID:' },
        { name: 'managerId', message: 'Enter manager ID (or press enter if none):' },
      ]);
      await addEmployee(employeeInfo.firstName, employeeInfo.lastName, employeeInfo.roleId, employeeInfo.managerId || null);
      console.log('Employee added successfully.');
      break;
    case 'Update an employee role':
      const updateInfo = await inquirer.prompt([
        { name: 'employeeId', message: 'Enter employee ID to update:' },
        { name: 'roleId', message: 'Enter new role ID:' },
      ]);
      await updateEmployeeRole(updateInfo.employeeId, updateInfo.roleId);
      console.log('Employee role updated successfully.');
      break;
      case 'Exit':  
      console.log('Goodbye!');
      process.exit();
    default:
      console.log('Invalid action selected.');
  }

  startApp(); // Restart app after each action
};

startApp();
