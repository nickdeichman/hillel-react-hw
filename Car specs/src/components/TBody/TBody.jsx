import PropTypes from 'prop-types';
import ModelRow from '../ModelRow/ModelRow';

const TBody = ({models}) => {
  TBody.propTypes = {
    models: PropTypes.array
  }
  return (
    <tbody>
      <ModelRow models={models}/>
    </tbody>
  );
};

export default TBody;
