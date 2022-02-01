import { configureStore } from "@reduxjs/toolkit";

// add slice Reducers to the store
import signinReducer from "../slices/Signup-login-slice/Signin-slice";
import signupReducer from "../slices/Signup-login-slice/SignUp-Slice";
import stockSearchReducer from "../slices/Stock-Search-Slice/Stock-Search-Slice";
import dashboardReducer from "../slices/Dashboard-Slice/Dashboard-Slice";

export const store = configureStore({
  reducer: {
    signin: signinReducer,
    signup: signupReducer,
    stockSearch: stockSearchReducer,
    dashboard: dashboardReducer,
  },
});

/*
This creates a Redux store and also automatically configures the 
Redux DevTools extension so that you can inspect the store while developing
*/
