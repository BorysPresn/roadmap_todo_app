import type { Todo } from '../types'

export const saveTodoToLocalStorage = (data: Todo[]): void => {
  try {
    localStorage.setItem('todos', JSON.stringify(data))
  } catch (error) {
    console.error('Ошибка при записи в localStorage')
  }
}
export const getTodosFromLocalStorage = (): Todo[] => {
  try {
    const storedTodos = localStorage.getItem('todos')
    return storedTodos ? (JSON.parse(storedTodos) as Todo[]) : []
  } catch (error) {
    console.error('Ошибка при чтении из localStorage')
    return []
  }
}
