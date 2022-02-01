const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const saltRounds = 10;

const stocks = require("./Stocks-Model");

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    listOfStocks: [stocks.StockSchema],
    user_unique_id: { type: String, required: true },
    cashInAccount: { type: Number, default: 500000 },
  },
  { collection: "Users" }
);

// This is the middleware to encrypt passwords

const UserModel = mongoose.model("UserModel", UserSchema);

module.exports = UserModel;
