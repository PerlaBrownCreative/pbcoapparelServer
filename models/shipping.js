const { DataTypes } = require("sequelize");
const db = require("../db");

const Shipping = db.define("shipping", {
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  zip_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobile_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = Shipping;
