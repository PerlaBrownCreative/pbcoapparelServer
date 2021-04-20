const { Router } = require("express");
const { Orders } = require("../models");
const validateSession = require("../middleware/validate-session");
const router = Router();

/* ***************************************
 *** ORDERS CREATE ***
 **************************************** */
router.post("/create", validateSession, (req, res) => {
  const ordersEntry = {
    order_date: req.body.orders.order_date,
    amount_paid: req.body.orders.amount_paid,
    paid: req.body.orders.paid,
    owner: req.user.id,
  };
  Orders.create(ordersEntry)
    .then((orders) => res.status(200).json(orders))
    .catch((err) => res.status(500).json({ error: err }));
});

/* ***************************************
 *** ORDERS DELETE ***
 **************************************** */
router.delete("/delete/:id", validateSession, function (req, res) {
  const query = { where: { id: req.params.id } };

  Orders.destroy(query)
    .then(() => res.status(200).json({ message: "Order Entry Deleted" }))
    .catch((err) => res.status(500).json({ error: err }));
});

/* ***************************************
 *** GET ALL ORDERS ***
 **************************************** */
router.get("/", validateSession, (req, res) => {
  // let id = req.productslog.id;
  Orders.findAll({
    // where: { id: id },
  })
    .then((orders) => res.status(200).json(orders))
    .catch((err) => res.status(500).json({ error: err }));
});

/* ***************************************
 *** UPDATE ORDERS ***
 **************************************** */
router.put("/update/:id", validateSession, function (req, res) {
  const updateOrdersEntry = {
    order_date: req.body.orders.order_date,
    amount_paid: req.body.orders.amount_paid,
    paid: req.body.orders.paid,
  };

  const query = { where: { id: req.params.id } };

  Orders.update(updateOrdersEntry, query)
    .then((orders) => res.status(200).json(orders))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
