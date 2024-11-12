-- db/schema.sql

-- Create department table
CREATE TABLE IF NOT EXISTS department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL
);

-- Create role table
CREATE TABLE IF NOT EXISTS role (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,  -- added precision and scale for salary
    department_id INTEGER,
    FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE RESTRICT  -- changed ON DELETE behavior
);

-- Create employee table
CREATE TABLE IF NOT EXISTS employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER,
    FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE RESTRICT,  -- added ON DELETE behavior
    FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL  -- manager can be null
);
