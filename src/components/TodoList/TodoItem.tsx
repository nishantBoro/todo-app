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
      <div>
        <h3>{ text }</h3>
      </div>
      { children }
    </div>
  )
}

export default TodoItem;
