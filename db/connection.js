const mysql = require('mysql2');

// Create a connection pool to the MySQL database
const db = mysql.createPool({
  host: 'localhost', // Replace with your database host
  user: 'your_username', // Replace with your database username
  password: 'your_password', // Replace with your database password
  database: 'company_db', // Replace with your database name
});

// Test the database connection
db.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database!');
  connection.release();
});

module.exports = db;
