import React, { useContext } from 'react';

import { TodoPageContext } from '../../context';

import type { TodoItem as TodoItemType } from '../../types';

import TodoItemWrapper from './TodoItemWrapper';

function Todos() {

  const { todos } = useContext(TodoPageContext);
  
  return (
    <>
      {
        todos.map((item: TodoItemType) => {
          const { id, text, subtasks } = item;
      
          return (
            <TodoItemWrapper 
              id={id} 
              text={text}
              subtasks={subtasks}
            />
          )
        })
      }
    </>
  );
}

export default Todos;
