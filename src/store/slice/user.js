import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
  PDH: 0,
};
const name = "user";

const rootSlice = createSlice({
  name,
  initialState,
  reducers: {
    init: (state, action) => {
      for (const key in action.payload) {
        state[key] = action.payload[key];
      }
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setPDH: (state, action) => {
      state.PDH = action.payload;
    },
    clear: (state) => {
      state.userInfo = undefined;
      state.token = undefined;
    },
  },
});

export const user = rootSlice.reducer;
export const actions = rootSlice.actions;
