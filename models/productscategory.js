const { DataTypes } = require("sequelize");
const db = require("../db");

const Productscategory = db.define("productscategory", {
  category_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = Productscategory;
