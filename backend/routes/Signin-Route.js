const express = require("express");
const UserModel = require("../models/User-Model");
const router = express.Router();

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const app = require("../server");
const secret = process.env.SECRETTOKEN;

router.post("/signin", async (req, res) => {
  const body = req.body;
  const user = await UserModel.findOne({ email: body.email });
  if (user) {
    const validPassword = await bcrypt.compare(body.password, user.password);
    if (validPassword) {
      res.status(200).json({
        message: "Valid Password",
        signInSuccessful: "Success",
        userInformation: user,
      });
    } else {
      res
        .status(400)
        .json({ error: "Invalid password", signInSuccessful: "Failure" });
    }
  } else {
    res.status(401).json({ error: "User does not exist" });
  }
});

module.exports = router;
