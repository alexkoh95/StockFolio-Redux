import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getTodayDate,
  getValueOfShares,
  submitSharesToDataBase,
} from "./Purchase-Stock-Helper-Functions";
const axios = require("axios");

export const handleSubmitSearchStockData = createAsyncThunk(
  "user/searchStockData",
  async (searchData) => {
    const stockAPI = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${searchData.SearchQuery}&apikey=${searchData.APIKEY}`;
    const companyOverviewAPI = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${searchData.SearchQuery}&apikey=${searchData.APIKEY}`;
    try {
      const stockResponse = await fetch(stockAPI);
      const companyResponse = await fetch(companyOverviewAPI);
      const stockResponsejson = await stockResponse.json();
      const companyResponsejson = await companyResponse.json();
      const stockData = {
        stockName: companyResponsejson["Name"],
        equityType: companyResponsejson["AssetType"],
        symbol: companyResponsejson["Symbol"],
        price: stockResponsejson["Global Quote"]["05. price"],
        sector: companyResponsejson["Sector"],
        industry: companyResponsejson["Industry"],
        description: companyResponsejson["Description"],
        fiftyDayMovingAverage: companyResponsejson["50DayMovingAverage"],
        oneYearHigh: companyResponsejson["52WeekHigh"],
        oneYearLow: companyResponsejson["52WeekLow"],
        analystTargetPrice: companyResponsejson["AnalystTargetPrice"],
        currency: companyResponsejson["Currency"],
      };
      return stockData;
    } catch (error) {
      console.log("There has been an error in fetching stock data: ", error);
    }
  }
);

const initialState = {
  stockData: [],
  searchQuery: "",
  searchStatus: "not searched yet",
  stockToPurchase: [],
  sharesToPurchase: "",
  totalValueOfSharesToPurchase: "",
  loading: false,
  userID: "",
};

export const stockSearchSlice = createSlice({
  name: "StockSearch",
  initialState,
  reducers: {
    setStockSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setTotalSharesToPuchase(state, action) {
      state.sharesToPurchase = action.payload;
      state.totalValueOfSharesToPurchase = getValueOfShares(
        state.sharesToPurchase,
        state.stockData.price
      );
    },
    purchaseStockButton(state, action) {
      submitSharesToDataBase(state.stockData, state.sharesToPurchase, action);
      state.sharesToPurchase = 0;
    },
    setLoadingOn(state, action) {
      state.loading = true;
    },
    setLoadingOff(state, action) {
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleSubmitSearchStockData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(handleSubmitSearchStockData.fulfilled, (state, action) => {
        state.status = "search_success";
        console.log("This is action.payload: ", action.payload);
        state.stockData = action.payload;
      })
      .addCase(handleSubmitSearchStockData.rejected, (state, action) => {
        state.status = "stock_search_failed";
      });
  },
});

export const stockSearchActions = stockSearchSlice.actions;

export default stockSearchSlice.reducer;
