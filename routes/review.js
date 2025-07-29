const express = require("express");
const wrapAsync = require("../utils/wrapAsync.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");
const router = express.Router({mergeParams: true});


// Post Route
router.post("/",isLoggedIn, validateReview,  wrapAsync(reviewController.createReview));

// Delete Route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;