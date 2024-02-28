import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import wxStorage from "./storageHack";
import { reducers } from "./slice";
// 缓存数据配置
const persistConfig = {
  key: "layout",
  storage: wxStorage,
  throttle: 30,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  devTools: false,
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
