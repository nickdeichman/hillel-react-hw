import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { NavLink } from 'react-router-dom';

const NavListItem = ({ title }) => {
  return (
    <NavLink to={title === 'Home' ? `/` : title.toLowerCase()}>
      <ListItem>
        <ListItemText primary={title} />
      </ListItem>
    </NavLink>
  );
};

export default NavListItem;
