import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCountry } from '../store/countries/slice';
import thunks from '../store/countries/thunks';

const useCountriesListItem = ({ country }) => {
  const { countries } = useSelector((state) => state.countries);
  const dispatch = useDispatch();


  const handleCountryClick = () => {
    countries
      .filter((item) => item.name['official'] === country.name['official'])
      .map((country) => dispatch(selectCountry(country)));
  };
  const handleDeleteCountryClick = () => {
    dispatch(thunks.deleteCountry(country.id));
  };
  return { handleCountryClick, handleDeleteCountryClick };
};

export default useCountriesListItem;
