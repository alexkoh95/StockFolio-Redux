const express = require("express");
const router = express.Router();
const UserModel = require("../models/User-Model");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

router.post("/signup", async (req, res) => {
  const user = new UserModel(req.body);
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  const id = crypto.randomBytes(16).toString("hex");
  user.user_unique_id = id;
  user.save().then((doc) => res.status(201).send(doc));
});

module.exports = router;
