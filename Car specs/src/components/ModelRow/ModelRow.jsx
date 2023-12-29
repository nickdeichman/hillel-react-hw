import PropTypes from 'prop-types';

const ModelRow = ({ models }) => {
  ModelRow.propTypes = {
    models: PropTypes.array,
  };
  return (
    <>
      {models.length
        ? models.map((model) => (
            <tr key={model.id}>
              <th colSpan={1}>{model.name}</th>
              <tr style={{ display: 'flex', flexDirection: 'column' }}>
                <td>Version: Citycarver</td>
                <td>Year: 2019</td>
                <td>Horsepower: 95</td>
                <td>Engine: 999</td>
              </tr>
            </tr>
          ))
        : null}
    </>
  );
  // {
  //   models.length
  //     ? models.map((model) => {
  //         return (

  //         );
  //       })
  //     : null;
  // }
};

export default ModelRow;
