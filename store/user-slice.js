// Redux
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userAddress: "",
  mode: "dark",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserAddress(state, action) {
      state.userAddress = action.payload;
    },

    setMode(state, action) {
      state.mode = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
