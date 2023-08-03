const {Sequelize} = require( 'sequelize');

const sequelize = new Sequelize ('employee_db','root', 'changme',{
  host: 'localhost',
  dialect: 'mysql',
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
})();
module.exports = sequelize;
