const express = require("express");
const router = express.Router();

const { StocksModel } = require("../models/Stocks-Model");
const UserModel = require("../models/User-Model");

router.put("/stocksearch", async (req, res) => {
  const newStock = await new StocksModel(req.body);
  newStock.save();
  await UserModel.findOneAndUpdate(
    { user_unique_id: req.body.user_unique_id },
    { $push: { listOfStocks: req.body } }
  );
  const user = await UserModel.findOne({
    user_unique_id: req.body.user_unique_id,
  });
  const cashInAccount = user.cashInAccount;
  console.log(cashInAccount);
  const cashRemaining = cashInAccount - req.body.value_at_time_of_purchase;

  await UserModel.findOneAndUpdate(
    { user_unique_id: req.body.user_unique_id },
    { $set: { cashInAccount: cashRemaining } }
  );
  console.log("This is stock purchase, with this info: ", req.body);
});

module.exports = router;
