import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../";

const infoData = (state: RootState) => state.global.infoData;
export const infoReselect = createSelector(infoData, (info) => {
  return info
});

const favorite = (state: RootState) => state.global.favorites;
export const favoriteReselect = createSelector(favorite, (fav) => {
  return fav
});

const carts = (state: RootState) => state.global.cart;
export const cartReselect = createSelector(carts, (cart) => {
  return cart
});