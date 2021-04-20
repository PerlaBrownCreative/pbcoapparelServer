const { Router } = require("express");
const { Productscategory } = require("../models");
const validateSession = require("../middleware/validate-session");
const router = Router();

/* ***************************************
 *** CREATE PRODUCT CATEGORY ***
 **************************************** */
router.post("/create", validateSession, (req, res) => {
  const productscategoryEntry = {
    category_name: req.body.productscategory.category_name,
    description: req.body.productscategory.description,
    image: req.body.productscategory.image,
  };
  Productscategory.create(productscategoryEntry)
    .then((productscategory) => res.status(200).json(productscategory))
    .catch((err) => res.status(500).json({ error: err }));
});

/* ***************************************
 *** DELETE PRODUCTCATEGORY ***
 **************************************** */
router.delete("/delete/:id", validateSession, function (req, res) {
  const query = { where: { id: req.params.id } };

  Productscategory.destroy(query)
    .then(() => res.status(200).json({ message: "Product Category Deleted" }))
    .catch((err) => res.status(500).json({ error: err }));
});

/* ***************************************
 *** GET ALL PRODUCTCATEGORY ***
 **************************************** */
router.get("/", validateSession, (req, res) => {
  // let id = req.productslog.id;
  Productscategory.findAll({
    // where: { id: id },
  })
    .then((productscategory) => res.status(200).json(productscategory))
    .catch((err) => res.status(500).json({ error: err }));
});

/* ***************************************
 *** UPDATE PRODUCTSCATEGORY***
 **************************************** */
router.put("/update/:id", validateSession, function (req, res) {
  const updateProductscategoryEntry = {
    category_name: req.body.productscategory.category_name,
    description: req.body.productscategory.description,
    image: req.body.productscategory.image,
  };

  const query = { where: { id: req.params.id } };

  Productscategory.update(updateProductscategoryEntry, query)
    .then((productscategory) => res.status(200).json(productscategory))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
