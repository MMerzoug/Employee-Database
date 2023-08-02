const { addDepartment, getAllDepartments } = require('./models/department');
const { addRole, getAllRoles } = require('./models/role');
const { addEmployee, getAllEmployees, updateEmployeeRole } = require('./models/employee');

// Example usage of addDepartment and getAllDepartments
const exampleUsage = async () => {
  try {
    // Add a new department
    const newDepartmentId = await addDepartment('Sales');

    // Get all departments
    const departments = await getAllDepartments();

    console.log('New department ID:', newDepartmentId);
    console.log('All departments:', departments);
  } catch (error) {
    console.error('Error:', error);
  }
};

// Example usage of addRole and getAllRoles
const exampleUsageRoles = async () => {
  try {
    // Add a new role
    const newRoleId = await addRole('Sales Representative', 50000, 1);

    // Get all roles
    const roles = await getAllRoles();

    console.log('New role ID:', newRoleId);
    console.log('All roles:', roles);
  } catch (error) {
    console.error('Error:', error);
  }
};

// Example usage of addEmployee, getAllEmployees, and updateEmployeeRole
const exampleUsageEmployees = async () => {
  try {
    // Add a new employee
    const newEmployeeId = await addEmployee('John', 'Doe', 1, null);

    // Get all employees
    const employees = await getAllEmployees();

    // Update an employee's role
    const employeeToUpdateId = 1;
    const newRoleId = 2;
    const isUpdateSuccessful = await updateEmployeeRole(newRoleId, employeeToUpdateId);

    console.log('New employee ID:', newEmployeeId);
    console.log('All employees:', employees);
    console.log('Update successful:', isUpdateSuccessful);
  } catch (error) {
    console.error('Error:', error);
  }
};

module.exports = {
  exampleUsage,
  exampleUsageRoles,
  exampleUsageEmployees,
};
