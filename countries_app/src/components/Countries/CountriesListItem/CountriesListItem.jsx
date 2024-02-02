import { ListItem, ListItemText } from '@mui/material';
import React from 'react';
import Button from '../../Button/Button';
import { Link } from 'react-router-dom';
import { COUNTRY_PATH } from '../../../constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { selectCountry } from '../../../store/countries/slice';
import thunks from '../../../store/countries/thunks';
import useCountriesListItem from '../../../hooks/useCountriesListItem';

const CountriesListItem = ({ country }) => {
  const { handleCountryClick, handleDeleteCountryClick } =
    useCountriesListItem(country);
  return (
    <>
      <ListItem className='country-list__item'>
        <Link
          onClick={handleCountryClick}
          to={`${COUNTRY_PATH}${country.name['official']}`}
        >
          <ListItemText
            className='country-list__item-text'
            primary={country.name['official']}
          />
        </Link>
        <Button
          onClick={handleDeleteCountryClick}
          variant='contained'
          className='country-list__item-btn'
          title={'Delete'}
        />
      </ListItem>
    </>
  );
};

export default CountriesListItem;
