import { createSlice } from '@reduxjs/toolkit';
import { SLICE_NAME } from './constants';
import thunks from './thunks';

const countrySlice = createSlice({
  name: SLICE_NAME,
  initialState: {
    countries: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunks.setCountries.fulfilled, (state, { payload }) => {
      state.countries = payload;
    });
  },
});

export default countrySlice.reducer;
