import { createSlice } from '@reduxjs/toolkit'

export const togglemenuSlice = createSlice({
  name: 'menuToggle',
  initialState: {
    value: JSON.parse(localStorage.getItem('menuToggle')) || false
  },
  reducers: {
    menuToggle: (state, action) => {
      state.value = action.payload;
      localStorage.setItem('menuToggle', JSON.stringify(state.value));  // Save to localStorage
    },
  }
})

export const { menuToggle } = togglemenuSlice.actions;

export default togglemenuSlice.reducer;