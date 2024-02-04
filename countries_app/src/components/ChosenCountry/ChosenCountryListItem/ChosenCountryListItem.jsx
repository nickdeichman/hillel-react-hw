import React from 'react';
import { ListItem, ListItemText } from '@mui/material';
import ChosenCountryList from '../ChosenCountryList/ChosenCountryList';

const ChosenCountryListItem = ({ dataKey, value }) => {
  return (
    <ListItem className='chosen-country__list-item'>
      <>
        {!Number.isInteger(Number.parseFloat(dataKey)) ? (
          <ListItemText
            className='chosen-country__list-item__text-primary'
            primary={`${dataKey}: `}
          />
        ) : null}
        {typeof value === 'string' ? (
          <ListItemText
            className='chosen-country__list-item__text-secondary'
            primary={value}
          />
        ) : (
          <ChosenCountryList data={value} />
        )}
      </>
    </ListItem>
  );
};

export default ChosenCountryListItem;
