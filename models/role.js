const db = require('../db/connection');

// Function to add a new role

const addRole = async (title, salary, departmentId) => {
  try {
    const [result] = await db.promise().query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, departmentId]);
    return result.insertId;
    // const [result] = await db.promise().query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, departmentId]);
    // return result.insertId;
  } catch (error) {
    throw error;
  }
};

// Function to get all roles
const getAllRoles = async () => {
  try {
    const [rows] = await db.promise().query('SELECT * FROM role');
    return rows;
  } catch (error) {
    throw error;
  }
};

// Function to get all roles
const updateRole = async () => {
  try {
    const [rows] = await db.promise().query('SELECT * FROM role');
    // const [rows] = await db.promise().query('SELECT * FROM role');
    return rows;
  } catch (error) {
    throw error;
  }
};
// Export the functions to be used in other parts of the application
module.exports = {
  addRole,
  getAllRoles,
  updateRole
};
