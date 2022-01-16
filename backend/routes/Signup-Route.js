const express = require("express");
const router = express.Router();
const UserModel = require("../models/User-Model");

router.post("/signup", async (req, res) => {
  await UserModel.create(req.body);
  res.json({
    status: "ok",
    msg: `User created with following info: ${req.body}`,
  });
});

module.exports = router;
