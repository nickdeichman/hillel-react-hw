import { SLICE_NAME } from "./constants";
import service from './../../service/countryService'

import { createAsyncThunk } from "@reduxjs/toolkit";

const thunks = {
  setCountries: createAsyncThunk(`${SLICE_NAME}/setCountries`, async () => {
    const response = await service.get();
    return response;
  }),
}

export default thunks;



