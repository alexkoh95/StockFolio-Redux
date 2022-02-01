import React, { useEffect } from "react";
import SideNavBar from "../Navbar/Side-Navbar";
import { useSelector, useDispatch } from "react-redux";
import {
  dashboardActions,
  getUserStockInformation,
} from "../../slices/Dashboard-Slice/Dashboard-Slice";

import DisplayStockCard from "./Display-Stock-Card";
import GridView from "./Grid-View";

const Dashboard = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const userInformation = state.signin.signedinUserInformation;
  const user_unique_id = userInformation.user_unique_id;

  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const moment = require("moment");
  const todayDate = moment().format("dddd MMMM Do YYYY");

  useEffect(async () => {
    dispatch(getUserStockInformation(user_unique_id));
    console.log(
      state.dashboard.userStockInformation.userInformation.listOfStocks
    );
    getTodayStockPrice(
      state.dashboard.userStockInformation.userInformation.listOfStockss
    );
  }, []);

  const finnhub = require("finnhub");
  const api_key = finnhub.ApiClient.instance.authentications["api_key"];
  api_key.apiKey = "c5olrciad3idr38tbmig";
  const finnhubClient = new finnhub.DefaultApi();

  let todayStockPrice = [];
  const getTodayStockPrice = async (data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      finnhubClient.quote(data[i], (error, data, response) => {
        let objectToPush = {};
        objectToPush[data][i] = data.c;
        todayStockPrice.push(objectToPush);
      });
    }
  };

  console.log(todayStockPrice);

  const loadingSpinner = () => {
    if (state.dashboard.status !== "succeeded") {
      return (
        <div className="py-40 flex justify-center items-center">
          <div className="w-40 h-40 border-t-4 border-b-4 border-indigo-700 rounded-full animate-spin"></div>
        </div>
      );
    } else {
      return (
        <div>
          <DisplayStockCard />
          <GridView />
        </div>
      );
    }
  };

  return (
    <div>
      <SideNavBar />
      <main className="mx-4 p-9 pl-64">
        <div className="col-span-2">
          <div
            className="h-52 bg-gradient-to-br from-yellow-100 via-red-100 to-pink-100 py-2 px-2 m-3 text-gray-700 rounded-lg bg-opacity-20 text-left pl-8 pt-12 
            bg-cover bg-center filter brightness-105"
            style={{
              backgroundImage: `url('https://imgur.com/ZhDV6qG.jpg')`,
            }}
          >
            <h1 className="text-4xl font-bold text-gray-300">
              Welcome Back {userInformation.name}
            </h1>
            <h1 className="text-lg text-gray-300">{todayDate}</h1>
            <h1 className="text-lg text-gray-300">
              Total Cash in Account: {""}
              {currencyFormatter.format(userInformation.cashInAccount)}
            </h1>
            <h1 className="text-lg text-gray-300">Your Stock Value is</h1>
          </div>
        </div>
        <div>{loadingSpinner()}</div>
      </main>
    </div>
  );
};

export default Dashboard;
