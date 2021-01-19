const sequelize = require('sequelize');

const connection = new sequelize('db_name', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;