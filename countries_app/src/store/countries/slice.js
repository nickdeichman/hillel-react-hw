import { createSlice } from '@reduxjs/toolkit';
import { SLICE_NAME } from './constants';
import thunks from './thunks';

const countrySlice = createSlice({
  name: SLICE_NAME,
  initialState: {
    countries: [],
    selectedCountry: '',
    selectedTranslation: '',
  },
  reducers: {
    selectCountry: (state, { payload }) => {
      state.selectedCountry = payload;
    },
    selectTranslation: (state, { payload }) => {
      state.selectedTranslation = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunks.setCountries.fulfilled, (state, { payload }) => {
      state.countries = payload;
      state.selectedCountry = payload[0];
      state.selectedTranslation = Object.keys(payload[0].translations)
        ? Object.keys(payload[0].translations)[0]
        : '';
    });
    builder.addCase(thunks.deleteCountry.fulfilled, (state, { payload }) => {
      state.countries = state.countries.filter(
        (country) => country.id !== payload
      );
      state.selectedCountry = state.countries[0];
      state.selectedTranslation = Object.keys(state.countries[0].translations)
        ? Object.keys(state.countries[0].translations)[0]
        : '';
    });
  },
});

export const { selectCountry, selectTranslation } = countrySlice.actions;

export default countrySlice.reducer;
