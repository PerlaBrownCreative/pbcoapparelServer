const { Router } = require("express");
const { Shipping } = require("../models");
const validateSession = require("../middleware/validate-session");
const router = Router();

/* ***************************************
 *** shipping CREATE ***
 **************************************** */
router.post("/create", validateSession, (req, res) => {
  const shippingEntry = {
    first_name: req.body.shipping.first_name,
    last_name: req.body.shipping.last_name,
    address: req.body.shipping.address,
    city: req.body.shipping.city,
    state: req.body.shipping.state,
    zip_code: req.body.shipping.zip_code,
    mobile_number: req.body.shipping.mobile_number,
    image: req.body.shipping.image,
    userId: req.user.id,
  };
  Shipping.create(shippingEntry)
    .then((shipping) => res.status(200).json(shipping))
    .catch((err) => res.status(500).json({ error: err }));
});

/* ***************************************
 *** shipping DELETE ***
 **************************************** */
router.delete("/delete/:id", validateSession, function (req, res) {
  const query = { where: { id: req.params.id } };

  Shipping.destroy(query)
    .then(() => res.status(200).json({ message: "Shipping Entry Deleted" }))
    .catch((err) => res.status(500).json({ error: err }));
});

/* ***************************************
 *** get all logs ***
 **************************************** */
router.get("/", validateSession, (req, res) => {
  console.log(req.user.id)
  let userid = req.user.id;
  Shipping.findOne({
    where: { userId: userid },
  })
    .then((shipping) => res.status(200).json(shipping))
    .catch((err) => res.status(500).json({ error: err }));
});

/* ***************************************
 *** UPDATE shipping ***
 **************************************** */
router.put("/update/:id", validateSession, function (req, res) {
  const updateShippingEntry = {
    first_name: req.body.shipping.first_name,
    last_name: req.body.shipping.last_name,
    address: req.body.shipping.address,
    city: req.body.shipping.city,
    state: req.body.shipping.state,
    zip_code: req.body.shipping.zip_code,
    mobile_number: req.body.shipping.mobile_number,
    image: req.body.shipping.image,
    userId: req.user.id,
  };

  const query = { where: { id: req.params.id } };

  Shipping.update(updateShippingEntry, query)
    .then((shipping) => res.status(200).json(shipping))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
