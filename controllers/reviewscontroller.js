const { Router } = require("express");
const { Reviews } = require("../models");
const validateSession = require("../middleware/validate-session");
const router = Router();

/* ***************************************
 *** REVIEW CREATE ***
 **************************************** */
router.post("/create", validateSession, (req, res) => {
  const reviewsEntry = {
    rate: req.body.reviews.rate,
    review: req.body.reviews.review,
    userId: req.user.id,
  };
  Reviews.create(reviewsEntry)
    .then((reviews) => res.status(200).json(reviews))
    .catch((err) => res.status(500).json({ error: err }));
});

/* ***************************************
 *** REVIEWS DELETE ***
 **************************************** */
router.delete("/delete/:id", validateSession, function (req, res) {
  const query = { where: { id: req.params.id } };

  Reviews.destroy(query)
    .then(() => res.status(200).json({ message: "Review Entry Deleted" }))
    .catch((err) => res.status(500).json({ error: err }));
});

/* ***************************************
 *** GET ALL REVIEWS ***
 **************************************** */
router.get("/", validateSession, (req, res) => {
  // let id = req.body.user.id;
  Reviews.findAll({
    // where: { owner: id },
  })
    .then((reviews) => res.status(200).json(reviews))
    .catch((err) => res.status(500).json({ error: err }));
});

/* ***************************************
 *** UPDATE REVIEWS ***
 **************************************** */
router.put("/update/:id", validateSession, function (req, res) {
  const updatereviewsEntry = {
    rate: req.body.reviews.rate,
    review: req.body.reviews.review,
    userId: req.user.id,
  };

  const query = { where: { id: req.params.id } };

  Reviews.update(updatereviewsEntry, query)
    .then((reviews) => res.status(200).json(reviews))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
