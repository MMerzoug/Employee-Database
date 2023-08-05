const inquirer = require('inquirer');
const connect = require('../db/connection')
// Function to display the main menu and handle user choices
connect.connect (err => {
  if (err) throw err;
  console.log('connected');
})
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
        showAllDepartments ();
          break;
        case 'View all roles':
        showAllRoles();
          break;
        case 'View all employees':
          showAllEmployees ();
          break;
        case 'Add a department':
          // addDepartmentPrompt(); // Implement this function to prompt for department details
          break;
        case 'Add a role':
          // addRolePrompt(); // Implement this function to prompt for role details
          break;
        case 'Add an employee':
          // addEmployeePrompt(); // Implement this function to prompt for employee details
          break;
        case 'Update an employee role':
          // updateEmployeeRolePrompt(); // Implement this function to prompt for update details
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

// show all department functions here
const showAllDepartments  = async () => {
  connect.query ('select * from department', (err, results) => {
    console.table (results);
    mainMenu ();
  });
};

const showAllRoles = async ()=> {
  connect.query ('select * from role', (err, results) => {
    console.table (results);
    mainMenu ();
  });
};

const showAllEmployees = async ()=> {
  connect.query ('select * from employee', (err, results) => {
    console.table (results);
    mainMenu ();
  });
};

// const addNewDepartment = async ()=> {
//  inquirer.prompt ([{

//  }])
// };

// const addNewEmployee = async ()=> {
//  inquirer.prompt ([{

//  }])
// };

// const addNewRole = async ()=> {
//  inquirer.prompt ([{

//  }])
// };

// const updateEmployee = async ()=> {
//  inquirer.prompt ([{

//  }])
// };

module.exports = mainMenu;
  // Export other functions to display prompts and handle user input here
