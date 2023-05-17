import React, { ChangeEvent, useState } from 'react';

import { TodoPageContext } from '../../context';

import { TodoItem as TodoItemType, TodoSubtask as TodoSubtaskType } from '../../types';

import { generateID } from '../../utils';

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
    const tobeUpdatedTodo = todos.find(item => item.id === todoId);

    if (tobeUpdatedTodo && tobeUpdatedTodo.subtasks) {
      setTodos([
        ...todos,
        {
          ...tobeUpdatedTodo,
          subtasks: [
            ...tobeUpdatedTodo.subtasks,
            subtask
          ]
        }
      ])
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
        text: todoText
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
      <h2>Todo List</h2>
      <AddTodo
        handleAddTodo={handleAddTodo}
      />
      <Todos />
    </TodoPageContext.Provider>
  )
}

export default TodoList;
