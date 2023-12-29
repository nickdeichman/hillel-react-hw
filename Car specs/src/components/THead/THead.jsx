import PropTypes from 'prop-types';
const THead = ({ brandName }) => {
  THead.propTypes = {
    brandName: PropTypes.string,
  };

  return (
    <thead>
      <tr>
        <th colSpan={2}>{brandName}</th>
      </tr>
    </thead>
  );
};

export default THead;
