import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { WatchApi } from "../services/watchesApi";
import FavoritesReducer from "./../features/FavoritesSlice"
import BasketReducer from "./../features/BasketSlice"
export const store = configureStore({
  reducer: {
    favorites:FavoritesReducer,
    basket:BasketReducer,
    [WatchApi.reducerPath]: WatchApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(WatchApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
