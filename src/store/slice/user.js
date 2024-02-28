import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  userInfo: {},
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
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },

    clear: (state) => {
      state.userInfo = undefined;
      state.token = undefined;
    },
  },
});

export const user = rootSlice.reducer;
export const actions = rootSlice.actions;
