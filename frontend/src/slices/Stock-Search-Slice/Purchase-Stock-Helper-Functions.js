const axios = require("axios");
const moment = require("moment");

export const getTodayDate = () => {
  const todayDate = moment().format("YYYY-MM-DD");
  return todayDate;
};

export const getValueOfShares = (sharesToPurchase, price) => {
  let totalValueOfShares = parseFloat(sharesToPurchase) * parseFloat(price);
  return totalValueOfShares;
};

export const submitSharesToDataBase = (state, sharesToPurchase, action) => {
  const user_unique_id = action.payload.user_unique_id;
  const stock_name = state.stockName;
  const equity_type = state.equityType;
  const symbol = state.symbol;
  const price_bought = state.price;
  const sector = state.sector;
  const industry = state.industry;
  const total_shares = sharesToPurchase;
  const value_at_time_of_purchase = getValueOfShares(
    sharesToPurchase,
    state.price
  );
  const cashInAccount =
    action.payload.cashInAccount - value_at_time_of_purchase;
  const currency = state.currency;
  const is_sold = false;
  const date_bought = getTodayDate();
  const submitToDataBase = {
    stock_name,
    equity_type,
    symbol,
    price_bought,
    sector,
    industry,
    total_shares,
    value_at_time_of_purchase,
    currency,
    is_sold,
    date_bought,
    user_unique_id,
    cashInAccount,
  };
  console.log(submitToDataBase);
  axios
    .put("http://localhost:5001/stocksearch", submitToDataBase)
    .then((res) => console.log("Stock Purchase Successful", res.data));
};
