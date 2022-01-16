import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  stockSearchActions,
  handleSubmitSearchStockData,
} from "../../slices/Stock-Search-Slice/Stock-Search-Slice";

const APIKEY = "TD5BNJPDBLJKBVAE";

const StockSearchResult = () => {
  const state = useSelector((state) => state.stockSearch);
  const dispatch = useDispatch();

  const displayStockSearchResults = () => {
    if ([]) {
      return (
        <div className="Search-Container grid">
          <div className="py-40 m-3 bg-white bg-opacity-40 shadow-lg rounded-lg">
            Empty Field
          </div>
        </div>
      );
    } else {
      return <div>Hello, this is supposed to be search results</div>;
    }
  };

  const handleSearchChange = (event) => {
    dispatch(stockSearchActions.setStockSearchQuery(event.target.value));
  };

  const handleSubmitSearchButton = async (event) => {
    // dispatch(handleSubmitSearchStockData(APIKEY, state.searchQuery));
    const stockAPI = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${state.searchQuery}&apikey=${APIKEY}`;
    const companyOverviewAPI = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${state.searchQuery}&apikey=${APIKEY}`;
    try {
      //   const stockResponse = await (await fetch(stockAPI)).json();
      const stockResponse = await (await fetch(stockAPI)).json();
      const companyResponse = await (await fetch(companyOverviewAPI)).json();
      const stockData = {
        stockName: companyResponse["Name"],
        equityType: companyResponse["AssetType"],
        symbol: companyResponse["Symbol"],
        price: stockResponse["Global Quote"]["05. price"],
        sector: companyResponse["Sector"],
        industry: companyResponse["Industry"],
        description: companyResponse["Description"],
        fiftyDayMovingAverage: companyResponse["50DayMovingAverage"],
        oneYearHigh: companyResponse["52WeekHigh"],
        oneYearLow: companyResponse["52WeekLow"],
        analystTargetPrice: companyResponse["AnalystTargetPrice"],
        currency: companyResponse["Currency"],
      };
      dispatch(stockSearchActions.setStockData(stockData));
      return stockData;
    } catch (error) {
      console.log("There has been an error in fetching stock data: ", error);
    }
  };

  return (
    <div>
      <div>
        <div className="flex items-center justify-center space-x-2 pt-20">
          <input
            className="inline-flex px-4 py-1 h-10 w-72 text-gray-700 text-md bg-transparent border-2 border-indigo-600 rounded-full focus:outline-none shadow-md shadow-inner"
            type="text"
            placeholder="Enter Symbol (e.g. AAPL)"
            onChange={handleSearchChange}
          />

          <button
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-indigo-600 shadow-lg transform hover:bg-indigo-700 hover:scale-105 transition duration-500 ease-in-out hover:animate-pulse"
            onClick={handleSubmitSearchButton}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div>{displayStockSearchResults()}</div>
    </div>
  );
};

export default StockSearchResult;
