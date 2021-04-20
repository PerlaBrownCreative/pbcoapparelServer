const { DataTypes } = require("sequelize");
const db = require("../db");

const Productslog = db.define("productslog", {
  design_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  product_description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  size: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.STRING,
  },
});
module.exports = Productslog;
