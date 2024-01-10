import { createContext, useEffect, useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './todoList.scss';
export const TodoContext = createContext();
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const request = await fetch(
            `https://jsonplaceholder.typicode.com/todos`
          ),
          response = await request.json();

        setTodos(response.slice(0, 10));
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const handleCompleteClick = (item) => {
    let tempList = [...todos];
    const index = tempList.indexOf(item);
    item.completed ? (item.completed = false) : (item.completed = true);
    tempList[index] = item;
    setTodos(tempList);
  };

  const handleDeleteButton = (item) => {
    let tempList = [...todos];
    const index = tempList.indexOf(item);
    tempList.splice(index, 1);
    setTodos(tempList);
  };

  const handleEditButton = (item) => {
    item.isEditing = true;
    let tempList = [...todos];
    const index = tempList.indexOf(item);
    tempList[index] = item;
    setTodos(tempList);
  };
  const handleSaveButton = (item, newTitle) => {
    item.title = newTitle;
    let tempList = [...todos];
    const index = tempList.indexOf(item);
    tempList[index] = item;
    setTodos(tempList);
    item.isEditing = false;
  };

  const handleCancelButton = (item) => {
    item.isEditing = false;
    let tempList = [...todos];
    const index = tempList.indexOf(item);
    tempList[index] = item;
    setTodos(tempList);
  };

  const handleChange = (event) => {
    setNewTodoTitle(event.target.value);
  };

  const handleAddTodo = () => {
    let newTodo = {
      userId: 1,
      id: todos[todos.length - 1].id + 1,
      title: newTodoTitle,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setNewTodoTitle('');
  };

  const handleClearButton = () => {
    setNewTodoTitle('');
  };

  return (
    <div className='container'>
      <div className='add_todo_block'>
        <TextInput
          maxLength={60}
          value={newTodoTitle}
          onChange={handleChange}
          placeholder='Enter todo title'
        />
        <Button
          className='green'
          onClickFunc={() => handleAddTodo()}
          value={'Add todo'}
        />
        <Button
          className={'red'}
          onClickFunc={() => handleClearButton()}
          value={'Clear'}
        />
      </div>
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
    </div>
  );
};

export default TodoList;
