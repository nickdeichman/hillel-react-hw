import React, { useEffect, useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
const TodoForm = ({ setCreatedTodo, service }) => {
  const [newTodo, setNewTodo] = useState({ title: '' });

  useEffect(() => {
    switch (service.apiKey) {
      case 0: {
        setNewTodo((prevState) => ({
          ...prevState,
          status: false,
        }));
        break;
      }
      case 1: {
        setNewTodo((prevState) => ({
          ...prevState,
          completed: false,
        }));
        break;
      }
    }
  }, [service]);

  const handleChange = (event) => {
    setNewTodo((prevState) => ({ ...prevState, title: event.target.value }));
  };

  const handleAddTodo = async (event) => {
    event.preventDefault();
    if (newTodo.title.length) {
      let response = await service.post(newTodo);
      setCreatedTodo(response);
      setNewTodo((prevState) => ({
        ...prevState,
        title: '',
      }));
      return;
    }
  };

  const handleClearButton = () => {
    setNewTodo((prevState) => ({
      ...prevState,
      title: '',
    }));
  };

  return (
    <form onSubmit={handleAddTodo} className='add_todo_block'>
      <TextInput
        maxLength={60}
        value={newTodo.title}
        onChange={handleChange}
        placeholder='Enter todo title'
      />
      <Button className='green' value={'Add todo'} />
      <Button
        className={'red'}
        onClick={() => handleClearButton()}
        value={'Clear'}
      />
    </form>
  );
};

export default TodoForm;
