import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Routes,
} from "react-router-dom";

import Dashboard from "../Dashboard/Dashboard";
import GraphsHome from "../Graphs/Graphs-Home";
import StockSearchHome from "../Stock-Search/Stock-Search-Home";
import SideNavBar from "./Side-Navbar";
const HomePage = () => {
  return (
    <div>
      <div className="">
        <SideNavBar />
      </div>
      <main className="mx-4 p-9 pl-64">
        <Routes>
          <Route path="/Dashboard" exact element={<Dashboard />} />
          <Route path="/GraphsHome" exact element={<GraphsHome />} />
          <Route path="/StockSearch" exact element={<StockSearchHome />} />
        </Routes>
      </main>
    </div>
  );
};
export default HomePage;
