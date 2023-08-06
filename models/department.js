const db = require('../db/connection');
// const messages = require('../views/messages');

// Function to add a new department
const addDepartment = async (name) => {
  try {
    // const [result] = await db.('INSERT INTO department (name) VALUES (?)', [name]);
    const [result] = await db.promise().query('INSERT INTO department (name) VALUES (?)', [name]);
    return result.insertId;
  } catch (error) {
    throw error;
  }
};

// Function to get all departments
const getAllDepartments = async () => {
  try {
    // const [rows] = await db.query('SELECT * FROM department');
    const [rows] = await db.promise().query('SELECT * FROM department');
    return rows;
  } catch (error) {
    throw error;
  }
};

// Export the functions to be used in other parts of the application
module.exports = {
  addDepartment,
  getAllDepartments,
};
