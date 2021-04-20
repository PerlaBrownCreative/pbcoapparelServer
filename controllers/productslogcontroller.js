const { Router } = require("express");
const { Productslog } = require("../models");
const validateSession = require("../middleware/validate-session");
const router = Router();

/* ***************************************
 *** PRODUCT LOG CREATE ***
 **************************************** */
router.post("/create", validateSession, (req, res) => {
  // if (req.user.role !== "admin") {
  //   res.send.json({ error: "You are not authorized!" });
  // }

  const productslogEntry = {
    design_name: req.body.productslog.design_name,
    product_description: req.body.productslog.product_description,
    color: req.body.productslog.color,
    size: req.body.productslog.size,
    image: req.body.productslog.image,
    price: req.body.productslog.price,
    owner: req.user.id,
  };
  Productslog.create(productslogEntry)
    .then((productslog) => res.status(200).json(productslog))
    .catch((err) => res.status(500).json({ error: err }));
});

/* ***************************************
 *** PRODUCT LOG DELETE ***
 **************************************** */
router.delete("/delete/:id", validateSession, function (req, res) {
  if (req.user.role !== "admin") {
    res.send.json({ error: "You are not authorized!" });
  }
  const query = { where: { id: req.params.id } };

  Productslog.destroy(query)
    .then(() => res.status(200).json({ message: "Product Entry Deleted" }))
    .catch((err) => res.status(500).json({ error: err }));
});

/* ***************************************
 *** GET ALL PRODUCT LOGS ***
 **************************************** */
router.get("/", validateSession, (req, res) => {
  if (req.user.role !== "admin") {
    res.send.json({ error: "You are not authorized!" });
  }

  // let id = req.productslog.id;
  Productslog.findAll({
    // where: { id: id },
  })
    .then((productslog) => res.status(200).json(productslog))
    .catch((err) => res.status(500).json({ error: err }));
});

/* ***************************************
 *** UPDATE PRODUCTSLOG ***
 **************************************** */
router.put("/update/:id", validateSession, function (req, res) {
  // if (req.user.role !== "admin") {
  //   res.send.json({ error: "You are not authorized!" });
  // }
  const updateProductslogEntry = {
    design_name: req.body.productslog.design_name,
    product_description: req.body.productslog.product_description,
    color: req.body.productslog.color,
    size: req.body.productslog.size,
    image: req.body.productslog.image,
    price: req.body.productslog.price,
    owner: req.user.id,
  };

  const query = { where: { id: req.params.id } };

  Productslog.update(updateProductslogEntry, query)
    .then((productslog) => res.status(200).json(productslog))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
