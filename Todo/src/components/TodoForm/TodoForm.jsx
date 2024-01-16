import React, { memo } from 'react';
import TextInput from '../TextInput/TextInput';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import useTodoForm from '../../hooks/useTodoForm';
import Tooltip from '@mui/material/Tooltip';

const TodoForm = memo(function TodoForm({ setCreatedTodo, service }) {
  const [handleAddTodo, handleClearButton, handleChange, newTodo] = useTodoForm(
    setCreatedTodo,
    service
  );

  return (
    <Box p={2.5} component='form' onSubmit={handleAddTodo} className='add_todo_block'>
      <TextInput
        maxLength={60}
        value={newTodo.title}
        onChange={handleChange}
        placeholder='Enter todo title'
      />
      <Tooltip title='Add todo'>
        <AddIcon
          fontSize='large'
          className='green-btn'
          onClick={handleAddTodo}
        />
      </Tooltip>
      <Tooltip title='Clear field'>
        <DeleteSweepIcon
          fontSize='large'
          onClick={() => handleClearButton()}
          className='red-btn'
        />
      </Tooltip>
    </Box>
  );
});

export default TodoForm;
