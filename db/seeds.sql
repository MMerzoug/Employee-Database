-- db/seeds.sql

-- Create the department table
CREATE TABLE IF NOT EXISTS department (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL
);

-- Insert departments
INSERT INTO department (name) VALUES
  ('Sales'),
  ('Marketing'),
  ('Finance');

-- Create the role table
CREATE TABLE IF NOT EXISTS role (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

-- Insert roles
INSERT INTO role (title, salary, department_id) VALUES
  ('Sales Representative', 50000, 1),
  ('Marketing Manager', 60000, 2),
  ('Finance Analyst', 55000, 3);

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

-- Insert employees
INSERT INTO employee (first_name, last_name, role_id) VALUES
  ('John', 'Doe', 1),
  ('Jane', 'Smith', 2),
  ('Michael', 'Johnson', 3);
