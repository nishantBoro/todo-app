import React, { ChangeEvent, useState } from 'react';

import { Button } from '../Button';

import { Input } from '../Input';

import styles from './styles.module.css'

interface AddTodoTypes {
  handleAddTodo: (value: string) => void
  className?: string
}

function AddTodo({ handleAddTodo, className }: AddTodoTypes) {
  const [todoText, setTodoText] = useState('');

  function handleInputUpdate(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    setTodoText(value);
  }

  return (
    <div className={className}>
      <h3 className={styles.addTodoHeading}>Add Todo</h3>
      <Input
        placeholder='Add Todo'
        onChange={handleInputUpdate}
        className={styles.inputWrapper}
      />
      <Button 
        handleClick={handleAddTodo.bind(null, todoText)}
      >
        Add
      </Button>
    </div>
  )
}

export default AddTodo;
