-- db/seeds.sql

-- Departments
INSERT INTO department (name) 
VALUES ('Sales'), ('Engineering'), ('Finance');

-- Roles
INSERT INTO role (title, salary, department_id) 
VALUES 
    ('Salesperson', 50000, 1), 
    ('Engineer', 70000, 2),
    ('Accountant', 60000, 3);

-- Employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES 
    ('John', 'Doe', 1, NULL),  -- Manager not assigned
    ('Jane', 'Smith', 2, NULL), -- Manager not assigned
    ('Bob', 'Brown', 3, NULL);  -- Manager not assigned
