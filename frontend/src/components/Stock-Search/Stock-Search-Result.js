import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { stockSearchActions } from "../../slices/Stock-Search-Slice/Stock-Search-Slice";
import StockSearchResultModal from "./Stock-Search-Result-Modal";

const StockSearchResult = () => {
  const state = useSelector((state) => state.stockSearch);
  const dispatch = useDispatch();
  const APIKEY = "TD5BNJPDBLJKBVAE";

  const displayStockSearchResults = () => {
    if (state.stockData.length !== 0 && state.loading === false) {
      return <StockSearchResultModal />;
    } else if (state.loading === true) {
      return (
        <div className="py-40 flex justify-center items-center">
          <div className="w-40 h-40 border-t-4 border-b-4 border-indigo-700 rounded-full animate-spin"></div>
        </div>
      );
    } else {
      return (
        <div className=" py-40 px-40 ">
          <div className="text-3xl font-bold leading-18 text-indigo-600 animate-pulse">
            Your Search Results Will Display Here
          </div>
        </div>
      );
    }
  };

  const handleSearchChange = (event) => {
    dispatch(stockSearchActions.setStockSearchQuery(event.target.value));
  };

  const handleLoading = () => {
    dispatch(stockSearchActions.setLoadingOn());
  };

  const handleSubmitSearchButton = async (event) => {
    handleLoading();
    // dispatch(handleSubmitSearchStockData(APIKEY, state.searchQuery));
    const stockAPI = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${state.searchQuery}&apikey=${APIKEY}`;
    const companyOverviewAPI = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${state.searchQuery}&apikey=${APIKEY}`;
    try {
      // maybe pull out the double await and put it in a helper function/file e.g. the {userAPI} the ./userAPI
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
      dispatch(stockSearchActions.setLoadingOff());
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
