const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("universities","root","12345",{
    host:"localhost",
    dialect:"mysql"
})

module.exports = {sequelize}