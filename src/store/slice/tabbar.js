import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {};

const name = "tabbar";

const rootSlice = createSlice({
  name,
  initialState,
  reducers: {
    setTabbarCode: (state, action) => {
      state.code = action.payload;
    },
    clear: (state) => {
      state.code = undefined;
    },
  },
});

export const tabbar = rootSlice.reducer;
export const actions = rootSlice.actions;
