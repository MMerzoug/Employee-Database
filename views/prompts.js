// Set the maximum number of listeners
require('events').EventEmitter.defaultMaxListeners = 1000;

const inquirer = require('inquirer');
const connect = require('../db/connection')

const mainMenu = () => {
  inquirer
  .prompt([
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
        ],
      },
    ])
    .then(async (answers) => {
      try {
        switch (answers.menuChoice) {
          case 'View all departments':
            await showAllDepartments();
            break;
          case 'View all roles':
            await showAllRoles();
            break;
          case 'View all employees':
            await showAllEmployees();
            break;
          case 'Add a department':
            await addDepartmentPrompt();
            break;
          case 'Add a role':
            await addRolePrompt();
            break;
          case 'Add an employee':
            await addEmployeePrompt();
            break;
          case 'Update an employee role':
            await updateEmployeeRolePrompt();
            break;
          default:
            console.log('Invalid option selected.');
            break;
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }).finally(() => {
      mainMenu();
    });
};

const showAllDepartments  = async () => {
  return new Promise((resolve, reject) => {
    connect.query('select * from department', (err, results) => {
      if (err) {
        return reject(err);
      }
      console.table(results);
      resolve(results);
    });
  });
};

const showAllRoles = async ()=> {
  return new Promise((resolve, reject) => {
    connect.query('select * from role', (err, results) => {
      if (err) {
        return reject(err);
      }
      console.table(results);
      resolve(results);
    });
  });
};

// const showAllEmployees = async ()=> {
//   return new Promise((resolve, reject) => {
//     connect.query('select * from employee', (err, results) => {
//       if (err) {
//         return reject(err);
//       }
//       console.table(results);
//       resolve(results);
//     });
//   });
// };

const showAllEmployees = async () => {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT 
        E.id, 
        E.first_name, 
        E.last_name, 
        R.title AS role_title, 
        D.name AS department_name, 
        R.salary AS role_salary, 
        M.first_name AS manager_first_name, 
        M.last_name AS manager_last_name
      FROM 
        employee E
      LEFT JOIN 
        role R ON E.role_id = R.id
      LEFT JOIN 
        department D ON R.department_id = D.id
      LEFT JOIN 
        employee M ON E.manager_id = M.id
    `;

    connect.query(query, (err, results) => {
      if (err) {
        return reject(err);
      }
      console.table(results);
      resolve(results);
    });
  });
};


const addDepartmentPrompt = async () => {
  const department = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter the department name:',
      validate: (value) => value ? true : "Please enter a department name"
    },
  ]);

  connect.query('INSERT INTO department SET ?', department, (err, results) => {
    if (err) throw err;
    console.log('Department added successfully.');
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
      message: 'Enter the manager ID of the employee (leave blank if none):',
      validate: (value) => value === '' || !isNaN(parseInt(value)) ? true : 'Please enter a valid number or leave blank'
    }
  ]);

  // If the manager_id field is empty, set it to NULL
  if (employee.manager_id === '') {
    employee.manager_id = null;
  }

// Verify role_id exists in 'role' table
connect.query('SELECT * FROM role WHERE id = ?', [employee.role_id], (err, results) => {
  if (err) throw err;

  // If no matching role is found
  if (results.length === 0) {
    console.log('Role ID does not exist. Please provide a valid role ID.');
  } else {
    // If matching role is found, add the employee
    connect.query('INSERT INTO employee SET ?', employee, (err, results) => {
      if (err) throw err;
      console.log('Employee added successfully.');
    });
  }
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
      message: 'Enter the department ID for the role:',
      validate: (value) => !isNaN(parseInt(value)) ? true : 'Please enter a valid number'
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

// Verify role_id exists in 'role' table
connect.query('SELECT * FROM role WHERE id = ?', [employee.role_id], (err, results) => {
  if (err) throw err;

  // If no matching role is found
  if (results.length === 0) {
    console.log('Role ID does not exist. Please provide a valid role ID.');
  } else {
    // If matching role is found, update the employee
    connect.query('UPDATE employee SET role_id = ? WHERE id = ?', [employee.role_id, employee.employee_id], (err, results) => {
      if (err) throw err;
      console.log('Employee role updated successfully.');
      // mainMenu();
    });
  }
});
};

module.exports = {
  mainMenu,
};
