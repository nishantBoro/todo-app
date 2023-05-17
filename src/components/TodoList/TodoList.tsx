import React, { useState } from 'react';

import { TodoPageContext } from '../../context';

import { TodoItem as TodoItemType, TodoSubtask as TodoSubtaskType } from '../../types';

import { generateID } from '../../utils';

import styles from './styles.module.css';

import AddTodo from './AddTodo';
import Todos from './Todos';

function TodoList() {
  const [todos, setTodos] = useState<TodoItemType[]>([]);
  
  function addTodo(item: TodoItemType) {
    setTodos([
      ...todos,
      item
    ])
  }

  function addTodoSubTask(todoId: number, subtask: TodoSubtaskType) {
    const tobeUpdatedTodoIdx = todos.findIndex(item => item.id === todoId);
    const tobeUpdatedTodoCurr = todos[tobeUpdatedTodoIdx];

    if (tobeUpdatedTodoCurr && tobeUpdatedTodoCurr.subtasks) {
      const tobeUpdatedTodo: TodoItemType = {
        ...tobeUpdatedTodoCurr,
        subtasks: [
          ...tobeUpdatedTodoCurr.subtasks,
          subtask
        ]
      }

      todos[tobeUpdatedTodoIdx] = tobeUpdatedTodo;

      setTodos([...todos])
    } 
  }

  function deleteTodo(id: number) {
    const filteredTodos = todos.filter(item => item.id !== id);
    
    setTodos(filteredTodos)
  }

  function handleAddTodo(todoText: string) {
    if (todoText) {
      addTodo({
        id: generateID(),
        text: todoText,
        subtasks: []
      })
    }
  }
  
  return (
    <TodoPageContext.Provider
      value={{ 
        todos,
        addTodo,
        deleteTodo,
        addTodoSubTask
      }}
    >
      <AddTodo
        handleAddTodo={handleAddTodo}
      />
      <h2 
        className={styles.pageHeading}
      >
        User Todos
      </h2>
      <Todos />
    </TodoPageContext.Provider>
  )
}

export default TodoList;
