import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./reducers/cartReducer";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
