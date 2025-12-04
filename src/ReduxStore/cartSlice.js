import { createSlice } from '@reduxjs/toolkit';

const savedCart = JSON.parse(localStorage.getItem('cartData'));

const cartSlice = createSlice({
  name: 'cart',
  initialState: savedCart || {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    addItem(state, action) {
      const item = action.payload;
      const existing = state.items.find((i) => i.id === item.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }

      state.totalAmount = calcTotal(state.items);

      // ✅ Save to localStorage
      localStorage.setItem('cartData', JSON.stringify(state));
    },

    removeItem(state, action) {
      const id = action.payload;
      const existing = state.items.find((i) => i.id === id);

      if (!existing) return;

      existing.quantity -= 1;

      if (existing.quantity <= 0) {
        state.items = state.items.filter((i) => i.id !== id);
      }

      state.totalAmount = calcTotal(state.items);

      // ✅ Save to localStorage
      localStorage.setItem('cartData', JSON.stringify(state));
    },

    removeCompletely(state, action) {
      const id = action.payload;
      state.items = state.items.filter((i) => i.id !== id);
      state.totalAmount = calcTotal(state.items);

      // ✅ Save to localStorage
      localStorage.setItem('cartData', JSON.stringify(state));
    },
  },
});

function calcTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export const { addItem, removeItem, removeCompletely } = cartSlice.actions;
export default cartSlice.reducer;
