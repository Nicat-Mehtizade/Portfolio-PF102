import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Watch } from "../../types";

interface BasketItem extends Watch {
  quantity: number;
}

interface BasketState {
  items: BasketItem[];
}
const initialState: BasketState = {
  items: [],
};

export const BasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<Watch>) => {
      const index = state.items.findIndex(
        (item) => item.id == action.payload.id
      );

      if (index == -1) {
        state.items = [...state.items, { ...action.payload, quantity: 1 }];
      } else {
        state.items[index].quantity++;
      }
    },
    removeFromBasket: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    increment: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id == action.payload.id
      );
      if (index !== -1) {
        state.items[index].quantity++;
      }
    },
    decrement: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id == action.payload.id
      );
      if (index !== -1) {
        state.items[index].quantity--;
      }
    },
    clearBasket: (state) => {
      state.items = [];
    },
  },
});

export const {addToBasket, removeFromBasket, increment, decrement, clearBasket} = BasketSlice.actions
export default BasketSlice.reducer