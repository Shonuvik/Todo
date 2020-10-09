import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const novoTodos = [todo, ...todos];

    setTodos(novoTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, novaTarefa) => {
    if (!novaTarefa.text || /^\s*$/.test(novaTarefa.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? novaTarefa : item)));
  };

  const removeTodo = id => {
    const deletar = [...todos].filter(todo => todo.id !== id);

    setTodos(deletar);
  };

  const completeTodo = id => {
    let atualizarTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(atualizarTodos);
  };

  return (
    <>
    <h1></h1>
    <br></br>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
