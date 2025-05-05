const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,      // e.g., Nutrilite
  process.env.DB_USER,      // e.g., postgres
  process.env.DB_PASSWORD,  // e.g., Aldrin9366173398
  {
    host: process.env.DB_HOST,  // e.g., localhost
    port: process.env.DB_PORT,  // e.g., 5432
    dialect: 'postgres',
    logging: console.log,       // Enable logging for debugging; set to false in production
    dialectOptions: {
      // uncomment if you use SSL
      // ssl: {
      //   require: true,
      //   rejectUnauthorized: false
      // }
    }
  }
);

module.exports = sequelize;
