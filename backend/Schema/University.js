const { DataTypes } = require("sequelize");
const { sequelize } = require("../Connection/db");

const University = sequelize.define("users",{
    alpha_two_code : DataTypes.STRING,
    name:DataTypes.STRING,
    country:DataTypes.STRING,
    web_pages:DataTypes.STRING
})

module.exports = {University}