const Sequelize = require("sequelize");

const sequelize = new Sequelize('node-complete', 'root', 'airblade08', { dialect: 'mysql', host: 'localhost' })

module.exports = sequelize;