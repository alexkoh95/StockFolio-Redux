const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema({
  stock_name: { type: String, required: true },
  equity_type: { type: String, required: true },
  symbol: { type: String, required: true },
  price_bought: { type: Number, required: true },
  total_shares: { type: Number, required: true },
  industry: { type: String, required: true },
  sector: { type: String, required: true },
  value_at_time_of_purchase: { type: Number, required: true },
  currency: { type: String, required: true },
  is_sold: { type: Boolean },
  dateBought: { type: Date },
  user_unique_id: { type: String },
});

const StocksModel = mongoose.model("StocksModel", StockSchema);

module.exports = { StocksModel, StockSchema };

// https://mongoosejs.com/docs/2.7.x/docs/embedded-documents.html
