import React, { useContext } from 'react';

import { TodoPageContext } from '../../context';

import type { TodoItem as TodoItemType } from '../../types';

import TodoItemWrapper from './TodoItemWrapper';

import styles from './styles.module.css';

function Todos() {

  const { todos } = useContext(TodoPageContext);
  
  return (
    <div className={styles.todosWrapper}>
      {
        todos.map((item: TodoItemType) => {
          const { id, text, subtasks } = item;
      
          return (
            <TodoItemWrapper 
              key={id}
              id={id} 
              text={text}
              subtasks={subtasks}
            />
          )
        })
      }
    </div>
  );
}

export default Todos;
