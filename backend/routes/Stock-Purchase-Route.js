const express = require("express");
const router = express.Router();

const StocksModel = require("../models/Stocks-Model");

router.put("/stocksearch", async (req, res) => {
  await StocksModel.StocksModel.create(req.body);
  res.json({
    status: "ok",
    msg: `stock purchase successful with following info: ${req.body}`,
  });
  // find by userID
  // insert req.body into it - req.body is the stockData object
  // e.g. db.exampleCollection.upDateOne({_id: "ThisisTheUserIDtoVerify"}, {$push: {req.body}})
  // this should go into servcies (find User by ID --> a user method)
  console.log("This is stock purchase, with this info: ", req.body);
});

module.exports = router;
