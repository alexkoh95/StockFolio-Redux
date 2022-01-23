import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
  Outlet,
} from "react-router-dom";

const PrivateRoute = () => {
  const state = useSelector((state) => state);
  const isSignedin = state.signin.signedin;

  return isSignedin ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
