import React from 'react';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

const Todo = () => {
    const [todo , setTodo] = React.useState([]);

    const handleClick = (text) => {
        let newTodo = {
            title : text,
            status : false,
            id : new Date().toDateString()+ text + Math.random()
    }
        setTodo([...todo , newTodo ])
    }
    let handleToogle = (id) => {
    let toggleTodo= todo.map((el) => (el.id === id? {...todo , status: !el.status} : el))
    setTodo(toggleTodo)
    }
    let handleDelete = (id) => {
    let delTodo = todo.filter((el) => el.id !== id)
    setTodo(delTodo);
    }
    
  return (
    <div>
      <AddTodo handleClick={handleClick} />
      <ul>
      {
        todo.map((el) => (<li key={el.id}> 
            <TodoItem 
            key={el.id}
            id={el.id}
            title={el.title}
            status={el.status}
            handleDelete={handleDelete}
            handleToogle={handleToogle}
            />
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo