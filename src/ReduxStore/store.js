import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import searchReducer from './searchSlice';
import cartReducer from './cartSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    search: searchReducer,
    cart: cartReducer,
  },
});

export default store;
