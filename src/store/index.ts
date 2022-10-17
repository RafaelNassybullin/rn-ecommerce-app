import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { all } from "redux-saga/effects";
import {
  dataReducer
} from "../store/reducer";

export const store = configureStore({
  reducer: {
    global: dataReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>

export * from "./reducer"
export * from "./selector"
