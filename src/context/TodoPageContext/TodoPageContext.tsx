import { createContext } from 'react'

import { TodoItem, TodoSubtask } from '../../types';

interface TodoContextProps {
  todos: TodoItem[],
  addTodo: (item: TodoItem) => void,
  deleteTodo: (id: number) => void,
  addTodoSubTask: (todoId: number, subtask: TodoSubtask) => void,
  deleteSubtask: (todoId: number, subtaskID: number) => void
}

export const TodoPageContext = createContext<TodoContextProps>({
  todos: [],
  addTodo: () => { /* noop */ },
  deleteTodo: () => { /* noop */ },
  addTodoSubTask: () => { /* noop */ },
  deleteSubtask: () => { /* noop */ }
});
