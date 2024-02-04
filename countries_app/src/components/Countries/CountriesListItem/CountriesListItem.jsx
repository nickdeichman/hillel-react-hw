import { ListItem, ListItemText } from '@mui/material';
import React from 'react';
import Button from '../../Button/Button';
import { Link } from 'react-router-dom';
import { COUNTRY_PATH } from '../../../constants/constants';
import useCountriesListItem from '../../../hooks/useCountriesListItem';

const CountriesListItem = ({ country }) => {
  const { selectCountryItem, deleteCountry } = useCountriesListItem({
    country,
  });
  const handleDeleteClick = () => deleteCountry(country.id);
  const handleSelectCountryClick = () => selectCountryItem();

  return (
    <>
      <ListItem className='country-list__item'>
        <Link
          onClick={handleSelectCountryClick}
          to={`${COUNTRY_PATH}${country.name['official']}`}
        >
          <ListItemText
            className='country-list__item-text'
            primary={country.name['official']}
          />
        </Link>
        <Button
          onClick={handleDeleteClick}
          variant='contained'
          className='country-list__item-btn'
          title={'Delete'}
        />
      </ListItem>
    </>
  );
};

export default CountriesListItem;
