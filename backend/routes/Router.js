const express = require("express");

const router = express.Router();

// Signup
const signupRoute = require("./Signup-Route");
router.use(signupRoute);

// Signin
const signinRoute = require("./Signin-Route");
router.use(signinRoute);

// Stock Purchase
const stockPurchaseRoute = require("./Stock-Purchase-Route");
router.use(stockPurchaseRoute);

// Get User Stock Information
const getUserStockInformation = require("./Get-User-Stock-Information");
router.use(getUserStockInformation);

module.exports = router;
