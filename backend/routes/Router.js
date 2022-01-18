const express = require("express");

const router = express.Router();

// Signup
const signupRoute = require("./Signup-Route");
router.use(signupRoute);

// Stock Purchase
const stockPurchaseRoute = require("./Stock-Purchase-Route");
router.use(stockPurchaseRoute);

module.exports = router;
