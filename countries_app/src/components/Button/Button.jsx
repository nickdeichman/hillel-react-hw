import React from 'react';
import { Button as MuiBtn } from '@mui/material';

const Button = ({ onClick, className, title, variant }) => {
  return (
    <MuiBtn
      variant={variant ? variant : 'contained'}
      className={className}
      onClick={onClick}
    >
      {title}
    </MuiBtn>
  );
};

export default Button;
