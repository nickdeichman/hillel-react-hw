import './todoItem.scss';
import Button from '../Button/Button';
import { TodoContext } from '../../context/todoContext';
import { useContext, useState } from 'react';
import TextInput from '../TextInput/TextInput';

const TodoItem = ({ item }) => {
  const [
    handleCompleteClick,
    handleDeleteButton,
    handleEditButton,
    handleSaveButton,
    handleCancelButton,
  ] = useContext(TodoContext);
  const [todoTitle, setTodoTitle] = useState(item.title);

  const handleChange = (event) => {
    setTodoTitle(event.target.value);
  };

  return item.isEditing ? (
    <div className='list__item'>
      <TextInput onChange={handleChange} placeholder={todoTitle} />
      <Button
        className={'green'}
        onClick={() => handleSaveButton(item, todoTitle)}
        value={'Save'}
      />
      <Button
        className={'red'}
        onClick={() => {
          handleCancelButton(item);
          setTodoTitle(item.title);
        }}
        value={'Cancel'}
      />
    </div>
  ) : (
    <div className='list__item'>
      <li
        onClick={() => handleCompleteClick(item)}
        className={item.completed || item.status ? 'completed' : null}
      >
        {item.title}
      </li>
      <Button
        className={'yellow'}
        onClick={() => handleEditButton(item)}
        value={'Edit'}
      />
      <Button
        className={'red'}
        onClick={() => handleDeleteButton(item.id)}
        value={'Delete'}
      />
    </div>
  );
};

export default TodoItem;
