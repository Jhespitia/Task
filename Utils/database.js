//Import Sequelize
const { Sequelize, DataTypes } = require('sequelize');

//Connection to Database 
const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'Machadito',
  port: 5432,
  database: 'Tasks',
  logging: false, //-> quit messages in console 
});

module.exports = { db, DataTypes }