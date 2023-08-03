DROP DATABASE IF EXISTS department_db;
CREATE DATABASE department_db;
USE department_db;

-- Create the department table
CREATE TABLE department (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR (30) NOT NULL,
);

-- Create the role table
CREATE TABLE role (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

-- Create the employee table
CREATE TABLE IF NOT EXISTS employee (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
  FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);

-- Query to get all departments
SELECT * FROM department;

-- Query to get all roles
SELECT * FROM role;

-- Query to get all employees
SELECT * FROM employee;

-- Query to update an employee's role
UPDATE employee SET role_id = ? WHERE id = ?;
