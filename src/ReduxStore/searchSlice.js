import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
};
export const counterSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearch } = counterSlice.actions;

export default counterSlice.reducer;
