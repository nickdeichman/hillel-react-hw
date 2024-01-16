import { useEffect, useMemo, useState } from 'react';
import {
  TODOS_FILTER_ALL,
  TODOS_FILTER_PROGRESS,
  TODOS_FILTER_COMPLETED,
} from '../constants/todo';

export default function useTodoList(createdTodo, service, todosFilter) {
  const [todos, setTodos] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await service.get();
        setTodos(response.slice(0, 10));
        setTimeout(() => setLoading(false), 22000);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  useMemo(
    () =>
      todos.sort((a, b) => {
        return service.apiKey === 0
          ? b.status - a.status
          : b.completed - a.completed;
      }),
    [todos]
  );

  useEffect(() => {
    setFilteredList(todos);
  }, [todos]);

  useEffect(() => {
    const apiKey = service.apiKey === 0 ? true : false;
    switch (todosFilter) {
      case TODOS_FILTER_PROGRESS: {
        setFilteredList(() =>
          todos.filter((todo) => (apiKey ? !todo.status : !todo.completed))
        );
        break;
      }
      case TODOS_FILTER_COMPLETED: {
        setFilteredList(() =>
          todos.filter((todo) => (apiKey ? todo.status : todo.completed))
        );
        break;
      }
      default: {
        setFilteredList(todos);
        break;
      }
    }
  }, [todosFilter, todos]);

  useEffect(() => {
    if (Object.keys(createdTodo).length) {
      setTodos((prevState) => [...prevState, createdTodo]);
    }
  }, [createdTodo]);

  const handleCompleteClick = async (item) => {
    let response = service.patch
      ? await service.patch(item.id, {
          ...item,
          completed: !item.completed,
        })
      : await service.put(item.id, {
          status: !item.status,
        });
    setTodos((prevState) =>
      prevState.map((el) => {
        if (el.id === response.id) el = response;
        return el;
      })
    );
  };

  const handleDeleteButton = async (id) => {
    try {
      await service.delete(id);
      setTodos((prevState) => prevState.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditButton = async (item) => {
    let response = service.patch
      ? await service.patch(item.id, {
          ...item,
          isEditing: true,
        })
      : await service.put(item.id, {
          isEditing: true,
        });
    setTodos((prevState) =>
      prevState.map((el) => {
        if (el.id === response.id) el = response;
        return el;
      })
    );
  };
  const handleSaveButton = async (item, newTitle) => {
    let response = service.patch
      ? await service.patch(item.id, {
          ...item,
          isEditing: false,
          title: newTitle,
        })
      : await service.put(item.id, {
          isEditing: false,
          title: newTitle,
        });
    setTodos((prevState) =>
      prevState.map((el) => {
        if (el.id === response.id) el = response;
        return el;
      })
    );
  };

  const handleCancelButton = async (item) => {
    let response = service.patch
      ? await service.patch(item.id, {
          ...item,
          isEditing: false,
        })
      : await service.put(item.id, {
          isEditing: false,
        });
    setTodos((prevState) =>
      prevState.map((el) => {
        if (el.id === response.id) el = response;
        return el;
      })
    );
  };
  return [
    handleCompleteClick,
    handleCancelButton,
    handleDeleteButton,
    handleEditButton,
    handleSaveButton,
    filteredList,
    isLoading
  ];
}
