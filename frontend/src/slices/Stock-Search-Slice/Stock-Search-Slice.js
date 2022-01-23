import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import PurchaseStockHelperFunctions from "./Purchase-Stock-Helper-Functions"
import {
  getTodayDate,
  getValueOfShares,
  submitSharesToDataBase,
} from "./Purchase-Stock-Helper-Functions";

const initialState = {
  stockData: [],
  searchQuery: "",
  searchStatus: "not searched yet",
  stockToPurchase: [],
  sharesToPurchase: "",
  totalValueOfSharesToPurchase: "",
  loading: false,
};

export const stockSearchSlice = createSlice({
  name: "StockSearch",
  initialState,
  reducers: {
    setStockSearchQuery(state, action) {
      console.log("this is action: ", action);
      state.searchQuery = action.payload;
    },
    setStockData(state, action) {
      state.stockData = action.payload;
    },
    setTotalSharesToPuchase(state, action) {
      state.sharesToPurchase = action.payload;
      state.totalValueOfSharesToPurchase = getValueOfShares(
        state.sharesToPurchase,
        state.stockData.price
      );
      console.log(state.totalValueOfSharesToPurchase);
    },
    purchaseStockButton(state, action) {
      console.log("This is purchaseStockButton");
      submitSharesToDataBase(state.stockData, state.sharesToPurchase);
      state.sharesToPurchase = 0;
    },
    setLoadingOn(state, action) {
      state.loading = true;
    },
    setLoadingOff(state, action) {
      state.loading = false;
    },
  },
});

export const stockSearchActions = stockSearchSlice.actions;

export default stockSearchSlice.reducer;

// export const handleSubmitSearchStockData = createAsyncThunk(
//   "user/searchStockData",
//   async (APIKEY, searchQuery) => {
//     const stockAPI = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${searchQuery}&apikey=${APIKEY}`;
//     const companyOverviewAPI = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${searchQuery}&apikey=${APIKEY}`;
//     try {
//       // const stockResponse = await (await fetch(stockAPI)).json();
//       const stockResponse = await fetch(stockAPI);
//       const companyResponse = await fetch(companyOverviewAPI);
//       const stockResponsejson = await stockResponse.json();
//       const companyResponsejson = await companyResponse.json();
//       const stockData = {
//         stockName: companyResponsejson["Name"],
//         equityType: companyResponsejson["AssetType"],
//         symbol: companyResponsejson["Symbol"],
//         price: stockResponsejson["Global Quote"]["05. price"],
//         sector: companyResponsejson["Sector"],
//         industry: companyResponsejson["Industry"],
//         description: companyResponsejson["Description"],
//         fiftyDayMovingAverage: companyResponsejson["50DayMovingAverage"],
//         oneYearHigh: companyResponsejson["52WeekHigh"],
//         oneYearLow: companyResponsejson["52WeekLow"],
//         analystTargetPrice: companyResponsejson["AnalystTargetPrice"],
//         currency: companyResponsejson["Currency"],
//       };
//       console.log("This is stockData ", stockData);
//       return stockData;
//     } catch (error) {
//       console.log("There has been an error in fetching stock data: ", error);
//     }
//   }
// );

// extraReducers(builder) {
//   builder
//     .addCase(handleSubmitSearchStockData.pending, (state, action) => {
//       state.status = "loading";
//     })
//     .addCase(handleSubmitSearchStockData.fulfilled, (state, action) => {
//       state.status = "search_success";
//       console.log("This is action.payload: ", action.payload);
//       state.stockData.push(action.payload);
//     })
//     .addCase(handleSubmitSearchStockData.rejected, (state, action) => {
//       state.status = "stock_search_failed";
//     });
// },
