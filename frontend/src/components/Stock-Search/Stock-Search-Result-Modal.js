import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { stockSearchActions } from "../../slices/Stock-Search-Slice/Stock-Search-Slice";

const StockSearchResultModal = () => {
  const state = useSelector((state) => state.stockSearch);
  const dispatch = useDispatch();
  const getUserInfo = useSelector((state) => state);
  const userInfoForPurchase = {
    user_unique_id: getUserInfo.signin.signedinUserInformation.user_unique_id,
    cashInAccount: getUserInfo.signin.signedinUserInformation.cashInAccount,
  };

  const moment = require("moment");
  const todayDate = moment().format("YYYY-MM-DD");

  const handlePurchaseStockButton = () => {
    dispatch(stockSearchActions.purchaseStockButton(userInfoForPurchase));
  };

  const handleShareChange = (event) => {
    dispatch(stockSearchActions.setTotalSharesToPuchase(event.target.value));
  };

  const displayTotalValueOfSharesToPurchase = () => {
    if (state.sharesToPurchase) {
      return <div>{state.totalValueOfSharesToPurchase}</div>;
    } else {
      return <div>Please Enter Total Shares To Purchase</div>;
    }
  };
  return (
    <div className="Search-Container">
      <div className="py-20 m-3 bg-white bg-opacity-40 shadow-lg rounded-lg">
        <div className="fields-container grid grid-rows-5 grid-flow-col gap-4">
          <div className="px-5 col-span-3 font-bold text-3xl outline-gray-600 border-4">
            {state.stockData.stockName}
            <div className="text-gray-500 text-sm py-3">
              {state.stockData.description}
            </div>
          </div>
          <div className="px-8 font-bold text-2xl outline-gray-600 border-4">
            <div>Symbol:</div>
            <div className="text-gray-500">{state.stockData.symbol}</div>
          </div>
          <div className="px-8 font-bold text-2xl outline-gray-600 border-4">
            <div>Equity Type:</div>{" "}
            <div className="text-gray-500">{state.stockData.equityType}</div>
          </div>
          <div className="px-8 font-bold text-2xl outline-gray-600 border-4">
            <div>Price:</div>{" "}
            <div className="text-gray-500">{state.stockData.price}</div>
          </div>
          <div className="px-8 font-bold text-2xl outline-gray-600 border-4">
            <div>Sector:</div>{" "}
            <div className="text-gray-500">{state.stockData.sector}</div>
          </div>
          <div className="px-8 font-bold text-2xl outline-gray-600 border-4">
            <div>Industry:</div>{" "}
            <div className="text-gray-500">{state.stockData.industry}</div>
          </div>
          <div className="px-8 font-bold text-2xl outline-gray-600 border-4">
            <div>50 Day Moving Average</div>
            <div className="text-gray-500">
              {state.stockData.fiftyDayMovingAverage}
            </div>
          </div>
          <div className="px-8 font-bold text-2xl outline-gray-600 border-4">
            <div>52 Week High:</div>{" "}
            <div className="text-gray-500">{state.stockData.oneYearHigh}</div>
          </div>
          <div className="px-8 font-bold text-2xl outline-gray-600 border-4">
            <div>52 Week Low:</div>
            <div className="text-gray-500">{state.stockData.oneYearLow}</div>
          </div>
          <div className="px-8 font-bold text-2xl outline-gray-600 border-4">
            <div>Analyst Target Price:</div>
            <div className="text-gray-500">
              {state.stockData.analystTargetPrice}
            </div>
          </div>
          <div className="shares-input-container">
            <label>Shares to Purchase</label>
            <input onChange={handleShareChange} type="number"></input>
          </div>
          <div className="total-value">
            Total Value to Purchase: {displayTotalValueOfSharesToPurchase()}
          </div>
          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
            onClick={handlePurchaseStockButton}
          >
            Purchase Stock
          </button>
        </div>
      </div>
    </div>
  );
};

export default StockSearchResultModal;
