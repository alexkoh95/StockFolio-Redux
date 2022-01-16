import { createSlice } from "@reduxjs/toolkit";

const initialState = { email: "", name: "", password: "", submit: 0 };

export const signinSlice = createSlice({
  name: "SignIn",
  initialState,
  reducers: {
    setEmailAddress(state, action) {
      state.email = action.payload;
    },
    setName(state, action) {
      state.name = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setSubmitButton(state, action) {
      state.submit += 1;
      console.log("Submit button clicked");
    },
  },
});

export const signinActions = signinSlice.actions;

export default signinSlice.reducer;
