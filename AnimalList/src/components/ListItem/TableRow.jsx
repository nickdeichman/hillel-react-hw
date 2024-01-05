import TableData from '../TableData/TableData';
import PropTypes from 'prop-types';
const TableRow = ({ itemType, itemIcon, style }) => {
  TableRow.propTypes = {
    itemType: PropTypes.string,
    itemIcon: PropTypes.string,
    style: PropTypes.object,
  };
  TableRow.defaultProps = {
    color: 'white',
  };
  return itemType.length && itemIcon.length ? (
    <tr style={style}>
      <TableData
        style={style}
        itemType={itemType}
        itemIcon={itemIcon}
      ></TableData>
    </tr>
  ) : null;
};

export default TableRow;
