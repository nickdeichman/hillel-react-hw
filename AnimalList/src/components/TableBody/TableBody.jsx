import TableRow from '../ListItem/TableRow';
import { animals } from '../../constants/constants';
import { useEffect, useRef, useState } from 'react';

// eslint-disable-next-line react/prop-types
const TableBody = ({ increaseWidthFunc }) => {
  const [list, setList] = useState(animals);
  let countRef = useRef(0);

  let setActive = () => {
    const inactiveItems = list.filter((item) => !item.isActive);
    if (inactiveItems.length === 0) {
      return;
    }
    let tempList = list.slice();
    let random = Math.floor(Math.random() * tempList.length);
    if (!tempList[random].isActive) {
      tempList[random].isActive = true;
      countRef.current += 1;
      setList(tempList);
      if (
        countRef.current === list.length ||
        countRef.current === Math.floor(list.length / 2)
      ) {
        increaseWidthFunc();
      }
    } else {
      setActive();
    }
  };

  useEffect(() => {
    let interval = setInterval(() => {
      setActive();
      if (countRef.current === list.length) {
        clearInterval(interval);
      }
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [list]);

  let activeItemStyle = {
    color: 'green',
    fontWeight: 'bold',
  };

  return (
    <tbody>
      {list.length
        ? list.map((item, index) => {
            return item.isActive ? (
              <TableRow
                style={activeItemStyle}
                key={index}
                itemType={item.type}
                itemIcon={item.icon}
              />
            ) : (
              <TableRow key={index} itemType={item.type} itemIcon={item.icon} />
            );
          })
        : null}
    </tbody>
  );
};

export default TableBody;
