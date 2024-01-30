import { Button, ListItem, ListItemText } from '@mui/material';
import React from 'react';

const CountriesListItem = ({ countryName }) => {
  return (
    <>
      <ListItem  className='country-list__item'>
        <ListItemText className='country-list__item-text' primary={countryName} />
        <Button variant='contained' className='country-list__item-btn'>Delete</Button>
      </ListItem>
    </>
  );
};

export default CountriesListItem;
