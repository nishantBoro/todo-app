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

  const { deleteTodo, addTodoSubTask, deleteSubtask } = useContext(TodoPageContext);

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
          <img 
            src="/ic_chevron.png" 
            alt="Brand"
            width="20"
            height="20"
            onClick={setSubtaskVisible.bind(null, !isSubtaskVisible)}
            className={isSubtaskVisible ? styles.chevronIconRotated : styles.chevronIcon}
          />
          <Button handleClick={deleteTodo.bind(null, id)}>Delete</Button>
        </>
      </TodoItem>
      {
        isSubtaskVisible && (
          <div className={styles.subtaskSection}>
            { 
              subtasks && subtasks.map((item: TodoSubtask) => {
                const { text, id: subtaskID } = item;

                return (
                  <TodoItem 
                    text={text}
                    key={subtaskID}
                  >
                    <Button 
                      handleClick={deleteSubtask.bind(null, id, subtaskID)}
                    >
                      Delete
                    </Button>
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
