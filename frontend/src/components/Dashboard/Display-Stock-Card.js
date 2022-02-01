import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { dashboardActions } from "../../slices/Dashboard-Slice/Dashboard-Slice";

const DisplayStockCard = () => {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const userStockInformation =
    state.dashboard.userStockInformation.userInformation.listOfStocks;

  return (
    <div>
      <div className="Display-Card-Container grid grid-rows-5 grid-flow-col gap-4">
        {userStockInformation.map((element, key) => {
          return (
            <div key={key} className="Display-Card outline-black border-4">
              <div>{element.stock_name}</div>
              <div>{element.equity_type}</div>
              <div>{element.symbol}</div>
              <div>{element.price_bought}</div>
              <div>{element.total_shares}</div>
              <div>{element.value_at_time_of_pruchase}</div>
              <div>{element.industry}</div>
              <div>{element.sector}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayStockCard;
