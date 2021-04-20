const { DataTypes } = require("sequelize");
const db = require("../db");

const Orders = db.define("orders", {
  order_date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount_paid: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  paid: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});
module.exports = Orders;
