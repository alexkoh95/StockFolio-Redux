const mongoose = require("mongoose");

const stocks = require("./Stocks-Model");

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    listOfStocks: [stocks.StockSchema],
  },
  { collection: "Users" }
);

const UserModel = mongoose.model("UserModel", UserSchema);

module.exports = UserModel;
