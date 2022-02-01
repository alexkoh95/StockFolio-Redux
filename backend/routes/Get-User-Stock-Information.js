const express = require("express");
const UserModel = require("../models/User-Model");
const router = express.Router();

const getCurrentStockQuote = require("../services/Get-Current-Stock-Quote");

router.get("/dashboard", async (req, res) => {
  const unique_user_id = req.headers.headers_unique_user_id;
  const user = await UserModel.findOne({
    user_unique_id: unique_user_id,
  });
  if (user) {
    res.status(200).json({
      userInformation: user,
    });
  } else {
    res.status(400).json({ error: "There was an error in fetching user info" });
  }
});

module.exports = router;
