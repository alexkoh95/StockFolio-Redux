const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema({
  stockPurchaseId: { type: String, required: true },
  stockName: { type: String, required: true },
  equityType: { type: String, required: true },
  symbol: { type: String, required: true },
  priceBought: { type: Number, required: true },
  totalShares: { type: Number, required: true },
  industry: { type: String, required: true },
  sector: { type: String, required: true },
  valueAtTimeOfPurchase: { type: Number, required: true },
  currency: { type: String, required: true },
  isSold: { type: Boolean },
  dateBought: { type: Date },
});

const StocksModel = mongoose.model("StocksModel", StockSchema);

module.exports = { StocksModel, StockSchema };

// https://mongoosejs.com/docs/2.7.x/docs/embedded-documents.html
