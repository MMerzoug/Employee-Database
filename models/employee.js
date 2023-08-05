// const db = require('../db/connection');

// Function to add a new employee
const addEmployee = async (firstName, lastName, roleId, managerId) => {
  try {
    const [result] = await db.promise().query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [firstName, lastName, roleId, managerId]);
    return result.insertId;
  } catch (error) {
    throw error;
  }
};

// Function to get all employees
const getAllEmployees = async () => {
  try {
    const [rows] = await db.promise().query('SELECT * FROM employee');
    return rows;
  } catch (error) {
    throw error;
  }
};

// Function to update an employee's role
const updateEmployeeRole = async (roleId, employeeId) => {
  try {
    const [result] = await db.promise().query('UPDATE employee SET role_id = ? WHERE id = ?', [roleId, employeeId]);
    return result.affectedRows > 0;
  } catch (error) {
    throw error;
  }
};

// Export the functions to be used in other parts of the application
module.exports = {
  addEmployee,
  getAllEmployees,
  updateEmployeeRole,
};
