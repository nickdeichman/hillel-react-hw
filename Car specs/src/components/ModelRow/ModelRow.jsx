import PropTypes from 'prop-types';
import {renderArray} from '../utils'
import './modelRow.scss';

const ModelRow = ({ models }) => {
  ModelRow.propTypes = {
    models: PropTypes.array,
  };
  return (
    <>
      {models.length
        ? models.map((model) => (
            <tr key={model.id}>
              <th className='car__model' colSpan={1}>{model.name}</th>
              {renderArray(model.collection)}
            </tr>
          ))
        : null}
    </>
  );
};

export default ModelRow;
