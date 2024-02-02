import { SLICE_NAME } from './constants';
import service from './../../service/countryService';

import { createAsyncThunk } from '@reduxjs/toolkit';

const thunks = {
  setCountries: createAsyncThunk(`${SLICE_NAME}/setCountries`, async () => {
    const response = await service.get();
    return response;
  }),
  deleteCountry: createAsyncThunk(
    `${SLICE_NAME}/deleteCountry`,
    async (countryId) => {
      await service.delete(countryId);
      return countryId;
    }
  ),
};

export default thunks;
