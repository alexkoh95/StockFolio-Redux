import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  stockSearchActions,
  handleSubmitSearchStockData,
} from "../../slices/Stock-Search-Slice/Stock-Search-Slice";
import StockSearchResultModal from "./Stock-Search-Result-Modal";

const StockSearchResult = () => {
  const state = useSelector((state) => state.stockSearch);
  const dispatch = useDispatch();
  const APIKEY = "TD5BNJPDBLJKBVAE";
  const searchOptions = {
    APIKEY: APIKEY,
    SearchQuery: state.searchQuery,
  };

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

  const handleSubmitSearchButton = async (event) => {
    dispatch(stockSearchActions.setLoadingOn());
    dispatch(handleSubmitSearchStockData(searchOptions));
  };

  useEffect(() => {
    dispatch(stockSearchActions.setLoadingOff());
  }, [state.stockData]);

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
