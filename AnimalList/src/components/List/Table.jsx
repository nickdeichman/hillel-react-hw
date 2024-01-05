import { useState } from 'react';
import TableBody from '../TableBody/TableBody';
const Table = () => {
  let [borderWidth, setBorderWidth] = useState(0);
  let borderStyle = {
    borderWidth,
    borderColor: 'red',
    borderStyle: 'solid',
    borderSpacing: '0 1rem',
    padding: '1rem',
    fontSize: '1.3rem',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
  const increaseBorderWidth = () => {
    setBorderWidth((borderWidth += 10));
  };
  return (
    <table style={borderStyle}>
      <TableBody increaseWidthFunc={increaseBorderWidth}></TableBody>
    </table>
  );
};

export default Table;
