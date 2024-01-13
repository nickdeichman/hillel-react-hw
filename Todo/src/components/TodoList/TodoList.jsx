import { useEffect, useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { TodoContext } from '../../context/todoContext';

const TodoList = ({ createdTodo, service }) => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await service.get();
        setTodos(response.slice(0, 10));
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

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

  return (
    <>
      {todos.length ? (
        <ul className='todo--list'>
          <TodoContext.Provider
            value={[
              handleCompleteClick,
              handleDeleteButton,
              handleEditButton,
              handleSaveButton,
              handleCancelButton,
            ]}
          >
            {todos.map((item) => (
              <TodoItem key={item.id} item={item} />
            ))}
          </TodoContext.Provider>
        </ul>
      ) : null}
    </>
  );
};

export default TodoList;
