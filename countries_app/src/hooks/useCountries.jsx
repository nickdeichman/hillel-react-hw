import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import thunks from './../store/countries/thunks';

const useCountries = () => {
  const { countries } = useSelector((state) => state.countries);


  return { countries };
};

export default useCountries;
