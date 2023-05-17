import React, { ChangeEvent, MouseEvent, useState } from 'react';

import { Button } from '../Button';

import { Input } from '../Input';

interface AddTodoTypes {
  handleAddTodo: (value: string) => void
}

function AddTodo({ handleAddTodo }: AddTodoTypes) {
  const [todoText, setTodoText] = useState('');

  function handleInputUpdate(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    setTodoText(value);
  }

  return (
    <>
      <h3>Add Todo</h3>
      <Input
        placeholder='Add Todo'
        onChange={handleInputUpdate}
      />
      <Button 
        handleClick={handleAddTodo.bind(null, todoText)}
      >
        Add
      </Button>
    </>
  )
}

export default AddTodo;
