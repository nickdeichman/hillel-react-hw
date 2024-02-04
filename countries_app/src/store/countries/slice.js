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
    selectDefaultCapital: (state) => {
      state.selectedCountry = state.countries[0] ? state.countries[0] : '';
    },
    selectDefaultTranslation: (state) => {
      state.selectedTranslation = Object.keys(state.countries[0].translations)
        ? Object.keys(state.countries[0].translations)[0]
        : '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunks.setCountries.fulfilled, (state, { payload }) => {
      state.countries = payload;
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

export const { selectCountry, selectTranslation, selectDefaultCapital, selectDefaultTranslation } = countrySlice.actions;

export default countrySlice.reducer;
