import React from "react";
import { Link } from "react-router-dom";

const EntryPage = () => {
  const nameOfWebsite = "StockFolio";
  return (
    <div className="overall-container flex items-center justify-center space-x-2 h-screen">
      <div className="grid-rows-2 mb-12">
        <div className="text-8xl font-bold leading-18 text-indigo-600">
          {nameOfWebsite}
        </div>
        <div className="subtitle-container items-center justify-center">
          <div className="subtitles font-bold text-black text-2xl pl-16">
            Personal Investing Simulation
          </div>
        </div>
        <div className="grid grid-cols-2 inline-flex">
          <Link
            to="/signin"
            className="m-4 px-5 py-2 border-2 border-indigo-600 uppercase font-semibold hover:bg-indigo-600 hover:text-white"
          >
            <div className="px-12"> Sign In</div>
          </Link>
          <Link
            to="/signup"
            className="m-4 px-5 py-2 border-2 border-indigo-600 uppercase font-semibold hover:bg-indigo-600 hover:text-white"
          >
            <div className="px-12"> Sign Up</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EntryPage;
