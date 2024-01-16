import { memo } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { TodoContext } from '../../context/todoContext';
import useTodoList from '../../hooks/useTodoList';
import List from '@mui/material/List';
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";



const TodoList = memo(function TodoList({ createdTodo, service, todosFilter, todosColor, completedTodosColor }) {
  const [
    handleCompleteClick,
    handleCancelButton,
    handleDeleteButton,
    handleEditButton,
    handleSaveButton,
    filteredList,
    isLoading
  ] = useTodoList(createdTodo, service, todosFilter);
  return (
    <>
      {filteredList.length ? (
        <List className='todo--list'>
          <TodoContext.Provider
            value={[
              handleCompleteClick,
              handleDeleteButton,
              handleEditButton,
              handleSaveButton,
              handleCancelButton,
            ]}
          >
            {filteredList.map((item) => (
              <TodoItem todosColor={todosColor} completedTodosColor={completedTodosColor} key={item.id} item={item} />
            ))}
          </TodoContext.Provider>
        </List>
      ) : isLoading ? 
      <Stack spacing={3}>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
      </Stack>
       : null}
    </>
  );
});

export default TodoList;
