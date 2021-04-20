require("dotenv").config();
let express = require("express");
let cors = require("cors");
let app = express();
let sequelize = require("./db");

let user = require("./controllers/usercontroller");
let shipping = require("./controllers/shippingcontroller");
let reviews = require("./controllers/reviewscontroller");
let productslog = require("./controllers/productslogcontroller");
let productscategory = require("./controllers/productscategorycontroller");
let orders = require("./controllers/orderscontroller");
let orderdetails = require("./controllers/orderdetailscontroller");

sequelize.sync();
app.use(cors());
app.use(express.json());
app.use(require("./middleware/headers"));

app.use("/user", user);
app.use("/productslog", productslog);
app.use("/reviews", reviews);
app.use("/orders", orders);
app.use("/shipping", shipping);
app.use("/productscategory", productscategory);
app.use("/orderdetails", orderdetails);

app.listen(3000, function () {
  console.log("App is listening on port 3000");
});
