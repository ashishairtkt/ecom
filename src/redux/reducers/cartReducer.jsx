import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;
      // Check if the item is already in the cart
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        // If the item exists, update its quantity
        existingItem.quantity += quantity;
      } else {
        // If the item doesn't exist, add it to the cart
        state.cart.push({ id, quantity });
      }
    },
    removeFromCart: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItemIndex = state.cart.findIndex((item) => item.id === id);
      if (existingItemIndex !== -1) {
        // If the item exists in the cart, decrement its quantity
        state.cart[existingItemIndex].quantity -= quantity;
        // If the quantity becomes 0 or less, remove the item from the cart
        if (state.cart[existingItemIndex].quantity <= 0) {
          state.cart.splice(existingItemIndex, 1);
        }
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
