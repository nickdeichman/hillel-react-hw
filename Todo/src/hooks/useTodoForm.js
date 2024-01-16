import React, { useEffect, useState } from 'react';

const useTodoForm = (setCreatedTodo, service) => {
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
    /^(?:[a-zA-Z0-9\sа-яА-Я]*)$/.test(event.target.value) ? 
    setNewTodo((prevState) => ({ ...prevState, title: event.target.value })) : '';
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
  return [handleAddTodo, handleClearButton, handleChange, newTodo];
};

export default useTodoForm;
