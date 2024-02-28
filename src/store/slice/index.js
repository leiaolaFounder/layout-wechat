import { combineReducers } from "@reduxjs/toolkit";
import { user } from "./user";
import { tabbar } from "./tabbar";

export const reducers = combineReducers({
  user,
  tabbar,
});
