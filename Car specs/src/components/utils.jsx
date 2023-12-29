const renderArray = (arr) => {
  return arr.length ? 
  <ul>
    {arr.map((item, index) => 
      <li key={index}></li>
    )}
  </ul>
}