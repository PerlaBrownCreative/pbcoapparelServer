const { DataTypes } = require("sequelize");
const db = require("../db");

const Orderdetails = db.define("orderdetails", {
  quantity: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = Orderdetails;
