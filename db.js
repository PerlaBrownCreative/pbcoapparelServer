const Sequelize = require("sequelize");

const sequelize = new Sequelize("pbco-apparel", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
});

sequelize.authenticate().then(
  function () {
    console.log("Connected to postgres database");
  },
  function (err) {
    console.log("unable to connect to the databses:", err);
  }
);

module.exports = sequelize;
