import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  name: "",
  password: "",
  signedin: false,
  signedinUserInformation: "",
};

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
    setUserSignedin(state, action) {
      state.signedin = true;
      state.signedinUserInformation = action.payload;
    },
    setIncorrectUserInformation(state, action) {
      state.incorrectUserInformation = true;
    },
    handleSignoutButton(state, action) {
      state.signedin = false;
    },
  },
});

export const signinActions = signinSlice.actions;

export default signinSlice.reducer;
