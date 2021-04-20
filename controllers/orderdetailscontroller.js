const { Router } = require("express");
const { Orderdetails } = require("../models");
const validateSession = require("../middleware/validate-session");
const router = Router();

/* ***************************************
 *** ORDERS CREATE ***
 **************************************** */
router.post("/create", validateSession, (req, res) => {
  const orderdetailsEntry = {
    quantity: req.body.orderdetails.quantity,
  };
  Orderdetails.create(orderdetailsEntry)
    .then((orderdetails) => res.status(200).json(orderdetails))
    .catch((err) => res.status(500).json({ error: err }));
});

/* ***************************************
 *** ORDERS DELETE ***
 **************************************** */
router.delete("/delete/:id", validateSession, function (req, res) {
  const query = { where: { id: req.params.id } };

  Orderdetails.destroy(query)
    .then(() => res.status(200).json({ message: "Order Detail Deleted" }))
    .catch((err) => res.status(500).json({ error: err }));
});

/* ***************************************
 *** GET ALL ORDERS ***
 **************************************** */
router.get("/", validateSession, (req, res) => {
  // let id = req.productslog.id;
  Orderdetails.findAll({
    // where: { id: id },
  })
    .then((orderdetails) => res.status(200).json(orderdetails))
    .catch((err) => res.status(500).json({ error: err }));
});

/* ***************************************
 *** UPDATE ORDERS ***
 **************************************** */
router.put("/update/:id", validateSession, function (req, res) {
  const updateOrderdetailsEntry = {
    quantity: req.body.orderdetails.quantity,
  };

  const query = { where: { id: req.params.id } };

  Orderdetails.update(updateOrderdetailsEntry, query)
    .then((orderdetails) => res.status(200).json(orderdetails))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
