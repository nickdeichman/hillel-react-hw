import React, { useState, memo } from 'react';
import TodoList from '../TodoList/TodoList';
import TodoForm from '../TodoForm/TodoForm';
import Button from '../Button/Button';
import mockupTodos from '../../services/mockupTodos';
import placeholderTodos from '../../services/placeholderTodos';
import './todos.scss';
import { TODOS_FILTER_ALL, TODOS_COLOR, COMPLETED_TODOS_COLOR } from '../../constants/todo';
import useLocalStorage from '../../hooks/useLocalStorage';
import Filter from '../Filter/Filter';
import Container from '@mui/material/Container';
import ColorPicker from '../ColorPicker/ColorPicker';
import Grid from '@mui/material/Grid';


const Todos = memo(function Todos() {
  const [createdTodo, setCreatedTodo] = useState({});
  const [isApiChosen, setIsApiChosen] = useState(false);
  const [api, setApi] = useState({});
  const [todosColor, setTodosColor] = useLocalStorage(
    `todosColor`,
    TODOS_COLOR
  );
  const [completedTodosColor, setCompletedTodosColor] = useLocalStorage(`completedTodosColor`, COMPLETED_TODOS_COLOR);
  const [todosFilter, setTodosFilter] = useLocalStorage(
    `todosFilter`,
    TODOS_FILTER_ALL
  );

  const handleApiChoose = (number) => {
    console;
    switch (number) {
      case 0: {
        setApi((prevState) => mockupTodos);
        break;
      }
      case 1: {
        setApi((prevState) => placeholderTodos);
        break;
      }
    }
    setIsApiChosen(true);
  };

  return (
    <Container maxWidth='md' className='container'>
      {!isApiChosen ? (
        <>
          <h1 className='heading'>Choose database</h1>
          <Grid justifyContent={'center'} container spacing={2} pb={3}>
            <Grid item>
              <Button
                value={'Mockup'}
                className={'green choose-api'}
                onClick={() => handleApiChoose(0)}
                color='success'
              />
            </Grid>
            <Grid item>
              <Button
                value={'Json placeholder'}
                className={'green choose-api'}
                onClick={() => handleApiChoose(1)}
                color='success'
              />
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <TodoForm service={api} setCreatedTodo={setCreatedTodo} />
          <ColorPicker label={'Choose todo color in progress'} todosColor={todosColor} setTodosColor={setTodosColor} />
          <ColorPicker label={'Choose completed todo color'} todosColor={completedTodosColor} setTodosColor={setCompletedTodosColor} />
          <Filter todosFilter={todosFilter} setTodosFilter={setTodosFilter} />
          <TodoList
            service={api}
            createdTodo={createdTodo}
            todosFilter={todosFilter}
            todosColor={todosColor}
            completedTodosColor={completedTodosColor}
          />
        </>
      )}
    </Container>
  );
});

export default Todos;
