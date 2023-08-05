const connection = require('./db/connection');
const { mainMenu } = require('./views/prompts');
const { exampleUsage, exampleUsageRoles, exampleUsageEmployees } = require('./examples');
// const {}

// Start the application
// const startApp = async () => {
//   try {
//     await initializeDatabase();
//     console.log('Welcome to the Employee Database!');
//     mainMenu();
//     // Call the exampleUsage functions here to run them after the main menu
//     await exampleUsage();
//     await exampleUsageRoles();
//     await exampleUsageEmployees();
//   } catch (error) {
//     console.error('Error:', error);
//   } finally {
//     // Close the database connection when done
//     db.end();
//   }
// };

// Start the application
mainMenu ();
