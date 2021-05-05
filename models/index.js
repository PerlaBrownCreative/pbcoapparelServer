const User = require("./user");
const Shipping = require("./shipping");
const Reviews = require("./reviews");
const Productslog = require("./productslog");
const Productscategory = require("./productscategory");
const Orders = require("./orders");
const Orderdetails = require("./orderdetails");

// Setup Associations
User.hasOne(Shipping);
Shipping.belongsTo(User);

User.hasMany(Reviews);
Reviews.belongsTo(User);

User.hasMany(Orders);
Orders.belongsTo(User);

Productslog.hasMany(Reviews);
Reviews.belongsTo(Productslog);

Productslog.hasOne(Productscategory);
Productscategory.belongsTo(Productslog);

// Orderdetails.hasMany(Productslog);
// Productslog.belongsTo(Orderdetails);

// Orders.hasOne(Orderdetails);
// Orderdetails.belongsTo(Orders);

module.exports = {
  User,
  Shipping,
  Reviews,
  Productslog,
  Productscategory,
  Orders,
  Orderdetails,
};
