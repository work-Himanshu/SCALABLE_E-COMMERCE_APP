import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: 'men',
};
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setQuery } = counterSlice.actions;

export default counterSlice.reducer;
