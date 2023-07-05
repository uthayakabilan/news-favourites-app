import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "../features/userSlice/userSlice.js";
import newsReducer from "../features/newsSlice/newsSlice.js";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  user: userReducer,
  news: newsReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
