import React, { ReactNode } from 'react';

import styles from './styles.module.css'

interface TodoItemTypes {
  text: string
  children: ReactNode
}

function TodoItem(props: TodoItemTypes) {
  const { text, children } = props;

  return (
    <div className={styles.todoItem}>
      <div className={styles.todoItemText}>
        <h3>{ text }</h3>
      </div>
      <div>
        { children }
      </div>
    </div>
  )
}

export default TodoItem;
