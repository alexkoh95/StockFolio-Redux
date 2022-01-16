import React from "react";
import SideNavBar from "../Navbar/Side-Navbar";
import StockPurchaseModal from "./Stock-Purchase-Modal";
import StockSearchResult from "./Stock-Search-Result";

const StockSearchHome = () => {
  return (
    <div>
      <SideNavBar />
      <main className="mx-4 p-9 pl-64">
        <StockSearchResult />
      </main>
    </div>
  );
};

export default StockSearchHome;
