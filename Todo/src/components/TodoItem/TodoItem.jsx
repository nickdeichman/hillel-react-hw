import './todoItem.scss';
import Button from '../Button/Button';
import { TodoContext } from '../../context/todoContext';
import { useContext, useState } from 'react';
import TextInput from '../TextInput/TextInput';
import ListItem from '@mui/material/ListItem';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import Tooltip from '@mui/material/Tooltip';
import { memo } from 'react';

const TodoItem = memo(function TodoItem({ item, todosColor, completedTodosColor }) {
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
      <ListItem>
        <TextInput
          sx={{ width: '100%' }}
          onChange={handleChange}
          placeholder={todoTitle}
          variant='outlined'
        />
      </ListItem>
      <Tooltip title='Save changes'>
      <SaveIcon
        className='green-btn'
        onClick={() => handleSaveButton(item, todoTitle)}
      />
      </Tooltip>
      <Tooltip title='Cancel changes'>
      <CancelIcon
        className={'red-btn'}
        onClick={() => {
          handleCancelButton(item);
          setTodoTitle(item.title);
        }}
      />
      </Tooltip>
    </div>
  ) : (
    <div className='list__item'>
      <ListItem
        onClick={() => handleCompleteClick(item)}
        className={item.completed || item.status ? 'completed' : null}
        sx={item.completed || item.status ? {color: completedTodosColor} : {color: todosColor}}
      >
        {item.title}
      </ListItem>
      <Tooltip title='Edit'>
        <EditNoteIcon
          className='edit-btn'
          onClick={() => handleEditButton(item)}
        />
      </Tooltip>
      <Tooltip title='Delete'>
        <DeleteIcon
          className='red-btn'
          onClick={() => handleDeleteButton(item.id)}
        />
      </Tooltip>
    </div>
  );
});

export default TodoItem;
