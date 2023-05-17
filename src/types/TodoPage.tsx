export interface TodoSubtask {
  id: number,
  text: string
}

export interface TodoItem {
  id: number,
  text: string,
  subtasks?: TodoSubtask[]
}
