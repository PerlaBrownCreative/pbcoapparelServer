const { DataTypes } = require("sequelize");
const db = require("../db");

const Reviews = db.define("reviews", {
  rate: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  review: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = Reviews;
