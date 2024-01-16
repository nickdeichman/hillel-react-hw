import './button.scss';
import ButtonMui from '@mui/material/Button';
const Button = ({ value, onClick, className, type, color }) => {
  return (
    <ButtonMui color={color} variant="contained" type={type} className={className} onClick={onClick}>
      {value}
    </ButtonMui>
  );
};

export default Button;
