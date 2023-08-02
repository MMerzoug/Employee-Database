// messages.js

// Object to store user-facing messages
const messages = {
    success: {
      departmentAdded: 'Department added successfully.',
      roleAdded: 'Role added successfully.',
      employeeAdded: 'Employee added successfully.',
      roleUpdated: 'Employee role updated successfully.',
      // Add more success messages as needed
    },
    error: {
      departmentExists: 'Department already exists.',
      roleExists: 'Role already exists.',
      employeeExists: 'Employee already exists.',
      roleNotFound: 'Role not found.',
      // Add more error messages as needed
    },
  };
  
  module.exports = messages;
  