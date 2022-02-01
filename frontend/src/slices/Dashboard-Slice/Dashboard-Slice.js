import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  userStockInformation: "",
};

export const getUserStockInformation = createAsyncThunk(
  "dashboard/getUserInformation",
  async (input) => {
    try {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          headers_unique_user_id: input,
        },
      };
      const data = await fetch(
        "http://localhost:5001/dashboard",
        requestOptions
      );
      return data.json();
    } catch (error) {
      console.log("There has been an error: ", error);
    }
  }
);

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setUserStockInformation(state, action) {
      console.log(action);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserStockInformation.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getUserStockInformation.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userStockInformation = action.payload;
      })
      .addCase(getUserStockInformation.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const dashboardActions = dashboardSlice.actions;

export default dashboardSlice.reducer;
