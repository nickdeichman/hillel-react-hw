import React from 'react';
import { List } from '@mui/material';
import ChosenCountryListItem from '../ChosenCountryListItem/ChosenCountryListItem';

const ChosenCountryList = ({ data, className }) => {
  return (
    <List className={`chosen-country__list${className ? ' ' + className : ''}`}>
      {Object.keys(data)
        ? Object.keys(data).map((key, index) =>
            key !== 'id' ? (
              <ChosenCountryListItem
                key={index}
                dataKey={key}
                value={data[key]}
              />
            ) : null
          )
        : console.log(data)}
    </List>
  );
};

export default ChosenCountryList;
