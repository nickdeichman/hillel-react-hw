import React from 'react';
import { NAV_ITEMS as items } from '../../constants/constants';
import List from '@mui/material/List';
import NavListItem from './NavListItem/NavListItem';
import './navigation.scss'

const Navigation = () => {
  return (
    <nav className='block navigation'>
      <List>
        {items.length
          ? items.map((title, index) => (
              <NavListItem key={index} title={title} />
            ))
          : null}
      </List>
    </nav>
  );
};

export default Navigation;
