const {
    viewDepartments,
    viewRoles,
    viewEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole,
  } = require('../models/department');
  
  const {
    addDepartment: addRoleDepartment,
    addRole: addRoleRole,
  } = require('./models/role');
  
  const {
    addEmployee: addEmployeeEmployee,
    updateEmployeeRole: updateEmployeeRoleEmployee,
  } = require('./models/employee');  

// Function to display the main menu and handle user choices
const mainMenu = () => {
  inquirer
    .prompt([
      // Add the prompts for the main menu options here
      {
        type: 'list',
        name: 'menuChoice',
        message: 'Select an option:',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role',
          // Add other menu options as needed
        ],
      },
    ])
    .then((answers) => {
      // Implement logic to handle user choices here
      switch (answers.menuChoice) {
        case 'View all departments':
          viewDepartments();
          break;
        case 'View all roles':
          viewRoles();
          break;
        case 'View all employees':
          viewEmployees();
          break;
        case 'Add a department':
          addDepartmentPrompt(); // Implement this function to prompt for department details
          break;
        case 'Add a role':
          addRolePrompt(); // Implement this function to prompt for role details
          break;
        case 'Add an employee':
          addEmployeePrompt(); // Implement this function to prompt for employee details
          break;
        case 'Update an employee role':
          updateEmployeeRolePrompt(); // Implement this function to prompt for update details
          break;
        default:
          console.log('Invalid option selected.');
          break;
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

module.exports = {
  mainMenu,
  // Export other functions to display prompts and handle user input here
};
