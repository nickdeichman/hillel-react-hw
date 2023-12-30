export const renderArray = (arr) => {
  return arr && arr.length ? (
    <td className='model__characteristics'>
      {arr.map((item, index) =>
        item ? (
          typeof item === 'object' ? (
            renderObject(item, index)
          ) : (
            <td key={index}>{item}</td>
          )
        ) : null
      )}
    </td>
  ) : null;
};
export const renderObject = (obj, index) => {
  return (
    <ul key={index}>
      {Object.entries(obj).map((entry, index) => {
        return entry[0] !== 'id' ? (
          <li key={index}>
            {entry[0]}: {entry[1]}
          </li>
        ) : null;
      })}
    </ul>
  );
};
