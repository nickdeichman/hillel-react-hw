/* eslint-disable react/prop-types */
const TableData = ({ itemType, itemIcon }) => {
  return (
    <td style={{ textTransform: 'capitalize' }}>
      {itemType}: {itemIcon}
    </td>
  );
};

export default TableData;
