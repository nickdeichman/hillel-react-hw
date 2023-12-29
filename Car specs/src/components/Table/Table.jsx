import TBody from '../TBody/TBody';
import THead from '../THead/THead';
import { CARS } from '../constants';
const Table = () => {
  return CARS.map((item, index) => (
    <table key={index}>
      <THead brandName={item.brand} />
      <TBody models={item.models}></TBody>
    </table>
  ));
};

export default Table;
