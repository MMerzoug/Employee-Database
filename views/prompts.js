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

const addDepartmentPrompt = async () => {
  const department = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter the department name:'
    },
  ]);

  connect.query('INSERT INTO department SET ?', department, (err, results) => {
    if (err) throw err;
    console.log('Department added successfully.');
    mainMenu();
  });
};

const addEmployeePrompt = async () => {
  const employee = await inquirer.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: 'Enter the first name of the employee:'
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'Enter the last name of the employee:'
    },
    {
      type: 'input',
      name: 'role_id',
      message: 'Enter the role ID of the employee:'
    },
    {
      type: 'input',
      name: 'manager_id',
      message: 'Enter the manager ID of the employee (leave blank if none):'
    }
  ]);

  // If the manager_id field is empty, set it to NULL
  if (employee.manager_id === '') {
    employee.manager_id = null;
  }

  connect.query('INSERT INTO employee SET ?', employee, (err, results) => {
    if (err) throw err;
    console.log('Employee added successfully.');
    mainMenu();
  });
};

const addRolePrompt = async () => {  
  const role = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the role title:'
    },
    {
      type: 'input',
      name: 'salary',
      message: 'Enter the salary for the role (No symbols or commas):'
    },
    {
      type: 'input',
      name: 'department_id',
      message: 'Enter the department ID for the role:'
    }
  ]);

  // Ensure salary is a number
  role.salary = parseFloat(role.salary.replace(/[,$]/g, ""));

  if (isNaN(role.department_id)) {
    console.log('Error: Department ID should be a number.');
    addRolePrompt();
  } else {
    connect.query('INSERT INTO role SET ?', role, (err, results) => {
      if (err) throw err;
      console.log('Role added successfully.');
      mainMenu();
    });
  }
};


const updateEmployeeRolePrompt = async () => {
  const employee = await inquirer.prompt([
    {
      type: 'input',
      name: 'employee_id',
      message: 'Enter the ID of the employee to update:'
    },
    {
      type: 'input',
      name: 'role_id',
      message: 'Enter the new role ID for the employee:'
    },
  ]);

  connect.query('UPDATE employee SET role_id = ? WHERE id = ?', [employee.role_id, employee.employee_id], (err, results) => {
    if (err) throw err;
    console.log('Employee role updated successfully.');
    mainMenu();
  });
};

module.exports = {
  mainMenu,
  showAllDepartments,
  showAllRoles,
  showAllEmployees,
  addDepartmentPrompt,
  addRolePrompt,
  addEmployeePrompt,
  updateEmployeeRolePrompt
};