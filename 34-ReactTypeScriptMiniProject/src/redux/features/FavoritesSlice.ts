import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Watch } from "../../types";

interface FavoritesState {
  items: Watch[];
}
const initialState: FavoritesState = {
  items: [],
};
export const FavoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavs: (state, action: PayloadAction<Watch>) => {
      const found = state.items.findIndex(
        (item) => item.id == action.payload.id
      );

      if (found == -1) {
        state.items = [...state.items, action.payload];
      } else {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
  },
});

export const { toggleFavs } = FavoritesSlice.actions;

export default FavoritesSlice.reducer;
