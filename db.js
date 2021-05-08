const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
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
