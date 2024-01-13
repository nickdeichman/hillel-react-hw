import React, { useState } from 'react';
import TodoList from '../TodoList/TodoList';
import TodoForm from '../TodoForm/TodoForm';
import Button from '../Button/Button';
import mockupTodos from '../../services/mockupTodos';
import placeholderTodos from '../../services/placeholderTodos';
import './todos.scss';

const Todos = () => {
  const [createdTodo, setCreatedTodo] = useState({});
  const [isApiChosen, setIsApiChosen] = useState(false);
  const [api, setApi] = useState({});

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
    <div className='container'>
      {!isApiChosen ? (
        <>
          <h1 className='heading'>Choose database</h1>
          <Button
            value={'Mockup'}
            className={'green choose-api'}
            onClick={() => handleApiChoose(0)}
          />
          <Button
            value={'Json placeholder'}
            className={'green choose-api'}
            onClick={() => handleApiChoose(1)}
          />
        </>
      ) : (
        <>
          <TodoForm service={api} setCreatedTodo={setCreatedTodo} />
          <TodoList service={api} createdTodo={createdTodo} />
        </>
      )}
    </div>
  );
};

export default Todos;
