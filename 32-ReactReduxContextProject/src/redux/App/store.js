import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { productsApi } from '../services/products'
import  FavoritesReducer  from '../features/FavoritesSlice'
import BasketReducer from "./../features/BasketSlice"
export const store = configureStore({
  reducer: {
    favorites:FavoritesReducer,
    basket:BasketReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})

setupListeners(store.dispatch)