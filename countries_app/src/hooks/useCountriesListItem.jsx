import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCountry,
  selectDefaultCapital,
  selectDefaultTranslation,
} from '../store/countries/slice';
import thunks from '../store/countries/thunks';

const useCountriesListItem = ({ country }) => {
  const { countries } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  const selectCountryItem = () => {
    countries
      .filter((item) => item.name['official'] === country.name['official'])
      .map((country) => dispatch(selectCountry(country)));
  };
  const deleteCountry = async (id) => {
    await dispatch(thunks.deleteCountry(id));
    dispatch(selectDefaultCapital());
    dispatch(selectDefaultTranslation());
  };
  return { selectCountry: selectCountryItem, deleteCountry };
};

export default useCountriesListItem;
