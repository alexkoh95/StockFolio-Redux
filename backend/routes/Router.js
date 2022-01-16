const express = require("express");

const router = express.Router();

// Signup
const signupRoute = require("./Signup-Route");
router.use(signupRoute);

module.exports = router;
