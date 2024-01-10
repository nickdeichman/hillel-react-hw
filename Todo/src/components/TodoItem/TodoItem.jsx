import './todoItem.scss';
import Button from '../Button/Button';
import { TodoContext } from '../TodoList/TodoList';
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
        onClickFunc={() => handleSaveButton(item, todoTitle)}
        value={'Save'}
      />
      <Button
        className={'red'}
        onClickFunc={() => {
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
        className={item.completed ? 'completed' : null}
      >
        {item.title}
      </li>
      <Button
        className={'yellow'}
        onClickFunc={() => handleEditButton(item)}
        value={'Edit'}
      />
      <Button
        className={'red'}
        onClickFunc={() => handleDeleteButton(item)}
        value={'Delete'}
      />
    </div>
  );
};

export default TodoItem;
