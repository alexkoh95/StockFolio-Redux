import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const axios = require("axios");

const initialState = {
  stockData: [],
  searchQuery: "",
  searchStatus: "not searched yet",
};

export const handleSubmitSearchStockData = createAsyncThunk(
  "user/searchStockData",
  async (APIKEY, searchQuery) => {
    // const stockAPI = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${searchQuery}&apikey=${APIKEY}`;
    // const companyOverviewAPI = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${searchQuery}&apikey=${APIKEY}`;
    // try {
    //   //   const stockResponse = await (await fetch(stockAPI)).json();
    //   const stockResponse = await fetch(stockAPI);
    //   const companyResponse = await fetch(companyOverviewAPI);
    //   //   const companyResponse = await (await fetch(companyOverViewAPI)).json();
    //   //   const stockResponse = await axios.get(stockAPI);
    //   //   const companyResponse = await axios.get(companyOverviewAPI);
    //   const stockData = {
    //     stockName: companyResponse["Name"],
    //     equityType: companyResponse["AssetType"],
    //     symbol: companyResponse["Symbol"],
    //     price: stockResponse["Global Quote"]["05. price"],
    //     sector: companyResponse["Sector"],
    //     industry: companyResponse["Industry"],
    //     description: companyResponse["Description"],
    //     fiftyDayMovingAverage: companyResponse["50DayMovingAverage"],
    //     oneYearHigh: companyResponse["52WeekHigh"],
    //     oneYearLow: companyResponse["52WeekLow"],
    //     analystTargetPrice: companyResponse["AnalystTargetPrice"],
    //     currency: companyResponse["Currency"],
    //   };
    //   console.log("This is stockData ", stockData);
    //   return stockData;
    // } catch (error) {
    //   console.log("There has been an error in fetching stock data: ", error);
    // }
  }
);

export const stockSearchSlice = createSlice({
  name: "StockSearch",
  initialState,
  reducers: {
    setStockSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setStockData(state, action) {
      state.stockData = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(handleSubmitSearchStockData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(handleSubmitSearchStockData.fulfilled, (state, action) => {
        state.status = "search_success";
        console.log("This is action.payload: ", action.payload);
        state.stockData.push(action.payload);
      })
      .addCase(handleSubmitSearchStockData.rejected, (state, action) => {
        state.status = "stock_search_failed";
      });
  },
});

export const stockSearchActions = stockSearchSlice.actions;

export default stockSearchSlice.reducer;
