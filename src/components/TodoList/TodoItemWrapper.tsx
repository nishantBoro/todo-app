import React, { useContext, useState } from 'react'

import { TodoPageContext } from '../../context'

import { TodoSubtask } from '../../types';

import styles from './styles.module.css'

import { Button } from '../Button';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

import { generateID } from '../../utils';

interface TodoItemWrapperTypes {
  id: number,
  text: string,
  subtasks?: TodoSubtask[]
}

function TodoItemWrapper(props: TodoItemWrapperTypes) {
  const { id, text, subtasks } = props;

  const [isSubtaskVisible, setSubtaskVisible] = useState<boolean>(false);

  const { deleteTodo, addTodoSubTask } = useContext(TodoPageContext);

  function handleAddSubtask(todoText: string) {
    addTodoSubTask(
      id,
      {
        id: generateID(),
        text: todoText
      }
    )
  }

  return (
    <>
      <TodoItem
        text={text}
      >
        <>
          <Button
            handleClick={setSubtaskVisible.bind(null, !isSubtaskVisible)}
            className={styles.leftCta}
          >
            Show Subtasks
          </Button>
          <Button handleClick={deleteTodo.bind(null, id)}>Delete Item</Button>
        </>
      </TodoItem>
      {
        isSubtaskVisible && (
          <div className={styles.subtaskSection}>
            { 
              subtasks && subtasks.map((item: TodoSubtask) => {
                const { text } = item;

                return (
                  <TodoItem 
                    text={text}
                  >
                    <Button handleClick={deleteTodo.bind(null, id)}>Delete Item</Button>
                  </TodoItem>
                )
              })
            }
            <AddTodo
              handleAddTodo={handleAddSubtask}
              className={styles.addTodoSubtask}
              headingText="Add Subtask"
            />
          </div>
        )
      }
    </>
  )
}

export default TodoItemWrapper;
