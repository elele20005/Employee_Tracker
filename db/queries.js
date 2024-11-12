const pool = require('./connection');

// View all departments
const viewDepartments = async () => {
  try {
    const result = await pool.query('SELECT id, name FROM department');
    return result.rows;
  } catch (error) {
    console.error('Error viewing departments:', error.message);
    throw error;
  }
};

// View all roles
const viewRoles = async () => {
  try {
    const query = `
      SELECT role.id, role.title, department.name AS department, role.salary
      FROM role
      JOIN department ON role.department_id = department.id
    `;
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    console.error('Error viewing roles:', error.message);
    throw error;
  }
};

// View all employees
const viewEmployees = async () => {
  try {
    const query = `
      SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, manager.first_name AS manager
      FROM employee
      JOIN role ON employee.role_id = role.id
      JOIN department ON role.department_id = department.id
      LEFT JOIN employee AS manager ON employee.manager_id = manager.id
    `;
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    console.error('Error viewing employees:', error.message);
    throw error;
  }
};

// Add a department
const addDepartment = async (name) => {
  try {
    const result = await pool.query('INSERT INTO department (name) VALUES ($1) RETURNING *', [name]);
    return result.rows[0];
  } catch (error) {
    console.error('Error adding department:', error.message);
    throw error;
  }
};

// Add a role
const addRole = async (title, salary, departmentId) => {
  try {
    const result = await pool.query(
      'INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3) RETURNING *',
      [title, salary, departmentId]
    );
    return result.rows[0];
  } catch (error) {
    console.error('Error adding role:', error.message);
    throw error;
  }
};

// Add an employee
const addEmployee = async (firstName, lastName, roleId, managerId) => {
  try {
    const result = await pool.query(
      'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4) RETURNING *',
      [firstName, lastName, roleId, managerId]
    );
    return result.rows[0];
  } catch (error) {
    console.error('Error adding employee:', error.message);
    throw error;
  }
};

// Update an employee's role
const updateEmployeeRole = async (employeeId, roleId) => {
  try {
    const result = await pool.query(
      'UPDATE employee SET role_id = $1 WHERE id = $2 RETURNING *',
      [roleId, employeeId]
    );
    return result.rows[0];
  } catch (error) {
    console.error('Error updating employee role:', error.message);
    throw error;
  }
};

module.exports = {
  viewDepartments,
  viewRoles,
  viewEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
};
