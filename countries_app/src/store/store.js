import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countries/slice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {},
    }),
});

export default store;
