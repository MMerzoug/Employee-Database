-- Insert departments
INSERT INTO department (name) VALUES
  ('Sales'),
  ('Marketing'),
  ('Finance');
-- Query to get all departments
SELECT * FROM department;

-- Insert roles
INSERT INTO role (title, salary, department_id) VALUES
  ('Sales Representative', 50000, 1),
  ('Marketing Manager', 60000, 2),
  ('Finance Analyst', 55000, 3);

-- Query to get all roles
SELECT * FROM role;

-- Insert employees
INSERT INTO employee (first_name, last_name, role_id) VALUES
  ('John', 'Doe', 1),
  ('Jane', 'Smith', 2),
  ('Michael', 'Johnson', 3);
-- Query to get all employees
SELECT * FROM employee;