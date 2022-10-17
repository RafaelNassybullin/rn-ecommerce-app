import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IData } from "../../interface"

interface IDataState {
  infoData: IData
  favorites: IData[]
  cart: IData[]
  reviws: IData[]
}

const dataState: IDataState = {
  infoData: {} as IData,
  favorites: [],
  cart: [],
  reviws: []
};

export const dataSlice = createSlice({
  name: "global",
  initialState: dataState,
  reducers: {
    insertToFavorites: (state, action: PayloadAction<IData>) => {
      state.favorites.push(action.payload)
    },
    deleteFromFavorites: (state, action: PayloadAction<IData>) => {
      state.favorites = state.favorites.filter((item: IData) => item.id !== action.payload.id)
    },
    insertToCart: (state, action: PayloadAction<IData>) => {
      state.cart.push(action.payload)
    },
    deleteFromCart: (state, action: PayloadAction<IData>) => {
      state.cart = state.cart.filter((item: IData) => item.id !== action.payload.id)
    },
    pushToInfo: (state, action: PayloadAction<IData>) => {
      state.infoData = action.payload
    }
  },
});

export const {
  insertToFavorites,
  pushToInfo,
  deleteFromFavorites,
  insertToCart,
  deleteFromCart
} = dataSlice.actions;

export const dataReducer = dataSlice.reducer;