import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  signupEmailAddress: "",
  signupName: "",
  signupPassword: "",
  status: "not loading",
};

export const submitUserDetails = createAsyncThunk(
  "user/submituserdata",
  async (initialState) => {
    const newUser = {
      name: initialState.signupName,
      email: initialState.signupEmailAddress,
      password: initialState.signupPassword,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    };
    const response = fetch("http://localhost:5001/signup", requestOptions);
  }
);

export const signupSlice = createSlice({
  name: "SignUp",
  initialState,
  reducers: {
    setSignupEmailAddress(state, action) {
      state.signupEmailAddress = action.payload;
    },
    setSignupName(state, action) {
      state.signupName = action.payload;
    },
    setSignupPassword(state, action) {
      state.signupPassword = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(submitUserDetails.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(submitUserDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(submitUserDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const signupActions = signupSlice.actions;

export default signupSlice.reducer;
