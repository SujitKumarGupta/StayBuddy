const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
const passport = require("passport");
const userController = require("../controllers/users");
const { savaRedirectUrl } = require("../middleware");


router.route("/signup")
.get(userController.renderSignUpForm)
.post(
  wrapAsync(userController.signup)
)


router.route("/login")
.get(userController.renderLoginForm)
.post(
  savaRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true
  }),
 userController.login
)

router.get("/logout", userController.logout);
module.exports = router;
