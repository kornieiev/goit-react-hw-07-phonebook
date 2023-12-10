import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterChange: (state, action) => action.payload,
  },
});

export const { filterChange } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
